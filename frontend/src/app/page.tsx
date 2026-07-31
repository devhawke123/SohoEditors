/**
 * ROUTE: /
 * Homepage. Add/remove sections here.
 * Section UI lives in: components/pages/home/
 */
import FeaturedBundles from "@/components/pages/home/FeaturedBundles";
import Features from "@/components/pages/home/Features";
import Hero from "@/components/pages/home/Hero";
import Partners from "@/components/pages/home/Partners";
import SuccessStories from "@/components/pages/home/SuccessStories";
import Trainers from "@/components/pages/home/Trainers";
import TrainingJourney from "@/components/pages/home/TrainingJourney";
import TrainingUniverse from "@/components/pages/home/TrainingUniverse";
import TrustedStats from "@/components/pages/home/TrustedStats";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <TrainingUniverse />
      <TrustedStats />
      <FeaturedBundles />
      <Partners />
      <TrainingJourney />
      <Trainers />
      <SuccessStories />
    </>
  );
}
