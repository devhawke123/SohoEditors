"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/layout/Logo";
import Button from "@/components/ui/Button";

const FREE_RESOURCE_LINKS = [
  { label: "Resources", href: "/resources" },
  { label: "Free Video Tutorials", href: "/videos" },
  { label: "ScreenSkills Funding", href: "/screenskills-funding" },
] as const;

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Training Services", href: "/training", dropdown: true },
  { label: "Training Bundles", href: "#" },
  {
    label: "Free Resources",
    href: "/resources",
    dropdown: true,
    items: FREE_RESOURCE_LINKS,
  },
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
            const hasItems = "items" in link && link.items;
            const isActive = hasItems
              ? link.items.some((item) => isLinkActive(pathname, item.href)) ||
                isLinkActive(pathname, link.href)
              : isLinkActive(pathname, link.href);

            if (hasItems) {
              return (
                <div key={link.label} className="group relative">
                  <Link
                    href={link.href}
                    className={`flex items-center gap-2.5 text-nav whitespace-nowrap transition-colors hover:text-brand ${
                      isActive
                        ? "font-semibold text-brand"
                        : "font-normal text-black"
                    }`}
                    aria-haspopup="menu"
                  >
                    {link.label}
                    <ChevronDown />
                  </Link>
                  <div
                    role="menu"
                    className="invisible absolute top-full left-1/2 z-50 mt-3 min-w-[220px] -translate-x-1/2 rounded-[10px] border border-black/10 bg-white py-2 opacity-0 shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
                  >
                    {link.items.map((item) => {
                      const itemActive = isLinkActive(pathname, item.href);
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          role="menuitem"
                          className={`block px-4 py-2.5 text-nav whitespace-nowrap transition-colors hover:bg-brand/5 hover:text-brand ${
                            itemActive
                              ? "font-semibold text-brand"
                              : "font-normal text-black"
                          }`}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

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
