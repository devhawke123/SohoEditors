import type { StaticImageData } from "next/image";
import heroImage from "@/assets/heroImage.jpg";
import ellipse12 from "@/assets/icons/Ellipse 12.svg";
import ellipse13 from "@/assets/icons/Ellipse 13.svg";
import ellipse14 from "@/assets/icons/Ellipse 14.svg";

export type TrainerProfile = {
  /** URL slug / future username key, e.g. john-williams */
  slug: string;
  name: string;
  titles: string;
  availability: string;
  bio: string;
  avatar: StaticImageData;
  softwareLabels: string[];
  expertise: string[];
  /** Extra expertise count shown as "+ N" when tags overflow in the design */
  expertiseOverflow?: number;
  portfolioImage?: StaticImageData;
  portfolioLabel?: string;
};

/**
 * Dummy trainer directory — swap for registered trainer accounts later.
 * Shape mirrors future profile fields: username/slug, photo, software, expertise, portfolio.
 */
export const TRAINER_PROFILES: TrainerProfile[] = [
  {
    slug: "john-williams",
    name: "John Williams",
    titles: "Animator, Compositor",
    availability: "Editor (Offline / Online)",
    bio: "John has 15 years experience working with live action, animation and visual effects. He's worked for clients including: BBC, Sony, Parlophone, Vodafone, Disney, Channel 4 & Working Title and has created music videos for the likes of Coldplay, The Offspring and Radiohead, winning MTV Awards.",
    avatar: ellipse12,
    softwareLabels: ["Pr", "Ae", "Ps", "Av", "Dr", "Fc"],
    expertise: [
      "Branded Content",
      "Commercials",
      "Short Films",
      "Comedy",
      "Music",
    ],
    expertiseOverflow: 6,
    portfolioImage: heroImage,
  },
  {
    slug: "anthony-willis",
    name: "Anthony Willis",
    titles: "Editor, Colourist",
    availability: "Editor (Offline / Online)",
    bio: "Anthony brings a sharp editorial eye and refined colour craft to commercials and branded content, with a focus on rhythm, tone, and story clarity.",
    avatar: ellipse13,
    softwareLabels: ["Pr"],
    expertise: [
      "Branded Content",
      "Commercials",
      "Stage Films",
      "Games",
      "Music",
    ],
  },
  {
    slug: "rory-cantwell",
    name: "Rory Cantwell",
    titles: "Editor",
    availability: "Editor (Offline / Online)",
    bio: "Rory specialises in documentary and drama storytelling, shaping complex rushes into clear, emotional narratives for broadcast and digital platforms.",
    avatar: ellipse14,
    softwareLabels: ["Pr", "Ae", "Av", "Dr"],
    expertise: ["Documentary", "Commercials", "Promos", "Drama", "Music"],
    portfolioImage: heroImage,
    portfolioLabel: "Rory's Editing Showreel",
  },
  {
    slug: "alex-snelling",
    name: "Alex Snelling",
    titles: "Editor, Finishing",
    availability: "Editor (Offline / Online)",
    bio: "Alex works across fashion, cookery, and sport content with a polished finishing workflow and a strong sense of pace for lifestyle programming.",
    avatar: ellipse12,
    softwareLabels: ["Pr", "Ae", "Ps"],
    expertise: ["Branded Content", "Fashion", "Cookery", "Sport", "Music"],
  },
  {
    slug: "mike-butler",
    name: "Mike Butler",
    titles: "Avid Certified Trainer",
    availability: "Editor (Offline / Online)",
    bio: "Mike is an experienced Avid trainer and documentary editor who helps professionals deepen their Media Composer workflows and finishing skills.",
    avatar: ellipse14,
    softwareLabels: ["Av", "Pr", "Ae"],
    expertise: [
      "Training History",
      "Documentaries (2019)",
      "Avid Certified Trainer",
    ],
  },
  {
    slug: "bernard-lyall",
    name: "Bernard Lyall",
    titles: "Editor, Director",
    availability: "Editor (Offline / Online)",
    bio: "Bernard works across documentary, lifestyle, and short-form film, bringing a director's sensibility to every cut.",
    avatar: ellipse12,
    softwareLabels: ["Pr"],
    expertise: [
      "Documentary",
      "Lifestyle / Magazine",
      "Drama",
      "Film",
      "Short Films",
    ],
  },
  {
    slug: "matthew-e",
    name: "Matthew E.",
    titles: "Editor, VFX",
    availability: "Editor (Offline / Online)",
    bio: "Matthew combines editorial craft with visual effects and finishing tools, supporting film-focused pipelines from assembly to delivery.",
    avatar: ellipse13,
    softwareLabels: ["Pr", "Ae", "Ps", "Ai", "Av", "Dr", "Fc", "Id"],
    expertise: ["Film"],
    portfolioImage: heroImage,
    portfolioLabel: "Showreel",
  },
];
