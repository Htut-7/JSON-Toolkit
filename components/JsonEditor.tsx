"use client";

import { formatJSON } from "@/lib/json/formatJSON";
import React, { useState } from "react";

function JsonEditor() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const clickHandler=()=>{
     const result= formatJSON(input);

     if(!result){
      throw new Error("Something went wrong");
     }

     setOutput(result);
  }

    

  return (
    <div className="w-full space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          JSON Editor
        </h2>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Format and beautify JSON
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-3">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-200">
            Input JSON
          </label>

          <textarea
            placeholder='Place your JSON here... e.g., {"name":"John Doe","age":30}'
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="min-h-[280px] w-full resize-y rounded-xl border border-gray-200 bg-gray-50 p-4 font-mono text-sm leading-6 text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:placeholder:text-gray-600 dark:focus:border-blue-400"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-200">
            Expected Output
          </label>

          <textarea
            value={output}
            readOnly
            placeholder="Formatted JSON will appear here..."
            className="min-h-[280px] w-full resize-y rounded-xl border border-gray-200 bg-gray-100 p-4 font-mono text-sm leading-6 text-gray-700 outline-none placeholder:text-gray-400 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300 dark:placeholder:text-gray-600"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button
        onClick={clickHandler}
          type="button"
          className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md active:scale-95 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Format JSON
        </button>
      </div>
    </div>
  );
}

export default JsonEditor;
