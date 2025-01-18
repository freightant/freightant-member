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

// // src/app/page.tsx
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/auth/signin');
}
