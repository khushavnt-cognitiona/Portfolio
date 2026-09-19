export const MOCK_PROJECTS = [
  {
    id: 1,
    title: "Job Application Portal",
    description: "A full-stack web application for job posting, searching, and tracking applications with JWT authentication and role-based access.",
    image: "/images/project-job-portal.png",
    technologies: ["Java", "Spring Boot", "React", "MySQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/khushvantjadhao",
    accentColor: "from-indigo-500 to-purple-600"
  },
  {
    id: 2,
    title: "Grocery Management System",
    description: "E-commerce platform with product management, cart, orders, payment integration and multiple user roles.",
    image: "/images/project-grocery.png",
    technologies: ["Java", "Spring Boot", "React", "MySQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/khushvantjadhao",
    accentColor: "from-emerald-500 to-teal-600"
  },
  {
    id: 3,
    title: "Hotel Management System",
    description: "Hotel booking and room management system with secure authentication and CRUD operations.",
    image: "/images/project-hotel.png",
    technologies: ["Java", "Spring Boot", "Thymeleaf", "MySQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/khushvantjadhao",
    accentColor: "from-amber-500 to-orange-600"
  }
];

export const MOCK_SKILLS = [
  { id: 1, name: "Java", category: "Backend", icon: "Coffee", color: "#E76F51", badgeBg: "bg-orange-50 text-orange-600 border-orange-200" },
  { id: 2, name: "Spring Boot", category: "Backend", icon: "Leaf", color: "#6DB33F", badgeBg: "bg-emerald-50 text-emerald-600 border-emerald-200" },
  { id: 3, name: "React", category: "Frontend", icon: "Atom", color: "#61DAFB", badgeBg: "bg-cyan-50 text-cyan-600 border-cyan-200" },
  { id: 4, name: "MySQL", category: "Database", icon: "Database", color: "#00758F", badgeBg: "bg-sky-50 text-sky-700 border-sky-200" },
  { id: 5, name: "HTML5", category: "Frontend", icon: "Code", color: "#E34F26", badgeBg: "bg-orange-50 text-orange-600 border-orange-200" },
  { id: 6, name: "CSS3", category: "Frontend", icon: "Palette", color: "#1572B6", badgeBg: "bg-blue-50 text-blue-600 border-blue-200" },
  { id: 7, name: "Tailwind CSS", category: "Frontend", icon: "Wind", color: "#06B6D4", badgeBg: "bg-cyan-50 text-cyan-600 border-cyan-200" },
  { id: 8, name: "Hibernate", category: "Backend", icon: "Layers", color: "#59666C", badgeBg: "bg-slate-50 text-slate-700 border-slate-200" },
  { id: 9, name: "Git", category: "Tools & Cloud", icon: "GitBranch", color: "#F05032", badgeBg: "bg-red-50 text-red-600 border-red-200" },
  { id: 10, name: "Docker", category: "Tools & Cloud", icon: "Box", color: "#2496ED", badgeBg: "bg-blue-50 text-blue-600 border-blue-200" },
  { id: 11, name: "AWS", category: "Tools & Cloud", icon: "Cloud", color: "#FF9900", badgeBg: "bg-amber-50 text-amber-600 border-amber-200" },
  { id: 12, name: "VS Code", category: "Tools & Cloud", icon: "Laptop", color: "#007ACC", badgeBg: "bg-blue-50 text-blue-600 border-blue-200" },
  { id: 13, name: "Postman", category: "Tools & Cloud", icon: "Send", color: "#FF6C37", badgeBg: "bg-orange-50 text-orange-600 border-orange-200" },
  { id: 14, name: "Spring Security", category: "Backend", icon: "Shield", color: "#6DB33F", badgeBg: "bg-emerald-50 text-emerald-600 border-emerald-200" },
  { id: 15, name: "JPA", category: "Backend", icon: "Database", color: "#59666C", badgeBg: "bg-slate-50 text-slate-700 border-slate-200" },
  { id: 16, name: "JavaScript", category: "Frontend", icon: "FileCode", color: "#F7DF1E", badgeBg: "bg-yellow-50 text-yellow-700 border-yellow-200" },
  { id: 17, name: "GitHub", category: "Tools & Cloud", icon: "Github", color: "#181717", badgeBg: "bg-slate-100 text-slate-800 border-slate-300" },
  { id: 18, name: "IntelliJ IDEA", category: "Tools & Cloud", icon: "Cpu", color: "#000000", badgeBg: "bg-purple-50 text-purple-700 border-purple-200" },
  { id: 19, name: "Maven", category: "Backend", icon: "Package", color: "#C71A36", badgeBg: "bg-red-50 text-red-600 border-red-200" }
];

export const MOCK_EXPERIENCES = [
  {
    id: 1,
    role: "Java Backend Developer",
    company: "Cognition Technology",
    location: "Pune, Maharashtra",
    duration: "Dec 2022 – Jul 2023",
    color: "orange",
    badgeBg: "bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-950/50 dark:text-orange-300 dark:border-orange-800/40",
    technologies: ["Java", "Spring Boot", "MySQL", "REST API", "Git"],
    responsibilities: [
      "Developed backend REST APIs for a Grocery Management E-commerce application using Spring Boot.",
      "Worked with JdbcTemplate, RowMapper and MySQL for database operations.",
      "Implemented backend business logic, validation, and security layers.",
      "Worked closely on API development, testing via Postman, and frontend integration."
    ]
  },
  {
    id: 2,
    role: "Full Stack Java Developer",
    company: "ARC Technology & Institute",
    location: "Nagpur, Maharashtra",
    duration: "During MCA",
    color: "cyan",
    badgeBg: "bg-cyan-100 text-cyan-800 border-cyan-200 dark:bg-cyan-950/50 dark:text-cyan-300 dark:border-cyan-800/40",
    technologies: ["Java", "Spring Boot", "React", "MySQL", "Git"],
    responsibilities: [
      "Developed full-stack web applications using Java, Spring Boot, React.js and MySQL.",
      "Built robust REST APIs and seamlessly integrated them with modern React components.",
      "Worked on CRUD operations, authentication systems, and database schema integration.",
      "Gained comprehensive hands-on experience in end-to-end application development lifecycle."
    ]
  }
];

export const MOCK_EDUCATION = [
  {
    id: 1,
    title: "MCA (AI & ML)",
    institution: "Chandigarh University",
    status: "Completed",
    icon: "GraduationCap"
  },
  {
    id: 2,
    title: "B.Voc in Software Development",
    institution: "Sant Gadge Baba Amravati University",
    year: "2022",
    icon: "BookOpen"
  },
  {
    id: 3,
    title: "Strategic HR Management (Certificate)",
    institution: "Amity University",
    year: "May 2024",
    icon: "Briefcase"
  }
];

export const MOCK_CERTIFICATIONS = [
  "Team Management",
  "Decision Making",
  "Presentation Skills",
  "Business Plan Development",
  "Strategy Planning & Execution"
];

export const MOCK_TESTIMONIALS = [
  {
    id: 1,
    quote: "Khushvant is a quick learner and a dedicated developer. He has strong problem-solving skills and a great attitude towards learning new technologies.",
    author: "Mentor",
    role: "Senior Tech Lead",
    company: "Cognition Technology",
    initials: "M",
    rating: 5
  }
];
