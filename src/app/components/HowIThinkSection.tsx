"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiTarget, FiTerminal, FiLayers, FiChevronRight } from "react-icons/fi";
import { HOW_I_THINK } from "@/config/portfolio.config";

type TerminalLine = { text: string; type: "command" | "error" | "output" | "success" };

const lineColors: Record<TerminalLine["type"], string> = {
  command: "#94a3b8",
  error: "#f87171",
  output: "#e2e8f0",
  success: "#4ade80",
};

function TerminalView({ lines }: { lines: TerminalLine[] }) {
  return (
    <div className="terminal-card rounded-xl overflow-hidden text-xs leading-relaxed">
      {/* Terminal header */}
      <div className="terminal-header flex items-center gap-1.5 px-4 py-3">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <span className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-slate-600 text-xs">debugging.sh</span>
      </div>
      {/* Lines — use animate (not whileInView) so they fire on tab mount */}
      <div className="p-4 space-y-1.5">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.12, duration: 0.25, ease: "easeOut" }}
            className="font-mono"
            style={{ color: lineColors[line.type] }}
          >
            {line.text}
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: lines.length * 0.12 + 0.2 }}
          className="font-mono text-green-400 terminal-cursor mt-2"
        />
      </div>
    </div>
  );
}

const tabs = [
  { key: "approach", label: "Problem Approach", icon: FiTarget },
  { key: "debugging", label: "Debugging Style", icon: FiTerminal },
  { key: "architecture", label: "Architecture", icon: FiLayers },
] as const;

type TabKey = (typeof tabs)[number]["key"];

export default function HowIThinkSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("approach");

  return (
    <section
      id="thinking"
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
          className="mb-12"
        >
          <p
            className="text-sm font-medium tracking-widest uppercase mb-3"
            style={{ color: "var(--primary)" }}
          >
            Engineering Philosophy
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-3">
            {HOW_I_THINK.title}
          </h2>
          <p className="text-slate-400 text-sm">{HOW_I_THINK.subtitle}</p>
          <div
            className="w-12 h-0.5 rounded-full mt-4"
            style={{ background: "var(--primary)" }}
          />
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {tabs.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 border focus-ring"
              style={
                activeTab === key
                  ? {
                      borderColor: "rgba(99, 102, 241, 0.4)",
                      background: "rgba(99, 102, 241, 0.1)",
                      color: "var(--primary)",
                    }
                  : {
                      borderColor: "var(--border)",
                      background: "transparent",
                      color: "var(--muted)",
                    }
              }
            >
              <Icon size={14} />
              {label}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "approach" && (
            <motion.div
              key="approach"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-8 items-start"
            >
              <div>
                <h3 className="text-xl font-bold text-slate-100 mb-3">
                  {HOW_I_THINK.approach.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  {HOW_I_THINK.approach.description}
                </p>
                <div className="space-y-3">
                  {HOW_I_THINK.approach.steps.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.25 }}
                      className="flex items-start gap-3"
                    >
                      <span
                        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                        style={{
                          background: "rgba(99, 102, 241, 0.15)",
                          color: "var(--primary)",
                        }}
                      >
                        {i + 1}
                      </span>
                      <span className="text-sm text-slate-300 leading-relaxed">{step}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <div
                className="p-6 rounded-2xl border glass"
              >
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-4">
                  Thought process
                </p>
                <div className="space-y-3">
                  {["Business", "Domain", "Contract", "Failure Modes", "Build"].map(
                    (step, i, arr) => (
                      <div key={step} className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                          style={{
                            background:
                              i === 0
                                ? "rgba(99, 102, 241, 0.2)"
                                : "rgba(30, 41, 59, 0.8)",
                            color:
                              i === 0 ? "var(--primary)" : "var(--muted)",
                            border: `1px solid ${
                              i === 0
                                ? "rgba(99, 102, 241, 0.3)"
                                : "var(--border)"
                            }`,
                          }}
                        >
                          {i + 1}
                        </div>
                        <span
                          className="text-sm font-medium"
                          style={{
                            color: i === 0 ? "var(--primary)" : "var(--muted)",
                          }}
                        >
                          {step}
                        </span>
                        {i < arr.length - 1 && (
                          <FiChevronRight
                            size={12}
                            className="text-slate-700 ml-auto"
                          />
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "debugging" && (
            <motion.div
              key="debugging"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-8 items-start"
            >
              <div>
                <h3 className="text-xl font-bold text-slate-100 mb-3">
                  {HOW_I_THINK.debugging.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {HOW_I_THINK.debugging.description}
                </p>
                <div className="space-y-4">
                  {[
                    { step: "Observe", desc: "Read logs and metrics before forming any theory" },
                    { step: "Hypothesize", desc: "Form a specific, falsifiable hypothesis" },
                    { step: "Isolate", desc: "Reproduce in staging, narrow the blast radius" },
                    { step: "Verify", desc: "Test the hypothesis with evidence, not assumptions" },
                    { step: "Fix & Monitor", desc: "Apply the fix, verify in prod, set alerts" },
                  ].map(({ step, desc }, i) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.25 }}
                      className="flex gap-3"
                    >
                      <span
                        className="flex-shrink-0 px-2 py-0.5 rounded text-xs font-bold mt-0.5 h-fit"
                        style={{
                          background: "rgba(99, 102, 241, 0.15)",
                          color: "var(--primary)",
                        }}
                      >
                        {step}
                      </span>
                      <span className="text-sm text-slate-400 leading-relaxed">
                        {desc}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <TerminalView lines={HOW_I_THINK.debugging.terminalLines} />
            </motion.div>
          )}

          {activeTab === "architecture" && (
            <motion.div
              key="architecture"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-100 mb-3">
                  {HOW_I_THINK.architecture.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {HOW_I_THINK.architecture.description}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {HOW_I_THINK.architecture.principles.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.25 }}
                    className="p-5 rounded-xl border glass hover:border-indigo-500/30 transition-all duration-200"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className="w-1.5 h-5 rounded-full"
                        style={{ background: "var(--primary)" }}
                      />
                      <h4 className="text-sm font-semibold text-slate-200">
                        {p.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {p.detail}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
