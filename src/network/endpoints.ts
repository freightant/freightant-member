import { ISODateString } from "next-auth";
import instance from "./instance";
import { getSession } from "next-auth/react";
import type { SignUPType, loginType, signupType2 } from "@/types/defaults";
import axios from "axios";

export interface DefaultSessionLocal {
    user?: {
      name?: string | null
      email?: string | null
      image?: string | null
      role?: string | null
      token?: string | null
    }
    expires?: ISODateString
  }
let user: DefaultSessionLocal = {}

export const getSessionCache= async()=>{
    if(user?.user?.name){
        return user
    }
    let tmp = await getSession()
    
    user = {user:tmp?.user,expires: tmp?.expires}
    return user
}

// export const getSessionCache = async () => {
//   if (user?.user?.name) {
//       return user;
//   }
//   let tmp = await getSession();
//   user = { user: tmp?.user, expires: tmp?.expires };
  
//   // Save user data to localStorage
//   if (user?.user) {
//       localStorage.setItem("userToken", JSON.stringify(user));
//   }
  
//   return user;
// };


export const signUPEndPoint = async({
  fullName,
  businessEmail,
  password,
  role,
  mobile,
  countryCode
}:SignUPType) =>{
    return instance.post("auth/register",{fullName,businessEmail,password,role,mobile,countryCode})
    .then(r=>({data:r.data,code:true,message:""}))
    .catch((error:any) =>({message:error.response.data.message,code:false}) 
    )
}
export const signUPEndPoint2 = async(v:signupType2) =>{
    let user = await getSessionCache()  
    
    return instance.put("user/signup/p2",v,{headers:{Authorization: "Bearer " + user?.user?.email,"Content-Type":"multipart/form-data"}})
    .then(r=>({data:r.data,code:true,message:""}))
    .catch((error:any) =>({message:error.response.data.message,code:false}) 
    )
}
// export const signUPEndPoint2 = async (v: signupType2) => {
//   // Get the user token from session cache or localStorage
//   let user = await getSessionCache();

//   // Retrieve the actual token, not the email
//   const token = user?.user?.token;  // Assuming you have the token saved as "token"

//   // If no token is found, you might want to handle it gracefully
//   if (!token) {
//       return { message: "Token not found", code: false };
//   }

//   // Send the API request with the correct Authorization header
//   return instance.put(
//       "user/signup/p2", 
//       v, 
//       {
//           headers: {
//               Authorization: `Bearer ${token}`,  // Use the actual token here
//               "Content-Type": "multipart/form-data"
//           }
//       }
//   )
//   .then(r => ({ data: r.data, code: true, message: "" }))
//   .catch((error: any) => ({
//       message: error.response?.data?.message || "An error occurred",
//       code: false
//   }));
// };


// export const signUPEndPoint2 = async (v: signupType2) => {
  
//   const localStorageUser = localStorage.getItem("userToken");
//   const token = localStorageUser ? JSON.parse(localStorageUser)?.user?.email : null;

//   return instance.put(
//       "user/signup/p2",
//       v,
//       { headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" } }
//   )
//   .then(r => ({ data: r.data, code: true, message: "" }))
//   .catch((error: any) => ({ message: error.response.data.message, code: false }));
// };

export const signUPEndPoint3 = async(v:any) =>{
    let user = await getSessionCache()  
    
    return instance.put("user/signup/p3",v,{headers:{Authorization: "Bearer " + user?.user?.email}})
    .then(r=>({data:r.data,code:true,message:""}))
    .catch((error:any) =>({message:error.response.data.message,code:false}) 
    )
}

// export const signUPEndPoint3 = async (v: any) => {
//   try {
//       const user = await getSessionCache();
//       if (!user?.user?.token) {
//           throw new Error("No token found");
//       }

//       const response = await instance.put("user/signup/p3", v, {
//           headers: { Authorization: "Bearer " + user?.user?.token },
//       });

//       return { data: response.data, code: true, message: "" };
//   } catch (error: any) {
//       const message = error?.response?.data?.message || error.message || "Something went wrong!";
//       return { message, code: false };
//   }
// };

