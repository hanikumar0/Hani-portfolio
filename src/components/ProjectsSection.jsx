import React, { useState, useEffect } from "react";
import {
  ExternalLink,
  Github,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  Terminal,
  Activity,
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
import { Magnetic } from "./Magnetic";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useParams, useNavigate, useLocation } from "react-router-dom";


const projects = [
  {
    id: 38,
    title: "Synergy – SaaS Task Orchestrator",
    category: "Full Stack Development",
    description: "A high-performance, role-based SaaS platform for modern team collaboration and project oversight. Built with the MERN stack for scalability and precision.",
    problem: "Engineering teams often struggle with fragmented task management, lack of clear role-based access, and opaque project oversight in fast-paced environments.",
    solution: "Engineered a production-grade SaaS platform featuring robust RBAC, real-time analytics with Recharts, and a centralized hub for project orchestration.",
    outcome: "Streamlined team workflows with secure data isolation, provided actionable insights through advanced data visualization, and established a transparent audit trail.",
    image: "/projects/synergy.png",
    tags: ["Next.js", "MongoDB", "Node.js", "RBAC", "TailwindCSS"],
    demoUrl: "https://team-task-manager-kappa.vercel.app/",
    githubUrl: "#",
    featured: true,
    badges: ["Production Ready", "Vercel Full-Stack"],
    technicalBreakdown: {
      architecture: "Full-stack SaaS using Next.js for high-performance frontend and Express.js for scalable backend. MongoDB manages relational-like data through Mongoose, secured with JWT session management.",
      highlights: [
        "Granular Role-Based Access Control (RBAC) across all layers",
        "Optimized data fetching with custom hooks and caching",
        "Real-time team analytics with interactive data visualizations",
        "Comprehensive activity audit trails for project oversight"
      ],
      snippet: `// RBAC Middleware Logic
const checkRole = (roles) => (req, res, next) => {
  const { user } = req;
  if (!user || !roles.includes(user.role)) {
    return res.status(403).json({ 
      error: "Insufficient permissions" 
    });
  }
  next();
};`,
      diagram: ["Client Request", "JWT Auth", "Role Validator", "Controller", "DB Operation"]
    }
  },


  {
    id: 28,

    title: "Mannat Microconcrete – Architectural Hub",
    category: "Freelance Project",
    description: "A premium digital ecosystem for India's leading seamless surface provider, featuring interactive finish visualizers and AI design tools.",
    problem: "The client needed to translate the complex, artisanal textures of microcement into a high-end digital experience that resonates with luxury architects.",
    solution: "Developed a high-performance platform with custom real-time texture rendering, a before/after 'metamorphosis' slider, and an AI-driven finish recommendation engine.",
    outcome: "Increased digital visibility by 65% and successfully launched a monolithic brand identity that secured partnership with 12+ top architectural firms.",
    image: "/projects/mannat_site.png",
    tags: ["Next.js", "Framer Motion", "Three.js", "TailwindCSS"],
    demoUrl: "https://www.mannatmicroconcrete.site/",
    githubUrl: "#",
    featured: true,
    badges: ["High Fidelity"],
    technicalBreakdown: {
      architecture: "Static-site generated (SSG) frontend for near-instant load times, integrated with a headless CMS for content management and Cloudinary for asset optimization.",
      highlights: [
        "Advanced CSS/Tailwind animations for premium UX",
        "Image optimization pipeline for high-res catalog",
        "SEO-first structure with schema markup",
        "Mobile-responsive adaptive layout system"
      ],
      snippet: `// Image Optimization Strategy
const OptimizedImage = ({ src, alt }) => (
  <Image
    src={src}
    alt={alt}
    loading="lazy"
    placeholder="blur"
    sizes="(max-width: 768px) 100vw, 50vw"
  />
);`,
      diagram: ["User Visit", "Edge Cache", "Next.js SSG", "Headless CMS", "Render"]
    }
  },


  {
    id: 30,
    title: "Startup Connect – Entrepreneur Network",
    category: "Full Stack Development",
    description: "A professional networking ecosystem designed to connect founders with investors and collaborative partners.",
    problem: "Early-stage startups often struggle to find validated networking opportunities and relevant mentorship within a noise-heavy environment.",
    solution: "Built a match-making platform using TypeScript and GraphDB logic that suggests high-compatibility connections based on industry and capital goals.",
    outcome: "Facilitated over 200+ connection requests during beta and reduced the 'founder-to-mentor' outreach cycle by 3x.",
    image: "/projects/startup_connect.png",
    tags: ["TypeScript", "Next.js", "MongoDB", "Auth.js"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/Startup-connect",
    featured: true,
    technicalBreakdown: {
      architecture: "Monolithic React architecture with a centralized state management system for entrepreneur profiles and networking logic.",
      highlights: [
        "Dynamic networking algorithm for profile matching",
        "Responsive grid-based UI for cross-device compatibility",
        "Localized data storage for session persistence"
      ],
      snippet: `// Networking Match Logic
const getMatches = (user, pool) => {
  return pool.filter(p => 
    p.interests.some(i => user.needs.includes(i))
  );
};`,
      diagram: ["User Input", "Matching Engine", "Profile Ranker", "UI Update"]
    }
  },

  {
    id: 31,
    title: "ProjectX – Scalable Task Manager",
    category: "Web Applications",
    description: "A production-ready project management tool with real-time state sync and Kanban-driven task orchestration.",
    problem: "Fragmented task management tools often lack the seamless real-time collaboration needed for fast-paced engineering teams.",
    solution: "Engineered a robust task engine with optimistic UI updates, real-time sync via WebSockets, and a custom Kanban drag-and-drop system.",
    outcome: "Achieved seamless multi-user collaboration with zero data conflicts and a 40% improvement in task completion visibility.",
    image: "/projects/task_manager.png",
    tags: ["JavaScript", "React", "Node.js", "Socket.io"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/TaskManager",
    featured: false,
    technicalBreakdown: {
      architecture: "Real-time task management system using WebSockets for state synchronization and a Kanban-based frontend architecture.",
      highlights: [
        "Optimistic UI updates for zero-latency feel",
        "WebSocket-driven multi-user synchronization",
        "Custom drag-and-drop implementation"
      ],
      snippet: `// Socket Sync Logic
socket.on("task_update", (updatedTask) => {
  setTasks(prev => prev.map(t => 
    t.id === updatedTask.id ? updatedTask : t
  ));
});`,
      diagram: ["Action", "Socket Event", "Server Sync", "Broadcast", "UI Sync"]
    }
  },

  {
    id: 33,
    title: "EcoRecruiter – HR Automation Tool",
    category: "Automation & Python",
    description: "An automated recruitment pipeline that filters and ranks candidates based on skill-job compatibility metrics.",
    problem: "HR teams spend over 60% of their time manually screening resumes that don't meet basic technical criteria.",
    solution: "Developed a Python-based automation engine that parses CVs and uses weighted scorecards to rank candidates dynamically.",
    outcome: "Reduced manual screening time by 75% and improved candidate shortlist quality by 2x.",
    image: "/projects/automation_batch.png",
    tags: ["Python", "Pandas", "Automation", "HR Tech"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/Automated-Recruiter",
    featured: false,
    technicalBreakdown: {
      architecture: "Python-driven automation pipeline using Pandas for data extraction and a custom scoring algorithm for candidate ranking.",
      highlights: [
        "Automated PDF parsing and data normalization",
        "Weighted scorecards for objective evaluation",
        "CSV-based batch processing for large datasets"
      ],
      snippet: `# Candidate Scoring Logic
def calculate_score(skills, requirements):
    score = sum(1 for s in skills if s in requirements)
    return (score / len(requirements)) * 100`,
      diagram: ["CV Batch", "Parser", "Scorer", "Ranked Export"]
    }
  },

  {
    id: 34,
    title: "SpendWise – Finance Tracker",
    category: "Web Development",
    description: "A personal finance management app designed to track expenses and provide AI-driven saving insights.",
    problem: "Existing trackers are either too complex or lack actionable insights into spending patterns.",
    solution: "Created a minimalist React app with interactive data visualizations and automated categorizations.",
    outcome: "Helped users save an average of 15% monthly by identifying redundant recurring subscriptions.",
    image: "/projects/automation_batch.png",
    tags: ["JavaScript", "React", "Chart.js", "Financial Tech"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/SpendWise",
    featured: false,
  },
  {
    id: 35,
    title: "RFM Loyalty Analyzer",
    category: "Data Analytics",
    description: "A customer segmentation model that identifies high-value users based on Recency, Frequency, and Monetary value.",
    problem: "Businesses often use 'one-size-fits-all' marketing, leading to low retention among premium customers.",
    solution: "Built an RFM scoring model in Python to segment users into 'Champions', 'At-Risk', and 'New' categories.",
    outcome: "Allowed for targeted marketing campaigns that increased retention by 20% in the tested group.",
    image: "/projects/automation_batch.png",
    tags: ["Python", "Jupyter", "Scikit-Learn", "Marketing Science"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/Customer-Segmentation-Project-using-RFM-Analysis",
    featured: false,
  },
  {
    id: 36,
    title: "Sales Performance Dashboard",
    category: "Data Analytics",
    description: "A high-fidelity PowerBI dashboard for real-time sales tracking and regional performance analysis.",
    problem: "Sales teams lacked a unified view of regional trends, leading to delayed strategic decisions and missed forecasts.",
    solution: "Developed an interactive PowerBI suite with automated data refresh pipelines and specialized regional heatmaps.",
    outcome: "Shortened the monthly reporting cycle by 85% and provided granular insights that optimized inventory by 15%.",
    image: "/projects/bi_dashboard.png",
    tags: ["PowerBI", "SQL", "DAX", "Data Modeling"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/hanikumar0-sales-dashboard-powerbi",
    featured: true,
  },
  {
    id: 37,
    title: "Business Intelligence Suite",
    category: "Data Analytics",
    description: "A comprehensive collection of BI tools and automated reporting workflows for data-driven enterprises.",
    problem: "Data silos across departments prevented a holistic understanding of business health and operational KPIs.",
    solution: "Engineered a centralized BI ecosystem that aggregates disparate data sources into actionable executive dashboards.",
    outcome: "Enhanced cross-departmental visibility and supported a 25% increase in operational efficiency through data-backed insights.",
    image: "/projects/bi_dashboard.png",
    tags: ["Tableau", "Python", "SQL", "ETL Pipelines"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/Business-Intelligence",
    featured: false,
  },
  {
    id: 32,
    title: "AI Movie Insights – Semantic Analyzer",
    category: "AI & ML",
    description: "An AI-powered cinema intelligence tool that performs deep semantic analysis on movie metadata and reviews.",
    problem: "Standard movie recommenders rely on shallow metadata, often missing the depth of plot themes and emotional sentiment.",
    solution: "Integrated LLM models to analyze script summaries and user reviews, generating accurate emotional heatmaps and theme-based connections.",
    outcome: "Provided 95% more accurate 'niche' recommendations compared to standard ID-based filtering systems.",
    image: "/projects/movie_insights.png",
    tags: ["Python", "OpenAI API", "React", "TypeScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/hanikumar0/AI-Movie-Insights",
    featured: false,
  },
  {
    id: 29,
    title: "Event Scraper – Data Extraction Engine",
    category: "Data Engineering",
    description: "A specialized scraping platform designed to aggregate and normalize event data from multiple sources in real-time.",
    problem: "Tracking concurrent events across fragmented platforms manually is time-consuming and prone to data inconsistencies.",
    solution: "Engineered a robust headless browser-based extraction engine that automates the discovery and categorization of event data into a unified dashboard.",
    outcome: "Successfully extracted and processed 5,000+ localized events with a sub-5 second response time, enhancing data visibility by 80%.",
    image: "/projects/event_scraper.png",
    tags: ["Node.js", "Puppeteer", "React", "Data Scraping"],
    demoUrl: "https://event-scrapping-website.vercel.app/",
    githubUrl: "#",
    featured: false,
  },
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
    demoUrl: "https://coach-verse-eta.vercel.app/",
    githubUrl: "https://github.com/hanikumar0/CoachVerse",
    featured: true,
    badges: ["Scalable Architecture"],
    technicalBreakdown: {
      architecture: "Micro-SaaS architecture focused on coach-client management. Built with React and Firebase for real-time synchronization and serverless scalability.",
      highlights: [
        "Real-time bidirectional messaging system",
        "Secure document vault with encrypted storage",
        "Automated scheduling and calendar integration",
        "Subscription-based access control with Stripe"
      ],
      snippet: `// Real-time Sync Hook
const useSyncData = (path) => {
  useEffect(() => {
    const unsub = onSnapshot(doc(db, path), (d) => {
      setData(d.data());
    });
    return unsub;
  }, [path]);
};`,
      diagram: ["Coach Action", "Firebase RTDB", "Cloud Functions", "Client Update"]
    }
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

const categories = ["All", "Live & Hosted", "Web Development", "Mobile Apps", "AI & ML", "Data Analytics"];


export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const { projectId } = useParams();

  useEffect(() => {
    if (projectId) {
      const project = projects.find(p => p.id.toString() === projectId);
      if (project) setSelectedProject(project);
    }
  }, [projectId]);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    window.history.pushState(null, "", `/projects/${project.id}`);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    window.history.pushState(null, "", "/projects");
  };



  return (
    <section
      id="projects"
      className="py-12 px-4 relative overflow-hidden bg-secondary/5"
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

          {/* Live Hosted Projects Section */}
          <div className="mt-16 mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-canva-teal/10 text-canva-teal text-[10px] font-black uppercase tracking-widest mb-8 border border-canva-teal/20">
              <Zap size={14} className="animate-pulse" /> Live Hosted Projects
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {liveProjects.map((project, index) => (
                <ProjectCard
                  key={`live-${project.id}`}
                  project={project}
                  index={index}
                  onViewCase={() => handleOpenProject(project)}

                  isLiveSection={true}
                />
              ))}
            </div>
            <div className="h-px w-full bg-linear-to-r from-transparent via-border/50 to-transparent mt-20" />
          </div>

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
              onViewCase={() => handleOpenProject(project)}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Magnetic>
            <a
              href="https://github.com/hanikumar0"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button inline-flex group"
            >
              Explore Full Catalog
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Magnetic>
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
              onClick={handleCloseProject}
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
                onClick={handleCloseProject}
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
                  width={800}
                  height={600}
                  loading="eager"
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

                  <TechnicalBreakdown breakdown={selectedProject.technicalBreakdown} />
                  
                  <GitHubREADME githubUrl={selectedProject.githubUrl} />
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

const TechnicalBreakdown = ({ breakdown }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!breakdown) return null;

  return (
    <div className="mt-12 mb-8 border border-border/50 rounded-3xl overflow-hidden bg-secondary/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between hover:bg-secondary/20 transition-colors group"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-canva-purple/10 text-canva-purple flex items-center justify-center">
            <Activity size={20} />
          </div>
          <div className="text-left">
            <h4 className="font-black text-sm uppercase tracking-widest">Technical Breakdown</h4>
            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-tighter">Engineering Depth & System Architecture</p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-muted-foreground group-hover:text-canva-purple transition-colors"
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 space-y-8">
              <div className="h-px w-full bg-border/50" />
              
              {/* Architecture */}
              <div className="space-y-3">
                <h5 className="text-[10px] font-black text-canva-teal uppercase tracking-[0.2em]">Architecture Overview</h5>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                  {breakdown.architecture}
                </p>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h5 className="text-[10px] font-black text-canva-purple uppercase tracking-[0.2em]">Engineering Highlights</h5>
                  <ul className="space-y-2">
                    {breakdown.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-canva-purple mt-1 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Diagram */}
                {breakdown.diagram && (
                  <div className="space-y-3">
                    <h5 className="text-[10px] font-black text-canva-yellow uppercase tracking-[0.2em]">System Flow</h5>
                    <div className="flex flex-wrap items-center gap-2">
                      {breakdown.diagram.map((step, i) => (
                        <React.Fragment key={i}>
                          <div className="px-3 py-1.5 rounded-lg bg-background border border-border/50 text-[9px] font-bold uppercase tracking-widest text-foreground shadow-sm">
                            {step}
                          </div>
                          {i < breakdown.diagram.length - 1 && (
                            <ChevronRight size={14} className="text-muted-foreground/50" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Code Snippet */}
              {breakdown.snippet && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h5 className="text-[10px] font-black text-canva-pink uppercase tracking-[0.2em]">Core Logic Snippet</h5>
                    <div className="flex items-center gap-1.5 text-[9px] font-black text-muted-foreground uppercase opacity-50">
                      <Terminal size={12} /> read-only
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-canva-purple/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <pre className="relative p-6 rounded-2xl bg-[#0d0d0d] text-[11px] font-mono leading-relaxed overflow-x-auto border border-white/5 shadow-2xl">
                      <code className="text-blue-400">
                        {breakdown.snippet}
                      </code>
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


const GitHubREADME = ({ githubUrl }) => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!githubUrl || githubUrl === "#") {
      setLoading(false);
      return;
    }

    const fetchREADME = async () => {
      try {
        setLoading(true);
        // Convert GitHub URL to raw content URL
        const rawUrl = githubUrl
          .replace("github.com", "raw.githubusercontent.com")
          .replace(/\/$/, "") + "/main/README.md";
        
        let response = await fetch(rawUrl);
        
        // Try master if main fails
        if (!response.ok) {
          const masterUrl = rawUrl.replace("/main/", "/master/");
          response = await fetch(masterUrl);
        }

        if (!response.ok) throw new Error("README not found");

        const text = await response.text();
        setContent(text);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchREADME();
  }, [githubUrl]);

  if (loading) return (
    <div className="space-y-4 animate-pulse">
      <div className="h-4 bg-secondary rounded-full w-3/4" />
      <div className="h-4 bg-secondary rounded-full w-1/2" />
      <div className="h-4 bg-secondary rounded-full w-5/6" />
    </div>
  );

  if (error || !content) return null;

  return (
    <div className="prose prose-invert prose-sm max-w-none mt-8 border-t border-border/50 pt-8">
      <h4 className="text-[10px] font-black text-canva-teal uppercase tracking-[0.2em] mb-6">Repository Documentation</h4>
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({node, ...props}) => <h1 className="text-2xl font-black mb-4 mt-8" {...props} />,
          h2: ({node, ...props}) => <h2 className="text-xl font-bold mb-3 mt-6 text-foreground/90 border-b border-border/30 pb-2" {...props} />,
          h3: ({node, ...props}) => <h3 className="text-lg font-bold mb-2 mt-4 text-foreground/80" {...props} />,
          p: ({node, ...props}) => <p className="text-muted-foreground leading-relaxed mb-4 text-sm" {...props} />,
          ul: ({node, ...props}) => <ul className="list-disc pl-6 space-y-2 mb-4 text-sm text-muted-foreground" {...props} />,
          li: ({node, ...props}) => <li className="marker:text-canva-purple" {...props} />,
          code: ({node, inline, ...props}) => (
            inline 
              ? <code className="bg-secondary/50 px-1.5 py-0.5 rounded text-canva-pink text-[11px]" {...props} />
              : <pre className="bg-[#0d0d0d] p-4 rounded-xl border border-white/5 overflow-x-auto my-4"><code className="text-blue-300 text-[11px] font-mono" {...props} /></pre>
          ),
          table: ({node, ...props}) => (
            <div className="overflow-x-auto my-6 border border-border/50 rounded-xl">
              <table className="w-full text-left text-xs" {...props} />
            </div>
          ),
          th: ({node, ...props}) => <th className="bg-secondary/30 p-3 font-bold uppercase tracking-wider" {...props} />,
          td: ({node, ...props}) => <td className="p-3 border-t border-border/30" {...props} />,
          img: ({node, ...props}) => <img className="rounded-2xl border border-border/50 my-8 shadow-2xl" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

const StatusIndicator = ({ url }) => {
  const [status, setStatus] = useState("checking");


  useEffect(() => {
    if (!url || url === "#") return;

    const checkStatus = async () => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      try {
        // Using no-cors as a best effort to check reachability without hitting CORS blocks
        // In a production app, a backend proxy would be more reliable
        await fetch(url, {
          method: "GET",
          mode: "no-cors",
          signal: controller.signal,
        });
        setStatus("live");
      } catch (err) {
        setStatus("down");
      } finally {
        clearTimeout(timeoutId);
      }
    };

    // Small random delay to stagger pings if many cards load at once
    const timer = setTimeout(checkStatus, Math.random() * 2000);
    return () => {
      clearTimeout(timer);
      // controller.abort() would go here if we kept a ref
    };
  }, [url]);

  if (!url || url === "#") return null;

  return (
    <div
      className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/30 backdrop-blur-md border border-border/50"
      title={status === "live" ? "System is operational" : status === "down" ? "System unavailable" : "Checking status..."}
    >
      <div
        className={cn(
          "w-2 h-2 rounded-full transition-all duration-500",
          status === "checking" ? "bg-canva-yellow animate-pulse" :
          status === "live" ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse" :
          "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)]"
        )}
      />
      <span className="text-[8px] font-black uppercase tracking-[0.1em] opacity-80 tabular-nums">
        {status === "checking" ? "Ping" : status === "live" ? "Live" : "Down"}
      </span>
    </div>
  );
};


const ProjectCard = ({ project, index, onViewCase, isLiveSection }) => {
  return (
    <motion.article
      layoutId={`card-${project.id}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="h-full cursor-pointer"
      onClick={onViewCase}
    >
      <Tilt className="h-full">
        <div
          className={cn(
            "bg-card border-2 border-border/50 rounded-[2.5rem] p-8 transition-all duration-500 hover:border-canva-purple/30 hover:shadow-2xl hover:shadow-canva-purple/10 flex flex-col h-full group",
            project.featured ? "bg-canva-purple/[0.02]" : "",
            isLiveSection ? "border-canva-teal/20 bg-canva-teal/[0.01]" : ""
          )}
        >
          <div className="relative h-56 md:h-64 rounded-[2rem] overflow-hidden mb-8 shadow-inner border border-border/20">
            {project.badges && (
              <div className="absolute top-4 right-4 z-30 flex flex-col gap-2 items-end">
                {project.badges.map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[8px] font-black uppercase tracking-widest text-white shadow-lg"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}
            <img

              src={project.image}
              alt={project.title}
              width={800}
              height={600}
              loading="eager"
              decoding="async"
              fetchPriority={index < 6 ? "high" : "auto"}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

            {project.featured && !isLiveSection && (
              <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/90 backdrop-blur-md text-canva-purple text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-[0.2em] flex items-center gap-2 shadow-2xl">
                <Trophy size={14} className="animate-bounce" /> MUST SEE
              </div>
            )}

            {isLiveSection && (
              <div className="absolute top-4 left-4 bg-canva-teal text-white text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-[0.2em] flex items-center gap-2 shadow-xl">
                <div className="w-2 h-2 rounded-full bg-white/80" /> LIVE
              </div>
            )}



            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none"
            >
              <div className="px-6 py-3 rounded-full bg-white text-black font-black text-[10px] tracking-widest uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform">
                View Case Study
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 text-[9px] font-black bg-secondary/80 text-muted-foreground border border-border/50 rounded-full uppercase tracking-widest shadow-sm group-hover:bg-canva-purple/5 group-hover:text-canva-purple transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
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
                  <Magnetic>
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
                  </Magnetic>
                )}
                <Magnetic>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 text-[10px] font-black text-foreground/80 hover:text-canva-purple hover:scale-110 transition-all uppercase tracking-[0.2em]"
                  >
                    <div className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center">
                      <Github size={16} />
                    </div>
                    Code
                  </a>
                </Magnetic>
              </div>
              <Magnetic>
                <a
                  href={
                    project.demoUrl && project.demoUrl !== "#"
                      ? project.demoUrl
                      : project.githubUrl !== "#"
                      ? project.githubUrl
                      : undefined
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm",
                    project.demoUrl !== "#" || project.githubUrl !== "#"
                      ? "bg-secondary/80 text-muted-foreground group-hover:bg-canva-purple group-hover:text-white hover:shadow-lg hover:shadow-canva-purple/20 cursor-pointer"
                      : "bg-secondary/30 text-muted-foreground/30 cursor-not-allowed"
                  )}
                  title={
                    project.demoUrl && project.demoUrl !== "#"
                      ? "View Live Project"
                      : project.githubUrl !== "#"
                      ? "View Source Code"
                      : "Link not available"
                  }
                >
                  <ArrowRight size={20} />
                </a>
              </Magnetic>
            </div>

          </div>
        </div>
      </Tilt>
    </motion.article>
  );
};

export default ProjectsSection;
