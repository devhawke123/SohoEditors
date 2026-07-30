import Image from "next/image";
import iconCertificate from "@/assets/icons/course-included/certificate.svg";
import iconFiles from "@/assets/icons/course-included/files.svg";
import iconManual from "@/assets/icons/course-included/manual.svg";
import iconNotesA from "@/assets/icons/course-included/notes-a.svg";
import iconNotesB from "@/assets/icons/course-included/notes-b.svg";
import iconPractice from "@/assets/icons/course-included/practice.svg";
import iconVideo from "@/assets/icons/course-included/video.svg";

const INCLUDED = [
  {
    title: "Comprehensive Manual",
    subtitle: "Detailed course materials",
    icon: "manual" as const,
  },
  {
    title: "Certificate",
    subtitle: "Upon completion",
    icon: "cert" as const,
  },
  {
    title: "Hands-on Practice",
    subtitle: "Real-world projects",
    icon: "practice" as const,
  },
  {
    title: "Video Tutorials",
    subtitle: "Supporting content",
    icon: "video" as const,
  },
  {
    title: "Course Notes",
    subtitle: "Downloadable PDFs",
    icon: "notes" as const,
  },
  {
    title: "Practice Files",
    subtitle: "Sample footage",
    icon: "files" as const,
  },
];

function IncludedIcon({ type }: { type: (typeof INCLUDED)[number]["icon"] }) {
  if (type === "manual") {
    return (
      <Image src={iconManual} alt="" width={36} height={36} className="size-9" />
    );
  }
  if (type === "cert") {
    return (
      <Image
        src={iconCertificate}
        alt=""
        width={37}
        height={33}
        className="h-[33px] w-[37px]"
      />
    );
  }
  if (type === "practice") {
    return (
      <Image
        src={iconPractice}
        alt=""
        width={30}
        height={30}
        className="size-[30px]"
      />
    );
  }
  if (type === "video") {
    return (
      <Image src={iconVideo} alt="" width={42} height={25} className="h-[25px] w-[42px]" />
    );
  }
  if (type === "notes") {
    return (
      <span className="relative inline-block size-9">
        <Image
          src={iconNotesA}
          alt=""
          width={32}
          height={32}
          className="absolute left-0 top-0 size-8"
        />
        <Image
          src={iconNotesB}
          alt=""
          width={28}
          height={28}
          className="absolute bottom-0 right-0 size-7"
        />
      </span>
    );
  }
  return (
    <Image src={iconFiles} alt="" width={42} height={39} className="h-[39px] w-[42px]" />
  );
}

export default function WhatsIncluded() {
  return (
    <section className="page-x section-y">
      <div className="mx-auto flex max-w-page flex-col items-center gap-10">
        <h2 className="text-center font-display text-section-title font-bold text-black">
          What&apos;s Included
        </h2>
        <div className="grid w-full max-w-[989px] gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INCLUDED.map((item) => (
            <article
              key={item.title}
              className="flex flex-col items-center rounded-[20px] bg-white p-8 text-center shadow-[8px_8px_16px_rgba(0,0,0,0.1)]"
            >
              <IncludedIcon type={item.icon} />
              <h3 className="mt-4 text-feature-title font-bold text-black">
                {item.title}
              </h3>
              <p className="mt-1 text-card-body font-medium text-text-card">
                {item.subtitle}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
