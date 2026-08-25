import React from "react";
import InfoList, { type Projects_Item_Details } from "../../components/InfoList";

export const projectsData: Projects_Item_Details[] = [
	{
		id: "p1",
		type: "Projects",
		projectName: "Prime Corporate Services",
		projectRelatedToCompany: "Qudasoft",
		imageURL: "",
		imageAlt: "",
		// location: "Pune District, Maharashtra, India",
		skills: ["React.js", "Next.js", "Material UI", "Redux", "AWS Amplify", "JavaScript", "Salesforce", "LWC", "Apex", "Node", "S3"],
		// startDate: "Jul 2024",
		// endDate: "Present",
		points: [
			"Developed a large-scale enterprise customer portal using React.js, TypeScript, Material UI, Redux Toolkit, and AWS Amplify, focusing on scalable and reusable frontend architecture.",
			"Implemented passwordless authentication using Amazon Cognito with Salesforce-based user validation and secure authentication workflows.",
			"Integrated payment processing through the NMI Payment Gateway, including secure card tokenization and transaction-related workflows.",
			"Developed a configurable Survey Builder CMS using Salesforce LWC, Apex, and custom objects, supporting dynamic question types, validation, and conditional workflows.",
			"Developed an Excel export module using ExcelJS for generating survey response data and collaborated with backend, Salesforce, QA, and design teams to deliver production-ready features.",
			"Worked with cloud-based application components through AWS Amplify and AWS services, supporting application development and delivery across frontend, API, authentication, and storage layers.",
		],
	},
	{
		id: "p2",
		type: "Projects",
		projectName: "WSB Portal",
		projectRelatedToCompany: "Qudasoft",
		projectLink: "https://portal.wsb.com",
		imageURL: "",
		imageAlt: "",
		skills: ["React.js", "TypeScript", "AWS Amplify", "Material UI", "Redux Toolkit"],
		points: [
			"Enhanced Speaker, Event and Proposal modules by developing new features, fixing production issues and improving UI/UX.",
			"Optimized frontend performance and integrated backend APIs to deliver responsive and production-ready user experiences.",
		],
	},
	{
		id: "p3",
		type: "Projects",
		projectName: "CARDANORACERS⁠",
		projectRelatedToCompany: "Incipient Infotech",
		projectLink: "https://www.cardanoracers.com/",
		skills: ["Next.js", "React.js", "Material UI", "Cardano Wallet", "Unity WebGL"],
		points: [
			"Developed from scratch the frontend of a blockchain NFT racing platform using Next.js and React.js, building 10+ pages and 15+ reusable UI components.",
			"Integrated multiple Cardano wallets (Nami, Eternl, and Lace etc wallets) to support wallet connection, NFT minting, purchases and blockchain transactions.",
			"Built race registration, NFT collection, leaderboard and Nitro token modules by integrating backend APIs and blockchain services.",
			"Integrated Unity WebGL gameplay with the React application, enabling seamless interaction between frontend, backend APIs and blockchain workflows.",
		],
	},
	{
		id: "p4",
		type: "Projects",
		projectName: "LIKES.IO⁠",
		projectRelatedToCompany: "Incipient Infotech",
		projectLink: "https://likes.io/",
		skills: ["NextJs", "Redux", "Material UI"],
		points: [
			"Developed and enhanced responsive marketing pages using Next.js, React.js and Material UI.",
			"Worked with SSR, SSG and Client-Side Rendering (CSR) while integrating backend APIs and reusable UI components.",
		],
	},
];

function Projects() {
	return <InfoList dataList={projectsData} />;
}

export default Projects;
