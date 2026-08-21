"use client";

import { FOOTER } from "@/config/portfolio.config";

export default function Footer() {
  const year = new Date().getFullYear();
  const text = FOOTER.text.replace("{YEAR}", String(year));

  return (
    <footer
      className="py-10 px-4 sm:px-6 lg:px-8 border-t"
      style={{
        borderColor: "var(--border)",
        background: "var(--surface)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="section-divider mb-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm text-slate-400" suppressHydrationWarning>
              {text}
            </p>
            <p className="text-xs text-slate-400 mt-0.5">{FOOTER.tagline}</p>
          </div>

          <div className="flex items-center gap-5">
            {FOOTER.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-400 hover:text-indigo-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
