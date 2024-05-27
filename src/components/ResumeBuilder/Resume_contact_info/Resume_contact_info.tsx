import React from "react";
import styles from "./Resume_contact_info.module.css";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";

function Resume_contact_info() {
  return (
    <div className={styles.contact_info}>
      <div className={styles.contact_box}>
        <EmailIcon />

        <a href={"mailto:vaibhavk2474@gmail.com"}>
          <span>vaibhavk2474@gmail.com</span>
        </a>
      </div>
      <div className={styles.contact_box}>
        <PhoneIphoneIcon />
        <span>+91 8094270183</span>
      </div>
      <div className={styles.contact_box}>
        <LocationOnIcon />
        <span>Sambhar Lake, jaipur(303604), Rajasthan, India</span>
      </div>
    </div>
  );
}

export default Resume_contact_info;
