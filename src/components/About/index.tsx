import React from "react";
import CustomHeadingWithSubheading from "../UI/CustomHeadingWithSubheading";
import styles from "./about.module.css";

function About() {
  return (
    <section id="about">
      <CustomHeadingWithSubheading
        headingText="About Us"
        subHeadingText="let me introduce my self"
      />

      <div className={styles.about_content}>
        <div className={styles.left}>
          03+ <br />
          years of experiences
        </div>
        <div className={styles.about_me}>
          Hi, I am Frontend Developer with 3+ years of experience, I have a
          strong foundation in HTML, CSS, and JavaScript, and have worked on a
          range of projects for clients across various industries. My experience
          includes developing responsive and websites, creating beautiful user
          interfaces, and optimizing website performance for enhanced user
          experience. I am passionate about frontend development and enjoy
          keeping up with the latest trends and technologies. I am always
          seeking opportunities to work on new and challenging projects that
          will allow me to further develop my skills and expertise.
        </div>
      </div>
    </section>
  );
}

export default About;
