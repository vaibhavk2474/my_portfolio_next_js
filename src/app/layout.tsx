import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { poppins } from "@/fonts";
import OuterLayout from "./OuterLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A React Dev Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <OuterLayout poppins={poppins}>{children}</OuterLayout>
    </html>
  );
}
