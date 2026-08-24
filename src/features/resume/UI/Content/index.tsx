"use client";

import { Box } from "@mui/material";
import React from "react";
import styles from "./style.module.css";
import { useSearchParams } from "next/navigation";
import About from "../About";

function Content() {
	const searchParams = useSearchParams();

	const currentPath = searchParams.get("path")?.toLowerCase();

	let displayUI = null;

	if (currentPath === "home") {
		displayUI = <Box>Home Page</Box>;
	} else if (currentPath === "about") {
		displayUI = <About />;
	} else if (currentPath === "tech-stack") {
		displayUI = <Box>Tech-stack Page</Box>;
	} else if (currentPath === "experience") {
		displayUI = <Box>Experience Page</Box>;
	} else if (currentPath === "projects") {
		displayUI = <Box>Projects Page</Box>;
	} else if (currentPath === "services") {
		displayUI = <Box>Services Page</Box>;
	} else if (currentPath === "contact") {
		displayUI = <Box>Contact Page</Box>;
	}
	return (
		<Box component={"main"} className={styles.box + " " + styles.content}>
			{displayUI}
		</Box>
	);
}

export default Content;
