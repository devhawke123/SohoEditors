import Image from "next/image";
import heroImage from "@/assets/heroImage.jpg";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The Advanced Video Editing course completely transformed my career. Within 3 months of completion, I landed my dream job at Netflix. The instructors are world-class and the hands-on projects were invaluable.",
    name: "Priya Sharma",
    role: "Senior Video Editor",
  },
  {
    quote:
      "I went from being a complete beginner to leading a team of editors. The Colour Grading Masterclass gave me skills that set me apart from the competition. Best investment I've ever made.",
    name: "Rahul Mehta",
    role: "Creative Director",
  },
  {
    quote:
      "Started my freelance career right after completing the Photo Editing course. Now I'm fully booked 6 months in advance and charging premium rates. The business modules were a game-changer.",
    name: "Anjali Verma",
    role: "Freelance Editor",
  },
  {
    quote:
      "Finding and booking the course was easy, and Leoline was receptive and communicative around needed changes. The course leader was really friendly, supportive and dealt well with the hybrid in-person and online training.",
    name: "Jamie Banks",
    role: "Senior Video Editor",
  },
  {
    quote:
      "Very knowledgeable trainer, he answered all our questions and went the extra mile to accommodate all the students. Great instruction, really inspirational",
    name: "Rahul Mehta",
    role: "Advanced After Effects",
  },
  {
    quote:
      "The course leader was friendly, knowledgeable, and handled both in-person and remote students seamlessly. I was a bit nervous at first, but they made learning feel approachable and even fun. I'd highly recommend Soho Editors for anyone looking to upskill professionally.",
    name: "Anjali Verma",
    role: "Freelance Editor",
  },
];

function TestimonialCard({ quote, name, role }: Testimonial) {
  return (
    <article className="flex h-full flex-col gap-6 rounded-xl border-2 border-[#3e3e41] bg-[#252928] p-card sm:gap-8 sm:p-6">
      <p className="flex-1 text-testimonial-quote text-[#bebec2]">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-4">
        <div className="relative size-12 shrink-0 overflow-hidden rounded-full">
          <Image
            src={heroImage}
            alt=""
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div>
          <p className="text-nav font-bold text-[#bebec2]">{name}</p>
          <p className="mt-1 text-nav text-[#bebec2]">{role}</p>
        </div>
      </div>
    </article>
  );
}

export default function SuccessStories() {
  return (
    <section className="page-x section-y">
      <div className="mx-auto flex max-w-wide flex-col items-center gap-8">
        <div className="flex max-w-content flex-col items-center gap-3 text-center">
          <p className="text-section-label font-bold tracking-[1.8px] text-brand uppercase">
            Success Stories
          </p>
          <h2 className="font-display text-section-title font-bold tracking-[-0.5px] text-heading">
            Real Results from Professionals
          </h2>
          <p className="max-w-narrow text-section-body tracking-[0.16px] text-[#878787]">
            Don&apos;t just take our word for it. See how our training has
            transformed careers and opened new opportunities for thousands of
            professionals.
          </p>
        </div>

        <div className="grid w-full gap-6 md:grid-cols-2 xl:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <TestimonialCard key={`${item.name}-${index}`} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
