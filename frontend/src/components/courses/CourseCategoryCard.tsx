import type { StaticImageData } from "next/image";
import Image from "next/image";
import Button from "@/components/ui/Button";

export type CourseCategoryCardProps = {
  title: string;
  offer: string;
  description: string;
  coursesLabel: string;
  image: StaticImageData | string;
  href?: string;
};

/** Shared card shell — swap `image` / copy when real course data is wired. */
export default function CourseCategoryCard({
  title,
  offer,
  description,
  coursesLabel,
  image,
  href = "#",
}: CourseCategoryCardProps) {
  return (
    <article className="flex flex-col rounded-xl bg-white p-card shadow-[0px_1px_6px_0px_rgba(0,0,0,0.5)]">
      <div className="relative mb-4 aspect-[221/99] w-full max-w-[221px] overflow-hidden rounded-[15px]">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          sizes="221px"
        />
      </div>

      <h3 className="text-card-title font-bold tracking-[-0.5px] text-heading">
        {title}
      </h3>
      <p className="mt-2 text-btn-sm font-medium text-brand">{offer}</p>
      <p className="mt-3 flex-1 text-card-body font-medium text-text-card">
        {description}
      </p>

      <div className="mt-6 border-t border-black/10 pt-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Button
            href={href}
            textSize="sm"
            weight="medium"
            className="min-w-[7.5rem]"
          >
            {coursesLabel}
          </Button>
          <Button
            href={href}
            variant="outline"
            textSize="sm"
            weight="medium"
            className="min-w-[7.5rem]"
          >
            Explore More
          </Button>
        </div>
      </div>
    </article>
  );
}
