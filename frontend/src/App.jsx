// App.js
import React, { useState } from "react";
import CodeEditor from "./CodeEditor";
import "./App.css";

function App() {
  const [code, setCode] = useState("");

  const handleRun = () => {
    try {
    } catch (error) {
      console.log("Error while running code", error.message);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-gray-800 p-4 flex justify-center items-center">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleRun}
        >
          Run
        </button>
      </div>
      <div className="flex-grow">
        <CodeEditor code={code} setCode={setCode} />
      </div>
    </div>
  );
}

export default App;
