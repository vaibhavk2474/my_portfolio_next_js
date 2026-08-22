"use client";

import React from "react";
import ThemeContextProvider from "@/context/SwitchMode";
import InnerLayout from "./InnerLayout";

function OuterLayout({ poppins, children }: { poppins: any; children: React.ReactNode }) {
	return (
		<ThemeContextProvider>
			<InnerLayout poppins={poppins}>{children}</InnerLayout>
		</ThemeContextProvider>
	);
}

export default OuterLayout;
