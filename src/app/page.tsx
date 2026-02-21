import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import IntroSection from "@/components/IntroSection";
import SkillsSection from "@/components/SkillsSection";
import MarqueeSection from "@/components/MarqueeSection";
import RecentWorkSection from "@/components/RecentWorkSection";
import ContactSection from "@/components/ContactSection";
import TestimonialsSection from "@/components/TestimonialsSection";

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
