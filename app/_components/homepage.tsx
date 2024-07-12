"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";
import withAuth from "@/hooks/with-auth";

const Homepage = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 to-slate-300">
      <div className="space-y-6 text-center">
        <h1 className={cn("text-6xl font-semibold text-gray drop-shadow-md")}>
          Auth
        </h1>
        <p className="text-slate text-lg">Landing Page</p>
        <div>
          <LoginButton mode="modal">Sign In</LoginButton>
        </div>
      </div>
    </main>
  );
};

export default withAuth(Homepage);
