import type { BespokeFeature } from "@/data/bespokeTraining";
import { BespokeIcon } from "@/components/pages/bespoke-training/BespokeIcons";

function FeatureCard({ title, description, icon }: BespokeFeature) {
  return (
    <article className="flex min-h-[317px] flex-col items-center gap-4 rounded-[9px] border border-brand px-5 py-8 text-center sm:min-h-[351px] sm:px-6 sm:py-9">
      <BespokeIcon name={icon} />
      <div className="flex flex-col gap-2">
        {title ? (
          <h3 className="text-[17px] font-semibold leading-[26px] text-[#101828]">
            {title}
          </h3>
        ) : null}
        {description ? (
          <p className="text-[17px] font-medium leading-[26px] text-[#667085]">
            {description}
          </p>
        ) : null}
      </div>
    </article>
  );
}

type FeatureGridProps = {
  heading: string;
  intro?: string;
  items: BespokeFeature[];
};

export default function BespokeFeatureGrid({
  heading,
  intro,
  items,
}: FeatureGridProps) {
  return (
    <section className="page-x pb-[clamp(2.5rem,6vh,4rem)]">
      <div className="mx-auto flex max-w-[1282px] flex-col items-center gap-6 md:gap-8">
        <div className="flex max-w-[1089px] flex-col items-center gap-4 text-center md:gap-5">
          <h2 className="text-[clamp(1.5rem,2.5vw+0.5rem,2.5rem)] font-bold tracking-[-0.5px] text-black">
            {heading}
          </h2>
          {intro ? (
            <p className="text-section-body tracking-[0.16px] text-[#878787]">
              {intro}
            </p>
          ) : null}
        </div>
        <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[15px]">
          {items.map((item, index) => (
            <FeatureCard
              key={`${item.icon}-${item.title ?? index}`}
              {...item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
