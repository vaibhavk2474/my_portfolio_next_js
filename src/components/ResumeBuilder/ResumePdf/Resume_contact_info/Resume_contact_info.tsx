import React from "react";
import styles from "./Resume_contact_info.module.css";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import { useAppSelector } from "@/redux/redux-hooks";

function Resume_contact_info() {
  const info = useAppSelector((state) => state.contactReducer);

  const email = info.email || "vaibhavk2474@gmail.com";
  const mobileNo = info.mobileNo || "8094270183";
  const address =
    info.address || "Sambhar Lake, jaipur(303604), Rajasthan, India";

  return (
    <div className={styles.contact_info}>
      <div className={styles.contact_box}>
        <EmailIcon />

        <a href={`mailto:${email}`}>
          <span>{email}</span>
        </a>
      </div>
      <div className={styles.contact_box}>
        <PhoneIphoneIcon />
        <span>+91 {mobileNo}</span>
      </div>
      <div className={styles.contact_box}>
        <LocationOnIcon />
        <span>{address}</span>
      </div>
    </div>
  );
}

export default Resume_contact_info;
