"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function IntroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "4+", label: "Years Experience" },
    { number: "30+", label: "Projects Completed" },
    { number: "20+", label: "Happy Clients" },
    { number: "99%", label: "Client Satisfaction" },
  ];

  return (
    <section id="about" ref={ref} className="relative py-32 section-padding overflow-hidden">
      {/* Background elements */}
      <div className="orb-gradient w-[400px] h-[400px] bg-neon-purple top-[20%] right-[-5%]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm font-semibold uppercase tracking-widest gradient-text mb-4 block">
                About Me
              </span>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
                From curiosity to code,{" "}
                <span className="gradient-text">from ideas to impact</span>
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  My journey in software engineering is fueled by a passion for building solutions that don&apos;t just work but work brilliantly. I specialize in creating full-stack applications that are both beautiful and functional.
                </p>
                <p>
                  I realized early that writing code is only part of the equation. What truly makes a difference? Engineering for efficiency, optimizing resources, and solving real-world problems with scalable, high-performance solutions.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right side - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="glass-card rounded-2xl p-8 text-center group"
              >
                <h3 className="text-4xl md:text-5xl font-black gradient-text mb-2">
                  {stat.number}
                </h3>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
