"use client";

import React, { useState } from "react";
import CopyButton from "./CopyButton";
import DownloadButton from "./DownloadButton";
import { converter } from "@/lib/json/typescript-converter";

function JsonConverter() {

    const [input,setInput]=useState("");
    const [output,setOutput]=useState("");
    const [error,setError]=useState("");

    const convertHandler=()=>{
      

      try{
        const result=converter(input);

        if(!result){
          throw new Error("Something went wrong");
        }

        setOutput(result);
        setError("");

      }catch(error){
        if(error instanceof Error && error.message==="Add JSON data first to convert"){
          setError(error.message);
        }
      }
    }

    return (
        <div className="w-full space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              JSON to TypeScript Converter
            </h2>
            <span className="text-sm text-gray-500 dark:text-gray-400">
            Convert JSON arrays to TypeScript Interfaces
            </span>
          </div>
    
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-3">
              <div className="mb-3 flex h-8 items-center justify-between">
                <label className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  JSON Input
                </label>
              </div>
    
              <textarea
                placeholder='Place your JSON here... e.g., {"name":"John Doe","age":30}'
                onChange={(e) => {setInput(e.target.value); setError("")}}
                value={input}
                className="min-h-[280px] w-full resize-y rounded-xl border border-gray-200 bg-gray-50 p-4 font-mono text-sm leading-6 text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:placeholder:text-gray-600 dark:focus:border-blue-400"
              />
            </div>
    
            <div className="flex flex-col gap-3">
              <div className="mb-3 flex h-8 items-center justify-between">
                <label className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  TypeScript Output
                </label>
    
                <div className="flex justify-between gap-5">
                  <CopyButton text={output} />
                  <DownloadButton text={output}/>
                </div>
              </div>
    
              <textarea
                value={output}
                readOnly
                placeholder="Formatted JSON will appear here..."
                className=" min-h-[280px] w-full resize-y rounded-xl border border-gray-200 bg-gray-100 p-4 font-mono text-sm leading-6 text-gray-700 outline-none placeholder:text-gray-400 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300 dark:placeholder:text-gray-600"
              />
            </div>
          </div>
    
          {error && <p className="text-sm text-red-500">{error}</p>}
    
          <div className="flex justify-end">
            <button
              onClick={convertHandler}
              type="button"
              className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md active:scale-95 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Format JSON
            </button>
          </div>
        </div>
      );
}

export default JsonConverter;
