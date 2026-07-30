const HIGHLIGHTS = [
  {
    title: "100% Satisfaction Guarantee",
    description: "Fully backed by our satisfaction guarantee",
  },
  {
    title: "Learn From Industry Professionals",
    description: "Our Trainers are working Professionals.",
  },
  {
    title: "Manufacturer Certified",
    description:
      "All courses are Manufacturer Certified & Industry Approved",
  },
] as const;

export default function TrainingHighlights() {
  return (
    <section className="bg-brand">
      <div className="page-x mx-auto flex max-w-page flex-col items-center gap-8 py-[clamp(1.75rem,4vw,2.375rem)] md:flex-row md:justify-between md:gap-10 lg:gap-16">
        {HIGHLIGHTS.map(({ title, description }) => (
          <div
            key={title}
            className="flex max-w-[336px] flex-col items-center gap-2.5 text-center"
          >
            <h2 className="text-feature-title font-bold text-white">{title}</h2>
            <p className="text-feature-body text-[#f5f5f5]">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
