"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const NavbarRoutes = () => {
  const pathname = usePathname();

  const Logout = async (e: any) => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <div className="hidden md:block">
        <SearchInput />
      </div>
      <div className="flex gap-x-2 ml-auto ">
        <Button
          onClick={(e) => Logout(e)}
          size="sm"
          variant="ghost"
          className="mr-5"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </div>
      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </>
  );
};
