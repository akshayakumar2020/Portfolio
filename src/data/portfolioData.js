export const projects = [
  {
    id: 1,
    name: "MediChain",

    description:
      "An AI-powered healthcare platform designed for secure storage, analysis, and management of patient health reports with intelligent medical insight generation.",

    technologies: [
      "Java",
      "Spring Boot",
      "Spring AI",
      "React.js",
      "PostgreSQL"
    ],

    features: [
      "Secure patient health report management system",
      "Scalable RESTful APIs using Spring Boot",
      "AI-powered medical report analysis & insight generation",
      "Pattern detection for smarter healthcare decision support",
      "Integrated React frontend with backend APIs",
      "Cloud-ready architecture for future scalability"
    ],

    github: "https://github.com/akshayakumar2020/MediScanAi",
    live: "https://healthcarereport.vercel.app/",

    image: "/images/project1.jpg",
    category: "AI + Full Stack"
  },
  {
    id: 2,
    name: "ParkEase – Smart Parking System",
    description:
      "A full-stack smart parking management system enabling real-time slot booking, secure authentication, role-based access control, and efficient parking administration for users, owners, and admins.",

    technologies: [
      "Java",
      "Spring Boot",
      "React.js",
      "MySQL",
      "JWT",
      "Maven"
    ],

    features: [
      "Real-time parking slot booking & management",
      "JWT authentication with role-based access control",
      "Admin, Owner & User management modules",
      "RESTful APIs with secure request-response handling",
      "User activity tracking & booking analytics",
      "Integrated React frontend with Spring Boot backend"
    ],

    github: "https://github.com/akshayakumar2020/ParkEase-Smart-Parking-System",
    live: "https://parkease-demo.netlify.app",

    image: "/images/project2.jpg",
    category: "Full Stack"
  },
  {
    id: 3,
    name: "Sorting Visualizer",
    description: "An interactive web application that visualizes sorting algorithms with step-by-step execution, dynamic animations, and real-time performance comparison.",
    technologies: ["JavaScript", "HTML", "CSS", "Web Audio API", "Algorithms", "Data Visualization"],
    features: [
      "Implemented Bubble Sort, Selection Sort, and Insertion Sort",
      "Added dynamic animations to improve algorithm understanding",
      "Visualized time complexity and performance differences in real time",
      "Used the Web Audio API to add sound feedback during sorting steps",
      "Built controls for speed adjustment, input size, and algorithm selection"
    ],
    github: "https://github.com/akshayakumar2020/Sorting-Visualizer",
    live: "https://sorting-visualizer-akshaya.vercel.app/",
    image: "/images/project3.jpg",
    category: "Frontend"
  }
];


export const skills = {
  backend: [
    { name: "Java", icon: "☕" },
    { name: "Spring Boot", icon: "🌱" },
    { name: "Spring AI", icon: "🍃" },
    { name: "REST APIs", icon: "🔗" }
  ],

  database: [
    { name: "MySQL", icon: "🐬" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Hibernate", icon: "🗄️" },
    { name: "JPA", icon: "📚" }
  ],

  tools: [
    { name: "Git & GitHub", icon: "🐙" },
    { name: "Maven", icon: "📦" },
    { name: "Postman", icon: "📮" },
    { name: "JWT Auth", icon: "🔐" },
    // { name: "IntelliJ IDEA", icon: "💡" }
  ]
};

export const education = [
  {
    type: "education",
    title: "B.Tech in Computer Science",
    organization: "Dr. A. P. J. Abdul Kalam Technical University, Lucknow",
    period: "2023 - 2027",
    description:
      "Focused on Data Structures, Algorithms, Database Systems and Software Engineering. CGPA: 7.6",
    highlights: [
      "Data Structures & Algorithms",
      "System Design",
      "Database Management"
    ]
  },

  {
    type: "education",
    title: "Class 12 (Intermediate)",
    organization: "CBSE Board",
    period: "2021 - 2022",
    description:
      "Completed higher secondary education with a strong focus on Mathematics and Science. Percentage: 81.2%",
    highlights: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "English",
      "Physical Education"
    ]
  },

  {
    type: "education",
    title: "Class 10 (High School)",
    organization: "CBSE Board",
    period: "2019 - 2020",
    description:
      "Completed secondary education with an excellent academic foundation. Percentage: 77.6%",
    highlights: [
      "Science",
      "Mathematics",
      "English",
      "Social Studies",
      "Hindi"
    ]
  }
];

