import { Box, Typography } from "@mui/material";
import React from "react";

function About() {
	return (
		<Box>
			<Typography component={"h2"} variant="h4">
				About
			</Typography>

			<Typography component={"p"} variant="h6">
				Let me introduce my self
			</Typography>

			<Typography
				component={"p"}
				variant="body2"
				marginTop={"10px"}
				textAlign={"justify"}
				sx={{
					"& span": {
						marginBottom: "0.5rem",
						display: "inline-block",
					},
				}}
			>
				<span>Hi, I'm Vaibhav 👋 I'm a Software Engineer who enjoys building modern, scalable, and user-focused web applications.</span>
				<br />{" "}
				<span>
					Over the past 4.5+ years, I've worked with React.js, Next.js, TypeScript, AWS, and Salesforce to develop enterprise customer portals, blockchain platforms, and cloud-based
					solutions.
				</span>
				<br />
				<span>
					I enjoy turning complex business requirements into clean, intuitive user experiences while following best practices in performance, accessibility, and maintainability. Outside of
					work.
				</span>
				<br />
				<span>I'm currently exploring AI-powered frontend applications, React Query, and advanced TypeScript to build smarter, more interactive user experiences.</span>
			</Typography>
		</Box>
	);
}

export default About;
