"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const redirectTo = searchParams.get("from") || "/mail";

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const [showPassword, setShowPassword] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");
		setLoading(true);

		try {
			const res = await fetch("/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }),
			});

			if (!res.ok) {
				const data = await res.json();
				throw new Error(data.error || "Login failed");
			}

			router.push(redirectTo);
			router.refresh();
		} catch (err: any) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div style={{ maxWidth: "360px", margin: "80px auto", padding: "20px" }}>
			<h2>Sign In to Access Mail</h2>
			{error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}

			<form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
				<label>
					Email
					<input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "100%", padding: "8px", marginTop: "4px" }} />
				</label>

				<label>
					Password
					<input
						type={showPassword ? "text" : "password"}
						required
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						style={{ width: "100%", padding: "8px", marginTop: "4px" }}
					/>
				</label>

				<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
					<input type="checkbox" id="showPassword" checked={showPassword} onChange={(e) => setShowPassword(e.target.checked)} />
					<label htmlFor="showPassword">Show Password</label>
				</div>

				<button type="submit" disabled={loading} style={{ padding: "10px", marginTop: "10px", width: "100%", backgroundColor: "#0070f3", color: "#fff", border: "none", cursor: "pointer" }}>
					{loading ? "Signing in..." : "Login"}
				</button>
			</form>
		</div>
	);
}
