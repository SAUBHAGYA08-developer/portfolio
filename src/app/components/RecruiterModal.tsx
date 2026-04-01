"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiArrowUpRight, FiDownload, FiCheckCircle } from "react-icons/fi";
import { RECRUITER_MODE, PERSONAL } from "@/config/portfolio.config";

interface RecruiterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RecruiterModal({ isOpen, onClose }: RecruiterModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 modal-backdrop"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 250 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ pointerEvents: "none" }}
          >
            <div
              className="relative w-full max-w-2xl rounded-2xl border overflow-hidden"
              style={{
                background: "var(--surface)",
                borderColor: "rgba(99, 102, 241, 0.2)",
                pointerEvents: "auto",
                maxHeight: "90vh",
                overflowY: "auto",
              }}
            >
              {/* Header */}
              <div
                className="sticky top-0 flex items-center justify-between p-6 border-b z-10"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                }}
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="w-2 h-2 rounded-full pulse-glow"
                      style={{ background: "var(--available)" }}
                    />
                    <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">
                      Available for Work
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-100">
                    {RECRUITER_MODE.title}
                  </h2>
                  <p className="text-sm text-slate-500">{RECRUITER_MODE.subtitle}</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors flex-shrink-0"
                >
                  <FiX size={18} />
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* Snapshot */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                    Profile Snapshot
                  </p>
                  <div className="grid gap-2">
                    {RECRUITER_MODE.snapshot.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-3 py-2.5 px-3 rounded-lg border"
                        style={{
                          borderColor: "var(--border)",
                          background: "rgba(30, 41, 59, 0.4)",
                        }}
                      >
                        <span className="text-xs text-slate-500 w-28 flex-shrink-0">
                          {item.label}
                        </span>
                        <span className="text-sm text-slate-200 font-medium">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top Skills */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                    Core Skills
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {RECRUITER_MODE.topSkills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium skill-badge"
                        style={{ color: "var(--primary)" }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                    Key Achievements
                  </p>
                  <ul className="space-y-3">
                    {RECRUITER_MODE.keyAchievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <FiCheckCircle
                          size={14}
                          className="flex-shrink-0 mt-0.5 text-indigo-400"
                        />
                        <span className="text-sm text-slate-400 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 pt-2 border-t" style={{ borderColor: "var(--border)" }}>
                  <a
                    href={PERSONAL.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white btn-primary"
                  >
                    <FiDownload size={14} />
                    Download Resume
                  </a>
                  <a
                    href={PERSONAL.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium btn-outline"
                  >
                    LinkedIn Profile
                    <FiArrowUpRight size={13} />
                  </a>
                  <a
                    href={`mailto:${PERSONAL.email}`}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium btn-outline"
                  >
                    Send Email
                    <FiArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
