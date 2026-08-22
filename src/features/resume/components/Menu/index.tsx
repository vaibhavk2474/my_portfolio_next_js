import { Box } from "@mui/material";
import React from "react";
import styles from "./style.module.css";

function Menu() {
	return (
		<Box component={"aside"} className={styles.container + " " + styles.menu}>
			Menu
		</Box>
	);
}

export default Menu;
