import React from "react";
import Link from "next/link";

import styles from "./ResumeDownloadLinkBtn.module.css";
// import DownloadIcon from "@/icons/DownloadIcon";

function ResumeDownloadLinkBtn() {
	return (
		<Link title="Download Resume" className={styles.download} href="/pdfs/VAIBHAV-KUMAR-FlowCV-Resume-2025.pdf" target="_blank">
			Resume
		</Link>
	);
}

export default ResumeDownloadLinkBtn;
