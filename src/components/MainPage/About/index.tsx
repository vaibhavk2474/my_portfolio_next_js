"use client";

import React from "react";
import styles from "./about.module.css";
import CustomHeadingWithSubheading from "../../UI/CustomHeadingWithSubheading";
import { motion } from "framer-motion";
// import TagGroup from "@/components/UI/TagGroup";

function About() {
	return (
		<motion.div className="animated-content" initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }}>
			<section id="about">
				<CustomHeadingWithSubheading headingText="About Me" subHeadingText="let me introduce my self" />

				<div className={styles.about_content}>
					<div className={styles.left}>
						4.5+ <br />
						years of experiences
					</div>
					<div>

						<div className={styles.about_me}>
							Hi, I'm Vaibhav 👋

							I'm a Frontend Software Engineer who enjoys building modern, scalable, and user-focused web applications. <br />

							Over the past 4.5+ years, I've worked with React.js, Next.js, TypeScript, AWS, and Salesforce to develop enterprise customer portals, blockchain platforms, and cloud-based solutions. I enjoy turning complex business requirements into clean, intuitive user experiences while following best practices in performance, accessibility, and maintainability. <br />

							Outside of work, I'm currently exploring AI-powered frontend applications, React Query, and advanced TypeScript to build smarter, more interactive user experiences.
						</div>
						{/* <TagGroup
						items={["4.5+ Years Experience", "React.js & Next.js", "AWS & Salesforce"]}
					/> */}
					</div>
				</div>
			</section>
		</motion.div>
	);
}

export default About;
