import React from "react";
import styles from "./LanguageSection.module.css";

function LanguageSection() {
  return (
    <div className={styles.language_box}>
      <h3 className={styles.title_heading}>Language</h3>
      <ul className={styles.language_list}>
        <li>
          <span>English</span>
          <span className={styles.highlight_text}>
            {" "}
            Full Professional Proficiency
          </span>
        </li>
        <li>
          <span>Hindi</span>
          <span className={styles.highlight_text}>
            Native or Bilingual Proficiency
          </span>
        </li>
      </ul>
    </div>
  );
}

export default LanguageSection;
