/**
 * ROUTE: /screenskills-funding — temporarily disabled (active: Home, Resources, FAQs).
 */
import { notFound } from "next/navigation";

/*
import type { Metadata } from "next";
import ScreenskillsHero from "@/components/pages/screenskills-funding/ScreenskillsHero";
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
    </>
  );
}
*/

export default function ScreenskillsFundingPage() {
  notFound();
}
