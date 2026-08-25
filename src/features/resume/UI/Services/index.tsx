"use client";
import React from "react";
import styles from "./services.module.css";
import { motion } from "framer-motion";

import SmartphoneIcon from "@mui/icons-material/Smartphone";
import WebIcon from "@mui/icons-material/Web";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import PaletteIcon from "@mui/icons-material/Palette";

const SERVICES_LIST = [
	{
		serviceName: "Web Development",
		serviceSummary: `Can build custom websites and admin panels from scratch or using Figma to ReactJS, Figma to NextJS, and PSD to HTML, etc. Develop responsive, visually appealing, and user-friendly interfaces.`,
		Icon: WebIcon,
	},
	{
		serviceName: "User Interface (UI) Design",
		serviceSummary: `Create attractive and intuitive user interfaces that enhance the user experience (UX) and align with the client's brand identity. Offer wireframing, prototyping, and UI mockup services.`,
		Icon: PaletteIcon,
	},
	{
		serviceName: "Responsive Web Design & Optimization",
		serviceSummary: `Adapt existing websites or create new ones to be responsive and mobile-friendly, ensuring they function well across various devices and screen sizes.`,

		Icon: SmartphoneIcon,
	},
	{
		serviceName: "Website Maintenance And Support",
		serviceSummary: `Provide ongoing maintenance and support services, including bug fixes, security updates, content updates, and regular backups.`,
		Icon: DeveloperModeIcon,
	},
];

function Services() {
	return (
		<div
			id="services"
			className={"animated-content " + styles.container + " " + styles.list}
			style={{
				display: "grid",
				/* 1. Sets up exactly 2 equal-width columns */
				gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
				/* 2. Forces ALL rows to automatically match the height of the tallest item */
				gridAutoRows: "minmax(max-content, 1fr)",
				gap: "1rem" /* Optional: Adds equal spacing between your cards */,
			}}
			initial={{ opacity: 0, y: 80 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 1, ease: "easeOut" }}
			viewport={{ once: true }}
		>
			{SERVICES_LIST.map((cItem, index) => {
				const Icon = cItem.Icon;
				return (
					<div key={index} whileHover={{ scale: 1.05 }} className={styles.list_item}>
						<div className={styles.inner_box}>
							<div className={styles.logo}>{Icon && <Icon />}</div>
							<div className={styles.service_name}>{cItem.serviceName}</div>
							<p className={styles.service_summary}>{cItem.serviceSummary}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Services;
