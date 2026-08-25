import { Box, IconButton, SxProps, Theme, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import DiamondIcon from "@mui/icons-material/Diamond";
import Link from "next/link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

type ExperienceType = {
	designation: string;
	companyName: string;
	employmentType: string;
	mode?: string;
	aboutCompany?: string;
};
type ProjectType = {
	projectName: string;
	projectRelatedToCompany: string;
	projectLink?: string;
};

type CommonType = {
	id: string;
	imageURL?: string;
	imageAlt?: string;
	startDate?: string;
	endDate?: string;
	location?: string;
	points: string[];
	skills?: string[];
	showPointsTitle?: boolean;
};

export type Experience_Item_Details = CommonType &
	ExperienceType & {
		type: "Experience";
	};
export type Projects_Item_Details = CommonType &
	ProjectType & {
		type: "Projects";
	};
export type Item_Details = Experience_Item_Details | Projects_Item_Details;

function getSkillsString(skills: string[] | undefined, displayFullString: boolean): string {
	// return type React.js, Material-UI and +7 skills

	let str = (skills || []).join(" | ");

	if (!skills || displayFullString) {
		return str;
	}

	if (skills.length > 2) {
		const remaingSkilsTotal = skills.length - 2;
		str = remaingSkilsTotal > 1 ? skills.slice(0, 2).join(" | ") + `, and +${remaingSkilsTotal} skils` : skills.slice(0).join(" , ");
	} else {
		str = skills.slice(0, 2).join(" | ");
	}
	return str;
}

function InfoList({ dataList = [] }: { dataList: Item_Details[] }) {
	return (
		<Box>
			{dataList.map((item, index) => {
				return (
					<InfoListItem
						key={index + item.id}
						item={item}
						sx={{
							"&:not(:last-child)": {
								borderBottom: "1px solid #e5e5e5",
								marginBottom: "1rem",
								paddingBottom: "1rem",
							},
						}}
					/>
				);
			})}
		</Box>
	);
}

function InfoListItem({ sx = {}, item }: { sx: SxProps<Theme>; item: Item_Details }) {
	const [displayFullString, setDisplayFullString] = useState<boolean>(false);

	const isExperiece = item.type === "Experience";

	return (
		<Box
			display={"flex"}
			sx={{
				...sx,
			}}
		>
			{item.imageURL && (
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
					<Image src={item.imageURL} alt={item.imageAlt || "image"} fill sizes="50px" />
				</Box>
			)}
			<Box>
				<Typography component={"p"} variant="body1" fontWeight={isExperiece ? "400" : "600"}>
					{isExperiece ? item.designation : item.projectName}
					{!isExperiece && (
						<IconButton
							LinkComponent={Link}
							href={item.projectLink || ""}
							target="_blank"
							sx={{
								color: "currentColor",
								p: 0,
								marginLeft: "4px",
							}}
						>
							<OpenInNewIcon
								sx={{
									fontSize: "1rem",
								}}
							/>
						</IconButton>
					)}
				</Typography>
				<Typography variant="body2">
					{isExperiece ? item.companyName : item.projectRelatedToCompany}
					{isExperiece && item.employmentType ? "·" : null}
					{isExperiece ? item.employmentType : null}
				</Typography>
				<Typography variant="body2">
					{item.startDate} {!!item.endDate && "-"} {item.endDate}
				</Typography>
				<Typography variant="body2">
					{item.location}
					{isExperiece && !!item.mode ? "·" : null}
					{isExperiece ? item.mode : null}
				</Typography>
				<Typography
					variant="body2"
					fontWeight={600}
					lineHeight={1.4}
					sx={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						marginTop: "0.25rem",

						paddingLeft: "1.5rem",
						position: "relative",

						cursor: "pointer",

						"&:hover": {
							textDecoration: "underline",
						},
					}}
					onClick={() => {
						setDisplayFullString((prevValue) => !prevValue);
					}}
				>
					<DiamondIcon fontSize="small" sx={{ marginRight: "6px", position: "absolute", top: "2px", left: "0" }} />
					{getSkillsString(item.skills, displayFullString)}
				</Typography>

				{isExperiece && item.aboutCompany && (
					<Typography
						component={"p"}
						variant="body2"
						sx={{
							textAlign: "justify",
							"&::first-letter": {
								textTransform: "uppercase",
								fontSize: "20px",
							},
						}}
					>
						Prime Corporate Services is an enterprise business formation and advisory platform that simplifies entity setup, tax planning, and corporate compliance. The ecosystem utilizes
						custom customer portals, billing frameworks, and interactive assessment modules to streamline entity management and operational growth for entrepreneurs.
					</Typography>
				)}

				<Box
					component={"ul"}
					sx={{
						marginTop: "0.4rem",
						listStylePosition: "outside",

						"& li": {
							marginLeft: isExperiece ? "0.75rem" : "1rem",
						},
					}}
				>
					{item.showPointsTitle && (
						<Typography
							component={"p"}
							variant="body1"
							fontSize={"12px"}
							sx={
								{
									// "&::first-letter": {
									// 	textTransform: "uppercase",
									// 	fontSize: "20px",
									// },
								}
							}
						>
							Achievements/tasks:
						</Typography>
					)}
					{item.points.map((point, index) => {
						return (
							<Typography component={"li"} variant="body2" key={index} lineHeight={1.4} marginBottom={"4px"}>
								{point}
							</Typography>
						);
					})}
				</Box>
			</Box>
		</Box>
	);
}

export default InfoList;
