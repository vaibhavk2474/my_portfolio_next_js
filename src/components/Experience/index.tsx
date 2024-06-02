"use client";

import React from "react";
import styles from "./experience.module.css";
import OfficeIcon from "@/icons/OfficeIcon";
import LocationIcon from "@/icons/LocationIcon";
import CalendraIcon from "@/icons/CalendraIcon";
import { motion } from "framer-motion";
import CustomHeadingWithSubheading from "../UI/CustomHeadingWithSubheading";

const EDUCATION_LIST = [
  {
    title: "Computer Science & Engineering",
    type: "fulltime",
    instituteName: "Centeral University of Haryana",
    startDate: "july 2017",
    endDate: "july 2021",
    location: "Haryana",
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    type: "fulltime",
    instituteName: "Govt Darbar Sen. Sec. School",
    startDate: "july 2015",
    endDate: "july 2016",
    location: "Sambhar Lake, Jaipur",
  },

  {
    title: "Secondary Education (RBSE)",
    type: "fulltime",
    instituteName: "Govt Darbar Sen. Sec. School",
    startDate: "july 2013",
    endDate: "july 2014",
    location: "Sambhar Lake, Jaipur",
  },
];

const WORK_EXPERIENCE_LIST = [
  {
    title: "ReactJs Developer",
    type: "fulltime",
    instituteName: "Incipient Infotech",
    startDate: "jan 2023",
    endDate: "april 2024",
    location: "Ahmedabad, Gujrat",
  },

  {
    title: "ReactJs Developer",
    type: "fulltime",
    instituteName: "Solulab",
    startDate: "oct 2021",
    endDate: "oct 2022",
    location: "Ahmedabad, Gujrat",
  },

  {
    title: "Web Developer Intern",
    type: "fulltime",
    instituteName: "Pepcoding",
    startDate: "feb 2021",
    endDate: "nov 2021",
    location: "Delhi",
  },
];

function Experience() {
  return (
    <motion.div
      className="animated-content"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <section id="experience" className={styles.container}>
        <CustomHeadingWithSubheading
          headingText="Education & Experience"
          subHeadingText="Here is my education and work experience details"
        />

        <div className={styles.contentBox}>
          <div className={styles.educationDetails}>
            <h3 className={styles.heading}>Education</h3>

            <div className={styles.detailsList}>
              {EDUCATION_LIST.map((cItem, index) => (
                <div key={index} className={styles.detailsListItem}>
                  <div className={styles.part_1}>
                    <div className={styles.t1}>{cItem.title}</div>
                    <div className={`${styles.t2} ${styles.tag}`}>
                      {cItem.type}
                    </div>
                  </div>
                  <div className={styles.part_2}>
                    <div className={styles.t1}>
                      <div className={styles.institute_name}>
                        <OfficeIcon />
                        {cItem.instituteName}
                      </div>
                      <div className={styles.location_name}>
                        <LocationIcon /> {cItem.location}
                      </div>
                    </div>
                    <div className={styles.t2}>
                      <CalendraIcon /> {cItem.startDate} - {cItem.endDate}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.workExperienceDetails}>
            <h3 className={styles.heading}>Work Experience</h3>
            <div className={styles.detailsList}>
              {WORK_EXPERIENCE_LIST.map((cItem, index) => (
                <div key={index} className={styles.detailsListItem}>
                  <div className={styles.part_1}>
                    <div className={styles.t1}>{cItem.title}</div>
                    <div className={`${styles.t2} ${styles.tag}`}>
                      {cItem.type}
                    </div>
                  </div>
                  <div className={styles.part_2}>
                    <div className={styles.t1}>
                      <div className={styles.institute_name}>
                        <OfficeIcon />
                        {cItem.instituteName}
                      </div>
                      <div className={styles.location_name}>
                        <LocationIcon /> {cItem.location}
                      </div>
                    </div>
                    <div className={styles.t2}>
                      <CalendraIcon /> {cItem.startDate} - {cItem.endDate}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Experience;
