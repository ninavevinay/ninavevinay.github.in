import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export const profile = {
  name: "Vinay Ninave",
  title: "Full Stack Developer | Generative AI ",
  intro:
    "Full Stack Developer building scalable web applications using React.js and FastAPI. Focused on Cybersecurity practices to develop secure and resilient systems.Exploring AI-driven solutions to create intelligent, modern applications.",
  location: "Nagpur",
  email: "vinayninave27@email.com",
  resumeUrl: "/Resume.pdf"
};

export const skills = [
  { name: "Frontend", value: 90 },
  { name: "Backend", value: 85 },
  { name: "FastAPI", value: 80 },
  { name: "GenAI", value: 78 },
  { name: "Database", value: 75 }
];

export const techStack = [
  { name: "React", description: "Frontend library" },
  { name: "TailwindCSS", description: "CSS framework" },
  { name: "FastAPI", description: "Python web framework" },
  { name: "Node.js", description: "Backend runtime" },
  { name: "Express.js", description: "Web framework" },
  { name: "MongoDB", description: "NoSQL database" },
  { name: "PostgreSQL", description: "SQL database" },
  { name: "MySQL", description: "Relational database" },
  { name: "Python", description: "Programming language" },
  { name: "Docker", description: "Containerization" },
  { name: "Git & GitHub", description: "Version control" },
  { name: "LangChain", description: "AI framework" },
];
export const projects = [
  {
    title: "AI Game Bot For Connect-4",
    description:
      "A real-time analytics dashboard with role-based access, streaming charts, and alert automation.",
    image: "/project1.webp",
    stack: ["React", "TailwindCSS", "Node.js", "Express.js", "Python"],
    github: "https://github.com/ninavevinay/AI_Game_Bot_for_Connect-4",
  },
  {
    title: "Data Temparing Detection",
    description:
      "A real-time analytics dashboard with role-based access, streaming charts, and alert automation.",
    image: "/project2.jfif",
    stack: ["React", "TailwindCSS", "Node.js", "Express.js", "Supabase", "JWT", "SHA-256"],
    github: "https://github.com/ninavevinay/Data_Tampering_Detection",
  },

  {
    title: "Firebase Book Management",
    description:
      "Headless ecommerce storefront with lightning-fast search, headless CMS, and smart upsells.",
    image: "/project1.jfif",
    stack: ["React", "TailwindCSS", "Firebase", "CRUD"],
    github: "https://github.com/ninavevinay/firebase_Book_Mananement",
    demo: "https://app-book-b01ce.web.app/"
  },
  {
    title: "Student Result Management System",
    description:
      "Collaborative productivity platform with kanban, docs, and AI meeting summaries.",
    image: "/project.jfif",
    stack: ["HTML", "CSS", "Django"],
    github: "https://github.com/ninavevinay/SRM",
    demo: "https://srm-4d9t.onrender.com/"
  }
];

export const education = [
  {
    year: "2023 - Present ",
    degree: "B.Tech in Computer Science",
    institute: "S. B. Jain Institute of Technology, Management & Research Nagpur ",
    details: "Focused on software engineering, data structures, and cloud-native development.",
    marks: "CGPA: 8.9/10"
  },
  {
    year: "2021 - 2023",
    degree: "Higher Secondary (Science)",
    institute: "St George's College, Nagpur",
    details: "Specialized in Mathematics, Physics, and Chemistry.",
    marks: "Percentage: 65.8%"

  },
  {
    year: "2021",
    degree: "Secondary School",
    institute: "New English High School Nagpur",
    details: "Consistently maintained a strong academic record in core subjects including Mathematics, Science, and English.",
    marks: "Percentage: 82.8%"

  }
];

export const certificates = [
  {
    title: "DSA using Python",
    issuer: "NPTEL",
    year: "2025",
    details: "Completed coursework focused on data structures and algorithms using Python."
  },
  {
    title: "Programming in Java",
    issuer: "NPTEL",
    year: "2025",
    details: "Learned core Java concepts including OOP, data handling, and application development."
  },
  {
    title: "Web Development Training",
    issuer: "Internshala",
    year: "2024",
    details: "Covered fundamentals of web development including HTML, CSS, and JavaScript."
  },
  {
    title: "Python Full Stack Developer Virtual Internship",
    issuer: "EduSkills Foundation",
    year: "2026",
    details: "Gained experience in full-stack development using Python, including frontend and backend integration."
  }
];

export const achievements = [
  {
    title: "Second Runner-Up - Hackathon",
    year: "2025",
    details: "Developed Health-Q, an emergency patient scheduling system that prioritizes critical cases and improves hospital queue management."
  },
  {
    title: "Top 4 Rank - Code League 1.0 Hackathon | GH Raisoni College of Engineering, Nagpur",
    year: "2025",
    details: "Developed Chikistra Smart, an intelligent advertising solution during the hackathon."
  },
  {
    title: "Shantilal Badjate Memorial Scholarship",
    year: "2025, 2026",
    details: "Awarded in recognition of consistent academic improvement and performance."
  }
];

export const gallery = [
  { title: "2nd Runner-Up - Hackwack 3.0", image: "/gallary1.png" },
  { title: "Actively engaged in analyzing and solving the problem statement during Hackwack 3.0", image: "/gallary2.png" },
  { title: "TECHMENTORX Hackathon Participation - PCE Nagpur", image: "/gallary3.png" },
  { title: "Presentation Moment - Code League 1.0 Hackathon", image: "/gallary4.png" },
  { title: "Farcaster Bharat Session - Web3 & Blockchain Insights", image: "/gallary5.png" },
];

export const socialLinks = [
  { name: "GitHub", href: "https://github.com/ninavevinay", icon: FiGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/vinay-ninave/", icon: FiLinkedin },
  { name: "Email", href: "vinayninave27@gmail.com", icon: FiMail }
];

