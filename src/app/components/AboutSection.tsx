"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiClock, FiCode, FiZap, FiCheckCircle } from "react-icons/fi";
import { ABOUT, PERSONAL } from "@/config/portfolio.config";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Location: FiMapPin,
  Experience: FiClock,
  "Primary Stack": FiCode,
  Domain: FiZap,
  Status: FiCheckCircle,
};

function getIcon(label: string) {
  return iconMap[label] || FiZap;
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 scroll-mt-16"
      style={{ background: "var(--surface)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: "var(--primary)" }}>
            About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            {ABOUT.title}
          </h2>
          <div className="w-12 h-0.5 rounded-full" style={{ background: "var(--primary)" }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="space-y-5">
              {ABOUT.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="text-slate-400 leading-relaxed"
                  style={{ fontSize: i === 0 ? "1.0625rem" : "0.9375rem" }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Currently at */}
            <div
              className="mt-8 p-4 rounded-xl border-l-2 glass"
              style={{ borderLeftColor: "var(--primary)" }}
            >
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Currently</p>
              <p className="text-slate-200 font-medium text-sm">
                {PERSONAL.currentRole} at {PERSONAL.currentCompany} — {PERSONAL.currentFocus}
              </p>
            </div>
          </motion.div>

          {/* Quick Facts */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-sm font-medium uppercase tracking-widest text-slate-500 mb-6">
              Quick Facts
            </h3>

            <div className="space-y-3">
              {ABOUT.quickFacts.map((fact) => {
                const Icon = getIcon(fact.label);
                return (
                  <div
                    key={fact.label}
                    className="flex items-center gap-4 p-4 rounded-xl border skill-badge"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(99, 102, 241, 0.1)" }}
                    >
                      <Icon size={15} className="text-indigo-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-500 mb-0.5">{fact.label}</p>
                      <p className="text-slate-200 text-sm font-medium">{fact.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-6 p-5 rounded-xl border text-center"
              style={{
                borderColor: "rgba(74, 222, 128, 0.2)",
                background: "rgba(74, 222, 128, 0.04)",
              }}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <span
                  className="w-2 h-2 rounded-full pulse-glow"
                  style={{ background: "var(--available)" }}
                />
                <span className="text-green-400 text-sm font-semibold">
                  Open to Work
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Actively seeking backend engineering roles.
                <br />
                Backend-heavy, systems-focused, high-impact preferred.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
