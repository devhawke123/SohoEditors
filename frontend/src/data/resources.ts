export type Resource = {
  id: string;
  title: string;
  uploadedAt: string;
  href?: string;
};

/** Placeholder resources — swap for API/CMS docs later. */
export const RESOURCES: Resource[] = [
  {
    id: "davinci-17-manual",
    title: "DaVinci Resolve 17 Manual",
    uploadedAt: "15th February, 2021",
  },
  {
    id: "davinci-16-beginners",
    title: "DaVinci Resolve 16 Beginners Guide",
    uploadedAt: "25th January, 2021",
  },
  {
    id: "davinci-16-colour",
    title: "DaVinci Resolve 16 Colour Correction Manual",
    uploadedAt: "25th January, 2021",
  },
  {
    id: "davinci-16-fairlight",
    title: "DaVinci Resolve 16 Fairlight Audio Post Manual",
    uploadedAt: "25th January, 2021",
  },
  {
    id: "davinci-16-fusion",
    title: "DaVinci Resolve 16 Fusion Visual Effects Manual",
    uploadedAt: "25th January, 2021",
  },
  {
    id: "avid-shortcuts",
    title: "Avid Keyboard Shortcuts",
    uploadedAt: "24th August, 2020",
  },
  {
    id: "fcpx-prep",
    title: "Final Cut Pro X Prep Guide",
    uploadedAt: "4th February, 2019",
  },
  {
    id: "fcpx-shortcuts",
    title: "Final Cut Pro X Keyboard Shortcuts",
    uploadedAt: "7th August, 2018",
  },
  {
    id: "c4d-shortcuts",
    title: "Cinema 4D Keyboard Shortcuts",
    uploadedAt: "7th August, 2018",
  },
  {
    id: "illustrator-shortcuts",
    title: "Illustrator Keyboard Shortcuts",
    uploadedAt: "7th August, 2018",
  },
  {
    id: "photoshop-shortcuts",
    title: "Photoshop Keyboard Shortcuts",
    uploadedAt: "7th August, 2018",
  },
  {
    id: "premiere-shortcuts",
    title: "Premiere Pro Keyboard Shortcuts",
    uploadedAt: "7th August, 2018",
  },
  {
    id: "ae-shortcuts",
    title: "After Effects Keyboard Shortcuts",
    uploadedAt: "7th August, 2018",
  },
];
