"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { HiArrowLeft } from "react-icons/hi";
import Navbar from "./Navbar";

export default function ContactMe() {
  const form = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (form.current) {
      emailjs
        .sendForm(
          "service_x2aghk8",
          "template_9dwmn87",
          form.current,
          "OIfB_KrmWkKysMQyt"
        )
        .then(
          () => {
            setSubmitted(true);
            setError(false);
            setLoading(false);
            form.current?.reset();
          },
          () => {
            setSubmitted(false);
            setError(true);
            setLoading(false);
          }
        );
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-32 pb-20 section-padding relative overflow-hidden">
        {/* Background */}
        <div className="orb-gradient w-[500px] h-[500px] bg-neon-purple top-[10%] right-[-10%]" />
        <div className="orb-gradient w-[400px] h-[400px] bg-neon-blue bottom-[10%] left-[-10%]" />
        <div className="absolute inset-0 dot-grid opacity-30" />

        <div className="max-w-3xl mx-auto relative z-10">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 mb-8 group"
            >
              <HiArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Let&apos;s start a{" "}
              <span className="gradient-text">conversation</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Want to discuss a startup, project collaboration, or just say hello? I&apos;m all ears.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="glass-card rounded-3xl p-8 md:p-12 space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-muted-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-neon-purple/40 focus:border-neon-purple/40 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-muted-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-neon-purple/40 focus:border-neon-purple/40 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-muted-foreground">
                    Project Type
                  </label>
                  <select
                    name="project"
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-neon-purple/40 focus:border-neon-purple/40 transition-all duration-300 appearance-none"
                  >
                    <option value="">Select project type</option>
                    <option value="ai">AI Projects</option>
                    <option value="Fintech">Fintech / Crypto</option>
                    <option value="ecommerce">eCommerce</option>
                    <option value="business">Business</option>
                    <option value="others">Others</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-muted-foreground">
                    Your Interest
                  </label>
                  <select
                    name="interest"
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-neon-purple/40 focus:border-neon-purple/40 transition-all duration-300 appearance-none"
                  >
                    <option value="">Select your interest</option>
                    <option value="partnership">Partnership</option>
                    <option value="development">Development</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-muted-foreground">
                  Tell me more
                </label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-neon-purple/40 focus:border-neon-purple/40 transition-all duration-300 resize-none"
                  placeholder="Describe your project or idea..."
                />
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-neo text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 text-green-400 font-medium flex items-center justify-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                    Message sent successfully!
                  </motion.p>
                )}
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 text-red-400 font-medium"
                  >
                    Failed to send. Please try again.
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center gap-4 mt-12"
          >
            <span className="text-muted-foreground text-sm">Or find me on:</span>
            <Link
              href="https://github.com/Pappy-Vx"
              target="_blank"
              className="p-3 rounded-full border border-border hover:border-neon-purple/40 text-muted-foreground hover:text-foreground transition-all duration-300"
            >
              <FaGithub className="text-lg" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/kolapo-kolawole-21495b1b3/"
              target="_blank"
              className="p-3 rounded-full border border-border hover:border-neon-blue/40 text-muted-foreground hover:text-foreground transition-all duration-300"
            >
              <FaLinkedin className="text-lg" />
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
