"use client";

import Header from "@/features/resume/UI/Header";
import Menu from "@/features/resume/UI/Menu";
import Profile from "@/features/resume/UI/Profile";
import { Box } from "@mui/material";

const bg_color = "#001822";

function InnerLayout({ poppins, children }: { poppins: any; children: React.ReactNode }) {
	return (
		<Box
			component={"body"}
			className={poppins.className + " " + ``}
			style={{
				background: bg_color,
				color: "#fff",
				display: "grid",
				gridTemplateColumns: "minmax(250px, 250px) minmax(0, 1fr) minmax(200px, 200px)",
				gridTemplateAreas: `"profile header header" "profile content menu"`,
				gridTemplateRows: "110px minmax(0, 1fr)",
				height: "100vh",
				width: "100%",
				maxWidth: "1200px",
				margin: "auto",
				gap: "10px",
				padding: "1rem",
			}}
		>
			<Header />
			<Profile />
			{children}
			<Menu />
		</Box>
	);
}

export default InnerLayout;
