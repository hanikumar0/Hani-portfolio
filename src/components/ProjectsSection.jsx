import React from "react";
import {
  ExternalLink,
  Github,
  AlertCircle,
  CheckCircle2,
  Trophy,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "CoachVerse – Performance Hub",
    description:
      "A comprehensive performance management platform for coaches and athletes.",
    problem:
      "Managing multiple athletes' data, schedules, and performance metrics in fragmented systems is inefficient.",
    solution:
      "Developed a unified dashboard with real-time analytics, athlete profile tracking, and automated scheduling using MERN stack.",
    outcome:
      "Streamlined coaching workflows by 50% and centralized data for over 20+ performance KPIs.",
    image: "/projects/coachverse.png",
    tags: ["MERN Stack", "Clerk Auth", "TailwindCSS"],
    demoUrl: "https://coach-verse-eight.vercel.app/",
    githubUrl: "https://github.com/hanikumar0/CoachVerse",
    featured: true,
  },
  {
    id: 15,
    title: "SnapMeasure – Precision Tool",
    description:
      "Advanced mobile measurement application for high-accuracy distance and angle calculation.",
    problem:
      "Lack of portable, accurate measurement tools for engineers and designers without specialized hardware.",
    solution:
      "Utilized mobile gyro and accelerometer sensors with sophisticated math engines for real-time spatial calculations.",
    outcome:
      "Provided high-precision measurements with minimal error margin, used by local field engineers.",
    image: "/projects/snapmeasure.jpg",
    tags: ["TypeScript", "React Native", "Expo"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/SnapMeasure",
    featured: true,
  },
  {
    id: 3,
    title: "ATS Checker AI",
    description:
      "AI-powered resume optimization tool built with Google Gemini to improve job-fit scores.",
    problem:
      "Resumes are often rejected by Applicant Tracking Systems (ATS) due to poor formatting or lack of relevant keywords.",
    solution:
      "Integrated Gemini Pro API for deep semantic matching and contextual keyword extraction from job descriptions.",
    outcome:
      "Empowered over 1,000 users to secure more interviews by increasing their resume match rate average by 35%.",
    image: "/projects/ats_checker.png",
    tags: ["Node.js", "Gemini API", "React"],
    demoUrl: "https://ats-checker.vercel.app",
    githubUrl: "https://github.com/hanikumar0/ATS-checker",
    featured: true,
  },
  {
    id: 16,
    title: "HeartGuard AI",
    description:
      "Full-stack ML application for early detection and prediction of heart disease risks.",
    problem:
      "Early detection of heart disease is life-saving but clinical screening is often inaccessible or expensive.",
    solution:
      "Built a secure web interface that processes clinical data points through a trained predictive model.",
    outcome:
      "Delivered fast and accurate risk assessments, supporting preventative healthcare decisions for early users.",
    image: "/projects/heartguard.png",
    tags: ["JavaScript", "React", "Machine Learning"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/HeartGuard-AI",
    featured: true,
  },
  {
    id: 4,
    title: "DocBook – Health Scheduler",
    description:
      "Robust web-based Doctor Appointment System designed to streamline clinic workflows.",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    tags: ["Node.js", "Express", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/-DocBook",
    featured: false,
  },
  {
    id: 2,
    title: "CartWise – Smart Shop",
    description: "Intelligent shopping app that tracks prices and provides AI-powered recommendations.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    tags: ["Firebase", "React", "TailwindCSS"],
    demoUrl: "https://cartwise-demo.vercel.app",
    githubUrl: "https://github.com/hanikumar0/cartwise",
    featured: false,
  },
  {
    id: 18,
    title: "Real-Time Chat App",
    description: "Instant messaging platform with live status, secure auth, and media sharing.",
    image: "/projects/chat_app.png",
    tags: ["Node.js", "Socket.io", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/Real-Time-Chat-Application",
    featured: false,
  },
  {
    id: 19,
    title: "Medical Data Extraction",
    description: "Automated pipeline for processing and extracting clinical insights from documents.",
    image: "/projects/medical_data.png",
    tags: ["Python", "Jupyter", "NLTK"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/medical-data-extraction",
    featured: false,
  },
  {
    id: 20,
    title: "CheckoPrice",
    description: "Comprehensive price comparison tool for modern e-commerce platforms.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["JavaScript", "Web Scraping", "Node.js"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/CheckoPrice",
    featured: false,
  },
  {
    id: 21,
    title: "AWS Quiz Portal",
    description: "Interactive platform for cloud certification exam preparation.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    tags: ["HTML", "JavaScript", "AWS"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/Aws-quiz-portal",
    featured: false,
  },
  {
    id: 22,
    title: "Weather Forecasting",
    description: "Data-driven weather application with real-time API integrations.",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800",
    tags: ["JavaScript", "API", "CSS3"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/weather-forcasting",
    featured: false,
  },
  {
    id: 13,
    title: "Education Platform",
    description: "Full-scale e-learning platform with course management and student tracking.",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Express", "Node.js"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/online-education-platform",
    featured: false,
  },
  {
    id: 23,
    title: "Flipkart UI Clone",
    description: "A high-fidelity responsive clone of the popular e-commerce platform.",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    tags: ["HTML", "CSS", "Responsive Design"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/flipkart-clone",
    featured: false,
  },
  {
    id: 24,
    title: "Meal Finder",
    description: "Discover new recipes and meals with an interactive search engine.",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
    tags: ["JavaScript", "API Integration", "CSS3"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/Meal-finder",
    featured: false,
  },
  {
    id: 25,
    title: "Quiz Wizard",
    description: "A fun and interactive quiz application with various categories.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
    tags: ["JavaScript", "DOM Manipulation", "Game Dev"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/Quiz-wizard",
    featured: false,
  },
  {
    id: 26,
    title: "LifeLinkr",
    description: "Connecting individuals through a modern networking approach.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    tags: ["HTML", "Community", "Profile System"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/lifelinkr",
    featured: false,
  },
  {
    id: 27,
    title: "Connect Fusion AI",
    description: "AI-powered platform to connect ideas and automate workflows.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tags: ["TypeScript", "AI", "Node.js"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/connect-fusion-ai",
    featured: false,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden bg-secondary/5">
      {/* Background Blobs */}
      <div className="blob w-[300px] h-[300px] bg-canva-pink opacity-10 top-0 left-1/4" />
      <div className="blob w-[400px] h-[400px] bg-canva-teal opacity-5 bottom-0 right-1/4" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-canva-purple/10 text-canva-purple text-xs font-black mb-6 border border-canva-purple/20 tracking-widest uppercase">
            <Trophy size={14} /> Showcase
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
            Selected <span className="text-gradient">Creations</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            A curated space where logic meets design. Each project is a step forward in craftsmanship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <a
            href="https://github.com/hanikumar0"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-button inline-flex group"
          >
            Explore Full Catalog
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "canva-card flex flex-col h-full",
        project.featured ? "lg:border-canva-purple/50 bg-canva-purple/5" : ""
      )}
    >
      <div className="relative h-52 md:h-60 rounded-[1.5rem] overflow-hidden mb-6">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
        {project.featured && (
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-canva-purple text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest flex items-center gap-2 shadow-xl">
            <Trophy size={14} /> MUST SEE
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-[10px] font-black bg-secondary dark:bg-black/20 text-muted-foreground border border-border/50 rounded-lg uppercase tracking-tight"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-black mb-3 text-foreground leading-tight">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-6 line-clamp-2 md:line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        <div className="mt-auto pt-6 flex items-center justify-between border-t border-border/50">
          <div className="flex gap-4">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-black text-canva-teal hover:opacity-80 transition-all uppercase tracking-widest"
            >
              <ExternalLink size={16} /> Preview
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-black text-foreground hover:text-canva-purple transition-all uppercase tracking-widest"
            >
              <Github size={16} /> Source
            </a>
          </div>
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-canva-purple group-hover:text-white transition-all">
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectsSection;
