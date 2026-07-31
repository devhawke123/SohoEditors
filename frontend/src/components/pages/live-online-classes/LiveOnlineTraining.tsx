import Image from "next/image";
import Link from "next/link";
import heroImage from "@/assets/heroImage.jpg";

export default function LiveOnlineTraining() {
  return (
    <section className="page-x pb-[clamp(2rem,5vh,3rem)]">
      <div className="mx-auto flex max-w-page flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-[74px]">
        <div className="flex max-w-[591px] flex-1 flex-col gap-6 md:gap-8">
          <h2 className="text-[clamp(2rem,4vw+0.5rem,4rem)] font-bold text-black">
            Training
          </h2>
          <div className="flex flex-col gap-5 text-section-body text-[#404145]">
            <p>
              Courses streamed to your desktop, laptop, tablet or phone. Where
              ever you are in the world, we can now deliver your course from
              whatever your location Unlike other online training suppliers, all
              our courses are live, trainer-lead classes, delivering real-time
              lessons and feedback.
            </p>
            <p>
              Our new platform allows you to attend our courses from anywhere in
              the world, whether it be from your office, your favorite coffee
              shop, or the comfort of your own home.
            </p>
            <p>
              With over 20 years&apos; experience supporting the TV and film
              industry, you can expect the same quality of training as our
              classroom-based courses. Take a look at our{" "}
              <Link
                href="#live-online-classrooms"
                className="underline underline-offset-2 transition-colors hover:text-brand"
              >
                LIVE ONLINE CLASSROOMS here
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="relative aspect-[601/674] w-full max-w-[601px] flex-1 overflow-hidden rounded-[10px] bg-[#f5f5f5]">
          <Image
            src={heroImage}
            alt="Live online training diagram — trainer connected to delegates at coffee shop, office, and home"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 601px"
          />
        </div>
      </div>
    </section>
  );
}
