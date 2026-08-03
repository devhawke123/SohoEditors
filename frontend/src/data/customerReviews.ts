export type CustomerReview = {
  quote: string;
  /** When true, wrap quote in curly quotation marks in the UI. */
  quoted: boolean;
  course: string;
};

/** Exact copy from Figma node 587:1072 (left → right, top → bottom). */
export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    quote:
      "The best thing about the course was learning the proper process and functionality behind the tools. They were all tools I have used before but understanding them properly was excellent. Expressions were a massive highlight.",
    quoted: true,
    course: "Advanced After Effects",
  },
  {
    quote:
      "The variety of different things we covered. I loved the 3D training with lighting and camera effects.",
    quoted: true,
    course: "Adobe After Effects",
  },
  {
    quote: "Great instruction, really inspirational",
    quoted: false,
    course: "Advanced After Effects",
  },
  {
    quote: "Small class and being able to ask any questions at any time.",
    quoted: false,
    course: "Advanced After Effects",
  },
  {
    quote:
      "Training was easy to understand and follow. I loved the training on 3D and motion tracking",
    quoted: false,
    course: "After Effects Course Bundle",
  },
  {
    quote:
      "Insightful, industry knowledge with a friendly and approachable delivery.",
    quoted: false,
    course: "Premiere Pro Course Introduction",
  },
  {
    quote:
      "Personalized and hands on and in general excellent with the trainer being really helpful.",
    quoted: false,
    course: "Premiere Pro For FCP 7 Users",
  },
  {
    quote:
      "Very hands on, went through a logical structure to learn all the fundamentals of Adobe Premiere Pro.",
    quoted: false,
    course: "Adobe Premiere Pro Introduction Course",
  },
];
