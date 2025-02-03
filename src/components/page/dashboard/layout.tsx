"use client";

import { assetsRootPath } from '@/components/utils';
import { getSessionCache } from '@/network/endpoints';
import { 
    EnvironmentOutlined,
    FileDoneOutlined,
    FileAddOutlined,
    RiseOutlined,
    FileSearchOutlined,
    LogoutOutlined,
    OrderedListOutlined,
    ProductOutlined,
    SearchOutlined,
    UnorderedListOutlined 
} from '@ant-design/icons';
import { Col, Dropdown, Input, Layout, Menu, Space } from 'antd';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getUserRole } from '@/network/endpoints';






const { Sider, Content, Header } = Layout;

// Define a union type for roles
type Role = "FF" | "exporter/importer";

export const DashboardUI: React.FC<{ sideUI?: React.ReactNode, children: React.ReactNode }> = ({ sideUI, children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [user, setUser] = useState<any>({});
    const [filteredMenuItems, setFilteredMenuItems] = useState<any[]>([]);
    const [role, setRole] = useState<Role | null>(null);

    useEffect(() => {
        // Fetch user session
        getSessionCache()
            .then(r => {
                if (r?.user) {
                    setUser(r.user);
                }
            })
            .catch(r => {
                console.error("Error fetching session details:", r);
            });
    }, []);

    useEffect(() => {
        // Fetch user role dynamically
        async function fetchRole() {
            try {
                const result = await getUserRole();
                console.log("Fetched Role:", result); // Debugging API response

                if (result.code && result.data) {
                    const userRole = result.data as Role; // Assuming the API returns "FF" or "exporter/importer"
                    setRole(userRole);

                    // Set menu items based on the role
                    const items = userRole === "exporter/importer" ? menuItemsForExporterImporter : menuItemsForFF;
                    setFilteredMenuItems(items);
                } else {
                    console.error("Error fetching role:", result.message);
                    setRole(null);
                    setFilteredMenuItems([]); // Fallback to no menu items
                }
            } catch (error) {
                console.error("Error in fetchRole:", error);
                setFilteredMenuItems([]); // Handle fetch errors gracefully
            }
        }

        fetchRole();
    }, []);
    return (
        <Layout style={layoutStyle}>
            <Sider
                width={270}
                style={siderStyle}
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
                breakpoint="md"
                trigger={null} // No default trigger, to use hover-based expansion
                onMouseEnter={() => setCollapsed(false)} // Expand on hover
                onMouseLeave={() => setCollapsed(true)} // Collapse when hover leaves
            >
                {collapsed ? (
                    <div className="demo-logo-vertical my-2 mb-2" style={{ paddingLeft: "6px", width: "42px", overflow: 'hidden' }}>
                        <img src={assetsRootPath + "image/logos/vector.png"} alt="Freightant Logo" height={"32"} />
                    </div>
                ) : (
                    <div className="d-none d-md-block freightant-logo d-flex justify-content-center my-2 mb-2">
                        <img src={assetsRootPath + "image/logos/vector.png"} alt="Freightant Logo" height={"31"} />
                    </div>
                )}
                <Menu
                    defaultSelectedKeys={['']}
                    mode="inline"
                    items={filteredMenuItems}
                    className="my-4 px-2"
                />
            </Sider>
            <Layout>
                <Header style={headerStyle}>
                    <Space className='d-flex justify-content-between align-items-center col-12 col-md-11 col-lg-10 mx-auto'>
                        <Input
                            style={{
                                minWidth: "30em",
                                width: "40em",
                                backgroundColor: "white",
                                marginLeft: "-120px",
                            }}
                            placeholder="Search Input"
                            variant="filled"
                            size="large"
                            prefix={<SearchOutlined />}
                        />
                        <Space size={"large"}>
                            <h4 className="text-primary2 m-0">
                                Hi {user?.name} {role}
                            </h4>
                            <Dropdown menu={{ items: [{ label: "Log Out", key: "01", icon: <LogoutOutlined />, onClick: () => signOut({ callbackUrl: "/auth/signin" }) }] }}>
                                <img
                                    className="rounded-circle img-thumbnail"
                                    src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=300&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                                    style={{ width: 45, height: 45 }}
                                />
                            </Dropdown>
                        </Space>
                    </Space>
                </Header>
                <Content style={contentStyle}>
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};



const menuItemsForExporterImporter = [
    // {
    //     key: '1',
    //     label: <Link href={"/dashboard"}>Dashboard</Link>,
    //     icon: <ProductOutlined />,
    // },
    // {
    //     key: '2',
    //     label: 'Spot Market',
    //     icon: <RiseOutlined />,
    // },
    {
        key: '4',
        label: <Link href={"/rfq/post"}>Create RFQ</Link>,
        icon: <FileAddOutlined />,
    },
    {
        key: '5',
        label: <Link href={"/rfq-list"}>RFQ List</Link>,
        icon: <UnorderedListOutlined />,
    },
    {
        key: '6',
        label: <Link href={"/order-list"}>Order List</Link>,
        icon: <FileDoneOutlined />,
    },
    // {
    //     key: '7',
    //     label: 'Shipment Status',
    //     icon: <EnvironmentOutlined />,
    // },
];

const menuItemsForFF = [
    // {
    //     key: '1',
    //     label: <Link href={"/dashboard"}>Dashboard</Link>,
    //     icon: <ProductOutlined />,
    // },
    // {
    //     key: '2',
    //     label: 'Spot Market',
    //     icon: <RiseOutlined />,
    // },
    {
        key: '3',
        label: <Link href={"/rfq/search"}>Search RFQ</Link>,
        icon: <FileSearchOutlined />,
    },
    {
        key: '4',
        label: <Link href={"/quotation-list"}>Quotation List</Link>,
        icon: <UnorderedListOutlined />,
    },
    {
        key: '6',
        label: <Link href={"/order-list-ff"}>Order List</Link>,
        icon: <FileDoneOutlined />,
    },
    // {
    //     key: '7',
    //     label: 'Shipment Status',
    //     icon: <EnvironmentOutlined />,
    // },
];

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 34,
    lineHeight: '64px',
    backgroundColor: '#F3F6FF',
    paddingTop: 16,
    zIndex: 1,
};

const contentStyle: React.CSSProperties = {
    // textAlign: 'center',
    minHeight: 120,
    lineHeight: '60px',
    color: '#fff',
    backgroundColor: '#F3F6FF',
};

const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#fff',
    overflow: "auto",
    minHeight: "100vh",
    padding: "15px 0px 15px 0px",
    borderRadius: "0 45px 45px 0px",
    transition: "width 0.3s ease",
};

