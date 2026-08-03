/**
 * ROUTE: /training-help
 * Training Help / FAQ page.
 * Section UI: components/pages/training-help/
 */
import type { Metadata } from "next";
import TrainingHelpFaq from "@/components/pages/training-help/TrainingHelpFaq";
import TrainingHelpHero from "@/components/pages/training-help/TrainingHelpHero";

export const metadata: Metadata = {
  title: "Training Help | Soho Editors",
  description:
    "Training help resources and frequently asked questions about Soho Editors courses, certification, booking, and support.",
};

export default function TrainingHelpPage() {
  return (
    <>
      <TrainingHelpHero />
      <TrainingHelpFaq />
    </>
  );
}
