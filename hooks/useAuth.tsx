"use client";

import { useAppSelector } from "@/utils/redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useAuth = () => {
  const authState = useAppSelector((state) => state.auth.authState);
  const router = useRouter();

  useEffect(() => {
    if (!authState) {
      router.push("/");
    }
  }, [authState, router]);

  return authState;
};

export default useAuth;
