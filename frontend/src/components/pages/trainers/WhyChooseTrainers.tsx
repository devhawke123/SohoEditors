const REASONS = [
  {
    title: "Industry-Seasoned Professionals",
    body: "Our trainers are actively engaged in their fields, bringing a depth of practical insights to your learning experience.",
  },
  {
    title: "Cutting-Edge Knowledge",
    body: "All our accredited courses are led by certified professionals who undergo regular retraining to stay at the forefront of industry advancements.",
  },
  {
    title: "Real-world Experience",
    body: "Gain valuable insights from trainers with real-world experience, offering not just theoretical knowledge but practical industry application.",
  },
] as const;

export default function WhyChooseTrainers() {
  return (
    <section className="bg-brand">
      <div className="page-x section-y mx-auto max-w-page">
        <h2 className="mb-10 font-display text-section-title font-bold text-white md:mb-14">
          Why Choose Soho Editors?
        </h2>
        <div className="grid gap-5 md:grid-cols-3 md:gap-8">
          {REASONS.map((reason) => (
            <article
              key={reason.title}
              className="flex min-h-[269px] flex-col items-center justify-center rounded-[9px] border border-[#f24822] bg-white/20 px-8 py-10 text-center backdrop-blur-[15px]"
            >
              <h3 className="text-feature-title font-bold text-white">
                {reason.title}
              </h3>
              <p className="mt-3 text-card-body font-medium leading-[26px] text-white">
                {reason.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
