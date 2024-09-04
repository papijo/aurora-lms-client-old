import Link from "next/link";
import React from "react";

import Image from "next/image";
import { Icons } from "./icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Logo } from "@/app/(routes)/_components/logo";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* Mobile */}
      {/* <div className="h-full flex items-center justify-between md:hidden ">
        <Link href="/">
          <div className="text-2xl tracking-wide">VCDELIVERY</div>
        </Link>
        <Menu />
      </div> */}

      {/* Larger Screens */}
      <div className="hidden md:flex items-center h-full justify-between gap-8">
        {/* Left */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
            {/* <Image src="/logo.png" alt="" width={24} height={24} /> */}
            {/* <Icons.radix className="h-6 w-6 animate-pulse" /> */}
            <h1 className="text-3xl font-bold">MSTC</h1>
            {/* <div className="text-2xl tracking-wide animate-pulse ">MSTC</div> */}
          </Link>
        </div>
        {/* Right */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-end gap-8">
          {/* <Searchbar />
          <Navicons /> */}
          <div className="hidden xl:flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/">About Us</Link>
            <Link href="/">Contact Us</Link>
            <Link href="/">Trainings</Link>
            <Link href="/">News</Link>
            <Link href="/auth/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
