"use client";

import React from "react";
import styles from "./about.module.css";
import CustomHeadingWithSubheading from "../../UI/CustomHeadingWithSubheading";
import { motion } from "framer-motion";

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
					<div className={styles.about_me}>
						I'm Vaibhav Kumar, a Software Developer with 4.5+ years of experience specializing in React.js and modern web development. I build fast, scalable, and user-centric applications
						using React.js, Next.js, TypeScript, JavaScript, Node.js, Express.js, and MongoDB, with hands-on exposure to AWS and Salesforce.
						<br /> I enjoy transforming complex requirements into clean, intuitive user experiences while maintaining performance, accessibility, and code quality. Passionate about
						learning and problem-solving, I continuously explore new technologies and best practices to build impactful digital products.
					</div>
				</div>
			</section>
		</motion.div>
	);
}

export default About;
