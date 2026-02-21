"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ThemeProvider from "@/components/ThemeProvider";
import CursorGlow from "@/components/CursorGlow";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <ThemeProvider>
      <CursorGlow />
      <main className="relative">
        <AnimatePresence mode="wait">
          <PageTransition key={pathname}>{children}</PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
