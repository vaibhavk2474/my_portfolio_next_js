import type { Ref } from "react";

export type HandleFileChnageType = {
    isValid: boolean,
    selectedFiles?: File[],
    error?: string
}
export interface RichTextEditorProps {
    value: string;
    onChange: (html: string) => void;
    placeholder?: string;
    className?: string;
    onFileChange: (props: HandleFileChnageType) => void;
    filePaths?: string[];
    handleRemoveFilePath?: (filePath: string) => void;
}

export interface RichTextEditorRef {
    focus: () => void;
}

export interface TemplateType {
    id: string;
    subject: string;
    body: string;
    name: string;
    filePaths?: string[];
}
