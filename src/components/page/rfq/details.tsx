"use client"
import { freightTitle } from '@/components/page/rfq/options';
import { PortUI } from '@/components/page/rfq/search';
import { strings } from '@/components/strings';
import CustomTable from '@/components/supportcomponents/rfq/editableTable';
import { processValues } from '@/components/utils';
import { getQuotationById, confirmOrder } from '@/network/endpoints';
import { Avatar, Button, Checkbox, Col, ConfigProvider, Form, Input, Result, Row, Space, Spin, Table, Timeline, Typography, message } from 'antd';
import dayjs from 'dayjs';

function OfferDetail({ params,previewData=false ,hideExtra=false }: { params: { id: string }, previewData?:any,hideExtra?:any }) {
    const {data,isLoading,error} = useSWR(params.id,getQuotationById)
    const [d, setD] = useState<any>({data:{}})
    useEffect(() => {
      if(previewData){
        setD({data:previewData,code:true})
      }
      return () => {}
    }, [previewData])
    useEffect(() => {
      if(data && !previewData){
        setD(data)
      }
      return () => {}
    }, [data])
    
  // Handle submit (confirm order)
  const handleSubmit = async () => {
    if (!d?.data?._id) {
      message.error("Quotation ID is missing.");
      return;
    }

    try {
      const response = await confirmOrder({ quotationId: d.data._id });

      if (response.code) {
        message.success(response.message || "Order successfully confirmed");
        // Additional logic after successful order confirmation, like redirecting or refreshing data
      } else {
        message.error(response.message || "Failed to confirm order");
      }
    } catch (error) {
      message.error("Error confirming order");
      console.error(error);
    }
  };

  if (!d?.code && !isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center p-5">
        <Result status={"error"} subTitle={d?.message} />
      </div>
    )
  }

  
  return (
    <div className="p-3  min-vh-100 " >
        {isLoading&&
        <div className="d-flex justify-content-center py-5">
            <div>
                <Spin tip="Loading" />
            </div>
        </div>
        }
        {!isLoading&&
        <div className="col-12 col-md-11 col-lg-10 mx-auto " >
      <Row justify={"space-between"} className={hideExtra?"d-none":""} style={{ marginBottom: "30px" }}>
        <Col>
          <div className="rounded-5  p-1 px-4 primary-bg-color fs-5">{d?.data?.organization?.companyName}</div>
        </Col>
        <Col>
          <div className="rounded-5 p-1 px-3 bg-light border fs-5">Quote ID</div>
        </Col>
      </Row>

      <Row className='card-content rounded-3 px-1 py-4 my-2' gutter={[80, 15]} style={{ border: '1px solid #dedede' }}>
        <Col xs={24} md={9}>
          <div className="d-flex flex-column gap-2" style={{ width: '110%' }}>
            <span className='fw-semibold fs-5' style={{  color: '#0A0049' }}>Port of Loading</span>
                <PortUI i={d?.data?.rfq?.loadingPortObj}/>
          </div>
        </Col>
        <Col xs={24} md={9}>
          <div className="d-flex flex-column gap-2" style={{ width: '110%' }}>
            <span className='fw-semibold fs-5' style={{  color: '#0A0049' }}>Port of Discharge</span>
                <PortUI i={d?.data?.rfq?.dischargePortObj}/>
          </div>
        </Col>        
      </Row>

      <Row gutter={[10, 10]}>
        <Col xs={24} md={18}>
          <Row gutter={[60, 20]} >
            <Col xs={24}>
              <div className="rounded-2 card-content my-2 p-2">
                <ConfigProvider
                  theme={{
                    components: {
                      Table: {
                        colorTextHeading: "#451197",
                        headerBg: "#F6F4FF",
                        cellPaddingInline: 5,
                        cellPaddingBlock: 10,
                        fontSize: 12,
                        borderColor: "#A89CF7",
                      }
                    }
                  }}
                >
                  <TableCards obj={d?.data} frieght={d?.data?.freightData} pol={d?.data?.polChargesData} pod={d?.data?.podChargesData} />
                </ConfigProvider>
                <p className='currency-total my-3  fw-bold' style={{ color: '#0A0049'  }}>Total Landed Cost: {d?.data?.polCurrencyCode} {d?.data?.totallandedCost}</p>
              </div>
            </Col>
            <Col xs={24}>
                <div className="card-content rounded-3 p-4 ">
                    <h3 style={{  marginLeft: "-40px",  marginBottom: "30px"}}>{d?.data?.rfq?.modeOfShipment===strings.air?`Air`:`Shipping `}Line Details</h3>
                    <div className="d-flex gap-4 my-3 "  style={{  marginLeft: "-30px" }}>
                        {d?.data?.shippingLine&&
                          <div className="shipping-details-header d-flex align-items-center gap-2">
                            <p className='mb-0' >Shipping Line</p><span>{d?.data?.shippingLine}</span>
                        </div>
                        }
                        {d?.data?.airline&&
                          <div className="shipping-details-header d-flex align-items-center gap-2">
                            <p className='mb-0'>AirLine</p><span>{d?.data?.airline}</span>
                        </div>
                        }
                        <div className="shipping-details-header d-flex align-items-center gap-2">
                            <p className='mb-0' style={{ color: '#0A0049'  }}>Transshipment Ports</p><span>{d?.data?.noOfTransShipmentPorts}</span>
                        </div>
                    </div>
                    <div className="shippment-port-container">
                        <h3 className='m-4' style={{ color: '#0A0049'  }}>Transshipment Ports </h3>
                        <Row>
                            <Col xs={24} md={20} lg={20}>
                            <Space>
                                <Timeline
                                    style={{ padding: 10, margin: 10 }}
                                    mode="left"
                                    rootClassName=''
                                    items={[
                                        ...[{ label: `Port of Loading`, children: <PortUI {...{style:{minWidth:"300px",maxWidth:"370px"}}} i={d?.data?.rfq?.loadingPortObj} /> }],
                                        ...(d?.data?.transShipmentPorts ? d?.data?.transShipmentPorts : []).map((port: any, iIndex: number) => (
                                            { label: `T/S Port ${iIndex + 1}`, children: (<PortUI {...{style:{minWidth:"300px",maxWidth:"370px"}}} i={port} />) }
                                        )),
                                        ...[{ label: `Port of Discharge`, children: <PortUI {...{style:{minWidth:"300px",maxWidth:"370px"}}} i={d?.data?.rfq?.dischargePortObj} /> },]
                                    ]}
                                />
                            </Space>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
          </Row>
        </Col>

        <Col xs={32} md={6} className=''>
          <div className="my-2">
            <Row gutter={[0, 10]}>
              <Col xs={24}>
                <div className="card-content left-card rounded-2 p-3 d-flex flex-column align-items-center gap-2 border border-[#dedede] " style={{ width: '100%' ,marginLeft: '40px'  }}>
                  <h6 style={{ fontWeight: 600, color: '#0A0049' }}>Exchange Rate</h6>
                  <span>USD/INR</span>
                  <div className="tag-content" style={{  backgroundColor: '#F6F4FF',  }}>
                    {d?.data?.exchangeRate}
                  </div>
                </div>
              </Col>
              <Col xs={24}>
                <div className="card-content left-card rounded-2 p-3 d-flex flex-column align-items-center gap-2 border border-[#dedede] " style={{ width: '100%' ,marginLeft: '40px'  }}>
                  <h6 style={{ fontWeight: 600, color: '#0A0049' }}>ETD</h6>
                  <div className="tag-content" style={{  backgroundColor: '#F6F4FF',  }}>
                    {dayjs(d?.data?.etd).format('YYYY-MM-DD')}
                  </div>
                </div>
              </Col>
              <Col xs={24} className='me-auto'>
                <div className="card-content left-card rounded-2 p-3 d-flex flex-column align-items-center gap-2 border border-[#dedede] " style={{ width: '100%' ,marginLeft: '40px'  }}>
                  <h6 style={{ fontWeight: 600, color: '#0A0049' }}>SI Cut off Date & Time</h6>
                  <div className="tag-content" style={{  backgroundColor: '#F6F4FF',  }}>
                    {dayjs(d?.data?.siCutOff?.date).format('YYYY-MM-DD')}
                  </div>
                  <div className="tag-content" style={{  backgroundColor: '#F6F4FF',  }}>
                    {d?.data?.siCutOff?.time}
                  </div>
                </div>
              </Col>
              <Col xs={24} className='me-auto'>
                <div className="card-content left-card rounded-2 p-3 d-flex flex-column align-items-center gap-2 border border-[#dedede] " style={{ width: '100%' ,marginLeft: '40px'  }}>
                  <h6 style={{ fontWeight: 600, color: '#0A0049' }}>Port Cut off Date & Time</h6>
                  <div className="tag-content" style={{  backgroundColor: '#F6F4FF',  }}>
                    {dayjs(d?.data?.portCutOff?.date).format('YYYY-MM-DD')}
                  </div>
                  <div className="tag-content" style={{  backgroundColor: '#F6F4FF',  }}>
                    {d?.data?.portCutOff?.time}
                  </div>
                </div>
              </Col>
              <Col xs={24} className='me-auto'>
                <div className="card-content left-card rounded-2 p-3 d-flex flex-column align-items-center gap-2 border border-[#dedede] " style={{ width: '100%' ,marginLeft: '40px'  }}>
                  <h6 style={{ fontWeight: 600, color: '#0A0049' }}>POL Free Time</h6>
                  <div className="tag-content" style={{  backgroundColor: '#F6F4FF',  }}>
                  {processValues(d?.data,d?.data?.polFreeTimeStatus,d?.data?.rfq?.freeTimeDP,d?.data?.polFreeTimeDeclineValue)} Days
                  </div>
                </div>
              </Col>
              <Col xs={24} className='me-auto'>
                <div className="card-content left-card rounded-2 p-3 d-flex flex-column align-items-center gap-2 border border-[#dedede] " style={{ width: '100%' ,marginLeft: '40px'  }}>
                  <h6 style={{ fontWeight: 600, color: '#0A0049' }}>POD Free Time</h6>
                  <div className="tag-content" style={{  backgroundColor: '#F6F4FF',  }}>
                    {processValues(d?.data,d?.data?.podFreeTimeStatus,d?.data?.rfq?.freeTimeLP,d?.data?.podFreeTimeDeclineValue)} Days
                  </div>
                </div>
              </Col>
                <Col xs={24} className=''>
                    <div className="flex-column h-100 d-flex justify-content-end">
                        <div className="card-content left-card rounded-2 p-3 d-flex flex-column align-items-center gap-2 border border-[#dedede] " style={{ width: '100%' ,marginLeft: '40px'  }}>
                            <h6 style={{ fontWeight: 600, color: '#0A0049' }}>Quotation validity Date</h6>
                            <div className="tag-content" style={{  backgroundColor: '#F6F4FF',  }}>
                              {dayjs(d?.data?.quotationValidityDate).format('YYYY-MM-DD')}
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
          </div>
        </Col>
      
        <Col xs={24}>
          <div className="card-content rounded-3 p-4 my-2 d-flex gap-3 align-items-center border border-[#dedede]" style={{ width: "105%", marginLeft: "-20px"}}>
            <span className='fw-semibold fs-5'>Payment Terms</span>
            <div className="">{d?.data?.paymentTermsStatus?
            d?.data?.rfq?.paymentTerms
            :
            d?.data?.paymentTermsDeclineValue}</div>
            <div className="">{
              ((d?.data?.paymentTermsDeclineValue?d?.data?.paymentTermsDeclineValue:"").includes(strings.others)
              ||
              (d?.data?.rfq?.paymentTerms?d?.data?.rfq?.paymentTerms:"").includes(strings.others))?
            (d?.data?.rfq?.paymentTerms?d?.data?.rfq?.paymentTerms:"").includes(strings.others)?d?.data?.rfq?.otherPaymentTerms:d?.data?.rfq?.paymentTerms
            :
            (d?.data?.paymentTermsDeclineValue?d?.data?.paymentTermsDeclineValue:"").includes(strings.others)?d?.data?.otherPaymentTerms:d?.data?.paymentTermsDeclineValue
            
            }</div>
          </div>
        </Col>
      
        <Col xs={24}>
  <div className="card-content rounded-3 p-4 my-2 border border-[#dedede] mx-" style={{ width: "105%", marginLeft: "-20px"}}>
    <span className="fw-semibold fs-5">Terms and Conditions</span><br/>
    <Typography.Text>{d?.data?.termsCondition}</Typography.Text>
  </div>
</Col>

        {(d?.data?.pointOfContact?d?.data?.pointOfContact:[]).length>0 &&
        <Col xs={24}>
          <div className="card-content rounded-3 p-4 my-2">
            <span className='fw-semibold fs-5'>Point Of Contact</span>
            {
              (d?.data?.pointOfContact?d?.data?.pointOfContact:[]).map(( field:any, iIndex:any ) => (
                <div className='d-flex gap-2 my-3' key={iIndex+"poc"}>
                  <Form.Item label="Name"  layout="vertical" rules={[{ required: true}]}>
                    <Input placeholder='Name' className='rounded-2' disabled value={field?.name} />
                  </Form.Item>
                  <Form.Item label="Mobile No." rules={[{required:true},{min:10,max:10,message: 'Please enter correct number'}]} layout="vertical">
                    <Input placeholder='Mobile' className='rounded-2' disabled value={field?.mobile} />
                  </Form.Item>
                  <Form.Item label="Email ID" rules={[{required:true},{type:"email",message: 'Please enter correct email'}]} layout="vertical">
                    <Input placeholder='Email' className='rounded-2' disabled value={field?.email} />
                  </Form.Item>
                </div>
              ))
            }
          </div>
        </Col>
        }
      </Row>

      <Row className="my-3" justify={'center'}>
      <Col xs={24} md={8}>
      <Button 
        type="primary" 
        onClick={handleSubmit} 
        block 
        className="rounded-5 submit-form-btn"
      >
        Confirm Order
      </Button>
      </Col>
    </Row>
      </div>}
    </div>
  );
}

