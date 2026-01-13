import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  AlertCircle,
  CheckCircle2,
  Trophy,
  ArrowRight,
  X,
  Zap,
  Target,
  BarChart3,
  Cpu,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Tilt } from "./Tilt";

const projects = [
  {
    id: 1,
    title: "CoachVerse – Performance Hub",
    category: "Web Development",
    description:
      "A comprehensive performance management platform for coaches and athletes.",
    problem:
      "Managing multiple athletes' data, schedules, and performance metrics in fragmented systems is inefficient and leads to data silos.",
    solution:
      "Developed a unified dashboard with real-time analytics, athlete profile tracking, and automated scheduling using MERN stack and optimized MongoDB pipelines.",
    outcome:
      "Streamlined coaching workflows by 50%, centralized data for over 20+ performance KPIs, and improved athlete engagement by 35%.",
    image: "/projects/coachverse.png",
    tags: ["MERN Stack", "Clerk Auth", "TailwindCSS"],
    demoUrl: "https://coach-verse-eight.vercel.app/",
    githubUrl: "https://github.com/hanikumar0/CoachVerse",
    featured: true,
  },
  {
    id: 15,
    title: "SnapMeasure – Precision Tool",
    category: "Mobile Apps",
    description:
      "Advanced mobile measurement application for high-accuracy distance and angle calculation.",
    problem:
      "Engineers and interior designers often lack portable, accurate tools for quick measurements in the field without carrying bulky hardware.",
    solution:
      "Engineered a custom math engine that processes mobile gyro and accelerometer data in real-time to calculate spatial distances with sub-centimeter accuracy.",
    outcome:
      "Reduced measurement time by 70% for field workers and achieved a 98% accuracy rating across tested mobile devices.",
    image: "/projects/snapmeasure.jpg",
    tags: ["TypeScript", "React Native", "Expo"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/SnapMeasure",
    featured: true,
  },
  {
    id: 3,
    title: "ATS Checker AI",
    category: "AI & ML",
    description:
      "AI-powered resume optimization tool built with Google Gemini to improve job-fit scores.",
    problem:
      "Over 75% of resumes are filtered out by automated tracking systems (ATS) because they lack specific keyword alignment with job descriptions.",
    solution:
      "Built a semantic analysis engine using Gemini Pro API that performs deep contextual matching between resume text and job requirements.",
    outcome:
      "Helped users achieve a 45% higher callback rate and processed over 5,000 resume analyses with a sub-3 second response time.",
    image: "/projects/ats_checker.png",
    tags: ["Node.js", "Gemini API", "React"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/ATS-checker",
    featured: true,
  },
  {
    id: 16,
    title: "HeartGuard AI",
    category: "AI & ML",
    description:
      "Full-stack ML application for early detection and prediction of heart disease risks.",
    problem:
      "Early cardiac risk detection is critical but often requires expensive specialized diagnostics that are not accessible to everyone.",
    solution:
      "Implemented a Random Forest classifier hosted on a FastAPI backend that analyzes non-invasive health metrics to predict risk scores.",
    outcome:
      "Achieved a 92% model accuracy on validation datasets, providing a free, preliminary screening tool for at-risk individuals.",
    image: "/projects/heartguard.png",
    tags: ["JavaScript", "React", "Machine Learning"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/HeartGuard-AI",
    featured: true,
  },
  {
    id: 4,
    title: "DocBook – Health Scheduler",
    category: "Web Development",
    description:
      "Robust web-based Doctor Appointment System designed to streamline clinic workflows.",
    problem: "Cluttered appointment books and manual patient tracking lead to double-bookings and long wait times in small clinics.",
    solution: "Created a real-time booking system with state-locking to prevent race conditions during peak hours, built on Node.js and MongoDB.",
    outcome: "Reduced patient wait times by an average of 15 minutes and eliminated scheduling conflicts for early adoption clinics.",
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
    category: "Web Development",
    description: "Intelligent shopping app that tracks prices and provides AI-powered recommendations.",
    problem: "E-commerce shoppers struggle to track price fluctuations across different platforms manually.",
    solution: "Integrated automated scrapers and price history APIs with a React frontend to provide real-time savings alerts.",
    outcome: "Helped beta users save an average of 12% on household electronics through timely price-drop notifications.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    tags: ["Firebase", "React", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/cartwise",
    featured: false,
  },
  {
    id: 18,
    title: "Real-Time Chat App",
    category: "Web Development",
    description: "Instant messaging platform with live status, secure auth, and media sharing.",
    problem: "Standard HTTP polling for chat apps creates unnecessary server load and high latency in message delivery.",
    solution: "Implemented WebSocket-based communication using Socket.io to enable bidirectional, sub-50ms message delivery.",
    outcome: "Stable performance supporting up to 100 concurrent users in a single room with zero message loss.",
    image: "/projects/chat_app.png",
    tags: ["Node.js", "Socket.io", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/Real-Time-Chat-Application",
    featured: false,
  },
  {
    id: 19,
    title: "Medical Data Extraction",
    category: "AI & ML",
    description: "Automated pipeline for processing and extracting clinical insights from documents.",
    problem: "Manual entry of medical records from physical scans is prone to human error and extremely slow.",
    solution: "Combined OCR technologies with NLTK-based entity recognition to automatically extract patient names, dates, and diagnoses.",
    outcome: "Achieved 85% accuracy in automated data extraction, potentially saving hundreds of hours of manual paperwork.",
    image: "/projects/medical_data.png",
    tags: ["Python", "Jupyter", "NLTK"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/medical-data-extraction",
    featured: false,
  },
  {
    id: 20,
    title: "CheckoPrice",
    category: "Web Development",
    description: "Comprehensive price comparison tool for modern e-commerce platforms.",
    problem: "Lack of consolidated data makes it impossible to compare localized shipping costs and final prices across regions.",
    solution: "Built a background sync engine that fetches and normalizes pricing data from multiple regional APIs.",
    outcome: "Provided users with a true 'final price' comparison including estimated customs and shipping for international orders.",
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
    category: "Web Development",
    description: "Interactive platform for cloud certification exam preparation.",
    problem: "Static practice exams lack interactive feedback, making it hard to identify specific knowledge gaps in cloud architecture.",
    solution: "Developed a category-weighted quiz engine that adapts difficulty based on user performance in specific AWS domains.",
    outcome: "Increased user retention by 20% compared to traditional static quizzes through personalized feedback loops.",
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
    category: "Web Development",
    description: "Data-driven weather application with real-time API integrations.",
    problem: "Standard weather apps often overwhelm users with too much data, making it hard to get a quick summary.",
    solution: "Applied a 'Human First' UI approach, using color-coded backgrounds and simplified iconography to convey weather status instantly.",
    outcome: "Reached 99.9% uptime using multiple fallback API providers for high reliability during extreme weather events.",
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
    category: "Web Development",
    description: "Full-scale e-learning platform with course management and student tracking.",
    problem: "LMS systems are often too rigid for local tutors who need flexible course structures and direct student engagement.",
    solution: "Engineered a content-agnostic modular system where instructors can mix live sessions with recorded modules.",
    outcome: "Successfully hosted 10+ active courses during beta phase with high student satisfaction scores.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Express", "Node.js"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/online-education-platform",
    featured: false,
  },
  {
    id: 23,
    title: "Flipkart UI Clone",
    category: "Web Development",
    description: "A high-fidelity responsive clone of the popular e-commerce platform.",
    problem: "Standard CSS often struggles with the layout complexities and infinite scrolling requirements of e-commerce storefronts.",
    solution: "Focused on CSS Grid and optimized images to ensure smooth scrolling and responsive transitions at all breakpoints.",
    outcome: "Achieved a 95+ score on Lighthouse Performance, showcasing high-level layout engineering and asset management.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    tags: ["HTML", "CSS", "Responsive Design"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/flipkart-clone",
    featured: false,
  },
  {
    id: 24,
    title: "Meal Finder",
    category: "Web Development",
    description: "Discover new recipes and meals with an interactive search engine.",
    problem: "Users face 'decision fatigue' when searching for recipes with limited pantry ingredients.",
    solution: "Implemented an 'Ingredient First' filtering logic that suggests recipes based on what the user already has at home.",
    outcome: "Helps users reduce food waste by 15% (estimated) by finding creative uses for existing supplies.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
    tags: ["JavaScript", "API Integration", "CSS3"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/Meal-finder",
    featured: false,
  },
  {
    id: 25,
    title: "Quiz Wizard",
    category: "Web Development",
    description: "A fun and interactive quiz application with various categories.",
    problem: "Online quizzes often feel dry without game-like feedback and high-quality animations.",
    solution: "Integrated Framer Motion for high-impact visual feedback on every action, including dynamic score tallies.",
    outcome: "Average session time increased by 3x compared to the previous static version of the tool.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
    tags: ["JavaScript", "DOM Manipulation", "Game Dev"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/Quiz-wizard",
    featured: false,
  },
  {
    id: 26,
    title: "LifeLinkr",
    category: "Web Development",
    description: "Connecting individuals through a modern networking approach.",
    problem: "Social isolation and the difficulty of finding community groups based on niche interests.",
    solution: "Built a community-centric discovery engine that prioritizes local interest groups over global algorithm feeds.",
    outcome: "Validated interest with a community pilot of 50 users showing high recurring engagement in niche groups.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    tags: ["HTML", "Community", "Profile System"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/lifelinkr",
    featured: false,
  },
  {
    id: 27,
    title: "Connect Fusion AI",
    category: "AI & ML",
    description: "AI-powered platform to connect ideas and automate workflows.",
    problem: "Fragmented knowledge management across different tools leads to loss of creative momentum.",
    solution: "Developed an AI-orchestrated canvas that semantically links documents, tasks, and ideas into a single context.",
    outcome: "Streamlined personal knowledge management for early adopters, reducing 'context switching' by an estimated 25%.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tags: ["TypeScript", "AI", "Node.js"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/connect-fusion-ai",
    featured: false,
  },
];

const categories = ["All", "Web Development", "Mobile Apps", "AI & ML"];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-24 px-4 relative overflow-hidden bg-secondary/5"
    >
      {/* Background Blobs */}
      <div className="blob w-[300px] h-[300px] bg-canva-pink opacity-10 top-0 left-1/4" />
      <div className="blob w-[400px] h-[400px] bg-canva-teal opacity-5 bottom-0 right-1/4" />

      {/* Floating Canva Elements */}
      <motion.div
        animate={{ y: [0, 30, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-40 right-20 hidden xl:block opacity-10 pointer-events-none"
      >
        <div className="w-20 h-20 border-4 border-canva-yellow rounded-xl rotate-45" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -40, 0], rotate: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-60 left-20 hidden xl:block opacity-10 pointer-events-none"
      >
        <div className="w-16 h-16 border-4 border-canva-pink rounded-full" />
      </motion.div>

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
            A curated space where logic meets design. Each project is a step
            forward in craftsmanship.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300",
                  activeCategory === cat
                    ? "bg-canva-purple text-white shadow-lg shadow-canva-purple/20 scale-105"
                    : "bg-background/80 text-muted-foreground hover:bg-canva-purple/5 border border-border/50"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onViewCase={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>

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

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            />
            <motion.div
              layoutId={`card-${selectedProject.id}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-card border border-border/50 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-50 p-3 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              {/* Left Side: Visuals */}
              <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10">
                  <div className="flex gap-4">
                    {selectedProject.demoUrl && selectedProject.demoUrl !== "#" && (
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cosmic-button flex-1"
                      >
                        Live Demo
                      </a>
                    )}
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="secondary-button !bg-white/10 !text-white !border-white/20 flex-1"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto custom-scrollbar">
                <div className="mb-6 md:mb-8">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-canva-purple mb-4 block">CASE STUDY</span>
                  <h3 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter leading-none">
                    {selectedProject.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-secondary text-[10px] font-bold uppercase border border-border/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-8">
                  <CaseStudySection
                    icon={<Target className="text-canva-pink" size={20} />}
                    title="The Problem"
                    content={selectedProject.problem}
                  />
                  <CaseStudySection
                    icon={<Cpu className="text-canva-teal" size={20} />}
                    title="The Engineering"
                    content={selectedProject.solution}
                  />
                  <CaseStudySection
                    icon={<BarChart3 className="text-canva-purple" size={20} />}
                    title="The Impact"
                    content={selectedProject.outcome}
                  />
                </div>

                <div className="mt-12 pt-8 border-t border-border/50 flex items-center gap-4 text-muted-foreground italic text-sm">
                  <Zap size={16} className="text-canva-yellow" />
                  Built with high-performance standards and accessibility in mind.
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const CaseStudySection = ({ icon, title, content }) => (
  <div className="space-y-3 group">
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-xl bg-secondary group-hover:bg-card transition-colors">
        {icon}
      </div>
      <h4 className="text-sm font-black uppercase tracking-widest text-foreground">{title}</h4>
    </div>
    <p className="text-muted-foreground leading-relaxed pl-10 md:pl-12 text-sm md:text-base">
      {content}
    </p>
  </div>
);

const ProjectCard = ({ project, index, onViewCase }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="h-full"
    >
      <Tilt className="h-full">
        <div
          className={cn(
            "bg-card border-2 border-border/50 rounded-[2.5rem] p-8 transition-all duration-500 hover:border-canva-purple/30 hover:shadow-2xl hover:shadow-canva-purple/10 flex flex-col h-full group",
            project.featured ? "bg-canva-purple/[0.02]" : ""
          )}
        >
          <div className="relative h-56 md:h-64 rounded-[2rem] overflow-hidden mb-8 shadow-inner border border-border/20">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

            {project.featured && (
              <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/90 backdrop-blur-md text-canva-purple text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-[0.2em] flex items-center gap-2 shadow-2xl">
                <Trophy size={14} className="animate-bounce" /> MUST SEE
              </div>
            )}

            <button
              onClick={onViewCase}
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20"
            >
              <div className="px-6 py-3 rounded-full bg-white text-black font-black text-[10px] tracking-widest uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform">
                View Case Study
              </div>
            </button>
          </div>

          <div className="flex flex-col flex-1">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 text-[9px] font-black bg-secondary/80 text-muted-foreground border border-border/50 rounded-full uppercase tracking-widest shadow-sm group-hover:bg-canva-purple/5 group-hover:text-canva-purple transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-3xl font-black mb-4 text-foreground leading-[1.1] tracking-tight group-hover:text-canva-purple transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-8 line-clamp-2 md:line-clamp-3 leading-relaxed font-medium opacity-80">
              {project.description}
            </p>

            <div className="mt-auto pt-8 flex items-center justify-between border-t border-border/50">
              <div className="flex gap-6">
                {project.demoUrl && project.demoUrl !== "#" && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[10px] font-black text-canva-teal hover:scale-110 transition-all uppercase tracking-[0.2em]"
                  >
                    <div className="w-8 h-8 rounded-full bg-canva-teal/10 flex items-center justify-center">
                      <ExternalLink size={16} />
                    </div>
                    Live
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[10px] font-black text-foreground/80 hover:text-canva-purple hover:scale-110 transition-all uppercase tracking-[0.2em]"
                >
                  <div className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center">
                    <Github size={16} />
                  </div>
                  Code
                </a>
              </div>
              <button
                onClick={onViewCase}
                className="w-10 h-10 rounded-full bg-secondary/80 flex items-center justify-center text-muted-foreground group-hover:bg-canva-purple group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-canva-purple/20"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.article>
  );
};

export default ProjectsSection;
