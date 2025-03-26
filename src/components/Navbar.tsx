"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="px-[6%]">
      <div className="flex h-32 items-center justify-between">
      <div
        className="logo flex items-center space-x-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src="/kola.jpg"
          alt="kola logo"
          width={40}
          height={40}
        />
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
        </div>
        <div className="hidden md:flex items-center">
          <button className="mx-2.5 text-lg font-medium hover:text-primary">Mentorship</button>
          <Link href="#contact" className="btn-primary">Say Hello</Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-primary"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="flex-col items-center gap-4 py-4 md:hidden">
          <button className="block w-full py-2 text-lg font-medium hover:text-primary">Mentorship</button>
          <Link href="#contact" className="block w-full py-2 text-center btn-primary">Say Hello</Link>
        </div>
      )}
    </nav>
  )
}
