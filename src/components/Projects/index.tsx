"use client";
import React from "react";
import styles from "./projects.module.css";
import CustomHeadingWithSubheading from "../UI/CustomHeadingWithSubheading";
import EyeIcon from "@/icons/EyeIcon";
import { motion } from "framer-motion";

const PROJECTS_LIST = [
  {
    projectName: "Cardano Racers",
    projectSummary: `Cardanoracers is a cardano blockchain platform where user can buy
    nfts and partcipate in race using them and can win ADA in wallet
    worked on the whole project both Admin and User side from
    scratch, managing nfts collections, wallet and integrate blockchain
    APIs and nodejs Backend APIs, individually`,
    projectTechList: ["React", "NextJs", "Redux", "Material UI"],
    projectViewLink: "",
  },
  {
    projectName: "Likes.io",
    projectSummary: `Likes.io is a social media marketing platform that helps users grow
    their presence on various social media platforms mainly instagram
    Worked on the whole project from scratch, individually`,
    projectTechList: ["React", "NextJs", "Redux", "JavaScript", "Material UI"],
    projectViewLink: "",
  },
  {
    projectName: "Enverx",
    projectSummary: `A web3 web application where project developers can add details
    of their projects and investors can invest in them
    Worked on both admin and user side`,
    projectTechList: ["React", "NextJs", "Redux Saga", "Bootstrap"],
    projectViewLink: "",
  },
];

function Projects() {
  return (
    <motion.div
      className="animated-content"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <section id="projects" className={styles.container}>
        <CustomHeadingWithSubheading
          headingText="Projects"
          subHeadingText="Things I've built so far"
        />

        <div className={styles.list}>
          {PROJECTS_LIST.map((cItem, index) => (
            <motion.div whileHover={{ scale: 1.05 }} key={index}>
              <div className={styles.list_item}>
                <div className={styles.inner_box}>
                  <div className={styles.project_name}>
                    <a href="https://redux-toolkit.js.org/" target="_blank">
                      {cItem.projectName}
                    </a>
                  </div>
                  <p className={styles.project_summary}>
                    {cItem.projectSummary}
                  </p>
                  <div className={styles.project_tech_details}>
                    {cItem.projectTechList.map((cItem, index) => (
                      <span key={index} className={styles.tech_box}>
                        {cItem}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://redux-toolkit.js.org/"
                    target="_blank"
                    className={styles.project_view}
                  >
                    <EyeIcon />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

export default Projects;
