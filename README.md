# Saubhagya Shukla — Portfolio

A config-driven, SEO-optimized developer portfolio built with **Next.js 15**, **Tailwind CSS v4**, and **Framer Motion**.

> Built for backend engineers who want a portfolio that speaks for them — depth over design.

---

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## How to Customize

**All content lives in a single file:**

```
src/config/portfolio.config.ts
```

Edit this file to update everything across the portfolio. No component changes needed.

### What you can configure:

| Export | What it controls |
|--------|-----------------|
| `PERSONAL` | Name, title, company, email, GitHub, LinkedIn, resume URL, availability |
| `SEO` | Meta title, description, keywords, Open Graph image, site URL |
| `HERO` | Greeting, typing roles, description, CTA buttons, stats, status badge |
| `ABOUT` | Bio paragraphs, quick facts |
| `EXPERIENCE` | Work history, achievements, tech stack per role |
| `SKILLS` | Categorized skill groups (Backend, Database, Cloud, DevOps) |
| `PROJECTS` | Featured work projects with impact metrics |
| `HOW_I_THINK` | Problem approach, debugging style, architecture principles |
| `RECRUITER_MODE` | Quick snapshot modal content (skills, achievements, snapshot) |
| `CONTACT` | Social links, Formspree endpoint, form placeholder text |
| `NAVIGATION` | Brand name, section list |
| `FOOTER` | Copyright text, tagline, footer links |
| `GITHUB_CONFIG` | GitHub username, how many repos to display |

---

## Environment Variables (Optional)

Create a `.env.local` file in the project root:

```env
# Optional: GitHub personal access token for higher API rate limits (60 → 5000 req/hour)
GITHUB_TOKEN=your_github_token_here
```

Without a token, the GitHub API allows 60 requests/hour per IP — more than enough for a portfolio.

---

## Project Structure

```
src/
├── config/
│   └── portfolio.config.ts     ← MASTER CONFIG (edit this)
├── app/
│   ├── api/
│   │   └── github/
│   │       └── route.ts        ← GitHub API integration
│   ├── components/
│   │   ├── Navigation.tsx      ← Top navbar with recruiter mode
│   │   ├── MobileNav.tsx       ← Mobile slide-out drawer
│   │   ├── HeroSection.tsx     ← Homepage with typing animation
│   │   ├── AboutSection.tsx    ← Bio + quick facts
│   │   ├── ExperienceSection.tsx ← Work history timeline
│   │   ├── SkillsSection.tsx   ← Categorized skills with tabs
│   │   ├── ProjectsSection.tsx ← Work projects + GitHub repos
│   │   ├── HowIThinkSection.tsx ← Engineering philosophy
│   │   ├── ContactSection.tsx  ← Contact form + social links
│   │   ├── RecruiterModal.tsx  ← Recruiter quick-view modal
│   │   └── Footer.tsx
│   ├── globals.css             ← Global styles, CSS variables
│   ├── layout.tsx              ← SEO metadata, fonts
│   └── page.tsx                ← Main page (wires sections together)
└── constants/
    └── portfolio.ts            ← (legacy, no longer used)
```

---

## Features

### Config-Driven Content
Every text, link, and data point is defined in `src/config/portfolio.config.ts`. One file to rule them all.

### SEO Optimized
- Metadata API with title, description, keywords
- Open Graph tags for social sharing
- Twitter card support
- Canonical URL
- Robots: index, follow

### GitHub API Integration
- Fetches public repos from GitHub at runtime
- Displays in the Projects section under "GitHub Activity"
- Cached for 1 hour via Next.js `revalidate`
- Falls back gracefully if the API is unavailable
- Optionally add a `GITHUB_TOKEN` env variable for higher rate limits

### Recruiter Mode
Click **"Recruiter View"** in the navbar (desktop or mobile menu) to open a modal showing:
- Profile snapshot (role, stack, experience, location, status)
- Top 10 skills
- Key achievements
- Quick links (resume, LinkedIn, email)

### Typing Animation Hero
The hero section cycles through multiple roles (Java Backend Engineer, Microservices Architect, etc.) using a custom `useTypewriter` hook.

### "How I Think" Section
Three-tab section covering:
1. **Problem Approach** — Step-by-step breakdown of how problems are tackled
2. **Debugging Style** — Terminal-style walkthrough of a real debugging scenario
3. **Architecture Decisions** — 5 engineering principles with explanations

### Mobile-First Design
- Responsive at all breakpoints
- Mobile slide-out navigation drawer
- Touch-friendly buttons and spacing

### Performance
- First Load JS: ~166 kB (well under 200 kB target)
- Static generation for all pages
- Dynamic API route for GitHub (cached)
- `display: swap` for fonts

---

## Updating Content — Examples

### Update your availability status

```ts
// src/config/portfolio.config.ts
export const PERSONAL = {
  availableForWork: false, // ← change this
  ...
};
```

### Add a new project

```ts
export const PROJECTS = {
  items: [
    {
      title: "New Project Title",
      description: "What it does and why it matters.",
      impact: ["Impact point 1", "Impact point 2"],
      tech: ["Java", "Spring Boot", "AWS"],
      category: "Microservices",  // or: Distributed Systems, Data Engineering, Integration
      company: "Company Name",
    },
    // ... existing projects
  ],
};
```

### Add a new experience entry

```ts
export const EXPERIENCE = [
  {
    company: "New Company",
    companyUrl: "https://company.com",
    role: "Senior Backend Engineer",
    period: "2024 — Present",
    location: "India · Full-time",
    description: "What you do there.",
    achievements: [
      "Achievement 1 with measurable impact",
      "Achievement 2 with measurable impact",
    ],
    tech: ["Java", "Spring Boot", "AWS"],
  },
  // ... existing entries
];
```

### Update the site URL after deployment

```ts
export const SEO = {
  siteUrl: "https://yourname.dev",  // ← your actual domain
  ...
};
```

---

## Deployment

### Netlify (current setup)
```bash
# Build command
npm run build

# Publish directory
.next
```

The `netlify.toml` is already configured. Just connect the repo to Netlify.

### Vercel
```bash
vercel --prod
```

Vercel auto-detects Next.js. No extra config needed.

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 15.x | Framework, App Router, API routes |
| React | 19.x | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Styling |
| Framer Motion | 12.x | Animations |
| react-icons | latest | Icon library |
| Formspree | - | Contact form backend |
| GitHub API | v3 | Public repo fetching |

---

## Contact

**Saubhagya Shukla**  
📧 shuklasaubhagya795@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/saubhagya08/)  
💻 [GitHub](https://github.com/SAUBHAGYA08-developer)
