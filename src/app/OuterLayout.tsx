"use client";

import React from "react";
import SwitchModeContextProvider from "@/context/SwitchMode";
import InnerLayout from "./InnerLayout";

function OuterLayout({
  poppins,
  children,
}: {
  poppins: any;
  children: React.ReactNode;
}) {
  return (
    <SwitchModeContextProvider>
      <InnerLayout poppins={poppins}>{children}</InnerLayout>
    </SwitchModeContextProvider>
  );
}

export default OuterLayout;
