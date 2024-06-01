"use client";
import React from "react";
import styles from "./services.module.css";
import Image from "next/image";
import CustomHeadingWithSubheading from "../UI/CustomHeadingWithSubheading";
import { motion } from "framer-motion";

import SmartphoneIcon from "@mui/icons-material/Smartphone";
import WebIcon from "@mui/icons-material/Web";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import PaletteIcon from "@mui/icons-material/Palette";

const SERVICES_LIST = [
  {
    serviceName: "Web Development",
    serviceSummary: `Can build custom websites and admin panels from scratch or using Figma to ReactJS, Figma to NextJS, and PSD to HTML, etc. Develop responsive, visually appealing, and user-friendly interfaces.`,
    Icon: WebIcon,
  },
  {
    serviceName: "User Interface (UI) Design",
    serviceSummary: `Create attractive and intuitive user interfaces that enhance the user experience (UX) and align with the client's brand identity. Offer wireframing, prototyping, and UI mockup services.`,
    Icon: PaletteIcon,
  },
  {
    serviceName: "Responsive Web Design & Optimization",
    serviceSummary: `Adapt existing websites or create new ones to be responsive and mobile-friendly, ensuring they function well across various devices and screen sizes.`,

    Icon: SmartphoneIcon,
  },
  {
    serviceName: "Website Maintenance And Support",
    serviceSummary: `Provide ongoing maintenance and support services, including bug fixes, security updates, content updates, and regular backups.`,
    Icon: DeveloperModeIcon,
  },
];

function Services() {
  return (
    <motion.div
      className="animated-content"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div id="services" className={styles.container}>
        <CustomHeadingWithSubheading headingText="Services" subHeadingText="" />

        <div className={styles.list}>
          {SERVICES_LIST.map((cItem, index) => {
            const Icon = cItem.Icon;
            return (
              <motion.div key={index} whileHover={{ scale: 1.05 }}>
                <div className={styles.list_item}>
                  <div className={styles.inner_box}>
                    <div className={styles.logo}>
                      {/* <Image
                        src={"/images/redux.svg"}
                        alt=""
                        width={50}
                        height={50}
                      /> */}

                      {Icon && <Icon />}
                      {/* <LinkdinIcon /> */}
                    </div>
                    <div className={styles.service_name}>
                      <a href="https://redux-toolkit.js.org/" target="_blank">
                        {cItem.serviceName}
                      </a>
                    </div>
                    <p className={styles.service_summary}>
                      {cItem.serviceSummary}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default Services;
