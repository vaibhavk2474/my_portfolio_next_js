import React from "react";
import styles from "./Resume_Skills.module.css";

function Resume_Skills() {
  return (
    <div className={styles.skills_box}>
      <h3 className={styles.title_heading}>Skills</h3>
      <div className={styles.skills_list}>
        {[
          "ReactJs",
          "Redux",
          "JavaScript",
          "NextJs",
          "HTML5",
          "CSS3",
          "Material UI",
          "SCSS",
          "TypeScript",
          "Git",
          "Quick Learner",
        ].map((c, i) => (
          <span key={i} className={styles.skills_list_item}>
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Resume_Skills;
