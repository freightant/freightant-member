// 'use client';

// import { AuthHOC } from "@/components/supportcomponents/auth/UnAuthHOC";
// import React, { useState } from "react";

// type FilterState = {
//   mode: string;
//   tradeType: string;
//   status: string;
// };

// type ShipmentData = {
//   rfqNumber: string;
//   status: string;
//   tradeType: string;
//   loadingPort: string;
//   dischargePort: string;
//   createdAt: string;
//   closingDate: string;
//   quotationCount: number;
//   modeOfShipment: string;
//   placeOfLoading: Record<string, any>;
//   placeOfUnLoading: Record<string, any>;
//   container: ContainerData[]; // Add this field
// };

// type ContainerData = {
//   cargo: CargoData;
//   _id: string;
// };

// type CargoData = {
//   category: string[];
//   hsCode: string[];
// };


// const DashboardHome = () => {
//   const [filters, setFilters] = useState<FilterState>({
//     mode: "Sea-FCL",
//     tradeType: "Export",
//     status: "Awarded",
//   });

//   const [shipments, setShipments] = useState<ShipmentData[]>([]);
//   const [selectedRow, setSelectedRow] = useState<string | null>(null); // Track selected row

//   const handleFilterChange = (filterName: keyof FilterState, value: string) => {
//     setFilters((prevFilters) => ({ ...prevFilters, [filterName]: value }));
//   };

//   const filterButtonStyle = (isSelected: boolean) => ({
//     height: "36px",
//     minWidth: "100px",
//     padding: "0 12px",
//     border: "1px solid #ddd",
//     borderRadius: "20px",
//     backgroundColor: isSelected ? "#6e44ff" : "white",
//     color: isSelected ? "white" : "black",
//     fontSize: "14px",
//     fontWeight: "500",
//     cursor: "pointer",
//     textAlign: "center" as "center",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   });

//   const handleSubmit = async () => {
//     try {
//       const requestBody = {
//         modeOfShipment: filters.mode,
//         tradeType: filters.tradeType,
//         status: filters.status,
//       };

//       const response = await fetch(
//         "https://freightant-api.onrender.com/api/rfq-route/show-rfq",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(requestBody),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }

//       const data = await response.json();
//       setShipments(data); // Set the fetched data into state
//     } catch (error) {
//       console.error("Error fetching shipments:", error);
//     }
//   };

  

//   return (
//     <div
//       style={{
//         padding: "24px",
//         fontFamily: "Arial, sans-serif",
//         height: "100vh",
//         overflowY: "auto",
//       }}
//     >
//       {/* Filters */}
//       <div
//         style={{
//           display: "flex",
//           gap: "16px",
//           alignItems: "flex-start",
//           flexWrap: "wrap",
//         }}
//       >
//         {/* Mode of Shipment */}
//         <div style={{ backgroundColor: "white", padding: "16px", borderRadius: "20px" }}>
//           <div
//             style={{
//               fontSize: "16px",
//               color: "black",
//               textAlign: "left" as "left",
//               margin: "-40px 10px",
//             }}
//           >
//             Mode of Shipment
//           </div>
//           <div style={{ display: "flex", gap: "12px" }}>
//             <button
//               style={filterButtonStyle(filters.mode === "Sea-FCL")}
//               onClick={() => handleFilterChange("mode", "Sea-FCL")}
//             >
//               Sea-FCL
//             </button>
//             <button
//               style={filterButtonStyle(filters.mode === "Sea-LCL")}
//               onClick={() => handleFilterChange("mode", "Sea-LCL")}
//             >
//               Sea-LCL
//             </button>
//             <button
//               style={filterButtonStyle(filters.mode === "Air")}
//               onClick={() => handleFilterChange("mode", "Air")}
//             >
//               Air
//             </button>
//             <button
//               style={filterButtonStyle(filters.mode === "Cross Border Trucking")}
//               onClick={() => handleFilterChange("mode", "Cross Border Trucking")}
//             >
//               Cross Border Trucking
//             </button>
//           </div>
//         </div>

//         {/* Trade Type */}
//         <div style={{ backgroundColor: "white", padding: "16px", borderRadius: "20px" }}>
//           <div
//             style={{
//               fontSize: "16px",
//               color: "black",
//               textAlign: "left" as "left",
//               margin: "-40px 10px",
//             }}
//           >
//             Trade Type
//           </div>
//           <div style={{ display: "flex", gap: "12px" }}>
//             <button
//               style={filterButtonStyle(filters.tradeType === "Export")}
//               onClick={() => handleFilterChange("tradeType", "Export")}
//             >
//               Export
//             </button>
//             <button
//               style={filterButtonStyle(filters.tradeType === "Import")}
//               onClick={() => handleFilterChange("tradeType", "Import")}
//             >
//               Import
//             </button>
//           </div>
//         </div>

