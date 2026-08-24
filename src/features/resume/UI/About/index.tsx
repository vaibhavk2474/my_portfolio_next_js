import { Typography } from "@mui/material";
import React from "react";
import SectionIntro from "../../components/SectionIntro";

const CONSTANTS_INTRO_LIST = [
	`Hi, I'm Vaibhav 👋 I'm a Software Engineer who enjoys building modern, scalable, and user-focused web applications.`,
	`Over the past 4.5+ years, I've worked with React.js, Next.js, TypeScript, AWS, and Salesforce to develop enterprise customer portals, blockchain platforms, and cloud-based solutions.`,
	`I enjoy turning complex business requirements into clean, intuitive user experiences while following best practices in performance, accessibility, and maintainability. Outside of work.`,
	`I'm currently exploring AI-powered frontend applications, React Query, and advanced TypeScript to build smarter, more interactive user experiences.`,
];
function About() {
	return (
		<SectionIntro heading="About" subHeading="Let me introduce my self">
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
				{CONSTANTS_INTRO_LIST.map((i, index) => {
					return <span key={index}>{i}</span>;
				})}
			</Typography>
		</SectionIntro>
	);
}

export default About;
