export type CurriculumTopic = {
  title: string;
  /** Expandable detail — placeholder until CMS/API provides full outlines. */
  detail: string;
};

export type CurriculumDay = {
  title: string;
  topics: CurriculumTopic[];
};

export type Course = {
  slug: string;
  code: string;
  title: string;
  /** Short line under the main title on the detail hero */
  tagline: string;
  duration: string;
  level: string;
  description: string;
  /** Longer body used on the course detail hero */
  detailDescription: string;
  priceFrom: string;
  softwareLabels: string[];
  /** Per-course outline for “What Will Be Covered” */
  curriculum: CurriculumDay[];
  detailsVariant?: "brand" | "black";
  defaultPricingOpen?: boolean;
};

/** Placeholder course data — swap for API/CMS later; UI stays the same. */
export const COURSES: Course[] = [
  {
    slug: "pp100",
    code: "PP100",
    title: "Premiere Pro Quick Start Course",
    tagline: "Unlock Your Creativity with Our Premiere Pro Quick Start Course!",
    duration: "2 day",
    level: "Beginner",
    description:
      "Master Adobe Premiere Pro with Our Live & Online 1-Day Quick Start Training Course! Ideal for beginners, this Adobe Certified Premiere Pro Course covers essential editing skills, image arrangement, audio integration, and title creation.",
    detailDescription:
      "Dive into the world of professional video editing with our Premiere Pro Quick Start Course. Perfect for beginners, this hands-on workshop guides you through essential editing techniques, the Premiere Pro interface, and industry-standard workflows—all in our cutting-edge training center or Live Online.",
    priceFrom: "From £312.20 Live Online Class",
    softwareLabels: ["Pr"],
    detailsVariant: "brand",
    defaultPricingOpen: true,
    curriculum: [
      {
        title: "Day 1: Premiere Pro Quick Start",
        topics: [
          {
            title: "Interface & workspace setup",
            detail:
              "Get comfortable with panels, workspaces, and project settings so you can move quickly from day one.",
          },
          {
            title: "Importing & organising media",
            detail:
              "Bring footage into Premiere Pro, build bins, and keep your project tidy for a smooth edit.",
          },
          {
            title: "Basic timeline editing",
            detail:
              "Cut, trim, and arrange clips on the timeline to build your first sequence.",
          },
          {
            title: "Titles, audio & export",
            detail:
              "Add simple titles, balance audio levels, and export a share-ready deliverable.",
          },
        ],
      },
    ],
  },
  {
    slug: "pp101",
    code: "PP101",
    title: "Introduction to Premiere Pro Course",
    tagline:
      "Unlock Your Creativity with Our 2-Day Premiere Pro Beginners Course!",
    duration: "2 day",
    level: "Beginner",
    description:
      "Unlock Your Creativity with Our 2-Day Premiere Pro Beginners Course! Dive into the world of professional video editing with our 2-day Introduction to Adobe Premiere Pro Course.",
    detailDescription:
      "Dive into the world of professional video editing with our 2-day Introduction to Adobe Premiere Pro Course. Perfect for beginners, this hands-on in-depth workshop guides you through essential editing techniques, the Premiere Pro interface, and industry-standard workflows—all in our cutting-edge training center or Live Online from the comfort of your home or office.",
    priceFrom: "From £312.20 Live Online Class",
    softwareLabels: ["Pr"],
    curriculum: [
      {
        title: "Day 1: Premiere Pro Fundamentals",
        topics: [
          {
            title: "Planning your project",
            detail:
              "Define your story goals, choose the right sequence settings, and set up a project structure that scales.",
          },
          {
            title: "Assembling An Edit",
            detail:
              "Build a rough cut on the timeline, refine pacing, and use essential tools to shape your narrative.",
          },
          {
            title: "Effects",
            detail:
              "Apply transitions, video effects, and basic colour adjustments to polish your sequence.",
          },
          {
            title: "Exporting",
            detail:
              "Choose the right codecs and presets, then export for web, social, or broadcast delivery.",
          },
        ],
      },
      {
        title: "Day 2: Editing Workflows & Finishing",
        topics: [
          {
            title: "Audio mixing basics",
            detail:
              "Balance dialogue, music, and sound effects, and use keyframes for smooth level changes.",
          },
          {
            title: "Colour correction essentials",
            detail:
              "Use Lumetri scopes and basic colour tools to create a consistent look across your edit.",
          },
          {
            title: "Graphics & titles",
            detail:
              "Create lower thirds, end credits, and simple motion graphics inside Premiere Pro.",
          },
          {
            title: "Delivery & review",
            detail:
              "Export review copies, gather feedback, and prepare a final master for handoff.",
          },
        ],
      },
    ],
  },
  {
    slug: "pa101",
    code: "PA101",
    title: "Editing & Effects Essentials Course Bundle",
    tagline: "Unlock Your Creativity with Our Editing & Effects Essentials Bundle!",
    duration: "4 days",
    level: "Beginner",
    description:
      "Unlock Your Creativity with Our 2-Day Premiere Pro Beginners Course! Dive into the world of professional video editing with our 2-day Introduction to Adobe Premiere Pro Course.",
    detailDescription:
      "Dive into professional video editing and motion graphics with our Editing & Effects Essentials Course Bundle. Perfect for beginners, this hands-on workshop covers Premiere Pro and After Effects fundamentals in our training centre or Live Online.",
    priceFrom: "From £581.00 Live Online Class",
    softwareLabels: ["Pr", "Ae"],
    curriculum: [
      {
        title: "Days 1–2: Premiere Pro Essentials",
        topics: [
          {
            title: "Editing fundamentals",
            detail:
              "Learn the Premiere Pro interface, timeline tools, and core cutting techniques.",
          },
          {
            title: "Audio & colour basics",
            detail:
              "Mix simple audio tracks and apply foundational colour correction.",
          },
          {
            title: "Export & handoff",
            detail:
              "Export sequences ready for motion graphics work in After Effects.",
          },
        ],
      },
      {
        title: "Days 3–4: After Effects Essentials",
        topics: [
          {
            title: "Compositing basics",
            detail:
              "Work with layers, masks, and keyframes to build simple motion graphics.",
          },
          {
            title: "Text animation",
            detail:
              "Animate titles and lower thirds that integrate with your Premiere edit.",
          },
          {
            title: "Rendering & Dynamic Link",
            detail:
              "Round-trip projects between Premiere Pro and After Effects efficiently.",
          },
        ],
      },
    ],
  },
  {
    slug: "pp200",
    code: "PP200",
    title: "Intermediate Premiere Pro Course",
    tagline: "Take Your Premiere Pro Skills to the Next Level!",
    duration: "1 day",
    level: "Intermediate",
    description:
      "Available Live & Online or from our state of the art training centre, our 1 day hands on Intermediate Adobe Certified Premiere Pro Training Course gives current Premiere Pro Users new techniques to craft professional quality video better understanding of the Adobe Premiere Pro workflow.",
    detailDescription:
      "Available Live & Online or from our state of the art training centre, our 1 day hands-on Intermediate Adobe Certified Premiere Pro Training Course gives current Premiere Pro users new techniques to craft professional quality video and a better understanding of the Adobe Premiere Pro workflow.",
    priceFrom: "From £161.00 Live Online Class",
    softwareLabels: ["Pr"],
    curriculum: [
      {
        title: "Day 1: Intermediate Techniques",
        topics: [
          {
            title: "Advanced timeline workflows",
            detail:
              "Work faster with nested sequences, markers, and multi-cam editing approaches.",
          },
          {
            title: "Refining audio & effects",
            detail:
              "Use intermediate audio tools and effect stacks for a cleaner, more polished finish.",
          },
          {
            title: "Colour & finishing",
            detail:
              "Push Lumetri further for secondary corrections and consistent looks.",
          },
          {
            title: "Professional delivery",
            detail:
              "Build export presets and QC your deliverables for client handoff.",
          },
        ],
      },
    ],
  },
  {
    slug: "pp102",
    code: "PP102",
    title: "Premiere Pro Course Bundle",
    tagline: "Master Video Editing with Our Premiere Pro Course Bundle!",
    duration: "3 days",
    level: "Beginner",
    description:
      "Master video editing with our 3-day Adobe Certified Beginners Premiere Pro Training Course Bundle.",
    detailDescription:
      "Master video editing with our 3-day Adobe Certified Beginners Premiere Pro Training Course Bundle. Learn essential editing techniques and industry-standard workflows in our training centre or Live Online.",
    priceFrom: "From £449.00 Live Online Class",
    softwareLabels: ["Pr"],
    curriculum: [
      {
        title: "Day 1: Getting Started",
        topics: [
          {
            title: "Project setup & media management",
            detail:
              "Create projects, import media, and organise bins for a reliable edit.",
          },
          {
            title: "Core editing tools",
            detail:
              "Master ripple, roll, slip, and slide edits on the timeline.",
          },
        ],
      },
      {
        title: "Day 2: Building the Story",
        topics: [
          {
            title: "Assembly & pacing",
            detail:
              "Shape a narrative cut and tighten timing for clarity and impact.",
          },
          {
            title: "Titles & simple motion",
            detail:
              "Add graphics and basic animation to support your story.",
          },
        ],
      },
      {
        title: "Day 3: Polish & Deliver",
        topics: [
          {
            title: "Audio & colour polish",
            detail:
              "Finish your mix and apply a cohesive colour pass before export.",
          },
          {
            title: "Export & review workflow",
            detail:
              "Deliver review and master files with the right settings for each platform.",
          },
        ],
      },
    ],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return COURSES.find((course) => course.slug === slug);
}

export function getAllCourseSlugs(): string[] {
  return COURSES.map((course) => course.slug);
}
