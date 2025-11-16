
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
  description: "Backend Developer with 2+ years of professional experience, currently working at TRUEMEDS, where I contribute to building and deploying scalable web applications. Proficient in Java, Spring Boot, Microservices, Hibernate, JPA, and MySQL. Experienced in integrating Redis for high-performance caching and managing CI/CD pipelines using Jenkins and Git. I work extensively with AWS services including EC2, RDS, SQS, MSK, Lambda, CloudWatch, and S3 to ensure reliable, cloud-native deployments. From development to deployment, I handle the full lifecycle of backend systems. Explore my projects below and feel free to reach out for collaboration opportunities.",
  additionalDescription: "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and staying up-to-date with the latest industry trends.",
  stats: [
    {
      number: "2+",
      label: "Years Experience",
      color: "text-blue-400"
    },
    {
      number: "15",
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
  { name: "Microservices", icon: "Microservices", color: "text-blue-500" },
  { name: "Hibernate", icon: "Hibernate", color: "text-purple-600" },
  { name: "JPA", icon: "Database", color: "text-purple-400" },
  { name: "MySQL", icon: "MySQL", color: "text-yellow-500" },
  { name: "Redshift", icon: "Redshift", color: "text-blue-500" },
  { name: "Redis", icon: "Redis", color: "text-red-500" },
  { name: "REST APIs", icon: "Api", color: "text-blue-400" },
  { name: "WebSocket", icon: "WebSocket", color: "text-pink-500" },
  { name: "Docker", icon: "Docker", color: "text-blue-600" },
  { name: "Jenkins", icon: "Jenkins", color: "text-red-500" },
  { name: "Git", icon: "Git", color: "text-orange-500" },
  { name: "Maven", icon: "Maven", color: "text-indigo-500" },
  { name: "AWS EC2", icon: "AWS", color: "text-orange-400" },
  { name: "AWS RDS", icon: "AWS", color: "text-orange-400" },
  { name: "AWS S3", icon: "AWS", color: "text-orange-400" },
  { name: "AWS Lambda", icon: "AWS", color: "text-orange-400" },
  { name: "AWS SQS", icon: "AWS", color: "text-orange-400" },
  { name: "AWS MSK", icon: "AWS", color: "text-orange-400" },
  { name: "AWS CloudWatch", icon: "AWS", color: "text-orange-400" }
]
};

// Projects Section Constants
export const PROJECTS_SECTION = {
  title: "Featured Projects",
  projects: [
    {
  title: "Inventory-Based Warehouse Assignment & Real-Time Pricing Microservices",
  description: "Built Spring Boot microservices to optimize warehouse selection based on real-time inventory, reducing delivery time. Developed a dynamic pricing engine using 'Most Common Price' logic to ensure accurate SKU pricing. Implemented Kafka via AWS MSK, Redis locks for concurrency, and partitioned databases for scalability.",
  tech: [
    "Java",
    "Spring Boot",
    "Microservices",
    "AWS MSK",
    "AWS Lambda",
    "Redis",
    "Redisson Lock",
    "Database Partitioning",
    "MySQL"
  ],
  image: "/api/placeholder/400/250",
  link: "#"
},
{
    title: "Doctor & Calling Agent Analytics Dashboard",
    description: "Implemented nightly ETL to dump complete data sets for doctors and calling agents into Amazon Redshift, enabling fast, scalable dashboards that offload load from the main MySQL database. Integrated with Spring Boot microservices for seamless data synchronization and timely insights.",
    tech: ["Java", "Spring Boot", "MySQL", "Amazon Redshift", "AWS", "ETL"],
    image: "/api/placeholder/400/250", // Replace with your project image path
    link: "#" // Add project URL or demo link if available
  },
    {
  title: "Spring Boot Microservice for Order Confirmation Call Automation",
  description: "Developed a unified call automation microservice that combines doctor consultation and substitute pitching in a single call, integrated with Tata Tele. This reduced call costs and increased daily order confirmations using the same resources. Built with Redis, AWS SQS, and event-driven flows via AWS Lambda.",
  tech: [
    "Java",
    "Spring Boot",
    "Hibernate",
    "MySQL",
    "Redis",
    "AWS Lambda",
    "AWS SQS",
    "Tata Tele Integration"
  ],
  image: "/api/placeholder/400/250",
  link: "#"
},
{
  title: "Analytics and Campaign Integration Platform with Mixpanel, CleverTap, Flyy, and AppsFlyer",
  description: "Implemented a robust Java Spring Boot backend to integrate multiple marketing and analytics platforms—Mixpanel for user analytics, CleverTap for event-driven campaign management, Flyy for contest execution, and AppsFlyer for app install and conversion tracking. Utilizing MySQL, Hibernate, and JPA, the system enables seamless data flow and real-time event tracking to drive customer engagement and optimize marketing strategies.",
  tech: [
    "Java",
    "Spring Boot",
    "MySQL",
    "Hibernate",
    "JPA",
    "Mixpanel (Analytics)",
    "CleverTap (Campaign Management)",
    "Flyy (Contest Platform)",
    "AppsFlyer (Attribution & Event Tracking)"
  ],
  image: "/api/placeholder/400/250",
  link: "#"
},
{
  title: "Centralized Notification Microservice for Asynchronous Push, SMS, and WhatsApp Delivery",
  description: "Designed and developed a scalable Spring Boot microservice to centralize and asynchronously process notifications via push (using Firebase), SMS, and WhatsApp (integrated with Gupshup). Leveraging AWS MSK for messaging and AWS Lambda for event-driven processing, the system significantly reduces API response time and eases system pressure by offloading notification delivery tasks. Previously, SMS and other notifications caused bottlenecks before going live; this solution optimizes throughput and consolidates all notification logic in one place.",
  tech: [
    "Java",
    "Spring Boot",
    "AWS MSK",
    "AWS Lambda",
    "Gupshup API (SMS & WhatsApp)",
    "Firebase Cloud Messaging (Push Notifications)",
    "Asynchronous Messaging",
    "Microservices"
  ],
  image: "/api/placeholder/400/250",
  link: "#"
}
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
      href: "https://github.com/SAUBHAGYA08-developer",
      icon: "Github"
    },
    {
      type: "linkedin",
      label: "linkedin/saubhagya-shukla",
      href: "https://www.linkedin.com/in/saubhagya08/",
      icon: "Linkedin"
    }
    // {
    //   type: "leetcode",
    //   label: "leetcode/Saybhagya_08",
    //   href: "https://leetcode.com/u/Saybhagya_08/",
    //   icon: "LeetCode"
    // }
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
