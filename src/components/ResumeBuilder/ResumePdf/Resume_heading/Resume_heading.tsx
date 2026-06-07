import React from "react";
import styles from "./Resume_heading.module.css";
import Image from "next/image";
import { useAppSelector } from "@/redux/redux-hooks";

function Resume_heading() {
  const info = useAppSelector((state) => state.infoReducer);

  return (
    <div className={styles.heading_part}>
      <div className={styles.img_box}>
        <Image
          src={
            (info.image && URL.createObjectURL(info.image)) ||
            "/images/profile-pic.jpg"
          }
          alt=""
          width={250}
          height={250}
        />
      </div>
      <div className={styles.heading_info}>
        <h1 className={styles.name}>{info.fullName || "VAIBHAV KUMAR"}</h1>
        <h3 className={styles.post}>
          {info.designation || "ReactJs Developer"}
        </h3>
        <p className={styles.intro}>
          {info.description ||
            `I am an experienced frontend developer weaved with the skills such
            as React, Redux, JavaScript, NEXTJS, HTML, CSS, SCSS, Git. Finding a
            good opportunity to learn more and grow my skillset.`}
        </p>
      </div>
    </div>
  );
}

export default Resume_heading;
