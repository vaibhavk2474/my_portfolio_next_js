import React from "react";
import ResumeForm from "@/components/ResumeBuilder/ResumeForm";
import ResumePdf from "@/components/ResumeBuilder/ResumePdf";
import { ReduxProvider } from "@/redux/ReduxProvider";
import "@/styles/resume.css";

function ResumeBuilderPage({ ...rest }) {
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
