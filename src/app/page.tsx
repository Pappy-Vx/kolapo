import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import IntroSection from "@/components/IntroSection";
import SkillsSection from "@/components/SkillsSection";
import MarqueeSection from "@/components/MarqueeSection";
import RecentWorkSection from "@/components/RecentWorkSection";
import ContactSection from "@/components/ContactSection";
import TestimonialsSection from "@/components/TestimonialsSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kolapo Kolawole | Full Stack Developer & Software Engineer",
  description:
    "Full Stack Developer based in Lagos, Nigeria. I craft high-performance digital experiences with modern technologies. Specializing in React, Next.js, Node.js, and scalable solutions.",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js",
    "Node.js",
    "Lagos",
    "Nigeria",
    "Web Developer",
    "Kolapo Kolawole",
  ],
  icons: {
    icon: [{ url: "/kola.jpg", type: "image/jpg" }],
  },
  openGraph: {
    title: "Kolapo Kolawole | Full Stack Developer",
    description:
      "Full Stack Developer crafting high-performance digital experiences with modern technologies.",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Header />
      <IntroSection />
      <SkillsSection />
      <MarqueeSection />
      <RecentWorkSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
