export const projects = [
  {
    id: 1,
    name: "E-Commerce REST API",
    description: "A robust, scalable backend API for a full-featured e-commerce platform with user authentication, product management, and order processing.",
    technologies: ["Java", "Spring Boot", "MySQL", "JWT", "Spring Security"],
    features: [
      "JWT-based secure authentication & authorization",
      "RESTful CRUD operations for products & orders",
      "Integrated payment gateway simulation",
      "Role-based access control (Admin/User)"
    ],
    github: "https://github.com/akshayakumar/ecommerce-backend",
    live: "https://ecommerce-api-demo.vercel.app",
    image: "/images/project1.jpg",
    category: "Backend"
  },
  {
    id: 2,
    name: "TaskFlow API",
    description: "Comprehensive task and project management backend system with real-time updates, team collaboration, and advanced reporting capabilities.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Maven"],
    features: [
      "Kanban-style task boards with drag & drop",
      "Real-time notifications via WebSocket",
      "Team management & role assignments",
      "Advanced filtering, search & analytics"
    ],
    github: "https://github.com/akshayakumar/taskflow-api",
    live: "https://taskflow-api-demo.netlify.app",
    image: "/images/project2.jpg",
    category: "Backend"
  },
  {
    id: 3,
    name: "BlogSphere Backend",
    description: "Full-featured content management and blogging platform backend featuring rich text support, user comments, and advanced SEO optimizations.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis", "JWT"],
    features: [
      "Rich markdown editor & content versioning",
      "Comment system with moderation",
      "Redis caching for high performance",
      "Search indexing & SEO friendly APIs"
    ],
    github: "https://github.com/akshayakumar/blogsphere",
    live: "https://blogsphere-demo.app",
    image: "/images/project3.jpg",
    category: "Backend"
  }
];

export const skills = {
  backend: [
    { name: "Java", level: "Expert", icon: "☕" },
    { name: "Spring Boot", level: "Advanced", icon: "🌱" },
    { name: "Spring AI", level: "Advanced", icon: "/images/spring-ai-logo.svg" },
    { name: "REST APIs", level: "Expert", icon: "🔗" },
    { name: "Microservices", level: "Intermediate", icon: "⚙️" }
  ],
  database: [
    { name: "MySQL", level: "Advanced", icon: "🐬" },
    { name: "PostgreSQL", level: "Advanced", icon: "🐘" },
    { name: "Redis", level: "Intermediate", icon: "⚡" },
    { name: "MongoDB", level: "Intermediate", icon: "🍃" }
  ],
  tools: [
    { name: "Git & GitHub", level: "Expert", icon: "📦" },
    { name: "Docker", level: "Advanced", icon: "🐳" },
    { name: "Maven", level: "Expert", icon: "📦" },
    { name: "Postman", level: "Expert", icon: "📮" }
  ]
};

export const education = [
  {
    type: "education",
    title: "B.Tech in Computer Science",
    organization: "Uttar Pradesh Technical University",
    period: "2020 - 2024",
    description: "Graduated with 8.7 CGPA. Focused on Data Structures, Algorithms, Database Systems and Software Engineering.",
    highlights: ["Data Structures & Algorithms", "System Design", "Database Management"]
  },
  {
    type: "education",
    title: "Class 12 (Intermediate)",
    organization: "State Board",
    period: "2018 - 2020",
    description: "Completed higher secondary education with a strong focus on Mathematics and Science.",
    highlights: ["Mathematics", "Physics", "Chemistry"]
  },
  {
    type: "education",
    title: "Class 10 (High School)",
    organization: "State Board",
    period: "2016 - 2018",
    description: "Completed secondary education with an excellent academic foundation.",
    highlights: ["Science", "Mathematics", "English"]
  }
];

export const experiences = [
  {
    type: "certification",
    title: "Oracle Certified Java Programmer",
    organization: "Oracle University",
    period: "2023",
    description: "Comprehensive certification validating core Java and advanced OOP principles.",
    highlights: ["Java SE 11", "Advanced Java Concepts"]
  },
  {
    type: "certification",
    title: "Spring Professional Certification",
    organization: "VMware",
    period: "2024",
    description: "Advanced certification in Spring Framework ecosystem and best practices.",
    highlights: ["Spring Boot 3", "Spring Cloud", "Microservices"]
  }
];

export const achievements = [
  { number: "300+", label: "LeetCode Problems Solved" },
  { number: "15+", label: "Backend Projects Built" },
  { number: "4", label: "Technical Certifications" },
  { number: "2", label: "Open Source Contributions" }
];

export const getBotResponse = (message) => {
  const lowerMsg = message.toLowerCase().trim();

  if (lowerMsg.includes('name') || lowerMsg.includes('who are you')) {
    return "Hi! I'm Akshaya Kumar, a passionate Java Backend Developer based in Kanpur, Uttar Pradesh. I'm a fresher with strong fundamentals in building scalable backend systems.";
  }

  if (lowerMsg.includes('project') || lowerMsg.includes('projects')) {
    return "I have built 3 major backend projects: 1. E-Commerce REST API, 2. TaskFlow API (Task Management), and 3. BlogSphere Backend. All use Spring Boot, REST APIs and modern databases. Would you like details about a specific project?";
  }

  if (lowerMsg.includes('skill') || lowerMsg.includes('tech') || lowerMsg.includes('technology')) {
    return "My core skills include Java, Spring Boot, REST APIs, MySQL & PostgreSQL. I'm also experienced with Git, Docker, and Maven. I love building clean, maintainable code with strong problem-solving skills.";
  }

  if (lowerMsg.includes('resume') || lowerMsg.includes('cv') || lowerMsg.includes('experience')) {
    return "I'm a fresher with a B.Tech in Computer Science (8.7 CGPA). I hold Oracle Java and Spring Professional certifications. I've solved 300+ LeetCode problems and built multiple backend projects. Would you like my resume link?";
  }

  if (lowerMsg.includes('contact') || lowerMsg.includes('email') || lowerMsg.includes('reach')) {
    return "You can reach me at akshaya.kumar@email.com. I'm also active on LinkedIn and GitHub. Feel free to use the contact form below or connect with me directly!";
  }

  if (lowerMsg.includes('location') || lowerMsg.includes('kanpur')) {
    return "I'm located in Kanpur, Uttar Pradesh, India. Open to remote opportunities and relocation for the right role.";
  }

  if (lowerMsg.includes('intern') || lowerMsg.includes('job') || lowerMsg.includes('hire')) {
    return "I'm currently a fresher looking for my first opportunity as a Java Backend Developer. I'm passionate about backend development, problem-solving, and building robust APIs. I'd love to discuss how I can contribute to your team!";
  }

  if (lowerMsg.includes('github') || lowerMsg.includes('linkedin')) {
    return "My GitHub: github.com/akshayakumar2020 and LinkedIn: linkedin.com/in/akshayakumar2020. Feel free to connect with me there!";
  }

  return "Thanks for your question! I specialize in Java backend development. You can ask me about my projects, skills, experience, or how to get in touch. What would you like to know?";
};
