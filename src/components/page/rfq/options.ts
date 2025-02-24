import { strings } from "@/components/strings"
import { Children } from "react"

export const modeOfShipmentOptions =[
    strings.seaFCL,
    strings.seaLCL,
    strings.air,
    strings.crossBorderTrucking,
]
 
export const incotermOptions = ["CIF", "CFR", "CPT", "CIP", "DAP", "DPU", "DDP"]
export const tradeTypeOptions = [strings.export,strings.import]
export const standardContainersOptions = ['20FT', '40FT', '40FT HQ', '45FT HQ']
export const specialContainersOptions = ['20FT Flat Rack', '20FT Open Top', '20FT Platform', '20FT ISO Tank', '40FT Flat Rack', '40FT Open Top', '40FT Platform', '40FT ISO Tank']
export const reeferContainersOptions = ['20FT Reefer', '40FT Reefer']
export const standardCargoOptions = [strings.general,strings.hazardous]
export const specialCargoOptions = [strings.general]
export const reeferCargoOptions = [strings.frozen,strings.chilled,strings.pharma,strings.general]
export const crossBorderTruckCargoOptions = [strings.general,strings.hazardous,strings.odc]
export const gaugestatusOptions = [strings.ingauge,strings.outgauge]
export const stuffingLocationTypeOptions = [strings.factoryStuffing,strings.portCFSStuffing]
export const destuffingLocationTypeOptions = [strings.factoryStuffing,strings.portCFSStuffing]
export const openBodytrucksOptions = [
  "PICKUP:1 TON",
  "TATA ACE: 800 KGS",
  "TATA 407 : 2.5 TON",
  "LCV 14FT: 3.5 TON",
  "LCV 14FT: 4 TON",
  "LCV 17FT: 5 TON",
  "LCV 19FT: 7 TON",
  "6 WHEELER: 19FT-24FT, 9 TON",
  "10 WHEELER: 22FT, 16 TON",
  "12 WHEELER: 24FT, 25 TON",
  "14 WHEELER: 28FT, 30 TON"
];
export const containerBodyTruckOptions = [
  "19-22FT SINGLE AXLE: 6-TON",
  "24FT SINGLE AXLE: 7-9 TON",
  "24FT MULTI AXLE: 15 TON",
  "32FT SINGLE AXLE: 7 TON",
  "32FT SINGLE AXLE: HQ 7 TON",
  "32FT SINGLE AXLE: 9 TON",
  "32FT SINGLE AXLE: HQ 9 TON",
  "32FT SINGLE AXLE: 10 TON",
  "32FT SINGLE AXLE: HQ 10 TON",
  "32FT MULTI AXLE: HQ 15 TON",
  "32FT MULTI AXLE: 18 TON",
  "32FT MULTI AXLE: HQ 18 TON",
  "32FT TRIPLE AXLE: 23 TON"
];
export const trailerOptions = [
  "40 FT FLATBED TRAILER AXLE: 28-TON",
  "40 FT SEMI-LOW BED TRAILER: 28-TON",
  "40 FT FLATBED TRAILER TRIPLE AXLE: 35 TON",
  "40 FT SEMI-LOW BED TRAILER TRIPLE AXLE: 35 TON",
  "20 FT FLATBED TRAILER: 28-TON",
  "20 FT FLATBED TRAILER AXLE: 28-TON",
  "20 FT FLATBED TRAILER TRIPLE AXLE: 35 TON"
];
export const truckTrailerType = [
  {
    key:1,
    label: strings.openBodyTrucks,
    children:openBodytrucksOptions.map((i:any)=>({label:i,key:i}))
  },
  {
    key:2,
    label: strings.containerBodyTrucks,
    children:containerBodyTruckOptions.map((i:any)=>({label:i,key:i}))
  },
  {
    key:3,
    label: strings.trailer,
    children:trailerOptions.map((i:any)=>({label:i,key:i}))
  },
]
export const ContainersType = {
    [strings.standardContainers]: {
        containers:standardContainersOptions
    },
    [strings.specialContainers]: {
        cargo:[strings.general],
        containers:specialContainersOptions
    },
    [strings.reeferContainers]: {
        containers:reeferContainersOptions
    },
}
export const miscServices = [
    "Surveying",
    "Fumigation",
    "Phyto Sanitary",
    "Certificate of Origin - COO",
    "License Registration",
    "Meis License Reg",
    "Destination Certificate",
    "Quarantine And Disinfection",
    "Landing Certificate",
    "Self Sealing Permission",
    "Port Registration Fee",
    "Stamp Duty Charges",
    "Wildlife Noc",
    strings.others
  ]
export const imoClassOptions = [
  "Class 1 - Explosives",
  "Class 2 - Gases",
  "Class 3 -Flammable Liquids",
  "Class 4 - Flammable Solids or Substances",
  "Class 5- Oxidizing substances by yielding oxygen increase the risk and intensity of fire",
  "Class 6- Toxic substances",
  "Class 7 - Radioactive Substances",
  "Class 8 - Corrosive substances",
  "Class 9 - Miscellaneous dangerous substances and articles",
]

export const cargoCategoryOptions = [
    {
      "label": "Freight all kinds",
      "range": [0,0],
    },
    {
      "label": "Animal & Animal Products",
      "range": [1,5],
      children:[
        {range:1,	label:"Live Animals"},
        {range:2,	label:"Meat and Edible Meat Offal"},
        {range:3,	label:"Fish and Crustaceans, Molluscs and other Aquatic Invertebrates"},
        {range:4,	label:"Birds’ Eggs; Natural Honey; Edible Products of Animal Origin, not elsewhere specified or included"},
        {range:5,	label:"Products of Animal Origin, Not Elsewhere Specified or Included"},
      ]
    },
    {
      "label": "Vegetable Products",
      "range": [6,14],
      children:[
        {range:6,	label:"Live Trees and other Plants; Bulb, Roots and the Like; Cut Flowers and Ornamental Foliage"},
        {range:7,	label:"Vegetable seeds; Edible Vegetables and Certain Roots and Tubers"},
        {range:8,	label:"Edible Fruit and Nuts; Peel of Citrus Fruit or Melons"},
        {range:9,	label:"Coffee, Tea, Mate and Spices"},
        {range:10,	label:"Cereals"},
        {range:11,	label:"Milling Industry; Malt; Starches; Inulin Wheat Gluten"},
        {range:12,	label:"Oil Seeds and Oleaginous Fruits; Miscellaneous Grains, Seeds and Fruit; Industrial or Medicinal Plants; Straw and Fodder"},
        {range:13,	label:"Lac; Gums, Resins and Other Vegetable Saps and Extracts"},
        {range:14,	label:"Vegetable Plaiting Materials; Vegetable Products not Elsewhere Specified or Included"},
      ]
    },
    {
      "label": "Animal and Vegetable Fats and Oils",
      "range": [15,15],
      children:[
        {range:15,label:`Animals or Vegetable Fats and Oils and their Cleavage Products; Prepared Edible Fats; Animal or Vegetable Waxes`}
      ]
    },
    {
      "label": "Foodstuffs, Beverages and Tobacco",
      "range": [16,24],
      children:[
        {range:16, label:`Preparations of Meat, of Fish or of Crustaceans, ollusks or other Aquatic Invertebrates`},
        {range:17, label:`Sugars and Sugar Confectionery`},
        {range:18, label:`Cocoa and Cocoa Preparations`},
        {range:19, label:`Cereals, Flour, Starch or Milk; Pastrycooks’ Products`},
        {range:20, label:`Vegetables, Fruit, Nuts or other Parts of Plants`},
        {range:21, label:`Miscellaneous Edible Preparations`},
        {range:22, label:`Beverages, Spirits and Vinegar`},
        {range:23, label:`Residues and Waste from the Food Industries; Prepared Animal Fodder`},
        {range:24, label:`Tobacco and Manufactures; Tobacco Substitutes`},
      ]
    },
    {
      "label": "Mineral Products",
      "range": [25,27],
      children:[
        {range:25,label:`Salt; Sulphur; Earths and Stone; Plastering Materials, Lime and Cement`},
        {range:26,label:`Ores, Slag and Ash`},
        {range:27,label:`Mineral Fuels, Mineral Oils and Products of their Distillation; Bituminous Substances; Mineral Waxes`},
      ]
    },
    {
      "label": "Chemicals & Allied Industries",
      "range": [28,38],
      children:[
        {range:28,label:`Inorganic Chemicals; Organic or Inorganic Compounds of Precious Metals, of Rare-earth Metals, of Radioactive Elements of Isotopes`},
        {range:29,label:`Organic Chemicals`},
        {range:30,label:`Pharmaceutical Products`},
        {range:31,label:`Fertilisers`},
        {range:32,label:`Dyeing Extracts; Tannins and their Derivatives; Dyes, Pigments and other Colouring Matter; Paints and Varnishes; Putty and other Mastics; inks`},
        {range:33,label:`Essential Oils and Resinoids; Perfumery Cosmetic or Toilet Preparations`},
        {range:34,label:`Soap, Organic Surface- Active Agents, Washing Preparations, Lubricating Preparations, Artificial Waxes, Prepared Waxes, Polishing or Scouring Preparations, Candles and Similar Articles, Modelling Pastes, “Dental Waxes” and Dental Preparatio`},
        {range:35,label:`Albuminoidal Substances; Modified Starches; Glues; Enzymes`},
        {range:36,label:`Explosives; Pyrotechnic Products; Matches; Pyrophoric Alloys; Certain Combustible Preparations`},
        {range:37,label:`Photographic or Cinematographic Goods`},
        {range:38,label:`Miscellaneous Chemical Products`},
      ]
    },
    {
      "label": "Plastics/Rubbers",
      "range": [39,40],
      children:[
        {range:39,label:`Plastics and Articles thereof`},
        {range:40,label:`Rubber and Articles thereof`},
      ]
    },
    {
      "label": "Raw Hides, Skins, Leather, & Furs",
      "range": [41,43],
      children:[
        {range:41,label:`Raw Hides and Skins (Other than Furskins) and Leather`},
        {range:42,label:`Articles of Leather; Saddlery and Harness; Travel Goods, Handbags and similar containers; Articles of Animal Gut (other than Silk-worm Gut)`},
        {range:43,label:`Furskins and Artificial Fur; Manufactures thereof`},
      ]
    },
    {
      "label": "Wood & Wood Products",
      "range": [44,46],
      children:[
        {range:44, label:`Wood and Articles of Wood; Wood Charcoal`},
        {range:45, label:`Cork and Articles of Cork`},
        {range:46, label:`Manufactures of Straw, of Esparto or of other Plaiting Materials; Basketware And Wickerwork`},
      ]
    },
    {
      "label": "Pulp of Wood and Fibrous Material",
      "range": [47,49],
      children:[
        {range:47, label:`Pulp of Wood or of other Fibrous Cellulosic Material; Recovered (Waste and Scrap) Paper or Paperboard`},
        {range:48, label:`Paper and Paperboard; Article of Paper Pulp, of Paper or of Paperboard Currency Paper (Water-mark Bank Note Paper)`},
        {range:49, label:`Printed Books, Newspapers, Pictures and other Products of the Printing Industry; Manuscripts, Typescripts and Plans`},
      ]
    },
    {
      "label": "Textiles",
      "range": [50,63],
      children:[
        {range:50,label:`Silk`},
        {range:51,label:`Wool, Fine or Coarse Animal Hair, Horse Hair Yarn and Woven Fabric`},
        {range:52,label:`Cotton`},
        {range:53,label:`Other Vegetable Textile Fibres; Paper Yarn and Woven Fabrics of Paper Yarn`},
        {range:54,label:`Man-made Filaments`},
        {range:55,label:`Man – made Staple Fibres`},
        {range:56,label:`Wadding, Felt and Nonwovens; Special Yarns; Twine, Cordage, Ropes and Cables and Articles thereof`},
        {range:57,label:`Carpets and Other Textile Floor Coverings`},
        {range:58,label:`Special Woven Fabrics; Tufted Textile Fabrics; Lace; Tapestries; Trimmings; Embroidery`},
        {range:59,label:`Impregnated, Coated, Covered or Laminated Textile Fabrics; Textile Articles of a Kind Suitable for Industrial Use`},
        {range:60,label:`Knitted or Crocheted Fabrics`},
        {range:61,label:`Articles of Apparel and Clothing Accessories, Knitted or Crocheted`},
        {range:62,label:`Articles of Apparel and Clothing Accessories not Knitted or Crocheted`},
        {range:63,label:`Other Made Up Textile Articles; Sets; Worn Clothing And Worn Textile Articles; Rags`},
      ]
    },
    {
      "label": "Footwear/Headgear",
      "range": [64,67],
      children:[
        {range:64,label:`Footwear, Gaiters and the Like; Parts of such Articles`},
        {range:65,label:`Headgear and Parts Thereof`},
        {range:66,label:`Umbrellas, Sun Umbrellas, Walking-sticks, Seat-sticks, Whips, Riding-crops, and Parts Thereof`},
        {range:67,label:`Prepared Feathers and Down and Articles Made of Feathers or of Down; Artificial Flowers; Articles of Human Hair`},
      ]
    },
    {
      "label": "Stone/Glass",
      "range": [68,70],
      children:[
        {range:68,label:`Articles of Stone, Plaster, Cement, Asbestos, Mica or Similar Materials`},
        {range:69,label:`Ceramic Products`},
        {range:70,label:`Glass and Glassware`},
      ]
    },
    {
      "label": "Precious Stone, Metal, Pearls and Coins",
      "range": [71,71],
      children:[
        {range:71,label:`Natural or Cultured Pearls, Precious or Semi-precious Stones, Precious Metals, Metals Clad with Precious Metal, and Articles thereof; Imitation Jewellery; Coin`}
      ]
    },
    {
      "label": "Base Metals",
      "range": [72,83],
      children:[
        {range:72, label:`Iron and Steel`},
        {range:73, label:`Articles of Iron or Steel`},
        {range:74, label:`Copper and Articles thereof`},
        {range:75, label:`Nickel and articles thereof`},
        {range:76, label:`Aluminium and articles thereof`},
        {range:77, label:`Reserved for Possible Future use in Harmonised System`},
        {range:78, label:`Lead and Articles thereof`},
        {range:79, label:`Zinc and Articles thereof`},
        {range:80, label:`Tin and Articles Thereof`},
        {range:81, label:`Other Base Metals; Cermets Articles thereof`},
        {range:82, label:`Tools, Implements, Cutlery, Spoons and Forks, of Base Metal; Parts Thereof Base Metal`},
        {range:83, label:`Miscellaneous Articles of Base Metal`},
      ]
    },
    {
      "label": "Machinery/Electrical",
      "range": [84,85],
      children:[
        {range:84, label:`Nuclear Reactors, Boilers, Machinery and Mechanical Appliances; Parts thereof`},
        {range:85, label:`Electrical Machinery and Equipment and Parts Thereof; Sound Recorders and Reproducers, Television Image and Sound Recorders and Reproducers, and Parts and Accessories of Such Articles`},
      ]
    },
    {
      "label": "Vehicles",
      "range": [86,89],
      children:[
        {range:86,label:`Railway or tramway locomotives, rolling-stock and parts thereof; rail-way or tramway track fixtures and fittings and parts thereof; mechanical (including electro-mechanical) traffic ignaling equipment of all kinds`},
        {range:87,label:`Vehicles other than Railway or Tramway Rolling-stock, and Parts and Accessories thereof`},
        {range:88,label:`For Aircraft, Spacecraft and Parts thereof`},
        {range:89,label:`Ships, Boats and Floating Structures`},
      ]
    },
    {
      "label": "Precision Instruments",
      "range": [90,92],
      children:[
        {range:90, label:`Optical, photographic, cinematographic, measuring, checking, precision, medical or surgical instruments and apparatus; parts and accessories thereof`},
        {range:91, label:`Clocks and Watches and parts thereof`},
        {range:92, label:`Musical Instruments Parts and Accessories of such articles`},
      ]
    },
    {
      "label": "Arms and Ammunition",
      "range": [93,93],
      children:[
        {range:93,label:`For Arms and Ammunition; Parts and Accessories thereof`}
      ]
    },
    {
      "label": "Miscellaneous Manufactured Articles",
      "range": [94,96],
      children:[
        {range:94, label:`Furniture; Bedding, Mattresses, Mattress Supports, Cushions and similar stuffed furnishings; Lamps and Lighting Fittings, not elsewhere specified or included; Illuminated signs, Illuminated name-plates and the like; Prefabricated Building`},
        {range:95, label:`Toys, Games and Sports Requisites; Parts and Accessories thereof`},
        {range:96, label:`Miscellaneous Manufactured Articles`},
      ]
    },
    {
      "label": "Works of Art",
      "range": [97,97],
      children:[
        {range:97,label:`Works of Art, Collectors’ Pieces and Antiques`}
      ]
    },
    {
      "label": "Unique US National HS Codes",
      "range": [98,99],
      children:[
        {range:98,	label:`Project Imports; Laboratory Chemicals; Passengers’ Baggage; Personal Importations by Air or Post; Ship Stores`}
      ]
    }
  ]
