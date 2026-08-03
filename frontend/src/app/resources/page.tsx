/**
 * ROUTE: /resources
 * Free resources / downloads page.
 * Section UI: components/pages/resources/
 */
import type { Metadata } from "next";
import ResourceFilters from "@/components/pages/resources/ResourceFilters";
import ResourceGrid from "@/components/pages/resources/ResourceGrid";
import ResourcesHero from "@/components/pages/resources/ResourcesHero";

export const metadata: Metadata = {
  title: "Resources | Soho Editors",
  description:
    "Unlock free resources: design templates, software manuals, and training funding guidelines from Soho Editors.",
};

export default function ResourcesPage() {
  return (
    <>
      <ResourcesHero />
      <ResourceFilters />
      <ResourceGrid />
    </>
  );
}
