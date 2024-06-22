// HOCs/withAuth.tsx
import React, { ComponentType, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/utils/redux";
import ComingSoon from "@/components/coming-soon/coming-soon";
import Loader from "@/components/loading/loader";

interface WithAuthProps {}

const withAuth = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const ComponentWithAuth = (props: P & WithAuthProps) => {
    const authState = useAppSelector((state) => state.auth.authState);
    const router = useRouter();

    useEffect(() => {
      if (!authState) {
        router.push("/");
      }
    }, [authState, router]);

    if (!authState) {
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
