export type BespokeAudience = {
  title: string;
  points: string[];
  icon: "team" | "individual";
};

export type BespokeFeature = {
  title?: string;
  description?: string;
  icon: string;
};

export const BESPOKE_AUDIENCES: BespokeAudience[] = [
  {
    title: "Team Training Solutions:",
    icon: "team",
    points: [
      "Diverse skill levels across the team.",
      "Workflows between multiple applications.",
      "Need comprehensive or overview-style training.",
      "Team Collaboration.",
    ],
  },
  {
    title: "Individual Training Solutions:",
    icon: "individual",
    points: [
      "Crafting a specific project or video.",
      "Learning a particular task or workflow.",
      "Creative and/or technical lessons tailored to a specific application.",
    ],
  },
];

export const BESPOKE_INCLUDES = [
  {
    title: "100% Satisfaction Guarantee",
    description: "Fully backed by our satisfaction guarantee",
  },
  {
    title: "Pay In 3",
    description: "Spread the cost over interest-free payments",
  },
  {
    title: "Adobe Certified",
    description: "All courses are Adobe Certified Professional Training",
  },
] as const;

export const BESPOKE_CLASSROOM: BespokeFeature[] = [
  {
    icon: "classroom",
    title: "Private Classroom Rental: State-of-the-Art Training Rooms!",
    description:
      "Secure exclusive access to our cutting-edge training rooms with private classroom rental.",
  },
  {
    icon: "workstation",
    title: "Workstations Provided: Your Course, Your Station!",
    description:
      "Total convenience with our provided workstations tailored for your course.",
  },
  {
    icon: "team",
    title: "Be In The Room: Train with Immediate Hands-On Assistance!",
    description:
      "Opt for training in the same room as the trainer for instant hands-on assistance. Elevate your learning with Soho Editors.",
  },
];

export const BESPOKE_ONSITE: BespokeFeature[] = [
  {
    icon: "onsite",
    title: "On-Site Training: We Bring the Course to You!",
  },
  {
    icon: "local-machine",
    title: "Your Workstations: Train on Your Machine with Local Settings!",
  },
  {
    icon: "servers",
    title:
      "Your Environment: Seamlessly Integrate Systems and Servers in Your Training!",
  },
];

export const BESPOKE_STYLES: BespokeFeature[] = [
  {
    icon: "anywhere",
    description:
      "Access your course seamlessly from the comfort of your home, office, or anywhere you choose! Unlock flexible learning with Soho Editors.",
  },
  {
    icon: "recording",
    description:
      "Enjoy limitless and perpetual access to your course recording. Elevate your learning with Soho Editors.",
  },
  {
    icon: "checkup",
    description:
      'Benefit from a 1-hour "Check-Up" with your trainer within a month after the course.',
  },
];
