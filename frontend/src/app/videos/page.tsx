/**
 * ROUTE: /videos
 * Free video tutorials page.
 * Section UI: components/pages/videos/
 * Video media is placeholder-only — swap for real embeds later.
 */
import type { Metadata } from "next";
import VideoCategories from "@/components/pages/videos/VideoCategories";
import VideosHero from "@/components/pages/videos/VideosHero";

export const metadata: Metadata = {
  title: "Videos | Soho Editors",
  description:
    "Explore free tutorials and event recordings for post production professionals from Soho Editors.",
};

export default function VideosPage() {
  return (
    <>
      <VideosHero />
      <VideoCategories />
    </>
  );
}
