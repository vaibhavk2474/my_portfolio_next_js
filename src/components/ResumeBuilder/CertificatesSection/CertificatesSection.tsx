import React from "react";
import styles from "./CertificatesSection.module.css";

function CertificatesSection() {
  return (
    <div className={styles.certificate_box}>
      <h3 className={styles.title_heading}>certificates</h3>
      <ul className={styles.certificate_list}>
        <li>Web-development and DSA course certification from pepcoding</li>
        <li>
          Front End Web UI Frameworks and Tools: Bootstrap 4 from Coursera
        </li>
        <li>HTML and CSS course certificate from Coursera.</li>
      </ul>
    </div>
  );
}

export default CertificatesSection;
