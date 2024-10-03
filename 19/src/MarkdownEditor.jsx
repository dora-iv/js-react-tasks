import React from 'react';
import Editor from '@toast-ui/editor';

// BEGIN (write your solution here)
const MarkdownEditor = ({ onContentChange }) => {
    const editorRef = React.useRef(null);

    React.useEffect(() => {
        let editorInstance = new Editor({
            el: editorRef.current,
            hideModeSwitch: true,
            initialEditType: 'markdown',
            previewStyle: 'vertical',
            height: '500px',
        });

        editorInstance.addHook('change', () => {
            const content = editorInstance.getMarkdown();
            onContentChange(content);
        });
    }, [onContentChange]);

    return <div ref={editorRef} />;
}

export default MarkdownEditor;
// END
