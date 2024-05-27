import React from "react";
import styles from "./Work_Experience_details.module.css";

function Work_Experience_details() {
  return (
    <div className={styles.common_details_box}>
      <h3 className={styles.title_heading}>WORK EXPERIENCE</h3>
      <div className={styles.work_experience_list}>
        <div className={styles.work_experience_list_item}>
          <div className={styles.post}>React Developer</div>
          <div className={styles.company}>
            <a
              href="https://html2canvas.hertzen.com/getting-started"
              target="_blank"
            >
              Incipient Infotect
            </a>{" "}
          </div>
          <div className={styles.place_date_box}>
            <div className={styles.date}>07/2023- present</div>
            <div className={styles.location}>Ahmedabad, Gujrat</div>
          </div>
          <div className={styles.about_company}>
            Incipient Infotech enables intelligent solutions and in the way of
            development and launch of a website (or software){" "}
          </div>
          <div className={styles.work_details_box}>
            <h3>Achievements/Tasks </h3>
            <ul className={styles.work_details}>
              <li>
                Worked on the Cardano blockchain project understanding the
                project requirements and preparing a plan to deliver the project
                on time with the best quality{" "}
              </li>
              <li>
                Designed and worked on the admin and user interfaces and
                integration of APIs{" "}
              </li>
            </ul>
          </div>
        </div>{" "}
        <div className={styles.work_experience_list_item}>
          <div className={styles.post}>React Developer</div>
          <div className={styles.company}>Solulab</div>
          <div className={styles.place_date_box}>
            <div className={styles.date}>10/2021 - 10/2022,</div>
            <div className={styles.location}>Ahmedabad, Gujrat</div>
          </div>
          <div className={styles.about_company}>
            SoluLab | Blockchain Development Company
          </div>
          <div className={styles.work_details_box}>
            <h3>Achievements/Tasks </h3>
            <ul className={styles.work_details}>
              <li>
                Worked on interesting blockchain projects UI design React part
                based on Figma and API integration on tight timeline
              </li>
              <li>Worked on one project on both the admin and user sides</li>
            </ul>
          </div>
        </div>{" "}
        <div className={styles.work_experience_list_item}>
          <div className={styles.post}>React Developer</div>
          <div className={styles.company}>Pepcoding</div>
          <div className={styles.place_date_box}>
            <div className={styles.date}>02/2021 - 11/2021,</div>
            <div className={styles.location}>Noida, Uttar Pradesh 201301</div>
          </div>
          <div className={styles.about_company}>
            Pepcoding Education Private Limited
          </div>
          <div className={styles.work_details_box}>
            <h3>Achievements/Tasks </h3>
            <ul className={styles.work_details}>
              <li>
                Developed the skills in interesting web technologies with
                theoretical and practical knowledge.
              </li>
              <li>
                Designed and worked on the admin and user interfaces and
                integration of APIs{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work_Experience_details;
