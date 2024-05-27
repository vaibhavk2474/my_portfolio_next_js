import React from "react";
import styles from "./ProjectsSection.module.css";

function ProjectsSection() {
  return (
    <div className={styles.projects_box}>
      <h3 className={styles.title_heading}>projects</h3>
      <div className={styles.projects_list}>
        <div className={styles.project_list_item}>
          <h3 className={styles.project_heading}>
            CARDANORACERS(ReactJs, NEXTJS, Material UI)
          </h3>
          <ul className={styles.project_details}>
            <li>
              Cardanoracers is a cardano blockchain platform where user can buy
              nfts and partcipate in race using them and can win ADA in wallet
            </li>
            <li>
              worked on the whole project both Admin and User side from scratch,
              managing nfts collections, wallet and integrate blockchain APIs
              and nodejs Backend APIs, individually LIKES.IO(NextJs, Redux,
              Material UI)
            </li>
          </ul>
        </div>{" "}
        <div className={styles.project_list_item}>
          <h3 className={styles.project_heading}>
            LIKES.IO(NextJs, Redux, Material UI)
          </h3>
          <ul className={styles.project_details}>
            <li>
              Likes.io is a social media marketing platform that helps users
              grow their presence on various social media platforms mainly
              instagram
            </li>
            <li>Worked on the whole project from scratch, individually</li>
          </ul>
        </div>{" "}
        <div className={styles.project_list_item}>
          <h3 className={styles.project_heading}>
            ENVERX(ReactJs, Redux saga, Bootstrap)
          </h3>
          <ul className={styles.project_details}>
            <li>
              A web3 web application where project developers can add details of
              their projects and investors can invest in them
            </li>
            <li>Worked on both admin and user side</li>
          </ul>
        </div>{" "}
        <div className={styles.project_list_item}>
          <h3 className={styles.project_heading}>
            Movies WebApp(ReactJs,SASS, JWT Auth)
          </h3>
          <ul className={styles.project_details}>
            <li>
              React project, which supports login via a backend rest API and
              then lists movies returned via an authenticated API.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
