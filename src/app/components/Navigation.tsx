"use client";

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
          <button
            onClick={() => onNavigate("home")}
            className="font-mono text-base font-semibold tracking-tight flex items-center gap-0 animate-fade-in-left"
          >
            <span style={{ color: "var(--muted)" }}>&lt;</span>
            <span style={{ color: "var(--primary)" }}>saubhagya</span>
            <span style={{ color: "var(--muted)" }}>&nbsp;/&gt;</span>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1">
            {NAVIGATION.sections.map((section, i) => (
              <button
                key={section.id}
                style={{ animationDelay: `${i * 50 + 100}ms` }}
                onClick={() => onNavigate(section.id)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 capitalize animate-fade-in-up ${
                  activeSection === section.id
                    ? "text-indigo-400 bg-indigo-500/10"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Recruiter Button + Mobile Nav */}
          <div className="flex items-center gap-3">
            <button
              onClick={onRecruiterMode}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium border transition-all duration-200 hover:border-indigo-500 hover:text-indigo-400 hover:bg-indigo-500/5 animate-fade-in-right"
              style={{ borderColor: "var(--border)", color: "var(--muted)" }}
            >
              <FiBriefcase size={13} />
              <span>Recruiter View</span>
            </button>

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
