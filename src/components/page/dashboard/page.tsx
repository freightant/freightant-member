"use client";

import React, { useState } from "react";

type FilterState = {
  mode: string;
  tradeType: string;
  status: string;
};

type ShipmentData = {
  id: number;
  rfqNumber: string;
  tradeType: string;
  portPair: string;
  equipment: string;
  rfqStatus: string;
  quotesReceived: number;
  rfqCreatedOn: string;
  rfqClosingDate: string;
};

const DashboardHome = () => {
  const [filters, setFilters] = useState<FilterState>({
    mode: "Sea-LCL",
    tradeType: "",
    status: "",
  });

  const [shipments, setShipments] = useState<ShipmentData[]>([
    {
      id: 1,
      rfqNumber: "RFQ001",
      tradeType: "Export",
      portPair: "NYC - London",
      equipment: "20' Container",
      rfqStatus: "Live",
      quotesReceived: 3,
      rfqCreatedOn: "2024-12-01",
      rfqClosingDate: "2024-12-15",
    },
    {
      id: 2,
      rfqNumber: "RFQ002",
      tradeType: "Import",
      portPair: "LA - Tokyo",
      equipment: "40' Container",
      rfqStatus: "Awarded",
      quotesReceived: 2,
      rfqCreatedOn: "2024-12-05",
      rfqClosingDate: "2024-12-18",
    },
    {
      id: 3,
      rfqNumber: "RFQ003",
      tradeType: "Export",
      portPair: "Chicago - Shanghai",
      equipment: "20' Container",
      rfqStatus: "Closed",
      quotesReceived: 4,
      rfqCreatedOn: "2024-11-25",
      rfqClosingDate: "2024-12-10",
    },
    // Add more rows as needed
  ]);

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

  const filteredData = shipments.filter((shipment) => {
    const modeMatch = filters.mode ? shipment.tradeType === filters.mode : true;
    const tradeTypeMatch = filters.tradeType
      ? shipment.tradeType === filters.tradeType
      : true;
    const statusMatch = filters.status ? shipment.rfqStatus === filters.status : true;

    return modeMatch && tradeTypeMatch && statusMatch;
  });

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        height: "100vh",
        overflowY: "auto",
      }}
    >
      {/* Filters */}
      <div
        style={{
          display: "flex",
          gap: "32px",
          alignItems: "flex-start",
          
          flexWrap: "wrap",
        }}
      >
        {/* Mode of Shipment */}
        <div>
          <div
            style={{
              fontSize: "16px",
              color: "black",
             
              textAlign: "left" as "left",
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
        <div>
          <div
            style={{
              fontSize: "16px",
              color: "black",
             
              textAlign: "left" as "left",
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
        <div>
          <div
            style={{
              fontSize: "16px",
              color: "black",
              
              textAlign: "left" as "left",
            }}
          >
            Status
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <button
              style={filterButtonStyle(filters.status === "All")}
              onClick={() => handleFilterChange("status", "All")}
            >
              All (10)
            </button>
            <button
              style={filterButtonStyle(filters.status === "Live")}
              onClick={() => handleFilterChange("status", "Live")}
            >
              Live (5)
            </button>
            <button
              style={filterButtonStyle(filters.status === "Awarded")}
              onClick={() => handleFilterChange("status", "Awarded")}
            >
              Awarded (3)
            </button>
            <button
              style={filterButtonStyle(filters.status === "Closed")}
              onClick={() => handleFilterChange("status", "Closed")}
            >
              Closed (2)
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
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
              Equipment
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
              RFQ Created on
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
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((shipment) => (
              <tr
                key={shipment.id}
                style={{
                  height: "56px",
                  backgroundColor: "white",
                  color: "black",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = "1px solid #6A37F4";
                  e.currentTarget.style.backgroundColor = "#F6F4FF";
                  e.currentTarget.style.color = "#0A0049";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = "none";
                  e.currentTarget.style.backgroundColor = "white";
                  e.currentTarget.style.color = "black";
                }}
              >
                <td style={{ padding: "10px", fontSize: "14px" }}>
                  {shipment.rfqNumber}
                </td>
                <td style={{ padding: "10px", fontSize: "14px" }}>
                  {shipment.tradeType}
                </td>
                <td style={{ padding: "10px", fontSize: "14px" }}>
                  {shipment.portPair}
                </td>
                <td style={{ padding: "10px", fontSize: "14px" }}>
                  {shipment.equipment}
                </td>
                <td style={{ padding: "10px", fontSize: "14px" }}>
                  {shipment.rfqStatus}
                </td>
                <td style={{ padding: "10px", fontSize: "14px" }}>
                  {shipment.quotesReceived}
                </td>
                <td style={{ padding: "10px", fontSize: "14px" }}>
                  {shipment.rfqCreatedOn}
                </td>
                <td style={{ padding: "10px", fontSize: "14px" }}>
                  {shipment.rfqClosingDate}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={8} style={{ textAlign: "center", padding: "20px" }}>
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardHome;
