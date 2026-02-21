"use client";

import { cn } from "@/lib/utils";
import "./globals.css";
import { Inter } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ThemeProvider from "@/components/ThemeProvider";
import CursorGlow from "@/components/CursorGlow";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased noise-overlay`}>
        <ThemeProvider>
          <CursorGlow />
          <main className="relative">
            <AnimatePresence mode="wait">
              <PageTransition key={pathname}>{children}</PageTransition>
            </AnimatePresence>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
