"use client";

import { Box, Button, IconButton } from "@mui/material";
import React, { useRef } from "react";
import styles from "./style.module.css";
import { useSearchParams } from "next/navigation";
import About from "../About";
import Tech from "../Tech";
import useScroll from "@/features/hooks/useScroll";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

function Content() {
	const [containerRef, isBottom, handleScrollButton] = useScroll();
	const searchParams = useSearchParams();

	const currentPath = searchParams.get("path")?.toLowerCase();

	let displayUI = null;

	if (currentPath === "home") {
		displayUI = <Box>Home Page</Box>;
	} else if (currentPath === "about") {
		displayUI = <About />;
	} else if (currentPath === "tech-stack") {
		displayUI = <Tech />;
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
		<Box
			component={"main"}
			ref={containerRef}
			className={styles.content}
			sx={{
				position: "relative",
			}}
		>
			{displayUI}

			<IconButton
				sx={{
					position: "sticky",
					left: "100%",
					bottom: 0,
					color: "currentColor",

					"& svg": {
						transform: isBottom ? "rotate(180deg)" : "rotate(0deg)",
						transition: "transform 0.1s",
					},
				}}
				onClick={handleScrollButton}
			>
				{/* {isBottom ? "Top" : "Down"} Scroll */}
				<ExpandCircleDownIcon />
			</IconButton>
		</Box>
	);
}

export default Content;
