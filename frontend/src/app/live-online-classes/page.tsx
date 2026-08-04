/**
 * ROUTE: /live-online-classes — temporarily disabled (active: Home, Resources, FAQs).
 */
import { notFound } from "next/navigation";

/*
import type { Metadata } from "next";
import LiveOnlineHero from "@/components/pages/live-online-classes/LiveOnlineHero";
import LiveOnlineSupport from "@/components/pages/live-online-classes/LiveOnlineSupport";
import LiveOnlineTraining from "@/components/pages/live-online-classes/LiveOnlineTraining";

export const metadata: Metadata = {
  title: "Live Online Classes | Soho Editors",
  description:
    "Live, trainer-led online training classes and virtual technical support from Soho Editors — join from anywhere in the world.",
};

export default function LiveOnlineClassesPage() {
  return (
    <>
      <LiveOnlineHero />
      <LiveOnlineTraining />
      <LiveOnlineSupport />
    </>
  );
}
*/

export default function LiveOnlineClassesPage() {
  notFound();
}
