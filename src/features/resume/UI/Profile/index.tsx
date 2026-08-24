import { Box, Button, Divider, Typography } from "@mui/material";
import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function Profile() {
	return (
		<Box component={"aside"} className={styles.container + " " + styles.profile}>
			<Box>
				<Box className={styles.profile_imgs_container}>
					<Image src={"/images/profile-pic_bg.jpg"} alt="profile background image" fill sizes="(max-width: 768px) 250px, 400px" />

					<div className={styles.profile_img_box}>
						<Image src={"/images/image_profile.jfif"} alt="profile image" fill sizes="(max-width: 768px) 250px, 400px" />
					</div>
				</Box>
				<Box sx={{}}>
					<Typography
						sx={{
							fontSize: "1.5rem",
						}}
					>
						Vaibhav Kumar
					</Typography>
					<Typography
						sx={{
							fontSize: "0.75rem",
						}}
					>
						Frontend Software Engineer | React.js | Next.js | JavaScript | TypeScript | Redux | AWS | Salesforce | Redux-toolkit | 4.5+ Years
					</Typography>

					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							gap: "8px",
							marginTop: "8px",
						}}
					>
						<Image
							src={
								"https://media.licdn.com/dms/image/v2/C4D0BAQFUvq-qbL6RsQ/company-logo_100_100/company-logo_100_100/0/1650564252303?e=1788998400&v=beta&t=ItW94OCFqfgw3NWJcZcHp5pZYQzW6tL-XZVw8hlvim4"
							}
							alt="company logo"
							width={24}
							height={24}
							className={styles.companyLogo}
						/>
						<Typography
							sx={{
								fontSize: "0.875rem",
								fontWeight: "600",
								lineHeight: "normal",
							}}
						>
							Qudasoft
						</Typography>
					</Box>
				</Box>
			</Box>

			<Divider
				sx={{
					borderColor: "#fff",
					margin: "1rem auto",
				}}
			/>

			<Skills />
		</Box>
	);
}

const CONSTANT_SKILLS = [
	{
		category: "Frontend",
		skills: "React.js, Next.js, JavaScript, TypeScript, HTML5, CSS3, SCSS, Material UI, Tailwind CSS, Redux, Redux Toolkit, Context API, Redux Saga",
	},
	{
		category: "Backend",
		skills: "Node.js, Express, REST API, MongoDB",
	},
	{
		category: "Cloud & DevOps:",
		skills: "Amplify, Cognito, Lambda, API Gateway, S3, Docker",
	},
];
function Skills() {
	const params = useSearchParams();
	const currentPath = params.get("path");
	return (
		<Box>
			{CONSTANT_SKILLS.map((skill, index) => {
				return (
					<Box key={skill.category} marginTop={index ? "8px" : ""}>
						<Typography
							sx={{
								fontSize: "0.875rem",
								lineHeight: 1.5,
								fontWeight: 600,
							}}
						>
							{skill.category}:
						</Typography>
						<Typography
							sx={{
								fontSize: "0.85rem",
								lineHeight: 1.4,
								textAlign: "justify",
							}}
						>
							{skill.skills}
						</Typography>
					</Box>
				);
			})}

			{/* <Box display={"flex"} flexDirection={"row"} justifyContent={"flex-end"}> */}
			{currentPath !== "tech-stack" && (
				<Button
					LinkComponent={Link}
					href="/resume?path=tech-stack"
					type="button"
					sx={{
						display: "block",
						width: "max-content",
						marginLeft: "auto",
						/* float: right, */
						/* clear: both, */

						lineHeight: 1.4,
						fontSize: "0.875rem",
						textTransform: "capitalize",
					}}
				>
					More...
				</Button>
			)}
			{/* </Box> */}
		</Box>
	);
}

export default Profile;
