"use client";

import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import MobileNav from "./MobileNav";
import { NAVIGATION } from "@/config/portfolio.config";

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onRecruiterMode: () => void;
}

export default function Navigation({
  activeSection,
  onNavigate,
  onRecruiterMode,
}: NavigationProps) {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-slate-800/60"
      style={{ background: "rgba(2, 6, 23, 0.85)", backdropFilter: "blur(12px)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => onNavigate("home")}
            className="font-mono text-base font-semibold tracking-tight flex items-center gap-0"
          >
            <span style={{ color: "var(--muted)" }}>&lt;</span>
            <span style={{ color: "var(--primary)" }}>saubhagya</span>
            <span style={{ color: "var(--muted)" }}>&nbsp;/&gt;</span>
          </motion.button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1">
            {NAVIGATION.sections.map((section, i) => (
              <motion.button
                key={section.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 + 0.1 }}
                onClick={() => onNavigate(section.id)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 capitalize ${
                  activeSection === section.id
                    ? "text-indigo-400 bg-indigo-500/10"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                }`}
              >
                {section.label}
              </motion.button>
            ))}
          </div>

          {/* Recruiter Button + Mobile Nav */}
          <div className="flex items-center gap-3">
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              onClick={onRecruiterMode}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium border transition-all duration-200 hover:border-indigo-500 hover:text-indigo-400 hover:bg-indigo-500/5"
              style={{ borderColor: "var(--border)", color: "var(--muted)" }}
            >
              <FiBriefcase size={13} />
              <span>Recruiter View</span>
            </motion.button>

            <MobileNav
              onNavigate={onNavigate}
              activeSection={activeSection}
              onRecruiterMode={onRecruiterMode}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
