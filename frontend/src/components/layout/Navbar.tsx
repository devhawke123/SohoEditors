"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/layout/Logo";
import Button from "@/components/ui/Button";

/** Active routes only: Home, Resources, FAQs. Other pages temporarily disabled. */
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Resources", href: "/resources" },
  { label: "FAQs", href: "/training-help" },
  // { label: "Training Services", href: "/training", dropdown: true },
  // { label: "Training Bundles", href: "#" },
  // {
  //   label: "Free Resources",
  //   href: "/resources",
  //   dropdown: true,
  //   items: [
  //     { label: "Resources", href: "/resources" },
  //     { label: "Free Video Tutorials", href: "/videos" },
  //     { label: "ScreenSkills Funding", href: "/screenskills-funding" },
  //   ],
  // },
  // { label: "Contact us", href: "#" },
] as const;

function isLinkActive(pathname: string, href: string) {
  return href === pathname || (href !== "/" && pathname.startsWith(href));
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-black/10 bg-white">
      <div className="page-x mx-auto flex max-w-page items-center justify-between gap-4 py-[clamp(0.75rem,2vh,1.25rem)] lg:gap-6">
        <Logo />

        <nav className="hidden items-center gap-6 xl:flex xl:gap-8" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const isActive = isLinkActive(pathname, link.href);
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