const layoutStyle = {
    borderRadius: 0,
    overflow: 'hidden',
    width: '100%',
    height: '100vh',
    maxWidth: '100%',
};



// const menuItems = [
//     {
//         key: '1',
//         label:  <Link href={"/dashboard"}>Dashboard</Link>,
//         icon: <ProductOutlined /> ,
//     },
//     {
//         key: '2',
//         label: 'Spot Market',
//         icon: <RiseOutlined />,
//     },
//     {
//         key: '3',
//         label: <Link href={"/rfq/search"}>Search RFQ</Link>,
//         icon: <FileSearchOutlined />,
//     },
//     {
//         key: '4',
//         label: <Link href={"/rfq/post"}>Create RFQ</Link>,
//         icon: <FileAddOutlined />,
//     },
//     {
//         key: '5',
//         label:  <Link href={"/rfq-list"}>RFQ List</Link>,
//         icon: <UnorderedListOutlined />,
//     },
//     {
//         key: '6',
//         label:  <Link href={"/order-list"}>Order List</Link>,
//         icon: <FileDoneOutlined />,
//     },
//     {
//         key: '7',
//         label: 'Shipment Status',
//         icon: <EnvironmentOutlined />,
//     }
// ]


// "use client";
// import { assetsRootPath } from "@/components/utils";
// import { getSessionCache } from "@/network/endpoints";
// import {
//   EnvironmentOutlined,
//   FileDoneOutlined,
//   FileAddOutlined,
//   RiseOutlined,
//   FileSearchOutlined,
//   UnorderedListOutlined,
//   LogoutOutlined,
//   OrderedListOutlined,
//   SearchOutlined,
// } from "@ant-design/icons";
// import { Col, Dropdown, Input, Layout, Menu, Space } from "antd";
// import { signOut } from "next-auth/react";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";

// const { Sider, Content, Header } = Layout;

// export const DashboardUI: React.FC<{ sideUI?: React.ReactNode; children: React.ReactNode }> = ({ sideUI, children }) => {
//   const [collapsed, setCollapsed] = useState(false);
//   const [user, setUser] = useState<any>({});
//   const [menuItems, setMenuItems] = useState<any[]>([]);

//   useEffect(() => {
//     getSessionCache()
//       .then((r) => {
//         if (r?.user && r.user.name) {  // Check if user data exists and has a name
//           setUser(r.user);
//           setMenuItems(getMenuItemsByRole(r.user.role));
//         } else {
//           // Handle case when no user data is found
//           setUser({});
//           setMenuItems([]);
//         }
//       })
//       .catch(() => {
//         // Handle any errors here, like logging out or default state
//         setUser({});
//         setMenuItems([]);
//       });
//   }, []);
  

