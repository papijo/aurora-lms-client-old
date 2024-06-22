"use client";
import React from "react";
import { SidebarItem } from "./sidebar-item";
import { LogOut } from "lucide-react";

const SidebarLogout = () => {
  return (
    <div className="">
      <SidebarItem key={1} icon={LogOut} label="Logout" href="/" />
    </div>
  );
};

export default SidebarLogout;
