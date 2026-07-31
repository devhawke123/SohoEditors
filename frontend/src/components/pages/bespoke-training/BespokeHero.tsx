import Image from "next/image";
import heroImage from "@/assets/heroImage.jpg";

export default function BespokeHero() {
  return (
    <section className="page-x section-y">
      <div className="mx-auto flex max-w-page flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-[45px]">
        <h1 className="max-w-[568px] flex-1 text-[clamp(2rem,4vw+0.5rem,4rem)] font-bold leading-[1.15] text-black">
          <span className="text-brand-hot">Tailored Training Solutions</span>
          <span>: Elevate Your Skills with Bespoke Training!</span>
        </h1>
        <div className="relative aspect-[631/487] w-full max-w-[631px] flex-1 overflow-hidden rounded-[10px]">
          <Image
            src={heroImage}
            alt="Professional editing workstation for bespoke training"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 631px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
