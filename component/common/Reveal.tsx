"use client";

import { motion } from "framer-motion";
import { ReactNode, useSyncExternalStore } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/*
  prefers-reduced-motion is read via useSyncExternalStore rather than a
  synchronous useReducedMotion()/matchMedia() check during render. Reading
  it synchronously makes the server (no window) and the client's first
  hydration pass disagree whenever the visiting device actually has
  reduced motion enabled — React then leaves the mismatched inline style
  (opacity: 0, from the server-rendered motion element) permanently
  unpatched, since no client-side motion controller stays attached to
  animate it back to visible. That leaves whole sections stuck invisible.
  useSyncExternalStore is the React-recommended way to read this kind of
  external, changeable browser state safely: getServerSnapshot() below
  keeps the very first client render identical to the server (avoiding
  the mismatch), and React reconciles to the real value immediately after.
*/
function subscribe(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerSnapshot() {
  return false;
}

export default function Reveal({
  children,
  delay = 0,
  className,
}: Props) {
  const prefersReducedMotion = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
  className={["reveal-animate", className].filter(Boolean).join(" ")}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
