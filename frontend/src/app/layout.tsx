/**
 * Root layout — wraps EVERY page.
 * Navbar + Footer are shared site chrome (not page-specific).
 *
 * Routes (App Router):
 *   app/page.tsx                    →  /
 *   app/training/page.tsx           →  /training
 *   app/training/[slug]/page.tsx   →  /training/pp101 (course detail)
 *   app/resources/page.tsx          →  /resources
 *   app/videos/page.tsx             →  /videos
 *   app/training-help/page.tsx      →  /training-help
 *   app/trainers/page.tsx           →  /trainers
 *   app/screenskills-funding/page.tsx → /screenskills-funding
 *   app/live-online-classes/page.tsx  → /live-online-classes
 *   app/customer-reviews/page.tsx     → /customer-reviews
 *   app/bespoke-training/page.tsx     → /bespoke-training
 * Add a new page by creating app/<name>/page.tsx
 */
import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Soho Editors | Post Production Training",
  description:
    "Master Video Editing, Motion Graphics & Animation, Colour Grading, Visual Effects, Sound & AI with Soho Editors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
