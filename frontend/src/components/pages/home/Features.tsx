import Image from "next/image";
import iconCertification from "@/assets/icons/Group 39265.svg";
import iconSupport from "@/assets/icons/Group 39266.svg";
import iconFastTrack from "@/assets/icons/Group 39264.svg";

const FEATURES = [
  {
    title: "Industry Certification",
    description: "Recognised by the world's leading software manufacturers",
    icon: iconCertification,
  },
  {
    title: "Expert Support",
    description: "1:1 Guidance with Industry Professionals.",
    icon: iconSupport,
  },
  {
    title: "Fast-Track Training",
    description: "Go from Zero to Pro in 5 Days!",
    icon: iconFastTrack,
  },
] as const;

export default function Features() {
  return (
    <section className="page-x section-y-sm bg-white">
      <div className="mx-auto grid max-w-page gap-10 md:grid-cols-3 md:gap-8">
        {FEATURES.map(({ title, description, icon }) => (
          <div
            key={title}
            className="mx-auto flex max-w-[371px] flex-col items-center gap-5 text-center"
          >
            <Image
              src={icon}
              alt=""
              width={82}
              height={78}
              className="h-auto w-[clamp(3.5rem,8vw,5.125rem)]"
            />
            <div className="flex flex-col gap-2.5">
              <h2 className="text-feature-title font-bold text-[#101828]">
                {title}
              </h2>
              <p className="text-feature-body text-text-subtle">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
