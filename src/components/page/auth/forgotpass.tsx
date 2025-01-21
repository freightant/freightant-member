"use client";
import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { assetsRootPath } from "@/components/utils";
import { motion } from 'framer-motion';
import UnAuthHOC from '@/components/supportcomponents/auth/UnAuthHOC';
import { useRouter } from 'next/navigation';


const ForgotPasswordUI = () => {
    const router = useRouter();
    const [form] = Form.useForm();
    const [formLoading, setFormLoading] = useState(false);

    const handleFinish = async (user: { email: string }) => {
        setFormLoading(true);
        try {
            // Send reset password request to API
            const response = await fetch('/api/auth/forgot-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: user.email }),
            });

            const data = await response.json();
            if (response.ok) {
                message.success(data.message || 'Reset link sent to your email.');
                router.replace('/auth/signin');
            } else {
                message.error(data.message || 'Error sending reset link. Please try again.');
            }
        } catch (err) {
            message.error('An error occurred. Please try again later.');
        } finally {
            setFormLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            <div className="freightant-landing">
                <div className="freightant-logo d-flex justify-content-center my-2 mb-5">
                    <img src={assetsRootPath + "image/logos/vector.png"} alt="Freightant Logo" width={"70%"} height={"50"} />
                </div>
                <div className="freightant-login">
                    <h3 className="text-center">Forgot Password</h3>
                    
                    <Form layout="vertical" onFinish={handleFinish}>
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
                            loading={formLoading}
                        >
                            Send Reset Link
                        </Button>
                    </Form>
                    
                    <div className="freightant-signup mt-3 text-center">
                        <p>
                            Remembered your password?{' '}
                            <a href="/auth/signin" className="signup-link">
                                Sign In
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default UnAuthHOC(ForgotPasswordUI);
