export interface RichTextEditorProps {
    value: string;
    onChange: (html: string) => void;
    placeholder?: string;
    className?: string;
}

export interface RichTextEditorRef {
    focus: () => void;
}
