import Image from "next/image";
import SoftwareBadge from "@/components/courses/SoftwareBadge";
import Button from "@/components/ui/Button";
import { TRAINER_PROFILES, type TrainerProfile } from "@/data/trainers";

function ExpertiseTags({
  expertise,
  overflow,
}: {
  expertise: string[];
  overflow?: number;
}) {
  return (
    <div className="flex flex-wrap gap-1.5 gap-y-2">
      {expertise.map((tag) => (
        <span
          key={tag}
          className="inline-flex items-center justify-center rounded-[6px] bg-brand px-3 py-1.5 text-card-body font-medium text-white"
        >
          {tag}
        </span>
      ))}
      {overflow ? (
        <span className="inline-flex items-center justify-center rounded-[6px] bg-brand px-3 py-1.5 text-card-body font-medium text-white">
          + {overflow}
        </span>
      ) : null}
    </div>
  );
}

function TrainerProfileCard({ trainer }: { trainer: TrainerProfile }) {
  return (
    <article className="flex h-full flex-col rounded-[10px] border border-brand bg-white p-5 sm:p-6">
      <div className="flex items-center gap-4">
        <div className="relative size-[79px] shrink-0 overflow-hidden rounded-full bg-[#f5f5f5]">
          <Image
            src={trainer.avatar}
            alt={trainer.name}
            fill
            className="object-cover"
            sizes="79px"
          />
        </div>
        <div className="min-w-0">
          <h3 className="text-card-body font-medium text-[#101828]">
            {trainer.name}
          </h3>
          <p className="text-card-body font-medium text-[#667085]">
            {trainer.titles}
          </p>
        </div>
      </div>

      <p className="mt-4 text-card-body font-medium text-[#667085]">
        {trainer.availability}
      </p>

      <p className="mt-4 text-card-body font-medium leading-[26px] text-[#667085]">
        {trainer.bio}
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        {trainer.softwareLabels.map((label) => (
          <SoftwareBadge key={label} label={label} size="icon" />
        ))}
      </div>

      <div className="mt-5">
        <ExpertiseTags
          expertise={trainer.expertise}
          overflow={trainer.expertiseOverflow}
        />
      </div>

      {trainer.portfolioImage ? (
        <div className="relative mt-5 aspect-[16/9] w-full overflow-hidden rounded-[8px] bg-[#101828]">
          <Image
            src={trainer.portfolioImage}
            alt={trainer.portfolioLabel ?? `${trainer.name} portfolio`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 420px"
          />
          {trainer.portfolioLabel ? (
            <div className="absolute inset-0 flex items-center justify-center bg-black/45">
              <span className="px-3 text-center text-btn font-bold text-white">
                {trainer.portfolioLabel}
              </span>
            </div>
          ) : null}
        </div>
      ) : null}

      <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
        <Button
          href={`/trainers/${trainer.slug}`}
          variant="outline"
          weight="normal"
          className="flex-1"
        >
          View Profile
        </Button>
        <Button href="/training" className="flex-1">
          See Courses
        </Button>
      </div>
    </article>
  );
}

export default function TrainerDirectory() {
  return (
    <section className="page-x section-y">
      <div className="mx-auto grid max-w-page gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-x-5 xl:gap-y-6">
        {TRAINER_PROFILES.map((trainer) => (
          <TrainerProfileCard key={trainer.slug} trainer={trainer} />
        ))}
      </div>
    </section>
  );
}
