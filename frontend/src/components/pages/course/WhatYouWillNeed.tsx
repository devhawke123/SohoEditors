function CheckIcon() {
  return (
    <svg aria-hidden viewBox="0 0 18 15" className="mt-1 size-4 shrink-0" fill="none">
      <path
        d="M1.5 7.5L6.5 12.5L16.5 1.5"
        stroke="#f26b51"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const LEFT = [
  "Basic computer literacy and file management skills",
  "No prior video editing experience required",
  "A computer that meets Adobe's system requirements",
];

const RIGHT = [
  "Familiarity with Mac or Windows operating systems",
  "Adobe Premiere Pro CC installed (we provide guidance)",
  "Willingness to learn and practice new skills",
];

function NeedCard({ items }: { items: string[] }) {
  return (
    <div className="rounded-[10px] border border-[#ff846c] p-6 sm:p-10">
      <ul className="flex flex-col gap-6">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <CheckIcon />
            <p className="text-card-body font-medium text-text-card">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function WhatYouWillNeed() {
  return (
    <section className="page-x section-y">
      <div className="mx-auto flex max-w-page flex-col items-center gap-8 md:gap-10">
        <h2 className="text-center font-display text-section-title font-bold tracking-[-0.5px] text-heading capitalize">
          What You Will <span className="text-brand">Need</span>
        </h2>
        <div className="grid w-full gap-4 md:grid-cols-2 md:gap-5">
          <NeedCard items={LEFT} />
          <NeedCard items={RIGHT} />
        </div>
      </div>
    </section>
  );
}
