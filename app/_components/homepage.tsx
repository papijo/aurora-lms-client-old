"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";
import withAuth from "@/hooks/with-auth";
import Navbar from "@/components/nav";
import Slider from "./landing-page-slider";

const Homepage = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Slider />
      </div>
    </div>
  );
};

export default Homepage;
