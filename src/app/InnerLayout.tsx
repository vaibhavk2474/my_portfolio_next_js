"use client";

import FooterUI from "@/components/FooterUI";
import Navbar from "@/components/Navbar";
import { ThemeContext } from "@/context/SwitchMode";
import React, { useContext } from "react";

function InnerLayout({
  poppins,
  children,
}: {
  poppins: any;
  children: React.ReactNode;
}) {
  const theme = useContext(ThemeContext);

  return (
    <body className={poppins.className + " " + `${theme?.mode}`}>
      <Navbar />
      {children}
      <FooterUI />
    </body>
  );
}

export default InnerLayout;
