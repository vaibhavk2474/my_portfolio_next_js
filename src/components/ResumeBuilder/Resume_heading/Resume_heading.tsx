import React from "react";
import styles from "./Resume_heading.module.css";
import Image from "next/image";

function Resume_heading() {
  return (
    <>
      <div className={styles.heading_part}>
        <div className={styles.img_box}>
          <Image
            src={"/images/profile-pic.jpg"}
            alt=""
            width={250}
            height={250}
          />
        </div>
        <div className={styles.heading_info}>
          <h1 className={styles.name}>VAIBHAV KUMAR</h1>
          <h3 className={styles.post}>ReactJs Developer</h3>
          <p className={styles.intro}>
            I am an experienced frontend developer weaved with the skills such
            as React, Redux, JavaScript, NEXTJS, HTML, CSS, SCSS, Git. Finding a
            good opportunity to learn more and grow my skillset.
          </p>
        </div>
      </div>
    </>
  );
}

export default Resume_heading;
