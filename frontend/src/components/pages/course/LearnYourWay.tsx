import Image from "next/image";
import iconBook from "@/assets/icons/Group 39384.svg";
import iconPlay from "@/assets/icons/Group 39385.svg";
import iconMonitor from "@/assets/icons/Group 39387.svg";
import iconPeople from "@/assets/icons/Group 39398.svg";
import Button from "@/components/ui/Button";

const OPTIONS = [
  {
    title: "London Classroom",
    description:
      "Immerse yourself in hands-on learning at our Central London training centre.",
    price: "£416.50",
    meta: ["+VAT", "2-day intensive"],
    availability: "March 25-26, 2025",
    icon: iconPeople,
    cta: "Book Now",
  },
  {
    title: "Live Online Classes",
    description:
      "Join interactive online sessions for real-time learning from any location.",
    price: "£356.30",
    meta: ["+VAT", "2-day intensive"],
    availability: "March 18-19, 2025",
    icon: iconMonitor,
    cta: "Book Now",
  },
  {
    title: "Online Video Tutorials",
    description:
      "Learn at your own pace with comprehensive video tutorials and resources.",
    price: "£345.00",
    meta: ["+VAT", "Self-paced learning"],
    availability: "Available Now",
    icon: iconPlay,
    cta: "Book Now",
  },
  {
    title: "Bespoke Training",
    description:
      "Tailor any course to match your unique requirements for a personalised learning experience.",
    price: "Contact Us",
    meta: ["Fully Customised", "Flexible Scheduling"],
    availability: "Available Now",
    icon: iconBook,
    cta: "Book Now",
  },
] as const;

export default function LearnYourWay() {
  return (
    <section id="book" className="page-x section-y scroll-mt-24">
      <div className="mx-auto flex max-w-page flex-col items-center gap-10 md:gap-14">
        <div className="flex max-w-[897px] flex-col items-center gap-5 text-center">
          <h2 className="font-display text-section-title font-bold tracking-[-0.5px] text-black">
            Learn Premiere Pro <span className="text-brand">Your Way</span>
          </h2>
          <p className="text-section-body tracking-[0.16px] text-[#878787]">
            No matter how you choose to learn, they all cover the same lesson
            plan and are delivered by our amazing Certified Professional
            Trainers, and fully backed by our 100% Satisfaction Guarantee.
          </p>
        </div>

        <div className="grid w-full gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {OPTIONS.map((option) => (
            <article
              key={option.title}
              className="flex flex-col items-center rounded-[9px] border border-brand px-5 py-10 text-center"
            >
              <Image
                src={option.icon}
                alt=""
                width={110}
                height={110}
                className="mb-4 size-[clamp(4.5rem,10vw,6.875rem)]"
              />
              <h3 className="text-card-body font-semibold text-[#101828]">
                {option.title}
              </h3>
              <p className="mt-2 text-card-body font-medium text-text-card">
                {option.description}
              </p>

              <div className="mt-8 flex flex-col items-center gap-1">
                <p className="text-[clamp(1.5rem,2vw,2.0625rem)] font-bold text-black">
                  {option.price}
                </p>
                {option.meta.map((line) => (
                  <p
                    key={line}
                    className="text-card-body font-medium text-text-card"
                  >
                    {line}
                  </p>
                ))}
              </div>

              <p className="mt-6 text-feature-title font-semibold text-brand">
                {option.availability}
              </p>

              <Button href="#" fullWidth className="mt-8">
                {option.cta}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
