"use client";

import { Card, CardContent, CardHeader, CardFooter } from "../ui/card";
import { BackButton } from "./back-button";
import { Header } from "./header";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  bigLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonHref,
  backButtonLabel,
  bigLabel,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header biglabel={bigLabel} label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>

      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </Card>
  );
};
