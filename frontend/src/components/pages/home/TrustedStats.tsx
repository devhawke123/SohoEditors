import Image from "next/image";
import ellipse12 from "@/assets/icons/Ellipse 12.svg";
import ellipse13 from "@/assets/icons/Ellipse 13.svg";
import ellipse14 from "@/assets/icons/Ellipse 14.svg";

const STATS = [
  {
    icon: ellipse12,
    value: "50,000+",
    label: "Professionals Trained",
    sub: "Professional Worldwide",
  },
  {
    icon: ellipse13,
    value: "95%",
    label: "Success Rate",
    sub: "Career advancement",
  },
  {
    icon: ellipse14,
    value: "900+",
    label: "Course Hours",
    sub: "Premium content",
  },
] as const;

export default function TrustedStats() {
  return (
    <section className="page-x section-y bg-brand">
      <div className="mx-auto flex max-w-wide flex-col items-center gap-6 md:gap-8">
        <div className="flex max-w-content flex-col items-center gap-4 text-center">
          <h2 className="font-display text-section-title font-bold text-white">
            Trusted by Industry Leaders
          </h2>
          <p className="text-section-body font-medium text-[#dce9fd]">
            Develop hands-on expertise in industry-standard post-production
            techniques and workflows used across professional film and media
            production.
          </p>
        </div>

        <div className="grid w-full gap-6 md:grid-cols-3">
          {STATS.map(({ icon, value, label, sub }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center rounded-[9px] border border-white bg-white/20 px-6 py-8 backdrop-blur-[15px] sm:px-8 sm:py-10"
            >
              <Image
                src={icon}
                alt=""
                width={104}
                height={104}
                className="mb-5 size-[clamp(4rem,10vw,6.5rem)] rounded-full object-cover"
              />
              <p className="text-center text-stat-value font-bold text-white">
                {value}
              </p>
              <p className="mt-1 text-center text-stat-label font-bold text-white">
                {label}
              </p>
              <p className="mt-1 text-center text-stat-sub font-medium text-[#dce9fd]">
                {sub}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-section-body font-medium text-white">
          Join the community of successful professionals
        </p>
      </div>
    </section>
  );
}
