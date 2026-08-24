import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import styles from "./style.module.css";
import { MENU_LINKS } from "@/constants";
import Link from "next/link";
import Switch from "../../components/Switch";

function Menu() {
	return (
		<Box component={"aside"} className={styles.container + " " + styles.menu}>
			<nav aria-label="nav menu">
				<List>
					{MENU_LINKS.map((cLink) => {
						return (
							<ListItem key={cLink.name} disablePadding>
								<ListItemButton LinkComponent={Link} href={`/resume?path=${cLink.link.slice(1)}`}>
									{/* <ListItemIcon>
										<InboxIcon />
									</ListItemIcon> */}
									<ListItemText primary={cLink.name} />
								</ListItemButton>
							</ListItem>
						);
					})}
				</List>

				<Switch />

				<ListItem
					component={"div"}
					sx={{
						padding: 1,
					}}
				>
					<ListItemButton
						LinkComponent={Link}
						href={""}
						className={styles.resume_download_btn}
						sx={{
							background: "linear-gradient(273.24deg, #003f58 0%, #0294cf 100%)",
							color: "#fff",
							borderRadius: "8px",

							"&.MuiButtonBase-root.MuiListItemButton-root.Mui-focusVisible": {
								// fontSize: "100%",
								background: "#0294cf",
							},
						}}
					>
						<ListItemText primary={"Resume Download"} />
					</ListItemButton>
				</ListItem>
			</nav>
		</Box>
	);
}

export default Menu;
