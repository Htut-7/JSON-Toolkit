import React, { ReactNode } from "react";
import Link from "next/link";

interface ToolCardProps {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
}

function ToolCard({ title, description, href, icon }: ToolCardProps) {
  return (
    <div className=" group w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950 dark:hover:border-blue-500">
      <div className="flex flex-col gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
          {icon}
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h2>

          <span className="text-sm leading-6 text-gray-500 dark:text-gray-400">
            {description}
          </span>
        </div>

        <Link
          href={href}
          className="mt-2 inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-600 transition-all duration-200 group-hover:gap-3 dark:text-blue-400"
        >
          Try it <span>→</span>
        </Link>
      </div>
    </div>
  );
}

export default ToolCard;
