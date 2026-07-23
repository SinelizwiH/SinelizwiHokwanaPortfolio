// Central portfolio configuration. Update values here to customize the site.
export const profile = {
  name: "Sinelizwi Hokwana",
  title: "Business IT Graduate | Software Developer | Business Analyst | AI Enthusiast",
  headline: "Building Digital Solutions with Technology, Business Insight and AI",
  bio: "I am Sinelizwi Hokwana, a Business Information Technology graduate specialising in Software Development. I build practical web and mobile applications, analyse business problems, and use technology to create meaningful digital solutions.",
  personalStatement:
    "I am a continuous learner who enjoys turning ideas into functional solutions. My goal is to grow in the technology industry while contributing to projects that make processes more accessible, efficient and innovative.",
  // Replace with an actual profile image URL or import
  profileImage: "",
  location: "South Africa",
  university: "University of Johannesburg",
};

export const links = {
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  email: "sinelizwi.hokwana@example.com",
  cv: "#", // Replace with hosted CV URL
};

export const skills = {
  "Software Development": [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Node.js",
    "PHP",
    "C#",
    ".NET",
    "Python",
  ],
  "Databases & Cloud": [
    "Firebase",
    "Firestore",
    "SQL",
    "Database Design",
    "ERD Design",
  ],
  "Tools & Technologies": [
    "Git",
    "GitHub",
    "Visual Studio Code",
    "Visual Studio",
    "Firebase Console",
    "REST APIs",
    "Google Vision API",
    "Azure Cognitive Services",
  ],
  "Business & Analysis": [
    "Business Analysis",
    "Systems Analysis",
    "Requirements Gathering",
    "Stakeholder Analysis",
    "UML Diagrams",
    "Swimlane Diagrams",
    "Business Process Analysis",
    "Problem Solving",
  ],
  "AI & Digital Skills": [
    "AI Fundamentals",
    "Generative AI Awareness",
    "Responsible AI",
    "AI Productivity",
    "Prompting & AI-assisted Workflows",
    "AI for Business & Tech Solutions",
  ],
};

export type Project = {
  name: string;
  description: string;
  features?: string[];
  technologies: string[];
  role: string;
  highlight?: string;
  github?: string;
  demo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    name: "e-Docufy",
    description:
      "A digital document verification and certification platform designed to help digitise the verification of government documents in South Africa.",
    features: [
      "Document upload",
      "Automated verification",
      "Verification status tracking",
      "Digital certification",
      "Secure data storage",
      "Customer support",
    ],
    technologies: ["TypeScript", "Tailwind CSS", "React", "Firebase", "API Integration"],
    role: "Project Manager & Front-End Developer",
    highlight: "Solving a real-world government and digital transformation problem.",
    github: "#",
  },
  {
    name: "AutoMech Mobile App",
    description:
      "A mobile application designed to connect users with automotive services and support the management of automotive-related services.",
    technologies: ["React Native", "Firebase Firestore", "Node.js"],
    role: "Business Analyst / Development Team Member",
    highlight: "Requirements analysis, teamwork, application design and problem-solving.",
    github: "#",
  },
  {
    name: "VotaMzansi",
    description:
      "A voting web application created to demonstrate digital voting functionality with a focus on user-friendly design.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    role: "Full-Stack Developer",
    highlight: "Web development, form handling, backend integration, user-focused design.",
    github: "#",
  },
  {
    name: "Mzansi Travel Guide",
    description:
      "A mobile application concept designed to help users explore South African travel destinations and celebrate local tourism.",
    technologies: ["React Native"],
    role: "Mobile Developer",
    highlight: "Mobile development, UX design, and local-first digital solutions.",
    github: "#",
  },
  {
    name: "Food Delivery Mobile App",
    description:
      "A React Native food delivery application featuring menu browsing, cart functionality, user profiles and multi-step forms.",
    features: ["Menu browsing", "Cart functionality", "User profiles", "Multi-step forms", "Context API state"],
    technologies: ["React Native", "Context API", "JavaScript"],
    role: "Mobile Developer",
    highlight: "Mobile application development and state management.",
    github: "#",
  },
  {
    name: "Flashcard Application",
    description:
      "A learning-focused application using Firebase Firestore for storing and managing flashcards with full CRUD functionality.",
    technologies: ["React", "Firebase Firestore"],
    role: "Developer",
    highlight: "Firebase integration, cloud data storage, CRUD, educational technology.",
    github: "#",
  },
];

export type Certificate = {
  name: string;
  issuer: string;
  date: string;
  description: string;
  url: string;
  featured?: boolean;
};

export const certificates: Certificate[] = [
  {
    name: "Introduction to AI and Generative AI",
    issuer: "Google — Coursera",
    date: "2025",
    description: "Foundations of artificial intelligence and generative AI concepts.",
    url: "#",
    featured: true,
  },
  {
    name: "Maximize Productivity with AI Tools",
    issuer: "Google — Coursera",
    date: "2025",
    description: "Applying AI tools to boost personal and workplace productivity.",
    url: "#",
    featured: true,
  },
  {
    name: "Discover the Art of Prompt Engineering",
    issuer: "Google — Coursera",
    date: "2025",
    description: "Crafting effective prompts for high-quality AI outputs.",
    url: "#",
    featured: true,
  },
  {
    name: "Use AI Responsibly",
    issuer: "Google — Coursera",
    date: "2025",
    description: "Understanding responsible, ethical and safe use of AI.",
    url: "#",
    featured: true,
  },
  {
    name: "Stay Ahead of the AI Curve",
    issuer: "Google — Coursera",
    date: "2025",
    description: "Continuous learning strategies to keep pace with AI advancements.",
    url: "#",
    featured: true,
  },
  {
    name: "Google AI Essentials Capstone",
    issuer: "Google — Coursera",
    date: "2025",
    description: "Applying AI Essentials skills to real workplace scenarios.",
    url: "#",
    featured: true,
  },
];

export const approach = [
  { step: "01", title: "Understand the problem", body: "Listen carefully and define the real challenge." },
  { step: "02", title: "Analyse users & requirements", body: "Identify stakeholders, needs and success criteria." },
  { step: "03", title: "Design a practical solution", body: "Blend business insight with technical feasibility." },
  { step: "04", title: "Build and test", body: "Ship reliable, maintainable, user-focused implementations." },
  { step: "05", title: "Learn and improve", body: "Reflect, iterate, and grow with every project." },
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Experience", href: "#approach" },
  { label: "Contact", href: "#contact" },
];
