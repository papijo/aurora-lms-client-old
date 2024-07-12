// HOCs/withAuth.tsx
"use client";
import React, { ComponentType, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAppSelector } from "@/utils/redux";
import ComingSoon from "@/components/coming-soon/coming-soon";

interface WithAuthProps {}

const withAuth = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const ComponentWithAuth = (props: P & WithAuthProps) => {
    const authState = useAppSelector((state) => state.auth.authState);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
      // if (!authState) {
      //   router.push("/");
      // }

      if (!authState && pathname !== "/") {
        router.push("/");
      } else if (authState && pathname === "/") {
        router.push("/dashboard");
      }
    }, [authState, pathname, router]);

    if (!authState && pathname !== "/") {
      return (
        <div>
          <ComingSoon />
        </div>
      ); // Optionally, render a loading indicator while redirecting
    }

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
};

export default withAuth;
