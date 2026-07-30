import Image from "next/image";
import iconBook from "@/assets/icons/Group 39384.svg";
import iconPlay from "@/assets/icons/Group 39385.svg";
import iconMonitor from "@/assets/icons/Group 39387.svg";
import iconPeople from "@/assets/icons/Group 39398.svg";

const FORMATS = [
  {
    title: "London Classroom",
    description:
      "Hands-on training in our state-of-the-art London training centre with expert instructors.",
    icon: iconPeople,
  },
  {
    title: "Live Online Classes",
    description:
      "Interactive live sessions with real-time instructor guidance from anywhere.",
    icon: iconMonitor,
  },
  {
    title: "Online Video Tutorials",
    description:
      "Learn at your own pace with comprehensive video tutorials and resources.",
    icon: iconPlay,
  },
  {
    title: "Bespoke Training",
    description:
      "We can tailor any course to your requirements and specific business needs.",
    icon: iconBook,
  },
] as const;

export default function LearningFormats() {
  return (
    <section className="page-x section-y">
      <div className="mx-auto flex max-w-page flex-col items-center gap-10 md:gap-16">
        <div className="flex max-w-[922px] flex-col items-center gap-5 text-center">
          <h2 className="font-display text-section-title font-bold tracking-[-0.5px] text-black">
            Master Post Production —{" "}
            <span className="text-brand">Your Way</span>
          </h2>
          <p className="max-w-content text-section-body tracking-[0.16px] text-[#878787]">
            No matter how you choose to learn, they all cover the same lesson
            plan and are delivered by our amazing Certified Professional
            Trainers, and fully backed by our 100% Satisfaction Guarantee.
          </p>
        </div>

        <div className="grid w-full gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-[15px]">
          {FORMATS.map(({ title, description, icon }) => (
            <article
              key={title}
              className="flex flex-col items-center rounded-[9px] border border-brand px-5 py-10 text-center"
            >
              <Image
                src={icon}
                alt=""
                width={110}
                height={110}
                className="mb-4 size-[clamp(4.5rem,10vw,6.875rem)]"
              />
              <h3 className="text-card-body font-semibold text-[#101828]">
                {title}
              </h3>
              <p className="mt-2 text-card-body font-medium text-text-card">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
