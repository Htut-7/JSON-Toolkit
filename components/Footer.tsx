import React from 'react'

function Footer() {
  return (
    <div className="w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 text-center">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          © 2026 JSON Toolkit. All rights reserved.
        </span>
        <h2 className="text-base font-semibold text-gray-900 dark:text-white">
          Created by Sithu Htut
        </h2>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Built with Next.js and Typescript
        </span>
      </div>
    </div>
  )
}

export default Footer