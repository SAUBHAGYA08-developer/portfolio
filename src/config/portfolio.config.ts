/**
 * PORTFOLIO MASTER CONFIG
 * ─────────────────────────────────────────────────────────────────────────────
 * Edit this single file to update ALL content across the portfolio.
 * Every section, every label, every link — driven from here.
 *
 * Sections:
 *  personal      → core identity, links, availability
 *  seo           → meta tags, Open Graph, keywords
 *  hero          → homepage intro, roles, CTA buttons, quick stats
 *  about         → bio paragraphs, quick facts
 *  experience    → work history with achievements + tech stack
 *  skills        → categorized skill groups
 *  projects      → featured work projects with impact metrics
 *  howIThink     → problem approach, debugging style, architecture principles
 *  recruiterMode → quick snapshot for recruiters (modal)
 *  contact       → social links, form config, Formspree endpoint
 *  navigation    → nav brand, section list
 *  footer        → copyright, footer links
 */

// ─────────────────────────────────────────────────────────────────────────────
// PERSONAL
// ─────────────────────────────────────────────────────────────────────────────
export const PERSONAL = {
  name: "Saubhagya Shukla",
  shortName: "Saubhagya",
  initials: "SS",
  title: "Java & Go Backend Engineer",
  tagline: "Building systems that scale — not just code that runs.",
  currentRole: "Software Engineer",
  currentCompany: "Truemeds",
  currentFocus: "building Java microservices at scale",
  yearsExperience: "3+",
  location: "Bangalore, India",
  city: "Bangalore",
  email: "shuklasaubhagya795@gmail.com",
  github: "https://github.com/SAUBHAGYA08-developer",
  githubUsername: "SAUBHAGYA08-developer",
  linkedin: "https://www.linkedin.com/in/saubhagya08/",
  resumeUrl:
    "https://drive.google.com/file/d/1OSvcSujPcsWBeSEEMsn4wfQDTeJMXXHM/view",
  medium: "https://medium.com/@shuklasaubhagya795",
  availableForWork: true,
};

// ─────────────────────────────────────────────────────────────────────────────
// SEO
// ─────────────────────────────────────────────────────────────────────────────
export const SEO = {
  title: "Saubhagya Shukla — Java & Go Backend Engineer",
  description:
    `Java & Go backend engineer with ${PERSONAL.yearsExperience} years building 20+ scalable microservices at Truemeds. Expert in Spring Boot, Golang, AWS, Kafka, Redis. Actively seeking new backend engineering opportunities.`,
  keywords: [
    "Saubhagya Shukla",
    "Java Backend Engineer",
    "Go Backend Engineer",
    "Golang Developer",
    "Spring Boot Developer",
    "Microservices Architect",
    "AWS Developer",
    "Kafka Developer",
    "Redis Developer",
    `Backend Developer ${PERSONAL.city}`,
    "Java Developer",
    "Go Developer",
    "Golang Microservices",
    "Software Engineer",
    "Truemeds Engineer",
    "Spring Boot Microservices",
    "AWS Lambda",
    "AWS MSK",
    "API Development",
    "Event-driven Architecture",
    "Distributed Systems",
  ],
  siteUrl: "https://saubhagya-shukla.netlify.app/", // ← Replace with your live URL
  ogImage: "/og-image.png",
};

// ─────────────────────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────────────────────
export const HERO = {
  greeting: "Hi, I'm",
  roles: [
    "Java Backend Engineer",
    "Go (Golang) Developer",
    "Microservices Architect",
    "AWS Cloud Developer",
    "API Designer",
  ],
  description:
    "I design and build backend systems in Java and Go that process 100K+ events daily — 20+ microservices, event-driven architectures, and cloud deployments on AWS. Currently @ Truemeds. Seeking my next engineering challenge.",
  cta: {
    primary: "View Projects",
    primarySection: "projects",
    secondary: "Download Resume",
    recruiter: "Recruiter? Start Here →",
  },
  stats: [
    { value: PERSONAL.yearsExperience, label: "Years Experience" },
    { value: "20+", label: "Services Built" },
    { value: "6+", label: "AWS Services" },
    { value: "100K+", label: "Events / Day" },
  ],
  statusBadge: "Open to Work",
};

