"use client";
import React, { useState } from "react";
import { Form, Input, Button, message, Modal } from "antd";
import { assetsRootPath } from "@/components/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import UnAuthHOC from "@/components/supportcomponents/auth/UnAuthHOC";
import { useRouter } from "next/navigation";
import { updateUserKYCStatus } from '@/network/endpoints'; 

const SignInUI = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [formLoading, setformLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1); // Step 1: Enter Email, Step 2: Verify OTP
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  // Handlers for modal visibility
  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => {
    setIsModalOpen(false);
    setStep(1); // Reset modal to step 1
    setEmail("");
    setOtp("");
  };

  // Handle login
  const handleFinish = (user: { email: string; password: string }) => {
    setformLoading(true);
    signIn("credentials", {
      email: user.email,
      password: user.password,
      redirect: false,
    })
      .then((r) => {
        if (r?.ok && r?.status !== 401) {
          router.replace("/");
        } else {
          message.error(r?.error);
        }
      })
      .catch((err) => {
        console.log("err ", err.message);
      })
      .finally(() => {
        setformLoading(false);
      });
  };
  // const handleFinish = (user: { email: string; password: string }) => {
  //   setformLoading(true);
  //   signIn("credentials", {
  //     email: user.email,
  //     password: user.password,
  //     redirect: false,
  //   })
  //     .then((r) => {
  //       if (r?.ok && r?.status !== 401) {
  //         // Mocked flag value for demonstration purposes
  //         const flag = "verified"; // Replace this with the actual flag from your API or auth response
  
  //         if (flag === "in_review") {
  //           // Show a link to the review page
  //           router.replace("/auth/review");
  //         }  else if (flag === "verified") {
  //           router.replace("/dashboard"); // Redirect to normal flow (dashboard or home)
  //         } else {
  //           message.error("Invalid user state.");
  //         }
  //       } else {
  //         message.error(r?.error);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log("err ", err.message);
  //     })
  //     .finally(() => {
  //       setformLoading(false);
  //     });
  // };

  // const handleFinish = async (user: { email: string; password: string }) => {
  //   setformLoading(true);
  //   try {
  //     // Step 1: Sign In
  //     const response = await signIn("credentials", {
  //       email: user.email,
  //       password: user.password,
  //       redirect: false,
  //     });
  
  //     if (response?.ok && response?.status !== 401) {
  //       // Step 2: Fetch and Update KYC Status
  //       const {
  //         data: profileStatus,
  //         code,
  //         message: updateMessage,
  //         user: updatedUser, // Renaming to avoid conflict
  //       } = await updateUserKYCStatus(user.email, "in_review");
  
  //       if (!code) {
  //         // Handle error response from updateUserKYCStatus
  //         message.error(updateMessage || "Failed to update user KYC status.");
  //         return;
  //       }
  
  //       const userId = updatedUser?._id; // Extract the user ID from the response
  //       console.log("User ID:", userId); // Log the user ID for debugging purposes
  
  //       // Step 3: Redirect based on the user's KYC status
  //       switch (profileStatus) {
  //         case "in_review":
  //           router.replace("/auth/review"); // Redirect to the review page
  //           break;
  //         case "verified":
  //           router.replace("/dashboard"); // Redirect to the dashboard
  //           break;
  //         default:
  //           message.error("Invalid user state."); // Handle unexpected profile statuses
  //           break;
  //       }
  //     } else {
  //       // Handle sign-in failure
  //       message.error(response?.error || "Authentication failed.");
  //     }
  //   } catch (err: any) {
  //     console.log("Error:", err.message);
  //     message.error(err.message || "An unexpected error occurred.");
  //   } finally {
  //     setformLoading(false);
  //   }
  // };
  
  
  
  

  // Request OTP (Forgot Password - Step 1)
  const requestOtp = async (values: { email: string }) => {
    try {
      const response = await fetch("https://freightant-api.onrender.com/api/forgot/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: values.email }),
      });

      const data = await response.json();
      if (response.ok) {
        setEmail(values.email);
        setStep(2); // Move to OTP verification step
        message.success("OTP sent to your email.");
      } else {
        message.error(data.message || "Error sending OTP. Please try again.");
      }
    } catch (err) {
      message.error("An error occurred. Please try again later.");
    }
  };

  // Verify OTP and Reset Password (Forgot Password - Step 2)
  const verifyOtpAndResetPassword = async (values: { otp: string; newPassword: string }) => {
    try {
      const response = await fetch("https://freightant-api.onrender.com/api/forgot/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email, // Use the email stored in state
          otp: values.otp,
          newPassword: values.newPassword,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        message.success("Password reset successfully.");
        handleCancel(); // Close modal
      } else {
        message.error(data.message || "OTP verification failed.");
      }
    } catch (err) {
      message.error("An error occurred. Please try again later.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="freightant-landing">
        <div className="freightant-logo d-flex justify-content-center my-2 mb-5">
          <img
            src={assetsRootPath + "image/logos/vector.png"}
            alt="Freightant Logo"
            width={"70%"}
            height={"50"}
          />
        </div>
        <div className="freightant-login">
          <h3 className="text-center">Login</h3>

          <Form layout="vertical" onFinish={handleFinish} >
            <Form.Item
              label="Business email"
              name={"email"}
              rules={[
                { type: "email", message: "Please enter a valid email address" },
                { required: true },
              ]}
              
            >
              <Input placeholder="Enter your business email" style={{ padding: "10px" }}/>
            </Form.Item>
            <Form.Item label="Password" name={"password"}>
              <Input.Password placeholder="Enter your password" style={{ padding: "10px" }}/>
            </Form.Item>
            <div className="float-end mb-2 mt-1">
              <Button type="link" onClick={showModal}>
                Forgot Password?
              </Button>
            </div>
            <Button
              htmlType="submit"
              type="primary"
              block
              shape="round"
              loading={formLoading}
              style={{ padding: "16px" }}
            >
              Login
            </Button>
          </Form>
          <div className="freightant-signup mt-3">
            <p>
              Don&apos;t have an account?{" "}
              <Link href="/auth/signup" className="signup-link">
                Sign up
              </Link>
            </p>
          </div>
        </div>

        {/* Forgot Password Modal */}
        <Modal
          title="Forgot Password"
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
          destroyOnClose
        >
          {step === 1 && (
            <Form layout="vertical" onFinish={requestOtp}>
              <Form.Item
                label="Business email"
                name="email"
                rules={[
                  { type: "email", message: "Please enter a valid email address" },
                  { required: true, message: "Email is required" },
                ]}
              >
                <Input placeholder="Enter your registered email" />
              </Form.Item>
              <Button
                htmlType="submit"
                type="primary"
                block
                shape="round"
              >
                Send OTP
              </Button>
            </Form>
          )}
          {step === 2 && (
            <Form layout="vertical" onFinish={verifyOtpAndResetPassword}>
              <Form.Item
                label="OTP"
                name="otp"
                rules={[{ required: true, message: "OTP is required" }]}
              >
                <Input placeholder="Enter OTP sent to your email" />
              </Form.Item>
              <Form.Item
                label="New Password"
                name="newPassword"
                rules={[
                  { required: true, message: "Password is required" },
                  { min: 6, message: "Password must be at least 6 characters" },
                ]}
              >
                <Input.Password placeholder="Enter new password" />
              </Form.Item>
              <Button
                htmlType="submit"
                type="primary"
                block
                shape="round"
              >
                Reset Password
              </Button>
            </Form>
          )}
        </Modal>
      </div>
    </motion.div>
  );
};

export default UnAuthHOC(SignInUI);
