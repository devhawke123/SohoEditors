"use client";

import Image from "next/image";
import { useState } from "react";
import clockIcon from "@/assets/icons/Group 39262.svg";
import SoftwareBadge from "@/components/courses/SoftwareBadge";
import Button from "@/components/ui/Button";

export type PricingTier = {
  window: string;
  windowNote?: string;
  description: string;
  rateLabel: string;
};

export type CourseListingCardProps = {
  code: string;
  title: string;
  duration: string;
  level: string;
  description: string;
  priceFrom: string;
  /** Short labels for software badges until real logos land (e.g. Pr, Ae). */
  softwareLabels?: string[];
  detailsVariant?: "brand" | "black";
  defaultPricingOpen?: boolean;
  pricingTiers?: PricingTier[];
  /** Course detail page URL, e.g. /training/pp101 */
  href?: string;
};

const DEFAULT_TIERS: PricingTier[] = [
  {
    window: "0 - 30 days",
    description:
      "Perfect for last-minute sign-ups. Book close to the start date and secure your place at the regular price.",
    rateLabel: "Standard Rate( £1000(Save 0%))",
  },
  {
    window: "31-60 days",
    description:
      "Plan a little ahead and enjoy a 10% saving. A smart choice for early planners who want value and flexibility.",
    rateLabel: "Early booking discount(£900 (Save 10%))",
  },
  {
    window: "61 – 90 days",
    description:
      "Lock in your course with confidence. Secure your spot 2–3 months in advance and enjoy a generous 20% discount.",
    rateLabel: "Advanced planning discount( £800 (Save 20%))",
  },
  {
    window: "90+ days",
    windowNote: "(Best Deal)",
    description:
      "The best deal we offer! Book more than 3 months ahead and save a massive 30% off the standard rate.",
    rateLabel: "Maximum savings( £700 (Save 30%))",
  },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 19 13"
      className={`size-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
      fill="none"
    >
      <path
        d="M1 1.5L9.5 11L18 1.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CourseListingCard({
  code,
  title,
  duration,
  level,
  description,
  priceFrom,
  softwareLabels = ["Pr"],
  detailsVariant = "black",
  defaultPricingOpen = false,
  pricingTiers = DEFAULT_TIERS,
  href = "#",
}: CourseListingCardProps) {
  const [pricingOpen, setPricingOpen] = useState(defaultPricingOpen);
  const detailsColor = detailsVariant === "brand" ? "brand" : "black";

  return (
    <article className="rounded-[9px] border border-brand bg-white p-5 sm:p-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <p
              className={`text-feature-title font-semibold ${
                detailsVariant === "brand" ? "text-brand" : "text-black"
              }`}
            >
              {code}
            </p>
            <h3 className="mt-1 font-display text-[clamp(1.5rem,2.5vw+0.5rem,2.8125rem)] font-bold tracking-[-0.5px] text-black">
              {title}
            </h3>
            <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2">
              <div className="flex items-center gap-3">
                <Image src={clockIcon} alt="" width={27} height={27} />
                <span className="text-card-body font-medium text-text-card">
                  {duration}
                </span>
              </div>
              <span
                className={`text-feature-title font-semibold ${
                  detailsVariant === "brand" ? "text-brand" : "text-black"
                }`}
              >
                {level}
              </span>
            </div>
          </div>
          <div className="flex shrink-0 -space-x-3">
            {softwareLabels.map((label) => (
              <SoftwareBadge key={label} label={label} />
            ))}
          </div>
        </div>

        <p className="text-section-body text-[#878787]">{description}</p>
        <p className="text-feature-title font-semibold text-black">{priceFrom}</p>
        <Button href={href} color={detailsColor}>
          Course Details
        </Button>
      </div>

      <div className="mt-8 border-t border-black/10 pt-5">
        <p className="mb-4 text-section-body font-semibold text-[#878787]">
          Course Pricing
        </p>

        <Button
          type="button"
          onClick={() => setPricingOpen((open) => !open)}
          fullWidth
          className="justify-between px-5 py-4 text-left"
          aria-expanded={pricingOpen}
        >
          <span>When do you want to book?</span>
          <Chevron open={pricingOpen} />
        </Button>

        {pricingOpen ? (
          <div className="mt-4 flex flex-col gap-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.window}
                className="flex flex-col gap-4 rounded-[10px] border border-brand p-4 md:flex-row md:items-center md:justify-between md:gap-8"
              >
                <p className="max-w-[617px] text-feature-title font-medium text-[#101828]">
                  {tier.description}
                </p>
                <div className="flex shrink-0 flex-col items-start gap-1 md:items-end">
                  <div className="flex items-center gap-3">
                    <Image src={clockIcon} alt="" width={27} height={27} />
                    <p className="text-card-body font-medium text-black">
                      {tier.window}{" "}
                      {tier.windowNote ? (
                        <span className="text-brand">{tier.windowNote}</span>
                      ) : null}
                    </p>
                  </div>
                  <p className="text-feature-title font-medium text-brand md:text-right">
                    {tier.rateLabel}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Button href="#" color="black" fullWidth className="mt-4">
            Book Now
          </Button>
        )}
      </div>
    </article>
  );
}
