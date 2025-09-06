import { Experience, Project, Skill } from './types';

export const personalInfo = {
  name: "Gana Teja Akula",
  title: "Software Engineer",
  location: "San Jose, California, USA",
  email: "akulaganateja@gmail.com",
  phone: "+1 (857) 423-0766",
  linkedin: "https://www.linkedin.com/in/ganatejaakula/",
  github: "https://github.com/ganatejadragneel",
  tagline: "Building scalable systems that impact millions of users worldwide",
  bio: "I'm an experienced software engineer with 3+ years building high-performance systems at Amazon and Reliance Jio. I recently completed my MS in Computer Science from UMass Amherst. I'm passionate about AI integration, system optimization, and creating meaningful technological impact."
};

export const experiences: Experience[] = [
  {
    id: "mindful-performance",
    company: "MindfulPerformance (Pre-Seed Startup)",
    position: "Software Developer Intern",
    period: "June 2024 – August 2024",
    description: [
      "Single-handedly built complete MVP using React, NextJS, Express, and MongoDB.",
      "Developed platform connecting athletes with coaches through web-integrated video calls.",
      "Implemented custom recommendation algorithms for user matching.",
      "Achieved rapid market validation with 50+ paying customers within 2 weeks of deployment."
    ],
    technologies: ["React", "Next.js", "Express", "MongoDB", "Netlify", "Railway"],
    achievements: [
      "Full-stack MVP from scratch",
      "50+ paying customers in 2 weeks",
      "Successful product-market fit validation"
    ]
  },
  {
    id: "jio",
    company: "Jio Platforms Limited - Coupon Management Team",
    position: "Software Engineer",
    period: "August 2022 – August 2023",
    description: [
      "Developed RESTful APIs for voucher upload, search, and cancellation features for JioMart enterprise platform.",
      "Implemented Redis caching solutions achieving 70% improvement in data retrieval times.",
      "Led implementation of comprehensive logging system using ELK stack, managing 3 interns.",
      "Built API documentation portal using React and Python for enhanced developer experience.",
      "Managed cloud infrastructure with Docker, Kubernetes on Azure AKS, and Kafka messaging."
    ],
    technologies: ["Java", "Spring Boot", "Redis", "ELK Stack", "React", "Python", "Docker", "Kubernetes", "Azure", "Kafka"],
    achievements: [
      "70% improvement in data retrieval performance",
      "83% reduction in debugging time (6 hours to 1 hour)",
      "Built critical voucher system for India's largest e-commerce platform"
    ]
  },
  {
    id: "amazon-sde",
    company: "Amazon - Kindle Core Conversion Team",
    position: "Software Development Engineer",
    period: "July 2020 – June 2022",
    description: [
      "Led development of comprehensive PDF to EPUB conversion system using C++ and Ruby, taking ownership of 95% of the project codebase.",
      "Enhanced Kindle's comic book support from 95% to 99% coverage through collaboration with Comixology team.",
      "Built end-to-end eBook conversion workflows using AWS Step Functions orchestrating AWS EC2 container tasks, storing multiple eBook formats in Amazon S3, and handling new publisher requests via Amazon SQS.",
      "Managed and mentored an intern, providing guidance on technical challenges and large-scale software development."
    ],
    technologies: ["C++", "Ruby", "Java", "AWS", "Linux"],
    achievements: [
      "30% improvement in PDF conversion speed",
      "99% comic book format coverage",
      "30% overall system performance improvement"
    ]
  },
  {
    id: "amazon-intern",
    company: "Amazon - Kindle Core Conversion Team", 
    position: "Software Development Engineer Intern",
    period: "February 2020 – July 2020",
    description: [
      "Worked on critical consumer-facing systems responsible for converting digital content for millions of Kindle users.",
      "Gained foundational experience in building systems at massive scale with high reliability standards."
    ],
    technologies: ["C++", "Java", "AWS"],
    achievements: []
  }
];

