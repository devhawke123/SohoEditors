/**
 * ROUTE: /trainers
 * Trainer directory — dummy profiles for now; later fed by registered trainers.
 * Section UI: components/pages/trainers/
 */
import type { Metadata } from "next";
import OurTrainersHero from "@/components/pages/trainers/OurTrainersHero";
import TrainerDirectory from "@/components/pages/trainers/TrainerDirectory";
import TrainerFilters from "@/components/pages/trainers/TrainerFilters";
import WhyChooseTrainers from "@/components/pages/trainers/WhyChooseTrainers";

export const metadata: Metadata = {
  title: "Our Trainers | Soho Editors",
  description:
    "Meet Soho Editors trainers — industry professionals teaching certified post-production courses with real-world experience.",
};

export default function TrainersPage() {
  return (
    <>
      <OurTrainersHero />
      <WhyChooseTrainers />
      <TrainerFilters />
      <TrainerDirectory />
    </>
  );
}
