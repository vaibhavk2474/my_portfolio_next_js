import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./style.module.css";

function Header() {
	return (
		<Box component={"header"} className={styles.box + " " + styles.header}>
			<Typography variant="h4">Vaibhav Kumar</Typography>
			<Typography variant="h3">Software Developer</Typography>
		</Box>
	);
}

export default Header;