export const packageTypeOptions = [strings.totalCargo, strings.perPackage]

export const DimsOptions = ["MM","CM","METER","INCH","FT"]
export const WeightOptions = ["KG","TON"]

export const paymentTermOptions = [
  {title:`Against BL`,days:`BL release against full payment`},
  {title:`Upon Receipt`,days:`Payment  due Immediately Upon Delivery of Invoice`},
  {title:`Prepaid`,days:`Payment in Advance with work order`},
  {title:`Net   7`,days:`Payment within 7 days of the invoice date`},
  {title:`Net   14`,days:`Payment within 14 days of the invoice date`},
  {title:`Net   30`,days:`Payment within 30 days of the invoice date`},
  {title:`Net   45`,days:`Payment within 45 days of the invoice date`},
  {title:`Net   60`,days:`Payment within 60 days of the invoice date`},
  {title:strings.others	,days:`Other`},
]

export const importIncotermOptions = ["EXW","FOB","FCA","FAS"]

export const uomSeaFcl = [
  { key: 'BL', label: 'BL', value: "BL" },
  { key: '20FT', label: '20 Feet', value: strings["20ft"] },
  { key: '40FT', label: '40 Feet', value: strings["40ft"] },
]

export const uomSeaLcl = [
  { key: 'BL', label: 'BL', value: "BL" },
  { key: 'MT', label: 'MT', value: "MT" },
  { key: 'CBM', label: 'CBM', value: "CBM" },
]

export const Air = [
  { key: 'KG', label: 'KG', value: "KG" },
  { key: 'AWB', label: 'AWB', value: "AWB" },
  
]

export const unitsOption2 =(modeOfShipment:string)=>{
  switch (modeOfShipment) {
    default:
      return [
        {key:"Numbers",label:"Numbers",value:"Numbers"}
      ]
  }

}

export const unitsOption =(modeOfShipment:string)=>{
  switch (modeOfShipment) {
    case strings.seaFCL:
        return uomSeaFcl
      break;
    case strings.seaLCL:
        return uomSeaLcl
      break;
      case strings.air:
        return Air
      break;
    default:
        return [
          {key:strings.mt,label:strings.mt,value:strings.mt},
          // {key:strings.cbm,label:strings.cbm,value:strings.cbm},
          // {key:strings.awb,label:strings.awb,value:strings.awb},
          // {key:strings.invoice,label:strings.invoice,value:strings.invoice},
          {key:strings.truck,label:strings.truck,value:strings.truck},
        ]
      break;
  }
}

export const polOptions = (mode:string)=>{
  switch (mode) {
    case strings.air:
        return [
          {label: strings.airline, value: strings.airline},
          {label: strings.airport, value: strings.airport},
          {label: strings.custom, value: strings.custom},
          {label: strings.transportations, value: strings.transportations},
        ]
      break;
    case strings.seaFCL:
        return [
          {label: strings.shippingLine, value: strings.shippingLine},
          {label: strings.cfsTerminal, value: strings.cfsTerminal},
          {label: strings.custom, value: strings.custom},
          {label: strings.transportations, value: strings.transportations},
        ]
      break;
    case strings.seaLCL:
        return [
          {label: strings.shippingLine, value: strings.shippingLine},
          {label: strings.cfsTerminal, value: strings.cfsTerminal},
          {label: strings.custom, value: strings.custom},
          {label: strings.transportations, value: strings.transportations},
        ]
      break;
    case strings.crossBorderTrucking:
        return [
          {label: strings.portCwc, value: strings.portCwc},
          {label: strings.custom, value: strings.custom},
          {label: strings.govtPass, value: strings.govtPass},
        ]
      break;
  
    default:
      return []
      break;
  }
}

export const freightCostHead = (mode:string)=>{
  switch (mode) {
    case strings.seaLCL:
      return [
        {label:"BOF - Basic Ocean Freight", value:"BOF - Basic Ocean Freight"},
        {label:"AOF - All inclusive Ocean Freight", value:"AOF - All inclusive Ocean Freight"},
        {label:"OWS - Overweight Surcharge", value:"OWS - Overweight Surcharge"},
        {label:"MFR - Marine Fuel Recovery", value:"MFR - Marine Fuel Recovery"},
        {label:"LSS - Low Sulphur Surcharge", value:"LSS - Low Sulphur Surcharge"},
        {label:"WRS - War Risk Surcharge", value:"WRS - War Risk Surcharge"},
        {label:"ERS - Emergency Risk Surcharge", value:"ERS - Emergency Risk Surcharge"},
        {label:"EBS - Emergency Bunker Surcharge", value:"EBS - Emergency Bunker Surcharge"},
        {label:"GRI - General Rate Increase", value:"GRI - General Rate Increase"},
        {label:"ISPS - International Ship And Port Facility Security", value:"ISPS - International Ship And Port Facility Security"},
        {label:"PSS - Peak Season Surcharge", value:"PSS - Peak Season Surcharge"},
        {label:"BAF - Bunker Adjustment Factor ", value:"BAF - Bunker Adjustment Factor "},
        {label:"CAF - Currency Adjustment Factor ", value:"CAF - Currency Adjustment Factor "},
        {label:"PRS - Piracy Risk Surcharge ", value:"PRS - Piracy Risk Surcharge "},
        {label:"EU - Emissions Trading System", value:"EU - Emissions Trading System"},
        {label:"EIS - Equipment Imbalance Surcharge ", value:"EIS - Equipment Imbalance Surcharge "},
        {label:"PCC - Panama Canal Surcharge ", value:"PCC - Panama Canal Surcharge "},
        {label:"WSC - Winter Surcharge  ", value:"WSC - Winter Surcharge  "},
        {label:"HAZ - Hazardous Surcharge", value:"HAZ - Hazardous Surcharge"},
        {label:"DGS - Dangerous goods surcharge", value:"DGS - Dangerous goods surcharge"},
        {label:"SCS - Suez Canal Surcharge", value:"SCS - Suez Canal Surcharge"},
        {label:"SES - Special Equipment Surcharge", value:"SES - Special Equipment Surcharge"},
        {label:"AGS - Aden Gulf Surcharge", value:"AGS - Aden Gulf Surcharge"},
        {label:"CAF - Currency Adjustment Factor ", value:"CAF - Currency Adjustment Factor "},
        {label:"HEA - Heavy lift surcharge", value:"HEA - Heavy lift surcharge"},
        {label:"REF - Reefer surcharge", value:"REF - Reefer surcharge"},
        {label:"ENS - Entry Summary Declaration", value:"ENS - Entry Summary Declaration",}
        ]
        break;
        case strings.seaFCL:
          return [
            {label:"BOF - Basic Ocean Freight", value:"BOF - Basic Ocean Freight"},
            {label:"AOF - All inclusive Ocean Freight", value:"AOF - All inclusive Ocean Freight"},
            {label:"OWS - Overweight Surcharge", value:"OWS - Overweight Surcharge"},
            {label:"MFR - Marine Fuel Recovery", value:"MFR - Marine Fuel Recovery"},
            {label:"LSS - Low Sulphur Surcharge", value:"LSS - Low Sulphur Surcharge"},
            {label:"WRS - War Risk Surcharge", value:"WRS - War Risk Surcharge"},
            {label:"ERS - Emergency Risk Surcharge", value:"ERS - Emergency Risk Surcharge"},
            {label:"EBS - Emergency Bunker Surcharge", value:"EBS - Emergency Bunker Surcharge"},
            {label:"GRI - General Rate Increase", value:"GRI - General Rate Increase"},
            {label:"ISPS - International Ship And Port Facility Security", value:"ISPS - International Ship And Port Facility Security"},
            {label:"PSS - Peak Season Surcharge", value:"PSS - Peak Season Surcharge"},
            {label:"BAF - Bunker Adjustment Factor ", value:"BAF - Bunker Adjustment Factor "},
            {label:"CAF - Currency Adjustment Factor ", value:"CAF - Currency Adjustment Factor "},
            {label:"PRS - Piracy Risk Surcharge ", value:"PRS - Piracy Risk Surcharge "},
            {label:"EU - Emissions Trading System", value:"EU - Emissions Trading System"},
            {label:"EIS - Equipment Imbalance Surcharge ", value:"EIS - Equipment Imbalance Surcharge "},
            {label:"PCC - Panama Canal Surcharge ", value:"PCC - Panama Canal Surcharge "},
            {label:"WSC - Winter Surcharge  ", value:"WSC - Winter Surcharge  "},
            {label:"HAZ - Hazardous Surcharge", value:"HAZ - Hazardous Surcharge"},
            {label:"DGS - Dangerous goods surcharge", value:"DGS - Dangerous goods surcharge"},
            {label:"SCS - Suez Canal Surcharge", value:"SCS - Suez Canal Surcharge"},
            {label:"SES - Special Equipment Surcharge", value:"SES - Special Equipment Surcharge"},
            {label:"AGS - Aden Gulf Surcharge", value:"AGS - Aden Gulf Surcharge"},
            {label:"CAF - Currency Adjustment Factor ", value:"CAF - Currency Adjustment Factor "},
            {label:"HEA - Heavy lift surcharge", value:"HEA - Heavy lift surcharge"},
            {label:"REF - Reefer surcharge", value:"REF - Reefer surcharge"},
            {label:"ENS - Entry Summary Declaration", value:"ENS - Entry Summary Declaration",}
            ]
        break;
      case strings.air:
       return [
        { "value": "1st0.5", "label": "First 0.5Kg Surcharge" },
        { "value": "AAA ", "label": "Misc Charge " },
        { "value": "AAC ", "label": "AAC" },
        { "value": "ADC ", "label": "ADC" },
        { "value": "ADF ", "label": "Airline Documentation Fees" },
        { "value": "ADO ", "label": "Airline Delivery Order Chargs" },
        { "value": "AF ", "label": "Agency Fees" },
        { "value": "AIL ", "label": "Airport Insurance levy" },
        { "value": "ALCOM ", "label": "Commission" },
        { "value": "ARDG ", "label": "Airline DG charges." },
        { "value": "BAG ", "label": "CFL (LHR)" },
        { "value": "BBF ", "label": "Break Bulk Fee" },
        { "value": "BHC ", "label": "Battery Handling Charges" },
        { "value": "BSC ", "label": "BL Surrender Charges" },
        { "value": "CC ", "label": "Courier Charge" },
        { "value": "CDD ", "label": "Cargo Data Declaration" },
        { "value": "CGC ", "label": "Customs Surcharge" },
        { "value": "CI ", "label": "Custom Inspection" },
        { "value": "CLRBAG", "label": "Clearance Bag Charges per MHAWB" },
        { "value": "CO ", "label": "Customs Overtime" },
        { "value": "COLOAD", "label": "COLOAD" },
        { "value": "CSC ", "label": "Currency Surcharge" },
        { "value": "CTG ", "label": "Cartage" },
        { "value": "DC ", "label": "Deferment Charge" },
        { "value": "DCR ", "label": "Due Carrier" },
        { "value": "DDPS ", "label": "Duty Delivery paid surcharge" },
        { "value": "DEL ", "label": "Delivery Charge" },
        { "value": "DHand ", "label": "Destination handling charge" },
        { "value": "DO ", "label": "Delivery Order Charges" },
        { "value": "DS ", "label": "Demand Surcharge" },
        { "value": "DUTY ", "label": "DUTY & TAX" },
        { "value": "ECC ", "label": "Express Courier Charges" },
        { "value": "EDI ", "label": "EDI" },
        { "value": "EDT ", "label": "Electronic Data Transfer Fee" },
        { "value": "EHS ", "label": "EHS" },
        { "value": "ESS ", "label": "Emergency Situation Surcharge" },
        { "value": "EUST ", "label": "EUST" },
        { "value": "FC ", "label": "Freight Collect charges" },
        { "value": "FCD ", "label": "Formal Customs Declaration" },
        { "value": "FSCW ", "label": "Fuel Surcharge Waived" },
        { "value": "Gate ", "label": "Gate Charge" },
        { "value": "HACIS ", "label": "HACIS" },
        { "value": "HAWBFE", "label": "HAWB FEE" },
        { "value": "HNDCRY", "label": "Hand Carry" },
        { "value": "IEF ", "label": "進口報關手續費" },
        { "value": "IMPVAT", "label": "Import VAT" },
        { "value": "IRC ", "label": "Insurance Risk Charge" },
        { "value": "LABEL ", "label": "Label Charges" },
        { "value": "LEF ", "label": "Linex Execution Fee" },
        { "value": "LSF ", "label": "Linex Service Fee" },
        { "value": "MISC ", "label": "Misc. Charges" },
        { "value": "OOA ", "label": "Out of Area" },
        { "value": "OOH ", "label": "Out of Hours" },
        { "value": "pack ", "label": "Packing" },
        { "value": "PFLC ", "label": "Parafiscal Charge" },
        { "value": "PRC ", "label": "Packing/ Repacking Charges" },
        { "value": "PRF ", "label": "Paperless Register Fee" },
        { "value": "RCR ", "label": "RCAR Charges" },
        { "value": "RDF ", "label": "報單費" },
        { "value": "REMOTE", "label": "REMOTE AREA" },
        { "value": "RHC ", "label": "假日收費" },
        { "value": "RPX ", "label": "RPX" },
        { "value": "SCD ", "label": "Simplified Customs Declaration" },
        { "value": "SFC ", "label": "Stuffing Charges" },
        { "value": "SPC ", "label": "Special Pick Up Charge" },
        { "value": "SSCL ", "label": "Social Security Contribution Levy" },
        { "value": "SZX ", "label": "SZX Pick up charges" },
        { "value": "SZX-GP", "label": "SZX Pick up charges - Guangdong Province" },
        { "value": "TOLL ", "label": "Toll Charges" },
        { "value": "TS ", "label": "Transhipment" },
        { "value": "UPICK ", "label": "Urgent Pick up" },
        { "value": "VAT-99", "label": "Reserved Code Do not use" },
        { "value": "VOR ", "label": "Vorlageprovision 3%" },
        { "value": "WRS ", "label": "War Risk Surcharge" },
        { "value": "XRAY ", "label": "X-RAY CHARGES" }
      ]
        break
    default:
      return[]
      break;
  }
}
export const freightTitle = (mode:string)=>{
  switch (mode) {
      case strings.air:
        return "Air Freight Charges"
      case strings.seaFCL:
        return "Ocean Freight Charges"
      case strings.seaLCL:
        return "Ocean Freight Charges"
      case strings.crossBorderTrucking:
        return "Trucking Charges"      
    default:
      break;
  }
}


