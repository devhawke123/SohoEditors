/**
 * Shared software badge — same treatment on listing cards and course hero.
 * Placeholder until real Adobe logos land; swap src/data, keep this shell.
 */
const THEMES: Record<string, { bg: string; text: string }> = {
  Pr: { bg: "bg-[#1c0f3a]", text: "text-[#9b87f5]" },
  Ae: { bg: "bg-[#1a0a1f]", text: "text-[#d4a5ff]" },
  Id: { bg: "bg-[#4a0a1f]", text: "text-[#f5a0c0]" },
};

export default function SoftwareBadge({
  label,
  size = "sm",
}: {
  label: string;
  size?: "sm" | "md" | "lg";
}) {
  const theme = THEMES[label] ?? THEMES.Pr;

  if (size === "lg") {
    return (
      <div
        className={`flex aspect-square w-full max-w-[280px] items-center justify-center rounded-[20px] ${theme.bg} text-[clamp(4rem,12vw,7rem)] font-bold ${theme.text} shadow-lg sm:max-w-[340px]`}
      >
        {label}
      </div>
    );
  }

  if (size === "md") {
    return (
      <div
        className={`flex size-[71px] shrink-0 items-center justify-center rounded-[10px] ${theme.bg} text-[1.75rem] font-bold ${theme.text}`}
      >
        {label}
      </div>
    );
  }

  return (
    <div
      className={`flex size-16 items-center justify-center rounded-xl ${theme.bg} text-2xl font-bold ${theme.text} sm:size-24 sm:text-[2rem]`}
    >
      {label}
    </div>
  );
}
