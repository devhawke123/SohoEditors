import Image from "next/image";
import heroImage from "@/assets/heroImage.jpg";

function PlayIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 92 92"
      className="size-[clamp(3.5rem,8vw,5.75rem)]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="46"
        cy="46"
        r="45"
        fill="white"
        stroke="#101828"
        strokeWidth="2"
      />
      <path d="M38 30.5L64 46L38 61.5V30.5Z" fill="#101828" />
    </svg>
  );
}

export default function LiveOnlineHero() {
  return (
    <section className="page-x section-y">
      <div className="mx-auto flex max-w-page flex-col items-center gap-[clamp(2rem,5vh,4.2rem)]">
        <div className="flex w-full max-w-[1264px] flex-col items-center gap-4 text-center md:gap-5">
          <h1 className="font-display text-hero-title font-bold text-black">
            Live Online Training Classes and Support
          </h1>
          <p className="max-w-[846px] text-section-body text-[#404145]">
            Live Online Training Courses with Soho Editors from Soho Editors on
            Vimeo.
          </p>
        </div>

        {/* Vimeo slot — swap placeholder for embed when ready */}
        <div
          id="live-online-classrooms"
          className="relative aspect-[1304/740] w-full overflow-hidden rounded-[50px] bg-[#1a1a1a]"
        >
          <Image
            src={heroImage}
            alt="Soho Editors live online classrooms"
            fill
            className="object-cover"
            sizes="(max-width: 1400px) 100vw, 1304px"
            priority
          />
          <a
            href="https://vimeo.com/sohoeditors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch Live Online Training Courses on Vimeo"
            className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/40"
          >
            <PlayIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