export const polChargeOptions = (category:string)=>{
  switch (category) {
    case strings.shippingLine:
      return[
        {label:`BL fees - Bill of Lading`,value:`BL fees - Bill of Lading`},
        {label:`THC - Terminal Handling Charge `,value:`THC - Terminal Handling Charge `},
        {label:`VGM - Verified Gross Mass`,value:`VGM - Verified Gross Mass`},
        {label:`IHC - Inland Haulage`,value:`IHC - Inland Haulage`},
        {label:`MUC - Mandatory User Charges`,value:`MUC - Mandatory User Charges`},
        {label:`ISPS - International Ship And Port Facility Security Code`,value:`ISPS - International Ship And Port Facility Security Code`},
        {label:`Seal Charges`,value:`Seal Charges`},
        {label:`Agent Handling Fees `,value:`Agent Handling Fees `},
        {label:`Origin Detention Fee`,value:`Origin Detention Fee`},
        {label:`Destination Detention fee`,value:`Destination Detention fee`},
        {label:`Origin Demurrage Charges`,value:`Origin Demurrage Charges`},
        {label:`Destination Demurrage Charges`,value:`Destination Demurrage Charges`},
        {label:`Marine Fuel Recovery`,value:`Marine Fuel Recovery`},
        {label:`Entry Summary Declaration`,value:`Entry Summary Declaration`},
        {label:`Landing Certificate Charges`,value:`Landing Certificate Charges`},
        {label:`Courier Charges`,value:`Courier Charges`},
        {label:`Re Seal Charges`,value:`Re Seal Charges`},
        {label:`VGM registration`,value:`VGM registration`},
        {label:`No Show Charges`,value:`No Show Charges`},
        {label:`Damage Container`,value:`Damage Container`},
        {label:`Export Detention Fee`,value:`Export Detention Fee`},
        {label:`Seaway Bill`,value:`Seaway Bill`},
        {label:`Weighbridge Fee`,value:`Weighbridge Fee`},
        {label:`Carrier Lift on Lift off prepaid`,value:`Carrier Lift on Lift off prepaid`},
        {label:`Lashing & Choking Charges`,value:`Lashing & Choking Charges`},
        {label:`Handling Fee`,value:`Handling Fee`},
        {label:`Repositioning Cost`,value:`Repositioning Cost`},
        {label:`Destination Certificate Charge`,value:`Destination Certificate Charge`},
        {label:`Temperature Variation Charge`,value:`Temperature Variation Charge`},
        {label:`BL Amendment Fee`,value:`BL Amendment Fee`},
        {label:`Feeder Documentation Charges`,value:`Feeder Documentation Charges`},
        {label:`House BL`,value:`House BL`},
        {label:`Origin Certificate Charge`,value:`Origin Certificate Charge`},
        {label:`BL Surrender Charges`,value:`BL Surrender Charges`},
        {label:`Container Inspection Fees`,value:`Container Inspection Fees`},
        {label:`Container Monitoring Charges`,value:`Container Monitoring Charges`},
        {label:`Vessel Age Certificate charges`,value:`Vessel Age Certificate charges`},
        {label:`Shipping Certificate`,value:`Shipping Certificate`},
        {label:`Shipped On Board Certificate charge`,value:`Shipped On Board Certificate charge`},
        {label:`Special Service Request`,value:`Special Service Request`},
        {label:`Port Storage Charges`,value:`Port Storage Charges`},
        {label:`Import Detention fee`,value:`Import Detention fee`},
        {label:`SI Filing`,value:`SI Filing`},
        {label:`Switch Bl Charges`,value:`Switch Bl Charges`},
        {label:`Pick Up`,value:`Pick Up`},
        {label:`Recovery for Handling - Export`,value:`Recovery for Handling - Export`},
        {label:`Booking Fee`,value:`Booking Fee`},
        {label:`Equipment Interchange Receipt`,value:`Equipment Interchange Receipt`},
        {label:`Empty Container Sterilization Fee`,value:`Empty Container Sterilization Fee`},
        {label:`Container Reposition Charges`,value:`Container Reposition Charges`},
        {label:`Export Survey Fee`,value:`Export Survey Fee`},
        {label:`Via Charges`,value:`Via Charges`},
        {label:`Examination Delivery Order Fee`,value:`Examination Delivery Order Fee`},
        {label:`Pre Carriage`,value:`Pre Carriage`},
        {label:`Export Storage`,value:`Export Storage`},
        {label:`Shutout Charges`,value:`Shutout Charges`},
        {label:`Container Tracking Charges`,value:`Container Tracking Charges`},
        {label:`Inter Terminal Transfer Charges`,value:`Inter Terminal Transfer Charges`},
        {label:`Noc Charges`,value:`Noc Charges`},
        {label:`GPS Tracking`,value:`GPS Tracking`},
        {label:`Container Release Order Fee`,value:`Container Release Order Fee`},
        {label:`Empty Container Discharge`,value:`Empty Container Discharge`},
        {label:`Insurance`,value:`Insurance`},
        {label:`Offloading Charges`,value:`Offloading Charges`},
        {label:`Additional Seal Charge`,value:`Additional Seal Charge`},
        {label:`Shifting Charge`,value:`Shifting Charge`},
        {label:`Ground Rent`,value:`Ground Rent`},
        {label:`Cargo Facility Charge`,value:`Cargo Facility Charge`},
        {label:`Export Demurrage Charges`,value:`Export Demurrage Charges`},
        {label:`Origin Courier Charges`,value:`Origin Courier Charges`},
        {label:`Vessel Certificate fee`,value:`Vessel Certificate fee`},
        {label:`Port and Harbor dues`,value:`Port and Harbor dues`},
        {label:`Free Days Certificate Fee`,value:`Free Days Certificate Fee`},
        {label:`BL reissue Fee`,value:`BL reissue Fee`},
        {label:`Spot Booking Cancellation Fees`,value:`Spot Booking Cancellation Fees`},
        {label:`Liner Charges`,value:`Liner Charges`},
        {label:`Commission Fee`,value:`Commission Fee`},
        {label:`Outstation Charges`,value:`Outstation Charges`},
        {label:`Roll Over Charges`,value:`Roll Over Charges`},
        {label:`Origin Documentation Fee`,value:`Origin Documentation Fee`},
        {label:`Agent Handling Fees  `,value:`Agent Handling Fees  `},
        {label:`Destination Documentation Fee`,value:`Destination Documentation Fee`},
        {label:`Plugin Charges`,value:`Plugin Charges`},
      ]
      break;
    
    case strings.custom:
      return[
        {label:`Surveying Charge`,value:`Surveying Charge`},
        {label:`Fumigation`,value:`Fumigation`},
        {label:`Transportation charges`,value:`Transportation charges`},
        {label:`Wildlife Noc Charges`,value:`Wildlife Noc Charges`},
        {label:`COO - Certification of Origin Charges`,value:`COO - Certification of Origin Charges`},
        {label:`Forklift Charges`,value:`Forklift Charges`},
        {label:`Pickup Charges`,value:`Pickup Charges`},
        {label:`AD Code Registration`,value:`AD Code Registration`},
        {label:`Label & Marking`,value:`Label & Marking`},
        {label:`Loading/Unloading charges`,value:`Loading/Unloading charges`},
        {label:`Examination charge`,value:`Examination charge`},
        {label:`Licence Registration`,value:`Licence Registration`},
        {label:`Weighment Charge`,value:`Weighment Charge`},
        {label:`Customs Clearance Origin`,value:`Customs Clearance Origin`},
        {label:`Agency Comission`,value:`Agency Comission`},
        {label:`Documentation Charges`,value:`Documentation Charges`},
        {label:`Customs Clearance Destination`,value:`Customs Clearance Destination`},
        {label:`Amendment charges`,value:`Amendment charges`},
        {label:`Insurance Premium Charges`,value:`Insurance Premium Charges`},
        {label:`Custom Fine & Penalty`,value:`Custom Fine & Penalty`},
        {label:`License de-registration fee`,value:`License de-registration fee`},
        {label:`License registration fee`,value:`License registration fee`},
        {label:`Stuffing/Destuffing Charge`,value:`Stuffing/Destuffing Charge`},
        {label:`Open Examination`,value:`Open Examination`},
        {label:`Examination Fees`,value:`Examination Fees`},
        {label:`Carting Charges`,value:`Carting Charges`},
        {label:`Lashing & Choking Charges`,value:`Lashing & Choking Charges`},
        {label:`Wrapping & Strapping Charges`,value:`Wrapping & Strapping Charges`},
        {label:`Origin Certificate Charge`,value:`Origin Certificate Charge`},
        {label:`Weighing Charges`,value:`Weighing Charges`},
        {label:`MEIS Licence Registration`,value:`MEIS Licence Registration`},
        {label:`Lab Report Charges`,value:`Lab Report Charges`},
        {label:`ICEGATE Charges`,value:`ICEGATE Charges`},
        {label:`On Wheel Charges`,value:`On Wheel Charges`},
        {label:`Destination Certificate Charge`,value:`Destination Certificate Charge`},
        {label:`Quarantine And Disinfection Fee`,value:`Quarantine And Disinfection Fee`},
        {label:`Palletization`,value:`Palletization`},
        {label:`Paper Lining Charge`,value:`Paper Lining Charge`},
        {label:`Warai Charge`,value:`Warai Charge`},
        {label:`Cargo unloading charges`,value:`Cargo unloading charges`},
        {label:`Phyto Sanitary Certificate`,value:`Phyto Sanitary Certificate`},
        {label:`Repacking Charges`,value:`Repacking Charges`},
        {label:`Landing Certificate`,value:`Landing Certificate`},
        {label:`Self Sealing Permission Charges`,value:`Self Sealing Permission Charges`},
        {label:`VGM Charges`,value:`VGM Charges`},
        {label:`Buffer Movement Charges`,value:`Buffer Movement Charges`},
        {label:`Shipping Bill Cancellation Fee`,value:`Shipping Bill Cancellation Fee`},
        {label:`Back To Town`,value:`Back To Town`},
        {label:`S/BILL Amendment Charges`,value:`S/BILL Amendment Charges`},
        {label:`Ground Rent`,value:`Ground Rent`},
        {label:`Warehouse Charges`,value:`Warehouse Charges`},
        {label:`Port Registration Fee`,value:`Port Registration Fee`},
        {label:`Stamp Duty Charges`,value:`Stamp Duty Charges`},
        {label:`CFS Lift On/Off Charges`,value:`CFS Lift On/Off Charges`},
      ]
      break;
    
      case strings.cfsTerminal: 
      return[
        {label:`INTERNAL CONTAINER SHIFTING`,value:`INTERNAL CONTAINER SHIFTING`},
        {label:`RAIL FREIGHT CHARGES`,value:`RAIL FREIGHT CHARGES`},
        {label:`FRENCHISE CHARGES`,value:`FRENCHISE CHARGES`},
        {label:`HANDLING CHARGES`,value:`HANDLING CHARGES`},
        {label:`DIRECT STUFFING`,value:`DIRECT STUFFING`},
        {label:`RESERVATION SPACE`,value:`RESERVATION SPACE`},
        {label:`FACTORY STUFFING`,value:`FACTORY STUFFING`},
        {label:`MOVEMENT OUT`,value:`MOVEMENT OUT`},
        {label:`TRANSPORTATION CHARGES`,value:`TRANSPORTATION CHARGES`},
        {label:`INSURANCE CHARGES`,value:`INSURANCE CHARGES`},
        {label:`EMPTY FREIGHT CHARGES (RAIL)`,value:`EMPTY FREIGHT CHARGES (RAIL)`},
        {label:`EMPTY TRANSPORTATION CHARGES`,value:`EMPTY TRANSPORTATION CHARGES`},
        {label:`DE-STUFFING`,value:`DE-STUFFING`},
        {label:`PENALTY-handling&transportation`,value:`PENALTY-handling&transportation`},
        {label:`PENALTY-storage`,value:`PENALTY-storage`},
        {label:`REIMBURSEMENT OF ELECTRICITY AND WATER`,value:`REIMBURSEMENT OF ELECTRICITY AND WATER`},
        {label:`PHOTO PASS`,value:`PHOTO PASS`},
        {label:`STUFFING`,value:`STUFFING`},
        {label:`RE-STUFFING`,value:`RE-STUFFING`},
        {label:`GROUND RENT EMPTY`,value:`GROUND RENT EMPTY`},
        {label:`GROUND RENT LOADED`,value:`GROUND RENT LOADED`},
        {label:`MOVEMENT`,value:`MOVEMENT`},
        {label:`WEIGHMENT`,value:`WEIGHMENT`},
        {label:`INITIAL FUMIGATION`,value:`INITIAL FUMIGATION`},
        {label:`FUMIGATION (ALL PEST CONTROL SERVICES INCLUDING CONTAINER)`,value:`FUMIGATION (ALL PEST CONTROL SERVICES INCLUDING CONTAINER)`},
        {label:`ENTRY FEES`,value:`ENTRY FEES`},
        {label:`REWORKING`,value:`REWORKING`},
        {label:`CONTAINER LOCKING`,value:`CONTAINER LOCKING`},
        {label:`LIFT ON LOADED`,value:`LIFT ON LOADED`},
        {label:`LIFT OFF LOADED`,value:`LIFT OFF LOADED`},
        {label:`LIFT ON EMPTY`,value:`LIFT ON EMPTY`},
        {label:`LIFT OFF EMPTY`,value:`LIFT OFF EMPTY`},
        {label:`BANK CHARGES`,value:`BANK CHARGES`},
        {label:`BOND STORAGE CHARGES`,value:`BOND STORAGE CHARGES`},
        {label:`RENT FROM OTHERS`,value:`RENT FROM OTHERS`},
        {label:`BOND MF CHARGES`,value:`BOND MF CHARGES`},
        {label:`BOND INSURANCE CHARGES`,value:`BOND INSURANCE CHARGES`},
        {label:`STORAGE CHARGES`,value:`STORAGE CHARGES`},
        {label:`CARTING CHARGES`,value:`CARTING CHARGES`},
        {label:`SEAL CHARGES`,value:`SEAL CHARGES`},
        {label:`LEVY CHARGES`,value:`LEVY CHARGES`},
        {label:`MOVEMENT SPECIAL OPERATION`,value:`MOVEMENT SPECIAL OPERATION`},
        {label:`OTHERS`,value:`OTHERS`},
        {label:`OVER TIME`,value:`OVER TIME`},
        {label:`EMPTY CONTAINER RAIL`,value:`EMPTY CONTAINER RAIL`},
        {label:`GENERAL SPACE`,value:`GENERAL SPACE`},
        {label:`IMPORT RAIL FREIGHT`,value:`IMPORT RAIL FREIGHT`},
        {label:`TERMINAL HANDLING CHARGES`,value:`TERMINAL HANDLING CHARGES`},
        {label:`DOCUMENTATION - CUSTOM`,value:`DOCUMENTATION - CUSTOM`},
        {label:`CMD - AUCTION`,value:`CMD - AUCTION`},
        {label:`AMENDMENT CHARGES`,value:`AMENDMENT CHARGES`},
        {label:`PALLET`,value:`PALLET`},
        {label:`SHIFTING CHARGES`,value:`SHIFTING CHARGES`},
        {label:`BACK TO TOWN CHARGES`,value:`BACK TO TOWN CHARGES`},
        {label:`SPECIAL OPERATION CHARGES`,value:`SPECIAL OPERATION CHARGES`},
        {label:`BAGGAGE HANDLING SERVICE (OTHER THAN ACC)`,value:`BAGGAGE HANDLING SERVICE (OTHER THAN ACC)`},
        {label:`BAGGAGE HANDLING SERVICE (IN CASE OF ACC)`,value:`BAGGAGE HANDLING SERVICE (IN CASE OF ACC)`},
        {label:`ENVIRONMENTAL CLEARANCE CHARGES`,value:`ENVIRONMENTAL CLEARANCE CHARGES`},
        {label:`TABLE SPACE`,value:`TABLE SPACE`},
        {label:`TOWER SPACE CHARGES`,value:`TOWER SPACE CHARGES`},
        {label:`ALL OPERATION RELATED TO REFER CONTAINER (EXCEPT GROUND RENT)`,value:`ALL OPERATION RELATED TO REFER CONTAINER (EXCEPT GROUND RENT)`},
        {label:`GROUND RENT FOR REFER CONTAINER`,value:`GROUND RENT FOR REFER CONTAINER`},
        {label:`DEDICATED WAREHOUSING`,value:`DEDICATED WAREHOUSING`},
        {label:`DIRECT DELIVERY FROM RAIL HEAD`,value:`DIRECT DELIVERY FROM RAIL HEAD`},
        {label:`INITIAL FUMIGATION`,value:`INITIAL FUMIGATION`},
        {label:`STRATEGIC ALLIANCE MANAGEMENT CHARGES (INCL FIXED & VARIABLE FEE)`,value:`STRATEGIC ALLIANCE MANAGEMENT CHARGES (INCL FIXED & VARIABLE FEE)`},
      ]
    
      case strings.transportations:
    return [
        { label: "PICKUP:1 TON", value: "PICKUP:1 TON" },
        { label: "TATA ACE: 800 KGS", value: "TATA ACE: 800 KGS" },
        { label: "TATA 407 : 2.5 TON", value: "TATA 407 : 2.5 TON" },
        { label: "LCV 14FT: 3.5 TON", value: "LCV 14FT: 3.5 TON" },
        { label: "LCV 14FT: 4 TON", value: "LCV 14FT: 4 TON" },
        { label: "LCV 17FT: 5 TON", value: "LCV 17FT: 5 TON" },
        { label: "LCV 19FT: 7 TON", value: "LCV 19FT: 7 TON" },
        { label: "6 WHEELER: 19FT-24FT, 9 TON", value: "6 WHEELER: 19FT-24FT, 9 TON" },
        { label: "10 WHEELER: 22FT, 16 TON", value: "10 WHEELER: 22FT, 16 TON" },
        { label: "12 WHEELER: 24FT, 25 TON", value: "12 WHEELER: 24FT, 25 TON" },
        { label: "14 WHEELER: 28FT, 30 TON", value: "14 WHEELER: 28FT, 30 TON" },
        { label: "19-22FT SINGLE AXLE: 6-TON", value: "19-22FT SINGLE AXLE: 6-TON" },
        { label: "24FT SINGLE AXLE: 7-9 TON", value: "24FT SINGLE AXLE: 7-9 TON" },
        { label: "24FT MULTI AXLE: 15 TON", value: "24FT MULTI AXLE: 15 TON" },
        { label: "32FT SINGLE AXLE: 7 TON", value: "32FT SINGLE AXLE: 7 TON" },
        { label: "32FT SINGLE AXLE: HQ 7 TON", value: "32FT SINGLE AXLE: HQ 7 TON" },
        { label: "32FT SINGLE AXLE: 9 TON", value: "32FT SINGLE AXLE: 9 TON" },
        { label: "32FT SINGLE AXLE: HQ 9 TON", value: "32FT SINGLE AXLE: HQ 9 TON" },
        { label: "32FT SINGLE AXLE: 10 TON", value: "32FT SINGLE AXLE: 10 TON" },
        { label: "32FT SINGLE AXLE: HQ 10 TON", value: "32FT SINGLE AXLE: HQ 10 TON" },
        { label: "32FT MULTI AXLE: HQ 15 TON", value: "32FT MULTI AXLE: HQ 15 TON" },
        { label: "32FT MULTI AXLE: 18 TON", value: "32FT MULTI AXLE: 18 TON" },
        { label: "32FT MULTI AXLE: HQ 18 TON", value: "32FT MULTI AXLE: HQ 18 TON" },
        { label: "32FT TRIPLE AXLE: 23 TON", value: "32FT TRIPLE AXLE: 23 TON" },
        { label: "40 FT FLATBED TRAILER AXLE: 28-TON", value: "40 FT FLATBED TRAILER AXLE: 28-TON" },
        { label: "40 FT SEMI-LOW BED TRAILER: 28-TON", value: "40 FT SEMI-LOW BED TRAILER: 28-TON" },
        { label: "40 FT FLATBED TRAILER TRIPLE AXLE: 35 TON", value: "40 FT FLATBED TRAILER TRIPLE AXLE: 35 TON" },
        { label: "40 FT SEMI-LOW BED TRAILER TRIPLE AXLE: 35 TON", value: "40 FT SEMI-LOW BED TRAILER TRIPLE AXLE: 35 TON" },
        { label: "20 FT FLATBED TRAILER: 28-TON", value: "20 FT FLATBED TRAILER: 28-TON" },
        { label: "20 FT FLATBED TRAILER AXLE: 28-TON", value: "20 FT FLATBED TRAILER AXLE: 28-TON" },
        { label: "20 FT FLATBED TRAILER TRIPLE AXLE: 35 TON", value: "20 FT FLATBED TRAILER TRIPLE AXLE: 35 TON" }
    ];
        break;

    default:
      return [];
      break;
  }
}

