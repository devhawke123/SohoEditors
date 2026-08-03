import { BESPOKE_AUDIENCES } from "@/data/bespokeTraining";
import { BespokeIcon } from "@/components/pages/bespoke-training/BespokeIcons";

export default function BespokeAudiences() {
  return (
    <section className="page-x pb-[clamp(2.5rem,6vh,4rem)]">
      <div className="mx-auto grid max-w-[938px] gap-6 md:grid-cols-2 md:gap-8">
        {BESPOKE_AUDIENCES.map((card) => (
          <article
            key={card.title}
            className="flex flex-col items-center gap-7 rounded-[9px] border border-brand-hot px-5 py-10 text-center sm:px-8 sm:py-12"
          >
            <BespokeIcon name={card.icon} />
            <h2 className="text-[clamp(1.125rem,1vw+0.75rem,1.5rem)] font-semibold leading-[26px] text-[#101828]">
              {card.title}
            </h2>
            <ul className="list-disc space-y-1 pl-6 text-left text-[17px] font-medium leading-[26px] text-[#667085]">
              {card.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
