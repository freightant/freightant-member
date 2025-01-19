// "use client"
// import Link from "next/link";
// import { signOut } from 'next-auth/react';
// import { Button } from "antd";
// import SignInUI from '@/components/page/auth/signin'

// export default function Home() {
//   return (
//     <div className="col-6 mx-auto text-center py-2 d-flex flex-column gap-2">
//       <Link href={"/auth/signin"}>Login</Link>
//       <Link href={"/rfq/post"}>RFQ POST</Link>
//       <Link href={"/rfq/search"}>RFQ Search</Link>
//       <Link href={"/dashboard"}>Dashboard</Link>
//       <Button onClick={()=>signOut({callbackUrl:"/auth/signin"})} >Log Out</Button>
//     </div>
    
//   );
// }
// "use client"
// import React from "react";
// import DashboardHome from "@/components/page/dashboard/page";
// function Page() {
//     return (<DashboardHome />)
//   }
  
//   export default Page

"use client";
import Link from "next/link";
import { Button } from "antd";

export default function Home() {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: `url('https://maxwell.vn/wp-content/uploads/2024/05/Import-Export-Services.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.65)", // Dark overlay for better readability
          padding: "100px",
          borderRadius: "10px",
        }}
      >
        <h1>Welcome to Freightant</h1>
        <p>
          Simplify your freight and logistics operations with Freightant. We are
          here to make your journey seamless and efficient.
        </p>
        <Link href={"/dashboard"}>
          <Button type="primary" size="large">
            Continue to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
// "use client";

// import Layout from "@/app/auth/layout";
// import Signin from "./auth/signin/page"; // Adjust the path as needed

// export default function Home() {
//   return (
//     <Layout>
//       <Signin />
//       </Layout>
//   );
// }
