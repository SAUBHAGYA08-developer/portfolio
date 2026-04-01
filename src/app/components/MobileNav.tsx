"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiBriefcase } from "react-icons/fi";
import { NAVIGATION } from "@/config/portfolio.config";

interface MobileNavProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  onRecruiterMode: () => void;
}

export default function MobileNav({
  onNavigate,
  activeSection,
  onRecruiterMode,
}: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  const handleRecruiter = () => {
    onRecruiterMode();
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 modal-backdrop"
            />

            {/* Drawer */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-72 z-50 flex flex-col p-6 border-l border-slate-800"
              style={{ background: "var(--surface)" }}
            >
              <div className="flex justify-between items-center mb-8">
                <span
                  className="text-lg font-bold"
                  style={{ color: "var(--primary)" }}
                >
                  Menu
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
                >
                  <FiX size={18} />
                </button>
              </div>

              <nav className="flex flex-col gap-1 flex-1">
                {NAVIGATION.sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => handleNavigate(section.id)}
                    className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeSection === section.id
                        ? "text-indigo-400 bg-indigo-500/10"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </nav>

              <button
                onClick={handleRecruiter}
                className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium border transition-all duration-200 hover:border-indigo-500 hover:text-indigo-400 hover:bg-indigo-500/5 mt-4"
                style={{ borderColor: "var(--border)", color: "var(--muted)" }}
              >
                <FiBriefcase size={14} />
                Recruiter View
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
