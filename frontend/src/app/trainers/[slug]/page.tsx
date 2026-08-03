/**
 * ROUTE: /trainers/[slug]
 * Individual trainer profile stub — expand when accounts/CMS are wired.
 */
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import SoftwareBadge from "@/components/courses/SoftwareBadge";
import Button from "@/components/ui/Button";
import { TRAINER_PROFILES } from "@/data/trainers";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return TRAINER_PROFILES.map((trainer) => ({ slug: trainer.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const trainer = TRAINER_PROFILES.find((item) => item.slug === slug);
  if (!trainer) return { title: "Trainer | Soho Editors" };
  return {
    title: `${trainer.name} | Soho Editors Trainers`,
    description: trainer.bio,
  };
}

export default async function TrainerProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const trainer = TRAINER_PROFILES.find((item) => item.slug === slug);
  if (!trainer) notFound();

  return (
    <section className="page-x section-y">
      <div className="mx-auto flex max-w-page flex-col gap-8 md:flex-row md:gap-12">
        <div className="relative size-40 shrink-0 overflow-hidden rounded-full bg-[#f5f5f5] sm:size-52">
          <Image
            src={trainer.avatar}
            alt={trainer.name}
            fill
            className="object-cover"
            sizes="208px"
            priority
          />
        </div>

        <div className="flex flex-1 flex-col gap-4">
          <div>
            <p className="text-card-body font-medium text-brand">
              @{trainer.slug}
            </p>
            <h1 className="mt-1 font-display text-section-title font-bold text-black">
              {trainer.name}
            </h1>
            <p className="mt-2 text-section-body text-[#667085]">
              {trainer.titles}
            </p>
            <p className="mt-1 text-card-body font-medium text-[#667085]">
              {trainer.availability}
            </p>
          </div>

          <p className="max-w-[720px] text-section-body text-[#667085]">
            {trainer.bio}
          </p>

          <div className="flex flex-wrap gap-3">
            {trainer.softwareLabels.map((label) => (
              <SoftwareBadge key={label} label={label} size="icon" />
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {trainer.expertise.map((tag) => (
              <span
                key={tag}
                className="rounded-[6px] bg-brand px-3 py-1.5 text-card-body font-medium text-white"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button href="/trainers" variant="outline">
              Back to Trainers
            </Button>
            <Button href="/training">See Courses</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
