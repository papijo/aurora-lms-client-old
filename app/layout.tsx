import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import AppLayout from "./_components/AppLayout";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aurora LMS",
  description: "Aurora Learning Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
