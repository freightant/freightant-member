import React, { useEffect, useState } from 'react';
import { Card, Typography, Row, Col, Button, Space, Steps } from 'antd';
import { assetsRootPath, camelCaseToSpaceSeparated } from '@/components/utils';
import { title } from 'process';
import dayjs from 'dayjs';
import { ClockCircleOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { freightTitle } from '@/components/page/rfq/options';

const QuotationCard = ({ quotation }:{quotation:any}) => {
    // console.log(quotation);
    const [docs, setDocs] = useState<any>([])
    
  const {
    _id,
    rfq,
    rfqNumber,
    shippingLine,
    modeOfShipment,
    quotationValidityDate,
    portCutOff,
    podChargeLocal,
    podCurrencyCode,
    polCurrencyCode,
    polChargeLocal,
    freightData,    
    inclusiveFrightDollor,
    transShipmentPorts,
    noOfTransShipmentPorts,
    oceanFreightCost,
    polCost,
    podCost,
    portCutoff,
    etd,
    validTill,
    totallandedCost,
    licensesAndCertifications,
    inclusiveFrightLocal,
  } = quotation;
  
  useEffect(()=>{
    // console.log(quotation?.organization?.userdocuments);
    if(quotation?.organization?.userdocuments){
        let a = Object.keys(quotation?.organization?.userdocuments)
        setDocs(a.map((i:any)=>({...quotation?.organization?.userdocuments[i],name:i})))
    }
    
  },[quotation])
  
  
  console.log(quotation?.freightData?.amount);
  return (
    <Card
     title={
        <Row justify={"space-between"} align={"middle"} style={{ padding: "24px 20px 24px 20px" , marginLeft: "-20px"}}>
            <Col sm={24} md={8} className='d-flex justify-content-start'>
            <h5 className="text-primary3">
                <b>{quotation?.organization?.companyName}</b>
            </h5>
            </Col>
            <Col sm={24} md={8} className='d-flex justify-content-center'>
                <Space size={8}>
                <Button shape="round" icon={<img src={assetsRootPath + (rfq?.modeofshipment === "Sea-FCL" || rfq?.modeofshipment === "Sea-LCL" ? "image/assets/cargoShip.png" : "image/assets/air1.png")} style={rfq?.modeofshipment === "Air" ? { width: "4px", height: "4px"} : {}}/>}>
  {shippingLine}
</Button>

                    <Button shape="round" icon={<img src={assetsRootPath+"image/assets/port.png"}/>}>{noOfTransShipmentPorts} Transhipment</Button>                    
                    <Button shape="round" icon={<ClockCircleOutlined/>}>{rfq?.freeTimeLP}</Button>                    
                </Space>
            </Col>
            <Col sm={24} md={8} className='d-flex justify-content-end'>
                <Space className="border rounded-2 px-2 py-1 my-1 " style={{ textAlign: "right" , marginRight: "-20px"}}>
                    <p className='m-0'>{quotation?.quotationNumber}</p>
                </Space>
            </Col>
        </Row>
    }
        styles={{header:{borderBottom:0}}}
    >
      <Row gutter={[16, 16]}>
        <Col sm={24} md={18}>
            <Row gutter={[8,8]}>
                <Col sm={22} md={19}>
                <Typography.Paragraph style={{ fontWeight: "bold", color: "#451197" }}>Routing:</Typography.Paragraph>
                          <Steps
                              progressDot
                              size="small"
                              items={
                                [
                                    ...[{ title:rfq?.loadingPortObj?.Country,description:rfq?.loadingPortObj?.PortName}],
                                    ...(transShipmentPorts? transShipmentPorts: []).map((port: any, iIndex: number) => (
                                        { title: port?.Name,status:"wait", description:port?.FullName  }
                                    )),
                                    ...[{ status:"finish", title:rfq?.dischargePortObj?.Country,description:rfq?.dischargePortObj?.PortName}],
                                ]
                              }
                          />
                </Col>
                <Col span={24} style={{ marginTop: "20px" , marginBottom: "20px"}}>
                <Space size={"large"}>
                    <div className="p-2 border rounded-3" >
                        <p className='p-0 m-0'>Port Cutoff: <span className="text-primary2"  style={{ fontWeight: "bold", color: "#451197"}}>{dayjs(portCutOff?.date).format('YYYY-MM-DD')}</span> </p>
                    </div>
                    <div className="p-2 border rounded-3">
                        <p className='p-0 m-0'>ETD: <span className="text-primary2"  style={{ fontWeight: "bold" , color: "#451197"}}>{dayjs(etd).format('YYYY-MM-DD')}</span> </p>
                    </div>
                    <div className="p-2 border rounded-3">
                        <p className='p-0 m-0'>Valid Till: <span className="text-primary2"  style={{ fontWeight: "bold" , color: "#451197"}}>{dayjs(quotationValidityDate).format('YYYY-MM-DD')}</span> </p>
                    </div>
                </Space>
                </Col>
                {/* <Col span={24}>
                <Space size={"large"}>
                    <div className="p-1 border rounded-3">
                        <p className='p-0 m-0'>VALID TILL <span className="text-primary2">{dayjs(quotationValidityDate).format('YYYY-MM-DD')}</span> </p>
                    </div>
                </Space>
                </Col> */}
                <Col span={24}>
                <Space wrap>
                        {
                            docs.filter((i:any)=>(i.status)).map((i:any)=>(
                            <div key={i.name} className="tag-content text-capitalize">
                                {camelCaseToSpaceSeparated(i.name)}
                              </div>
                            ))
                        }
                </Space>
                </Col>
            </Row>
        </Col>
        <Col sm={24} md={6}>
            <Row gutter={[16, 8]}>
            <Col span={24} style={{ textAlign: "right", fontWeight: 500, color: "#451197" }}>
  <div style={{ display: "flex", justifyContent: "right", alignItems: "center",  whiteSpace: "nowrap" }} className="border rounded-2 px-2 py-1">
    <p className='m-0'>{freightTitle(rfq?.modeOfShipment)}: </p>
    <p className='m-0'>   USD  {quotation?.freightData?.[0]?.amount} </p>
  </div>
</Col>

                <Col span={24}  style={{ textAlign: "right" , fontWeight: 500, color: "#451197" }}>
                    <Space className="border rounded-2 px-2 py-1">
                        <p className='m-0'>POL Cost:</p>
                        <p className='m-0'>{polCurrencyCode} {Number(polChargeLocal).toFixed(2)}</p>
                    </Space>
                </Col>
                <Col span={24}  style={{ textAlign: "right" , fontWeight: 500, color: "#451197" }}>
                    <Space className="border rounded-2 px-2 py-1">
                        <p className='m-0'>POD Cost:</p>
                        <p className='m-0'>{podCurrencyCode} INR {podChargeLocal}</p>
                    </Space>
                </Col>
                <Col span={24} style={{ textAlign: "right", fontWeight: 500, color: "#451197" }}>
  <Space className="border rounded-2 px-2 py-1 my-1" style={{ display: "flex", alignItems: "center", whiteSpace: "nowrap" }}>
    <p className='m-0'>Total Landed Cost:</p>
    <p className='m-0'>{polCurrencyCode} {Number(totallandedCost).toFixed(2)}</p>
  </Space>
</Col>

            </Row>
        </Col>
      </Row>

      
    <div className='d-flex justify-content-end col-12'>
        <Link target="_blank" href={"/rfq/offerdetail/"+_id}>
            <Button type="primary" shape="round">View Details</Button>
        </Link>
    </div>
    </Card>
  );
};

export default QuotationCard;