// CodeEditor.js
import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";
import "@uiw/react-codemirror/dist/codemirror.js";

const CodeEditor = ({ code, setCode }) => {
  return (
    <CodeMirror
      value={code}
      height="100%"
      extensions={[cpp()]}
      onChange={(value) => setCode(value)}
      className="h-full"
    />
  );
};

export default CodeEditor;
