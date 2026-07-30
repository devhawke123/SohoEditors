import type { StaticImageData } from "next/image";
import Image from "next/image";
import frame39578 from "@/assets/industryleaders/Frame 39578.png";
import frame39579 from "@/assets/industryleaders/Frame 39579.png";
import frame39580 from "@/assets/industryleaders/Frame 39580.png";
import frame39581 from "@/assets/industryleaders/Frame 39581.png";
import frame39582 from "@/assets/industryleaders/Frame 39582.png";

const PARTNERS: { name: string; image: StaticImageData }[] = [
  { name: "Channel 5", image: frame39578 },
  { name: "Cartoon Network", image: frame39579 },
  { name: "Publicis Sapient", image: frame39580 },
  { name: "Strata", image: frame39581 },
  { name: "VMLY&R", image: frame39582 },
];

export type PartnersProps = {
  /**
   * Text before the orange highlight.
   * Home: "Who We " · elsewhere: "Trusted by "
   */
  titleBefore?: string;
  /** Orange highlighted phrase — home: "Work With" · elsewhere: "industry leaders" */
  titleHighlight?: string;
  description?: string;
};

export default function Partners({
  titleBefore = "Who We ",
  titleHighlight = "Work With",
  description = "We're trusted by leading brands and creative organisations around the world.",
}: PartnersProps) {
  return (
    <section className="page-x section-y">
      <div className="mx-auto flex max-w-wide flex-col items-center gap-6 md:gap-8">
        <div className="flex max-w-narrow flex-col items-center gap-3 text-center">
          <h2 className="font-display text-section-title font-bold text-black">
            {titleBefore}
            <span className="text-brand-hot">{titleHighlight}</span>
          </h2>
          <p className="text-section-body tracking-[0.16px] text-[#878787]">
            {description}
          </p>
        </div>

        <div className="flex w-full flex-wrap items-center justify-center gap-3.5">
          {PARTNERS.map(({ name, image }) => (
            <div
              key={name}
              className="relative aspect-[245/169] w-[min(100%,11.25rem)] overflow-hidden bg-[#f5f5f5] sm:w-[15.3125rem]"
            >
              <Image
                src={image}
                alt={name}
                fill
                className="object-contain p-4"
                sizes="245px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
