"use client";
import React from "react";
import styles from "./projects.module.css";
import CustomHeadingWithSubheading from "../../UI/CustomHeadingWithSubheading";
import EyeIcon from "@/icons/EyeIcon";
import { motion } from "framer-motion";

const PROJECTS_LIST = [
	{
		projectName: "Prime Corporate Services",
		projectSummary: `Customer portal for business formation and corporate services, including company management, documents, tasks, billing, and assessments. 
    Built the frontend from scratch and developed Salesforce admin survey modules.`,
		projectTechList: ["React", "NextJs", "Redux", "Material UI", "NodeJs", "AWS", "Salesforce", "NMI Payments"],
		projectViewLink: "https://primecorporateservices.com/",
	},
	{
		projectName: "WSB Portal",
		projectSummary: `WSB Portal is an enterprise event and speaker management platform used by clients, speakers, and internal teams to manage speaker bookings, event proposals, schedules, communications, and related business workflows. Contributed to speaker booking, event proposal, scheduling features.`,
		projectTechList: ["React", "NextJs", "Redux toolkit", "Material UI", "NodeJs", "AWS"],
		projectViewLink: "https://portal.wsb.com/",
	},
	{
		projectName: "Cardano Racers",
		projectSummary: `CardanoRacers is a Web3 NFT racing platform built on the Cardano blockchain. Users can buy NFT racers, connect their wallets, compete in races, and win ADA rewards. Led frontend development, implementing blockchain features, wallet integration, unity game integration and NFT management.`,
		projectTechList: ["React", "NextJs", "Redux", "Material UI"],
		projectViewLink: "https://www.cardanoracers.com/",
	},
	{
		projectName: "Likes.io",
		projectSummary: `Likes.io is a social media marketing platform that helps users grow their presence on various social media platforms primarily Instagram. Built and maintained core e-commerce features for purchasing likes, views, and follower packages, including cart and checkout functionality.`,
		projectTechList: ["React", "NextJs", "Redux", "JavaScript", "Material UI"],
		projectViewLink: "https://www.likes.io/",
	},
	{
		projectName: "Enverx",
		projectSummary: `A web3 web application where project developers can add details
    of their projects and investors can invest in them
    Worked on both admin and user side. Enhanced the React frontend with feature development, bug fixes, and blockchain API integrations.`,
		projectTechList: ["React", "NextJs", "Redux Saga", "Bootstrap"],
		projectViewLink: "",
	},
	{
		isCommingSoon: true,
		projectName: "Comming Soon",
		projectSummary: `An exciting new project is currently in development. Stay tuned for updates.`,
		projectTechList: [],
		projectViewLink: "",
	},
];

function Projects() {
	return (
		<motion.div className="animated-content" initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }}>
			<section id="projects" className={styles.container}>
				<CustomHeadingWithSubheading headingText="Projects" subHeadingText="Things I've built so far" />

				<div className={styles.list}>
					{PROJECTS_LIST.map((cItem, index) => (
						<>
							{cItem.isCommingSoon ? (
								<motion.div whileHover={{ scale: 1.05 }} key={index}>
									<div className={styles.list_item}>
										<div className={styles.inner_box + " " + styles.over_box}>
											<div className={styles.project_name}>
												{cItem.projectViewLink ? (
													<a title="Project Link" href={cItem.projectViewLink} target="_blank">
														{cItem.projectName}
													</a>
												) : (
													<>{cItem.projectName}</>
												)}
											</div>
											<p className={styles.project_summary}>{cItem.projectSummary}</p>
											<div className={styles.project_tech_details}>
												{cItem.projectTechList?.map((cItem, index) => (
													<span key={index} className={styles.tech_box}>
														{cItem}
													</span>
												))}
											</div>
											{cItem.projectViewLink && (
												<a title="Project Link" href={cItem.projectViewLink} target="_blank" className={styles.project_view}>
													<EyeIcon />
												</a>
											)}
										</div>
									</div>
								</motion.div>
							) : (
								<motion.div whileHover={{ scale: 1.05 }} key={index}>
									<div className={styles.list_item}>
										<div className={styles.inner_box}>
											<div className={styles.project_name}>
												{cItem.projectViewLink ? (
													<a title="Project Link" href={cItem.projectViewLink} target="_blank">
														{cItem.projectName}
													</a>
												) : (
													<>{cItem.projectName}</>
												)}
											</div>
											<p className={styles.project_summary}>{cItem.projectSummary}</p>
											<div className={styles.project_tech_details}>
												{cItem.projectTechList?.map((cItem, index) => (
													<span key={index} className={styles.tech_box}>
														{cItem}
													</span>
												))}
											</div>
											{cItem.projectViewLink && (
												<a title="Project Link" href={cItem.projectViewLink} target="_blank" className={styles.project_view}>
													<EyeIcon />
												</a>
											)}
										</div>
									</div>
								</motion.div>
							)}
						</>
					))}
				</div>
			</section>
		</motion.div>
	);
}

export default Projects;
