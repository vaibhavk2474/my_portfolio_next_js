import React from "react";
import styles from "./customHeadingWithSubheading.module.css";

function CustomHeadingWithSubheading({
  headingText = "no heading",
  subHeadingText = "no subheading",
}) {
  return (
    <div className={styles.headings}>
      <h3 className={styles.heading}>{headingText}</h3>
      <h5 className={styles.sub_heading}>{subHeadingText}</h5>
    </div>
  );
}

export default CustomHeadingWithSubheading;
