"use client";

import { useState, useEffect, useCallback } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import HowIThinkSection from "./components/HowIThinkSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import RecruiterModal from "./components/RecruiterModal";
import { NAVIGATION } from "@/config/portfolio.config";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [recruiterModalOpen, setRecruiterModalOpen] = useState(false);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
    }
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = NAVIGATION.sections.map((s) => s.id);

    const handleScroll = () => {
      const scrollY = window.scrollY + 100;

      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close modal on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setRecruiterModalOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = recruiterModalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [recruiterModalOpen]);

  return (
    <div style={{ background: "var(--bg)" }}>
      {/* Hidden static form for Netlify Forms detection at build time */}
      <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="company" />
        <textarea name="message" />
        <input name="bot-field" />
      </form>
      <Navigation
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onRecruiterMode={() => setRecruiterModalOpen(true)}
      />

      <main>
        <HeroSection
          onScrollToSection={scrollToSection}
          onRecruiterMode={() => setRecruiterModalOpen(true)}
        />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <HowIThinkSection />
        <ContactSection />
      </main>

      <Footer />

      <RecruiterModal
        isOpen={recruiterModalOpen}
        onClose={() => setRecruiterModalOpen(false)}
      />
    </div>
  );
}
