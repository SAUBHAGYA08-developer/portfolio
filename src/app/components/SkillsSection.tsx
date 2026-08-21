"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaJava,
  FaDocker,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";
import {
  SiSpring,
  SiMysql,
  SiRedis,
  SiJenkins,
  SiApachekafka,
  SiAmazons3,
  SiJira,
  SiConfluence,
  SiHibernate,
  SiApachemaven,
  SiGo,
} from "react-icons/si";
import { FiServer, FiDatabase, FiCloud, FiTool, FiCode, FiWifi, FiCpu, FiRadio } from "react-icons/fi";
import { SiGithubcopilot, SiAnthropic, SiNewrelic, SiAmazondynamodb } from "react-icons/si";
import { SKILLS } from "@/config/portfolio.config";

type IconComponent = React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;

const iconMap: Record<string, IconComponent> = {
  Java: FaJava,
  Go: SiGo,
  Spring: SiSpring,
  MySQL: SiMysql,
  Redis: SiRedis,
  AWS: FaAws,
  Docker: FaDocker,
  Jenkins: SiJenkins,
  Git: FaGitAlt,
  Kafka: SiApachekafka,
  Jira: SiJira,
  Confluence: SiConfluence,
  Hibernate: SiHibernate,
  Build: SiApachemaven,
  Database: FiDatabase,
  Network: FiServer,
  Api: FiCode,
  Socket: FiWifi,
  Redshift: SiAmazons3,
  Cloud: FiCloud,
  Tool: FiTool,
  NewRelic: SiNewrelic,
  DynamoDB: SiAmazondynamodb,
  Grpc: FiRadio,
  Claude: SiAnthropic,
  Cursor: FiCpu,
  Copilot: SiGithubcopilot,
};

const categoryIcons: Record<string, IconComponent> = {
  Backend: FiServer,
  Database: FiDatabase,
  "Cloud & Messaging": FiCloud,
  "DevOps & Tools": FiTool,
  "AI Tools": FiCpu,
};

const categoryColors: Record<string, string> = {
  Backend: "#6366f1",
  Database: "#38bdf8",
  "Cloud & Messaging": "#a78bfa",
  "DevOps & Tools": "#4ade80",
  "AI Tools": "#f472b6",
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(
    SKILLS.categories[0].name
  );

  const current = SKILLS.categories.find((c) => c.name === activeCategory);

  return (
    <section
      id="skills"
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
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-3">
            {SKILLS.title}
          </h2>
          <p className="text-slate-400 text-sm">{SKILLS.subtitle}</p>
          <div
            className="w-12 h-0.5 rounded-full mt-4"
            style={{ background: "var(--primary)" }}
          />
        </motion.div>

        {/* Category Overview Cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8"
        >
          {SKILLS.categories.map((cat) => {
            const CatIcon = categoryIcons[cat.name] || FiServer;
            const color = categoryColors[cat.name] || "var(--primary)";
            const isActive = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className="p-4 rounded-xl border text-left transition-all duration-200 focus-ring"
                style={{
                  borderColor: isActive
                    ? `${color}60`
                    : "rgba(51, 65, 85, 0.6)",
                  background: isActive
                    ? `${color}10`
                    : "rgba(30, 41, 59, 0.4)",
                }}
              >
                <CatIcon
                  size={18}
                  className="mb-2"
                  style={{ color: isActive ? color : "var(--muted)" }}
                />
                <p
                  className="text-xs font-semibold"
                  style={{ color: isActive ? color : "var(--muted)" }}
                >
                  {cat.name}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  {cat.skills.length} skills
                </p>
              </button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          {current && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
            >
              {current.skills.map((skill, i) => {
                const Icon = iconMap[skill.icon] || FiCode;
                const color =
                  categoryColors[activeCategory] || "var(--primary)";
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.04 }}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl border skill-badge text-center cursor-default group"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200"
                      style={{
                        background: `${color}15`,
                      }}
                    >
                      <Icon
                        size={20}
                        style={{ color }}
                        className="group-hover:scale-110 transition-transform duration-200"
                      />
                    </div>
                    <span className="text-xs font-medium text-slate-300 leading-tight text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* All Skills Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-slate-800"
        >
          <p className="text-xs text-slate-400 uppercase tracking-wider mb-4 text-center">
            All technologies
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {SKILLS.categories.flatMap((cat) =>
              cat.skills.map((skill) => (
                <span
                  key={`${cat.name}-${skill.name}`}
                  className="px-2.5 py-1 rounded-md text-xs border skill-badge"
                  style={{ color: "var(--muted)" }}
                >
                  {skill.name}
                </span>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
