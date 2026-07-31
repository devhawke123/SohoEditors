"use client";

import { useState } from "react";

const FILTERS = [
  { id: "software", label: "Software Skills", count: "10", activeStyle: "solid" as const },
  { id: "trainer", label: "Trainer Skills", count: "09", activeStyle: "outline" as const },
];

export default function TrainerFilters() {
  const [active, setActive] = useState("software");

  return (
    <div className="page-x pt-[clamp(2rem,5vw,3.5rem)]">
      <div className="mx-auto flex max-w-page flex-col gap-5">
        <p className="text-feature-title font-medium text-[#101828]">
          Browse by Category
        </p>
        <div className="flex flex-wrap gap-4 md:gap-8">
          {FILTERS.map((filter) => {
            const isActive = active === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActive(filter.id)}
                className={`inline-flex h-14 min-w-[12rem] items-center justify-center gap-4 rounded-[10px] px-5 text-btn font-bold sm:h-16 sm:min-w-[17.5rem] ${
                  isActive
                    ? "bg-brand text-white"
                    : "border border-brand bg-white text-brand"
                }`}
              >
                <span>{filter.label}</span>
                <span
                  className={`inline-flex min-w-[2.8rem] items-center justify-center rounded-[10px] px-3 py-2 ${
                    isActive ? "bg-black text-white" : "bg-brand text-white"
                  }`}
                >
                  {filter.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
