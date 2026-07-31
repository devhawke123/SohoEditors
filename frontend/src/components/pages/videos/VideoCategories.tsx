import Button from "@/components/ui/Button";

type VideoCategory = {
  id: string;
  title: string;
  href?: string;
};

/** Placeholder categories — swap media/links for real videos later. */
const CATEGORIES: VideoCategory[] = [
  { id: "how-to", title: "Free How To Videos" },
  { id: "webinars", title: "Free Webinars" },
];

function VideoPlaceholder({ title, href = "#" }: { title: string; href?: string }) {
  return (
    <div className="flex w-full flex-col gap-6 md:gap-8">
      <h2 className="font-display text-[clamp(1.75rem,3vw+0.5rem,3rem)] font-bold text-white">
        {title}
      </h2>

      {/* Video slot — replace this block with an embed / player when ready */}
      <div className="relative aspect-[1175/658] w-full overflow-hidden rounded-[50px] bg-[#5b7fa8]">
        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
          <span className="rounded-full bg-white/90 px-5 py-3 text-btn font-bold text-[#101828]">
            Video placeholder
          </span>
        </div>
      </div>

      <div className="flex justify-center">
        <Button
          href={href}
          color="white"
          textColor="text-[#a888b5]"
          weight="bold"
          className="min-w-[252px] font-extrabold"
        >
          Watch Now
        </Button>
      </div>
    </div>
  );
}

export default function VideoCategories() {
  return (
    <section className="bg-[rgba(255,123,95,0.76)]">
      <div className="page-x section-y mx-auto flex max-w-[1175px] flex-col gap-16 md:gap-24">
        {CATEGORIES.map((category) => (
          <VideoPlaceholder
            key={category.id}
            title={category.title}
            href={category.href}
          />
        ))}
      </div>
    </section>
  );
}
