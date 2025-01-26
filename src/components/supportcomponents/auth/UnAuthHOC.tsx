// "use client"
// import { DefaultSessionLocal, getSessionCache, verifytoken } from '@/network/endpoints'
// import instance from '@/network/instance'
// import { Spin } from 'antd'
// import { signOut, useSession } from 'next-auth/react'
// import { usePathname, useRouter } from 'next/navigation'
// import React, { useEffect, useState } from 'react'

// function UnAuthHOC(WrappedComponent: React.FC) {
//   const Auth =(props:any)=>{
//     const [session, setSession] = useState<DefaultSessionLocal>()
//     const [loading, setLoading] = useState<boolean>(true)
//     const pathname = usePathname()
    
//     const router= useRouter()
//     useEffect(()=>{
//       console.log(pathname) 
//       getSessionCache()
//       .then(session=>{
//         if(session?.user){
          
//           setSession(session)
//           if(pathname=="/" || pathname.includes("signup")){
          
//             router.replace("/")
            
//           }
//         }else{
//           // setLoading(false)          
//           if(!(pathname=="/") || !pathname.includes("signup")){
//             if (pathname=="/") { 
                          
//               router.replace("/")
//             }else if(pathname.includes("signup")){
//               router.replace("/auth/signup")
//             }else{}
//           }
//         }
//       })
//       .catch(()=>{
//         setLoading(false)
//         if(!(pathname=="/") || !pathname.includes("signup")){
//           router.replace("/")
//         }
//       })
//       .finally(() => {
//         setLoading(false); // Ensure this is called once, no matter what
//       })
//     },[])
//     if(loading){
//         return (
//           <div className="d-flex justify-content-center align-items-center">
//             <Spin />
//           </div>
//         )        
//     }
//     if(session?.user || !loading){
//       return <WrappedComponent {...props} />
//     }
//   }
//   return Auth
// }
// export function AuthHOC(WrappedComponent: React.FC) {
//   const Auth =(props:any)=>{
//     const [session, setSession] = useState<DefaultSessionLocal>()
//     const [loading, setLoading] = useState<boolean>(true)
//     const pathname = usePathname()
    
//     const router= useRouter()
//     useEffect(()=>{
//       // getSessionCache()
//       // .then(session=>{
//       //   if(session?.user){
//       //     setSession(session)
//       //     setLoading(false)
//       //   }else{
//       //     router.replace("/auth/signin")
//       //   }
//       // })
//       // .catch(()=>{
//       //   router.replace("/auth/signin")
//       // })
//       let checkLogin = async()=>{
//         let cacheSessions = await getSessionCache()
//         let vtoken = await verifytoken()
        
//         if(vtoken.code){
//           setSession(cacheSessions)
//           setLoading(false)
//         }else{
//           signOut({callbackUrl:"/auth/signin"})
//         }
//       }
//       checkLogin()
//     },[])
//     if(loading){
//         return (
//           <div className="d-flex justify-content-center align-items-center p-5">
//             <Spin />
//           </div>
//         )        
//     }
//     if(session?.user || !loading){
//       return <WrappedComponent {...props} />
//     }
//   }
//   return Auth
// }

// export default UnAuthHOC
"use client";
import { DefaultSessionLocal, getSessionCache, verifytoken } from "@/network/endpoints";
import { Spin } from "antd";
import { signOut } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function withAuth(WrappedComponent: React.FC, isAuthRequired: boolean) {
  const Auth = (props: any) => {
    const [session, setSession] = useState<DefaultSessionLocal>();
    const [loading, setLoading] = useState<boolean>(true);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
      const checkSession = async () => {
        try {
          const cacheSession = await getSessionCache();
          const tokenValidation = await verifytoken();

          if (tokenValidation.code) {
            setSession(cacheSession);
            if (!isAuthRequired && (pathname === "/" || pathname.includes("signup"))) {
              router.replace("/");
            }
          } else {
            if (isAuthRequired) {
              signOut({ callbackUrl: "/auth/signin" });
            }
          }
        } catch (error) {
          console.error("Error validating session:", error);
          if (isAuthRequired) {
            signOut({ callbackUrl: "/auth/signin" });
          } else {
            router.replace("/");
          }
        } finally {
          setLoading(false);
        }
      };

      checkSession();
    }, [pathname, router, isAuthRequired]);

    if (loading) {
      return (
        <div className="d-flex justify-content-center align-items-center p-5">
          <Spin />
        </div>
      );
    }

    if (isAuthRequired && session?.user) {
      return <WrappedComponent {...props} />;
    }

    if (!isAuthRequired && !session?.user) {
      return <WrappedComponent {...props} />;
    }

    return null;
  };

  return Auth;
}

export const AuthHOC = (WrappedComponent: React.FC) => withAuth(WrappedComponent, true); // For authenticated routes
export const UnAuthHOC = (WrappedComponent: React.FC) => withAuth(WrappedComponent, false); // For unauthenticated routes

export default UnAuthHOC;
