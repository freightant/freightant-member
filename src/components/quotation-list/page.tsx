"use client";
import React, { useState } from "react";
import { message } from "antd";
import { quotationList } from "@/network/endpoints";

type FilterState = {
  mode: string;
  tradeType: string;
  status: string;
};

type QuotationData = {
  rfqNumber: string;
  tradeType: string;
  portOfLoading: string;
  portOfDischarge: string;
  rfqStatus: string;
  modeOfShipment: string;
  quotationNumber: string;
  quotationCreationDate: string;
  containerDetails: ContainerDetails[];
};

type ContainerDetails = {
  cargo: CargoData;
  typee: string;
  name: string;
  quantity: number;
  _id: string;
};

type CargoData = {
  dimensions: Dimensions;
  typee: string;
  category: string[];
  hsCode: string[];
  weight: number;
  imoClass: string;
  unNumber: string;
  packagingMaterial: string;
  msdsDocument: string;
  temperature: string;
  humidity: string;
  remarks: string;
  gaugeStatus: string;
};

type Dimensions = {
  length: number;
  breadth: number;
  height: number;
};

const QuotationList = () => {
  const [filters, setFilters] = useState<FilterState>({
    mode: "Sea-FCL",
    tradeType: "Export",
    status: "Awarded",
  });

  const [quotations, setQuotations] = useState<QuotationData[]>([]);

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
    const requestBody: FilterState = {
      mode: filters.mode,
      tradeType: filters.tradeType,
      status: filters.status,
    };
  
    try {
      const response = await quotationList(requestBody);
  
      console.log("API Response:", response); // Log the full response to inspect
  
      if (response.code) {
        // Check if response.data.quotations is an array
        if (Array.isArray(response.data?.quotations)) {
          // Map the response data to transform it as needed
          const mappedData: QuotationData[] = response.data.quotations.map((item: any) => ({
            rfqNumber: item.rfqNumber || "N/A",
            tradeType: item.tradeType || "N/A",
            portOfLoading: item.portOfLoading || "N/A", 
            portOfDischarge: item.dischargePortFullNameCountry            || "N/A", 
            rfqStatus: item.rfqStatus || "N/A", 
            modeOfShipment: item.modeOfShipment || "N/A", // updated to take mode from API response
            quotationNumber: item.quotationNumber || "N/A", // updated to match quotationNumber
            quotationCreationDate: item.quotationCreationDate
              ? new Date(item.quotationCreationDate).toLocaleDateString()
              : "N/A",
            containerDetails: item.containerDetails?.map((container: any) => ({
              typee: container.typee || "N/A",
              name: container.name || "N/A",
              quantity: container.quantity || 0,
              _id: container._id || "N/A",
              cargo: container.cargo || {},
            })) || [],
          }));
  
          // Set the mapped data into the state
          setQuotations(mappedData);
        } else {
          console.log("Response data is not an array:", response.data);
          message.error("Expected an array in the response.");
        }
      } else {
        message.error(response.message || "Failed to fetch quotations.");
      }
    } catch (err: any) {
      console.error("Error fetching data:", err);
      message.error(err.message || "Failed to fetch quotations.");
    }
  };
  
  
  
  
  

  return (
    <div style={{ padding: "24px", fontFamily: "Arial, sans-serif", height: "100vh", overflowY: "auto" }}>

      {/* Filters */}
      <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", flexWrap: "wrap" }}>

        {/* Mode of Shipment */}
        <div style={{ backgroundColor: "white", padding: "16px", borderRadius: "20px" }}>

        <div style={{ fontSize: "16px", color: "black", textAlign: "left" as "left", margin: "-40px 10px" }}>

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
              style={filterButtonStyle(
                filters.mode === "Cross Border Trucking"
              )}
              onClick={() =>
                handleFilterChange("mode", "Cross Border Trucking")
              }
            >
              Cross Border Trucking
            </button>
          </div>
        </div>

        {/* Trade Type */}
        <div
         style={{ backgroundColor: "white", padding: "16px", borderRadius: "20px" }}        >
          <div
            style={{ fontSize: "16px", color: "black", textAlign: "left" as "left", margin: "-40px 10px" }}  >
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

        <div style={{ fontSize: "16px", color: "black", textAlign: "left", margin: "-40px 10px" }}>

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
        <div style={{ marginTop: "", textAlign: "right", display: "flex", alignItems: "center", justifyContent: "flex-end", height: "100px" }}>

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
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#4a2ccd")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#6e44ff")
            }
          >
            Submit
          </button>
        </div>
      </div>

      {/* Table */}
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
    <th style={{ color: "#0A0049", padding: "10px", textAlign: "center", fontSize: "14px", fontWeight: "600" }}>RFQ Number</th>
    <th style={{ color: "#0A0049", padding: "10px", textAlign: "center", fontSize: "14px", fontWeight: "600", width: "100px" }}>Trade Type</th>
    <th style={{ color: "#0A0049", padding: "10px", textAlign: "center", fontSize: "14px", fontWeight: "600" }}>Port Pair</th>
    <th style={{ color: "#0A0049", padding: "10px", textAlign: "center", fontSize: "14px", fontWeight: "600", width: "100px" }}>RFQ Status</th>
    <th style={{ color: "#0A0049", padding: "10px", textAlign: "center", fontSize: "14px", fontWeight: "600" }}>
      {filters.mode === "Sea-FCL"
        ? "Equipment"
        : filters.mode === "Sea-LCL"
        ? "MT/CBM"
        : filters.mode === "Air"
        ? "Chargeable Weight (Kg)"
        : filters.mode === "Cross Border Trucking"
        ? "Truck Type"
        : "Equipment"}
    </th>
   
    <th style={{ color: "#0A0049", padding: "10px", textAlign: "center", fontSize: "14px", fontWeight: "600", width: "150px" }}>Quotation Number</th>
    <th style={{ color: "#0A0049", padding: "10px", textAlign: "center", fontSize: "14px", fontWeight: "600", width: "150px" }}>Quotation Date</th>
  </tr>
