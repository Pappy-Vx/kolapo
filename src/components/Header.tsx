"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

export default function Header() {
  const name = "KOLAPO";
  const subtitle = "KOLAWOLE";

  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden section-padding">
      {/* Background orbs */}
      <div className="orb-gradient w-[600px] h-[600px] bg-neon-purple top-[10%] left-[-10%]" />
      <div className="orb-gradient w-[500px] h-[500px] bg-neon-blue bottom-[10%] right-[-10%]" />
      <div className="orb-gradient w-[300px] h-[300px] bg-neon-cyan top-[50%] left-[50%]" />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-purple/30 bg-neon-purple/10 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          <span className="text-sm text-muted-foreground font-medium">Available for freelance work</span>
        </motion.div>

        {/* Name - Large animated text */}
        <div className="overflow-hidden mb-2">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: 0.4 }}
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none">
              {name.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  className="inline-block gradient-text hover:scale-110 transition-transform duration-300 cursor-default"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.05, duration: 0.5 }}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
          </motion.div>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none text-foreground/30">
              {subtitle.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  className="inline-block hover:text-foreground transition-colors duration-300 cursor-default"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.04, duration: 0.5 }}
                >
                  {letter}
                </motion.span>
              ))}
            </h2>
          </motion.div>
        </div>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="space-y-4 mb-12"
        >
          <p className="text-xl md:text-2xl font-light text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Full Stack Developer crafting{" "}
            <span className="text-foreground font-medium">high-performance</span>{" "}
            digital experiences with{" "}
            <span className="gradient-text font-medium">modern technologies</span>
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link href="#projects" className="btn-neo">
            <span>View My Work</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </Link>
          <Link href="#contact" className="btn-outline-neo">
            <span>Get In Touch</span>
          </Link>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="flex items-center justify-center gap-4"
        >
          <Link
            href="https://github.com/Pappy-Vx"
            target="_blank"
            className="p-3 rounded-full border border-border hover:border-neon-purple/40 text-muted-foreground hover:text-foreground transition-all duration-300 hover:shadow-lg hover:shadow-neon-purple/10 hover:-translate-y-1"
          >
            <FaGithub className="text-xl" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/kolapo-kolawole-21495b1b3/"
            target="_blank"
            className="p-3 rounded-full border border-border hover:border-neon-blue/40 text-muted-foreground hover:text-foreground transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/10 hover:-translate-y-1"
          >
            <FaLinkedin className="text-xl" />
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <HiArrowDown className="text-neon-purple text-lg" />
        </motion.div>
      </motion.div>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute right-12 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-neon-purple/20 to-transparent origin-top hidden lg:block"
      />
    </header>
  );
}
