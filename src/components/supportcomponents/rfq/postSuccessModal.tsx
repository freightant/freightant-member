import { variants2 } from '@/components/page/auth/signup'
import { assetsRootPath } from '@/components/utils'
import { Button } from 'antd'
import Title from 'antd/es/typography/Title'
import { m, motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'


export function PostSuccessModal({id,message}:{id:string,message?:string}) {
    const [loading,setLoading] = useState(false)
  const router = useRouter()
  return (
    <div className="my-5">
    {/* Include the Lottie animation */}
    <div className="d-flex justify-content-center align-items-center">
        <lottie-player 
            src="https://lottie.host/c2b356b1-dd03-4375-bd7b-96fe354da626/J2v6sjJdcE.json" 
            background="" 
            speed="1" 
            style={{ width: "300px", height: "300px" }} 
            loop 
            controls 
            autoplay 
            direction="1" 
            mode="normal">
        </lottie-player>
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