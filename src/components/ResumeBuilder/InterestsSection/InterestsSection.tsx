import React from "react";
import styles from "./InterestsSection.module.css";

function InterestsSection() {
  return (
    <div className={styles.interest_box}>
      <h3 className={styles.title_heading}>INTERESTS</h3>
      <ul className={styles.interest_list}>
        <li>Litening Music</li>
        <li>Singing</li>
        <li>Watching Movies</li>
      </ul>
    </div>
  );
}

export default InterestsSection;
