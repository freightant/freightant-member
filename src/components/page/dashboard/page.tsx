'use client';

import React, { useState } from "react";

type FilterState = {
  mode: string;
  tradeType: string;
  status: string;
};

type ShipmentData = {
  rfqNumber: string;
  status: string;
  tradeType: string;
  loadingPort: string;
  dischargePort: string;
  createdAt: string;
  closingDate: string;
  quotationCount: number;
};

const DashboardHome = () => {
  const [filters, setFilters] = useState<FilterState>({
    mode: "Sea-FCL",
    tradeType: "Export",
    status: "Awarded",
  });

  const [shipments, setShipments] = useState<ShipmentData[]>([]);
  const [selectedRow, setSelectedRow] = useState<string | null>(null); // Track selected row

  const handleFilterChange = (filterName: keyof FilterState, value: string) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterName]: value }));
  };

  const filterButtonStyle = (isSelected: boolean) => ({
    height: "36px",
    minWidth: "100px",
    padding: "0 12px",
    border: "1px solid #ddd",
    borderRadius: "20px",
    backgroundColor: isSelected ? "#6e44ff" : "white",
    color: isSelected ? "white" : "black",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    textAlign: "center" as "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const handleSubmit = async () => {
    try {
      const requestBody = {
        modeOfShipment: filters.mode,
        tradeType: filters.tradeType,
        status: filters.status,
      };

      const response = await fetch(
        "https://freightant-api.onrender.com/api/rfq-route/show-rfq",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setShipments(data); // Set the fetched data into state
    } catch (error) {
      console.error("Error fetching shipments:", error);
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

        {/* Status */}
        <div style={{ backgroundColor: "white", padding: "16px", borderRadius: "20px" }}>
          <div
            style={{
              fontSize: "16px",
              color: "black",
              textAlign: "left",
              margin: "-40px 10px",
            }}
          >
            Status
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <button
              style={filterButtonStyle(filters.status === "all")}
              onClick={() => handleFilterChange("status", "all")}
            >
              All
            </button>
            <button
              style={filterButtonStyle(filters.status === "online")}
              onClick={() => handleFilterChange("status", "online")}
            >
              Live
            </button>
            <button
              style={filterButtonStyle(filters.status === "awarded")}
              onClick={() => handleFilterChange("status", "awarded")}
            >
              Awarded
            </button>
            <button
              style={filterButtonStyle(filters.status === "Closed")}
              onClick={() => handleFilterChange("status", "Closed")}
            >
              Closed
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <div
  style={{
    marginTop: "",
    textAlign: "right",
    display: "flex", // Use Flexbox
    alignItems: "center", // Center the button vertically
    justifyContent: "flex-end", // Keep the button aligned to the right
    height: "100px", // Set a height for the container to test vertical centering
  }}
>
  <button
    onClick={handleSubmit}
    style={{
      height: "36px", // Same as filter buttons
      minWidth: "100px", // Same as filter buttons
      padding: "0 12px", // Same padding as filter buttons
      border: "none", // Remove any border
      outline: "none", // Remove the default focus outline
      borderRadius: "20px", // Same border radius
      backgroundColor: "#6e44ff", // Custom background color for Submit button
      color: "white", // Text color
      fontSize: "14px", // Same font size as filter buttons
      fontWeight: "500", // Same font weight
      cursor: "pointer", // Pointer cursor on hover
      textAlign: "center", // Center align text
      display: "flex", // Flexbox for alignment
      alignItems: "center", // Center align items vertically
      justifyContent: "center", // Center align items horizontally
      transition: "background-color 0.3s ease", // Smooth background transition
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
          marginTop: "0px",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                color: "#0A0049",
                padding: "10px",
                textAlign: "left" as "left",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              RFQ Number
            </th>
            <th
              style={{
                color: "#0A0049",
                padding: "10px",
                textAlign: "left" as "left",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              Trade Type
            </th>
            <th
              style={{
                color: "#0A0049",
                padding: "10px",
                textAlign: "left" as "left",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              Port Pair
            </th>
            <th
              style={{
                color: "#0A0049",
                padding: "10px",
                textAlign: "left" as "left",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              RFQ Status
            </th>
            
            <th
              style={{
                color: "#0A0049",
                padding: "10px",
                textAlign: "left" as "left",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              Quotes Received
            </th>
            <th
              style={{
                color: "#0A0049",
                padding: "10px",
                textAlign: "left" as "left",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              RFQ Created On
            </th>
            <th
              style={{
                color: "#0A0049",
                padding: "10px",
                textAlign: "left" as "left",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              RFQ Closing Date
            </th>
          </tr>
        </thead>
        <tbody style={{ paddingTop: '2px', paddingBottom: '2px',}}>
  {shipments.map((shipment) => (
    <tr
      key={shipment.rfqNumber}
      onClick={() => setSelectedRow(shipment.rfqNumber)} // Set selected row
      style={{
        backgroundColor: selectedRow === shipment.rfqNumber ? '#F6F4FF' : 'white',
        border: selectedRow === shipment.rfqNumber ? '1px solid #6A37F4' : 'none',
        cursor: 'pointer', // Add cursor pointer to indicate it's clickable
       
        height: '50px', // Set a fixed height
      }}
    >
      <td style={{  color: 'black', textAlign: 'center' }}>{shipment.rfqNumber}</td>
      <td style={{ padding: '4px', color: 'black', textAlign: 'center' }}>{shipment.tradeType}</td>
      <td style={{ padding: '4px', color: 'black', textAlign: 'center' }}>{`${shipment.loadingPort} - ${shipment.dischargePort}`}</td>
      <td style={{ padding: '4px', color: 'black', textAlign: 'center' }}>{shipment.status}</td>
      <td style={{ padding: '4px', color: 'black', textAlign: 'center' }}>{shipment.quotationCount}</td>
      <td style={{ padding: '4px', color: 'black', textAlign: 'center' }}>{shipment.createdAt}</td>
      <td style={{ padding: '4px', color: 'black', textAlign: 'center' }}>{shipment.closingDate}</td>
    </tr>
  ))}
</tbody>

      </table>

      {/* Drawer */}
      {selectedRow && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            right: '0',
            width: '400px',
            height: '100vh',
            backgroundColor: 'white',
            boxShadow: '-4px 0 8px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
          }}
        >
          <button
            onClick={() => setSelectedRow(null)}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              backgroundColor: 'transparent',
              border: 'none',
              fontSize: '20px',
              color: '#6e44ff',
              cursor: 'pointer',
            }}
          >
            &#10005; {/* Close Icon */}
          </button>
          <h2 style={{ color: 'black' }}>Shipment Details</h2>
          {/* Find the selected shipment data */}
          {shipments
            .filter((shipment) => shipment.rfqNumber === selectedRow)
            .map((shipment) => (
              <div key={shipment.rfqNumber} style={{ color: 'black' }}>
                <p><strong>RFQ Number:</strong> {shipment.rfqNumber}</p>
                <p><strong>Status:</strong> {shipment.status}</p>
                <p><strong>Trade Type:</strong> {shipment.tradeType}</p>
                <p><strong>Loading Port:</strong> {shipment.loadingPort}</p>
                <p><strong>Discharge Port:</strong> {shipment.dischargePort}</p>
                <p><strong>Created At:</strong> {shipment.createdAt}</p>
                <p><strong>Closing Date:</strong> {shipment.closingDate}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default DashboardHome;
