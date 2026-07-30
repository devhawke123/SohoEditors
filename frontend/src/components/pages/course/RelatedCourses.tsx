import Link from "next/link";
import SoftwareBadge from "@/components/courses/SoftwareBadge";

const RELATED = [
  {
    title: "Advanced Premiere Pro Course",
    price: "£199.00",
    format: "Online Tutorial",
    softwareLabel: "Pr",
    href: "/training/pp200",
  },
  {
    title: "Premiere Pro Course Bundle",
    price: "£449.00",
    format: "Online Tutorial",
    softwareLabel: "Pr",
    href: "/training/pp102",
  },
  {
    title: "Introduction to After Effects Course",
    price: "£249.00",
    format: "Online Tutorial",
    softwareLabel: "Ae",
    href: "#",
  },
  {
    title: "Introduction to InDesign Course",
    price: "£199.00",
    format: "Online Tutorial",
    softwareLabel: "Id",
    href: "#",
  },
] as const;

export default function RelatedCourses() {
  return (
    <section className="page-x section-y">
      <div className="mx-auto flex max-w-page flex-col items-center gap-8 md:gap-[30px]">
        <h2 className="max-w-[1042px] text-center font-display text-section-title font-bold tracking-[-0.5px] text-[#1d1d21]">
          Customers Who viewed These Courses Also Viewed
        </h2>

        <div className="grid w-full gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {RELATED.map((course) => (
            <Link
              key={course.title}
              href={course.href}
              className="flex min-h-[171px] flex-col rounded-[10px] border border-black px-3 py-4 transition-opacity hover:opacity-90"
            >
              <div className="flex items-start gap-2">
                <SoftwareBadge label={course.softwareLabel} size="md" />
                <h3 className="pt-1 text-feature-title font-bold tracking-[-0.5px] text-[#101828]">
                  {course.title}
                </h3>
              </div>

              <p className="mt-auto pt-4 text-[16px] font-bold tracking-[-0.5px] text-black">
                From{" "}
                <span className="text-[20px] text-brand">{course.price}</span>{" "}
                <span className="text-[16px]">+VAT</span>
              </p>
              <p className="text-[14px] font-bold tracking-[-0.5px] text-[#667085]">
                {course.format}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
