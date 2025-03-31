import Navbar from "@/components/Navbar"
import Header from "@/components/Header"
import IntroSection from "@/components/IntroSection"
import SkillsSection from "@/components/SkillsSection"
import RecentWorkSection from "@/components/RecentWorkSection"
import CollaborationSection from "@/components/CollaborationSection"
import StartupProjectsSection from "@/components/StartupProjectsSection"
import ContactSection from "@/components/ContactSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Header />
      <IntroSection />
      <SkillsSection />
      <RecentWorkSection />
      {/* <CollaborationSection /> */}
      {/* <StartupProjectsSection /> */}
      <ContactSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