export const shippingLinesOptiopns = [
  { "label": "Mediterranean Shipping Company", "value": "MSC", "extra": "MSCU" },
  { "label": "Maersk Line", "value": "Maersk", "extra": "MAEU" },
  { "label": "CMA CGM", "value": "CMA CGM", "extra": "CMDU" },
  { "label": "COSCO Container Lines", "value": "COSCON", "extra": "COSU" },
  { "label": "Hapag Lloyd Container Line", "value": "Hapag", "extra": "HLCU" },
  { "label": "Evergreen Line", "value": "Evergreen", "extra": "EGLV" },
  { "label": "Hyundai Merchant Marine Co. Ltd", "value": "HMM", "extra": "HDMU" },
  { "label": "Ocean Network Express", "value": "ONE", "extra": "ONEY" },
  { "label": "Orient Overseas Container Line Ltd.", "value": "OOCL", "extra": "OOLU" },
  { "label": "Yang Ming Marine Transport Corp.", "value": "YML", "extra": "YMLU" },
  { "label": "ZIM Israel Navigation Astramaris", "value": "ZIM", "extra": "ZIMU" },
  { "label": "Wan Hai Lines", "value": "WHL", "extra": "22AA" },
  { "label": "Pacific International Lines", "value": "PIL", "extra": "PCIU" },
  { "label": "SITC Container Lines Co., LTD", "value": "SITC", "extra": "12PD" },
  { "label": "Korea Marine Transport Co., Ltd.", "value": "KMTC", "extra": "KMTU" },
  { "label": "Islamic Republic of Iran Shipping Lines", "value": "IRISL " },
  { "label": "Unifeeder", "value": "Unifeeder", "extra": "UFEE" },
  { "label": "X-Press Container Line", "value": "XCL", "extra": "XCLS" },
  { "label": "TS Lines", "value": "TSL", "extra": "TSTU" },
  { "label": "SM Line Corporation", "value": "SML", "extra": "SMLM" },
  { "label": "China United Lines", "value": "CU Lines", "extra": "CULU" },
  { "label": "Perma Shipping Line", "value": "Perma", "extra": "PMLU" },
  { "label": "Sinokor Merchant Marine Co.,Ltd", "value": "Sinokor", "extra": "SKLU" },
  { "label": "Regional Container Lines", "value": "RCL", "extra": "REGU" },
  { "label": "Matson Navigation Company Inc", "value": "MATS", "extra": "MATS" },
  { "label": "Swire Shipping", "value": "Swire", "extra": "CHVW" },
  { "label": "Emirates Shipping Line", "value": "Emirates", "extra": "ESPU" },
  { "label": "Arkas Container Transport S.A.", "value": "Arkas", "extra": "ARKU" },
  { "label": "Sinotrans Container Lines Co.,Ltd", "value": "Sinotrans", "extra": "12IH" },
  { "label": "American President Lines", "value": "APL", "extra": "APLU" },
  { "label": "AlianÃ§a NavegaÃ§Ã£o e LogÃ­stica", "value": "Alianca", "extra": "ANRM" },
  { "label": "Australia National Line", "value": "ANL", "extra": "ANNU" },
  { "label": "BLPL Singapore", "value": "BLPL", "extra": "BLZU" },
  { "label": "Interasia Lines", "value": "Interasia", "extra": "IAAU" },
  { "label": "Samudera Shipping Line Ltd", "value": "Samudera", "extra": "SIKU" },
  {},
  {},
  { "label": "Admiral Container Lines", "value": "Admiral", "extra": "ADMU" },
  { "label": "Advance Container Lines", "value": "AC Lines" },
  { "label": "Africa Express Line", "value": "AEL" },
  { "label": "Alaska Marine Lines", "value": "AML", "extra": "AKMR" },
  { "label": "Allalouf Shipping", "value": "Allalouf" },
  { "label": "Antillean Marine Shipping Corporation", "value": "Antillean Marine", "extra": "AMLU" },
  { "label": "Asiatic Shipping Services", "value": "AsiaTic", "extra": "AIDA" },
  { "label": "Atlantic Caribbean Line", "value": "AC Line", "extra": "ACBL" },
  { "label": "Atlantic Container Line", "value": "ACL", "extra": "ACLU" },
  { "label": "Atlantic Ro-Ro Carriers Inc", "value": "Atlantic Ro-Ro", "extra": "AROF" },
  { "label": "Avana Global FZCO", "value": "BALAJI", "extra": "BLJU" },
  { "label": "Avana Logistek", "value": "Avana" },
  { "label": "Balaji Shipping Lines FZCO", "value": "Balaji", "extra": "BLJU" },
  { "label": "Beacon Intermodal", "value": "Beacon" },
  { "label": "Bengal Tiger Line", "value": "BTL", "extra": "BTBI" },
  { "label": "Bermuda Container Line", "value": "BCL", "extra": "BCLU" },
  { "label": "Bermuda International Shipping Ltd", "value": "BISL", "extra": "BISU" },
  { "label": "BG Freight Line", "value": "BG Freight" },
  { "label": "Bien Dong Shipping Company", "value": "Bien Dong", "extra": "BIEN" },
  { "label": "Blue Anchor America Line", "value": "BAAL", "extra": "BANQ" },
  { "label": "Blue Water Lines", "value": "BWL", "extra": "BWLU" },
  { "label": "Blue World Line", "value": "BW Line", "extra": "BWLE" },
  { "label": "BMC Line Shipping LLC", "value": "BMC Line", "extra": "BMSU" },
  { "label": "Borchard Lines Ltd", "value": "Borchard", "extra": "BORU" },
  { "label": "Brointermed Lines Limited", "value": "BT", "extra": "BNAO" },
  { "label": "Navigation Maritime Bulgare", "value": "Bulcon", "extra": "NMBG" },
  { "label": "Seereederei Baco-Liner GmbH", "value": "Baco-Liner" },
  { "label": "Cahaya Samudera Shipping Pte Ltd", "value": "CSS" },
  { "label": "Care Lines", "value": "Care Lines" },
  { "label": "Central Gulf Lines, Inc", "value": "CGL", "extra": "CEGL" },
  { "label": "Ceylon Shipping Corporation Limited", "value": "CSC", "extra": "CEYP" },
  { "label": "Cheng Lie Navigation Co.,Ltd", "value": "CNC", "extra": "11DX" },
  { "label": "China Navigation Company", "value": "Swire Shipping", "extra": "CHVW" },
  { "label": "China Shipping Container Lines Co", "value": "CSCL", "extra": "CHNJ" },
  { "label": "Chinese-Polish Joint Stock Shipping Company", "value": "CHIPOLBROK", "extra": "CPJQ" },
  { "label": "Cido Car Carrier Services", "value": "CCCS" },
  { "label": "CK Line", "value": "CK Line", "extra": "CKLU" },
  { "label": "Columbia Coastal Transport, LLC", "value": "CCT" },
  { "label": "Compagnia Chilena de Navigacion Interoceanica SA", "value": "CCNI", "extra": "CNIU" },
  { "label": "Compania Sud Americana de Vapores", "value": "CSAV", "extra": "CHIW" },
  { "label": "Container H Lines", "value": "CHL" },
  { "label": "Containerships", "value": "Containerships", "extra": "CSFU" },
  { "label": "Conti-Lines", "value": "Conti-Lines" },
  { "label": "Crowley Maritime", "value": "Crowley", "extra": "CMCU, , CAMN" },
  { "label": "CSAL Canada States Africa Line", "value": "CSAL", "extra": "CFLD" },
  { "label": "CSAV Norasia", "value": "CSAV", "extra": "NSLU" },
  { "label": "Daylight Transport LLC", "value": "Daylight", "extra": "DYLT" },
  { "label": "Delmas", "value": "Delmas", "extra": "DVRU" },
  { "label": "Delphis", "value": "Delphis", "extra": "DPHS" },
  { "label": "Delta Shipping Lines", "value": "Delta", "extra": "DSLU" },
  { "label": "Deutsche Afrika-Linien", "value": "DAL", "extra": "DAYU" },
  { "label": "Dole Ocean Cargo", "value": "Dole", "extra": "DOLQ" },
  { "label": "Dong Young Shipping", "value": "Dong Young", "extra": "PSCU" },
  { "label": "Dongjin Shipping", "value": "Dongjin", "extra": "DJLU" },
  { "label": "Econ Shipping", "value": "Econship", "extra": "ECNU" },
  { "label": "ECU Worldwide", "value": "ECU", "extra": "ECUI" },
  { "label": "Ecuadorian Line", "value": "Ecuadorian Line", "extra": "EQLI" },
  { "label": "Egyptian Navigation Co.", "value": "ENC" },
  { "label": "Eimskip", "value": "Eimskip", "extra": "EIMU" },
  { "label": "Emkay Line", "value": "Emkay", "extra": "EMKU" },
  { "label": "Eucon", "value": "Eucon", "extra": "EUCU" },
  { "label": "Eukor", "value": "Eukor", "extra": "EUKO" },
  { "label": "Euro Container Line", "value": "ECL" },
  { "label": "Euro Marine Logistics", "value": "EML" },
  { "label": "EuroAfrica Shipping Lines co. Ltd.", "value": "ESL", "extra": "EULU" },
  { "label": "Far Eastern Shipping Company", "value": "FESCO", "extra": "FESO" },
  { "label": "Fednav", "value": "Fednav", "extra": "FCOM" },
  { "label": "Feederlink Shipping & Trading B.V.", "value": "Feederlink" },
  { "label": "Finnlines", "value": "Finnlines", "extra": "FLFU" },
  { "label": "Flexi-Van Leasing", "value": "Flexi-Van", "extra": "FLGZ" },
  { "label": "FLORENS CONTAINER SERVICES", "value": "Florens", "extra": "FBIU" },
  { "label": "Focus Trucking", "value": "FOCUS", "extra": "FCSK" },
  { "label": "Frontier Liner Services", "value": "FLS", "extra": "FLNV" },
  { "label": "G&G Shipping", "value": "G&G" },
  { "label": "Galborg", "value": "Galborg", "extra": "GFAL" },
  { "label": "Geest Line", "value": "Geest Line", "extra": "GILU" },
  { "label": "General National Maritime Transport Company", "value": "GNMTC" },
  { "label": "Global Container International", "value": "Global", "extra": "GCIU" },
  { "label": "Gold Star Line Ltd.", "value": "GSL", "extra": "GSLU" },
  { "label": "Gothong Southern Shipping Lines Incorporated", "value": "Gothong Southern" },
  { "label": "Great White Fleet", "value": "GWF", "extra": "UBCU" },
  { "label": "Greater Bali Hai", "value": "GBH" },
  { "label": "Grieg Star Shipping", "value": "Grieg Star", "extra": "ACSU" },
  { "label": "Grimaldi Deep Sea S.P.A.", "value": "Grimaldi", "extra": "GRIU" },
  { "label": "Grimaldi Lines", "value": "Grimaldi Lines", "extra": "GMGO" },
  { "label": "Hafez Darya Arya Shipping Company", "value": "HDSCO Line", "extra": "IRSU" },
  { "label": "Hamburg SÃ¼damerikanische Dampfschifffahrts-Gesellschaft A / S & Co. KG", "value": "Hamburg Sud", "extra": "SUDU" },
  { "label": "Hanoi Maritime Holding Company", "value": "Marina Hanoi" },
  { "label": "Hartmann Project Lines", "value": "HPL", "extra": "HALP" },
  { "label": "Heung-A Shipping Co., Ltd.", "value": "Heung-A", "extra": "11QU" },
  { "label": "Hoegh Autoliners", "value": "Hoegh", "extra": "HUAU" },
  { "label": "Horizon Lines", "value": "Horizon", "extra": "HRZU" },
  { "label": "HUBLine Berhad", "value": "HUBLine" },
  { "label": "Hugo Stinnes Linien GmbH", "value": "Hugo Stinnes" },
  { "label": "Hyde Shipping", "value": "Hyde Shipping", "extra": "HYDU" },
  { "label": "Independent Container Line", "value": "ICL", "extra": "IILU" },
  { "label": "Interocean Lines", "value": "Interocean Lines", "extra": "INOC" },
  { "label": "Interport", "value": "Interport" },
  { "label": "Industrial Maritime Carriers (Intermarine)", "value": "Intermarine", "extra": "IDMC" },
  { "label": "Italia Marittima", "value": "Italia Marittima" },
  { "label": "Jin Jiang Shipping", "value": "SHJJ", "extra": "11WJ" },
  { "label": "Kambara Kisen Co., Ltd.", "value": "Kambara", "extra": "KKCL" },
  { "label": "Kawasaki Kisen Kaisha, Ltd.", "value": "âKâ Line", "extra": "KKLU" },
  { "label": "King Ocean Services", "value": "King Ocean", "extra": "KOSL" },
  { "label": "Liberty Global Logistics, LLC", "value": "LGL", "extra": "LGLT" },
  { "label": "Linea Messina", "value": "Linea Messina", "extra": "LMCU" },
  { "label": "Libyan Shipping Lines", "value": "LSL" },
  { "label": "MacAndrews", "value": "MacAndrews" },
  { "label": "Maghreb / CL-Line", "value": "Maghreb" },
  { "label": "Malaysia International Shipping Corporation Berhad", "extra": "MISC" },
  { "label": "Marfret Compagnie Maritime", "value": "Marfret", "extra": "MFTU" },
  { "label": "Marguisa Shipping Lines", "extra": "MGSU" },
  { "label": "Mariana Express Lines Ltd", "value": "MELL", "extra": "MELL" },
  { "label": "Maritime Carrier Shipping Center GmbH & Co.", "value": "MACS", "extra": "ELOU" },
  { "label": "Maruba", "value": "Maruba", "extra": "MRUB" },
  { "label": "Maxicon Container Line", "value": "MCL", "extra": "MXCU" },
  { "label": "MCC Transport Pte. Ltd.", "value": "MCC", "extra": "MCCQ" },
  { "label": "Melfi Lines", "value": "Melfi Lines" },
  { "label": "Meratus Line", "value": "Meratus", "extra": "MRTU" },
  { "label": "Mercosul Line", "value": "Mercosul" },
  { "label": "Minsheng Ocean Shipping", "value": "Minsheng", "extra": "13CQ" },
  { "label": "Mitsui O.S.K. Lines", "value": "MOL", "extra": "MOLU" },
  { "label": "MTL Feeder", "value": "MTL" },
  { "label": "Murmansk Shipping Company", "value": "MSCO" },
  { "label": "Namsung Shipping Co., Ltd.", "value": "Namsung", "extra": "NSRU" },
  { "label": "North Sea Container Line", "value": "NSL" },
  { "label": "Nile Dutch Africa Line", "value": "NDS", "extra": "NIDU" },
  { "label": "Nepal Shipping Lines", "value": "Nepal Shipping" },
  { "label": "Neptune Shipping Line", "value": "Neptune", "extra": "NOSU" },
  { "label": "Neptune Pacific Direct Line", "value": "NPDL", "extra": "PDLU" },
  { "label": "Nirint Shipping Lines", "value": "Nirint Shipping", "extra": "32GH" },
  { "label": "NMT International Shipping", "value": "NMT" },
  { "label": "Nor Lines", "value": "Nor Lines" },
  { "label": "National Shipping of America", "value": "NSA" },
  { "label": "NSC Arkhangelsk", "value": "NSC" },
  { "label": "NYK Ro-Ro", "value": "NYK Ro Ro" },
  { "label": "Nordana Line", "value": "Nordana", "extra": "NODA" },
  { "label": "Nippon Yusen Kabushiki Kaisha Line", "value": "NYK Line", "extra": "NYKS" },
  { "label": "Ocean Africa Container Lines", "value": "Ocean Africa" },
  { "label": "Oldenburg-Portugiesische Dampfschiffs-Rheederei", "value": "OPDR", "extra": "OPDU" },
  { "label": "Orient Express Lines Singapore (Pte) Ltd.", "value": "OEL" },
  { "label": "Orient Star Transport International Ltd", "value": "Orient Star", "extra": "OSTI" },
  { "label": "PACC Container Line", "value": "PACC" },
  { "label": "Pan Asia Logistics India Pvt Ltd", "value": "Pan Asia Line", "extra": "PALU" },
  { "label": "Pan Continental Shipping Co., Ltd.", "value": "PanCon", "extra": "PCLU" },
  { "label": "Pan Ocean Co Ltd", "value": "PanOcean", "extra": "POBU" },
  { "label": "Pacific Direct Line", "value": "PDL" },
  { "label": "Pacific Eagle Lines", "value": "PEL" },
  { "label": "Pacific Forum Line", "value": "PFL" },
  { "label": "POL-LEVANT Shipping Lines", "value": "POL-LEVANT" },
  { "label": "Polynesia Line", "value": "POLY", "extra": "PLLU" },
  { "label": "Pasha Hawaii Transport Lines", "value": "Pasha Hawaii", "extra": "PSHI" },
  { "label": "PORTLINE Bulk International, SA", "value": "Portline" },
  { "label": "Qatar Navigation Lines", "value": "QNL", "extra": "QNLU" },
  { "label": "Royal Arctic Line", "value": "RAL" },
  { "label": "Reef Shipping", "value": "Reef" },
  { "label": "RMR Shipping", "value": "RMR Shipping" },
  { "label": "Safmarine", "value": "Safmarine", "extra": "SAFM" },
  { "label": "Salam Pacific Indonesia Lines", "value": "SPIL", "extra": "SPNU" },
  { "label": "Sallaum Lines", "value": "Sallaum", "extra": "SLAQ" },
  { "label": "Samskip, Inc.", "value": "Samskip", "extra": "SKII" },
  { "label": "Sarjak Container Lines", "value": "Sarjak", "extra": "SJKU" },
  { "label": "Sakhalin Shipping Company", "value": "SASCO" },
  { "label": "Shipco Transport", "value": "Shipco", "extra": "SHPT" },
  { "label": "Shipping Corporation of India Ltd.", "value": "SCI", "extra": "SCIU" },
  { "label": "Sea Cargo Logistics", "value": "SCL" },
  { "label": "Seaboard Marine Ltd.", "value": "Seaboard Marine", "extra": "SMLU" },
  { "label": "Sea Consortium", "value": "SeaCon" },
  { "label": "SeaFreight Line", "value": "SeaFreight", "extra": "SEFN" },
  { "label": "Sea Hawk Lines", "value": "SHAL", "extra": "SHKU" },
  { "label": "SeaLand", "value": "SeaLand", "extra": "SEJJ, MCCQ, SEAU" },
  { "label": "Seatrade Maritime", "value": "Seatrade" },
  { "label": "Siem Car Carriers AS", "value": "SIEM", "extra": "SCYE" },
  { "label": "Simatech Shipping and Forwarding L.L.C", "value": "Simatech Shipping" },
  { "label": "SETH Shipping", "value": "SETH", "extra": "SSPH" },
  { "label": "Sloman Neptun Schiffahrts AG", "value": "Sloman" },
  { "label": "Sofrana Surville", "value": "Sofrana" },
  { "label": "Sante Shipping Lines", "value": "SSL" },
  { "label": "Star Feeders", "value": "Star Feeders" },
  { "label": "Star Shipping", "value": "Star Shipping" },
  { "label": "Stolt Tank Containers", "value": "STC", "extra": "SNTU" },
  { "label": "STX Pan Ocean", "value": "STX", "extra": "POBU" },
  { "label": "Sunmarine Shipping Services", "value": "Sunmarine", "extra": "BAXU" },
  { "label": "Swan Container Line", "value": "Swan" },
  { "label": "Tarros S.p.a.", "value": "Tarros", "extra": "GETU" },
  { "label": "Taicang Container Lines", "value": "Taicang", "extra": "32GG" },
  { "label": "Team Lines", "value": "Team Lines" },
  { "label": "TOTE Maritime (Sea Star Line)", "value": "TOTE Maritime", "extra": "STRU" },
  { "label": "Trans Asia Shipping Line", "value": "Trans Asia", "extra": "TLXU" },
  { "label": "Transportes Maritimos Insulares, S.A.", "value": "Transinsular" },
  { "label": "Transvision Shipping Line", "value": "Transvision", "extra": "TVSU" },
  { "label": "Tropical Shipping", "value": "Tropical", "extra": "TSGL" },
  { "label": "Tschudi Lines", "value": "Tschudi" },
  { "label": "Turkon Line Inc", "value": "Turkon", "extra": "TRKU" },
  { "label": "Thorco Shipping", "value": "Thorco", "extra": "THZS" },
  { "label": "TOHO Shipping Co., Ltd", "value": "TOHO", "extra": "TOHO" },
  { "label": "Trinity Shipping Line", "value": "Trinity", "extra": "TRNH" },
  { "label": "United Feeder Services", "value": "UFS", "extra": "UFSB" },
  { "label": "Universal Africa Lines", "value": "UAL", "extra": "UALC" },
  { "label": "United Arab Shipping Company Co.(S.A.G)", "value": "UASC", "extra": "UASC" },
  { "label": "US Lines", "value": "USL", "extra": "USLU" },
  { "label": "Valmer Lines", "value": "Valmer" },
  { "label": "Van Uden Maritime", "value": "Van Uden" },
  { "label": "Van den Ban Autobanden B.V.", "value": "Van den Ban", "extra": "VDBU" },
  { "label": "Van Donge & de Roo", "value": "D&R", "extra": "VDDR" },
  { "label": "Vasco Maritime", "value": "Vasco" },
  { "label": "Vietnam National Shipping Lines", "value": "VINALines" },
  { "label": "Wallenius Wilhelmsen Logistics", "value": "WWL", "extra": "WLWH" },
  { "label": "West European Container Lines", "value": "WEC", "extra": "WECU" },
  { "label": "Westwood Shipping Lines", "value": "Westwood", "extra": "WWSU" },
  { "label": "World Logistics Service (USA) Inc", "value": "WLS", "extra": "WDLS" },
  { "label": "Zeamarine", "value": "Zeamarine", "extra": "RCKI" }
]

