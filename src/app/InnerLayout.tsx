"use client";

import FooterUI from "@/components/FooterUI";
import Navbar from "@/components/Navbar";
import { SwitchModeContext } from "@/context/SwitchMode";
import React, { useContext } from "react";

function InnerLayout({
  poppins,
  children,
}: {
  poppins: any;
  children: React.ReactNode;
}) {
  const switchModeContext = useContext(SwitchModeContext);

  return (
    <body className={poppins.className + " " + `${switchModeContext?.mode}`}>
      <Navbar />
      {children}
      <FooterUI />
    </body>
  );
}

export default InnerLayout;