export const projects: Project[] = [
  {
    id: "linkinsync",
    title: "LinkinSync: AI-Enhanced Music Platform",
    description: "Sophisticated music platform featuring bidirectional Spotify data synchronization, AI-powered chatbot using LangChainGo and Llama3.2, and real-time global chat system with Apache Kafka.",
    image: "/images/linkinsync.jpg",
    technologies: ["React", "Go", "PostgreSQL", "LangChainGo", "Llama3.2", "Apache Kafka", "Spotify API", "Genius API"],
    liveUrl: "https://linkinsync.example.com",
    githubUrl: "https://github.com/ganatejadragneel/linkinsync",
    featured: true,
    year: "2024"
  },
  {
    id: "pdf-conversion",
    title: "PDF to EPUB Conversion System",
    description: "High-performance document conversion system at Amazon processing millions of documents with 30% speed improvement and advanced fidelity preservation across complex document structures.",
    image: "/images/pdf-conversion.jpg",
    technologies: ["C++", "Ruby", "AWS", "Linux"],
    featured: true,
    year: "2020-2022"
  },
  {
    id: "voucher-apis",
    title: "Enterprise Voucher Management System",
    description: "RESTful API system for JioMart supporting voucher upload, search, and cancellation features. Implemented Redis caching for 70% performance improvement during high-traffic periods.",
    image: "/images/voucher-system.jpg",
    technologies: ["Java", "Spring Boot", "Redis", "PostgreSQL", "Docker", "Azure"],
    featured: true,
    year: "2022-2023"
  },
  {
    id: "campus-print",
    title: "Campus Print: Digital Transformation",
    description: "Online printing service for universities built with Angular 5, Firebase, and TypeScript. Successfully deployed and used within college environment, eliminating hardware dependencies for students.",
    image: "/images/campus-print.jpg",
    technologies: ["Angular 5", "Firebase", "TypeScript"],
    featured: false,
    year: "2019"
  },
  {
    id: "stock-exchange",
    title: "Real-time Stock Exchange System", 
    description: "Sophisticated trading application with three microservices featuring advanced caching, replication, and fault tolerance. Upgraded for gRPC compatibility and containerized with Docker.",
    image: "/images/stock-exchange.jpg",
    technologies: ["Go", "gRPC", "Docker", "Redis", "Microservices"],
    featured: false,
    year: "2024"
  }
];

export const skills: Skill[] = [
  // Languages
  { name: "C++", category: "languages", proficiency: 95 },
  { name: "Python", category: "languages", proficiency: 90 },
  { name: "Java", category: "languages", proficiency: 85 },
  { name: "JavaScript/TypeScript", category: "languages", proficiency: 85 },
  { name: "Go", category: "languages", proficiency: 75 },
  
  // Frameworks
  { name: "React/Next.js", category: "frameworks", proficiency: 90 },
  { name: "Spring Boot", category: "frameworks", proficiency: 85 },
  { name: "Django/Flask", category: "frameworks", proficiency: 80 },
  { name: "Express.js", category: "frameworks", proficiency: 80 },
  
  // Cloud & DevOps
  { name: "AWS", category: "cloud", proficiency: 85 },
  { name: "Docker/Kubernetes", category: "cloud", proficiency: 80 },
  { name: "Azure", category: "cloud", proficiency: 75 },
  { name: "Terraform", category: "cloud", proficiency: 70 },
  
  // AI & ML
  { name: "LangChain/LangGraph", category: "ai", proficiency: 85 },
  { name: "OpenAI APIs", category: "ai", proficiency: 80 },
  { name: "Machine Learning", category: "ai", proficiency: 75 },
  
  // Tools & Databases
  { name: "PostgreSQL/MySQL", category: "tools", proficiency: 85 },
  { name: "Redis/Elasticsearch", category: "tools", proficiency: 80 },
  { name: "Apache Kafka", category: "tools", proficiency: 75 },
  { name: "MongoDB", category: "tools", proficiency: 75 }
];