//         {/* Status */}
//         <div style={{ backgroundColor: "white", padding: "16px", borderRadius: "20px" }}>
//           <div
//             style={{
//               fontSize: "16px",
//               color: "black",
//               textAlign: "left",
//               margin: "-40px 10px",
//             }}
//           >
//             Status
//           </div>
//           <div style={{ display: "flex", gap: "12px" }}>
//             <button
//               style={filterButtonStyle(filters.status === "all")}
//               onClick={() => handleFilterChange("status", "all")}
//             >
//               All
//             </button>
//             <button
//               style={filterButtonStyle(filters.status === "online")}
//               onClick={() => handleFilterChange("status", "online")}
//             >
//               Live
//             </button>
//             <button
//               style={filterButtonStyle(filters.status === "awarded")}
//               onClick={() => handleFilterChange("status", "awarded")}
//             >
//               Awarded
//             </button>
//             <button
//               style={filterButtonStyle(filters.status === "Closed")}
//               onClick={() => handleFilterChange("status", "Closed")}
//             >
//               Closed
//             </button>
//           </div>
//         </div>

//         {/* Submit Button */}
//         <div
//   style={{
//     marginTop: "",
//     textAlign: "right",
//     display: "flex", // Use Flexbox
//     alignItems: "center", // Center the button vertically
//     justifyContent: "flex-end", // Keep the button aligned to the right
//     height: "100px", // Set a height for the container to test vertical centering
//   }}
// >
//   <button
//     onClick={handleSubmit}
//     style={{
//       height: "36px", // Same as filter buttons
//       minWidth: "100px", // Same as filter buttons
//       padding: "0 12px", // Same padding as filter buttons
//       border: "none", // Remove any border
//       outline: "none", // Remove the default focus outline
//       borderRadius: "20px", // Same border radius
//       backgroundColor: "#6e44ff", // Custom background color for Submit button
//       color: "white", // Text color
//       fontSize: "14px", // Same font size as filter buttons
//       fontWeight: "500", // Same font weight
//       cursor: "pointer", // Pointer cursor on hover
//       textAlign: "center", // Center align text
//       display: "flex", // Flexbox for alignment
//       alignItems: "center", // Center align items vertically
//       justifyContent: "center", // Center align items horizontally
//       transition: "background-color 0.3s ease", // Smooth background transition
//     }}
//     onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#4a2ccd")}
//     onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#6e44ff")}
//   >
//     Submit
//   </button>
// </div>

//       </div>

//       {/* Table */}
//     {/* Table */}
// <table
//   style={{
//     width: "100%",
//     borderCollapse: "collapse",
//     marginTop: "0px",
//   }}
// >
//   <thead>
//     <tr>
//       <th
//         style={{
//           color: "#0A0049",
//           padding: "10px",
//           textAlign: "center",
//           fontSize: "14px",
//           fontWeight: "600",
//         }}
//       >
//         RFQ Number
//       </th>
//       <th
//         style={{
//           color: "#0A0049",
//           padding: "10px",
//           textAlign: "center",
//           fontSize: "14px",
//           fontWeight: "600",
//         }}
//       >
//         Trade Type
//       </th>
//       <th
//         style={{
//           color: "#0A0049",
//           padding: "10px",
//           textAlign: "center",
//           fontSize: "14px",
//           fontWeight: "600",
//         }}
//       >
//         Port Pair
//       </th>
//       <th
//         style={{
//           color: "#0A0049",
//           padding: "10px",
//           textAlign: "center",
//           fontSize: "14px",
//           fontWeight: "600",
//         }}
//       >
//         RFQ Status
//       </th>
//       {/* Added dynamic column header based on filters.mode */}
//       <th
//         style={{
//           color: "#0A0049",
//           padding: "10px",
//           textAlign: "center",
//           fontSize: "14px",
//           fontWeight: "600",
//         }}
//       >
//         {filters.mode === "Sea-FCL"
//           ? "Equipment"
//           : filters.mode === "Sea-LCL"
//           ? "MT/CBM"
//           : filters.mode === "Air"
//           ? "Chargeable Weight (Kg)"
//           : filters.mode === "Cross Border Trucking"
//           ? "Truck Type"
//           : ""}
//       </th>
//       <th
//         style={{
//           color: "#0A0049",
//           padding: "10px",
//           textAlign: "center",
//           fontSize: "14px",
//           fontWeight: "600",
//         }}
//       >
//         RFQ Created On
//       </th>
//       <th
//         style={{
//           color: "#0A0049",
//           padding: "10px",
//           textAlign: "center",
//           fontSize: "14px",
//           fontWeight: "600",
//         }}
//       >
//         RFQ Closing Date
//       </th>
//     </tr>
//   </thead>
//   <tbody style={{  }}>
//     {shipments.map((shipment) => (

