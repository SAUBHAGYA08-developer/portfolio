"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiStar,
  FiGitBranch,
  FiCode,
  FiZap,
  FiTrendingUp,
} from "react-icons/fi";
import { PROJECTS, PERSONAL, GITHUB_CONFIG } from "@/config/portfolio.config";
import type { GithubRepo } from "@/app/api/github/route";

const categoryColors: Record<string, { text: string; bg: string }> = {
  Microservices: { text: "#6366f1", bg: "rgba(99,102,241,0.08)" },
  "Distributed Systems": { text: "#38bdf8", bg: "rgba(56,189,248,0.08)" },
  "Data Engineering": { text: "#a78bfa", bg: "rgba(167,139,250,0.08)" },
  Integration: { text: "#4ade80", bg: "rgba(74,222,128,0.08)" },
};

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS.items)[0];
  index: number;
}) {
  const colors = categoryColors[project.category] || {
    text: "var(--primary)",
    bg: "rgba(99,102,241,0.08)",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="flex flex-col p-6 rounded-2xl border glass hover:border-slate-600 transition-all duration-300 group"
    >
      {/* Category + Company */}
      <div className="flex items-center justify-between mb-4">
        <span
          className="px-2.5 py-1 rounded-full text-xs font-semibold"
          style={{ color: colors.text, background: colors.bg }}
        >
          {project.category}
        </span>
        <span className="text-xs text-slate-600 font-medium">
          {project.company}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-base font-bold text-slate-100 mb-3 leading-snug group-hover:text-indigo-300 transition-colors">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      {/* Impact */}
      <div className="mb-5">
        <div className="flex items-center gap-1.5 mb-2">
          <FiTrendingUp size={12} style={{ color: "var(--available)" }} />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Impact
          </span>
        </div>
        <ul className="space-y-1.5">
          {project.impact.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
              <FiZap
                size={10}
                className="mt-0.5 flex-shrink-0"
                style={{ color: "var(--available)" }}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 rounded text-xs font-medium"
            style={{
              background: "rgba(30, 41, 59, 0.8)",
              color: "var(--muted)",
              border: "1px solid rgba(51, 65, 85, 0.6)",
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function GitHubRepoCard({
  repo,
  index,
}: {
  repo: GithubRepo;
  index: number;
}) {
  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="flex flex-col p-5 rounded-xl border glass hover:border-slate-600 transition-all duration-300 group"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <FiCode size={14} className="text-slate-500" />
          <span className="text-sm font-semibold text-slate-200 group-hover:text-indigo-300 transition-colors truncate">
            {repo.name}
          </span>
        </div>
        <FiArrowUpRight
          size={14}
          className="text-slate-600 group-hover:text-indigo-400 transition-colors flex-shrink-0"
        />
      </div>

      <p className="text-xs text-slate-500 leading-relaxed mb-4 flex-1">
        {repo.description}
      </p>

      <div className="flex items-center gap-4 text-xs text-slate-600">
        {repo.language && (
          <span className="flex items-center gap-1">
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "var(--primary)" }}
            />
            {repo.language}
          </span>
        )}
        {repo.stargazers_count > 0 && (
          <span className="flex items-center gap-1">
            <FiStar size={11} />
            {repo.stargazers_count}
          </span>
        )}
        {repo.forks_count > 0 && (
          <span className="flex items-center gap-1">
            <FiGitBranch size={11} />
            {repo.forks_count}
          </span>
        )}
      </div>
    </motion.a>
  );
}

export default function ProjectsSection() {
  const [githubRepos, setGithubRepos] = useState<GithubRepo[]>([]);
  const [githubLoading, setGithubLoading] = useState(GITHUB_CONFIG.enabled);

  useEffect(() => {
    if (!GITHUB_CONFIG.enabled) return;
    fetch("/api/github")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setGithubRepos(data);
      })
      .catch(() => {})
      .finally(() => setGithubLoading(false));
  }, []);

  return (
    <section
      id="projects"
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
          className="mb-5"
        >
          <p
            className="text-sm font-medium tracking-widest uppercase mb-3"
            style={{ color: "var(--primary)" }}
          >
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-3">
            {PROJECTS.title}
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">{PROJECTS.subtitle}</p>
          <div
            className="w-12 h-0.5 rounded-full mt-4"
            style={{ background: "var(--primary)" }}
          />
        </motion.div>

        {/* Work Projects */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 ${GITHUB_CONFIG.enabled ? "mb-16" : "mb-0"}`}>
          {PROJECTS.items.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* GitHub Section — controlled by GITHUB_CONFIG.enabled */}
        {GITHUB_CONFIG.enabled && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-divider mb-12" />

            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-lg font-bold text-slate-200">
                  GitHub Activity
                </h3>
                <p className="text-sm text-slate-500 mt-0.5">
                  Public repos from{" "}
                  <a
                    href={PERSONAL.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:underline"
                  >
                    @{PERSONAL.githubUsername}
                  </a>
                </p>
              </div>
              <a
                href={PERSONAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium border transition-all duration-200 hover:border-indigo-500 hover:text-indigo-400"
                style={{ borderColor: "var(--border)", color: "var(--muted)" }}
              >
                View All
                <FiArrowUpRight size={12} />
              </a>
            </div>

            {githubLoading ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="h-36 rounded-xl shimmer" />
                ))}
              </div>
            ) : githubRepos.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {githubRepos.map((repo, i) => (
                  <GitHubRepoCard key={repo.id} repo={repo} index={i} />
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-slate-600 text-sm">
                No public repos found — most work is in private repositories.
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
