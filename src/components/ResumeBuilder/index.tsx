"use client";
import React, { useRef, useState } from "react";
import styles from "./resume-builder.module.css";
import { useReactToPrint } from "react-to-print";
import "./resume_page_print.css";
import CustomButton from "../UI/CustomHeadingWithSubheading/CustomButton";

import Resume_heading from "./Resume_heading/Resume_heading";
import Resume_contact_info from "./Resume_contact_info/Resume_contact_info";
import Education_details from "./Education_details/Education_details";
import Work_Experience_details from "./Work_Experience_details/Work_Experience_details";
import Resume_Skills from "./Resume_Skills/Resume_Skills";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import CertificatesSection from "./CertificatesSection/CertificatesSection";
import LanguageSection from "./LanguageSection/LanguageSection";
import InterestsSection from "./InterestsSection/InterestsSection";

function ResumeBuilder() {
  let docToPrint = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => docToPrint.current,
    documentTitle: `printed-component`,
    // documentTitle: `printed-component-${Math.random() * 1000}`,
    onAfterPrint: () => alert("Print success!"),
  });

  return (
    <div className={styles.main_container}>
      <div className={styles.btn_box}>
        <CustomButton onClick={handlePrint}>Get Your Resume</CustomButton>
      </div>
      <div className={styles.resume_container}>
        <div
          ref={docToPrint}
          id="divToPrint"
          className={styles.resume_page}
          // style={{
          //   width: "1000px",
          //   height: "800px",
          // }}
        >
          <Resume_heading />
          <Resume_contact_info />

          <div className={styles.infomation_box}>
            <div className={styles.left_box}>
              {/* Education details */}
              <Education_details />

              {/* WORK EXPERIENCE */}
              <Work_Experience_details />
            </div>
            <div className={styles.right_box}>
              {/* skills */}
              <Resume_Skills />

              {/* projects */}
              <ProjectsSection />

              {/* certificate */}
              <CertificatesSection />

              {/* Language */}
              <LanguageSection />

              {/* INTERESTS */}
              <InterestsSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.forwardRef(ResumeBuilder);
