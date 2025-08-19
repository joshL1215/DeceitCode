import React, { useRef, useEffect } from 'react';
import * as monaco from 'monaco-editor';

interface TextEditorConfig {
    language: string;
    starterCode: string;
}

const TextEditor: React.FC<TextEditorConfig> = ({ language, starterCode }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

    useEffect(() => {

        monaco.editor.defineTheme('custom-beige', {
            base: 'vs',
            inherit: true,
            rules: [],
            colors: {
                'editor.background': '#DCE0D9',
                'editor.lineHighlightBackground': '#ecececff',
                'editorLineNumber.foreground': '#000000ff',
            },
        });

        if (containerRef.current) {
            editorRef.current = monaco.editor.create(containerRef.current, {
                value: starterCode,
                language: language,
                theme: 'custom-beige',
                automaticLayout: true,
                renderLineHighlight: 'line',
                minimap: { enabled: false },
            });
        }
        return () => {
            editorRef.current?.dispose();
        };
    }, [language, starterCode]);

    return (
        <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
    )
}

export default TextEditor;

