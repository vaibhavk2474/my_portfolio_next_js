// components/RichTextEditor.tsx
"use client";

import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import { RichTextEditorProps, RichTextEditorRef } from "./types";

const ALLOWED_MIME_TYPES = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png", "image/webp"];
const MAX_TOTAL_SIZE_MB = 300 / 1024; // Gmail standard threshold for simple uploads

export default React.forwardRef<RichTextEditorRef, RichTextEditorProps>(function RichTextEditor(
	{ value, onChange, className = "", onFileChange, filePaths, handleRemoveFilePath },
	ref,
): React.JSX.Element | null {
	const editor: Editor | null = useEditor({
		extensions: [
			StarterKit.configure({
				bulletList: {
					keepMarks: true,
				},
				hardBreak: {
					keepMarks: true,
				},
			}),
			Link.configure({
				openOnClick: false,
				HTMLAttributes: {
					style: "color: #1a73e8; text-decoration: underline; cursor:pointer",
				},
			}),
		],
		content: value,
		immediatelyRender: false, // Prevents SSR hydration mismatches in Next.js
		onUpdate: ({ editor: currentEditor }) => {
			onChange(currentEditor.getHTML());
		},
		editorProps: {
			attributes: {
				id: "message",
				class: "min-h-[160px] p-3 outline-none text-2xl text-gray-800 focus:ring-0",
			},
			handleKeyDown: (view, event) => {
				// If user presses Enter without Shift
				if (event.key === "Enter" && !event.shiftKey) {
					editor?.commands.setHardBreak(); // Inserts a literal <br/>
					return true; // Prevents default <p> splitting
				}
				return false;
			},
		},
	});

	const [attachments, setAttachments] = useState<File[]>([]);

	const inputFileRef = useRef<HTMLInputElement>(null);

	// Synchronize external value changes if updated programmatically (e.g., form resets)
	useEffect(() => {
		if (editor && value !== editor.getHTML()) {
			editor.commands.setContent(value);
		}
	}, [value, editor]);

	useImperativeHandle(ref, () => ({
		focus: () => {
			editor?.commands.focus("end"); // Focuses at the end of the text
		},
	}));

	if (!editor) {
		return null;
	}

	const setLink = (): void => {
		const previousUrl: string = editor.getAttributes("link").href || "";
		const url: string | null = window.prompt("URL", previousUrl);

		if (url === null) return;

		if (url.trim() === "") {
			editor.chain().focus().extendMarkRange("link").unsetLink().run();
			return;
		}

		editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
	};

	// Handle Local File Selection & Validation
	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) return;
		const selectedFiles = Array.from(e.target.files);

		// console.log("Selected files: ", selectedFiles);
		// return;

		// 1. Validate File Types
		const hasInvalidType = selectedFiles.some((file) => !ALLOWED_MIME_TYPES.includes(file.type));
		let response: {
			isValid: boolean;
			error?: string;
			selectedFiles?: File[];
		};

		if (hasInvalidType) {
			response = {
				isValid: false,
				error: "Only PDF, DOC, DOCX, PNG, JPG, and WEBP files are allowed.",
			};
			onFileChange(response);
			return;
		}

		// 2. Validate Cumulative Size
		const updatedList = [...attachments, ...selectedFiles];
		const totalBytes = updatedList.reduce((acc, file) => acc + file.size, 0);
		if (totalBytes > MAX_TOTAL_SIZE_MB * 1024 * 1024) {
			response = {
				isValid: false,
				error: `Total attachment size cannot exceed ${MAX_TOTAL_SIZE_MB}MB.`,
			};
			console.error("response: ", response);
			onFileChange(response);
			return;
		}

		response = {
			isValid: true,
			selectedFiles: [...updatedList],
		};

		setAttachments([...updatedList]);
		onFileChange(response);

		// Reset file input value so user can re-upload identical filename if needed
		if (inputFileRef.current) inputFileRef.current.value = "";
	};

	const handleRemoveAttachment = (indexToRemove: number) => {
		setAttachments(attachments.filter((_, idx) => idx !== indexToRemove));
	};

	return (
		<div className={`w-full border border-gray-300 rounded-lg overflow-hidden bg-white focus-within:border-gray-500 shadow-sm ${className}`}>
			{/* Action Toolbar */}
			<div className="flex items-center gap-1 p-2 bg-gray-50 border-b border-gray-200">
				<button
					type="button"
					onClick={() => editor.chain().focus().toggleBold().run()}
					className={`px-2.5 py-1 text-2xl font-semibold rounded ${editor.isActive("bold") ? "bg-gray-200 text-black" : "text-gray-600 hover:bg-gray-100"}`}
				>
					B
				</button>

				<button
					type="button"
					onClick={() => editor.chain().focus().toggleItalic().run()}
					className={`px-2.5 py-1 text-2xl italic rounded ${editor.isActive("italic") ? "bg-gray-200 text-black" : "text-gray-600 hover:bg-gray-100"}`}
				>
					I
				</button>

				<button
					type="button"
					onClick={() => editor.chain().focus().toggleBulletList().run()}
					className={`px-2.5 py-1 text-2xl rounded ${editor.isActive("bulletList") ? "bg-gray-200 text-black" : "text-gray-600 hover:bg-gray-100"}`}
				>
					Bullet List
				</button>

				<button type="button" onClick={setLink} className={`px-2.5 py-1 text-2xl rounded ${editor.isActive("link") ? "bg-gray-200 text-blue-600" : "text-gray-600 hover:bg-gray-100"}`}>
					Link
				</button>

				<div>
					<label
						htmlFor="file-upload"
						className={`px-2.5 py-1 text-2xl font-semibold rounded text-gray-600 hover:bg-gray-100 cursor-pointer`}
						style={{
							marginRight: 0,
							opacity: 1,
						}}
					>
						📎
					</label>
					<input type="file" ref={inputFileRef} onChange={handleFileChange} multiple accept=".pdf,.doc,.docx,image/*" style={{ display: "none" }} id="file-upload" />
				</div>
			</div>

			{/* Attached Files List */}
			{attachments.length > 0 && (
				<div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "10px" }}>
					{(attachments as File[]).map((file, index) => (
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
			{filePaths && filePaths.length > 0 && (
				<div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "10px" }}>
					{filePaths.map((filePath, index) => (
						<span
							key={filePath}
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
							{filePath}
							<button type="button" onClick={() => handleRemoveFilePath && handleRemoveFilePath(filePath)}>
								✕
							</button>
						</span>
					))}
				</div>
			)}

			{/* Editor Content Box */}
			<EditorContent editor={editor} />
		</div>
	);
});
