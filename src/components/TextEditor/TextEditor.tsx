"use client";

import { Editor } from "primereact/editor";
import React, { useState } from "react";

const TextEditor = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <div className="card text-gray-800 dark:text-gray-300">
        <Editor
          className="text-gray-800 dark:text-gray-300"
          value={text}
          onTextChange={(e) => setText(e.htmlValue || "")}
          style={{ height: "320px" }}
        />
      </div>
    </div>
  );
};

export default TextEditor;