export const sortOptions = [
  'Lowest Ocean Freight' ,
  'Lowest Total landed cost' ,
  'Lowest Transit Time' ,
  'Least Transhipment Ports' ,
  'Earliest Departure' 
];


export const airlinesOptions = [
  { label: "EK - Emirates SkyCargo", country: "Dubai" },
  { label: "CX - Cathay Pacific Airways", country: "Hong Kong" },
  { label: "LH - Lufthansa Cargo", country: "Germany" },
  { label: "QR - Qatar Airways Cargo", country: "Qatar" },
  { label: "FX - FedEx Express", country: "United States" },
  { label: "AF - Air France", country: "France" },
  { label: "KL - KLM Cargo", country: "Netherlands" },
  { label: "KE - Korean Air", country: "South Korea" },
  { label: "CV - Cargolux Airlines", country: "Luxembourg" },
  { label: "SQ - Singapore Airlines Cargo", country: "Singapore" },
  { label: "5X - UPS Airlines", country: "United States" },
  { label: "CI - China Airlines", country: "Taiwan ROC" },
  { label: "CA - Air China", country: "China PRC" },
  { label: "5Y - Atlas Air", country: "United States" },
  { label: "BA - British Airways", country: "United Kingdom" },
  { label: "EY - Etihad Airways Crystal Cargo", country: "Abu Dhabi" },
  { label: "CZ - China Southern Airlines", country: "China PRC" },
  { label: "NH - All Nippon Airways", country: "Japan" },
  { label: "OZ - Asiana Airlines", country: "South Korea" },
  { label: "MU - China Eastern Airlines", country: "China PRC" },
  { label: "TK - Turkish Airlines", country: "Turkey" },
  { label: "LA - LATAM Airlines", country: "Chille" },
  { label: "IB - Iberia", country: "Spain" },
  { label: "BR - EVA Air", country: "Taiwan ROC" },
  { label: "UA - United Airlines Cargo", country: "United States" },
  { label: "AA - American Airlines Cargo", country: "United States" },
  { label: "EL - Air Nippon", country: "Japan" },
  { label: "DL - Delta Air Lines", country: "United States" },
  { label: "T2 - Thai Air Cargo", country: "Thailand" },
  { label: "TG - Thai Airways", country: "Thailand" },
  { label: "JL - Japan Airlines", country: "Japan" },
  { label: "QF - Qantas Freight", country: "Australia" },
  { label: "K4 - Kalitta Air", country: "United States" },
  { label: "AC - Air Canada", country: "Canada" },
  { label: "7L - Silk Way West Airlines", country: "Azerbaijan" },
  { label: "VS - Virgin Atlantic Cargo", country: "United Kingdom" },
  { label: "NZ - Air New Zealand", country: "New Zealand" },
  { label: "HU - Hainan Airlines", country: "China" },
  { label: "AV - Avianca", country: "Colombia" },
  { label: "MH - MASKargo", country: "Malaysia" },
  { label: "MH - Malaysia airlines", country: "Malaysia" },
  { label: "SV - Saudi Airlines Cargo", country: "Saudi Arabia" },
  { label: "AY - Finnair Cargo", country: "Finland" },
  { label: "SK - SAS-Scandinavian Airlines System", country: "Denmark" },
  { label: "SA - South African Airways Cargo", country: "South Africa" },
  { label: "AZ - Alitalia", country: "Italy" },
  { label: "AI - Air India", country: "India" },
  { label: "LY - El Al Israel Airlines", country: "Israel" },
  { label: "WY - Oman Air", country: "Oman" },
  { label: "PR - Philippine Airlines", country: "Philippines" },
  { label: "DW - ACR Aero-Charter Airlines", country: "Ukraine" },
  { label: "E2 - Kampuchea Airlines", country: "Cambodia" },
  { label: "E4 - Aero Asia International", country: "Pakistan" },
  { label: "E6 - Bringer Air Cargo", country: "Brazil" },
  { label: "E8 - ALPI Eagles", country: "Italy" },
  { label: "E9 - AJT Air International", country: "Russia" },
  { label: "EB - Emery Worldwide", country: "United States" },
  { label: "ED - Airblue", country: "Pakistan" },
  { label: "EG - Japan Asia Airways", country: "Japan" },
  { label: "EH - SAETA-Soc.Ecuatoriana de Transp.Aereos", country: "Ecuador" },
  { label: "EM - Empire Airlines", country: "United States" },
  { label: "EO - Demavia Airlines", country: "Belgium" },
  { label: "EQ - TAME-Linea Aerea del Ecuador", country: "Ecuador" },
  { label: "EV - Atlantic Southeast Airlines", country: "United States" },
  { label: "F4 - Shanghai Airlines Cargo", country: "China PRC" },
  { label: "F6 - First Cambodia Airlines", country: "Cambodia" },
  { label: "FB - Fine Air Services", country: "United States" },
  { label: "FD - Cityflyer", country: "United Kingdom" },
  { label: "FG - Ariana Afghan Airlines", country: "Afghanistan" },
  { label: "FJ - Air Pacific", country: "Fiji" },
  { label: "FL - AirTran", country: "United States" },
  { label: "FM - Shanghai Airlines", country: "China PRC" },
  { label: "FS - STAF Airlines", country: "Argentina" },
  { label: "FU - Air Littoral", country: "France" },
  { label: "G4 - Allegiant Air", country: "United States" },
  { label: "GA - Garuda Indonesia", country: "Indonesia" },
  { label: "GB - ABX Air", country: "United States" },
  { label: "GD - TAESA - Transportes Aereos Ejecutivos", country: "Mexico" },
  { label: "GF - Gulf Air", country: "Bahrain" },
  { label: "GL - Air Greenland", country: "Greenland" },
  { label: "GN - Air Gabon", country: "Gabon" },
  { label: "GO - GO", country: "United Kingdom" },
  { label: "GT - GB Airways", country: "United Kingdom" },
  { label: "GV - Riga Airlines", country: "Latvia" },
  { label: "GY - Gabon Airlines", country: "Gabon" },
  { label: "H7 - Air Alfa", country: "Turkey" },
  { label: "HA - Hawaiian Airlines", country: "United States" },
  { label: "HH - Islandsflug", country: "Iceland" },
  { label: "HL - Business Express (Delta Connection)", country: "United States" },
  { label: "HP - America West Airlines", country: "United States" },
  { label: "HS - Highland Air", country: "Sweden" },
  { label: "HU - Hainan Airlines", country: "China PRC" },
  { label: "HX - Hamburg Airlines", country: "Germany" },
  { label: "HZ - SAT Airlines", country: "Russia" },
  { label: "IA - Iraqi Airways", country: "Iraq" },
  { label: "IE - Solomon Airlines", country: "Solomon Is" },
  { label: "IH - Falcon Air", country: "Sweden" },
  { label: "II - IBC Airways Inc", country: "United States" },
  { label: "IK - Imair Airline", country: "Azerbaijan" },
  { label: "IP - Atyrau Airways", country: "Kazakhstan" },
  { label: "IR - Iran Air", country: "Iran" },
  { label: "IT - Kingfisher Airlines", country: "India" },
  { label: "IW - AOM-Minerve", country: "France" },
  { label: "IY - Yemenia Airways", country: "Yemen" },
  { label: "IZ - Arkia-Israeli Airlines", country: "Israel" },
  { label: "J3 - Northwestern Air Lease", country: "Canada" },
  { label: "J7 - Centre-Avia Airlines", country: "Russia" },
  { label: "JA - B&H Airlines", country: "Bosnia-Herzegovina" },
  { label: "JF - Lab Flying Service", country: "United States" },
  { label: "JH - Nordeste-Linhas Aereas Regionais", country: "Brazil" },
  { label: "JJ - TAM Linhas Aereas", country: "Brazil" },
  { label: "JN - XL Airways", country: "United Kingdom" },
  { label: "JP - Adria Airways", country: "Slovenia" },
  { label: "JQ - Jetstar", country: "Australia" },
  { label: "JS - Air Koryo", country: "North Korea" },
  { label: "JV - Bearskin Airlines", country: "United States" },
  { label: "JX - Jett8 Airlines Cargo", country: "Singapore" },
  { label: "K2 - Kyrgyzstan Airlines", country: "Kyrgyzstan" },
  { label: "K5 - Air East Africa", country: "Kenya" },
  { label: "K7 - Sakha Avia", country: "Russia" },
  { label: "K9 - Skyward Aviation", country: "Canada" },
  { label: "KB - Druk Air", country: "Bhutan" },
  { label: "KD - Kendell Airlines", country: "Australia" },
  { label: "KF - Blue1", country: "Finland" },
  { label: "KG - Aerogaviota", country: "Cuba" },
  { label: "KJ - British Mediterranean Airways", country: "United Kingdom" },
  { label: "LD - Air Hong Kong", country: "Hong Kong" },
  { label: "LF - Linjeflyg", country: "Sweden" },
  { label: "LI - LIAT (1974)", country: "Antigua & Barbuda" },
  { label: "LK - Air Luxor", country: "Portugal" },
  { label: "LM - ALM Airline", country: "Neth. Antilles" },
  { label: "LO - LOT Polish Airlines", country: "Poland" },
  { label: "LQ - Air Guinea Cargo", country: "Equatorial Guinea" },
  { label: "LV - Albanian Airlines", country: "Albania" },
  { label: "LW - Pacific Wings", country: "United States" },
  { label: "M3 - ABSA Cargo Airline", country: "Brazil" },
  { label: "M6 - Amerijet", country: "United States" },
  { label: "M9 - Motor Sich JSC Airlines", country: "Ukraine" },
  { label: "MB - MNG Airlines", country: "Turkey" },
  { label: "MD - Air Madagascar", country: "Madagascar" },
  { label: "MF - Xiamen Airlines", country: "China PRC" },
  { label: "MI - SilkAir", country: "Singapore" },
  { label: "MK - Air Mauritius", country: "Mauritius" },
  { label: "ML - Aero Costa Rica", country: "Peru" },
  { label: "MN - Kulula.com", country: "South Africa" },
  { label: "MP - Martinair", country: "Netherlands" },
  { label: "MS - Egyptair", country: "Egypt" },
  { label: "MT - jmc airlines", country: "United Kingdom" },
  { label: "MV - Armenian International Airways", country: "Armenia" },
  { label: "MY - Mas Air", country: "Mexico" },
  { label: "N6 - Aero Continente", country: "Peru" },
  { label: "N7 - Lagun Air", country: "Spain" },
  { label: "NA - National Airlines", country: "United States" },
  { label: "NC - Northern Air Cargo", country: "United States" },
  { label: "NG - Lauda Air", country: "Austria" },
  { label: "NK - Spirit Airlines", country: "United States" },
  { label: "NM - Mount Cook", country: "New Zealand" },
  { label: "NQ - Orbi Georgian Airlines", country: "Georgia" },
  { label: "NU - Japan TransOcean Air", country: "Japan" },
  { label: "NW - Northwest Airlines", country: "United States" },
  { label: "NY - Air Iceland", country: "Iceland" },
  { label: "OB - Astrakhan Airlines", country: "Russia" },
  { label: "OG - Air Guadaloupe", country: "Guadaloupe" },
  { label: "OK - Czech Airlines", country: "Czech Republic" },
  { label: "OM - MIAT-Mongolian Airlines", country: "Mongolia" },
  { label: "OO - SkyWest Airlines", country: "United States" },
  { label: "OS - Austrian Cargo", country: "Austria" },
  { label: "OT - Avant Airlines", country: "Chile" },
  { label: "OV - Estonian Air", country: "Estonia" },
  { label: "P4 - Pacific International Airlines", country: "Panama" },
  { label: "P6 - Trans Air", country: "United States" },
  { label: "PB - Provincial Airlines", country: "Canada" },
  { label: "PC - Air Fiji", country: "Fiji" },
  { label: "PE - Air Europe", country: "Italy" },
  { label: "PF - Palestinian Airlines", country: "Palestine" },
  { label: "PH - Polynesian Airlines", country: "Samoa" },
  { label: "PK - Pakistan International Airlines", country: "Pakistan" },
  { label: "PO - Polar Air Cargo", country: "United States" },
  { label: "PS - Ukraine International Airlines", country: "Ukraine" },
  { label: "PW - Precision Air", country: "Tanzania" },
  { label: "PX - Air Niugini", country: "Papua New Guinea" },
  { label: "PZ - TAM Mercosur", country: "Paraguay" },
  { label: "Q5 - 40 Mile Air", country: "United States" },
  { label: "Q9 - Interbrasil Star", country: "Brazil" },
  { label: "QA - Aerovias Caribe", country: "Mexico" },
  { label: "QK - Air Nova/Air Canada Regional Airlines", country: "Canada" },
  { label: "QM - Air Malawi", country: "Malawi" },
  { label: "QO - Aeromexpress Cargo", country: "Mexico" },
  { label: "QU - Uganda Airlines", country: "Uganda" },
  { label: "QV - Lao Airways", country: "Laos" },
  { label: "QX - Horizon Airlines", country: "United States" },
  { label: "R2 - Orenair", country: "Russia" },
  { label: "R3 - Armenian Airlines", country: "Armenia" },
  { label: "RA - Royal Nepal Airlines", country: "Nepal" },
  { label: "RC - Atlantic Airways", country: "Faroe Is" },
  { label: "RG - VARIG Brazilian Airlines", country: "Brazil" },
  { label: "RK - Air Afrique", country: "Ivory Coast" },
  { label: "RN - Euralair International", country: "France" },
  { label: "RO - TAROM-Romanian Air Transport", country: "Romania" },
  { label: "RV - Reeve Aleutian Airways", country: "United States" },
  { label: "RX - Redwing Airways", country: "United States" },
  { label: "SP - SATA - Air Acores", country: "Azores" },
  { label: "SS - Corsair", country: "France" },
  { label: "SU - Aeroflot-Cargo", country: "Russia" },
  { label: "SW - Air Namibia", country: "Namibia" },
  { label: "SZ - China Southwest Airlines", country: "China PRC" },
  { label: "T3 - Eastern Airways", country: "United Kingdom" },
  { label: "T5 - Turkmenistan Airlines", country: "Turkmenistan" },
  { label: "T7 - Transaer", country: "Ireland" },
  { label: "TA - TACA International Airlines/Groupo TACA", country: "El Salvador" },
  { label: "TF - Malmo Aviation", country: "Sweden" },
  { label: "TH - Transmile Air Services", country: "Malaysia" },
  { label: "TL - Trans Mediterranean Airways", country: "Lebanon" },
  { label: "TN - Air Tahiti Nui", country: "French Polynesia" },
  { label: "TP - TAP-Air Portugal", country: "Portugal" },
  { label: "TQ - Tandem Aero", country: "Moldova" },
  { label: "TS - Air Transat", country: "Canada" },
  { label: "TU - Tunisair", country: "Tunisia" },
  { label: "TV - Virgin Express", country: "Belgium" },
  { label: "TY - Air Caledonie", country: "France" },
  { label: "U3 - Air Plus Argentina", country: "Argentina" },
  { label: "U8 - Armavia", country: "Armenia" },
  { label: "UD - Fast Air Carrier", country: "Chile" },
  { label: "UG - Tuninter", country: "Tunisia" },
  { label: "UK - KLCuk", country: "United Kingdom" },
  { label: "UL - Srilankan Airlines", country: "Sri Lanka" },
  { label: "UN - Transaero Airlines", country: "Russia" },
  { label: "US - US Airways", country: "United States" },
  { label: "UX - Air Europa", country: "Spain" },
  { label: "UY - Cameroon Airlines", country: "Cameroon" },
  { label: "V3 - Carpatair", country: "Romania" },
  { label: "V8 - ATRAN Cargo Airlines", country: "Russia" },
  { label: "VA - Volare Airlines", country: "Italy" },
  { label: "VB - Maersk Air (UK)", country: "United Kingdom" },
  { label: "VD - Air Liberte", country: "France" },
  { label: "VF - British World Airlines", country: "United Kingdom" },
  { label: "VH - Aeropostal Alas de Venezuela", country: "Venezuela" },
  { label: "VK - Air Tungaru", country: "Kiribati" },
  { label: "VN - Vietnam Airlines", country: "Vietnam" },
  { label: "VP - VASP", country: "Brazil" },
  { label: "VQ - Impulse Airlines", country: "Australia" },
  { label: "VU - Air Ivoire", country: "Ivory Coast" },
  { label: "VW - Transportes Aeromar SA de CV", country: "Mexico" },
  { label: "VY - Formosa Airlines", country: "Taiwan ROC" },
  { label: "W5 - Mahan Air", country: "Iran" },
  { label: "W7 - Sayakhat Air Company", country: "Kazakhstan" },
  { label: "WB - Rwandair Express", country: "Rwanda" },
  { label: "WE - Centurion Air Cargo", country: "United States" },
  { label: "WH - China Northwest Airlines", country: "China PRC" },
  { label: "WK - American Falcon", country: "Argentina" },
  { label: "WN - Southwest Airlines", country: "United States" },
  { label: "WQ - Romavia", country: "Romania" },
  { label: "WV - Air South Airlines", country: "United States" },
  { label: "WZ - West African Airlines", country: "Benin" },
  { label: "X7 - Chita Avia", country: "Russia" },
  { label: "X8 - Icaro", country: "Ecuador" },
  { label: "XE - ExpressJet", country: "United States" },
  { label: "XG - North American Airlines", country: "Canada" },
  { label: "XK - Compagnie Corse Mediterranee", country: "France" },
  { label: "XM - Australian Air Express", country: "Australia" },
  { label: "XQ - SunExpress", country: "Turkey" },
  { label: "XR - Skywest Airlines", country: "Australia" },
  { label: "XX - Aeronaves del Peru", country: "Peru" },
  { label: "Y7 - Silverjet Cargo/Flyjet", country: "United Kingdom" },
  { label: "Y9 - Kish Air", country: "Iran" },
  { label: "YI - Air Sunshine", country: "United States" },
  { label: "YK - Cyprus Turkish Airlines", country: "North Cyprus" },
  { label: "YN - Air Creebec", country: "Canada" },
  { label: "YP - Aero Lloyd", country: "Germany" },
  { label: "YS - Regional", country: "France" },
  { label: "YT - Air Togo", country: "Togo" },
  { label: "YV - Mesa Airlines", country: "United States" },
  { label: "YX - Midwest Airlines", country: "United States" },
  { label: "Z3 - Avient Aviation", country: "United Kingdom" },
  { label: "Z6 - Dniproavia", country: "Ukraine" },
  { label: "Z7 - Sahara Air Cargo", country: "Tanzania" },
  { label: "ZB - Monarch Airlines", country: "United Kingdom" },
  { label: "ZE - Lineas Aereas Azteca", country: "Mexico" },
  { label: "ZK - Great Lakes Aviation Ltd", country: "United States" },
  { label: "G9 - Air Arabia", country: "UAE" },
  { label: "AK - Air Asia", country: "Malayasia" },
  { label: "D7 - Air Asia X", country: "Malayasia" },
  { label: "TR - Tiger Airways Cargo", country: "Singapore" },
  { label: "LP - Lan Peru", country: "Peru" },
  { label: "LR - TACA/LACSA-Lineas Aereas Costarricenses", country: "Costa Rica" },
  { label: "LX - Swiss WorldCargo", country: "Switzerland" },
  { label: "LZ - Balkan Bulgarian Airlines", country: "Bulgaria" },
  { label: "M4 - Avioimpex", country: "Macedonia" },
  { label: "M8 - AirMax Cargo", country: "Peru" },
  { label: "MA - Malev Hungarian Airlines", country: "Hungary" },
  { label: "ME - Middle East Airlines", country: "Lebanon" },
  { label: "MJ - LAPA Lineas Aereas Privadas Argentinas", country: "Argentina" },
  { label: "MM - Sociedad Aeronautica de Medellin (SAM)", country: "Colombia" },
  { label: "MO - Calm Air International ltd", country: "Canada" },
  { label: "MR - Air Mauritanie", country: "Mauritania" },
  { label: "MX - Mexicana", country: "Mexico" },
  { label: "MZ - Merpati Nusantara", country: "Indonesia" },
  { label: "N8 - Hong Kong Airlines Ltd", country: "Hong Kong" },
  { label: "NB - Sterling", country: "Denmark" },
  { label: "NF - Air Vanuatu", country: "Vanuatu" },
  { label: "NI - Portugalia Airlines", country: "Portugal" },
  { label: "VG - VLM Airlines", country: "Belgium" },
  { label: "NL - Shaheen Air International", country: "Pakistan" },
  { label: "NN - Air Martinique", country: "Martinique" },
  { label: "NT - Binter Canarias", country: "Canary Is" },
  { label: "NV - NWT Air", country: "Canada" },
  { label: "NX - Air Macau", country: "Macau" },
  { label: "OA - Olympic Airways", country: "Greece" },
  { label: "OF - Air Finland", country: "Finland" },
  { label: "OH - Comair - Delta Connection", country: "United States" },
  { label: "OL - OLT- Ostfriesische Lufttransport GmbH", country: "Germany" },
  { label: "ON - Our Airline", country: "Nauru" },
  { label: "OR - Crimea Air", country: "Ukraine" },
  { label: "OU - Croatia Airlines", country: "Croatia" },
  { label: "OX - Orient Thai Airlines", country: "Thailand" },
  { label: "P2 - Tyumenavia", country: "Russia" },
  { label: "P5 - AeroRepublica", country: "Colombia" },
  { label: "P7 - Russian Sky Airlines", country: "Russia" },
  { label: "PD - Pemair", country: "Canada" },
  { label: "PG - Bangkok Airways", country: "Thailand" },
  { label: "PI - Sunflower Airlines", country: "Fiji" },
  { label: "PL - Aeroperu", country: "Peru" },
  { label: "PT - West Air Sweden", country: "Sweden" },
  { label: "PU - PLUNA", country: "Uruguay" },
  { label: "PY - Surinam Airways", country: "Surinam" },
  { label: "Q3 - Zambian Airways", country: "Zambia" },
  { label: "Q7 - Sobelair", country: "Belgium" },
  { label: "QC - Air Zaire", country: "Congo DR" },
  { label: "QI - Cimber Sterling", country: "Denmark" },
  { label: "QL - Aero Lanka", country: "Sri Lanka" },
  { label: "QN - Air Armenia", country: "Armenia" },
  { label: "QQ - Reno Air", country: "United States" },
  { label: "QT - Tampa Air Cargo", country: "Colombia" },
  { label: "QW - Blue Wings", country: "Germany" },
  { label: "QY - European Air Transport", country: "Belgium" },
  { label: "R7 - ASERCA Airlines", country: "Venezuela" },
  { label: "RB - Syrianair", country: "Syria" },
  { label: "RF - Florida West International Airways", country: "United States" },
  { label: "RJ - Royal Jordanian", country: "Jordan" },
  { label: "RM - Air Moldova International", country: "Moldova" },
  { label: "RQ - Swisswings Airlines", country: "Switzerland" },
  { label: "RU - Skyking Airlines", country: "Turks & Caicos Is" },
  { label: "RW - Republic Airlines", country: "United States" },
  { label: "RZ - SANSA Servicios Aereos Nacionales", country: "Costa Rica" },
  { label: "S2 - Sahara Airlines", country: "India" },
  { label: "S3 - SBA Airlines", country: "Venezuela" },
  { label: "S4 - SATA International", country: "Azores" },
  { label: "S5 - Shuttle America", country: "United States" },
  { label: "S6 - Air St Martin", country: "Guadaloupe" },
  { label: "S7 - S7 Airlines", country: "Russia" },
  { label: "S8 - ELK-Estonian Aviation Company", country: "Estonia" },
  { label: "S9 - East African Safari Air", country: "Kenya" },
  { label: "SB - Air Caledonie International", country: "New Caledonia" },
  { label: "SC - Shandong Airlines", country: "China PRC" },
  { label: "SD - Sudan Airways", country: "Sudan" },
  { label: "SE - XL Airways France", country: "France" },
  { label: "SF - Tassili Airlines", country: "Algeria" },
  { label: "SG - Sempati Air", country: "Indonesia" },
  { label: "SH - Air Toulouse International", country: "France" },
  { label: "SI - Skynet Airlines", country: "Ireland" },
  { label: "SL - Rio-Sul Servicos Aereos Regionais SA", country: "Brazil" },
  { label: "SM - Sunworld International Airlines", country: "United States" },
  { label: "SN - Brussels Cargo", country: "Belgium" },
  { label: "SY - Sun Country Airlines", country: "United States" },
  { label: "T2 - Thai Air Cargo", country: "Thailand" },
  { label: "T4 - TransEast Airlines", country: "Latvia" },
  { label: "T6 - Tavrey Airlines", country: "Ukraine" },
  { label: "TC - Air Tanzania", country: "Tanzania" },
  { label: "TE - flyLAL - Lithuanian Airlines", country: "Lithuania" },
  { label: "TG - Thai Airways", country: "Thailand" },
  { label: "TM - LAM-Linhas Aereas de Mozambique", country: "Mozambique" },
  { label: "TO - President Airlines", country: "Cambodia" },
  { label: "TX - Air Caraibes", country: "Guadaloupe" },
  { label: "TZ - American Trans Air", country: "United States" },
  { label: "U6 - Ural Airlines", country: "Russia" },
  { label: "UC - LAN Cargo", country: "Chile" },
  { label: "UF - UM Air", country: "Ukraine" },
  { label: "UI - Eurocypria Airlines", country: "Cyprus" },
  { label: "UM - Air Zimbabwe", country: "Zimbabwe" },
  { label: "UP - Bahamasair", country: "United States" },
  { label: "UU - Air Austral", country: "Reunion" },
  { label: "V2 - Karat", country: "Russia" },
  { label: "V7 - Air Senegal International", country: "Senegal" },
  { label: "V9 - Bashkir Airlines", country: "Russia" },
  { label: "VC - Servivensa-Empresa Servicios Avensa", country: "Venezuela" },
  { label: "VE - Avensa", country: "Venezuela" },
  { label: "E3 - Domodedovo Airlines", country: "Russia" },
  { label: "E5 - Samara Airlines", country: "Russia" },
  { label: "E7 - Estafeta Carga Aerea", country: "Mexico" },
  { label: "EA - European Air Express", country: "Germany" },
  { label: "EC - Avialeasing", country: "Uzbekistan" },
  { label: "EF - Far Eastern Air Transport", country: "Taiwan ROC" },
  { label: "EI - Aer Lingus Cargo", country: "Ireland" },
  { label: "EN - Air Dolomiti SPA", country: "Italy" },
  { label: "EP - Iran Aseman Airlines", country: "Iran" },
  { label: "ES - DHL/SNAS", country: "Bahrain" },
  { label: "EU - Ecuatoriana Airlines", country: "Ecuador" },
  { label: "EW - Eurowings", country: "Germany" },
  { label: "EZ - Evergreen International Airlines", country: "United States" },
  { label: "F5 - Cosmic Air", country: "Nepal" },
  { label: "FA - Safair", country: "South Africa" },
  { label: "FC - Falcon Express Cargo Airline", country: "Dubai" },
  { label: "FF - Tower Air", country: "United States" },
  { label: "FI - Icelandair Cargo", country: "Iceland" },
  { label: "FK - Africa West", country: "Togo" },
  { label: "FR - Ryanair", country: "Ireland" },
  { label: "FT - Fly FTI", country: "United Kingdom" },
  { label: "FV - Rossiya Airlines", country: "Russia" },
  { label: "G3 - Aerochago Airlines", country: "Dominican Republic" },
  { label: "G7 - GoJet Airlines", country: "United States" },
  { label: "GC - Gambia International Airlines", country: "Gambia" },
  { label: "GE - Transasia Airways", country: "Taiwan ROC" },
  { label: "GI - Air Guinee", country: "Guinea" },
  { label: "GM - Luxavia/Flitestar/Trek Airways", country: "South Africa" },
  { label: "GR - Gemini Air Cargo", country: "United States" },
  { label: "GU - TACA/Aviateca", country: "Guatemala" },
  { label: "H5 - Magadan Airlines", country: "Russia" },
  { label: "H8 - Dalavia", country: "Russia" },
  { label: "HF - Tuifly", country: "Germany" },
  { label: "HM - Air Seychelles", country: "Seychelles" },
  { label: "HO - Antinea Airlines", country: "United Kingdom" },
  { label: "HR - Hahn Air", country: "Germany" },
  { label: "HV - Transavia Airlines", country: "Netherlands" },
  { label: "HY - Uzbekistan Airways", country: "Uzbekistan" },
  { label: "I9 - Air Italy", country: "Italy" },
  { label: "IC - Indian Airlines", country: "India" },
  { label: "IJ - TAT European Airlines", country: "France" },
  { label: "IN - Macedonian Airlines-MAT", country: "Macedonia" },
  { label: "IQ - Augsburg Airways", country: "Germany" },
  { label: "IV - Air Gambia", country: "Gambia" },
  { label: "IX - Flandre Air", country: "France" },
  { label: "J2 - Azerbaijan Airlines", country: "Azerbaijan" },
  { label: "J5 - Aviaprima Sochi Airlines", country: "Russia" },
  { label: "J8 - Berjaya Air", country: "Malaysia" },
  { label: "JB - Helijet Airways", country: "Canada" },
  { label: "JG - Air Greece-Aerodromis", country: "Greece" },
  { label: "JI - Jade Cargo International", country: "China PRC" },
  { label: "JK - Spanair", country: "Spain" },
  { label: "JM - Air Jamaica", country: "Jamaica" },
  { label: "JO - JAL Ways", country: "Japan" },
  { label: "JR - Aero California", country: "Mexico" },
  { label: "JU - Jat Airways", country: "Serbia" },
  { label: "JW - Arrow Cargo", country: "United States" },
  { label: "JZ - Skyways AB", country: "Sweden" },
  { label: "K8 - Kalingrad Air Enterprise", country: "Russia" },
  { label: "KA - Dragonair", country: "Hong Kong" },
  { label: "KH - Aloha Air Cargo", country: "United States" },
  { label: "KK - Atlasjet", country: "Turkey" },
  { label: "KM - Air Malta", country: "Malta" },
  { label: "KO - Khors Aircompany", country: "Ukraine" },
  { label: "KP - Kiwi International Airlines", country: "United States" },
  { label: "KQ - Kenya Airways", country: "Kenya" },
  { label: "KR - Kitty Hawk Aircargo", country: "United States" },
  { label: "KS - Penair", country: "United States" },
  { label: "KU - Kuwait Airways", country: "Kuwait" },
  { label: "KX - Cayman Airways", country: "Cayman Is" },
  { label: "KY - Air Sao Tome e Principe", country: "Sao Tome & Principe" },
  { label: "KZ - Linea Aerea", country: "Venezuela" },
  { label: "L2 - Lynden Air Cargo", country: "United States" },
  { label: "L3 - DHL de Guatemala", country: "Guatemala" },
  { label: "L4 - Lauda Air Italy", country: "Italy" },
  { label: "L6 - Air Maldives", country: "Maldives" },
  { label: "L9 - Air Mali S.A.", country: "Mali" },
  { label: "LA - LAN Airlines", country: "Chile" },
  { label: "LB - Lloyd Aereo Boliviano (LAB)", country: "Bolivia" },
  { label: "LC - Loganair", country: "United Kingdom" },
  { label: "LE - Laparkan Airways", country: "United States" },
  { label: "LG - Luxair", country: "Luxembourg" },
  { label: "LJ - Sierra National Airlines", country: "Sierra Leone" },
  { label: "LL - Lineas Aereas Allegro", country: "Mexico" },
  { label: "LN - Libyan Airlines", country: "Libya" },
  { label: "DT - TAAG Angola Airlines", country: "Angola" },
  { label: "VI - Vieques Air Link", country: "Puerto Rico" },
  { label: "VL - Air VIA Bulgarian Airways", country: "Bulgaria" },
  { label: "VO - Tyrolean Airways/Austrian Arrows", country: "Austria" },
  { label: "VR - Transportes Aereos de Cabo Verde (TACV)", country: "Cape Verde" },
  { label: "VT - Air Tahiti", country: "French Polynesia" },
  { label: "VV - AeroSvit Airlines", country: "Ukraine" },
  { label: "VX - ACES-Aerolineas Central de Colombia", country: "Colombia" },
  { label: "W3 - Flyhy Cargo Airlines", country: "Thailand" },
  { label: "W8 - Cargojet Airways", country: "Canada" },
  { label: "WC - Islena Airlines", country: "Honduras" },
  { label: "WF - Wideroe Cargo", country: "Norway" },
  { label: "WJ - Air Labrador", country: "Canada" },
  { label: "WM - Windward Island Airways", country: "Neth. Antilles" },
  { label: "WO - World Airways", country: "United States" },
  { label: "WR - Royal Tongan Airlines", country: "Tonga" },
  { label: "WX - Cityjet", country: "Ireland" },
  { label: "X3 - Baikal", country: "Russia" },
  { label: "XC - Air Caribbean", country: "Neth. Antilles" },
  { label: "XF - Vladivostok Air", country: "Russia" },
  { label: "XJ - Mesaba Aviation", country: "United States" },
  { label: "XL - LAN Ecuador", country: "Ecuador" },
  { label: "XO - Xinjiang Airlines", country: "China PRC" },
  { label: "XT - KLM Exel", country: "Netherlands" },
  { label: "XZ - South African Express Airways", country: "South Africa" },
  { label: "Y8 - Yangtze River Express Airlines", country: "China PRC" },
  { label: "YC - Flight West Airlines", country: "Australia" },
  { label: "YL - Yamal Airlines", country: "Russia" },
  { label: "YM - Montenegro Airlines", country: "Serbia" },
  { label: "YQ - Polet Cargo Airlines", country: "Cyprus" },
  { label: "YU - Aerolineas Dominicanas", country: "Dominican Republic" },
  { label: "YW - Air Nostrum LAMSA", country: "Spain" },
  { label: "Z2 - Styrian Airlines", country: "Austria" },
  { label: "Z5 - GMG Airlines", country: "Bangladesh" },
  { label: "Z9 - Aero Zambia", country: "South Africa" },
  { label: "ZC - Royal Swazi National Airways", country: "Swaziland" },
  { label: "ZI - Aigle Azur Transport Aeriens", country: "France" },
  { label: "AX - Air Aurora", country: "United States" },
  { label: "B2 - Belavia", country: "Belarus" },
  { label: "B4 - Bhoja Airlines", country: "Pakistan" },
  { label: "BD - bmi Cargo", country: "United Kingdom" },
  { label: "BE - FlyBE", country: "United Kingdom" },
  { label: "BG - Biman Bangladesh Airlines", country: "Bangladesh" },
  { label: "BL - Pacific Airlines", country: "Vietnam" },
  { label: "BP - Air Botswana", country: "Botswana" },
  { label: "BT - Air Baltic", country: "Latvia" },
  { label: "BW - Caribbean Airlines", country: "Trinidad & Tobago" },
  { label: "BY - Thomsonfly", country: "United Kingdom" },
  { label: "C3 - Icar Airlines", country: "Ukraine" },
  { label: "C6 - Bright Air", country: "Netherlands" },
  { label: "C7 - Special Cargo Airlines", country: "Russia" },
  { label: "C9 - Cirrus Airlines", country: "Germany" },
  { label: "CC - Air Atlanta Icelandic", country: "Iceland" },
  { label: "CE - Nationwide Air", country: "South Africa" },
  { label: "CJ - China Northern Airlines", country: "China PRC" },
  { label: "CL - Lufthansa CityLine", country: "Germany" },
  { label: "CO - Continental Airlines", country: "United States" },
  { label: "CS - Continental Micronesia", country: "Guam" },
  { label: "CU - Cubana", country: "Cuba" },
  { label: "DP - First Choice Airways", country: "United Kingdom" },
  { label: "ZL - Affretair", country: "Zimbabwe" },
  { label: "ZM - Scibe Airlift", country: "Congo DR" },
  { label: "ZN - Eagle Airlines", country: "Austria" },
  { label: "ZP - Air St Thomas", country: "Puerto Rico" },
  { label: "ZQ - Ansett New Zealand", country: "New Zealand" },
  { label: "ZR - Aviacon Zitotrans", country: "Russia" },
  { label: "ZS - Azzurra Air", country: "Italy" },
  { label: "ZU - Helios Airways", country: "United Kingdom" },
  { label: "ZV - Air Midwest", country: "United States" },
  { label: "ZW - Air Wisconsin Airlines", country: "United States" },
  { label: "ZY - Ada Air", country: "Albania" },
  { label: "3V - TNT Airways", country: "Belgium" },
  { label: "3Z - Necon Air", country: "Nepal" },
  { label: "4B - Perimeter Airlines (Inland) Ltd", country: "Canada" },
  { label: "4D - Air Sinai", country: "Egypt" },
  { label: "4L - Air Astana", country: "Kazakhstan" },
  { label: "4N - Air North", country: "Canada" },
  { label: "4V - Voyageur Airways", country: "Canada" },
  { label: "5C - CAL Cargo Airlines", country: "Israel" },
  { label: "5G - Skyservice", country: "Canada" },
  { label: "5J - Cebu Pacific Air", country: "Philippines" },
  { label: "5L - Aerosur", country: "Bolivia" },
  { label: "5N - Aeroflot-Nord", country: "Russia" },
  { label: "5T - Canadian North Cargo", country: "Canada" },
  { label: "5Z - Airfreight Express", country: "United Kingdom" },
  { label: "6B - Britannia Airways", country: "Sweden" },
  { label: "6F - Laker Airways", country: "United States" },
  { label: "6H - Israir", country: "Israel" },
  { label: "6K - Korsar Airlines", country: "Russia" },
  { label: "6M - Maverick Airways", country: "United States" },
  { label: "6P - DAC Air SA", country: "Romania" },
  { label: "5U - Lineas Aereas Del Estado", country: "Argentina" },
  { label: "6R - Georgian Airlines", country: "Georgia" },
  { label: "6V - Lignes Aeriennes Congolaises - LAC", country: "Congo DR" },
  { label: "6Y - TACA/Nicaraguense de Aviacion", country: "Nicaragua" },
  { label: "7B - KrasAir", country: "Russia" },
  { label: "7D - Donbassaero", country: "Ukraine" },
  { label: "7F - Air Kufra", country: "Libya" },
  { label: "7H - Era Aviation (Alaska Airlines Commuter)", country: "United States" },
  { label: "7J - Tajikair", country: "Tajikistan" },
  { label: "7M - Air Atlantique", country: "United Kingdom" },
  { label: "7Q - Air Libya", country: "Libya" },
  { label: "7Z - Laker Bahamas", country: "United States" },
  { label: "8A - Americana", country: "Peru" },
  { label: "8D - Expo Aviation", country: "Sri Lanka" },
  { label: "8P - Pacific Coastal Airlines Limited", country: "Canada" },
  { label: "8U - Afriqiyah Airways", country: "Libya" },
  { label: "9A - Air Atlantic", country: "Canada" },
  { label: "9F - Haiti Air Freight International", country: "Haiti" },
  { label: "9K - Cape Air", country: "United States" },
  { label: "9M - Central Mountain Air", country: "Canada" },
  { label: "9S - Spring Airlines", country: "China PRC" },
  { label: "9U - Air Moldova", country: "Moldova" },
  { label: "9V - Avior Airlines", country: "Venezuela" },
  { label: "9Y - Air Kazakhstan", country: "Kazakhstan" },
  { label: "A3 - Aegean Airlines", country: "Greece" },
  { label: "A6 - Air Alps", country: "Austria" },
  { label: "A7 - Air Comet", country: "Spain" },
  { label: "AG - Air Contractors", country: "Ireland" },
  { label: "AL - Transaviaexport Airlines", country: "Belarus" },
  { label: "AO - Aviaco", country: "Spain" },
  { label: "AP - Air One", country: "Italy" },
  { label: "AS - Alaska Airlines", country: "United States" },
  { label: "AU - Austral Lineas Aereas", country: "Argentina" },
  { label: "1A - Leader Jet", country: "United States" },
  { label: "2A - AECA-Aeroservicios Ecuatorianos CA", country: "Ecuador" },
  { label: "2B - ATA Aerocondor Transportes Aereos", country: "Portugal" },
  { label: "2E - Sky Cabs", country: "Sri Lanka" },
  { label: "2F - Payam Air", country: "Iran" },
  { label: "2G - Cargoitalia", country: "Italy" },
  { label: "2J - Air Burkina", country: "Burkina Faso" },
  { label: "2M - Moldavian Airlines", country: "Moldova" },
  { label: "2P - Air Philippines", country: "Philippines" },
  { label: "2R - Regal (Crownair)", country: "United States" },
  { label: "2U - Air Guinee Express", country: "Guinea" },
  { label: "3A - Alliance Airlines", country: "United States" },
  { label: "3D - Palair Macedonia", country: "Macedonia" },
  { label: "3G - Atlant-Soyuz", country: "Russia" },
  { label: "3H - Air Inuit", country: "Canada" },
  { label: "3J - Air Alliance Inc", country: "Canada" },
  { label: "3K - Everts Air Cargo", country: "United States" },
  { label: "3M - Gulfstream International Airlines", country: "United States" },
  { label: "3Q - Yunnan Airlines", country: "China PRC" },
  { label: "3T - Turan Air", country: "Azerbaijan" },
  { label: "3U - Sichuan Airlines", country: "China PRC" },
  { label: "3X - Premier Trans Aire", country: "United States" },
  { label: "6Z - Panavia Cargo Airlines", country: "Panama" },
  { label: "7C - Coyne Airways", country: "United Kingdom" },
  { label: "7G - Cargo d'Or", country: "United Kingdom" },
  { label: "7I - Insel Air", country: "Neth. Antilles" },
  { label: "7L - Aero Caribbean", country: "Cuba" },
  { label: "7P - APA International Air", country: "United States" },
  { label: "7T - Trans Am", country: "Ecuador" },
  { label: "8C - Air Transport International", country: "United States" },
  { label: "8M - Myanmar Airways International", country: "Myanmar" },
  { label: "8S - Scorpio Aviation", country: "Egypt" },
  { label: "8V - Astral Aviation", country: "Kenya" },
  { label: "9J - Pacific Island Aviation", country: "Northern Marianas" },
  { label: "9L - Colgan Air", country: "United States" },
  { label: "9R - Phuket Airlines", country: "Thailand" },
  { label: "9T - Transwest Air", country: "Canada" },
  { label: "9W - Jet Airways", country: "India" },
  { label: "A2 - Cielos Airlines", country: "Peru" },
  { label: "A4 - Southern Winds", country: "Argentina" },
  { label: "A8 - Benin Golf Air", country: "Benin" },
  { label: "AB - Air Berlin", country: "Germany" },
  { label: "AE - Mandarin Airlines", country: "Taiwan ROC" },
  { label: "AH - Air Algerie", country: "Algeria" },
  { label: "AM - Aeromexico", country: "Mexico" },
  { label: "AR - Aerolineas Argentinas", country: "Argentina" },
  { label: "AT - Royal Air Maroc", country: "Morocco" },
  { label: "AW - Schreiner Airways", country: "Netherlands" },
  { label: "B3 - Bellview Airlines", country: "Nigeria" },
  { label: "B7 - UNI Air", country: "Taiwan ROC" },
  { label: "BB - Cargo B", country: "Belgium" },
  { label: "BF - Bluebird Cargo", country: "Iceland" },
  { label: "BI - Royal Brunei Airlines", country: "Brunei" },
  { label: "BO - Bouraq Airlines", country: "Indonesia" },
  { label: "BQ - Aeromar", country: "United States" },
  { label: "BV - Blue Panorama Airlines", country: "Italy" },
  { label: "BX - Coast Air AS", country: "Norway" },
  { label: "BZ - Blue Dart Aviation", country: "India" },
  { label: "C4 - Click Airways", country: "Sharjah" },
  { label: "C8 - Chicago Express Airlines", country: "United States" },
  { label: "CD - Air India Regional", country: "India" },
  { label: "CK - China Cargo Airlines", country: "China PRC" },
  { label: "CM - COPA Airlines", country: "Panama" },
  { label: "CP - Canadian Airlines International", country: "Canada" },
  { label: "CT - Air Sofia", country: "Bulgaria" },
  { label: "CW - Air Marshall Islands", country: "Marshall Is" },
  { label: "CY - Cyprus Airways", country: "Cyprus" },
  { label: "D2 - Skyline NEPC", country: "India" },
  { label: "D3 - Daallo Airlines", country: "Djibouti" },
  { label: "D5 - DHL Aero Expreso", country: "Panama" },
  { label: "D6 - Interair South Africa", country: "South Africa" },
  { label: "D8 - Diamond Sakha Airlines", country: "Russia" },
  { label: "D9 - Aeroflot-Don", country: "Russia" },
  { label: "DA - Air Georgia", country: "Georgia" },
  { label: "DB - Brit Air", country: "France" },
  { label: "DE - Condor", country: "Germany" },
  { label: "DF - Deer Jet", country: "China PRC" },
  { label: "DG - Custom Air Transport", country: "United States" },
  { label: "DH - Atlantic Coast Airlines (United Express)", country: "United States" },
  { label: "DI - dba", country: "Germany" },
  { label: "DJ - Virgin Blue", country: "Australia" },
  { label: "DK - MyTravel Airways", country: "Denmark" },
  { label: "DM - Maersk Air Cargo", country: "Denmark" },
  { label: "DO - Dominicana de Aviacion", country: "Dominican Republic" },
  { label: "DQ - Coastal Air Transport", country: "Virgin Is (USA)" },
  { label: "DU - Hemus Air", country: "Bulgaria" },
  { label: "DY - Norwegian Air Shuttle", country: "Norway" },
  { label: "4C - Aires Colombia (Aerovias de Integracion)", country: "Colombia" },
  { label: "4G - Shenzhen Airlines", country: "China PRC" },
  { label: "4M - LAN Argentina", country: "Argentina" },
  { label: "4Z - Airlink", country: "South Africa" },
  { label: "5D - Aerolitoral", country: "Mexico" },
  { label: "5K - State Air Company Odessa Airlines", country: "Ukraine" },
  { label: "5M - Sibavia", country: "Russia" },
  { label: "5S - Global Aviation and Services", country: "Libya" },
  { label: "5W - Astraeus", country: "United Kingdom" },
  { label: "6A - AVIACSA- Consorcio Aviaxsa SA de CV", country: "Mexico" },
  { label: "6D - Pelita Air Service", country: "Indonesia" },
  { label: "6G - Gabon Airlines Cargo", country: "Gabon" },
  { label: "6L - Aklak Inc", country: "Canada" },
  { label: "6N - Trans Travel Airlines", country: "Netherlands" },
  { label: "6Q - Slovak Airlines", country: "Slovakia" },
  { label: "6U - Air Ukraine", country: "Ukraine" },
  { label: "6W - Saravia", country: "Russia" }
];

