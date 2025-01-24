// "use client"
// import Link from "next/link";
// import { signOut } from 'next-auth/react';
// import { Button } from "antd";
// import SignInUI from '@/components/page/auth/signin'

// export default function Home() {
//   return (
//     <div className="col-6 mx-auto text-center py-2 d-flex flex-column gap-2">
//       <Link href={"/auth/signin"}>Login</Link>
//       <Link href={"/rfq/post"}>RFQ POST</Link>
//       <Link href={"/rfq/search"}>RFQ Search</Link>
//       <Link href={"/dashboard"}>Dashboard</Link>
//       <Button onClick={()=>signOut({callbackUrl:"/auth/signin"})} >Log Out</Button>
//     </div>
    
//   );
// }
// "use client"
// import React from "react";
// import DashboardHome from "@/components/page/dashboard/page";
// function Page() {
//     return (<DashboardHome />)
//   }
  
//   export default Page

// "use client";
// import Link from "next/link";
// import { Button } from "antd";

// export default function Home() {
//   return (
//     <div
//       className="d-flex justify-content-center align-items-center vh-100"
//       style={{
//         backgroundImage: `url('https://maxwell.vn/wp-content/uploads/2024/05/Import-Export-Services.jpg')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         textAlign: "center",
//         color: "#fff",
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: "rgba(0, 0, 0, 0.65)", // Dark overlay for better readability
//           padding: "100px",
//           borderRadius: "10px",
//         }}
//       >
//         <h1>Welcome to Freightant</h1>
//         <p>
//           Simplify your freight and logistics operations with Freightant. We are
//           here to make your journey seamless and efficient.
//         </p>
//         <Link href={"/dashboard"}>
//           <Button type="primary" size="large">
//             Continue to Dashboard
//           </Button>
//         </Link>
//       </div>
//     </div>
//   );
// }
// "use client";

// import Layout from "@/app/auth/layout";
// import Signin from "./auth/signin/page"; // Adjust the path as needed

// export default function Home() {
//   return (
//     <Layout>
//       <Signin />
//       </Layout>
//   );
// }
// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation"; // Use next/navigation instead of next/router
// import { getSession } from "next-auth/react";
// import Layout from "@/app/auth/layout";
// import Signin from "./auth/signin/page"; // Adjust the path as needed

// export default function Home() {
//   const router = useRouter();

//   useEffect(() => {
//     const checkProfileStatus = async () => {
//       try {
//         const session = await getSession();

//         if (session) {
//           const token = session?.user?.email;

//           const response = await fetch(
//             "https://freightant-api.onrender.com/api/user/profileStatus",
//             {
//               method: "GET",
//               headers: {
//                 Authorization: `Bearer ${token}`,
//               },
//             }
//           );

//           if (response.ok) {
//             const data = await response.json();

//             // Redirect based on profile status
//             if (data.profileStatus === "incomplete") {
//               router.replace("/onboarduser");
//             } else if (data.profileStatus === "verified") {
//               router.replace("/dashboard");
//             } else {
//               console.error("Unknown profile status");
//             }
//           } else {
//             console.error("Failed to check profile status");
//           }
//         } else {
//           console.log("No session found");
//         }
//       } catch (error) {
//         console.error("Error during profile status check:", error);
//       }
//     };

//     checkProfileStatus();
//   }, [router]);

//   return (
//     <Layout>
//       <Signin />
//     </Layout>
//   );
// }

"use client";

import { useEffect } from "react";
import { signOut } from "next-auth/react"; // Import NextAuth's signOut method
import Layout from "@/app/auth/layout";
import Signin from "./auth/signin/page"; // Adjust the path as needed

export default function Home() {
  useEffect(() => {
    // Clear the session data by signing out the user
    signOut({ redirect: false }); // `redirect: false` ensures it doesn't reload the page
    localStorage.removeItem("profileStatus"); // Remove profile status if stored locally
  }, []);

  return (
    <Layout>
      <Signin />
    </Layout>
  );
}
