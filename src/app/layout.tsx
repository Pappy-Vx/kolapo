"use client"

import { cn } from "@/lib/utils"
import "./globals.css"
import { Inter } from "next/font/google"

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation"; // ✅ Get current route
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // 🔥 Get the current route

  return (
    <html lang="en">
      <body className={`${inter.className} `}>
       
        <main className="relative">
          <AnimatePresence mode="wait">
            <PageTransition key={pathname}>
              {children}
            </PageTransition>
          </AnimatePresence>
        </main>
        <Footer />
      </body>
    </html>
  );
}
