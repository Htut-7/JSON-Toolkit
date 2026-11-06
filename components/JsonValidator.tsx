"use client";

import React, { useState } from "react";
import { validator } from "@/lib/json/validator";

function JsonValidator() {
  const [validate, setValidate] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const validateHandler = () => {
    try {
      const result = validator(validate);

      setSuccess(result);
      setError("");
    } catch (error) {
      setSuccess(false);

      if (error instanceof Error && error.message === "Please add JSON data") {
        setError(error.message);
      } else {
        setError("Invalid JSON");
      }
    }
  };

  const clickHandler=()=>{
    setValidate("");
    setError("");
    setSuccess(false);
  }

  return (
    <div className="w-full space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          JSON Validator
        </h2>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Validate your JSON, just copy + paste it below:
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <label className="text-sm font-semibold text-gray-700 dark:text-gray-200">
          Input JSON
        </label>

        <textarea
          placeholder="Click here to start editing JSON"
          onChange={(e) => {
            setValidate(e.target.value);
            setSuccess(false);
            setError("");
          }}
          value={validate}
          className="min-h-[320px] w-full resize-y rounded-xl border border-gray-200 bg-gray-50 p-4 font-mono text-sm leading-6 text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:placeholder:text-gray-600 dark:focus:border-blue-400"
        />
      </div>

      {success ? (
        <div>
          <p className="text-sm text-green-500">Valid JSON</p>
        </div>
      ) : (
        <div>
          <p className="text-sm text-red-500">{error}</p>
        </div>
      )}

      <div className="flex justify-end gap-5">
        <button
          onClick={clickHandler}
          type="button"
          className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md active:scale-95 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Clear
        </button>

        <button
          onClick={validateHandler}
          type="button"
          className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md active:scale-95 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Validate JSON
        </button>
      </div>
    </div>
  );
}

export default JsonValidator;
