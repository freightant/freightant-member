import { variants2 } from '@/components/page/auth/signup'
import { assetsRootPath } from '@/components/utils'
import { Button } from 'antd'
import Title from 'antd/es/typography/Title'
import { m, motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { CheckCircleFilled } from "@ant-design/icons";
import Lottie from "lottie-react";


export function PostSuccessModal({id,message}:{id:string,message?:string}) {
    const [loading,setLoading] = useState(false)
  const router = useRouter()
  return (
    <div className="my-5">
    {/* Include the Lottie animation */}
    <div className="d-flex justify-content-center align-items-center">
      <CheckCircleFilled 
        style={{ fontSize: "80px", color: "green", animation: "pop 0.5s ease-out" }} 
      />
      <style>
        {`
          @keyframes pop {
            0% { transform: scale(0); opacity: 0; }
            80% { transform: scale(1.2); opacity: 1; }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </div>

    <div className="freightant-logo d-flex flex-column justify-content-center align-items-center my-2 mb-3">
        <Title className="text-primary2 text-center" level={3}>Congratulations</Title>
        <p className="text-mute text-center">
            {message ? message : `RFQ ${id} Posted Successfully.`}
        </p>
        <Button 
            disabled={loading} 
            onClick={() => location.reload()} 
            type="primary" 
            block 
            shape="round" 
            className="col-12">
            Add New
        </Button>
        <Button 
            onClick={() => router.push("/dashboard")} 
            block 
            shape="round" 
            className="col-12 my-2">
            Go Home
        </Button>
    </div>
</div>

)
}

export default PostSuccessModal