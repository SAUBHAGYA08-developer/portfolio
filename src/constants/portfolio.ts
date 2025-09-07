
const currentYear=new Date().getFullYear()

export const RESUME_URL='https://drive.google.com/file/d/11Wu0bNJi8cCJmgl3RTlsIuOSO2CDL3rI/view'
// Hero Section Constants
export const HERO_SECTION = {
  name: "Saubhagya",
  initials: "SS",
  title: "Backend Developer & Creative Technologist",
  description: "I build innovative web applications that combine cutting-edge technology with beautiful design. Passionate about creating seamless user experiences and scalable solutions.",
  primaryButton: "View My Work",
  secondaryButton: "Download CV"
};

// About Section Constants
export const ABOUT_SECTION = {
  title: "About Me",
  subtitle: "Passionate Developer with a Creative Edge",
  description: "I'm a frontend developer with over 4 years of experience building web applications. I specialize in React, Next.js, TypeScript, and Tailwind CSS, creating scalable and maintainable code that delivers exceptional user experiences.",
  additionalDescription: "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and staying up-to-date with the latest industry trends.",
  stats: [
    {
      number: "2+",
      label: "Years Experience",
      color: "text-blue-400"
    },
    {
      number: "150+",
      label: "Projects Completed",
      color: "text-purple-400"
    }
  ],
  card: {
    title: "Innovation & Excellence",
    subtitle: "Building the future, one line at a time"
  }
};

// Skills Section Constants
// Skills Section Constants
export const SKILLS_SECTION = {
  title: "Skills & Technologies",
  skills: [
    { name: "Java", icon: "Java", color: "text-red-600" },
    { name: "Spring Boot", icon: "Spring", color: "text-green-500" },
    { name: "Hibernate", icon: "Hibernate", color: "text-purple-600" },
    { name: "MySQL", icon: "MySQL", color: "text-yellow-500" },
    { name: "PostgreSQL", icon: "PostgreSQL", color: "text-blue-500" },
    { name: "REST APIs", icon: "Api", color: "text-blue-400" }, // Will use FiMonitor as fallback
    { name: "Docker", icon: "Docker", color: "text-blue-600" },
    { name: "Jenkins", icon: "Jenkins", color: "text-red-500" },
    { name: "Git", icon: "Git", color: "text-orange-500" },
    { name: "Maven", icon: "Maven", color: "text-indigo-500" },
    { name: "AWS", icon: "AWS", color: "text-orange-400" }
  ]
};

// Projects Section Constants
export const PROJECTS_SECTION = {
  title: "Featured Projects",
  projects: [
    {
      title: "E-Pharma, E-Commerce Platform websites",
      description: "E-commerce Platform with React, Node.js,next js and Stripe integration",
      tech: ["React", "Node.js", "Nextjs", "Stripe"],
      image: "/api/placeholder/400/250",
      link: "#"
    },
    {
      title: "Different  Management Portals",
      description: "Real-time collaborative task management with call and B2C portal functionality",
      tech: ["Next.js", "React.js", "Tailwind","Firebase"],
      image: "/api/placeholder/400/250",
      link: "#"
    },

    {
      title: "B2C website for a company",
      description: "Modern, responsive portfolio with animations and dark theme",
      tech: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
      image: "/api/placeholder/400/250",
      link: "https://3daily.ai/"
    },
    {
      title: "Pluto Tv",
      description: "Modern, responsive website  with On demand live streaming and contents",
      tech: ["React", "Redux toolkit", "Tailwind CSS", "TypeScript"],
      image: "/api/placeholder/400/250",
      link: "https://pluto.tv"
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio with animations and dark theme",
      tech: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
      image: "/api/placeholder/400/250",
      link: "#"
    },
  ]
};

// Contact Section Constants
export const CONTACT_SECTION = {
  title: "Get In Touch",
  description: "I'm always interested in new opportunities and exciting projects. Let's work together to bring your ideas to life!",
  subtitle: "Let's Connect",
  socialLinks: [
    {
      type: "email",
      label: "shuklasaubhagya795@gmail.com",
      href: "mailto:shuklasaubhagya795@gmail.com",
      icon: "Mail"
    },
    {
      type: "github",
      label: "github.com/saubhagya08",
      href: "https://github.com/saubhagya08",
      icon: "Github"
    },
    {
      type: "linkedin",
      label: "linkedin/saubhagya-shukla",
      href: "https://www.linkedin.com/in/saubhagya08/",
      icon: "Linkedin"
    }
  ],
  form: {
    title: "Send a Message",
    fields: [
      { type: "text", placeholder: "Your Name" },
      { type: "email", placeholder: "Your Email" },
      { type: "textarea", placeholder: "Your Message", rows: 4 }
    ],
    submitButton: "Send Message"
  }
};

// Footer Constants
export const FOOTER = {
  text: `© ${currentYear} Saubhagya Shukla. Built with Next.js, Tailwind CSS, and lots of ☕`
};

// Navigation Constants
export const NAVIGATION = {
  brand: "Saubhagya Shukla",
  sections: ["home", "about", "skills", "projects", "contact"]
};

// General Portfolio Info