// ─────────────────────────────────────────────────────────────────────────────
// ABOUT
// ─────────────────────────────────────────────────────────────────────────────
export const ABOUT = {
  title: "About Me",
  paragraphs: [
    `I'm a backend engineer who enjoys building systems that are reliable, observable, and maintainable at scale. With ${PERSONAL.yearsExperience} years at Truemeds — one of India's leading online pharmacies — I've designed and shipped 20+ microservices handling real-world load: inventory assignment, dynamic pricing, notification delivery, analytics pipelines, call automation, and more.`,
    "I work primarily in Java (Spring Boot) and Go (Golang). Java for the heavy ORM and enterprise service layer; Go for high-throughput, low-latency services where performance matters. I don't just write code — I think in systems. Before touching a keyboard, I'm modeling domain boundaries, mapping failure modes, and designing for observability.",
    "I also leverage AI-assisted development tools (Claude Code, Cursor AI, GitHub Copilot) to move faster without cutting corners — using them to accelerate boilerplate, explore APIs, and review edge cases, not as a crutch.",
    "Now I'm looking for a backend-heavy role where I can go deeper — bigger systems, harder problems, stronger engineering teams.",
  ],
  quickFacts: [
    { label: "Location", value: PERSONAL.location },
    { label: "Experience", value: `${PERSONAL.yearsExperience} Years` },
    { label: "Primary Stack", value: "Java · Go · Spring Boot" },
    { label: "Domain", value: "Healthcare E-commerce" },
    { label: "Status", value: "Open to Work" },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// EXPERIENCE
// ─────────────────────────────────────────────────────────────────────────────
export const EXPERIENCE = [
  {
    company: "Truemeds",
    companyUrl: "https://www.truemeds.in/",
    role: "Software Engineer",
    period: "2022 — Present",
    location: `${PERSONAL.location} · Full-time`,
    description:
      "Backend engineer on the core platform team, designing and shipping 20+ microservices in Java and Go that power India's leading online pharmacy. End-to-end ownership from architecture to production deployment on AWS.",
    achievements: [
      "Designed and shipped 20+ production microservices in Java and Go, collectively processing 100K+ events daily across inventory, pricing, notifications, and analytics domains",
      "Built inventory-based warehouse assignment microservice (Go), optimizing real-time stock selection across warehouses to reduce delivery time",
      "Developed dynamic pricing engine ('Most Common Price' logic) with Redis distributed locks — ensuring accurate SKU pricing under concurrent writes",
      "Designed centralized notification microservice handling push (Firebase), SMS, and WhatsApp (Gupshup) via AWS MSK + Lambda — eliminated notification API bottlenecks that previously caused production slowdowns",
      "Implemented nightly ETL pipeline to Amazon Redshift enabling fast analytical dashboards without hitting production MySQL",
      "Built automated call system combining doctor consultation + substitute pitching in one Tata Tele call — reduced call costs while increasing daily order confirmations",
      "Integrated Mixpanel, CleverTap, Flyy, and AppsFlyer for unified marketing analytics and campaign management",
    ],
    tech: [
      "Java",
      "Go (Golang)",
      "Spring Boot",
      "MySQL",
      "Redis",
      "Kafka",
      "AWS MSK",
      "AWS Lambda",
      "AWS SQS",
      "AWS S3",
      "AWS CloudWatch",
      "Hibernate",
      "JPA",
      "New Relic",
      "Jenkins",
      "Docker",
      "Git",
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SKILLS
// ─────────────────────────────────────────────────────────────────────────────
export const SKILLS = {
  title: "Skills & Technologies",
  subtitle: "Tools I use to build, scale, and ship backend systems",
  categories: [
    {
      name: "Backend",
      skills: [
        { name: "Java", icon: "Java" },
        { name: "Go (Golang)", icon: "Go" },
        { name: "Spring Boot", icon: "Spring" },
        { name: "Microservices", icon: "Network" },
        { name: "Hibernate / JPA", icon: "Database" },
        { name: "REST APIs", icon: "Api" },
        { name: "gRPC", icon: "Grpc" },
        { name: "WebSocket", icon: "Socket" },
        { name: "Maven", icon: "Build" },
      ],
    },
    {
      name: "Database",
      skills: [
        { name: "MySQL", icon: "MySQL" },
        { name: "Redis", icon: "Redis" },
        { name: "Amazon Redshift", icon: "Redshift" },
        { name: "DynamoDB", icon: "DynamoDB" },
      ],
    },
    {
      name: "Cloud & Messaging",
      skills: [
        { name: "AWS EC2", icon: "AWS" },
        { name: "AWS RDS", icon: "AWS" },
        { name: "AWS S3", icon: "AWS" },
        { name: "AWS Lambda", icon: "AWS" },
        { name: "AWS SQS", icon: "AWS" },
        { name: "AWS MSK (Kafka)", icon: "AWS" },
        { name: "AWS CloudWatch", icon: "AWS" },
      ],
    },
    {
      name: "DevOps & Tools",
      skills: [
        { name: "Docker", icon: "Docker" },
        { name: "Jenkins", icon: "Jenkins" },
        { name: "Git", icon: "Git" },
        { name: "New Relic", icon: "NewRelic" },
        { name: "Jira", icon: "Jira" },
        { name: "Confluence", icon: "Confluence" },
      ],
    },
    {
      name: "AI Tools",
      skills: [
        { name: "Claude Code", icon: "Claude" },
        { name: "Cursor AI", icon: "Cursor" },
        { name: "GitHub Copilot", icon: "Copilot" },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// PROJECTS
// ─────────────────────────────────────────────────────────────────────────────
export const PROJECTS = {
  title: "Featured Work",
  subtitle:
    "Production systems built at Truemeds — real scale, real impact, real constraints.",
  items: [
    {
      title: "Inventory-Based Warehouse Assignment & Pricing Engine",
      description:
        "Microservice that selects the optimal warehouse based on real-time inventory data to minimize delivery time. Paired with a dynamic pricing engine using 'Most Common Price' logic, with Redis distributed locks preventing concurrent write conflicts.",
      impact: [
        "Reduced delivery time via real-time stock optimization",
        "Eliminated pricing inconsistencies under concurrent load",
        "Redis Redisson locks handle race conditions at scale",
      ],
      tech: [
        "Java",
        "Spring Boot",
        "AWS MSK",
        "Redis",
        "Redisson",
        "MySQL",
        "Database Partitioning",
      ],
      category: "Microservices",
      company: "Truemeds",
    },
    {
      title: "Centralized Notification Microservice",
      description:
        "Unified async notification service handling push (Firebase), SMS, and WhatsApp (Gupshup) via AWS MSK + Lambda. Decoupled notification delivery from the main request path — eliminated the bottlenecks that previously caused API slowdowns before going live.",
      impact: [
        "Eliminated notification-caused API bottlenecks",
        "100K+ events processed daily",
        "3 channels (Push, SMS, WhatsApp) from one service",
      ],
      tech: [
        "Java",
        "Spring Boot",
        "AWS MSK",
        "AWS Lambda",
        "Firebase FCM",
        "Gupshup API",
        "Async Messaging",
      ],
      category: "Distributed Systems",
      company: "Truemeds",
    },
    {
      title: "Analytics ETL Pipeline → Amazon Redshift",
      description:
        "Nightly ETL pipeline that dumps complete doctor and calling agent datasets from MySQL into Amazon Redshift. Enables fast analytical dashboards and reporting without any load on production databases.",
      impact: [
        "Zero analytics load on production MySQL",
        "Fast dashboard queries on Redshift",
        "Automated nightly sync with error alerting",
      ],
      tech: ["Java", "Spring Boot", "MySQL", "Amazon Redshift", "ETL", "AWS"],
      category: "Data Engineering",
      company: "Truemeds",
    },
    {
      title: "Automated Order Confirmation Call System",
      description:
        "Unified call automation combining doctor consultation and substitute medicine pitching in a single automated call via Tata Tele. Event-driven flow using Redis, AWS SQS, and Lambda — same calling resources, better outcomes.",
      impact: [
        "Reduced call costs by consolidating 2 flows into 1",
        "Increased daily order confirmations",
        "Event-driven processing via SQS + Lambda",
      ],
      tech: [
        "Java",
        "Spring Boot",
        "Redis",
        "AWS SQS",
        "AWS Lambda",
        "Tata Tele API",
        "Hibernate",
      ],
      category: "Integration",
      company: "Truemeds",
    },
    {
      title: "Unified Marketing Analytics Platform",
      description:
        "Spring Boot backend integrating Mixpanel, CleverTap, Flyy, and AppsFlyer via a single unified API. Real-time event tracking for user analytics, campaign management, contest execution, and app attribution — all from one service.",
      impact: [
        "4 analytics platforms unified via single backend API",
        "Real-time event tracking across all user touchpoints",
        "Streamlined campaign management and attribution",
      ],
      tech: [
        "Java",
        "Spring Boot",
        "Mixpanel",
        "CleverTap",
        "Flyy",
        "AppsFlyer",
        "MySQL",
        "Hibernate",
      ],
      category: "Integration",
      company: "Truemeds",
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// HOW I THINK
// ─────────────────────────────────────────────────────────────────────────────
export const HOW_I_THINK = {
  title: "How I Think",
  subtitle: "My engineering philosophy and problem-solving approach",
  approach: {
    title: "Problem Approach",
    description:
      "Business impact before code. What's the SLA? What's the failure mode? What does 'done' actually mean?",
    steps: [
      "Understand the business requirement and real constraints",
      "Model the domain — entities, boundaries, invariants",
      "Design the API contract before any implementation",
      "Map out failure modes and edge cases upfront",
      "Build from the outside in with clear acceptance criteria",
    ],
  },
  debugging: {
    title: "Debugging Style",
    description:
      "Structured logs first. Form a hypothesis. Isolate the variable. Verify with evidence. Never apply random fixes.",
    terminalLines: [
      { text: "$ grep ERROR application.log | tail -20", type: "command" as const },
      {
        text: "NullPointerException at OrderService.java:142",
        type: "error" as const,
      },
      {
        text: "$ correlate requestId across distributed logs",
        type: "command" as const,
      },
      {
        text: "Found: Redis lock expired before DB write completed",
        type: "output" as const,
      },
      { text: "$ reproduce in staging with same payload", type: "command" as const },
      {
        text: "Confirmed: race condition under high concurrency",
        type: "output" as const,
      },
      {
        text: "$ apply Redisson distributed lock with TTL guard",
        type: "command" as const,
      },
      {
        text: "✓ Fixed — monitoring CloudWatch for 24h",
        type: "success" as const,
      },
    ],
  },
  architecture: {
    title: "Architecture Decisions",
    description:
      "Start with the simplest thing that reliably solves the problem. Add complexity only when you have a measurable reason.",
    principles: [
      {
        title: "Monolith-first mindset",
        detail:
          "Clear domain boundaries first. Extract microservices only when forced by real scaling needs, not by preference.",
      },
      {
        title: "Async by default",
        detail:
          "Kafka for anything that tolerates eventual consistency. SQS for simpler queuing. Sync only when you truly need it.",
      },
      {
        title: "Observability first",
        detail:
          "If you can't measure it, you can't debug it. New Relic dashboards, structured logs, and CloudWatch metrics from day one — not as an afterthought.",
      },
      {
        title: "Fail loud, fail fast",
        detail:
          "Surface errors immediately. Never swallow exceptions. Alerting before users notice.",
      },
      {
        title: "Boring tech wins",
        detail:
          "Battle-tested beats clever. MySQL + Redis handles most problems. Reach for exotic solutions only when needed.",
      },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// RECRUITER MODE (quick snapshot modal)
// ─────────────────────────────────────────────────────────────────────────────
export const RECRUITER_MODE = {
  title: "Quick View for Recruiters",
  subtitle: "Everything you need in 60 seconds",
  snapshot: [
    { label: "Current Role", value: "Software Engineer @ Truemeds" },
    { label: "Experience", value: `${PERSONAL.yearsExperience} Years Backend Engineering` },
    {
      label: "Primary Stack",
      value: "Java · Go · Spring Boot · AWS · Kafka · Redis · New Relic",
    },
    { label: "Services Built", value: "20+ production microservices" },
    { label: "Location", value: "India (Open to Remote)" },
    { label: "Status", value: "Actively Seeking New Role" },
  ],
  topSkills: [
    "Java",
    "Go (Golang)",
    "Spring Boot",
    "Microservices",
    "AWS",
    "MySQL",
    "Redis",
    "Kafka",
    "Docker",
    "Git",
    "Claude Code",
    "Cursor AI",
    "GitHub Copilot",
  ],
  keyAchievements: [
    "Designed and shipped 20+ production microservices in Java & Go at Truemeds — 100K+ events/day",
    "Centralized notification service (Push + SMS + WhatsApp) via AWS MSK — eliminated API bottlenecks",
    "ETL pipeline to Amazon Redshift enabling analytics without hitting production DB",
    "Call automation combining 2 workflows into 1 — reduced costs, increased daily confirmations",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// CONTACT
// ─────────────────────────────────────────────────────────────────────────────
export const CONTACT = {
  title: "Let's Build Something",
  subtitle: "Open to backend engineering roles where depth matters",
  description:
    "I'm actively looking for backend engineering roles. If you're working on systems that need scale, reliability, and someone who thinks in systems — let's talk.",
  formspreeEndpoint: "https://formspree.io/f/xnnzlgoy",
  socialLinks: [
    {
      type: "email",
      label: "shuklasaubhagya795@gmail.com",
      href: "mailto:shuklasaubhagya795@gmail.com",
      badge: "",
    },
    {
      type: "github",
      label: "github.com/SAUBHAGYA08-developer",
      href: "https://github.com/SAUBHAGYA08-developer",
      badge: "",
    },
    {
      type: "linkedin",
      label: "linkedin.com/in/saubhagya08",
      href: "https://www.linkedin.com/in/saubhagya08/",
      badge: "",
    },
    {
      type: "medium",
      label: "medium.com/@shuklasaubhagya795",
      href: "https://medium.com/@shuklasaubhagya795",
      badge: "Coming Soon",
    },
  ],
  form: {
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    companyPlaceholder: "Company (optional)",
    messagePlaceholder: "Tell me about the role or project...",
    submitLabel: "Send Message",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────────────────────────────────────
export const NAVIGATION = {
  brand: "<saubhagya />",
  sections: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "thinking", label: "How I Think" },
    { id: "contact", label: "Contact" },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────────────────────
export const FOOTER = {
  text: "© {YEAR} Saubhagya Shukla",
  tagline: "Built with Next.js · Java mindset · lots of ☕",
  links: [
    { label: "GitHub", href: "https://github.com/SAUBHAGYA08-developer" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/saubhagya08/" },
    { label: "Medium", href: "https://medium.com/@shuklasaubhagya795" },
    { label: "Email", href: "mailto:shuklasaubhagya795@gmail.com" },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// GITHUB INTEGRATION
// GitHub API is fetched at runtime via /api/github route.
// Public repos will appear in the Projects section under "Personal / OSS".
// ─────────────────────────────────────────────────────────────────────────────
export const GITHUB_CONFIG = {
  enabled: false, // ← set to true when you have public repos to show
  username: "SAUBHAGYA08-developer",
  reposToShow: 4,
  excludeForks: true,
};
