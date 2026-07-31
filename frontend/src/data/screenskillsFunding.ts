export type ScreenskillsTrack = {
  title: string;
  description: string;
  href: string;
  imageSide: "left" | "right";
};

export const SCREENSKILLS_TRACKS: ScreenskillsTrack[] = [
  {
    title: "For Editorial Talent",
    description:
      "Streamline workflows, master content automation, localisation, editorial efficiency, and broadcaster compliance.",
    href: "#",
    imageSide: "right",
  },
  {
    title: "For VFX Talent",
    description:
      "Explore AI-assisted creation, generative imagery, compositing, and the ethical use of AI in visual effects pipelines.",
    href: "#",
    imageSide: "left",
  },
];

export type VideoTestimonial = {
  youtubeId: string;
  label: string;
};

/** Left-to-right, top-to-bottom — first → last per Figma order. */
export const SCREENSKILLS_VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  { youtubeId: "__k0L7Ol22c", label: "Client testimonial video 1" },
  { youtubeId: "ngSQyTxtiLY", label: "Client testimonial video 2" },
  { youtubeId: "EpknJ8mQWHE", label: "Client testimonial video 3" },
  { youtubeId: "wAqEUosMM8k", label: "Client testimonial video 4" },
  { youtubeId: "UJe9T6ZxnEU", label: "Client testimonial video 5" },
  { youtubeId: "Jawzxklo3yY", label: "Client testimonial video 6" },
];
