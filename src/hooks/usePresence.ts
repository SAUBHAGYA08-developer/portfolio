"use client";

import { useEffect, useState } from "react";

/**
 * Keeps a component mounted for `exitDuration` ms after `active` goes
 * false, so a CSS exit transition can play before unmount — mirrors
 * framer-motion's AnimatePresence without shipping its runtime.
 *
 * Usage:
 *   const { mounted, show } = usePresence(isOpen);
 *   if (!mounted) return null;
 *   <div className={show ? "opacity-100" : "opacity-0"} />
 */
export function usePresence(active: boolean, exitDuration = 200) {
  const [mounted, setMounted] = useState(active);
  const [show, setShow] = useState(active);

  useEffect(() => {
    if (active) {
      setMounted(true);
      const raf = requestAnimationFrame(() => setShow(true));
      return () => cancelAnimationFrame(raf);
    }

    setShow(false);
    const timeout = setTimeout(() => setMounted(false), exitDuration);
    return () => clearTimeout(timeout);
  }, [active, exitDuration]);

  return { mounted, show };
}
