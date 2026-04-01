"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiCheckCircle,
  FiArrowUpRight,
  FiEdit3,
} from "react-icons/fi";
import { CONTACT, PERSONAL } from "@/config/portfolio.config";

const iconMap = {
  email: FiMail,
  github: FiGithub,
  linkedin: FiLinkedin,
  medium: FiEdit3,
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          ...formData,
        }).toString(),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border text-sm text-slate-200 placeholder-slate-600 outline-none transition-all duration-200 focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/20";
  const inputStyle = {
    background: "rgba(30, 41, 59, 0.5)",
    borderColor: "var(--border)",
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 scroll-mt-16"
      style={{ background: "var(--bg)" }}
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
          <p
            className="text-sm font-medium tracking-widest uppercase mb-3"
            style={{ color: "var(--primary)" }}
          >
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-3">
            {CONTACT.title}
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            {CONTACT.description}
          </p>
          <div
            className="w-12 h-0.5 rounded-full mt-4"
            style={{ background: "var(--primary)" }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Social links + info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-slate-200 mb-6">
              {CONTACT.subtitle}
            </h3>

            <div className="space-y-3 mb-10">
              {CONTACT.socialLinks.map((link) => {
                const Icon =
                  iconMap[link.type as keyof typeof iconMap] || FiMail;
                const isComingSoon = link.badge === "Coming Soon";
                return (
                  <a
                    key={link.type}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-xl border glass transition-all duration-200 group ${
                      isComingSoon
                        ? "opacity-60 cursor-default hover:border-slate-700"
                        : "hover:border-indigo-500/30"
                    }`}
                    onClick={isComingSoon ? (e) => e.preventDefault() : undefined}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(99, 102, 241, 0.1)" }}
                    >
                      <Icon size={16} className="text-indigo-400" />
                    </div>
                    <span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors flex-1">
                      {link.label}
                    </span>
                    {isComingSoon ? (
                      <span className="text-xs px-2 py-0.5 rounded-full border font-medium"
                        style={{
                          borderColor: "rgba(99, 102, 241, 0.3)",
                          background: "rgba(99, 102, 241, 0.08)",
                          color: "var(--primary)",
                        }}
                      >
                        Coming Soon
                      </span>
                    ) : (
                      <FiArrowUpRight
                        size={14}
                        className="text-slate-600 group-hover:text-indigo-400 transition-colors"
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Resume CTA */}
            <div
              className="p-5 rounded-xl border"
              style={{
                borderColor: "rgba(99, 102, 241, 0.2)",
                background: "rgba(99, 102, 241, 0.04)",
              }}
            >
              <p className="text-sm text-slate-300 font-medium mb-1">
                Want the full picture?
              </p>
              <p className="text-xs text-slate-500 mb-4">
                Download my resume for a formatted view of my experience, skills,
                and education.
              </p>
              <a
                href={PERSONAL.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white btn-primary"
              >
                Download Resume
                <FiArrowUpRight size={13} />
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              name="contact"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-500 mb-1.5 ml-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={CONTACT.form.namePlaceholder}
                    required
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1.5 ml-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={CONTACT.form.emailPlaceholder}
                    required
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-500 mb-1.5 ml-1">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder={CONTACT.form.companyPlaceholder}
                  className={inputClass}
                  style={inputStyle}
                />
              </div>

              <div>
                <label className="block text-xs text-slate-500 mb-1.5 ml-1">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={CONTACT.form.messagePlaceholder}
                  required
                  rows={5}
                  className={`${inputClass} resize-none`}
                  style={inputStyle}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white btn-primary disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
              >
                <FiSend size={14} />
                {status === "sending" ? "Sending…" : CONTACT.form.submitLabel}
              </button>

              {/* Status message */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-2 p-3 rounded-xl text-sm border"
                    style={{
                      background: "rgba(74, 222, 128, 0.08)",
                      borderColor: "rgba(74, 222, 128, 0.2)",
                      color: "var(--available)",
                    }}
                  >
                    <FiCheckCircle size={16} />
                    Message sent! I&apos;ll get back to you soon.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-2 p-3 rounded-xl text-sm border"
                    style={{
                      background: "rgba(239, 68, 68, 0.08)",
                      borderColor: "rgba(239, 68, 68, 0.2)",
                      color: "#f87171",
                    }}
                  >
                    Something went wrong. Email me directly at {PERSONAL.email}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