export default OfferDetail;

const TransshipmentPortCard = () => {
  return (
    <div className="tranship-card p-2 rounded-2 d-flex align-items-center gap-2 shadow-sm">
      <Avatar />
      <p className='mb-0'>Lorem ipsum dolor sit.</p>
      <span className='ms-auto'>Terminal ICD</span>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import useSWR from 'swr';

function TableCards({frieght,pol,pod,obj}:{frieght:any,pol:any,pod:any,obj:any}) {
    return (
        <div className="table-card d-flex gap-3 flex-column" >
            <div className="table-container" >
                <div className="table-header" >
                    <h6 className='mb-0' style={{ fontWeight: 600, color: '#0A0049' }}>{freightTitle(obj?.rfq?.modeOfShipment)}</h6>
                    <Space>
                      {(obj?.rfq?.container ? obj?.rfq?.container : []).length > 0 ?
                        obj?.rfq?.container.map((i: any) => (<div key={`${i?.name}*${i?.quantity}`} className="header-tag-content">{i?.name}*{i?.quantity}</div>))
                        : null
                      }
                    </Space> 
                </div>

                <div className="table-content">
                    <CustomTable dataSource={(frieght?frieght:[])} setDataSource={()=>{}} columns={columns}/>
                </div>
            </div>

            {(pol?pol:[]).length > 0 &&
            <div className="table-container " >
                <div className="table-header">
                    <h6 className='mb-0' style={{ fontWeight: 600, color: '#0A0049' }}>Port of Loading [POL] charges</h6>
                    <Space >
                      {(obj?.rfq?.container ? obj?.rfq?.container : []).length > 0 ?
                        obj?.rfq?.container.map((i: any) => (<div key={`${i?.name}*${i?.quantity}`} className="header-tag-content">{i?.name}*{i?.quantity}</div>))
                        : null
                      }
                    </Space> 
                </div>

                <div className="table-content" >
                    <CustomTable dataSource={(pol?pol:[])} setDataSource={()=>{}} columns={columnsV2} />
                </div>
            </div>}

            {(pod?pod:[]).length>0&&
            <div className="table-container">
                <div className="table-header">
                    <h6 className='mb-0' style={{ fontWeight: 600, color: '#0A0049' }}>Port of Discharge [POD] Charges</h6>
                    <div className="header-tag-content">40FT x 2</div>
                    <div className="header-tag-content">20FT x 1</div>
                </div>

                <div className="table-content">
                    <CustomTable dataSource={(pod?pod:[])} setDataSource={()=>{}} columns={columnsV2}/>
                </div>
            </div>}
        </div>
    )
}


let columns = [
    {
        key: 'key',
        align: 'center',
        width: 30,
      },
      {
        title: "Cost heads",
        dataIndex: "costHead",
        key: "costHead",
        align: "center",
        width:250,
        className:"text-wrap",
      },
      {
        title: "Units",
        key: "units",
        align: "center",
        children: [
          {
            title: "",
            dataIndex: "unit",
            key: "ch1",
            width:100,
          },
          {
            title: "",
            dataIndex: "quantity",
            key: "ch2",
            width:50,
          },
        ],
      },
      {
        title: "Currency",
        dataIndex: "currency",
        key: "currency",
        className:"text-center",
        render:()=>("USD")
      },
      {
        title: "Rate",
        dataIndex: "rate",
        align: "center",
        key: "rate",
        width:75,
      },
      {
        title: "Amount",
        dataIndex: "amount",
        key: "amount",   
        className:"text-center",
      },
]
let columnsV2 = [
    {
        key: 'key',
        align: 'center',
        width: 30,
      },
      {
        title: "Cost Category",
        dataIndex: "costCategory",
        align: "center",
        key: "costHead",
        width:100,
        className:"text-wrap",
      },
      {
        title: "Cost heads",
        dataIndex: "costHead",
        align: "center",
        key: "costHead",
        width:250,
        className:"text-wrap",
      },
      {
        title: "Receipt",
        dataIndex: "receipted",
        key: "costHead",
        align: "center",
        width:30,
        className:"text-wrap",
        render:(_:any,record:any,index:number)=>(
          <div className="w-100 d-flex justify-content-center">
            <Checkbox
            className=''
            value={record?.receipted}
            />
          </div>
        )
      },
      {
        title: "Units",
        key: "units",
        children: [
          {
            title: "",
            dataIndex: "unit",
            key: "ch1",
            width:100,
          },
          {
            title: "",
            dataIndex: "quantity",
            key: "ch2",
            width:50,
          },
        ],
      },
      {
        title: "Currency",
        dataIndex: "currency",
        key: "currency",
        className:"text-center",
      },
      {
        title: "Rate",
        dataIndex: "rate",
        align: "center",
        key: "rate",
        width:75,
      },
      {
        title: "Amount",
        dataIndex: "amount",
        key: "amount",   
        className:"text-center",
      },
]