import Image from "next/image";
import heroImage from "@/assets/heroImage.jpg";
import clockIcon from "@/assets/icons/Group 39262.svg";
import Button from "@/components/ui/Button";

type Bundle = {
  title: string;
  description: string;
  tags: string[];
  duration: string;
  price: string;
  originalPrice: string;
  badge?: string;
};

const BUNDLES: Bundle[] = [
  {
    title: "The Complete Video Editing Bundles",
    description:
      "Master professional video editing with Adobe Premiere Pro from scratch with hands-on projects and real-world techniques used by industry professionals.",
    tags: [
      "Premiere Pro Introduction",
      "Premiere Pro Advanced",
      "Colour Grading",
      "Audio Mixing",
    ],
    duration: "6 Days",
    price: "£940",
    originalPrice: "£1,433",
    badge: "Advanced",
  },
  {
    title: "The Editing & Effects Essentials Bundle",
    description:
      "Kickstart Your Creative Career: Master Video Editing in Adobe Premiere Pro and Create Stunning Motion Graphics & Visual Effects in After Effects.",
    tags: [
      "Adobe Premiere Pro",
      "After Effects",
      "Colour Grading",
      "Audio Mixing",
    ],
    duration: "4 Days",
    price: "£580",
    originalPrice: "£892",
    badge: "Advanced",
  },
  {
    title: "Complete Video Editing Masterclass",
    description:
      "Master professional video editing from scratch with hands-on projects and real-world techniques used by industry professionals.",
    tags: [
      "Adobe Premiere Pro",
      "After Effects",
      "Colour Grading",
      "Audio Mixing",
    ],
    duration: "12 Hours",
    price: "$149",
    originalPrice: "$299",
    badge: "Advanced",
  },
];

function BundleCard({
  title,
  description,
  tags,
  duration,
  price,
  originalPrice,
  badge,
}: Bundle) {
  return (
    <article className="relative flex flex-col overflow-hidden rounded-[10px] border border-brand bg-white">
      {badge ? (
        <span className="absolute top-0 right-3 z-10 rounded-b-md bg-[#101828] px-4 py-2 text-btn-sm font-bold text-white sm:px-6 sm:py-2.5">
          {badge}
        </span>
      ) : null}

      <div className="relative aspect-[446/259] w-full">
        <Image
          src={heroImage}
          alt=""
          fill
          className="rounded-t-[10px] object-cover"
          sizes="(max-width: 1024px) 100vw, 448px"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-card pt-4">
        <h3 className="text-center text-feature-title font-bold text-[#101828]">
          {title}
        </h3>
        <p className="text-card-body font-medium text-text-card">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center justify-center rounded-md bg-brand px-3 py-1.5 text-btn-sm font-medium text-white"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-2 flex items-center gap-3">
          <Image src={clockIcon} alt="" width={27} height={27} />
          <span className="text-card-body font-medium text-text-card">
            {duration}
          </span>
        </div>

        <div className="mt-auto border-t border-black/10 pt-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-baseline gap-2">
              <span className="text-feature-title font-bold text-[#101828]">
                {price}
              </span>
              <span className="text-feature-title font-bold text-[#101828] line-through">
                {originalPrice}
              </span>
            </div>
            <Button href="#">Enroll Now</Button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function FeaturedBundles() {
  return (
    <section className="page-x section-y">
      <div className="mx-auto flex max-w-page flex-col items-center gap-10 md:gap-12">
        <div className="flex max-w-content flex-col items-center gap-3 text-center">
          <h2 className="font-display text-section-title font-bold tracking-[-0.5px] text-heading">
            Featured Training Bundles
          </h2>
          <p className="max-w-narrow text-section-body tracking-[0.16px] text-[#878787]">
            Start your training journey with our most popular and highly-rated
            course bundles, designed by industry professionals and trusted by
            thousands.
          </p>
        </div>

        <div className="grid w-full gap-6 md:grid-cols-2 xl:grid-cols-3">
          {BUNDLES.map((bundle) => (
            <BundleCard key={bundle.title} {...bundle} />
          ))}
        </div>

        <Button href="#" className="w-full max-w-[448px]">
          View All Bundles
        </Button>
      </div>
    </section>
  );
}
