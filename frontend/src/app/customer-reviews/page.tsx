/**
 * ROUTE: /customer-reviews — temporarily disabled (active: Home, Resources, FAQs).
 */
import { notFound } from "next/navigation";

/*
import type { Metadata } from "next";
import CustomerReviewsGrid from "@/components/pages/customer-reviews/CustomerReviewsGrid";
import ScreenskillsTestimonials from "@/components/pages/screenskills-funding/ScreenskillsTestimonials";

export const metadata: Metadata = {
  title: "Customer Reviews | Soho Editors",
  description:
    "Explore what Soho Editors training clients say about their experiences, from booking to post-delivery satisfaction.",
};

export default function CustomerReviewsPage() {
  return (
    <>
      <ScreenskillsTestimonials />
      <CustomerReviewsGrid />
    </>
  );
}
*/

export default function CustomerReviewsPage() {
  notFound();
}
