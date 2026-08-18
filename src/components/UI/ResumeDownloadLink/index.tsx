import React from "react";
import Link from "next/link";

import styles from "./ResumeDownloadLinkBtn.module.css";

function ResumeDownloadLinkBtn({ title, link, target }: { title?: string; link?: string; target?: string }) {
	return (
		<Link title="Download Resume" className={styles.download} href={link || ""} {...{ ...(target ? { target: target } : {}) }}>
			{title || "Resume"}
		</Link>
	);
}

export default ResumeDownloadLinkBtn;
