import Image from "next/image";
import Link from "next/link";
import icFacebook from "@/assets/icons/ic-facebook.svg";
import icInstagram from "@/assets/icons/ic-instagram.svg";
import icLinkedin from "@/assets/icons/ic-linkedin.svg";
import icTwitter from "@/assets/icons/ic-twitter.svg";
import icYoutube from "@/assets/icons/ic-youtube.svg";
import Logo from "@/components/layout/Logo";
import Button from "@/components/ui/Button";

// const TRAINING_LINKS = [
//   { label: "Training HomePage", href: "/training" },
//   { label: "Courses", href: "/training" },
//   { label: "Our Training", href: "/training" },
//   { label: "Resources", href: "/resources" },
//   { label: "FAQs", href: "/training-help" },
//   { label: "Free Video Tutorial", href: "/videos" },
//   { label: "Our Trainers", href: "/trainers" },
//   { label: "Customer Reviews", href: "/customer-reviews" },
//   { label: "Live Online Classes", href: "/live-online-classes" },
//   { label: "Bespoke Training", href: "/bespoke-training" },
//   { label: "Certified Pro Tutorials", href: "#" },
//   { label: "ScreenSkills Funding", href: "/screenskills-funding" },
// ] as const;

const TRAINING_LINKS = [
  { label: "Training HomePage", href: "/#" },
  { label: "Courses", href: "/#" },
  { label: "Our Training", href: "/#" },
  { label: "Resources", href: "/resources" },
  { label: "FAQs", href: "/training-help" },
  { label: "Free Video Tutorial", href: "#" },
  { label: "Our Trainers", href: "/#" },
  { label: "Customer Reviews", href: "/#" },
  { label: "Live Online Classes", href: "/#" },
  { label: "Bespoke Training", href: "/#" },
  { label: "Certified Pro Tutorials", href: "#" },
  { label: "ScreenSkills Funding", href: "/#" },
] as const;


const ABOUT_LINKS = [
  "Booking Terms and Conditions",
  "Save more on your courses",
  "What we do for our clients",
  "Satisfaction Guarantee",
  "What Our Clients Say",
  "Change My Booking",
] as const;

const SOCIAL_LINKS = [
  { name: "Facebook", href: "#", icon: icFacebook },
  { name: "Twitter", href: "#", icon: icTwitter },
  { name: "YouTube", href: "#", icon: icYoutube },
  { name: "LinkedIn", href: "#", icon: icLinkedin },
  { name: "Instagram", href: "#", icon: icInstagram },
] as const;

function FooterCta() {
  return (
    <div className="page-x relative z-10 mx-auto max-w-wide pt-15">
      <div
        className="rounded-[28px] bg-brand px-6 py-[clamp(2.5rem,6vw,5rem)] text-center sm:px-12 lg:rounded-[40px] "
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      >
        <h2 className="mx-auto max-w-[900px] font-display text-cta-title font-bold tracking-[-0.5px] text-white">
          The UK&apos;s Leading Post Production Training Provider
        </h2>
        <p className="mx-auto mt-5 max-w-[780px] text-cta-body text-white/95">
          Certified by global manufacturers and endorsed by media leaders —
          supporting professionals at every stage of their creative journey.
        </p>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="mt-[clamp(5rem,12vw,9rem)] bg-footer pt-0 text-white ">
      <div className="relative z-10 -translate-y-1/2">
        <FooterCta />
      </div>

      <div className="page-x mx-auto grid max-w-page gap-10 pb-16 md:gap-12 lg:grid-cols-[1.2fr_1fr_1fr_0.8fr] lg:pb-20">
        <div className="flex max-w-[384px] flex-col gap-8">
          <div className="flex flex-col gap-7">
            <Logo variant="dark" />
            <p className="text-footer-body text-[#cacbcb]">
              Master the tools, elevate your expertise, and position yourself
              for success through Soho Editors&apos; industry-recognised
              training.
            </p>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map(({ name, href, icon }) => (
                <Link
                  key={name}
                  href={href}
                  aria-label={name}
                  className="inline-flex size-6 items-center justify-center"
                >
                  <Image src={icon} alt="" width={24} height={24} />
                </Link>
              ))}
            </div>
          </div>
          <Button href="#">About Us</Button>
        </div>

        <div>
          <h3 className="mb-6 text-footer-heading text-white">
            Training Courses
          </h3>
          <ul className="flex flex-col gap-4 text-footer-link text-white">
            {TRAINING_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="transition-opacity hover:opacity-80">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-6 text-footer-heading text-white">
            About Training Courses
          </h3>
          <ul className="flex flex-col gap-4 text-footer-link text-white">
            {ABOUT_LINKS.map((label) => (
              <li key={label}>
                <Link href="#" className="transition-opacity hover:opacity-80">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-6 text-footer-heading text-white">Contact Us</h3>
          <ul className="flex flex-col gap-3 text-footer-link text-white">
            <li>Soho Editors</li>
            <li>
              <a href="tel:+442077341286" className="hover:opacity-80">
                +44 (0)20 7734 1286
              </a>
            </li>
            <li>
              <a
                href="mailto:Training@sohoeditors.com"
                className="hover:opacity-80"
              >
                Training@sohoeditors.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
