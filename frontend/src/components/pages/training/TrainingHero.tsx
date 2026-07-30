import Image from "next/image";
import heroImage from "@/assets/heroImage.jpg";
import Button from "@/components/ui/Button";

function PlayIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 92 92"
      className="size-[clamp(3.5rem,8vw,5.75rem)]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="46" cy="46" r="45" fill="white" stroke="#101828" strokeWidth="2" />
      <path d="M38 30.5L64 46L38 61.5V30.5Z" fill="#101828" />
    </svg>
  );
}

export default function TrainingHero() {
  return (
    <section className="page-x section-y mx-auto max-w-page">
      <div className="flex flex-col items-center gap-block lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
        <div className="flex max-w-[591px] flex-1 flex-col gap-8">
          <p className="text-hero-body text-text-muted">
            Unlock your creative potential with 50+ premier post-production
            courses at Soho Editors, the trusted name in certified training.
            Master industry-leading tools from Adobe, Apple, Avid, Boris FX,
            Blackmagic Design, and Maxon, and learn directly from certified
            professionals who bring real-world experience into every lesson.
          </p>
          <Button href="#" className="max-w-full">
            Reserve Your Place Today
          </Button>
        </div>

        <div className="relative aspect-[601/352] w-full max-w-[601px] flex-1 overflow-hidden rounded-[10px]">
          <Image
            src={heroImage}
            alt="Soho Editors live online classrooms"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 601px"
            priority
          />
          <button
            type="button"
            aria-label="Play video"
            className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors hover:bg-black/35"
          >
            <PlayIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
