"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0);
  // Phase 0: horizontal line _
  // Phase 1: line rotates to form < angle
  // Phase 2: vertical stroke joins to form |< which looks like K
  // Phase 3: K formed fully
  // Phase 4: remaining letters "olapo" slide in
  // Phase 5: fade out preloader

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 600),    // _ rotates to <
      setTimeout(() => setPhase(2), 1200),   // |< forms (K shape)
      setTimeout(() => setPhase(3), 1800),   // K fully formed
      setTimeout(() => setPhase(4), 2200),   // "olapo" slides in
      setTimeout(() => setPhase(5), 3200),   // fade out
      setTimeout(() => onComplete(), 3800),  // done
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 5 && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0A0A0F]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="relative flex items-center justify-center">
            {/* === THE K CONSTRUCTION === */}
            <div className="relative" style={{ width: "120px", height: "120px" }}>
              {/* Vertical stroke of K (the |) */}
              <motion.div
                className="absolute left-0 top-0 bg-white rounded-sm"
                style={{ width: "14px", originY: "0" }}
                initial={{ height: 0, opacity: 0 }}
                animate={
                  phase >= 2
                    ? { height: "120px", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              />

              {/* Upper diagonal of K (the top part of <) */}
              <motion.div
                className="absolute bg-white rounded-sm"
                style={{
                  width: "14px",
                  height: "65px",
                  left: "14px",
                  top: "0px",
                  transformOrigin: "bottom left",
                }}
                initial={
                  phase === 0
                    ? { rotate: 90, scaleY: 0 }
                    : { rotate: 90, scaleY: 1 }
                }
                animate={
                  phase === 0
                    ? { rotate: 90, scaleY: 1, opacity: 1 } // horizontal line _
                    : phase === 1
                    ? { rotate: 35, scaleY: 1, opacity: 1 } // rotates up to form top of <
                    : { rotate: 35, scaleY: 1, opacity: 1 } // stays
                }
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              />

              {/* Lower diagonal of K (the bottom part of <) */}
              <motion.div
                className="absolute bg-white rounded-sm"
                style={{
                  width: "14px",
                  height: "65px",
                  left: "14px",
                  bottom: "0px",
                  transformOrigin: "top left",
                }}
                initial={{ rotate: -90, scaleY: 0 }}
                animate={
                  phase === 0
                    ? { rotate: -90, scaleY: 0, opacity: 0 } // hidden
                    : phase === 1
                    ? { rotate: -35, scaleY: 1, opacity: 1 } // rotates down to form bottom of <
                    : { rotate: -35, scaleY: 1, opacity: 1 } // stays
                }
                transition={{
                  duration: 0.5,
                  ease: [0.23, 1, 0.32, 1],
                  delay: phase === 1 ? 0.1 : 0,
                }}
              />
            </div>

            {/* === "olapo" letters sliding in === */}
            <div className="flex items-center ml-[-44px]">
              {"olapo".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  className="text-white font-black text-[5.5rem] leading-none tracking-tighter inline-block"
                  initial={{ opacity: 0, x: -30, scale: 0.5, filter: "blur(10px)" }}
                  animate={
                    phase >= 4
                      ? {
                          opacity: 1,
                          x: 0,
                          scale: 1,
                          filter: "blur(0px)",
                        }
                      : { opacity: 0, x: -30, scale: 0.5, filter: "blur(10px)" }
                  }
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Loading bar at bottom */}
          <motion.div
            className="absolute bottom-16 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: phase >= 5 ? "200px" : `${(phase / 5) * 200}px` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />

          {/* Subtle glow behind K */}
          <motion.div
            className="absolute w-[300px] h-[300px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
            }}
            animate={{
              scale: phase >= 3 ? [1, 1.3, 1] : 1,
              opacity: phase >= 3 ? 0.8 : 0.3,
            }}
            transition={{ duration: 1.5, repeat: phase >= 3 ? 0 : Infinity }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
