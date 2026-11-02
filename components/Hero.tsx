import React from 'react'

function Hero() {
  return (
    <div className="w-full px-6 py-16 sm:py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
          Your JSON Toolkit
        </h2>

        <p className="text-xl font-medium text-gray-700 sm:text-2xl dark:text-gray-200">
          Everything you need to work with JSON
        </p>

        <span className="max-w-2xl text-base leading-7 text-gray-500 sm:text-lg dark:text-gray-400">
          Format, validate, minify, convert and compare JSON data with simple online tools.
        </span>
      </div>
    </div>
  )
}

export default Hero