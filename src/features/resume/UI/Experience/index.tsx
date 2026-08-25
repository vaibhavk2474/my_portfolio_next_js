import React from "react";
// import SectionIntro from "../../components/SectionIntro";
import { experienceData } from "./constants";
import InfoList from "../../components/InfoList";

function Experience() {
	return (
		// <SectionIntro heading="Experience" subHeading="My professional journey">
		<InfoList dataList={experienceData} />
		// </SectionIntro>
	);
}

export default Experience;
