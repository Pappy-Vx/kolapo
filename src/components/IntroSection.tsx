"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function IntroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "30+", label: "Projects Delivered" },
    { number: "20+", label: "Happy Clients" },
    { number: "2+", label: "Startups" },
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
                Building resilient systems that{" "}
                <span className="gradient-text">bridge research & industry</span>
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  I&apos;m a software engineer passionate about building resilient, scalable systems that bridge research and real-world applications. My experience spans <span className="text-foreground font-medium">enterprise-grade .NET development for financial systems</span>, <span className="text-foreground font-medium">machine learning research</span>, and <span className="text-foreground font-medium">full-stack web engineering</span>.
                </p>
                <p>
                  I specialize in crafting robust backend architectures , leveraging <span className="gradient-text font-medium">Domain-Driven Design (DDD)</span>, <span className="gradient-text font-medium">Event-Driven Architecture</span>, and <span className="gradient-text font-medium">ACID-compliant database systems</span>. Whether it&apos;s designing APIs with REST, gRPC, and SignalR, or building intelligent systems with CNNs and ML models, I engineer solutions that perform and endure.
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

        {/* What I'm Up To */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 glass-card rounded-2xl p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan" />
          <h3 className="text-xl font-bold mb-6 gradient-text">What I&apos;m Currently Up To</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: "🏦", text: "Building .NET microservices for financial systems — implementing DDD, Outbox & Resilience Patterns" },
              { icon: "🤖", text: "Collaborating on AI-powered data solutions and computer vision research" },
              { icon: "🌍", text: "Exploring multi-protocol communication (REST, gRPC, SignalR) and event-driven architecture" },
              { icon: "📘", text: "Studying AI Ethics and Explainability — merging trust and transparency in intelligent systems" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="flex items-start gap-3 p-4 rounded-xl hover:bg-foreground/5 transition-colors duration-300"
              >
                <span className="text-2xl">{item.icon}</span>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
