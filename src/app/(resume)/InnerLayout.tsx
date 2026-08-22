"use client";

import Header from "@/features/resume/components/Header";
import Menu from "@/features/resume/components/Menu";
import Profile from "@/features/resume/components/Profile";

const bg_color = "#001822";

function InnerLayout({ poppins, children }: { poppins: any; children: React.ReactNode }) {
	return (
		<body
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
				gap: "10px",
				padding: "1rem",
			}}
		>
			<Header />
			<Profile />
			{children}
			<Menu />
		</body>
	);
}

export default InnerLayout;
