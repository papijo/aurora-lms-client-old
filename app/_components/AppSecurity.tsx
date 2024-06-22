"use client";
import { useAppSelector } from "@/utils/redux";
import { useRouter } from "next/navigation";
import { FC, ReactNode } from "react";

interface AppSecurityProps {
  children: ReactNode;
}

const AppSecurity: FC<AppSecurityProps> = ({ children }) => {
  const router = useRouter();
  const isLoggedIn = useAppSelector((state) => state.auth.authState);

  console.log(isLoggedIn);

  if (isLoggedIn === true) {
    router.push("/");
  }

  return <>{children}</>;
};

export default AppSecurity;