//       <tr
//         key={shipment.rfqNumber}
//         onClick={() => setSelectedRow(shipment.rfqNumber)} // Set selected row
//         style={{
//           backgroundColor:
//             selectedRow === shipment.rfqNumber ? "#F6F4FF" : "white",
//           border:
//             selectedRow === shipment.rfqNumber ? "1px solid #6A37F4" : "none",
//           cursor: "pointer", // Add cursor pointer to indicate it's clickable

          
//           transition: "background-color 0.3s ease", 
//         }}
//       >
//         <td style={{ color: "black", textAlign: "center" }}>
//           {shipment.rfqNumber}
//         </td>
//         <td style={{  color: "black", textAlign: "center" }}>
//           {shipment.tradeType}
//         </td>
//         <td style={{ color: "black", textAlign: "center" }}>
//           {`${shipment.loadingPort} - ${shipment.dischargePort}`}
//         </td>
//         <td style={{ textAlign: 'center', padding: '8px' }}>
//   <div
//     style={{
//       color:
//         shipment.status === 'closed'
//           ? '#A5ABB4'
//           : shipment.status === 'awarded'
//           ? '#16A149' // Text color for 'awarded' status
//           : '#FF6C02', // Default text color for other statuses
//       backgroundColor:
//         shipment.status === 'online'
//           ? '#FFE7D1'
//           : shipment.status === 'awarded'
//           ? '#E8FFF3'
//           : shipment.status === 'closed'
//           ? '#F6F4FF'
//           : 'white', // Default background color
//       borderRadius: '40px',
//        // Adjust the height as needed
//       display: 'flex',
//       height: '30px',
      
//       justifyContent: 'center',
//       alignItems: 'center',  // Vertically center the text
//       padding: '5px', // Optional: Padding for better spacing inside the div
//     }}
//   >
//     {shipment.status}
//   </div>
// </td>



//         {/* Added dynamic column value based on filters.mode */}
//         <td style={{ color: "black", textAlign: "center" }}>
//   {filters.mode === "Sea-FCL"
//     ? shipment.container?.[0]?._id || "-" // Replace with equipment if available
//     : filters.mode === "Sea-LCL"
//     ? shipment.container?.[0]?.cargo?.category?.[0] || "-" // Replace with mtCbm if available
//     : filters.mode === "Air"
//     ? shipment.container?.[0]?.cargo?.hsCode?.[0] || "-" // Replace with chargeableWeight if available
//     : filters.mode === "Cross Border Trucking"
//     ? "Truck type unavailable" // Replace with shipment.truckType if available
//     : ""}
// </td>

//         <td style={{  color: "black", textAlign: "center" }}>
//           {shipment.createdAt}
//         </td>
//         <td style={{  color: "black", textAlign: "center" }}>
//           {shipment.closingDate}
//         </td>
//       </tr>
      
//     ))}
//   </tbody>
// </table>


