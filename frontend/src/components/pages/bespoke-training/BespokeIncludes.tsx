import Link from "next/link";
import { BESPOKE_INCLUDES } from "@/data/bespokeTraining";

export default function BespokeIncludes() {
  return (
    <section className="section-y pt-0">
      <div className="mx-auto flex max-w-wide flex-col items-center gap-4">
        <h2 className="page-x text-center text-[clamp(1.5rem,2vw+0.75rem,2.25rem)] font-extrabold leading-[1.5]">
          <span className="text-brand">Bespoke </span>
          <span className="text-black">Training Includes</span>
        </h2>

        <div className="flex w-full flex-col items-center justify-center gap-8 bg-brand px-[clamp(1.5rem,6vw,4.25rem)] py-[clamp(1.75rem,4vh,2.375rem)] md:flex-row md:gap-12 lg:gap-[clamp(3rem,10vw,12rem)]">
          {BESPOKE_INCLUDES.map((item) => (
            <div
              key={item.title}
              className="flex max-w-[336px] flex-col items-center gap-2 text-center"
            >
              <p className="text-[clamp(1rem,0.8vw+0.7rem,1.25rem)] font-bold text-white">
                {item.title}
              </p>
              <p className="text-[clamp(1rem,1vw+0.5rem,1.5rem)] font-normal leading-normal text-[#f5f5f5]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <p className="page-x max-w-content text-center text-[clamp(0.875rem,0.6vw+0.6rem,1.125rem)] font-bold tracking-[1.8px] text-black uppercase">
          Explore Options and Kickstart Your Bespoke Training Course.{" "}
          <Link href="#" className="underline underline-offset-2 hover:opacity-80">
            Contact Us Today!
          </Link>
        </p>
      </div>
    </section>
  );
}
