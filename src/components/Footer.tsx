"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border section-padding py-16 overflow-hidden">
      {/* Background */}
      <div className="orb-gradient w-[300px] h-[300px] bg-neon-purple bottom-0 left-[20%]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative h-10 w-10 rounded-full overflow-hidden ring-2 ring-neon-purple/30">
                <Image src="/kola.jpg" alt="Kolapo" fill className="object-cover" />
              </div>
              <span className="font-bold text-xl gradient-text">Kolapo Kolawole</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Full Stack Developer based in Lagos, Nigeria. Building digital experiences that make a difference.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <div className="flex flex-col gap-3">
              {["About", "Skills", "Projects", "Testimonials", "Contact"].map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-300 text-sm"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Connect</h3>
            <div className="flex gap-3 mb-6">
              <Link
                href="https://github.com/Pappy-Vx"
                target="_blank"
                className="p-3 rounded-xl border border-border hover:border-neon-purple/40 text-muted-foreground hover:text-foreground transition-all duration-300 hover:-translate-y-1"
              >
                <FaGithub className="text-lg" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/kolapo-kolawole-21495b1b3/"
                target="_blank"
                className="p-3 rounded-xl border border-border hover:border-neon-blue/40 text-muted-foreground hover:text-foreground transition-all duration-300 hover:-translate-y-1"
              >
                <FaLinkedin className="text-lg" />
              </Link>
            </div>
            <p className="text-muted-foreground text-sm">
              <Link href="mailto:kolawolekolapo20@gmail.com" className="hover:text-foreground transition-colors">
                kolawolekolapo20@gmail.com
              </Link>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {currentYear} Kolapo Kolawole. Crafted with passion.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full border border-border hover:border-neon-purple/40 text-muted-foreground hover:text-foreground transition-all duration-300"
            aria-label="Scroll to top"
          >
            <HiArrowUp className="text-lg" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
