/**
 * ROUTE: /bespoke-training
 * Custom / bespoke training options overview.
 * Section UI: components/pages/bespoke-training/
 */
import type { Metadata } from "next";
import BespokeAudiences from "@/components/pages/bespoke-training/BespokeAudiences";
import BespokeFeatureGrid from "@/components/pages/bespoke-training/BespokeFeatureGrid";
import BespokeHero from "@/components/pages/bespoke-training/BespokeHero";
import BespokeIncludes from "@/components/pages/bespoke-training/BespokeIncludes";
import {
  BESPOKE_CLASSROOM,
  BESPOKE_ONSITE,
  BESPOKE_STYLES,
} from "@/data/bespokeTraining";

export const metadata: Metadata = {
  title: "Bespoke Training | Soho Editors",
  description:
    "Tailored team and individual training solutions — classroom, on-site, and personalised learning with Soho Editors.",
};

export default function BespokeTrainingPage() {
  return (
    <>
      <BespokeHero />
      <BespokeAudiences />
      <BespokeIncludes />
      <BespokeFeatureGrid
        heading="Classroom Training: Optimise Your Learning Environment!"
        items={BESPOKE_CLASSROOM}
      />
      <BespokeFeatureGrid
        heading="On-Site Training: Tailored Learning Where You Are!"
        items={BESPOKE_ONSITE}
      />
      <BespokeFeatureGrid
        heading="Opt for Personalised Learning: 3 Bespoke Styles for You!"
        intro="Unlock tailored training with our 3 bespoke styles—immerse yourself in fully interactive courses meticulously designed for your unique needs. Elevate your skills with Soho Editors."
        items={BESPOKE_STYLES}
      />
    </>
  );
}
