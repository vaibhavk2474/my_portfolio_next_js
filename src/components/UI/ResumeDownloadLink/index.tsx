import React from "react";
import Link from "next/link";

import styles from "./ResumeDownloadLinkBtn.module.css";
import DownloadIcon from "@/icons/DownloadIcon";

function ResumeDownloadLinkBtn() {
  return (
    <Link
      className={styles.download}
      href="/pdfs/Vaibhav-kumar-resume.pdf"
      target="_blank"
      download
    >
      Resume <DownloadIcon />
    </Link>
  );
}

export default ResumeDownloadLinkBtn;
