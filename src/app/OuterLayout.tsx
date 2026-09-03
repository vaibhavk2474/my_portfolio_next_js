"use client";

import React from "react";
import InnerLayout from "./InnerLayout";
import ThemeContextProvider from "@/context/SwitchMode";

function OuterLayout({ fonts, children }: { fonts: any; children: React.ReactNode }) {
	return (
		<ThemeContextProvider>
			<InnerLayout fonts={fonts}>{children}</InnerLayout>
		</ThemeContextProvider>
	);
}

export default OuterLayout;
