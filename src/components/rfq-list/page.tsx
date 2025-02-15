'use client';

import React, { useEffect,useState } from "react";
import { Button, message } from 'antd';
import { useRouter } from 'next/navigation';
import { showRfq } from "@/network/endpoints";

import axios from 'axios';

type FilterState = {
  mode: string;
  tradeType: string;
  status: string;
};

type ShipmentData = {
  id:string;
  rfqNumber: string;
  status: string;
  tradeType: string;
  modeOfShipment: string;
  loadingPort: string;
  dischargePort: string;
  placeOfLoading: {
    country: string;
  };
  placeOfUnLoading: {
    country: string;
  };
  container: ContainerData[];
  createdAt: string;
  closingDate: string;
  quotationCount: number;
};

type PortData = {
  id: number;
  Country: string;
  Name: string;
  Location: string;
  Subdivision: string;
  emoji: string;
  countryname: string;
  statename: string;
  FullName: string;
  currency: string;
};

type ContainerData = {
  cargo: CargoData;
  _id: string;
  typee: string;
  name: string;
  quantity: number;
};

type CargoData = {
  typee: string; // Container's cargo type
  category: string[];
  weight: number;
  hsCode: string[];
};





const RFQList = () => {
  const [filters, setFilters] = useState<FilterState>({
    mode: "Sea-FCL",
    tradeType: "Export",
    status: "live",
  });
  const [pendingFilters, setPendingFilters] = useState<FilterState>({ ...filters });

  const router = useRouter();

  

  // Handle the compare button click
  const handleCompareQuotationClick = (rfqId: string) => {
    // Check if router is available before using it
    if (router) {
      router.push(`/rfq/offercompare?rfq=${rfqId}`);
    } else {
      console.error("Router is not available");
    }
  };

  const [shipments, setShipments] = useState<ShipmentData[]>([]);
  const [selectedRow, setSelectedRow] = useState<string | null>(null); // Track selected row

  const handleFilterChange = (filterName: keyof FilterState, value: string) => {
    setPendingFilters((prevFilters) => ({ ...prevFilters, [filterName]: value }));
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
      setFilters(pendingFilters); // Update actual filters only on submit
  
      const requestBody = {
        modeOfShipment: pendingFilters.mode,
        tradeType: pendingFilters.tradeType,
        status: pendingFilters.status,
      };
  
      // Call the `showRfq` API function
      const response = await showRfq(requestBody);
  
      if (!response.code) {
        throw new Error(response.message);
      }
  
      // Set the fetched data into state
      setShipments(response.data);
    } catch (error) {
      console.error("Error fetching RFQs:", error);
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
      {/* Filters */}
<div style={{ display: "flex", gap: "16px", alignItems: "flex-start", flexWrap: "wrap" }}>
  
  {/* Mode of Shipment */}
  <div style={{ backgroundColor: "white", borderRadius: "10px", padding: "4px 12px 10px", lineHeight: "32px" }}>
    <div style={{ fontSize: "14px", color: "black", textAlign: "left" }}>Mode of Shipment</div>
    <div style={{ display: "flex", gap: "12px" }}>
      {["Sea-FCL", "Sea-LCL", "Air", "Cross Border Trucking"].map((mode) => (
        <button key={mode} style={filterButtonStyle(pendingFilters.mode === mode)} onClick={() => handleFilterChange("mode", mode)}>
          {mode}
        </button>
      ))}
    </div>
  </div>

  {/* Trade Type */}
  <div style={{ backgroundColor: "white", borderRadius: "10px", padding: "4px 12px 10px", lineHeight: "32px" }}>
    <div style={{ fontSize: "14px", color: "black", textAlign: "left" }}>Trade Type</div>
    <div style={{ display: "flex", gap: "12px" }}>
      {["Export", "Import"].map((type) => (
        <button key={type} style={filterButtonStyle(pendingFilters.tradeType === type)} onClick={() => handleFilterChange("tradeType", type)}>
          {type}
        </button>
      ))}
    </div>
  </div>

  {/* Status */}
  <div style={{ backgroundColor: "white", borderRadius: "10px", padding: "4px 12px 10px", lineHeight: "32px" }}>
    <div style={{ fontSize: "14px", color: "black", textAlign: "left" }}>Status</div>
    <div style={{ display: "flex", gap: "12px" }}>
      {["all", "live", "awarded", "closed"].map((status) => (
        <button key={status} style={filterButtonStyle(pendingFilters.status === status)} onClick={() => handleFilterChange("status", status)}>
          {status}
        </button>
      ))}
    </div>
  </div>

  {/* Submit Button */}
  <div style={{ textAlign: "right", display: "flex", alignItems: "center", justifyContent: "flex-end", height: "100px" }}>
    <button onClick={handleSubmit} style={{
      height: "36px", minWidth: "100px", padding: "0 12px", border: "none", outline: "none", borderRadius: "20px",
      backgroundColor: "#6e44ff", color: "white", fontSize: "14px", fontWeight: "500", cursor: "pointer",
      display: "flex", alignItems: "center", justifyContent: "center", transition: "background-color 0.3s ease"
    }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#4a2ccd")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#6e44ff")}
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
  <thead >
    <tr>
      <th
        style={{
          color: "#0A0049",
          padding: "10px",
          textAlign: "center",
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
          textAlign: "center",
          fontSize: "14px",
          fontWeight: "600",
          width: "100px"
        }}
      >
        Trade Type
      </th>
      <th
        style={{
          color: "#0A0049",
          padding: "10px",
          textAlign: "center",
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
          textAlign: "center",
          fontSize: "14px",
          fontWeight: "600",
          width: "100px"
        }}
      >
        RFQ Status
      </th>
      
      {/* Added dynamic column header based on filters.mode */}
      <th
        style={{
          color: "#0A0049",
          padding: "10px",
          textAlign: "center",
          fontSize: "14px",
          fontWeight: "600",
        }}
      >
        {filters.mode === "Sea-FCL"
          ? "Equipment"
          : filters.mode === "Sea-LCL"
          ? "MT/CBM"
          : filters.mode === "Air"
          ? "Chargeable Weight (Kg)"
          : filters.mode === "Cross Border Trucking"
          ? "Truck Type"
          : ""}
      </th>
      <th
        style={{
          color: "#0A0049",          padding: "10px",          textAlign: "center",          fontSize: "14px",          fontWeight: "600",          width: "150px"
        }}
      >
       Quotes Received
      </th>
      <th
        style={{
          color: "#0A0049",  padding: "10px",      textAlign: "center",      fontSize: "14px",        fontWeight: "600",          width: "150px"
        }}
      >
        RFQ Created On
      </th>
      <th
        style={{
          color: "#0A0049",
          padding: "10px",
          textAlign: "center",
          fontSize: "14px",
          fontWeight: "600",
          width: "150px"
        }}
      >
        RFQ Closing Date
      </th>
    </tr>
  </thead>
  <tbody>
  {shipments.map((shipment, index) => (
    <tr
      key={shipment.rfqNumber}
      onClick={() => setSelectedRow(shipment.rfqNumber)}
      style={{
        backgroundColor: selectedRow === shipment.rfqNumber 
          ? "#F6F4FF" 
          : index % 2 === 0 
          ? "#FFFFFF" // White for even rows
          : "#F3F6FF", // Light blue for odd rows
        border: selectedRow === shipment.rfqNumber ? "1px solid #6A37F4" : "none",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        fontSize: "12px",
        lineHeight: "36px",
      }}
    >
      <td style={{ color: "black", textAlign: "center" }}>{shipment.rfqNumber}</td>
      <td style={{ color: "black", textAlign: "center" }}>{shipment.tradeType}</td>
      <td style={{ color: "black", textAlign: "center" }}>
        {`${shipment.loadingPort} - ${shipment.dischargePort}`}
      </td>
      <td style={{ textAlign: "center", padding: "8px" }}>
        <div
          style={{
            color:
              shipment.status === "closed"
                ? "#A5ABB4"
                : shipment.status === "awarded"
                ? "#16A149"
                : "#FF6C02",
            backgroundColor:
              shipment.status === "live"
                ? "#FFFACD"
                : shipment.status === "awarded"
                ? "#D6F2E3"
                : shipment.status === "closed"
                ? "#F6F4FF"
                : "white",
            borderRadius: "40px",
            display: "flex",
            height: "30px",
            justifyContent: "center",
            alignItems: "center",
            padding: "5px",
          }}
        >
          {shipment.status}
        </div>
      </td>

      {/* Dynamic column value based on filters.mode */}
      <td style={{ color: "black", textAlign: "center" }}>
  {filters.mode === "Sea-FCL" ? (
    shipment.container?.map((cont, index) => (
      <div key={index}>
        {`${cont.name || "-"} * ${cont.quantity || 0}`}
      </div>
    ))
  ) : filters.mode === "Sea-LCL" ? (
    shipment.container?.map((cont, index) => (
      <div key={index}>
        {`${cont.typee || "-"} * ${cont.quantity || 0}`}
      </div>
    ))
  ) : filters.mode === "Air" ? (
    shipment.container?.map((cont, index) => (
      <div key={index}>
        {`Weight: ${cont.cargo?.weight || 0} kg`}
      </div>
    ))
  ) : filters.mode === "Cross Border Trucking" ? (
    "Truck type unavailable"
  ) : (
    ""
  )}
</td>


      <td style={{ color: "black", textAlign: "center" }}>{shipment.quotationCount}</td>
      <td style={{ color: "black", textAlign: "center" }}>{shipment.createdAt}</td>
      <td style={{ color: "black", textAlign: "center" }}>{shipment.closingDate}</td>
    </tr>
  ))}
</tbody>

</table>


      {/* Drawer */}
      {/* Drawer */}
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
        top: '0px',
        right: '16px',
        backgroundColor: 'transparent',
        border: '1px black',
        fontSize: '20px',
        color: '#000000',
        cursor: 'pointer',
      }}
    >
      &#10005;
    </button>

    {/* Title */}
    <h2 style={{ color: '#0A0049', marginBottom: '32px', fontSize: '20px', fontWeight: 600 }}>
      Shipment Details
    </h2>

    {/* Content */}
    {shipments
      .filter((shipment) => shipment.rfqNumber === selectedRow)
      .map((shipment) => (
        <div key={shipment.rfqNumber}>
          {[
            { label: 'RFQ Number', value: shipment.rfqNumber },
            { label: 'Trade Type', value: shipment.tradeType },
            { label: 'Loading Port', value: shipment.loadingPort},
            { label: 'Discharge Port', value: shipment.dischargePort },
            { label: 'RFQ Status', value: shipment.status },
            {
              label: filters.mode, // Set the label to the filter mode
              value:
                filters.mode === "Sea-FCL"
                  ? `${shipment.container?.[0]?.name || "-"} * ${shipment.container?.[0]?.quantity || 0}`
                  : filters.mode === "Sea-LCL"
                  ? `${shipment.container?.[0]?.typee || "-"} * ${shipment.container?.[0]?.quantity || 0}` // Replace with mtCbm if available
                  : filters.mode === "Air"
                  ? `${shipment.container?.[0]?.name || "-"} * ${shipment.container?.[0]?.quantity || 0}` // Replace with chargeableWeight if available
                  : filters.mode === "Cross Border Trucking"
                  ? "Truck type unavailable" // Replace with shipment.truckType if available
                  : "",
            },
              
          
            { label: 'Quotes Received', value: shipment.quotationCount },
            { label: 'RFQ Created On', value: shipment.createdAt },
            { label: 'RFQ Closing Date', value: shipment.closingDate },
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
                e.currentTarget.style.color = '#000'; // Reset to default text color
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <span style={{ fontWeight: 500, color: '#000' }}>{item.label}</span>
              <span style={{ color: '#000' }}>{item.value}</span>
            </div>
          ))}
           <Button
  type="primary"
  size="large"
  onClick={() => handleCompareQuotationClick(shipment.id)}
>
  Compare Quotation
</Button>

        </div>
        
      ))}
  </div>
)}

    </div>
  );
};

export default RFQList;
