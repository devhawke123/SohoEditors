import Image from "next/image";
import checkIcon from "@/assets/icons/course-included/check.svg";

function Check({ show }: { show: boolean }) {
  if (!show) return <span className="inline-block size-6" aria-hidden />;
  return (
    <Image
      src={checkIcon}
      alt="Included"
      width={32}
      height={25}
      className="mx-auto size-6 sm:size-8"
    />
  );
}

const COLUMNS = [
  { title: "Online Video Tutorials", sub: "+VAT" },
  { title: "Live Online Classes", sub: "+VAT" },
  { title: "London Classroom", sub: "+VAT" },
  { title: "Bespoke Training", sub: "Contact Us", subLarge: true },
] as const;

type FeatureRow = {
  label: string;
  checks: [boolean, boolean, boolean, boolean];
  tone: "brand" | "black";
};

const FEATURES: FeatureRow[] = [
  { label: "Manufacturer Certified Course", checks: [true, true, true, true], tone: "brand" },
  { label: "Certified Trainer", checks: [true, true, true, true], tone: "black" },
  { label: "Course Certificate", checks: [true, true, true, true], tone: "brand" },
  { label: "Interest-Free Loans Available", checks: [true, true, true, true], tone: "black" },
  { label: "Fully Interactive Q & A", checks: [false, true, true, true], tone: "brand" },
  { label: "Practice Time with Trainer", checks: [false, true, true, true], tone: "black" },
  { label: "Training Media", checks: [false, true, true, true], tone: "brand" },
  { label: "Pick a Date", checks: [false, true, true, true], tone: "black" },
  { label: "3 Month Telephone & Email Support", checks: [false, true, true, true], tone: "brand" },
  { label: "Learn Remotely", checks: [true, false, true, true], tone: "black" },
  { label: "Private Class", checks: [false, false, false, true], tone: "brand" },
  { label: "Personalised Curriculum", checks: [false, false, false, true], tone: "black" },
  { label: "Follow Up 1 Hour Online Q&A", checks: [false, false, false, true], tone: "brand" },
  { label: "Access to Course Recording", checks: [false, true, false, true], tone: "black" },
];

export default function DeliveryComparison() {
  return (
    <section className="page-x section-y-sm">
      <div className="mx-auto max-w-page overflow-x-auto rounded-[9px] border border-brand p-4 sm:p-8">
        <div className="min-w-[720px]">
          <div className="mb-8 grid grid-cols-[minmax(10rem,1.2fr)_repeat(4,minmax(6rem,1fr))] gap-3">
            <div />
            {COLUMNS.map((col) => (
              <div key={col.title} className="text-center">
                <p className="text-card-body font-semibold text-[#101828]">
                  {col.title}
                </p>
                <p
                  className={`mt-1 font-medium text-text-card ${
                    "subLarge" in col && col.subLarge
                      ? "text-[clamp(1.25rem,2vw,2rem)] font-bold text-black"
                      : "text-card-body"
                  }`}
                >
                  {col.sub}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            {FEATURES.map((row) => (
              <div
                key={row.label}
                className={`grid grid-cols-[minmax(10rem,1.2fr)_repeat(4,minmax(6rem,1fr))] items-center gap-3 rounded-[10px] px-4 py-4 sm:px-5 sm:py-5 ${
                  row.tone === "brand" ? "bg-brand" : "bg-black"
                }`}
              >
                <p className="text-btn font-bold text-white">{row.label}</p>
                {row.checks.map((included, index) => (
                  <div key={index} className="flex justify-center">
                    <Check show={included} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
