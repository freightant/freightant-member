"use client";

import React from "react";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { assetsRootPath } from "@/components/utils";

const ReviewPage = () => {
    const router = useRouter();
    const handleLoginAgain = () => {
        router.push("/auth/signin"); // Replace with your actual sign-in route
      };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <img
       src={assetsRootPath + "image/logos/vector.png"}
        alt="Profile in Review"
        style={{ marginBottom: "20px" }}
      />
      <h1 style={{ textAlign: "center", marginTop: "40px" }}>Your profile is in review</h1>
      <p>Please wait while we verify your details.</p>
      <Button
        type="primary"
        size="large"
        onClick={handleLoginAgain}
        style={{ marginTop: "20px" }}
      >
        Login Again
      </Button>
    </div>
  );
};

export default ReviewPage;
