"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

const projects = [
  {
    id: 1,
    title: "ShadowSwap",
    description: "A one-stop decentralized trading protocol",
    longDescription: "Built a DeFi protocol enabling seamless token swaps with low fees and high security on the blockchain.",
    image: "/shdw.jpeg",
    tags: ["DeFi", "Web3", "React"],
    color: "#7C3AED",
    url: "https://shadowswap.xyz/",
  },
  {
    id: 2,
    title: "ProximaForte",
    description: "Innovating Fintech, Social Welfare & Data",
    longDescription: "Led development of fintech solutions bridging social welfare and data management for emerging markets.",
    image: "/proxima.jpeg",
    tags: ["Fintech", "Next.js", "API"],
    color: "#3B82F6",
    url: "https://www.proximaforte.com/",
  },
  {
    id: 3,
    title: "KWASRRA",
    description: "Comprehensive data collection platform",
    longDescription: "Engineered a data-driven platform committed to collecting and analyzing comprehensive datasets.",
    image: "/kwass.jpeg",
    tags: ["Data", "Full Stack", "MongoDB"],
    color: "#06B6D4",
    url: "https://www.kwasrra.ng/",
  },
  {
    id: 4,
    title: "Bamiraa",
    description: "Grocery delivery for loved ones in Nigeria",
    longDescription: "Developed an e-commerce platform enabling users to send groceries to their loved ones across Nigeria.",
    image: "/bam.jpeg",
    tags: ["eCommerce", "Shopify", "Node.js"],
    color: "#8B5CF6",
    url: "https://bamiraa.com/",
  },
  {
    id: 5,
    title: "Betaship",
    description: "Top tier medical products in Nigeria",
    longDescription: "Built an online marketplace for high-quality medical products with secure checkout and delivery tracking.",
    image: "/beta.jpeg",
    tags: ["eCommerce", "React", "Express"],
    color: "#6366F1",
    url: "https://betaship.com.ng/",
  },
  {
    id: 6,
    title: "Elizabeth Jikiemi",
    description: "Data-driven nonprofit success stories",
    longDescription: "Designed and developed a portfolio turning data insights into measurable impact for nonprofits.",
    image: "/ej.jpeg",
    tags: ["Portfolio", "Design", "Next.js"],
    color: "#7C3AED",
    url: "https://elizabethjikemi.netlify.app/",
  },
];

export default function RecentWorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" ref={ref} className="relative py-32 section-padding overflow-hidden">
      {/* Background */}
      <div className="orb-gradient w-[600px] h-[600px] bg-neon-purple top-[30%] right-[-15%]" />
      <div className="orb-gradient w-[400px] h-[400px] bg-neon-blue bottom-[10%] left-[-10%]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold uppercase tracking-widest gradient-text mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects that showcase my passion for creating impactful digital solutions
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
            >
              <Link href={project.url} target="_blank" rel="noopener noreferrer">
                <div
                  className="group glass-card rounded-2xl overflow-hidden cursor-pointer relative"
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Image container */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-DEFAULT via-transparent to-transparent opacity-60" />
                    
                    {/* Hover overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-neon-purple/40 to-neon-blue/40 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: hoveredId === project.id ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                      >
                        <HiArrowUpRight className="text-white text-xl" />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border border-neon-purple/20 text-neon-purple bg-neon-purple/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold mb-2 group-hover:text-neon-purple transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.longDescription}
                    </p>

                    {/* Arrow */}
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-neon-purple opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                      <span>View Project</span>
                      <HiArrowUpRight className="text-sm" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* More projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            href="mailto:kolawolekolapo20@gmail.com"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
          >
            <span className="text-lg font-medium">Want to see more? </span>
            <span className="gradient-text font-semibold text-lg group-hover:underline">Email me</span>
            <HiArrowUpRight className="text-neon-purple group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