export const countryOption = [
  {
    "name": "Afghanistan",
    "id": 1
  },
  {
    "name": "Albania",
    "id": 3
  },
  {
    "name": "Algeria",
    "id": 4
  },
  {
    "name": "Andorra",
    "id": 6
  },
  {
    "name": "Angola",
    "id": 7
  },
  {
    "name": "Antigua and Barbuda",
    "id": 10
  },
  {
    "name": "Argentina",
    "id": 11
  },
  {
    "name": "Armenia",
    "id": 12
  },
  {
    "name": "Australia",
    "id": 14
  },
  {
    "name": "Austria",
    "id": 15
  },
  {
    "name": "Azerbaijan",
    "id": 16
  },
  {
    "name": "The Bahamas",
    "id": 17
  },
  {
    "name": "Bahrain",
    "id": 18
  },
  {
    "name": "Bangladesh",
    "id": 19
  },
  {
    "name": "Barbados",
    "id": 20
  },
  {
    "name": "Belarus",
    "id": 21
  },
  {
    "name": "Belgium",
    "id": 22
  },
  {
    "name": "Belize",
    "id": 23
  },
  {
    "name": "Benin",
    "id": 24
  },
  {
    "name": "Bhutan",
    "id": 26
  },
  {
    "name": "Bolivia",
    "id": 27
  },
  {
    "name": "Bosnia and Herzegovina",
    "id": 28
  },
  {
    "name": "Botswana",
    "id": 29
  },
  {
    "name": "Brazil",
    "id": 31
  },
  {
    "name": "Brunei",
    "id": 33
  },
  {
    "name": "Bulgaria",
    "id": 34
  },
  {
    "name": "Burkina Faso",
    "id": 35
  },
  {
    "name": "Burundi",
    "id": 36
  },
  {
    "name": "Cambodia",
    "id": 37
  },
  {
    "name": "Cameroon",
    "id": 38
  },
  {
    "name": "Canada",
    "id": 39
  },
  {
    "name": "Cape Verde",
    "id": 40
  },
  {
    "name": "Central African Republic",
    "id": 42
  },
  {
    "name": "Chad",
    "id": 43
  },
  {
    "name": "Chile",
    "id": 44
  },
  {
    "name": "China",
    "id": 45
  },
  {
    "name": "Colombia",
    "id": 48
  },
  {
    "name": "Comoros",
    "id": 49
  },
  {
    "name": "Congo",
    "id": 50
  },
  {
    "name": "Democratic Republic of the Congo",
    "id": 51
  },
  {
    "name": "Cook Islands",
    "id": 52
  },
  {
    "name": "Costa Rica",
    "id": 53
  },
  {
    "name": "Croatia",
    "id": 55
  },
  {
    "name": "Cuba",
    "id": 56
  },
  {
    "name": "Cyprus",
    "id": 57
  },
  {
    "name": "Czech Republic",
    "id": 58
  },
  {
    "name": "Denmark",
    "id": 59
  },
  {
    "name": "Djibouti",
    "id": 60
  },
  {
    "name": "Dominica",
    "id": 61
  },
  {
    "name": "Dominican Republic",
    "id": 62
  },
  {
    "name": "Timor-Leste",
    "id": 63
  },
  {
    "name": "Ecuador",
    "id": 64
  },
  {
    "name": "Egypt",
    "id": 65
  },
  {
    "name": "El Salvador",
    "id": 66
  },
  {
    "name": "Equatorial Guinea",
    "id": 67
  },
  {
    "name": "Eritrea",
    "id": 68
  },
  {
    "name": "Estonia",
    "id": 69
  },
  {
    "name": "Ethiopia",
    "id": 70
  },
  {
    "name": "Fiji Islands",
    "id": 73
  },
  {
    "name": "Finland",
    "id": 74
  },
  {
    "name": "France",
    "id": 75
  },
  {
    "name": "Gabon",
    "id": 79
  },
  {
    "name": "Gambia The",
    "id": 80
  },
  {
    "name": "Georgia",
    "id": 81
  },
  {
    "name": "Germany",
    "id": 82
  },
  {
    "name": "Ghana",
    "id": 83
  },
  {
    "name": "Greece",
    "id": 85
  },
  {
    "name": "Grenada",
    "id": 87
  },
  {
    "name": "Guatemala",
    "id": 90
  },
  {
    "name": "Guinea",
    "id": 92
  },
  {
    "name": "Guinea-Bissau",
    "id": 93
  },
  {
    "name": "Guyana",
    "id": 94
  },
  {
    "name": "Haiti",
    "id": 95
  },
  {
    "name": "Honduras",
    "id": 97
  },
  {
    "name": "Hong Kong S.A.R.",
    "id": 98
  },
  {
    "name": "Hungary",
    "id": 99
  },
  {
    "name": "Iceland",
    "id": 100
  },
  {
    "name": "India",
    "id": 101
  },
  {
    "name": "Indonesia",
    "id": 102
  },
  {
    "name": "Iran",
    "id": 103
  },
  {
    "name": "Iraq",
    "id": 104
  },
  {
    "name": "Ireland",
    "id": 105
  },
  {
    "name": "Israel",
    "id": 106
  },
  {
    "name": "Italy",
    "id": 107
  },
  {
    "name": "Jamaica",
    "id": 108
  },
  {
    "name": "Japan",
    "id": 109
  },
  {
    "name": "Jersey",
    "id": 110
  },
  {
    "name": "Jordan",
    "id": 111
  },
  {
    "name": "Libya",
    "id": 124
  },
  {
    "name": "Peru",
    "id": 173
  },
  {
    "name": "Kazakhstan",
    "id": 112
  },
  {
    "name": "Kenya",
    "id": 113
  },
  {
    "name": "Kiribati",
    "id": 114
  },
  {
    "name": "North Korea",
    "id": 115
  },
  {
    "name": "South Korea",
    "id": 116
  },
  {
    "name": "Kuwait",
    "id": 117
  },
  {
    "name": "Kyrgyzstan",
    "id": 118
  },
  {
    "name": "Laos",
    "id": 119
  },
  {
    "name": "Latvia",
    "id": 120
  },
  {
    "name": "Lebanon",
    "id": 121
  },
  {
    "name": "Lesotho",
    "id": 122
  },
  {
    "name": "Liberia",
    "id": 123
  },
  {
    "name": "Liechtenstein",
    "id": 125
  },
  {
    "name": "Lithuania",
    "id": 126
  },
  {
    "name": "Luxembourg",
    "id": 127
  },
  {
    "name": "North Macedonia",
    "id": 129
  },
  {
    "name": "Madagascar",
    "id": 130
  },
  {
    "name": "Malawi",
    "id": 131
  },
  {
    "name": "Malaysia",
    "id": 132
  },
  {
    "name": "Maldives",
    "id": 133
  },
  {
    "name": "Mali",
    "id": 134
  },
  {
    "name": "Malta",
    "id": 135
  },
  {
    "name": "Marshall Islands",
    "id": 137
  },
  {
    "name": "Mauritania",
    "id": 139
  },
  {
    "name": "Mauritius",
    "id": 140
  },
  {
    "name": "Mexico",
    "id": 142
  },
  {
    "name": "Micronesia",
    "id": 143
  },
  {
    "name": "Moldova",
    "id": 144
  },
  {
    "name": "Monaco",
    "id": 145
  },
  {
    "name": "Mongolia",
    "id": 146
  },
  {
    "name": "Montenegro",
    "id": 147
  },
  {
    "name": "Morocco",
    "id": 149
  },
  {
    "name": "Mozambique",
    "id": 150
  },
  {
    "name": "Myanmar",
    "id": 151
  },
  {
    "name": "Nauru",
    "id": 153
  },
  {
    "name": "Nepal",
    "id": 154
  },
  {
    "name": "Bonaire, Sint Eustatius and Saba",
    "id": 155
  },
  {
    "name": "Netherlands",
    "id": 156
  },
  {
    "name": "New Zealand",
    "id": 158
  },
  {
    "name": "Nicaragua",
    "id": 159
  },
  {
    "name": "Niger",
    "id": 160
  },
  {
    "name": "Nigeria",
    "id": 161
  },
  {
    "name": "Niue",
    "id": 162
  },
  {
    "name": "Norway",
    "id": 165
  },
  {
    "name": "Oman",
    "id": 166
  },
  {
    "name": "Pakistan",
    "id": 167
  },
  {
    "name": "Palau",
    "id": 168
  },
  {
    "name": "Panama",
    "id": 170
  },
  {
    "name": "Papua New Guinea",
    "id": 171
  },
  {
    "name": "Paraguay",
    "id": 172
  },
  {
    "name": "Philippines",
    "id": 174
  },
  {
    "name": "Poland",
    "id": 176
  },
  {
    "name": "Portugal",
    "id": 177
  },
  {
    "name": "Qatar",
    "id": 179
  },
  {
    "name": "Romania",
    "id": 181
  },
  {
    "name": "Russia",
    "id": 182
  },
  {
    "name": "Rwanda",
    "id": 183
  },
  {
    "name": "Saint Kitts and Nevis",
    "id": 185
  },
  {
    "name": "Saint Lucia",
    "id": 186
  },
  {
    "name": "Saint Vincent and the Grenadines",
    "id": 188
  },
  {
    "name": "Samoa",
    "id": 191
  },
  {
    "name": "San Marino",
    "id": 192
  },
  {
    "name": "Sao Tome and Principe",
    "id": 193
  },
  {
    "name": "Saudi Arabia",
    "id": 194
  },
  {
    "name": "Senegal",
    "id": 195
  },
  {
    "name": "Serbia",
    "id": 196
  },
  {
    "name": "Seychelles",
    "id": 197
  },
  {
    "name": "Sierra Leone",
    "id": 198
  },
  {
    "name": "Singapore",
    "id": 199
  },
  {
    "name": "Slovakia",
    "id": 200
  },
  {
    "name": "Slovenia",
    "id": 201
  },
  {
    "name": "Solomon Islands",
    "id": 202
  },
  {
    "name": "Somalia",
    "id": 203
  },
  {
    "name": "Thailand",
    "id": 219
  },
  {
    "name": "South Africa",
    "id": 204
  },
  {
    "name": "South Sudan",
    "id": 206
  },
  {
    "name": "Spain",
    "id": 207
  },
  {
    "name": "Sri Lanka",
    "id": 208
  },
  {
    "name": "Sudan",
    "id": 209
  },
  {
    "name": "Suriname",
    "id": 210
  },
  {
    "name": "Eswatini",
    "id": 212
  },
  {
    "name": "Sweden",
    "id": 213
  },
  {
    "name": "Switzerland",
    "id": 214
  },
  {
    "name": "Syria",
    "id": 215
  },
  {
    "name": "Taiwan",
    "id": 216
  },
  {
    "name": "Tajikistan",
    "id": 217
  },
  {
    "name": "Tanzania",
    "id": 218
  },
  {
    "name": "Togo",
    "id": 220
  },
  {
    "name": "Tonga",
    "id": 222
  },
  {
    "name": "Trinidad and Tobago",
    "id": 223
  },
  {
    "name": "Tunisia",
    "id": 224
  },
  {
    "name": "Turkey",
    "id": 225
  },
  {
    "name": "Turkmenistan",
    "id": 226
  },
  {
    "name": "Tuvalu",
    "id": 228
  },
  {
    "name": "Uganda",
    "id": 229
  },
  {
    "name": "Ukraine",
    "id": 230
  },
  {
    "name": "United Arab Emirates",
    "id": 231
  },
  {
    "name": "United Kingdom",
    "id": 232
  },
  {
    "name": "Sint Maarten (Dutch part)",
    "id": 250
  },
  {
    "name": "United States",
    "id": 233
  },
  {
    "name": "Uruguay",
    "id": 235
  },
  {
    "name": "Uzbekistan",
    "id": 236
  },
  {
    "name": "Vanuatu",
    "id": 237
  },
  {
    "name": "Vatican City State (Holy See)",
    "id": 238
  },
  {
    "name": "Venezuela",
    "id": 239
  },
  {
    "name": "Vietnam",
    "id": 240
  },
  {
    "name": "Yemen",
    "id": 245
  },
  {
    "name": "Zambia",
    "id": 246
  },
  {
    "name": "Zimbabwe",
    "id": 247
  },
  {
    "name": "Kosovo",
    "id": 248
  },
  {
    "name": "Curaçao",
    "id": 249
  }
]