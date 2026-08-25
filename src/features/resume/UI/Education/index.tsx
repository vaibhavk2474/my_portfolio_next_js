import React from "react";
import { CONSTANTS_EDUCATION, Education_Details } from "./constants";
import { Box, SxProps, Theme, Typography } from "@mui/material";
import Image from "next/image";

function Education() {
	return (
		<Box component={"section"}>
			{(CONSTANTS_EDUCATION as Education_Details[]).map((org, index) => {
				return (
					<EducationDetails
						key={index + org.name}
						org={org}
						sx={{
							"&:not(:last-child), &:not(:first-child)": {
								paddingTop: "1rem",
								paddingBottom: "1rem",
								// borderBottom: "1px solid #e5e5e5",
							},
							// "&:first-child": {
							// 	paddingTop: 0,
							// },
							// "&:last-child": {
							// 	// paddingBottom: 0,
							// 	borderBottom: "unset",
							// },
						}}
					/>
				);
			})}
		</Box>
	);
}

function EducationDetails({ sx = {}, org }: { sx: SxProps<Theme>; org: Education_Details }) {
	return (
		<Box
			display={"flex"}
			sx={{
				...sx,

				position: "relative",
				paddingLeft: "2rem",
				marginLeft: "6rem",
			}}
		>
			<Box
				sx={{
					borderRadius: "10px",
					height: "50px",
					width: "50px",
					minHeight: "50px",
					minWidth: "50px",
					overflow: "clip",
					position: "relative",

					marginRight: "0.75rem",
					marginTop: "4px",
				}}
			>
				<Image src={org.logo} alt="Qudasoft Image" fill sizes="50px" />
			</Box>
			<Box>
				<Typography component={"p"} variant="body1">
					{org.name}
				</Typography>
				<Typography variant="body2">{org.degree}</Typography>
				<Typography variant="body2">
					{org.startDate} - {org.endDate}
				</Typography>
				<Typography variant="body2">{org.location}</Typography>
			</Box>

			{/* Lines */}

			<Box
				sx={{
					borderLeft: "1px solid #FFF",
					position: "absolute",
					top: 0,
					left: 0,
					height: "100%",
				}}
			>
				<Box
					sx={{
						height: "1.5rem",
						width: "1.5rem",
						borderRadius: "50%",

						position: "absolute",
						top: "2rem",
						left: "-0.825rem",
						background: "#fff",
					}}
				></Box>

				<Box
					sx={{
						position: "absolute",
						top: "2.25rem",
						left: "-6rem",
					}}
				>
					<Typography component={"p"} variant="body2">
						<span>{org.startDate}</span> - <span>{org.endDate}</span>
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}
export default Education;
