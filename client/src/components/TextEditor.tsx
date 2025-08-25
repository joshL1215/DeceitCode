import { useRef, useEffect } from 'react';
import * as monaco from 'monaco-editor';

interface TextEditorConfig {
    language: string;
    starterCode: string;
}

function TextEditor({ language, starterCode }: TextEditorConfig) {
    const containerRef = useRef<HTMLDivElement>(null);
    const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

    useEffect(() => {
        monaco.editor.defineTheme('custom-beige', {
            base: 'vs',
            inherit: true,
            rules: [],
            colors: {
                'editor.background': '#f0ededff',
                'editor.lineHighlightBackground': '#8c5e5e11',
                'editorLineNumber.foreground': '#000000ff',
            },
        });

        if (containerRef.current) {
            editorRef.current = monaco.editor.create(containerRef.current, {
                value: starterCode, // TODO: make this grab starter code based on the redux state for problem+language
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

