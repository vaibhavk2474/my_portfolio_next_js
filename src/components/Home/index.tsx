import React from "react";
import styles from "./home.module.css";
import Image from "next/image";

function Home() {
  return (
    <section id="home" className={styles.home}>
      <h1 className={styles.heading}>
        Hi 👋, <br />
        My name is <br />
        <span className={styles.colored}>Vaibhav Kumar</span> <br />I am{" "}
        <span className={styles.colored}> React Developer</span>
      </h1>
      <div className={styles.profile_img_box}>
        <Image
          className={styles.profile_img}
          src={"/images/profile-pic.jpg"}
          alt="profile-pic"
          height={400}
          width={400}
        />
      </div>
    </section>
  );
}

export default Home;
