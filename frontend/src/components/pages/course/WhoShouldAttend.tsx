function PersonIcon() {
  return (
    <svg aria-hidden viewBox="0 0 22 22" className="size-[22px] shrink-0" fill="none">
      <circle cx="11" cy="7" r="3.5" stroke="#f26b51" strokeWidth="1.8" />
      <path
        d="M4 19c0-3.5 3.1-6 7-6s7 2.5 7 6"
        stroke="#f26b51"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

const AUDIENCE = [
  "Aspiring video editors starting their career",
  "Content creators wanting to edit videos",
  "Familiarity with Mac or Windows OS",
  "No Prior Knowledge of Editing experience",
  "Social media managers creating content",
  "Basic Computer literacy",
];

export default function WhoShouldAttend() {
  return (
    <section className="page-x section-y">
      <div className="mx-auto max-w-page">
        <h2 className="mb-8 font-display text-section-title font-bold tracking-[-0.5px] text-heading capitalize">
          Who Should <span className="text-brand">Attend</span>
        </h2>

        <div className="rounded-[10px] border border-[#ff846c] p-5 sm:p-8">
          <p className="mb-6 max-w-[1211px] text-card-body font-medium text-text-card">
            This course is perfect for anyone looking to learn professional video
            editing from scratch. Whether you&apos;re starting a new career or
            adding to your existing skillset, this course will give you the
            foundation you need.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {AUDIENCE.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-lg bg-[#edeeee] px-4 py-4"
              >
                <PersonIcon />
                <p className="text-card-body font-medium text-text-card">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
