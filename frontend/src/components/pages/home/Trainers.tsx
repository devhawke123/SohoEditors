import Image from "next/image";
import heroImage from "@/assets/heroImage.jpg";
import Button from "@/components/ui/Button";

type Trainer = {
  name: string;
  role: string;
  bio: string;
  highlights: string[];
};

const TRAINERS: Trainer[] = [
  {
    name: "Alex Thompson",
    role: "Senior Editor at Marvel Studios",
    bio: "Award-winning editor who worked on major blockbusters including Avengers and Spider-Man franchises.",
    highlights: [
      "Emmy Award Winner",
      "Marvel Studios Senior Editor",
      "20+ Major Films",
    ],
  },
  {
    name: "Sofia Garcia",
    role: "Creative Director at Netflix",
    bio: "Leading colourist behind Netflix's most popular series, specialising in mood and atmosphere creation.",
    highlights: [
      "Netflix Original Series Lead",
      "ASC Associate Member",
      "50+ TV Shows",
    ],
  },
  {
    name: "Marcus Johnson",
    role: "Adobe Certified Master Instructor",
    bio: "Adobe's youngest master instructor, known for innovative techniques and creative problem-solving approaches.",
    highlights: [
      "Adobe Master Instructor",
      "Photoshop World Speaker",
      "100+ Tutorials",
    ],
  },
];

function TrainerCard({ name, role, bio, highlights }: Trainer) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[10px] border border-brand bg-white">
      <div className="relative aspect-[446/256] w-full">
        <Image
          src={heroImage}
          alt={name}
          fill
          className="rounded-t-[10px] object-cover"
          sizes="(max-width: 1024px) 100vw, 448px"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-card pt-4">
        <div>
          <h3 className="text-feature-title font-bold text-[#101828]">{name}</h3>
          <p className="mt-1 text-card-body font-medium text-[#101828]">{role}</p>
        </div>
        <p className="text-card-body font-medium text-text-card">{bio}</p>
        <ol className="list-decimal space-y-2 pl-6 text-card-body font-medium text-text-card">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>

        <div className="mt-auto border-t border-black/10 pt-4">
          <Button href="#" fullWidth>
            View Courses
          </Button>
        </div>
      </div>
    </article>
  );
}

export default function Trainers() {
  return (
    <section className="page-x section-y">
      <div className="mx-auto flex max-w-page flex-col items-center gap-8">
        <div className="flex max-w-content flex-col items-center gap-3 text-center">
          <p className="text-section-label font-bold tracking-[1.8px] text-brand uppercase">
            Expert Professional Trainers
          </p>
          <h2 className="font-display text-section-title font-bold tracking-[-0.5px] text-heading">
            Learn from Industry Professionals
          </h2>
          <p className="max-w-narrow text-section-body tracking-[0.16px] text-[#878787]">
            Our trainers aren&apos;t just instructors—they&apos;re active
            professionals working at the world&apos;s leading studios and
            agencies.
          </p>
        </div>

        <div className="grid w-full gap-6 md:grid-cols-2 xl:grid-cols-3">
          {TRAINERS.map((trainer) => (
            <TrainerCard key={trainer.name} {...trainer} />
          ))}
        </div>
      </div>
    </section>
  );
}
