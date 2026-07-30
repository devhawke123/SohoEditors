import SoftwareBadge from "@/components/courses/SoftwareBadge";
import Button from "@/components/ui/Button";
import type { Course } from "@/data/courses";

type CourseHeroProps = {
  course: Course;
};

export default function CourseHero({ course }: CourseHeroProps) {
  return (
    <section className="page-x section-y mx-auto max-w-page">
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-14">
        <div className="flex flex-1 flex-col gap-5 md:gap-6">
          <p className="text-[clamp(1.5rem,2vw+0.5rem,2.5rem)] font-bold text-brand">
            ({course.code})
          </p>
          <h1 className="font-display text-hero-title font-bold text-black">
            {course.title}
          </h1>
          <p className="text-[clamp(1.25rem,1.5vw+0.5rem,2.125rem)] font-semibold text-black">
            {course.tagline}
          </p>
          <p className="max-w-[640px] text-hero-body text-text-muted">
            {course.detailDescription}
          </p>
          <Button href="#book">Reserve Your Place Today</Button>
        </div>

        <div className="flex w-full flex-1 justify-center gap-3 lg:justify-end">
          {course.softwareLabels.map((label) => (
            <SoftwareBadge key={label} label={label} size="lg" />
          ))}
        </div>
      </div>
    </section>
  );
}
