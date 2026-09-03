"use client";

import FooterUI from "@/components/Layout/FooterUI";
import Navbar from "@/components/Layout/Navbar";
import { ThemeContext } from "@/context/SwitchMode";
import React, { useContext } from "react";

function InnerLayout({ fonts, children }: { fonts: any; children: React.ReactNode }) {
	const theme = useContext(ThemeContext);

	return (
		<body className={fonts.className + " " + `${theme?.mode}`}>
			<Navbar />
			{children}
			<FooterUI />
		</body>
	);
}

export default InnerLayout;
