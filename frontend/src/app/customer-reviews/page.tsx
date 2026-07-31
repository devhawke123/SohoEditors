/**
 * ROUTE: /customer-reviews
 * Client testimonials / customer reviews (quote cards).
 * Section UI: components/pages/customer-reviews/
 */
import type { Metadata } from "next";
import CustomerReviewsGrid from "@/components/pages/customer-reviews/CustomerReviewsGrid";
import CustomerReviewsHero from "@/components/pages/customer-reviews/CustomerReviewsHero";
import ScreenskillsTestimonials from "@/components/pages/screenskills-funding/ScreenskillsTestimonials";

export const metadata: Metadata = {
  title: "Customer Reviews | Soho Editors",
  description:
    "Explore what Soho Editors training clients say about their experiences, from booking to post-delivery satisfaction.",
};

export default function CustomerReviewsPage() {
  return (
    <>
      {/* <CustomerReviewsHero /> */}
      <ScreenskillsTestimonials />
      <CustomerReviewsGrid />
    </>
  );
}
