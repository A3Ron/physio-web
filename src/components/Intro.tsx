import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface IntroProps {
  onComplete: () => void;
}

export function Intro({ onComplete }: IntroProps) {
  const [phase, setPhase] = useState<"slogan" | "logo" | "done">("slogan");
  const [displayedText, setDisplayedText] = useState("");
  const slogan = "Bewegung beginnt mit Vertrauen.";
  const logo = "Rumpfwerk.";

  // Streaming text effect for slogan
  useEffect(() => {
    if (phase !== "slogan") return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= slogan.length) {
        setDisplayedText(slogan.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        // Wait a moment, then transition to logo
        setTimeout(() => {
          setPhase("logo");
        }, 800);
      }
    }, 50); // Speed of typing

    return () => clearInterval(interval);
  }, [phase]);

  // Logo phase timing
  useEffect(() => {
    if (phase !== "logo") return;

    // Show logo for a moment, then complete
    const timeout = setTimeout(() => {
      setPhase("done");
      setTimeout(onComplete, 500);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [phase, onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container-width px-4 text-center">
            <AnimatePresence mode="wait">
              {phase === "slogan" && (
                <motion.p
                  key="slogan"
                  className="text-2xl font-light text-text md:text-4xl lg:text-5xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {displayedText}
                  <motion.span
                    className="ml-1 inline-block h-8 w-[3px] bg-primary md:h-10 lg:h-12"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
                  />
                </motion.p>
              )}

              {phase === "logo" && (
                <motion.h1
                  key="logo"
                  className="text-5xl font-bold text-primary md:text-7xl lg:text-8xl"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    duration: 0.6,
                  }}
                >
                  {logo}
                </motion.h1>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
