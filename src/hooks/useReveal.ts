"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Toggles a "reveal" state once the element scrolls into view, then
 * disconnects — mirrors framer-motion's `whileInView` with `once: true`
 * but with zero runtime animation cost (CSS transitions do the work).
 */
export function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}