export const experiences = [
  {
    type: "certification",
    title: "Problem Solving (Basic)",
    organization: "HackerRank",
    period: "2024",
    description:
      "Successfully passed the HackerRank Problem Solving (Basic) skill certification test, demonstrating foundational problem-solving and coding abilities.",
    highlights: [
      "Data Structures",
      "Algorithms",
      "Basic Problem Solving",
      "Coding Assessment"
    ],
    credentialId: "2D2BB46E67B9",
    issuedDate: "December 2024"
  },
  {
    type: "certification",
    title: "Programming in Java",
    organization: "NPTEL | IIT Kharagpur",
    period: "Jan - Apr 2026",
    description:
      "Successfully completed the NPTEL Programming in Java course with Elite certification, demonstrating strong understanding of Java programming concepts and problem-solving skills.",
    highlights: [
      "Score: 93%",
      "Java Programming",
      "Object-Oriented Programming",
      "Problem Solving",
      "Elite Certification"

    ],
    credentialId: "NPTEL26CS36S857800216",
    issuedDate: "April 2026"
  },
  {
    type: "certification",
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    organization: "Oracle University",
    period: "2025 - 2027",
    description:
      "Professional certification validating expertise in Oracle Cloud Infrastructure Generative AI services, AI fundamentals, LLMs, and AI-powered application development.",
    highlights: [
      "OCI Generative AI",
      "Large Language Models (LLMs)",
      "AI Application Development",
      "Oracle Cloud Infrastructure"
    ],
    credentialId: "1024700150CI25GAIOCP",
    issuedDate: "August 2025",
    validTill: "August 2027"
  },
  {
    type: "certification",
    title: "HTML5 - The Language",
    organization: "Infosys Springboard",
    period: "2024",
    image: "/certificates/infosys-html5.png", // certificate image path
    description:
      "Successfully completed the HTML5 - The Language course offered by Infosys Springboard, gaining foundational knowledge of modern web structure and semantic HTML development.",
    highlights: [
      "HTML5 Fundamentals",
      "Semantic HTML",
      "Web Development Basics",
      "Frontend Development"
    ],
    issuedDate: "October 2024",
  }

];

export const achievements = [
  { number: "300+", label: "LeetCode Problems Solved" },
  { number: "15+", label: "Backend Projects Built" },
  { number: "4", label: "Technical Certifications" },
  //{ number: "2", label: "Open Source Contributions" },
  { number: "100%", label: "Passion For Development" }
];

export const getBotResponse = (message) => {
  const lowerMsg = message.toLowerCase().trim();

  if (lowerMsg.includes('name') || lowerMsg.includes('who are you')) {
    return "Hi! I'm Akshaya Kumar, a passionate Java Backend Developer based in Kanpur, Uttar Pradesh. I'm a fresher with strong fundamentals in building scalable backend systems.";
  }

  if (lowerMsg.includes('medichain') || lowerMsg.includes('health') || lowerMsg.includes('medical')) {
    return "MediChain is an AI-powered healthcare platform designed for secure storage, analysis, and management of patient health reports with intelligent medical insight generation. It's built with Java, Spring Boot, Spring AI, React.js, and MySQL.";
  }

  if (lowerMsg.includes('parkease') || lowerMsg.includes('parking')) {
    return "ParkEase is a smart parking management system enabling real-time slot booking, secure JWT authentication, role-based access control, and admin/owner modules. It is built using Java, Spring Boot, React.js, MySQL, JWT, and Maven.";
  }

  if (lowerMsg.includes('sorting') || lowerMsg.includes('visualizer')) {
    return "Sorting Visualizer is an interactive web application that visualizes sorting algorithms (Bubble Sort, Selection Sort, Insertion Sort) with step-by-step execution, dynamic animations, and sound feedback using the Web Audio API. Built with JavaScript, HTML, and CSS.";
  }

  if (lowerMsg.includes('project') || lowerMsg.includes('projects')) {
    return "I have built projects including: 1. MediChain (AI-powered healthcare), 2. ParkEase (Smart Parking System), and 3. Sorting Visualizer. They cover full-stack development, Spring Boot, Spring AI, React.js, databases, and algorithm visualization. Which one would you like details about?";
  }

  if (lowerMsg.includes('skill') || lowerMsg.includes('tech') || lowerMsg.includes('technology') || lowerMsg.includes('technologies')) {
    return "My core skills include Java, Spring Boot, Spring AI, REST APIs, MySQL, PostgreSQL, Hibernate, and JPA. I'm also experienced with Git & GitHub, Maven, Postman, and JWT Authentication. I love building clean, maintainable backend code with strong problem-solving skills.";
  }

  if (lowerMsg.includes('resume') || lowerMsg.includes('cv') || lowerMsg.includes('experience') || lowerMsg.includes('education') || lowerMsg.includes('qualification')) {
    return "I am pursuing a B.Tech in Computer Science at Dr. A.P.J. Abdul Kalam Technical University, Lucknow (2023 - 2027) with a CGPA of 7.6. I hold 4 certifications: Oracle Cloud Infrastructure 2025 Certified Generative AI Professional, NPTEL Programming in Java (Elite, 93%), HackerRank Problem Solving (Basic), and HTML5 (Infosys Springboard). I've solved 300+ LeetCode problems and built 15+ backend projects. Would you like my resume link?";
  }

  if (lowerMsg.includes('contact') || lowerMsg.includes('email') || lowerMsg.includes('reach')) {
    return "You can reach me at akshayakumarbth106@gmail.com. I'm also active on LinkedIn and GitHub. Feel free to use the contact form below or connect with me directly!";
  }

  if (lowerMsg.includes('location') || lowerMsg.includes('kanpur')) {
    return "I'm located in Kanpur, Uttar Pradesh, India. Open to remote opportunities and relocation for the right role.";
  }

  if (lowerMsg.includes('intern') || lowerMsg.includes('job') || lowerMsg.includes('hire')) {
    return "I'm currently a fresher looking for my first opportunity as a Java Backend Developer. I'm passionate about backend development, problem-solving, and building robust APIs. I'd love to discuss how I can contribute to your team!";
  }

  if (lowerMsg.includes('github') || lowerMsg.includes('linkedin')) {
    return "My GitHub is https://github.com/akshayakumar2020 and LinkedIn is https://linkedin.com/in/akshayakumar2020. Feel free to connect with me there!";
  }

  return "Thanks for your question! I specialize in Java backend development. You can ask me about my projects, skills, experience, or how to get in touch. What would you like to know? Connect me on LinkedIn for more details!";
};
