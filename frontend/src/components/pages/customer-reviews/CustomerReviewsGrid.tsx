import Image from "next/image";
import heroImage from "@/assets/heroImage.jpg";
import {
  CUSTOMER_REVIEWS,
  type CustomerReview,
} from "@/data/customerReviews";

function ReviewCard({ quote, quoted, course }: CustomerReview) {
  return (
    <article className="flex min-h-[335px] flex-col justify-between gap-6 rounded-xl border-2 border-[#3e3e41] bg-[#252928] p-6">
      <p className="text-testimonial-quote text-[#bebec2]">
        {quoted ? (
          <>
            &ldquo;{quote}&rdquo;
          </>
        ) : (
          quote
        )}
      </p>
      <div className="flex items-center gap-4">
        <div className="relative size-12 shrink-0 overflow-hidden rounded-full bg-[#e1edfb]">
          <Image
            src={heroImage}
            alt=""
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <p className="text-nav text-[#bebec2]">{course}</p>
      </div>
    </article>
  );
}

export default function CustomerReviewsGrid() {
  return (
    <section className="page-x pb-[clamp(2.5rem,6vh,4.5rem)]">
      <div className="mx-auto grid max-w-wide gap-[14px] sm:grid-cols-2 sm:gap-5 xl:grid-cols-3 xl:gap-[29px]">
        {CUSTOMER_REVIEWS.map((review, index) => (
          <ReviewCard key={`${review.course}-${index}`} {...review} />
        ))}
      </div>
    </section>
  );
}
