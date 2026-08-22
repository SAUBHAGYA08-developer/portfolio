"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiArrowRight, FiEdit3 } from "react-icons/fi";
import { HERO, PERSONAL } from "@/config/portfolio.config";

function useTypewriter(
  words: string[],
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseDuration = 1800
) {
  const [text, setText] = useState(words[0] ?? "");
  const [wordIdx, setWordIdx] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">(
    "typing"
  );

  useEffect(() => {
    const word = words[wordIdx];

    if (phase === "typing") {
      if (text.length < word.length) {
        const t = setTimeout(
          () => setText(word.slice(0, text.length + 1)),
          typingSpeed
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("deleting"), pauseDuration);
        return () => clearTimeout(t);
      }
    }

    if (phase === "deleting") {
      if (text.length > 0) {
        const t = setTimeout(
          () => setText(text.slice(0, -1)),
          deletingSpeed
        );
        return () => clearTimeout(t);
      } else {
        setWordIdx((prev) => (prev + 1) % words.length);
        setPhase("typing");
      }
    }
  }, [text, phase, wordIdx, words, typingSpeed, deletingSpeed, pauseDuration]);

  return text;
}

const socialLinks = [
  { href: PERSONAL.github, icon: FiGithub, label: "GitHub" },
  { href: PERSONAL.linkedin, icon: FiLinkedin, label: "LinkedIn" },
  { href: `mailto:${PERSONAL.email}`, icon: FiMail, label: "Email" },
  { href: PERSONAL.medium, icon: FiEdit3, label: "Medium (coming soon)", disabled: true },
];

interface HeroSectionProps {
  onScrollToSection: (id: string) => void;
  onRecruiterMode: () => void;
}

export default function HeroSection({
  onScrollToSection,
  onRecruiterMode,
}: HeroSectionProps) {
  const typedRole = useTypewriter(HERO.roles);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 px-4 sm:px-6 lg:px-8 dot-grid overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none opacity-10 blur-3xl"
        style={{ background: "var(--primary)" }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full pointer-events-none opacity-5 blur-3xl"
        style={{ background: "var(--secondary)" }}
      />

      <div className="max-w-7xl mx-auto w-full py-20">
        <div className="max-w-3xl">
          {/* Status badge */}
          {PERSONAL.availableForWork && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-8 border"
              style={{
                borderColor: "rgba(74, 222, 128, 0.3)",
                background: "rgba(74, 222, 128, 0.08)",
                color: "var(--available)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full pulse-glow"
                style={{ background: "var(--available)" }}
              />
              {HERO.statusBadge}
            </motion.div>
          )}

          {/* Greeting + Name */}
          <motion.div
            initial={{ y: 24 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-slate-400 text-lg mb-2 font-medium">
              {HERO.greeting}
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
              <span className="text-slate-100">{PERSONAL.name}</span>
            </h1>
          </motion.div>

          {/* Typing role */}
          <motion.div
            initial={{ y: 24 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl font-medium mb-6 min-h-[2rem]"
          >
            <span style={{ color: "var(--primary)" }}>{typedRole}</span>
            <span
              className="cursor-blink ml-0.5 font-light"
              style={{ color: "var(--primary)" }}
            >
              |
            </span>
            {/* Static list of all roles for search engines & screen readers —
                the animation above only shows one role at a time visually. */}
            <span className="sr-only">
              {PERSONAL.name} — {HERO.roles.join(", ")}
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ y: 24 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed mb-10"
          >
            {HERO.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            <button
              onClick={() => onScrollToSection(HERO.cta.primarySection)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold text-white btn-primary focus-ring"
            >
              {HERO.cta.primary}
              <FiArrowRight size={14} />
            </button>

            <button
              onClick={() =>
                window.open(PERSONAL.resumeUrl, "_blank", "noopener,noreferrer")
              }
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium btn-outline focus-ring"
            >
              <FiDownload size={14} />
              {HERO.cta.secondary}
            </button>

            <button
              onClick={onRecruiterMode}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 text-slate-400 hover:text-indigo-400 underline underline-offset-4 decoration-dotted"
            >
              {HERO.cta.recruiter}
            </button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
          >
            {HERO.stats.map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-xl border glass text-center"
              >
                <div
                  className="text-2xl font-bold mb-0.5"
                  style={{ color: "var(--primary)" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map(({ href, icon: Icon, label, disabled }) =>
              disabled ? (
                <span
                  key={label}
                  role="img"
                  title="Coming Soon"
                  className="relative p-2.5 rounded-lg border opacity-40 cursor-default"
                  style={{ borderColor: "var(--border)", color: "var(--muted)" }}
                  aria-label={label}
                >
                  <Icon size={18} />
                  <span className="absolute -top-1.5 -right-1.5 w-2 h-2 rounded-full bg-indigo-500 border border-slate-950" />
                </span>
              ) : (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border transition-all duration-200 hover:border-indigo-500 hover:text-indigo-400 hover:bg-indigo-500/5 focus-ring"
                  style={{ borderColor: "var(--border)", color: "var(--muted)" }}
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              )
            )}
            <span className="text-slate-400 text-sm ml-2">
              {PERSONAL.currentRole} @ {PERSONAL.currentCompany}
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <button
          onClick={() => onScrollToSection("about")}
          className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-slate-400 transition-colors group"
        >
          <span className="text-xs tracking-widest uppercase">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 rounded-full"
            style={{
              background:
                "linear-gradient(to bottom, var(--border), transparent)",
            }}
          />
        </button>
      </motion.div>
    </section>
  );
}
