"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "Working with Kolawole Kolapo is like having a Swiss Army knife for technical challenges — versatile, reliable, and always effective. I've collaborated with him on several projects, including my farm-to-door delivery website, publishing platform, and professional site. Each time, his technical expertise, strong work ethic, and problem-solving mindset have been invaluable to my business.",
    name: "Elizabeth Jikiemi",
    title: "CEO, Bamiraa Inc.",
    initials: "EJ",
  },
  {
    id: 2,
    quote:
      "I have had the pleasure of working closely with Kolapo for 4 plus years now and can confidently say that he is an exceptional professional. He possesses a unique blend of technical expertise and problem-solving abilities that consistently impresses me.",
    name: "Kolade David",
    title: "Creative Lead, EasySpend Inc.",
    initials: "KD",
  },
  {
    id: 3,
    quote:
      "Kolawole Kolapo is a true gem in the tech world. His ability to tackle complex challenges with ease and creativity is truly impressive. I've had the pleasure of collaborating with him on multiple projects, and his contributions have always elevated the final product.",
    name: "Opule Caleb",
    title: "Senior Frontend Developer, YEHGS UK LTD",
    initials: "OC",
  },
  {
    id: 4,
    quote:
      "Working with Kolawole Kolapo has been an absolute pleasure. His technical skills are top-notch, and his ability to communicate complex ideas clearly is a rare find. He consistently goes above and beyond to ensure project success.",
    name: "Seyi Kayode",
    title: "Digital Marketer, Jumia",
    initials: "SK",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" ref={ref} className="relative py-32 section-padding overflow-hidden">
      <div className="orb-gradient w-[400px] h-[400px] bg-neon-purple top-[20%] left-[-5%]" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold uppercase tracking-widest gradient-text mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What people <span className="gradient-text">say</span>
          </h2>
        </motion.div>

        {/* Testimonial card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card rounded-3xl p-10 md:p-16 relative overflow-hidden"
        >
          {/* Quote icon */}
          <div className="absolute top-8 left-8 text-neon-purple/10 text-8xl font-serif leading-none select-none">
            &ldquo;
          </div>

          {/* Testimonial content */}
          <div className="relative min-h-[250px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground/80 mb-10 italic">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center text-white font-bold text-sm">
                    {testimonials[current].initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonials[current].name}</h4>
                    <p className="text-muted-foreground text-sm">{testimonials[current].title}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots */}
          <div className="flex items-center justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? "w-8 h-3 bg-gradient-to-r from-neon-purple to-neon-blue"
                    : "w-3 h-3 bg-foreground/10 hover:bg-foreground/20"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
