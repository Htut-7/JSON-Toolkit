"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import github from "@/public/github.jpg";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

function Navbar() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const modeToogle = () => {
    setIsDark((prev) => !prev);
    console.log(isDark);
  };

  return (
    <div className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4 shadow-sm transition-colors dark:border-gray-700 dark:bg-gray-900">
      <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        JSON Formatter
      </h2>

      <div>
        <ul className="flex items-center gap-4">
          <button
            onClick={modeToogle}
            type="button"
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
          >
            {isDark ? (
              <MdOutlineLightMode size={20} />
            ) : (
              <MdOutlineDarkMode size={20} />
            )}
          </button>

          <Link
            href="https://github.com/Htut-7/JSON-Toolkit.git"
            className="rounded-lg  px-4 py-2 text-sm font-medium text-white transition "
          >
            <Image src={github} width={30} height={30} alt="github" />
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