</thead>

<tbody>
  {quotations.map((quotation) => (
    <tr
      key={quotation.rfqNumber}
      onClick={() => setSelectedRow(quotation.rfqNumber)} // Set selected row
      style={{
        backgroundColor:
          selectedRow === quotation.rfqNumber ? "#F6F4FF" : "white",
        border:
          selectedRow === quotation.rfqNumber ? "1px solid #6A37F4" : "none",
        cursor: "pointer", // Add cursor pointer to indicate it's clickable
        transition: "background-color 0.3s ease",
      }}
    >
      <td style={{ color: "black", textAlign: "center" }}>
        {quotation.rfqNumber}
      </td>
      <td style={{ color: "black", textAlign: "center" }}>
        {quotation.tradeType}
      </td>
      <td style={{ color: "black", textAlign: "center" }}>
        {`${quotation.portOfLoading} - ${quotation.portOfDischarge}`}
      </td>
      <td style={{ textAlign: "center", padding: "8px" }}>
        <div
          style={{
            color:
              quotation.rfqStatus === "closed"
                ? "#A5ABB4"
                : quotation.rfqStatus === "awarded"
                ? "#16A149" // Text color for 'awarded' status
                : "#FF6C02", // Default text color for other statuses
            backgroundColor:
              quotation.rfqStatus === "online"
                ? "#FFE7D1"
                : quotation.rfqStatus === "awarded"
                ? "#E8FFF3"
                : quotation.rfqStatus === "closed"
                ? "#F6F4FF"
                : "white", // Default background color
            borderRadius: "40px",
            display: "flex",
            height: "30px",
            justifyContent: "center",
            alignItems: "center", // Vertically center the text
            padding: "5px", // Optional: Padding for better spacing inside the div
          }}
        >
          {quotation.rfqStatus}
        </div>
      </td>

      {/* Dynamic column value based on filters.mode */}
      <td style={{ color: "black", textAlign: "center" }}>
        {filters.mode === "Sea-FCL" || filters.mode === "Sea-LCL"
          ? `${quotation.containerDetails?.[0]?.name || "-"} * ${
              quotation.containerDetails?.[0]?.quantity || 0
            }`
          : filters.mode === "Air"
          ? `${quotation.containerDetails?.[0]?.cargo?.weight || 0}` // Replace with chargeableWeight if available
          : filters.mode === "Cross Border Trucking"
          ? "Truck type unavailable" // Replace with truckType if applicable
          : ""}
      </td>

      <td style={{ color: "black", textAlign: "center" }}>
        {quotation.quotationNumber}
      </td>
      <td style={{ color: "black", textAlign: "center" }}>
        {quotation.quotationCreationDate}
      </td>
    </tr>
  ))}
