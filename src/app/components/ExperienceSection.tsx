"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiCheckCircle, FiCalendar, FiMapPin } from "react-icons/fi";
import { EXPERIENCE } from "@/config/portfolio.config";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
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
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            Where I&apos;ve Built
          </h2>
          <div
            className="w-12 h-0.5 rounded-full"
            style={{ background: "var(--primary)" }}
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-0 md:left-8 top-0 bottom-0 w-px timeline-line hidden sm:block"
            style={{ marginLeft: "1px" }}
          />

          <div className="space-y-12">
            {EXPERIENCE.map((job, index) => (
              <motion.div
                key={`${job.company}-${job.role}`}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative sm:pl-24"
              >
                {/* Timeline dot */}
                <div
                  className="hidden sm:flex absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 items-center justify-center top-5"
                  style={{
                    borderColor: "var(--primary)",
                    background: "var(--bg)",
                  }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "var(--primary)" }}
                  />
                </div>

                {/* Card */}
                <div
                  className="p-6 sm:p-8 rounded-2xl border glass hover:border-indigo-500/30 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex flex-wrap gap-4 items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="text-xl font-bold text-slate-100">
                          {job.role}
                        </h3>
                        <span
                          className="px-2 py-0.5 rounded-full text-xs font-medium border"
                          style={{
                            borderColor: "rgba(99, 102, 241, 0.3)",
                            background: "rgba(99, 102, 241, 0.08)",
                            color: "var(--primary)",
                          }}
                        >
                          {job.location.includes("Full-time")
                            ? "Full-time"
                            : "Contract"}
                        </span>
                      </div>
                      <a
                        href={job.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-base font-semibold hover:text-indigo-400 transition-colors"
                        style={{ color: "var(--secondary)" }}
                      >
                        {job.company}
                        <FiExternalLink size={12} />
                      </a>
                    </div>

                    <div className="flex flex-col gap-1 text-right">
                      <div className="flex items-center gap-1.5 text-slate-400 text-sm justify-end">
                        <FiCalendar size={12} />
                        <span>{job.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400 text-xs justify-end">
                        <FiMapPin size={11} />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {job.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {job.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.06 + 0.2 }}
                          className="flex gap-3 text-sm text-slate-400 leading-relaxed"
                        >
                          <FiCheckCircle
                            className="flex-shrink-0 mt-0.5"
                            size={14}
                            style={{ color: "var(--primary)" }}
                          />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-medium skill-badge"
                          style={{ color: "var(--muted)" }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
