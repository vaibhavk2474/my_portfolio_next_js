"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./gmail.module.css";
import { CircularProgress } from "@mui/material";
import RichTextEditor from "./RichTextEditor";
import { RichTextEditorRef } from "./types";
import DOMPurify from "dompurify";
import { DOMPURIFY_CONFIG } from "@/lib/sanitizeConfig";

const END_POINT = process.env.NEXT_PUBLIC_API_END_POINT || "";

const ALLOWED_MIME_TYPES = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png", "image/webp"];
const MAX_TOTAL_SIZE_MB = 10; // Gmail standard threshold for simple uploads

export default function GmailBox() {
	const [fromEmail, setFromEmail] = useState("");
	const [toEmail, setToEmail] = useState("");
	const [message, setMessage] = useState("");
	const [subject, setSubject] = useState("");
	const [toEmailList, setToEmailList] = useState<{ id: number; toEmail: string }[]>([]);

	// File attachments state
	const [attachments, setAttachments] = useState<File[]>([]);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const [apiState, setApiState] = useState<{
		isLoading: boolean;
		error: Error | null;
		data: any;
	}>({
		isLoading: false,
		error: null,
		data: null,
	});

	const editorRef = useRef<RichTextEditorRef>(null);

	const handleAddEmail = () => {
		if (!toEmail) return;
		setToEmailList([{ id: Date.now(), toEmail }, ...toEmailList]);
		setToEmail("");
	};

	const handleDeleteEmail = (id: number) => {
		setToEmailList(toEmailList.filter((c) => c.id !== id));
	};

	// Handle Local File Selection & Validation
	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) return;
		const selectedFiles = Array.from(e.target.files);

		// 1. Validate File Types
		const hasInvalidType = selectedFiles.some((file) => !ALLOWED_MIME_TYPES.includes(file.type));
		if (hasInvalidType) {
			setApiState((prev) => ({
				...prev,
				error: new Error("Only PDF, DOC, DOCX, PNG, JPG, and WEBP files are allowed."),
			}));
			return;
		}

		// 2. Validate Cumulative Size
		const updatedList = [...attachments, ...selectedFiles];
		const totalBytes = updatedList.reduce((acc, file) => acc + file.size, 0);
		if (totalBytes > MAX_TOTAL_SIZE_MB * 1024 * 1024) {
			setApiState((prev) => ({
				...prev,
				error: new Error(`Total attachment size cannot exceed ${MAX_TOTAL_SIZE_MB}MB.`),
			}));
			return;
		}

		setAttachments(updatedList);
		// Reset file input value so user can re-upload identical filename if needed
		if (fileInputRef.current) fileInputRef.current.value = "";
	};

	const handleRemoveAttachment = (indexToRemove: number) => {
		setAttachments(attachments.filter((_, idx) => idx !== indexToRemove));
	};

	const handleSubmit = async () => {
		const recipients = toEmailList.map((c) => c.toEmail);
		if (toEmail && !recipients.includes(toEmail)) {
			recipients.push(toEmail);
		}

		if (!fromEmail || !subject || !message || recipients.length === 0) {
			setApiState((prev) => ({
				...prev,
				error: new Error("From, To (at least 1 recipient), Subject, and Message are required."),
			}));
			return;
		}

		setApiState({ isLoading: true, error: null, data: null });

		try {
			const sanitizedFrontendMessage = DOMPurify.sanitize(message, DOMPURIFY_CONFIG);

			// Build Multipart Form Data
			const formData = new FormData();
			formData.append("fromEmail", fromEmail);
			formData.append("subject", subject);
			formData.append("message", sanitizedFrontendMessage);
			formData.append("toEmailList", JSON.stringify(recipients));

			// Append all binary files
			attachments.forEach((file) => {
				formData.append("files", file);
			});

			const response = await fetch(`${END_POINT}/api/mail`, {
				method: "POST",
				// Note: Do NOT set Content-Type header manually; fetch sets multipart/form-data boundary automatically
				body: formData,
			});

			const res = await response.json();
			if (!response.ok) throw new Error(res.msg || "Failed to send email");

			setApiState({ isLoading: false, error: null, data: res });
			setAttachments([]);
		} catch (error: any) {
			setApiState({
				isLoading: false,
				error: error instanceof Error ? error : new Error(String(error)),
				data: null,
			});
		}
	};

	useEffect(() => {
		setFromEmail("vaibhavk2474@gmail.com");
		setSubject("Application for React Js Developer position Vaibhav Kumar");
		setMessage("Dear sir/ma'am,\n\nMy name is Vaibhav Kumar. Please find my attached documents.\n\nThank you.");
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.gmail_box}>
				<h3 className={styles.heading}>New Message</h3>

				{/* From Field */}
				<div className={`${styles.from_box} ${styles.input_box}`}>
					<label htmlFor="from">From</label>
					<input type="email" id="from" value={fromEmail} onChange={(e) => setFromEmail(e.target.value)} />
				</div>

				{/* To Field */}
				<div className={`${styles.to_box} ${styles.input_outer_box}`}>
					<div className={styles.input_inner_box}>
						<label htmlFor="to">To</label>
						<input type="email" id="to" value={toEmail} onChange={(e) => setToEmail(e.target.value)} />
						<button type="button" className="btn" onClick={handleAddEmail}>
							add
						</button>
					</div>

					{toEmailList.length > 0 && (
						<div className={styles.to_email_list}>
							{toEmailList.map((c) => (
								<span key={c.id} className={styles.email_name}>
									{c.toEmail}
									<button type="button" onClick={() => handleDeleteEmail(c.id)}>
										✕
									</button>
								</span>
							))}
						</div>
					)}
				</div>

				{/* Subject */}
				<div className={`${styles.subject_box} ${styles.input_box}`}>
					<label htmlFor="subject">Subject</label>
					<input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
				</div>

				{/* Message */}
				<div className={`${styles.message_box} ${styles.input_box}`}>
					<label htmlFor="message" onClick={() => editorRef?.current?.focus()}>
						Message
					</label>
					<RichTextEditor ref={editorRef} value={message} onChange={(str) => setMessage(str)} />
				</div>

				{/* Attachment Upload Controls */}
				<div style={{ padding: "10px 0", borderTop: "1px solid #eee", marginTop: "12px" }}>
					<input type="file" ref={fileInputRef} onChange={handleFileChange} multiple accept=".pdf,.doc,.docx,image/*" style={{ display: "none" }} id="file-upload" />
					<label
						htmlFor="file-upload"
						style={{
							display: "inline-flex",
							alignItems: "center",
							gap: "6px",
							cursor: "pointer",
							padding: "6px 12px",
							background: "#f1f3f4",
							borderRadius: "4px",
							fontSize: "13px",
							fontWeight: 500,
						}}
					>
						📎 Attach Files (PDF, DOCX, Image)
					</label>

					{/* Attached Files List */}
					{attachments.length > 0 && (
						<div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "10px" }}>
							{attachments.map((file, index) => (
								<span
									key={`${file.name}-${index}`}
									style={{
										background: "#e8f0fe",
										color: "#1a73e8",
										padding: "4px 8px",
										borderRadius: "16px",
										fontSize: "12px",
										display: "flex",
										alignItems: "center",
										gap: "6px",
									}}
								>
									{file.name} ({(file.size / 1024).toFixed(1)} KB)
									<button type="button" onClick={() => handleRemoveAttachment(index)} style={{ border: "none", background: "transparent", cursor: "pointer", fontWeight: "bold" }}>
										✕
									</button>
								</span>
							))}
						</div>
					)}
				</div>

				{/* Submit Box */}
				<div className={styles.submit_box}>
					<button className="btn" disabled={apiState.isLoading} onClick={handleSubmit}>
						Send {apiState.isLoading && <CircularProgress size={12} style={{ marginLeft: "8px" }} />}
					</button>
					{apiState.error && <p className={styles.error}>Error: {apiState.error.message}</p>}
				</div>
			</div>
		</div>
	);
}
