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
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kolapo Kolawole | Software Engineer & Co-Founder",
  description: "I'm a software engineer and co-founder based in Lagos, Nigeria. I specialize in building web applications and software solutions.",
  icons: {
    icon: [
      { url: "/kola.jpg", type: "image/jpg" }
    ]
  }
}

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
