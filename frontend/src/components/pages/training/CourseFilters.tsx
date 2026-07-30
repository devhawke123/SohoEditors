"use client";

import { useState } from "react";

const LEVELS = [
  { label: "Beginner", count: 3 },
  { label: "Crossover", count: 1 },
  { label: "Intermediate", count: 2 },
  { label: "Advanced", count: 3 },
] as const;

function ChevronDown() {
  return (
    <svg aria-hidden viewBox="0 0 19 13" className="size-3.5 shrink-0" fill="none">
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

export default function CourseFilters() {
  const [activeLevel, setActiveLevel] = useState<string | null>(null);

  return (
    <div className="rounded-[10px] border border-brand p-5 sm:p-6">
      <p className="mb-5 text-feature-title font-medium text-[#101828]">
        Browse by Category
      </p>

      <div className="flex flex-wrap gap-3">
        <div className="inline-flex h-14 items-center justify-center rounded-[10px] bg-brand px-6 text-btn font-bold text-white sm:h-16">
          Experience Level
        </div>
        {LEVELS.map(({ label, count }) => {
          const isActive = activeLevel === label;
          return (
            <button
              key={label}
              type="button"
              onClick={() =>
                setActiveLevel((current) => (current === label ? null : label))
              }
              className={`inline-flex h-14 items-center gap-4 rounded-[10px] border border-brand px-4 text-btn font-bold sm:h-16 sm:gap-8 sm:px-5 ${
                isActive ? "bg-brand text-white" : "bg-white text-brand"
              }`}
            >
              <span>{label}</span>
              <span
                className={`inline-flex min-w-12 items-center justify-center rounded-[10px] px-3 py-2 ${
                  isActive ? "bg-white text-brand" : "bg-brand text-white"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 max-w-[414px] rounded-[10px] border border-brand p-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className="text-feature-title font-medium text-[#101828]">
              Location
            </span>
            <span className="inline-flex items-center justify-between gap-3 rounded-[10px] border border-brand px-3 py-2.5 text-btn-sm font-medium text-brand">
              All Locations
              <ChevronDown />
            </span>
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-feature-title font-medium text-[#101828]">
              Skills
            </span>
            <span className="inline-flex items-center justify-between gap-3 rounded-[10px] border border-brand px-3 py-2.5 text-btn-sm font-medium text-brand">
              Skills
              <ChevronDown />
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
