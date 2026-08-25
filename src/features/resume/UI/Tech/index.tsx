import React from "react";
import SectionIntro from "../../components/SectionIntro";
import { Box, Typography } from "@mui/material";
import styles from "./style.module.css";
import Image from "next/image";

type Skills = { category: string; skills: { name: string; img: string }[] }[];

const CONSTANT_SKILLS: Skills = [
	{
		category: "Frontend Development",
		skills: [
			{
				name: "React",
				img: "/logos_react.png",
			},
			{
				name: "NextJs",
				img: "/NextJs.svg",
			},
			{
				name: "JavaScript",
				img: "/js_logo.svg",
			},
			{
				name: "TypeScript",
				img: "/typescript.svg",
			},
		],
	},
	{
		category: "State Management",
		// skills: "Redux, Redux Toolkit, Context API, Redux Saga",
		skills: [
			{
				name: "Redux",
				img: "/redux.svg",
			},
			{
				name: "Redux Toolkit",
				img: "/redux.svg",
			},
		],
	},
	{
		category: "UI & Styling Frameworks",
		// skills: "HTML5, CSS3, SCSS, Material UI, Tailwind CSS",
		skills: [
			{
				name: "HTML5",
				img: "/html_logo.svg",
			},
			{
				name: "CSS3",
				img: "/css_logo.svg",
			},
			{
				name: "Bootstrap",
				img: "/logos_bootstrap.svg",
			},
			{
				name: "Material UI",
				img: "/materialui.svg",
			},
			{
				name: "SASS",
				img: "/logos_sass.svg",
			},
			{
				name: "Tailwind",
				img: "/tailwindcss.png",
			},
		],
	},
	{
		category: "Backend & Databases",
		// skills: "Node.js, Express, REST API, MongoDB",
		skills: [
			{
				name: "NodeJs",
				img: "/nodejs.svg",
			},
			{
				name: "ExpressJs",
				img: "/expressjs.svg",
			},
			{
				name: "MongoDB",
				img: "/mongodb.svg",
			},
		],
	},
	{
		category: "Cloud & DevOps:",
		// skills: "Amplify, Cognito, Lambda, API Gateway, S3, Docker",
		skills: [
			{
				name: "Aws",
				img: "/aws.svg",
			},
			{
				name: "Salesforce",
				img: "/salesforce.svg",
			},
		],
	},
	// {
	// 	category: "AI Integration",
	// 	skills: "OpenAI API, Claude API, ChatGPT, Codex",
	// },
	{
		category: "Workflow & Tools",
		// skills: "Git, VS Code, Jira, Productive",
		skills: [
			{
				name: "Git",
				img: "/git.svg",
			},
			{
				name: "VS Code",
				img: "/vscode.svg",
			},
		],
	},
];

function Tech() {
	return (
		// <SectionIntro heading="Tech Stack" subHeading="Technologies & tools I’ve been working with recently">
		<Skills />
		// </SectionIntro>
	);
}

function Skills() {
	return (
		<Box>
			{CONSTANT_SKILLS.map((item, index) => (
				<Box key={index} marginTop={index ? "1rem" : 0}>
					<Typography
						sx={{
							fontSize: "1rem",
							lineHeight: 1.5,
							fontWeight: 600,
						}}
					>
						{item.category}:
					</Typography>
					<div className={styles.tech_list}>
						{item.skills.map((skill, index) => (
							<div key={index} className={styles.tech_item}>
								<div className={styles.icon}>
									<Image src={`/icons${skill.img}`} width={50} height={50} alt={skill.name} />
								</div>
								<Typography className={styles.tech_name} variant="body2">
									{skill.name}
								</Typography>
							</div>
						))}
					</div>
				</Box>
			))}
		</Box>
	);
}
export default Tech;
