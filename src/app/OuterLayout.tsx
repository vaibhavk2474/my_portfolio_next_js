"use client";

import React from "react";
import InnerLayout from "./InnerLayout";
import ThemeContextProvider from "@/context/SwitchMode";

function OuterLayout({
  poppins,
  children,
}: {
  poppins: any;
  children: React.ReactNode;
}) {
  return (
    <ThemeContextProvider>
      <InnerLayout poppins={poppins}>{children}</InnerLayout>
    </ThemeContextProvider>
  );
}

export default OuterLayout;
