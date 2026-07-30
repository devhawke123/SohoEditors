/**
 * ROUTE: /training/[slug]
 * Example: /training/pp101
 * Course detail (inner) page.
 * Section UI: components/pages/course/
 */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CourseHero from "@/components/pages/course/CourseHero";
import DeliveryComparison from "@/components/pages/course/DeliveryComparison";
import LearnYourWay from "@/components/pages/course/LearnYourWay";
import RelatedCourses from "@/components/pages/course/RelatedCourses";
import WhatWillBeCovered from "@/components/pages/course/WhatWillBeCovered";
import WhatYouWillNeed from "@/components/pages/course/WhatYouWillNeed";
import WhatsIncluded from "@/components/pages/course/WhatsIncluded";
import WhoShouldAttend from "@/components/pages/course/WhoShouldAttend";
import Partners from "@/components/pages/home/Partners";
import SuccessStories from "@/components/pages/home/SuccessStories";
import { getAllCourseSlugs, getCourseBySlug } from "@/data/courses";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllCourseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return { title: "Course | Soho Editors" };
  return {
    title: `${course.title} | Soho Editors`,
    description: course.description,
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  return (
    <>
      {/* <CourseHero course={course} />
      <WhatWillBeCovered course={course} />
      <LearnYourWay />
      <WhatsIncluded />
      <WhatYouWillNeed />
      <WhoShouldAttend />
      <DeliveryComparison />
      <Partners
        titleBefore="Trusted by "
        titleHighlight="industry leaders"
      />
      <SuccessStories />
      <RelatedCourses /> */}
    </>
  );
}
