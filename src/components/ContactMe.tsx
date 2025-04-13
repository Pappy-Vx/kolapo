"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { BiPhoneCall } from "react-icons/bi";

export default function ContactMe() {
  const form = useRef<HTMLFormElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_x2aghk8",
          "template_9dwmn87",
          form.current,
          "OIfB_KrmWkKysMQyt" // Replace this with your EmailJS public key
        )
        .then(
          () => {
            setSubmitted(true);
            setError(false);
            form.current?.reset();
          },
          () => {
            setSubmitted(false);
            setError(true);
          }
        );
    }
  };

  return (
    <>
      <nav className="px-[6%] flex items-center justify-center">
        <div className="flex h-32 items-center justify-between w-full max-w-[80rem]">
          <Link
            href="/"
            className="logo flex items-center space-x-2 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="h-14 w-14 rounded-full bg-primary flex items-center justify-center">
              <Image src="/kola.jpg" alt="kola logo" width={40} height={40} />
            </div>
            <div className="overflow-hidden flex space-x-1">
              <motion.span
                initial={{ x: -20, opacity: 0 }}
                animate={isHovered ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="font-bold"
              >
                Kolapo
              </motion.span>
              <motion.span
                initial={{ x: -20, opacity: 0 }}
                animate={isHovered ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.15, ease: "easeInOut" }}
                className="font-bold"
              >
                Kolawole
              </motion.span>
            </div>
          </Link>
          <div className="flex items-center flex-row gap-2">
            <Link
              href="https://github.com/Pappy-Vx"
              className="bg-primary rounded-full h-10 w-10 flex items-center justify-center"
            >
              <FaGithub className="text-secondary text-xl" />
            </Link>
            <Link
              href="tel:+2349042418998"
              className="bg-primary rounded-full h-10 w-10 flex items-center justify-center"
            >
              <BiPhoneCall className="text-secondary text-xl" />
            </Link>
          </div>
        </div>
      </nav>

      <div>
        <h2 className="text-xl font-bold text-font md:text-4xl md:font-semibold text-center mx-[6%] mt-32">
          Want to discuss a startup / Project Collaboration? I'm most definitely game.
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full max-w-3xl mx-auto mt-10 px-6 space-y-6"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full">
              <label className="block mb-2 text-sm text-gray-600">Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="w-full">
              <label className="block mb-2 text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full">
              <label className="block mb-2 text-sm text-gray-600">Which project?</label>
              <select
                name="project"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select</option>
                <option value="ai">AI projects</option>
                <option value="Fintech">Fintech / Crypto</option>
                <option value="ecommerce">eCommerce</option>
                <option value="business">Business</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className="w-full">
              <label className="block mb-2 text-sm text-gray-600">Your interest</label>
              <select
                name="interest"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select</option>
                <option value="partnership">Partnership</option>
                <option value="development">Development</option>
                <option value="consultation">Consultation</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-600">Additional details</label>
            <textarea
              name="message"
              rows={5}
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition duration-300"
            >
              Submit
            </button>
            {submitted && <p className="mt-4 text-green-600">Message sent successfully!</p>}
            {error && <p className="mt-4 text-red-600">Failed to send. Try again.</p>}
          </div>
        </form>
      </div>
    </>
  );
}
