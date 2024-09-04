"use client";

import { sidebarRoutes } from "@/hooks/side-bar-data";
import { SidebarItem } from "./sidebar-item";
// import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";

// Get User ID

export const SidebarRoutes = () => {
  // const pathname = usePathname();

  return (
    <div className="flex flex-col justify-content: flex-end">
      <div className="flex flex-col w-full">
        {sidebarRoutes?.map((route, index) => (
          <SidebarItem
            key={index}
            icon={route.icon}
            label={route.label}
            href={route.href}
          />
        ))}
      </div>
    </div>
  );
};