// export const signUPEndPoint3 = async (v: any) => {
//   let user = await getSessionCache();  

//   if (!user?.user?.token) {
//       return { message: "Authorization token is missing", code: false };
//   }

//   try {
//       const response = await instance.put("user/signup/p3", v, {
//           headers: {
//               Authorization: "Bearer " + user?.user?.token
//           }
//       });
//       return { data: response.data, code: true, message: "" };
//   } catch (error: any) {
//       console.error("Error during API call:", error.response?.data?.message || error.message);
//       return { message: error.response?.data?.message || "Unknown error", code: false };
//   }
// };


export const signUPEndPoint4 = async(v:any) =>{
    let user = await getSessionCache()  
    
    return instance.post("user/signup/p4",{updatedBranches:v},{headers:{Authorization: "Bearer " + user?.user?.email}})
    .then(r=>({data:r.data,code:true,message:""}))
    .catch((error:any) =>({message:error.response.data.message,code:false}) 
    )
}
export const loginEndPoint = async({
  businessEmail,
  password,
}:loginType) =>{
    return instance.post("/auth/login",{email:businessEmail,password})
    .then(r=>({data:r.data,code:true,message:""}))
    .catch((error:any) =>({message:error.response.data.message,code:false,data:null}) 
    )
}

// export const loginEndPoint = async ({
//   businessEmail,
//   password,
// }: loginType) => {
//     return instance.post("/auth/login", { email: businessEmail, password })
//         .then(r => {
//             // Store token in localStorage
//             if (r.data?.token) {
//                 localStorage.setItem("userToken", r.data.token);
//             }
//             return { data: r.data, code: true, message: "" };
//         })
//         .catch((error: any) => ({ message: error.response.data.message, code: false, data: null }));
// };


export const registerOtp = async(businessEmail:string,name:string) =>{
    return instance.post("otp/registerotp",{businessEmail,name})
    .then(r=>({data:r.data.data,code:true,message:""}))
    .catch((error:any) =>({message:error.response.data.message,code:false,data:null}))
}


export const verifyOtp = async(businessEmail:string,otp:String,token:String) =>{
    return instance.post("otp/otpverify",{businessEmail,otp,token})
    .then(r=>({data:r.data.data,code:true,message:""}))
    .catch((error:any) =>({message:error.response.data.message,code:false,data:null}))
}
export async function getCountry(){
    try {
      const response = await axios("/api/location/country/n",{headers: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: '0',
    }}); // Replace "location/countries" with your actual endpoint
      return { data: response.data.data, code: true, message: "" };
    } catch (error: any) {
      return { message: error.response?.data?.message || "Error fetching countries", code: false, data: null };
    }
  }
  
export async function getCountryFromName(countryname?: string){
    try {
      const response = await axios.post(`/api/location/country`,{name:countryname}); // Replace with your endpoint for states by country ID
      return { data: response.data.data, code: true, message: "" };
    } catch (error: any) {
      return { message: error.response?.data?.message || "Error fetching states", code: false, data: null };
    }
  }
export async function getStates(countryId?: string){
    try {
      const response = await axios(`/api/location/state/${countryId}`); // Replace with your endpoint for states by country ID
      return { data: response.data.data, code: true, message: "" };
    } catch (error: any) {
      return { message: error.response?.data?.message || "Error fetching states", code: false, data: null };
    }
  }
export async function getStatesFromCountry(countryname?: string){
    try {
      const response = await axios.post(`/api/location/state`,{q:countryname}); // Replace with your endpoint for states by country ID
      return { data: response.data.data, code: true, message: "" };
    } catch (error: any) {
      return { message: error.response?.data?.message || "Error fetching states", code: false, data: null };
    }
  }
  
export async function getCity(stateId?: string){
    try {
      const response = await axios(`/api/location/city/${stateId}`); // Replace with your endpoint for cities by state ID
      return { data: response.data.data, code: true, message: "" };
    } catch (error: any) {
      return { message: error.response?.data?.message || "Error fetching cities", code: false, data: null };
    }
  }
