"use client";
import React, { FC, ReactNode } from "react";
import ReduxProvider from "@/components/providers/redux-provider";
import { Toaster } from "@/components/ui/toaster";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <Toaster />
      <ReduxProvider>{children}</ReduxProvider>
    </>
  );
};

export default AppLayout;
