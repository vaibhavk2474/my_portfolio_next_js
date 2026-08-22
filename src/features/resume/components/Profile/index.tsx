import { Box, Typography } from "@mui/material";
import styles from "./style.module.css";
import Image from "next/image";

function Profile() {
	return (
		<Box component={"aside"} className={styles.container + " " + styles.profile}>
			<Box>
				<Image className={styles.profile_img} src={"/images/profile-pic_bg.jpg"} alt="profile-pic" height={400} width={400} />

				<div className={styles.profile_img_box}>
					<Image className={styles.profile_img} src={"/images/image_profile.jfif"} alt="profile-pic" height={400} width={400} />
				</div>
			</Box>
			<Box>
				<Typography>Vaibhav Kumar</Typography>
				<Typography>React Developer</Typography>
				<Typography>Qudasoft</Typography>
			</Box>
		</Box>
	);
}

export default Profile;
