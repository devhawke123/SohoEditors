"use client";

import Link from "next/link";
import { useState } from "react";
import {
  TRAINING_HELP_FAQS,
  type HelpAnswerBlock,
  type HelpFaqItem,
} from "@/data/trainingHelp";

function CloseIcon() {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className="size-4 shrink-0" fill="none">
      <path
        d="M2 2l12 12M14 2L2 14"
        stroke="#f26b51"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className="size-4 shrink-0" fill="none">
      <path
        d="M8 2v12M2 8h12"
        stroke="#f26b51"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AnswerBlock({ block }: { block: HelpAnswerBlock }) {
  if (block.lead) {
    return (
      <p className="text-card-body font-medium leading-[26px] text-[#878787]">
        <span className="font-semibold text-[#3e3e41]">{block.lead}</span>
        {block.text}
      </p>
    );
  }

  return (
    <p className="text-card-body font-medium leading-[26px] text-[#878787]">
      {block.text}
    </p>
  );
}

function FaqItem({
  item,
  open,
  onToggle,
}: {
  item: HelpFaqItem;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <article className="rounded-[14px] border border-brand bg-white px-6 py-7 sm:px-[27px] sm:py-8">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <h2 className="text-feature-title font-bold text-black">
          {item.question}
        </h2>
        {open ? <CloseIcon /> : <PlusIcon />}
      </button>

      {open ? (
        <div className="mt-6 flex flex-col gap-3.5">
          {item.answer.map((block, index) => (
            <AnswerBlock key={index} block={block} />
          ))}
          <p className="mt-2 text-[15px] font-medium text-brand">
            Did this answer your question? If not,{" "}
            <Link href="#" className="font-bold underline">
              contact
            </Link>{" "}
            us and we&apos;ll give you some personal attention.
          </p>
        </div>
      ) : null}
    </article>
  );
}

export default function TrainingHelpFaq() {
  const [openId, setOpenId] = useState<string | null>(TRAINING_HELP_FAQS[0]?.id ?? null);

  return (
    <section className="page-x pb-[clamp(3rem,8vw,5rem)]">
      <div className="mx-auto flex max-w-[1276px] flex-col gap-5">
        {TRAINING_HELP_FAQS.map((item) => (
          <FaqItem
            key={item.id}
            item={item}
            open={openId === item.id}
            onToggle={() =>
              setOpenId((current) => (current === item.id ? null : item.id))
            }
          />
        ))}
      </div>
    </section>
  );
}
