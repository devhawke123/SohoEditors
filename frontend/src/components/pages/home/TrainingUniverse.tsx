import heroImage from "@/assets/heroImage.jpg";
import CourseCategoryCard from "@/components/courses/CourseCategoryCard";
import Button from "@/components/ui/Button";

const COURSES = [
  {
    title: "Video Editing",
    offer: "Black Friday Deal 67% OFF -",
    description:
      "Master professional video editing techniques with industry-standard software and advanced workflows.",
    coursesLabel: "12 Courses",
  },
  {
    title: "Compositing & Visual Effects",
    offer: "Black Friday Deal 67% OFF -",
    description:
      "Gain practical experience in industry-standard VFX and post-production workflows",
    coursesLabel: "12 Courses",
  },
  {
    title: "Colour Grading",
    offer: "New Course Added: DaVinci Resolve Masterclass!",
    description:
      "Advanced colour correction and grading techniques for professional visual aesthetic",
    coursesLabel: "12 Courses",
  },
  {
    title: "Motion Graphics & Animation",
    offer: "Special Discount for Early Bird Sign-ups!",
    description:
      "Create stunning animations and motion graphics with professional design principles",
    coursesLabel: "12 Courses",
  },
  {
    title: "Creative AI Toolsets",
    offer: "Black Friday Deal 67% OFF -",
    description:
      "Explore cutting-edge AI tools revolutionising post-production and creative workflows.",
    coursesLabel: "12 Courses",
  },
  {
    title: "Audio",
    offer: "New Course Added: DaVinci Resolve Masterclass!",
    description:
      "Master professional sound design, mixing, and post-production for film and digital media.",
    coursesLabel: "12 Courses",
  },
  {
    title: "Bespoke & Tailored Training",
    offer: "Black Friday Deal 67% OFF -",
    description:
      "If you can't find a suitable course for your training requirements, we can create a bespoke course for you.",
    coursesLabel: "12 Courses",
  },
  {
    title: "Graphic Design",
    offer: "Special Discounts 67% OFF -",
    description:
      "Learn complete production workflows from planning to final delivery with industry experts.",
    coursesLabel: "12 Courses",
  },
] as const;

export default function TrainingUniverse() {
  return (
    <section className="page-x section-y">
      <div className="mx-auto flex max-w-wide flex-col items-center gap-10 md:gap-16">
        <div className="flex max-w-content flex-col items-center gap-3 text-center md:gap-5">
          <h2 className="font-display text-section-title font-bold tracking-[-0.5px] text-heading">
            Explore Our Training Universe
          </h2>
          <p className="max-w-narrow text-section-body tracking-[0.16px] text-[#878787]">
            From beginner fundamentals to advanced professional techniques, we
            offer comprehensive training across all major Post Production
            disciplines with industry-leading instructors.
          </p>
        </div>

        <div className="grid w-full gap-5 md:grid-cols-2">
          {COURSES.map((course) => (
            <CourseCategoryCard
              key={course.title}
              {...course}
              image={heroImage}
            />
          ))}
        </div>

        <Button href="#">View all Courses</Button>
      </div>
    </section>
  );
}