export async function getCityV2(stateId?: string){
    try {
      const response = await axios(`/api/location/cityname/${stateId}`); // Replace with your endpoint for cities by state ID
      return { data: response.data.data, code: true, message: "" };
    } catch (error: any) {
      return { message: error.response?.data?.message || "Error fetching cities", code: false, data: null };
    }
  }
export async function uploadFile(upload: any){
    try {
      let user = await getSessionCache()  
      const response = await instance.post(`/user/upload`,upload,{headers:{Authorization: "Bearer " + user?.user?.email,"Content-Type":"multipart/form-data"}})
      return { data: response.data, code: true, message: "" };
    } catch (error: any) {
      return { message: error.response?.data?.message || "Error uploading files", code: false, data: null };
    }
  }
export async function getOrg(){
    try {
      let user = await getSessionCache()  
      const response = await instance(`/user/org`,{headers:{Authorization: "Bearer " + user?.user?.email}})
      return { data: response.data.data, code: true, message: "" };
    } catch (error: any) {
      return { message: error.response?.data?.message || "Error fetching cities", code: false, data: null };
    }
  }
export async function getUser(){
    try {
      let user = await getSessionCache()  
      const response = await instance(`/user/user`,{headers:{Authorization: "Bearer " + user?.user?.email}})
      return { data: response.data.data, code: true, message: "" };
    } catch (error: any) {
      return { message: error.response?.data?.message || "Error fetching cities", code: false, data: null };
    }
  }
export async function locode(name:string){
    try {
      const response = await axios(`/api/location/locode?name=`+name)
      return { data: response.data.data, code: true, message: "" };
    } catch (error: any) {
      return { message: error.response?.data?.message || "Error fetching cities", code: false, data: null };
    }
}
export async function 
locodeById(name:string){
    try {
      const response = await axios(`/api/location/locode?id=`+name)
      return { data: response.data.data[0], code: true, message: "" };
    } catch (error: any) {
      return { message: error.response?.data?.message || "Error fetching cities", code: false, data: null };
    }
}

export async function postRfQ(body:any){
  try {
    let user = await getSessionCache()  
    const response = await instance.post(`/rfq/post`,{...body},{headers:{Authorization: "Bearer " + user?.user?.email}})
    return { data: response.data.data, code: true, message: "" };
  } catch (error: any) {
    console.log(error.message);
    
    return { message: error.response?.data?.message || error?.message, code: false, data: null };
  }
}
export async function getRfQ(body:any){
  try {
    let user = await getSessionCache()  
    const response = await instance.post(`/rfq/search`,{...body},{headers:{Authorization: "Bearer " + user?.user?.email}})
    return { data: response.data.data, code: true, message: "" };
  } catch (error: any) {
    return { message: error.response?.data?.message || error?.message, code: false, data: null };
  }
}
export async function getRfQById(id:string){
  try {
    let user = await getSessionCache()  
    const response = await instance.post(`/rfq/searchbyid`,{id:id},{headers:{Authorization: "Bearer " + user?.user?.email}})
    return { data: response.data.data, code: true, message: "" };
  } catch (error: any) {
    return { message: error.response?.data?.message || error?.message, code: false, data: null };
  }
}
export async function getExchangeRates(){
  try {
    let user = await getSessionCache()  
    const response = await instance(`/exchangerate`)
    return { data: response.data.data, code: true, message: "" };
  } catch (error: any) {
    return { message: error.response?.data?.message || error?.message, code: false, data: null };
  }
}

export async function token(){
  try {
    let user = await getSessionCache()  
    const response = await instance(`/user/verifytoken`,{headers:{Authorization: "Bearer " + user?.user?.email}})
    return { data: response.data.data, code: true, message: "" };
  } catch (error: any) {
    return { message: error.response?.data?.message || error?.message, code: false, data: null ,response:error.response };
  }
}
export async function verifytoken(){
  try {
    let user = await getSessionCache()  
    const response = await instance(`/user/verifytoken`,{headers:{Authorization: "Bearer " + user?.user?.email}})
    return { data: response.data.data, code: true, message: "" };
  } catch (error: any) {
    return { message: error.response?.data?.message || error?.message, code: false, data: null ,response:error.response };
  }
}