</tbody>

      </table>

      {/* Drawer */}
      {/* Drawer */}
      {selectedRow && (
  <div
    style={{
      position: "fixed",
      top: "0",
      right: "0",
      width: "600px",
      height: "100vh",
      backgroundColor: "#fff",
      boxShadow: "-4px 0 12px rgba(0, 0, 0, 0.15)",
      zIndex: 1000,
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      overflowY: "auto",
    }}
  >
    {/* Close Button */}
    <button
      onClick={() => setSelectedRow(null)}
      style={{
        position: "absolute",
        top: "-32px",
        right: "16px",
        backgroundColor: "transparent",
        border: "none",
        fontSize: "20px",
        color: "#000000",
        cursor: "pointer",
      }}
    >
      &#10005;
    </button>

    {/* Title */}
    <h2
      style={{
        color: "#0A0049",
        marginBottom: "32px",
        fontSize: "20px",
        fontWeight: 600,
      }}
    >
      Quotation Details
    </h2>

    {/* Content */}
    {quotations
      .filter((quotation) => quotation.rfqNumber === selectedRow)
      .map((quotation) => (
        <div key={quotation.rfqNumber}>
          {[
            { label: "RFQ Number", value: quotation.rfqNumber },
            { label: "Trade Type", value: quotation.tradeType },
            { label: "Port of Loading", value: quotation.portOfLoading },
            { label: "Port of Discharge", value: quotation.portOfDischarge
            },
            { label: "RFQ Status", value: quotation.rfqStatus },
            {
              label: filters.mode, // Set the label to the filter mode
              value:
                filters.mode === "Sea-FCL" || filters.mode === "Sea-LCL"
                  ? `${quotation.containerDetails?.[0]?.name || "-"} * ${
                      quotation.containerDetails?.[0]?.quantity || 0
                    }`
                  : filters.mode === "Air"
                  ? `${quotation.containerDetails?.[0]?.cargo.weight || 0} kg`
                  : filters.mode === "Cross Border Trucking"
                  ? "Truck type unavailable"
                  : "",
            },
            {
              label: "Cargo Type",
              value: quotation.containerDetails?.[0]?.cargo?.typee || "-",
            },
            {
              label: "Packaging Material",
              value:
                quotation.containerDetails?.[0]?.cargo?.packagingMaterial || "-",
            },
            { label: "Quotation Number", value: quotation.quotationNumber },
            {
              label: "Quotation Created On",
              value: quotation.quotationCreationDate,
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                height: "40px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#f9f9f9",
                padding: "0px 18px",
                marginBottom: "14px",
                borderRadius: "10px",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                transition: "background-color 0.2s, transform 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#F6F4FF";
                e.currentTarget.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#f9f9f9";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <span style={{ fontWeight: 500, color: "#000" }}>
                {item.label}
              </span>
              <span style={{ color: "#000" }}>{item.value}</span>
            </div>
          ))}
        </div>
      ))}
  </div>
)}

    </div>
  );
};

export default QuotationList;