//       {/* Drawer */}
//       {/* Drawer */}
// {selectedRow && (
//   <div
//     style={{
//       position: 'fixed',
//       top: '0',
//       right: '0',
//       width: '400px',
//       height: '100vh',
//       backgroundColor: '#f9f9f9',
//       boxShadow: '-4px 0 12px rgba(0, 0, 0, 0.15)',
//       zIndex: 1000,
//       padding: '20px',
//       display: 'flex',
//       flexDirection: 'column',
//       overflowY: 'auto',
//     }}
//   >
//     <button
//       onClick={() => setSelectedRow(null)}
//       style={{
//         position: 'absolute',
//         top: '16px',
//         right: '16px',
//         backgroundColor: 'transparent',
//         border: 'none',
//         fontSize: '24px',
//         color: '#6e44ff',
//         cursor: 'pointer',
//       }}
//     >
//       &#10005; {/* Close Icon */}
//     </button>
//     <h2 style={{ color: '#333', marginBottom: '16px', fontSize: '20px' }}>Shipment Details</h2>
//     {/* Display selected shipment data */}
//     {shipments
//       .filter((shipment) => shipment.rfqNumber === selectedRow)
//       .map((shipment) => (
//         <div key={shipment.rfqNumber} style={{ marginBottom: '20px' }}>
//           {[
//             { label: 'RFQ Number', value: shipment.rfqNumber },
//             { label: 'Status', value: shipment.status },
//             { label: 'Trade Type', value: shipment.tradeType },
//             { label: 'Loading Port', value: shipment.loadingPort },
//             { label: 'Discharge Port', value: shipment.dischargePort },
//             { label: 'Created At', value: shipment.createdAt },
//             { label: 'Closing Date', value: shipment.closingDate },
//           ].map((item, index) => (
//             <div
//               key={index}
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 backgroundColor: '#fff',
//                 padding: '10px 15px',
//                 borderRadius: '8px',
//                 marginBottom: '10px',
//                 boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
//                 transition: 'background-color 0.2s',
//                 cursor: 'pointer',
//               }}
//               onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f1f1f1')}
//               onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#fff')}
//             >
//               <span style={{ fontWeight: 600, color: '#555' }}>{item.label}</span>
//               <span style={{ color: '#333' }}>{item.value}</span>
//             </div>
//           ))}
//         </div>
//       ))}
//   </div>
// )}

//     </div>
//   );
// };

// export default  AuthHOC(DashboardHome) ;
'use client';

import { AuthHOC } from "@/components/supportcomponents/auth/UnAuthHOC";
import React, { useState } from "react";


const DashboardHome = () => {
  
  return (
    <div
    className=""
    style={{
      marginTop: "3rem",
      maxWidth: "1200px",
      marginInline: "auto",
      overflowY: "auto",
      maxHeight: "500px",
    }}
  >
    <div
      style={{ borderRadius: "16px" }}
      className="flex bg-white border border-gray-300 rounded-2xl shadow-md text-center w-full p-5"
    >
      {/* Centered Heading */}
      <h1 className="text-2xl font-bold text-black pt-5 pb-4">
        <span role="img" aria-label="Hi emoji">👋</span> Welcome to Freightant!
      </h1>
  
      {/* Flex Container for Two Sections */}
      <div className="flex flex-wrap justify-between gap-5 w-full">
        {/* Steps for Exporters/Importers Section */}
        <section
          className="p-4 mb-4"
          style={{
            flex: "1", // Ensures both sections take equal space
            minWidth: "48%", // Ensures that both sections maintain proper space
            borderRadius: "16px",
            border: "2px solid #d1d5db", // Light gray border
            backgroundColor: "#f9fafb", // Light background color
          }}
        >
          <h3 className="font-semibold text-xl mb-3 text-black">
            Steps for Exporters/Importers
          </h3>
          <div className="mb-2 text-black">
            <strong>Create RFQ</strong>: Start by creating a Request for Quotation (RFQ) to get quotes from suppliers.
          </div>
          <div className="mb-2 text-black">
            <strong>See RFQ in RFQ List</strong>: View your RFQ in the RFQ list to track its status and responses.
          </div>
          <div className="mb-4 text-black">
            <strong>See Order List</strong>: Once the RFQ is finalized, check your order list to view all confirmed orders.
          </div>
        </section>
  
        {/* Steps for Freight Forwarders Section */}
        <section
          className="p-4"
          style={{
            flex: "1", // Ensures both sections take equal space
            minWidth: "48%", // Ensures that both sections maintain proper space
            borderRadius: "16px",
            border: "2px solid #d1d5db", // Light gray border
            backgroundColor: "#f9fafb", // Light background color
          }}
        >
          <h3 className="font-semibold text-xl mb-3 text-black">
            Steps for Freight Forwarders
          </h3>
          <div className="mb-2 text-black">
            <strong>Search RFQ</strong>: Search for the RFQs posted by exporters/importers to find relevant ones.
          </div>
          <div className="mb-2 text-black">
            <strong>See Quotation List</strong>: Check the list of quotations received for your RFQ.
          </div>
          <div className="mb-4 text-black">
            <strong>See Order List</strong>: Track and confirm orders once they have been finalized.
          </div>
        </section>
      </div>
    </div>
  </div>
  

  
  );
};

export default  AuthHOC(DashboardHome) ;