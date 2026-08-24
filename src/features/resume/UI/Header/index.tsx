import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./style.module.css";

function Header() {
	return (
		<Box component={"header"} className={styles.box + " " + styles.header}>
			<Typography variant="body1">Vaibhav Kumar | Software Developer</Typography>
			<Intro />
		</Box>
	);
}

function Intro() {
	return (
		<>
			<Typography
				component={"p"}
				sx={{
					fontSize: "0.85rem",
					textAlign: "justify",
					lineHeight: 1.5,

					// display: "-webkit-box",
					// overflow: "hidden",
					// WebkitBoxOrient: "vertical",
					// WebkitLineClamp: 2, // Tells MUI to enforce exactly 2 lines
				}}
			>
				I&apos;m Vaibhav Kumar, Software Developer with 4.5+ years of experience building scalable, production-ready web applications using React.js, Next.js, TypeScript and AWS. Skilled in
				developing reusable UI components, integrating REST APIs, implementing secure authentication, and delivering enterprise solutions across cloud, Salesforce, and modern frontend
				ecosystems.
			</Typography>
		</>
	);
}

export default Header;
