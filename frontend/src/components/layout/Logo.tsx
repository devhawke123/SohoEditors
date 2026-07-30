import Link from "next/link";

type LogoProps = {
  /** `light` = dark text (navbar). `dark` = white text (footer). */
  variant?: "light" | "dark";
  className?: string;
};

export default function Logo({ variant = "light", className = "" }: LogoProps) {
  const sohoColor = variant === "dark" ? "text-white" : "text-black";

  return (
    <Link href="/" className={`shrink-0 leading-none ${className}`}>
      <span
        className={`block font-display text-[clamp(1.125rem,1.2vw+0.6rem,1.375rem)] font-bold tracking-[0.08em] uppercase ${sohoColor}`}
      >
        SOHO
      </span>
      <span className="block font-display text-[clamp(0.9375rem,1vw+0.5rem,1.125rem)] font-bold tracking-[0.04em] text-brand">
        eDITORS
      </span>
    </Link>
  );
}
