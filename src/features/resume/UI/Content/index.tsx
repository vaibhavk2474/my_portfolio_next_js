"use client";

import { Box } from "@mui/material";
import { useSearchParams } from "next/navigation";
import About from "../About";
import Tech from "../Tech";
import Experience from "../Experience";
import SectionLayout from "./SectionLayout";
import Education from "../Education";
import Projects from "../Projects";
import Services from "../Services";
import ContactUS from "../ContactUs";

function Content() {
	const searchParams = useSearchParams();

	const currentPath = searchParams.get("path")?.toLowerCase();

	let displayUI = null;
	let heading = "";
	let subHeading = "";

	if (currentPath === "home") {
		displayUI = <Box>Home Page</Box>;
		heading = "Home";
	} else if (currentPath === "about") {
		displayUI = <About />;
		heading = "About Me";
		subHeading = "let me introduce my self";
	} else if (currentPath === "tech-stack") {
		displayUI = <Tech />;
		heading = "Tech Stack";
		subHeading = "Technologies & tools I’ve been working with recently";
	} else if (currentPath === "experience") {
		displayUI = <Experience />;
		heading = "Experience";
		subHeading = "My professional journey";
	} else if (currentPath === "education") {
		displayUI = <Education />;
		heading = "Education";
		subHeading = "";
	} else if (currentPath === "projects") {
		displayUI = <Projects />;
		heading = "Projects";
		subHeading = "Turning concepts into production-ready software";
	} else if (currentPath === "services") {
		displayUI = <Services />;
		heading = "Services";
		subHeading = "";
	} else if (currentPath === "contact") {
		displayUI = <ContactUS />;
		heading = "Contact Me";
		subHeading = "";
	}
	return (
		<SectionLayout heading={heading} subHeading={subHeading} currentPath={currentPath}>
			{displayUI}
		</SectionLayout>
	);
}

export default Content;