//   return (
//     <Layout style={layoutStyle}>
//       <Sider
//         width={270}
//         style={siderStyle}
//         collapsed={collapsed}
//         onCollapse={(value) => setCollapsed(value)}
//         breakpoint="md"
//         trigger={null}
//         onMouseEnter={() => setCollapsed(false)} // Expand on hover
//         onMouseLeave={() => setCollapsed(true)} // Collapse when hover leaves
//       >
//         {collapsed ? (
//           <div className="demo-logo-vertical my-2 mb-2" style={{ paddingLeft: "6px", width: "42px", overflow: "hidden" }}>
//             <img src={assetsRootPath + "image/logos/vector.png"} alt="Freightant Logo" height={"32"} />
//           </div>
//         ) : (
//           <div className="d-none d-md-block freightant-logo d-flex justify-content-center my-2 mb-2">
//             <img src={assetsRootPath + "image/logos/vector.png"} alt="Freightant Logo" height={"31"} />
//           </div>
//         )}
//         <Menu defaultSelectedKeys={["1"]} mode="inline" items={menuItems} className="my-4 px-2" />
//       </Sider>
//       <Layout>
//         <Header style={headerStyle}>
//           <Space className="d-flex justify-content-between align-items-center col-12 col-md-11 col-lg-10 mx-auto">
//             <Input
//               style={{ minWidth: "30em", width: "40em", backgroundColor: "white", marginLeft: "-120px" }}
//               placeholder="Search Input"
//               variant="filled"
//               size="large"
//               prefix={<SearchOutlined />}
//             />
//             <Space size={"large"}>
//               <h4 className="text-primary2 m-0">Hi {user?.name}</h4>
//               <Dropdown
//                 menu={{
//                   items: [
//                     {
//                       label: "Log Out",
//                       key: "01",
//                       icon: <LogoutOutlined />,
//                       onClick: () => signOut(),
//                     },
//                   ],
//                 }}
//               >
//                 <img
//                   className="rounded-circle img-thumbnail"
//                   src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=300&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
//                   style={{ width: 45, height: 45 }}
//                 />
//               </Dropdown>
//             </Space>
//           </Space>
//         </Header>
//         <Content style={contentStyle}>{children}</Content>
//       </Layout>
//     </Layout>
//   );
// };

// // Helper Function to Get Menu Items Based on Role
// const getMenuItemsByRole = (role: string | null | undefined) => {
//     if (role && typeof role === 'string') {
//       if (role === "EI") {
//         return [
//           { key: "1", label: <Link href={"/dashboard"}>Dashboard</Link>, icon: <OrderedListOutlined /> },
//           { key: "2", label: "Spot Market", icon: <RiseOutlined /> },
//           { key: "3", label: <Link href={"/rfq/post"}>Create RFQ</Link>, icon: <FileAddOutlined /> },
//           { key: "4", label: <Link href={"/rfq-list"}>RFQ List</Link>, icon: <UnorderedListOutlined /> },
//           { key: "5", label: <Link href={"/order-list"}>Order List</Link>, icon: <FileDoneOutlined /> },
//           { key: "6", label: "Shipment Status", icon: <EnvironmentOutlined /> },
//         ];
//       } else if (role === "FF") {
//         return [
//           { key: "1", label: <Link href={"/dashboard"}>Dashboard</Link>, icon: <OrderedListOutlined /> },
//           { key: "2", label: "Spot Market", icon: <RiseOutlined /> },
//           { key: "3", label: <Link href={"/rfq/search"}>Search RFQ</Link>, icon: <FileSearchOutlined /> },
//           { key: "4", label: <Link href={"/quotation-list"}>Quotation List</Link>, icon: <UnorderedListOutlined /> },
//           { key: "5", label: <Link href={"/order-list"}>Order List</Link>, icon: <FileDoneOutlined /> },
//           { key: "6", label: "Shipment Status", icon: <EnvironmentOutlined /> },
//         ];
//       }
//     }
//     return []; // Fallback in case role is not a valid string
//   };
  

// const headerStyle: React.CSSProperties = {
//   textAlign: "center",
//   color: "#fff",
//   height: 64,
//   paddingInline: 34,
//   lineHeight: "64px",
//   backgroundColor: "#F3F6FF",
//   paddingTop: 16,
//   zIndex: 1,
// };

// const contentStyle: React.CSSProperties = {
//   textAlign: "center",
//   minHeight: 120,
//   lineHeight: "120px",
//   color: "#fff",
//   backgroundColor: "#F3F6FF",
// };

// const siderStyle: React.CSSProperties = {
//   textAlign: "center",
//   color: "#fff",
//   backgroundColor: "#fff",
//   overflow: "auto",
//   minHeight: "100vh",
//   padding: "15px 0px 15px 00px",
//   borderRadius: "0 45px 45px 0px",
//   transition: "width 0.3s ease",
// };

// const layoutStyle = {
//   borderRadius: 0,
//   overflow: "hidden",
//   width: "100%",
//   height: "100vh",
//   maxWidth: "100%",
// };

