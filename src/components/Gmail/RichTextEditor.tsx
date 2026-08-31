// components/RichTextEditor.tsx
"use client";

import React, { useEffect, useImperativeHandle } from "react";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import { RichTextEditorProps, RichTextEditorRef } from "./types";

export default React.forwardRef<RichTextEditorRef, RichTextEditorProps>(function RichTextEditor({ value, onChange, className = "" }: RichTextEditorProps, ref): React.JSX.Element | null {
	const editor: Editor | null = useEditor({
		extensions: [
			StarterKit,
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
		},
	});

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
			</div>

			{/* Editor Content Box */}
			<EditorContent editor={editor} />
		</div>
	);
});
