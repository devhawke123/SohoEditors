import Image from "next/image";
import { SCREENSKILLS_VIDEO_TESTIMONIALS } from "@/data/screenskillsFunding";

function PlayIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 72 72"
      className="size-[clamp(2.75rem,5vw,4rem)]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="36" cy="36" r="35" fill="white" fillOpacity="0.92" />
      <path d="M30 24.5L51 36L30 47.5V24.5Z" fill="#101828" />
    </svg>
  );
}

function youtubeThumb(id: string) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

function youtubeWatchUrl(id: string) {
  return `https://www.youtube.com/watch?v=${id}`;
}

export default function ScreenskillsTestimonials() {
  return (
    <section className="page-x section-y">
      <div className="mx-auto flex max-w-wide flex-col items-center gap-8 md:gap-10">
        <div className="flex max-w-[1194px] flex-col items-center gap-5 text-center md:gap-6">
          <h2 className="text-section-title font-bold leading-[1.15]">
            <span className="text-[#f24822]">Client Testimonials: </span>
            <span className="font-display tracking-[-0.5px] text-[#1d1d21]">
              Discover the Soho Editors Training Experience
            </span>
          </h2>
          <p className="max-w-[1030px] text-section-body text-[#404145]">
            Explore what our training clients say about their exceptional
            experiences, from booking to post-delivery satisfaction.
          </p>
        </div>

        <div className="grid w-full gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3 xl:gap-[29px]">
          {SCREENSKILLS_VIDEO_TESTIMONIALS.map((item) => (
            <a
              key={item.youtubeId}
              href={youtubeWatchUrl(item.youtubeId)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch ${item.label} on YouTube`}
              className="group relative aspect-[461/358] overflow-hidden rounded-[15px] bg-[#252928] outline-none ring-offset-2 transition-opacity hover:opacity-95 focus-visible:ring-2 focus-visible:ring-brand"
            >
              <Image
                src={youtubeThumb(item.youtubeId)}
                alt=""
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 461px"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors group-hover:bg-black/35">
                <PlayIcon />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
