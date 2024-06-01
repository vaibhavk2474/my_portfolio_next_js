import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { poppins } from "@/fonts";
import OuterLayout from "./OuterLayout";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vaibhav Kumar | Experienced React.js Developer",
  description:
    "Welcome to the portfolio of Vaibhav Kumar, a seasoned React.js developer with extensive experience in creating dynamic and responsive web applications. Proficient in technologies like React, Redux, JavaScript, Next.js, and more, I specialize in building user-friendly interfaces and integrating complex APIs. With a background in blockchain projects and a strong educational foundation, I am constantly seeking opportunities to learn and expand my skill set. Explore my projects, skills, and professional journey here. Contact me for collaborations and inquiries.",
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
