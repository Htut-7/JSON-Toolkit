import React from "react";
import Navbar from "@/components/Navbar";
import JsonCompare from "@/components/JsonCompare";

function page() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      <Navbar />

      <main className="w-full flex-1 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <JsonCompare />
        </div>
      </main>
    </div>
  );
}

export default page;
