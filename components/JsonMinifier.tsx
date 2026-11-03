"use client";

import React, { useState } from "react";

function JsonMinifier() {

    const [input,setInput]=useState("");
    const [output,setOutput]=useState("");

    return (
      <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:py-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            JSON Minifier
          </h2>
          <span className="mt-3 block text-sm text-gray-600 dark:text-gray-400 sm:text-base">
            Paste your JSON below to minify it by removing all white space.
          </span>
        </div>
  
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col">
            <label className="mb-3 text-sm font-semibold text-gray-800 dark:text-gray-200">
              JSON Input
            </label>
            <textarea
              placeholder='Place your JSON here... e.g., {"name":"John Doe","age":30}'
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className="min-h-[320px] w-full resize-y rounded-xl border border-gray-300 bg-white p-4 font-mono text-sm leading-6 text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-500"
            />
          </div>
  
          <div className="flex flex-col">
            <label className="mb-3 text-sm font-semibold text-gray-800 dark:text-gray-200">
              Expected Output
            </label>
            <textarea
              placeholder="Minify JSON will appear here..."
              readOnly
              value={output}
              className="min-h-[320px] w-full resize-y rounded-xl border border-gray-300 bg-gray-50 p-4 font-mono text-sm leading-6 text-gray-900 shadow-sm outline-none placeholder:text-gray-400 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 dark:placeholder:text-gray-500"
            />
          </div>
        </div>
  
        <div className="mt-7 flex justify-end">
          <button
            type="button"
            className="w-full rounded-xl bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-[0.98] dark:focus:ring-offset-gray-950 sm:w-auto"
          >
            Minify JSON
          </button>
        </div>
      </div>
    );
}

export default JsonMinifier;
