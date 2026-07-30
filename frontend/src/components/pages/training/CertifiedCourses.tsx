import CourseListingCard from "@/components/courses/CourseListingCard";
import CourseFilters from "@/components/pages/training/CourseFilters";
import { COURSES } from "@/data/courses";

export default function CertifiedCourses() {
  return (
    <section className="page-x section-y">
      <div className="mx-auto flex max-w-page flex-col gap-10 md:gap-14">
        <div className="mx-auto flex max-w-content flex-col items-center gap-5 text-center">
          <h2 className="font-display text-section-title font-bold tracking-[-0.5px] text-black">
            Our Certified Courses
          </h2>
          <p className="text-section-body tracking-[0.16px] text-[#878787]">
            Unlock your creative potential with our hands-on post production
            training that helps you bring your vision to life and connect with
            your audience more powerfully.
          </p>
        </div>

        <CourseFilters />

        <div className="flex flex-col gap-6 md:gap-8">
          {COURSES.map((course) => (
            <CourseListingCard
              key={course.code}
              code={course.code}
              title={course.title}
              duration={course.duration}
              level={course.level}
              description={course.description}
              priceFrom={course.priceFrom}
              softwareLabels={course.softwareLabels}
              detailsVariant={course.detailsVariant}
              defaultPricingOpen={course.defaultPricingOpen}
              href={`/training/${course.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
