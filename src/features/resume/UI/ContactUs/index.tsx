import React from "react";
import styles from "./contactUs.module.css";

function ContactUS() {
	return (
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<div className={styles.mail_box}>
				<h3>Please send mail directly to this email</h3>
				<h5 className={`colored`}>
					<a href="mailto:vaibhavk2474@gmail.com">vaibhavk2474@gmail.com</a>
				</h5>
			</div>
		</div>
	);
}

export default ContactUS;
