"use client";

import React from "react";
import styles from "./techStack.module.css";
import Image from "next/image";
import CustomHeadingWithSubheading from "../UI/CustomHeadingWithSubheading";
import { motion } from "framer-motion";

const tech_stack_list = [
  {
    name: "React",
    img: "/logos_react.png",
  },
  {
    name: "JavaScript",
    img: "/js_logo.svg",
  },
  {
    name: "Redux",
    img: "/redux.svg",
  },
  {
    name: "NextJs",
    img: "/NextJs.svg",
  },
  {
    name: "TypeScript",
    img: "/typescript.svg",
  },
  {
    name: "CSS3",
    img: "/css_logo.svg",
  },

  {
    name: "HTML5",
    img: "/html_logo.svg",
  },

  {
    name: "Bootstrap",
    img: "/logos_bootstrap.svg",
  },

  {
    name: "SASS",
    img: "/logos_sass.svg",
  },
  {
    name: "Tailwind",
    img: "/tailwindcss.png",
  },

  {
    name: "Github",
    img: "/github.svg",
  },

  {
    name: "VS Code",
    img: "/vscode.svg",
  },
];

function TechStack() {
  return (
    <motion.div
      className="animated-content"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <section className={styles.tech}>
        <CustomHeadingWithSubheading
          headingText="My Tech Stack"
          subHeadingText="Technologies I’ve been working with recently"
        />
        <div className={styles.tech_list}>
          {tech_stack_list.map((cItem, index) => (
            <div key={index} className={styles.tech_item}>
              <div className={styles.icon}>
                <Image
                  src={`/images${cItem.img}`}
                  width={50}
                  height={50}
                  alt="react"
                />
              </div>
              <div className={styles.tech_name}>{cItem.name}</div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

export default TechStack;
