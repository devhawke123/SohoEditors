/**
 * ROUTE: /screenskills-funding
 * Free ScreenSkills-funded course overview.
 * Section UI: components/pages/screenskills-funding/
 */
import type { Metadata } from "next";
import ScreenskillsHero from "@/components/pages/screenskills-funding/ScreenskillsHero";
import ScreenskillsTestimonials from "@/components/pages/screenskills-funding/ScreenskillsTestimonials";
import ScreenskillsTracks from "@/components/pages/screenskills-funding/ScreenskillsTracks";

export const metadata: Metadata = {
  title: "ScreenSkills Funding | Soho Editors",
  description:
    "Join The AI Shift — a FREE ScreenSkills-funded course on AI tools, ethics, and compliance for HETV professionals.",
};

export default function ScreenskillsFundingPage() {
  return (
    <>
      <ScreenskillsHero />
      <ScreenskillsTracks />
      <ScreenskillsTestimonials />
    </>
  );
}
