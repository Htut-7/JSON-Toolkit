"use client";

import { download } from '@/lib/json/download';
import React from 'react'

function DownloadButton({text}: {text: string}) {

    const downloadHandler=async()=>{
        await download(text);
    }
    
    return (
        <div className="flex justify-end">
          <button
            onClick={downloadHandler}
            type="button"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 active:scale-95 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-blue-500 dark:hover:bg-gray-800 dark:hover:text-blue-400"
          >
            <svg
              xmlns="https://shorturl.at/XQFMm"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="14" height="14" x="8" y="8" rx="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
            Download
          </button>
        </div>
      );
}

export default DownloadButton