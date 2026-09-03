import { Box, Typography, IconButton } from "@mui/material";
import styles from "./style.module.css";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import useScroll from "@/features/hooks/useScroll";
import { useEffect } from "react";

type IntroProps = {
	heading?: string;
	subHeading?: string;
	children?: React.ReactNode;
	currentPath?: string | undefined;
};
function SectionLayout({ heading, subHeading, currentPath, children }: IntroProps) {
	const [containerRef, isBottom, handleScrollButton, handleScrollTop, shouldDisplayScrollBtn] = useScroll(currentPath);

	useEffect(() => {
		handleScrollTop();
	}, [currentPath, handleScrollTop]);

	return (
		<Box component={"main"} className={styles.content}>
			{heading && (
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						alignItems: "start",
						padding: "1rem 1.5rem",

						borderBottom: "1px solid #e5e5e5",
					}}
				>
					<Typography component={"h2"} variant="h5" lineHeight={1.2}>
						{heading}
					</Typography>

					{subHeading && (
						<Typography component={"p"} variant="subtitle2" lineHeight={1} marginTop={"8px"}>
							{subHeading}
						</Typography>
					)}
				</Box>
			)}

			<Box
				ref={containerRef}
				sx={{
					padding: "1.5rem",

					width: "100%",
					height: heading ? "calc(100% - 84px)" : "100%",
					overflowY: "auto",

					scrollbarWidth: "none",
					"&::-webkit-scrollbar": {
						display: "none",
					},
				}}
			>
				{children}

				{shouldDisplayScrollBtn && (
					<IconButton
						title="scroll button"
						sx={{
							position: "absolute",
							top: "90%",
							left: "90%",
							bottom: 0,
							right: 0,
							zIndex: 9,
							color: "currentColor",

							"& svg": {
								transform: isBottom ? "rotate(180deg)" : "rotate(0deg)",
								transition: "transform 0.1s",
							},
						}}
						onClick={handleScrollButton}
					>
						<ExpandCircleDownIcon />
					</IconButton>
				)}
			</Box>
		</Box>
	);
}

export default SectionLayout;
