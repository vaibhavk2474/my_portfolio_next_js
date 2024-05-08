import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { poppins } from "@/fonts";
import Navbar from "@/components/Navbar";
import FooterUI from "@/components/FooterUI";

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
      <body className={poppins.className + " nodark"}>
        <Navbar />
        {children}
        <FooterUI />
      </body>
    </html>
  );
}
