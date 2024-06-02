"use client";
import React, { useRef, useState } from "react";
import styles from "./resume-builder.module.css";
import { useReactToPrint } from "react-to-print";
import "./resume_page_print.css";

import Resume_heading from "./Resume_heading/Resume_heading";
import Resume_contact_info from "./Resume_contact_info/Resume_contact_info";
import Education_details from "./Education_details/Education_details";
import Work_Experience_details from "./Work_Experience_details/Work_Experience_details";
import Resume_Skills from "./Resume_Skills/Resume_Skills";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import CertificatesSection from "./CertificatesSection/CertificatesSection";
import LanguageSection from "./LanguageSection/LanguageSection";
import InterestsSection from "./InterestsSection/InterestsSection";
import CustomButton from "../UI/CustomButton";

function ResumeBuilder() {
  let docToPrint = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => docToPrint.current,
    documentTitle: `printed-component`,
    // documentTitle: `printed-component-${Math.random() * 1000}`,
    onAfterPrint: () => alert("Print success!"),

    // pageStyle: `
    //   @media print {
    //     @page {
    //       size: auto; /* Set page size to A4, can be letter, legal, etc. */
    //       margin: 0; /* Adjust margins as needed */

    //       size: 24cm 24cm;

    //     }

    //     body { margin: 0; padding: 0; }

    //      body { -webkit-print-color-adjust: exact; }

    //      .printable-content {
    //       margin:0;
    //       padding:0;
    //       width: 24cm;
    //       height: 24cm;
    //       box-sizing: border-box;
    //       page-break-inside: avoid;
    //     }
    //   }`,
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
          className={`${styles.resume_page} printable-content`}
          // style={{
          //   width: "100%",
          //   height: "auto",
          //   padding: 0,
          //   margin: 0,
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
