"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="relative py-32 section-padding overflow-hidden">
      {/* Background orbs */}
      <div className="orb-gradient w-[600px] h-[600px] bg-neon-purple top-[20%] left-[30%]" />
      <div className="orb-gradient w-[400px] h-[400px] bg-neon-blue bottom-[20%] right-[20%]" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest gradient-text mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
            Let&apos;s build something{" "}
            <span className="gradient-text">amazing</span>{" "}
            together
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let&apos;s queue up a time to chat.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link href="/contact" className="btn-neo text-base">
            <span>Start a Conversation</span>
            <HiArrowUpRight className="text-lg" />
          </Link>
          <Link
            href="mailto:kolawolekolapo20@gmail.com"
            className="btn-outline-neo text-base"
          >
            <span>Email Me Directly</span>
          </Link>
        </motion.div>

        {/* Decorative rings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative mt-24"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full border border-neon-purple/10 animate-spin-slow" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 rounded-full border border-neon-blue/10 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "15s" }} />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border border-neon-purple/15" />
          </div>
          <div className="h-64 flex items-center justify-center">
            <div className="text-4xl md:text-5xl font-black gradient-text">
              👋
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
