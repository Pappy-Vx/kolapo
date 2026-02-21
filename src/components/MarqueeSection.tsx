"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "Express", "MongoDB", "MySQL",
  "Tailwind CSS", "Docker", "Git", "Figma", "Shopify", "Firebase", "GraphQL", "REST API",
];

export default function MarqueeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="marquee-container mb-8">
          <div className="marquee-content">
            {[...techStack, ...techStack].map((tech, i) => (
              <span
                key={i}
                className="mx-6 text-4xl md:text-6xl lg:text-7xl font-black text-foreground/5 hover:text-neon-purple/20 transition-colors duration-500 cursor-default whitespace-nowrap select-none"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="marquee-container" style={{ direction: "rtl" }}>
          <div className="marquee-content">
            {[...techStack, ...techStack].reverse().map((tech, i) => (
              <span
                key={i}
                className="mx-6 text-4xl md:text-6xl lg:text-7xl font-black text-foreground/5 hover:text-neon-blue/20 transition-colors duration-500 cursor-default whitespace-nowrap select-none"
                style={{ direction: "ltr" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent" />
    </section>
  );
}
