"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Backend & Systems",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>
    ),
    description: "I architect enterprise-grade systems with Domain-Driven Design, Event-Driven Architecture, and resilience patterns for financial and scalable applications.",
    skills: ["C#", ".NET", "ASP.NET Core", "Entity Framework", "gRPC", "SignalR", "REST API"],
    tools: ["SQL Server", "Docker", "Postman", "Git"],
    gradient: "from-neon-purple to-neon-violet",
  },
  {
    title: "Frontend & Web",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
    ),
    description: "I build responsive, high-performance interfaces and full-stack web applications that users love to interact with.",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    tools: ["VS Code", "Figma", "Vercel", "GitHub"],
    gradient: "from-neon-blue to-neon-cyan",
  },
  {
    title: "AI & Data Science",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v4a4 4 0 0 0 8 0v-4h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z" /><circle cx="9" cy="10" r="1" /><circle cx="15" cy="10" r="1" /></svg>
    ),
    description: "I research and build intelligent systems — from CNNs and ML models to practical AI solutions that bridge academia and industry.",
    skills: ["Python", "TensorFlow", "Keras", "Pandas", "NumPy", "Scikit-learn"],
    tools: ["Jupyter", "Google Colab", "Matplotlib", "OpenCV"],
    gradient: "from-neon-indigo to-neon-purple",
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="relative py-32 section-padding overflow-hidden">
      {/* Background */}
      <div className="orb-gradient w-[500px] h-[500px] bg-neon-blue bottom-0 left-[-10%]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold uppercase tracking-widest gradient-text mb-4 block">
            Tech Arsenal
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From enterprise .NET backends to React frontends and AI research — end-to-end engineering
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="glass-card rounded-2xl p-8 group relative overflow-hidden"
            >
              {/* Gradient top border */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-500`}>
                {category.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed text-sm">{category.description}</p>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-widest text-neon-purple mb-3">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium rounded-full border border-border bg-background/50 text-muted-foreground hover:border-neon-purple/40 hover:text-foreground transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-neon-blue mb-3">
                  Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 text-xs font-medium rounded-full border border-border bg-background/50 text-muted-foreground hover:border-neon-blue/40 hover:text-foreground transition-all duration-300 cursor-default"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
