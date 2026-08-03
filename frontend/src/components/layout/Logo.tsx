import Image from "next/image";
import Link from "next/link";
import darkLogo from "@/assets/dark-logo.png";
import lightLogo from "@/assets/light-logo.png";

type LogoProps = {
  /** `light` = for light backgrounds (navbar). `dark` = for dark backgrounds (footer). */
  variant?: "light" | "dark";
  className?: string;
};

export default function Logo({ variant = "light", className = "" }: LogoProps) {
  // dark-logo = black + coral wordmark; light-logo = white + coral wordmark
  const src = variant === "dark" ? lightLogo : darkLogo;

  return (
    <Link href="/" className={`inline-flex shrink-0 items-center ${className}`}>
      <Image
        src={src}
        alt="Soho Editors"
        width={142}
        height={70}
        className="h-[clamp(2rem,3.2vw,2.75rem)] w-auto"
        priority={variant === "light"}
      />
    </Link>
  );
}
