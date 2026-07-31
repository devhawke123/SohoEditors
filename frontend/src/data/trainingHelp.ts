export type HelpFaqItem = {
  id: string;
  question: string;
  /** Rich answer blocks — placeholder copy for items without Figma body yet. */
  answer: HelpAnswerBlock[];
};

export type HelpAnswerBlock = {
  type: "paragraph";
  text: string;
  /** Bold lead-in word(s), e.g. "Firstly" */
  lead?: string;
};

/** FAQ list from Figma training help page — swap answers for final copy later. */
export const TRAINING_HELP_FAQS: HelpFaqItem[] = [
  {
    id: "why-soho",
    question: "Why Soho Editors Training?",
    answer: [
      {
        type: "paragraph",
        lead: "Firstly",
        text: ", we are long established as part of the post-production industry, and therefore have an excellent understanding of the market, and the skills that post-production professionals need to have. We are not purely a training company, with other divisions of the group having a huge presence in the industry.",
      },
      {
        type: "paragraph",
        lead: "Secondly",
        text: ", unlike a lot of our competitors that provide training to the post-production industry, many of the courses we run are fully approved and certified, and will give you a recognised qualification if you pass the exam (more on this later).",
      },
      {
        type: "paragraph",
        text: "We do not do general training – our courses are all industry specific, and we are experts in this field.",
      },
      {
        type: "paragraph",
        lead: "Thirdly",
        text: ", our classrooms are based in central London, plus you can also take all our courses live and online from wherever you want.",
      },
      {
        type: "paragraph",
        lead: "Fourthly",
        text: ", the team here is friendly, helpful, efficient, understanding, flexible and approachable, and the trainers, as well as being all of the above, are fully qualified and certified, and all have significant industry experience and kudos as editors / talent in their own right.",
      },
    ],
  },
  {
    id: "training-quality",
    question: "How do I know your training's any good?",
    answer: [
      {
        type: "paragraph",
        text: "Placeholder answer — replace with final Training Help copy. Our courses are manufacturer-certified and delivered by industry professionals.",
      },
    ],
  },
  {
    id: "purely-training",
    question: "Is Soho Editors purely a training company?",
    answer: [
      {
        type: "paragraph",
        text: "Placeholder answer — replace with final Training Help copy. Soho Editors is part of a wider post-production group with deep industry presence.",
      },
    ],
  },
  {
    id: "benefit",
    question: "How would doing a course with you benefit me?",
    answer: [
      {
        type: "paragraph",
        text: "Placeholder answer — replace with final Training Help copy. You'll gain practical skills, recognised certification, and support from experienced trainers.",
      },
    ],
  },
  {
    id: "guarantee-work",
    question: "Will Manufacturer certification guarantee me work?",
    answer: [
      {
        type: "paragraph",
        text: "Placeholder answer — replace with final Training Help copy. Certification strengthens your CV but does not guarantee employment.",
      },
    ],
  },
  {
    id: "fail-exam",
    question: "What happens if I don't pass the exam?",
    answer: [
      {
        type: "paragraph",
        text: "Placeholder answer — replace with final Training Help copy. We'll explain retake options and how support works after the course.",
      },
    ],
  },
  {
    id: "exam-only",
    question: "What if I just want to take the exam? Can I do it at home?",
    answer: [
      {
        type: "paragraph",
        text: "Placeholder answer — replace with final Training Help copy. Exam format and location depend on the manufacturer programme.",
      },
    ],
  },
  {
    id: "level-diff",
    question:
      "What's the difference between Level One and Level Two certification?",
    answer: [
      {
        type: "paragraph",
        text: "Placeholder answer — replace with final Training Help copy. Levels reflect progressive skill depth within manufacturer pathways.",
      },
    ],
  },
  {
    id: "class-size",
    question: "How many other people will be on the course with me?",
    answer: [
      {
        type: "paragraph",
        text: "Placeholder answer — replace with final Training Help copy. Class sizes are kept small so every learner gets trainer attention.",
      },
    ],
  },
  {
    id: "premises",
    question: "Do I have to do the training at your premises?",
    answer: [
      {
        type: "paragraph",
        text: "Placeholder answer — replace with final Training Help copy. You can train in our London classrooms or live online.",
      },
    ],
  },
  {
    id: "team-training",
    question:
      "I employ several people, and would like to have them all trained up on a number of applications, with training support afterwards – can you help?",
    answer: [
      {
        type: "paragraph",
        text: "Placeholder answer — replace with final Training Help copy. Yes — we offer bespoke and multi-seat training packages with ongoing support.",
      },
    ],
  },
  {
    id: "unscheduled",
    question: "I don't see a particular course scheduled – do you train on it?",
    answer: [
      {
        type: "paragraph",
        text: "Placeholder answer — replace with final Training Help copy. Contact us — we can often schedule private or upcoming public dates.",
      },
    ],
  },
  {
    id: "prerequisites",
    question:
      "Are there any pre-requisites for going on a course with Soho Editors Training?",
    answer: [
      {
        type: "paragraph",
        text: "Placeholder answer — replace with final Training Help copy. Prerequisites vary by course level and are listed on each course page.",
      },
    ],
  },
  {
    id: "cost",
    question: "How much do your courses cost?",
    answer: [
      {
        type: "paragraph",
        text: "Placeholder answer — replace with final Training Help copy. Prices depend on format and booking window — see each course for current rates.",
      },
    ],
  },
  {
    id: "included",
    question: "What's included in the cost?",
    answer: [
      {
        type: "paragraph",
        text: "Placeholder answer — replace with final Training Help copy. Typically manuals, practice media, certificate eligibility, and trainer support.",
      },
    ],
  },
  {
    id: "pay",
    question: "How can I pay?",
    answer: [
      {
        type: "paragraph",
        text: "Placeholder answer — replace with final Training Help copy. We accept card and PayPal, including Pay in 3 where available.",
      },
    ],
  },
  {
    id: "funding",
    question: "How can I apply for funding or part funding for my training?",
    answer: [
      {
        type: "paragraph",
        text: "Placeholder answer — replace with final Training Help copy. See our ScreenSkills and funding guides, or contact the team for advice.",
      },
    ],
  },
  {
    id: "multi-course-discount",
    question:
      "I want to book several training courses with you – do I have to pay full price for them all?",
    answer: [
      {
        type: "paragraph",
        text: "Placeholder answer — replace with final Training Help copy. Bundles and multi-course discounts are often available — ask us.",
      },
    ],
  },
  {
    id: "colleague-discount",
    question:
      "My colleague and I would both like to book places on the same course – do we both have to pay full price?",
    answer: [
      {
        type: "paragraph",
        text: "Placeholder answer — replace with final Training Help copy. Multi-seat bookings may qualify for reduced rates.",
      },
    ],
  },
  {
    id: "pencil",
    question: "Can I reserve a place on a course without incurring any cost?",
    answer: [
      {
        type: "paragraph",
        text: "Placeholder answer — replace with final Training Help copy. Pencil Me In lets you hold interest without full payment until confirmed.",
      },
    ],
  },
  {
    id: "cancel",
    question: "What if I confirm my place and then have to cancel it?",
    answer: [
      {
        type: "paragraph",
        text: "Placeholder answer — replace with final Training Help copy. Cancellation terms are in our booking terms and conditions.",
      },
    ],
  },
  {
    id: "accommodation",
    question:
      "Can you help with my accommodation whilst I'm training with you?",
    answer: [
      {
        type: "paragraph",
        text: "Placeholder answer — replace with final Training Help copy. We can share nearby accommodation suggestions for London training.",
      },
    ],
  },
  {
    id: "disabled-access",
    question: "Does the training centre have disabled access?",
    answer: [
      {
        type: "paragraph",
        text: "Placeholder answer — replace with final Training Help copy. Contact us about access requirements so we can support your visit.",
      },
    ],
  },
  {
    id: "busy-facility",
    question:
      "I run a facility, and want to get some of my editors trained by you. Problem is that we're very busy, so there is no time for them to get trained, either here on site or at your premises. What would you suggest?",
    answer: [
      {
        type: "paragraph",
        text: "Placeholder answer — replace with final Training Help copy. Flexible live-online and bespoke schedules can fit around production peaks.",
      },
    ],
  },
];
