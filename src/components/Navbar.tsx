"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="px-[6%]">
      <div className="flex h-32 items-center justify-between">
        <Image
          src="https://ext.same-assets.com/1375934874/630824737.png"
          alt="Matt Farley logo"
          width={40}
          height={40}
        />
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
