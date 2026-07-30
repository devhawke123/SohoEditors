"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/layout/Logo";
import Button from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Training Services", href: "/training", dropdown: true },
  { label: "Training Bundles", href: "#" },
  { label: "Free Resources", href: "#", dropdown: true },
  { label: "Contact us", href: "#" },
] as const;

function ChevronDown() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 12 8"
      className="size-3 shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1.5L6 6.5L11 1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-black/10 bg-white">
      <div className="page-x mx-auto flex max-w-page items-center justify-between gap-4 py-[clamp(0.75rem,2vh,1.25rem)] lg:gap-6">
        <Logo />

        <nav className="hidden items-center gap-6 xl:flex xl:gap-8" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === pathname ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`flex items-center gap-2.5 text-nav whitespace-nowrap transition-colors hover:text-brand ${
                  isActive
                    ? "font-semibold text-brand"
                    : "font-normal text-black"
                }`}
              >
                {link.label}
                {"dropdown" in link && link.dropdown ? <ChevronDown /> : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3.5">
          <Button
            href="#"
            variant="outline"
            color="brand-soft"
            textSize="nav"
            weight="normal"
            className="hidden sm:inline-flex"
          >
            Sign In
          </Button>
          <Button
            href="#"
            color="brand-soft"
            textSize="sm"
            className="px-3 py-2.5 sm:px-btn-x sm:py-btn-y sm:text-btn"
          >
            Choose your Course Now
          </Button>
        </div>
      </div>
    </header>
  );
}