export async function postQuotation(body:any){
  try {
    let user = await getSessionCache()  
    const response = await instance.post(`/rfq/quotation/post`,{...body},{headers:{Authorization: "Bearer " + user?.user?.email}})
    return { data: response.data.data, code: true, message: "" };
  } catch (error: any) {
    console.log(error.message);
    
    return { message: error.response?.data?.message || error?.message, code: false, data: null };
  }
}
export async function getQuotationByRfqId(id:string){
  try {
    let user = await getSessionCache()  
    const response = await instance.post(`/rfq/quotation/get/rfqid`,{id},{headers:{Authorization: "Bearer " + user?.user?.email}})
    return { data: response.data.data, code: true, message: "" };
  } catch (error: any) {
    console.log(error.message);
    
    return { message: error.response?.data?.message || error?.message, code: false, data: null };
  }
}
export async function getQuotationById(id:string){
  try {
    let user = await getSessionCache()  
    const response = await instance.post(`/rfq/quotation/id`,{id},{headers:{Authorization: "Bearer " + user?.user?.email}})
    return { data: response.data.data, code: true, message: "" };
  } catch (error: any) {
    return { message: error.response?.data?.message || error?.message, code: false, data: null };
  }
}
export async function getCurrecyByContryName(country:string){
  try {
    let user = await getSessionCache()  
    const response = await axios("https://restcountries.com/v3.1/name/"+country+"?fullText=true&&fields=currencies")
    return { data: response.data[0].currencies, code: true, message: "" };
  } catch (error: any) {
    return { message: error.response?.data?.message || error?.message, code: false, data: null };
  }
}
export async function getUserOrg(){
  try {
    let user = await getSessionCache()  
    const response = await instance(`user/org`,{headers:{Authorization: "Bearer " + user?.user?.email}})
    return { data: response.data[0].currencies, code: true, message: "" };
  } catch (error: any) {
    return { message: error.response?.data?.message || error?.message, code: false, data: null };
  }
}

// export async function showOrder(data:any){
//   try {

//     let user = await getSessionCache()  
//     const response = await instance.post(`order/show-order`,data,{headers:{Authorization: "Bearer " + user?.user?.email}})
//     return { data: response.data, code: true, message: "" };
//   } catch (error: any) {
//     return { message: error.response?.data?.error || error?.error, code: false, data: null };
//   }

// }

export async function showOrder(data: any) {
  try {
    // Retrieve user session
    const user = await getSessionCache();

    if (!user || !user.user || !user.user.email) {
      throw new Error("User session is invalid or expired. Please log in again.");
    }

    // Make API call
    const response = await instance.post(
      `order/show-order`,
      data,
      {
        headers: {
          Authorization: `Bearer ${user.user.email}`, // Ensure this is indeed the intended token
        },
      }
    );

    // Return success response
    return {
      data: response.data,
      code: true,
      message: "",
    };
  } catch (error: any) {
    // Improved error handling
    const errorMessage =
      error.response?.data?.error ||
      error.message ||
      "An unexpected error occurred while fetching orders.";

    // Log for debugging purposes
    console.error("API Error:", error);

    // Return standardized error response
    return {
      message: errorMessage,
      code: false,
      data: null,
    };
  }
}

export async function getUserRole() {
  try {
    // Retrieve the user session from the cache
    const user = await getSessionCache();
    
    // Make an API request to fetch the user's job role
    const response = await instance.get(`/user/job-role`, {
      headers: { Authorization: `Bearer ${user?.user?.email}` },
    });

    // Return the job role if the request is successful
    return {
      data: response.data?.jobRole, // Assuming `jobRole` is returned in the response
      code: true,
      message: "",
    };
  } catch (error: any) {
    // Handle errors gracefully
    return {
      message: error.response?.data?.message || error?.message,
      code: false,
      data: null,
    };
  }
}

