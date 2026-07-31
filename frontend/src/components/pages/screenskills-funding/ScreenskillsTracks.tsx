import Image from "next/image";
import heroImage from "@/assets/heroImage.jpg";
import Button from "@/components/ui/Button";
import { SCREENSKILLS_TRACKS } from "@/data/screenskillsFunding";

export default function ScreenskillsTracks() {
  return (
    <section className="page-x pb-[clamp(2.5rem,6vh,4.5rem)]">
      <div className="mx-auto flex max-w-page flex-col gap-[clamp(2.5rem,6vh,4.5rem)]">
        {SCREENSKILLS_TRACKS.map((track) => {
          const image = (
            <div className="relative aspect-[601/332] w-full max-w-[601px] flex-1 overflow-hidden rounded-[10px]">
              <Image
                src={heroImage}
                alt={`${track.title} — AI Shift course`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 601px"
              />
            </div>
          );

          const copy = (
            <div className="flex max-w-[591px] flex-1 flex-col gap-6">
              <h3 className="text-[clamp(1.75rem,3vw+0.5rem,3.375rem)] font-bold text-black">
                {track.title}
              </h3>
              <p className="text-section-body text-[#404145]">
                {track.description}
              </p>
              <Button
                href={track.href}
                textSize="sm"
                weight="medium"
                className="w-fit rounded-md px-5 py-3.5 text-[17px]"
              >
                Find out more
              </Button>
            </div>
          );

          return (
            <div
              key={track.title}
              className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-[84px]"
            >
              {track.imageSide === "left" ? (
                <>
                  {image}
                  {copy}
                </>
              ) : (
                <>
                  {copy}
                  {image}
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
