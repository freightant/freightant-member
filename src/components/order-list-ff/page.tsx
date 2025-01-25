'use client';

import React, { useState } from "react";
import { message } from "antd";
import {  showOrderFF } from "@/network/endpoints";

type FilterState = {
  mode: string;
  tradeType: string;
};

type OrderData = {
  rfqNumber: string;
  orderNumber: string;
  orderDate: string;
  portPair: string;
  equipment: string;
  forwarder: string;
  quotationNumber: string;
  forwarderContact: string;
};

const OrderListFF = () => {
  const [filters, setFilters] = useState<FilterState>({
    mode: "Sea-FCL",
    tradeType: "Export",
  });

  const [orders, setOrders] = useState<OrderData[]>([]);
  const [selectedRow, setSelectedRow] = useState<string | null>(null); // Track selected row

  const handleFilterChange = (filterName: keyof FilterState, value: string) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterName]: value }));
  };


  const filterButtonStyle = (isSelected: boolean) => ({
    height: "36px", minWidth: "100px", padding: "0 12px", border: "1px solid #ddd", borderRadius: "20px", backgroundColor: isSelected ? "#6e44ff" : "white", 
    color: isSelected ? "white" : "black", fontSize: "14px", fontWeight: "500", cursor: "pointer", textAlign: "center" as "center", display: "flex", 
    alignItems: "center", justifyContent: "center"
  });

  const handleSubmit = async () => {
    const requestBody = {
      modeOfShipment: filters.mode, // e.g., "Sea-FCL"
      tradeType: filters.tradeType, // e.g., "Import"
    };
  
    try {
      const response = await showOrderFF(requestBody);
  
      if (response.code) {
        // Map response data into a more usable format
        const mappedData = response.data.map((item: any) => ({
          rfqNumber: item.rfqNumber || "N/A",
          orderNumber: item.orderNumber || "N/A",
          orderDate: item.orderDate
            ,
          portPair: `${item.portOfLoading || "N/A"} - ${
            item.portOfDischarge || "N/A"
          }`,
          equipment: item.container?.length
            ? item.container
                .map(
                  (cont: {
                    name: string;
                    quantity: number;
                  }) => `${cont.name} * ${cont.quantity}`
                )
                .join(", ")
            : "N/A",
          forwarder: item.quotationerOrganization || "N/A",
          quotationNumber: item.quotationNumber || "N/A",
          forwarderContact:
            item.pointOfContact?.[0]?.email || "Contact Not Available",
          cargoDetails: item.container?.length
            ? item.container.map((cont: any) => ({
                type: cont.cargo.typee || "N/A",
                weight: cont.cargo.weight || "N/A",
                dimensions: cont.cargo.dimensions
                  ? `${cont.cargo.dimensions.length}x${cont.cargo.dimensions.breadth}x${cont.cargo.dimensions.height}`
                  : "N/A",
                remarks: cont.cargo.remarks || "N/A",
              }))
            : [],
          rfqStatus: item.rfqStatus || "N/A",
        }));
  
        // Update the state with the processed data
        setOrders(mappedData);
      } else {
        message.error(response.message || "Failed to fetch orders.");
      }
    } catch (err: any) {
      console.error("Error fetching data:", err);
      message.error(err.message || "Failed to fetch orders.");
    }
  };
  

  return (
    <div
      style={{
        padding: "24px",
        fontFamily: "Arial, sans-serif",
        height: "100vh",
        overflowY: "auto",
      }}
    >
      {/* Filters */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {/* Mode of Shipment */}
        <div style={{ backgroundColor: "white", padding: "16px", borderRadius: "20px" }}>
          <div
            style={{
              fontSize: "16px",
              color: "black",
              textAlign: "left" as "left",
              margin: "-40px 10px",
            }}
          >
            Mode of Shipment
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <button
              style={filterButtonStyle(filters.mode === "Sea-FCL")}
              onClick={() => handleFilterChange("mode", "Sea-FCL")}
            >
              Sea-FCL
            </button>
            <button
              style={filterButtonStyle(filters.mode === "Sea-LCL")}
              onClick={() => handleFilterChange("mode", "Sea-LCL")}
            >
              Sea-LCL
            </button>
            <button
              style={filterButtonStyle(filters.mode === "Air")}
              onClick={() => handleFilterChange("mode", "Air")}
            >
              Air
            </button>
            <button
              style={filterButtonStyle(filters.mode === "Cross Border Trucking")}
              onClick={() => handleFilterChange("mode", "Cross Border Trucking")}
            >
              Cross Border Trucking
            </button>
          </div>
        </div>

        {/* Trade Type */}
        <div style={{ backgroundColor: "white", padding: "16px", borderRadius: "20px" }}>
          <div
            style={{
              fontSize: "16px",
              color: "black",
              textAlign: "left" as "left",
              margin: "-40px 10px",
            }}
          >
            Trade Type
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <button
              style={filterButtonStyle(filters.tradeType === "Export")}
              onClick={() => handleFilterChange("tradeType", "Export")}
            >
              Export
            </button>
            <button
              style={filterButtonStyle(filters.tradeType === "Import")}
              onClick={() => handleFilterChange("tradeType", "Import")}
            >
              Import
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <div
          style={{
            marginTop: "",
            textAlign: "right",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            height: "100px",
          }}
        >
          <button
            onClick={handleSubmit}
            style={{
              height: "36px",
              minWidth: "100px",
              padding: "0 12px",
              border: "none",
              outline: "none",
              borderRadius: "20px",
              backgroundColor: "#6e44ff",
              color: "white",
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#4a2ccd")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#6e44ff")}
          >
            Submit
          </button>
        </div>
      </div>

      {/* Table */}
    
       <table
  style={{
    width: "100%",
    borderCollapse: "collapse",
  }}
>
<thead>
  <tr>
    <th
      style={{
        color: "#0A0049",
        padding: "10px",
        textAlign: "center",
        fontSize: "14px",
        fontWeight: "600",
        width: "11%", // Adjust width as needed
      }}
    >
      Quotation No.
    </th>
    <th
      style={{
        color: "#0A0049",
        padding: "10px",
        textAlign: "center",
        fontSize: "14px",
        fontWeight: "600",
        width: "11%", // Adjust width as needed
      }}
    >
      Order Number
    </th>
    <th
      style={{
        color: "#0A0049",
        padding: "10px",
        textAlign: "center",
        fontSize: "14px",
        fontWeight: "600",
        width: "11%", // Adjust width as needed
      }}
    >
      Order Date
    </th>
    <th
      style={{
        color: "#0A0049",
        padding: "10px",
        textAlign: "center",
        fontSize: "14px",
        fontWeight: "600",
        width: "11%", // Adjust width as needed
      }}
    >
      Port Pair
    </th>
   
    <th
      style={{
        color: "#0A0049",
        padding: "10px",
        textAlign: "center",
        fontSize: "14px",
        fontWeight: "600",
        width: "11%", // Adjust width as needed
      }}
    >
      Equipment
    </th>
    <th
      style={{
        color: "#0A0049",
        padding: "10px",
        textAlign: "center",
        fontSize: "14px",
        fontWeight: "600",
        width: "11%", // Adjust width as needed
      }}
    >
      MBL Tracking
    </th>
    <th
      style={{
        color: "#0A0049",
        padding: "10px",
        textAlign: "center",
        fontSize: "14px",
        fontWeight: "600",
        width: "11%", // Adjust width as needed
      }}
    >
      Customer
    </th>
    <th
      style={{
        color: "#0A0049",
        padding: "10px",
        textAlign: "center",
        fontSize: "14px",
        fontWeight: "600",
        width: "11%", // Adjust width as needed
      }}
    >
      Customer Contact
    </th>
  </tr>
</thead>

        <tbody>
          {orders.map((order) => (
          <tr
          key={order.rfqNumber}
          onClick={() => setSelectedRow(order.rfqNumber)} // Set selected row
          style={{
            backgroundColor:
              selectedRow === order.rfqNumber ? "#F6F4FF" : "white",
            border:
              selectedRow === order.rfqNumber ? "1px solid #6A37F4" : "none",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            color: "black", // Set text color to black
          }}
        >
        
              <td style={{ padding: "10px", textAlign: "center" }}>
                {order.quotationNumber}
              </td>
              <td style={{ padding: "10px", textAlign: "center" }}>
                {order.orderNumber}
              </td>
              <td style={{ padding: "10px", textAlign: "center" }}>
                {order.orderDate}
              </td>
              <td style={{ padding: "10px", textAlign: "center" }}>
                {order.portPair}
              </td>
              <td style={{ padding: "10px", textAlign: "center" }}>
                {order.equipment}
              </td>
              <td style={{ padding: "10px", textAlign: "center" }}>
                {order.quotationNumber}
              </td>
              <td style={{ padding: "10px", textAlign: "center" }}>
                {order.forwarder}
              </td>
              <td style={{ padding: "10px", textAlign: "center" }}>
                {order.forwarderContact}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedRow && (
  <div
    style={{
      position: 'fixed',
      top: '0',
      right: '0',
      width: '600px',
      height: '100vh',
      backgroundColor: '#fff',
      boxShadow: '-4px 0 12px rgba(0, 0, 0, 0.15)',
      zIndex: 1000,
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto',
    }}
  >
    {/* Close Button */}
    <button
      onClick={() => setSelectedRow(null)}
      style={{
        position: 'absolute',
        top: '-32px',
        right: '16px',
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '20px',
        color: '#000000',
        cursor: 'pointer',
      }}
    >
      &#10005;
    </button>

    {/* Title */}
    <h2
      style={{
        color: '#0A0049',
        marginBottom: '32px',
        fontSize: '20px',
        fontWeight: 600,
      }}
    >
      Shipment Details
    </h2>

    {/* Content */}
    {orders
      .filter((shipment) => shipment.rfqNumber === selectedRow)
      .map((shipment) => (
        <div key={shipment.rfqNumber}>
          {[
            { label: 'RFQ Number', value: shipment.rfqNumber },
            { label: 'Order Number', value: shipment.orderNumber },
            { label: 'Order Date', value: shipment.orderDate },
            { label: 'Port Pair', value: shipment.portPair},
           
            {
              label: 'Equipment',
              value:
                filters.mode === 'Sea-FCL'
                  ? shipment.equipment || '-'
                  : filters.mode === 'Sea-LCL'
                  ? shipment.equipment || '-'
                  : filters.mode === 'Air'
                  ? shipment.equipment || '-'
                  : filters.mode === 'Cross Border Trucking'
                  ? 'Truck type unavailable'
                  : '',
            },
            
            { label: 'Forwarder', value: shipment.forwarder },
            { label: 'Quaotation Number', value: shipment.quotationNumber },
            { label: 'Forwarder Contact', value: shipment.forwarderContact},
          ].map((item, index) => (
            <div
              key={index}
              style={{
                height: '40px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#f9f9f9',
                padding: '0px 18px',
                marginBottom: '14px',
                borderRadius: '10px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                transition: 'background-color 0.2s, transform 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F6F4FF';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f9f9f9';
                e.currentTarget.style.color = '#000';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <span style={{ fontWeight: 500, color: '#000' }}>
                {item.label}
              </span>
              <span style={{ color: '#000' }}>{item.value}</span>
            </div>
          ))}
        </div>
      ))}
  </div>
)}


    </div>
  );
};

export default OrderListFF;
