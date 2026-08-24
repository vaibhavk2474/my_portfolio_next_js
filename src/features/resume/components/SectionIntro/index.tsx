import { Box, Typography } from "@mui/material";
import React from "react";

type IntroProps = {
	heading: string;
	subHeading: string;
	children: React.ReactNode;
};
function SectionIntro({ heading, subHeading, children }: IntroProps) {
	return (
		<Box>
			<Typography component={"h2"} variant="h4">
				{heading}
			</Typography>

			<Typography component={"p"} variant="subtitle1" marginBottom={0.5}>
				{subHeading}
			</Typography>

			{children}
		</Box>
	);
}

export default SectionIntro;
