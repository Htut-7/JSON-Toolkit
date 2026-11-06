"use client";

import React, { useState } from "react";

function JsonCompare() {
  const [inputA, setInputA] = useState("");
  const [inputB, setInputB] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="w-full space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          JSON Compare
        </h2>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Compare two JSON objects and find their differences.
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-3">
          <div className="mb-3 flex h-8 items-center justify-between">
            <label className="text-sm font-semibold text-gray-800 dark:text-gray-200">
              Original JSON
            </label>
          </div>

          <textarea
            onChange={(e) => {
              setInputA(e.target.value);
              setError("");
            }}
            value={inputA}
            className="min-h-[280px] w-full resize-y rounded-xl border border-gray-200 bg-gray-50 p-4 font-mono text-sm leading-6 text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:placeholder:text-gray-600 dark:focus:border-blue-400"
          />
        </div>

        <div className="flex flex-col gap-3">
          <div className="mb-3 flex h-8 items-center justify-between">
            <label className="text-sm font-semibold text-gray-800 dark:text-gray-200">
              Modified JSON
            </label>

            {/* <div className="flex justify-between gap-5">
                  <CopyButton text={output} />
                  <DownloadButton text={output}/>
                </div> */}
          </div>

          <textarea
            value={inputB}
            onChange={(e) => {
              setInputB(e.target.value);
              setError("");
            }}
            className="min-h-[280px] w-full resize-y rounded-xl border border-gray-200 bg-gray-100 p-4 font-mono text-sm leading-6 text-gray-700 outline-none placeholder:text-gray-400 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300 dark:placeholder:text-gray-600"
          />
        </div>
      </div>

      {/* {error && <p className="text-sm text-red-500">{error}</p>} */}

      {output && <div>
        <h3>Comparison results</h3>
        <textarea
          className="min-h-[200px] w-full resize-y rounded-xl border border-gray-200 bg-gray-50 p-4 font-mono text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
          readOnly
          value={output}
        />
      </div>}

      <div className="flex justify-end">
        <button
          type="button"
          className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md active:scale-95 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Compare JSON
        </button>
      </div>
    </div>
  );
}

export default JsonCompare;
