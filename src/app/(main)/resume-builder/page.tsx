import React from "react";
import ResumeForm from "@/components/ResumeBuilder/ResumeForm";
import ResumePdf from "@/components/ResumeBuilder/ResumePdf";
import { ReduxProvider } from "@/redux/ReduxProvider";
import "./resume.css";

function ResumeBuilderPage() {
	return (
		<ReduxProvider>
			<div className="resume-container">
				<ResumeForm />
				<ResumePdf />
			</div>
		</ReduxProvider>
	);
}

export default ResumeBuilderPage;
