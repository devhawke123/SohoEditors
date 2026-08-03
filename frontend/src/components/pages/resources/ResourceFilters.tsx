"use client";

import { useState } from "react";

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 19 13"
      className={`size-3.5 shrink-0 ${className}`}
      fill="none"
    >
      <path
        d="M1 1.5L9.5 11L18 1.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ResourceFilters() {
  const [sortOpen, setSortOpen] = useState(false);

  return (
    <div className="page-x">
      <div className="mx-auto flex max-w-page flex-col gap-5">
        <p className="text-feature-title font-medium text-[#101828]">
          Browse by Category
        </p>

        <div className="flex flex-wrap gap-4 md:gap-8">
          <div className="relative">
            <button
              type="button"
              onClick={() => setSortOpen((open) => !open)}
              className="inline-flex h-14 min-w-[12rem] items-center justify-center gap-3 rounded-[10px] bg-brand px-6 text-btn font-bold text-white sm:h-16 sm:min-w-[17.5rem]"
              aria-expanded={sortOpen}
            >
              Upload Date
              <ChevronDown className="text-white" />
            </button>
          </div>

          <button
            type="button"
            className="inline-flex h-14 min-w-[12rem] items-center justify-center gap-4 rounded-[10px] border border-brand bg-white px-5 text-btn font-bold text-brand sm:h-16 sm:min-w-[17.5rem] sm:gap-6"
          >
            <span>File Type</span>
            <span className="inline-flex min-w-[3.4rem] items-center justify-center rounded-[10px] bg-brand px-3 py-2 text-white">
              01
            </span>
          </button>

          <button
            type="button"
            className="inline-flex h-14 min-w-[12rem] items-center justify-center gap-4 rounded-[10px] border border-brand bg-white px-5 text-btn font-bold text-brand sm:h-16 sm:min-w-[17.5rem] sm:gap-6"
          >
            <span>Software</span>
            <span className="inline-flex min-w-[3.4rem] items-center justify-center rounded-[10px] bg-brand px-3 py-2 text-white">
              10
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
