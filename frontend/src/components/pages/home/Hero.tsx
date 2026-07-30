import Image from "next/image";
import heroImage from "@/assets/heroImage.jpg";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="page-x section-y mx-auto max-w-page">
      <div className="flex flex-col items-center gap-block lg:flex-row lg:items-center lg:gap-12">
        <div className="flex max-w-[664px] flex-1 flex-col gap-6 md:gap-8">
          <h1 className="font-display text-hero-title font-bold text-black">
            Unlock Your <span className="text-brand-hot">Creative</span> Potential
          </h1>
          <p className="max-w-[629px] text-hero-body text-text-muted">
            Master Video Editing, Motion Graphics & Animation, Colour Grading,
            Visual Effects, Sound & AI with Soho Editors — trusted industry
            experts in Post Production training.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <Button href="#">Training Courses</Button>
            <Button href="#" variant="outline">
              Watch success Stories
            </Button>
          </div>
        </div>

        <div className="relative aspect-[583/566] w-full max-w-[583px] flex-1 overflow-hidden rounded-[15px]">
          <Image
            src={heroImage}
            alt="Students learning post production at Soho Editors"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 583px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
