"use client";

import { useState } from "react";
import type { Course, CurriculumDay } from "@/data/courses";

function TopicRow({
  index,
  title,
  detail,
}: {
  index: number;
  title: string;
  detail: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center gap-4 text-left"
        aria-expanded={open}
      >
        <span className="flex size-[33px] shrink-0 items-center justify-center rounded-full bg-[#ff846c] text-[21px] font-semibold text-white">
          {index}
        </span>
        <span className="flex-1 text-card-body font-medium text-[#667085]">
          {title}
        </span>
        <span
          className={`text-[32px] leading-none font-normal text-[#667085] transition-transform ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden
        >
          +
        </span>
      </button>
      {open ? (
        <p className="mt-3 ml-[49px] max-w-[520px] text-card-body font-medium text-[#667085]">
          {detail}
        </p>
      ) : null}
    </div>
  );
}

function DayCard({ day }: { day: CurriculumDay }) {
  return (
    <article className="rounded-[10px] border border-[#ff846c] p-6 sm:p-8">
      <h3 className="mb-6 text-[clamp(1.25rem,1.5vw+0.5rem,1.625rem)] font-medium text-[#1d1d21]">
        {day.title}
      </h3>
      <div className="flex flex-col gap-[22px]">
        {day.topics.map((topic, index) => (
          <TopicRow
            key={topic.title}
            index={index + 1}
            title={topic.title}
            detail={topic.detail}
          />
        ))}
      </div>
    </article>
  );
}

type WhatWillBeCoveredProps = {
  course: Course;
};

export default function WhatWillBeCovered({ course }: WhatWillBeCoveredProps) {
  return (
    <section className="page-x section-y">
      <div className="mx-auto flex max-w-page flex-col gap-8 md:gap-[47px]">
        <h2 className="max-w-[659px] font-display text-section-title font-bold capitalize tracking-[-0.5px] text-[#1d1d21]">
          What Will Be <span className="text-brand">Covered</span>
        </h2>

        <div className="grid w-full gap-4 md:gap-5 lg:grid-cols-2">
          {course.curriculum.map((day) => (
            <DayCard key={day.title} day={day} />
          ))}
        </div>
      </div>
    </section>
  );
}
