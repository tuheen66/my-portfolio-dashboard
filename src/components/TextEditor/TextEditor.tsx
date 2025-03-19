"use client";
import { Editor } from "primereact/editor";
import React, { useState } from "react";

const TextEditor = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <h2>Text editor</h2>
   
      <div className="card">
        <Editor
          value={text}
          onTextChange={(e) => setText(e.htmlValue || "")}
          style={{ height: "320px" }}
        />
      </div>
    
    </div>
  );
};

export default TextEditor;
