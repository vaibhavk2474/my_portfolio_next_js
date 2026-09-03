"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
	const router = useRouter();

	const handleLogout = async () => {
		try {
			await fetch("/api/auth/logout", { method: "POST" });
			router.push("/login");
			router.refresh();
		} catch (err) {
			console.log("err: ", err);
		}
	};

	return (
		<button type="button" onClick={handleLogout}>
			Logout
		</button>
	);
}
