"use client";

import { useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ThemeProvider from "@/components/ThemeProvider";
import CursorGlow from "@/components/CursorGlow";
import Preloader from "@/components/Preloader";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <ThemeProvider>
      {/* Preloader */}
      <Preloader onComplete={handlePreloaderComplete} />

      {/* Main content - hidden during preloader */}
      {!isLoading && (
        <>
          <CursorGlow />
          <main className="relative">
            <AnimatePresence mode="wait">
              <PageTransition key={pathname}>{children}</PageTransition>
            </AnimatePresence>
          </main>
          <Footer />
        </>
      )}
    </ThemeProvider>
  );
}
