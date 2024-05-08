"use client";

import React, { useRef } from "react";
import styles from "./contactUs.module.css";
import CustomHeadingWithSubheading from "../UI/CustomHeadingWithSubheading";
import Image from "next/image";
import GenericPdfDownloader from "../UI/CustomHeadingWithSubheading/PdfConverter";

function ContactUs() {
  const ref = useRef(null);
  return (
    <section ref={ref} id="contact" className={styles.container}>
      <CustomHeadingWithSubheading headingText="Contact Me" subHeadingText="" />

      <div className={styles.contact_box}>
        <form
          className={styles.contact_form}
          onSubmit={(e) => e.preventDefault()}
        >
          <h3>Let&#39;s Connect</h3>
          <div className={styles.name_email_box}>
            <div className={styles.input_box}>
              <label htmlFor="name">Name:</label>
              <input id="name" type="text" />
            </div>
            <div className={styles.input_box}>
              <label htmlFor="email">Email:</label>
              <input id="email" type="email" />
            </div>
          </div>

          <div className={`${styles.input_box} ${styles.marginTop}`}>
            <label htmlFor="subject">Subject:</label>
            <input id="subject" type="text" />
          </div>
          <div className={`${styles.input_box} ${styles.marginTop}`}>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows={5} cols={50} />
          </div>
          <div className={`${styles.btn}`}>
            <button type="submit">Submit</button>
          </div>
        </form>
        <div className={styles.contact_info_box}>
          <div className={styles.info_box}>
            <span className={styles.logo}>
              <Image src={"/images/redux.svg"} width={50} height={50} alt="" />
            </span>
            <div className={styles.info}>
              <span className={styles.left}>Country:</span>
              <span className={styles.right}>India</span>
            </div>
            <div className={styles.info}>
              <span className={styles.left}>State:</span>
              <span className={styles.right}>Rajasthan</span>
            </div>
            <div className={styles.info}>
              <span className={styles.left}>City:</span>
              <span className={styles.right}>Sambhar Lake, Jaipur</span>
            </div>
          </div>
          <div className={styles.info_box}>
            <span className={styles.logo}>
              <Image src={"/images/redux.svg"} width={50} height={50} alt="" />
            </span>
            <div className={styles.info}>
              <span className={styles.left}>Github:</span>
              <span className={styles.right}>vaibhavk2474</span>
            </div>
            {/* <div className={styles.info}>
              <span className={styles.left}>Twitter:</span>
              <span className={styles.right}>twitter</span>
            </div> */}
            <div className={styles.info}>
              <span className={styles.left}>Linkdin:</span>
              <span className={styles.right}>
                vaibhav-k-6a90851a7
                {/* https://www.linkedin.com/in/vaibhav-k-6a90851a7/ */}
              </span>
            </div>
          </div>
          <div className={styles.info_box}>
            <span className={styles.logo}>
              <Image src={"/images/redux.svg"} width={50} height={50} alt="" />
            </span>
            <div className={styles.info}>
              <span className={styles.left}>Email:</span>
              <span className={styles.right}>vaibhavk2474@gmail.com</span>
            </div>
            <div className={styles.info}>
              <span className={styles.left}>Mobile:</span>
              <span className={styles.right}>8094270183</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mail_box}>
        <h3>Or please mail us directly to this email</h3>
        <h5 className={`colored`}>
          <a href="mailto:vaibhavk2474@gmail.com">vaibhavk2474@gmail.com</a>
        </h5>
      </div>

      <GenericPdfDownloader
        rootElementId={ref.current}
        downloadFileName={"something"}
      />
    </section>
  );
}

export default ContactUs;
