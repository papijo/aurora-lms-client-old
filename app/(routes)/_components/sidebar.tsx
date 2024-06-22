import React from "react";
import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebar-routes";
// import SidebarLogout from "./sidebar-logout";

export const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm justify-items-end">
      <div className="p-6">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>

      {/* <SidebarLogout /> */}
    </div>
  );
};
