/**
 * ROUTE: /training
 * Training page. Add/remove sections here.
 * Section UI lives in: components/pages/training/
 */
import type { Metadata } from "next";
import CertifiedCourses from "@/components/pages/training/CertifiedCourses";
import LearningFormats from "@/components/pages/training/LearningFormats";
import TrainingHero from "@/components/pages/training/TrainingHero";
import TrainingHighlights from "@/components/pages/training/TrainingHighlights";

export const metadata: Metadata = {
  title: "Training | Soho Editors",
  description:
    "Unlock your creative potential with 50+ premier post-production courses at Soho Editors.",
};

export default function TrainingPage() {
  return (
    <>
      <TrainingHero />
      <TrainingHighlights />
      <LearningFormats />
      <CertifiedCourses />
    </>
  );
}