export async function updateUserKYCStatus(userId: string, status: string) {
  try {
    // Ensure userId and status are provided
    if (!userId || !status) {
      throw new Error("Both userId and status are required.");
    }

    // Retrieve the session or token
    const user = await getSessionCache();
    if (!user || !user.user || !user.user.email) {
      throw new Error("User session is invalid or expired. Please log in again.");
    }

    // Make the API request to update the user's KYC status
    const response = await fetch(`https://freightant-api.onrender.com/admin/updateStatus`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${user.user.email}`, // Use the token from getSessionCache
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, status }),
    });

    // Check if the response is successful
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to update KYC status.");
    }

    // Parse the response JSON
    const responseData = await response.json();

    // Return the updated profile status and user object
    return {
      data: responseData?.user?.profileStatus || null, // Profile status (e.g., "in_review" or "verified")
      user: responseData?.user || null, // User object from the response
      code: true,
      message: responseData?.message || "KYC status updated successfully.",
    };
  } catch (error: any) {
    // Handle errors gracefully
    return {
      message: error.message || "An unexpected error occurred.",
      code: false,
      data: null,
      user: null, // Return null user in case of an error
    };
  }
}


export async function confirmOrder(data: { quotationId: string }) {
  try {
    // Retrieve user session
    const user = await getSessionCache();

    if (!user || !user.user || !user.user.email) {
      throw new Error("User session is invalid or expired. Please log in again.");
    }

    // Make the API call to confirm the order
    const response = await instance.post(
      `order-confirm/confirm`, // Replace with actual endpoint for confirming orders
      data,
      {
        headers: {
          Authorization: `Bearer ${user.user.email}`, // Ensure the Authorization token is correct
        },
      }
    );

    // Return success response
    return {
      data: response.data,
      code: true,
      message: "Order successfully confirmed",
    };
  } catch (error: any) {
    // Handle errors
    const errorMessage =
      error.response?.data?.error ||
      error.message ||
      "An unexpected error occurred while confirming the order.";

    console.error("API Error:", error);

    return {
      message: errorMessage,
      code: false,
      data: null,
    };
  }
}


export async function quotationList(data: any) {
  try {
    // Retrieve user session
    const user = await getSessionCache();

    if (!user || !user.user || !user.user.email) {
      throw new Error("User session is invalid or expired. Please log in again.");
    }

    // Make the API call to fetch quotations
    const response = await instance.post(
      `quotation/quotation-list`, // Replace with actual endpoint for fetching quotation list
      data, // Use the correct 'data' parameter here
      {
        headers: {
          Authorization: `Bearer ${user.user.email}`, // Ensure the Authorization token is correct
        },
      }
    );

    // Return success response
    return {
      data: response.data,
      code: true,
      message: "Quotations successfully retrieved",
    };
  } catch (error: any) {
    // Handle errors
    const errorMessage =
      error.response?.data?.error ||
      error.message ||
      "An unexpected error occurred while fetching the quotations.";

    console.error("API Error:", error);

    return {
      message: errorMessage,
      code: false,
      data: null,
    };
  }
}

export async function showRfq(data: any) {
  try {
    // Retrieve user session
    const user = await getSessionCache();

    if (!user || !user.user || !user.user.email) {
      throw new Error("User session is invalid or expired. Please log in again.");
    }

    // API call to fetch RFQs
    const response = await instance.post(
      `https://freightant-api.onrender.com/api/rfq-route/show-rfq`,
      data, // Pass the request body here
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.user.email}`, // Add Authorization if required
        },
      }
    );

    // Return success response
    return {
      data: response.data,
      code: true,
      message: "RFQs successfully retrieved",
    };
  } catch (error: any) {
    // Handle errors
    const errorMessage =
      error.response?.data?.error ||
      error.message ||
      "An unexpected error occurred while fetching the RFQs.";

    console.error("API Error:", error);

    return {
      message: errorMessage,
      code: false,
      data: null,
    };
  }
}
