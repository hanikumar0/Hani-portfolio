import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, Star, Zap } from "lucide-react";
import { Tilt } from "./Tilt";

const experiences = [
  {
    title: "Python Full Stack Developer Intern",
    company: "Datapedia AI",
    period: "02/2026 – 04/2026",
    location: "New Delhi, India",
    type: "Internship",
    description: "Developed a full-stack lead generation platform, improving lead processing efficiency by 30%+. Built and optimized Python-based backend services handling large-scale datasets.",
    bullets: [
      "Built and optimized Python-based backend services handling large-scale datasets (10K+ records).",
      "Designed and integrated RESTful APIs, reducing data retrieval latency by 25%.",
      "Implemented database schemas and CRUD operations, improving data consistency and reliability.",
      "Contributed to frontend dashboards, enhancing user interaction and data visualization.",
      "Applied AI-driven data processing techniques to improve lead targeting accuracy.",
      "Debugged and optimized system performance, reducing errors and improving uptime."
    ],
    tech: ["Python", "Django/Flask", "REST APIs", "PostgreSQL", "React", "AI Integration"],
    color: "canva-purple"
  },
  {
    title: "Data Analyst Intern",
    company: "Streamline Beauty Pvt. Ltd.",
    period: "05/2025 – 07/2025",
    location: "Gurugram, India",
    type: "Internship",
    description: "Analyzed 10K+ real-time data records to identify key trends, improving business decision-making accuracy.",
    bullets: [
      "Designed and developed interactive KPI dashboards (Excel/BI tools), reducing manual reporting effort by 40%+.",
      "Automated data aggregation and reporting workflows, significantly improving operational efficiency and turnaround time.",
      "Extracted actionable insights that contributed to data-driven strategy improvements and performance optimization.",
      "Collaborated with cross-functional teams to translate business requirements into data models and visual reports."
    ],
    tech: ["Data Analysis", "Excel/BI Tools", "Automation", "SQL", "KPI Dashboards"],
    color: "canva-teal"
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-secondary/5 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-canva-purple/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-canva-teal/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-canva-teal/10 text-canva-teal text-[10px] font-black tracking-widest uppercase border border-canva-teal/20 mb-6">
            <Zap size={14} /> My Career Roadmap
          </span>
          <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A chronicle of my growth, technical contributions, and the impact I've made across different industries.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ exp, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <Tilt>
      <div className="bg-card border border-border/50 rounded-[3rem] overflow-hidden hover:border-canva-purple/30 transition-all duration-500 shadow-sm hover:shadow-2xl flex flex-col md:flex-row h-full">
        {/* Left Side: Meta Info */}
        <div className={`w-full md:w-1/3 p-10 flex flex-col justify-between bg-${exp.color}/5 relative border-b md:border-b-0 md:border-r border-border/50`}>
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-canva-purple/20 to-transparent" />
          
          <div>
            <div className="flex items-center gap-3 text-canva-purple mb-6">
              <Briefcase size={24} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">{exp.type}</span>
            </div>
            
            <h3 className="text-3xl font-black mb-4 tracking-tight leading-tight">
              {exp.title}
            </h3>
            <p className="text-xl font-bold text-foreground/80 mb-8 flex items-center gap-2">
              <span className={`w-2 h-8 bg-canva-purple rounded-full`} />
              {exp.company}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-muted-foreground text-sm font-medium">
              <Calendar size={18} className="text-canva-pink" />
              {exp.period}
            </div>
            <div className="flex items-center gap-3 text-muted-foreground text-sm font-medium">
              <MapPin size={18} className="text-canva-teal" />
              {exp.location}
            </div>
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="w-full md:w-2/3 p-10 md:p-12 flex flex-col">
          <div className="flex flex-wrap gap-2 mb-8">
            {exp.tech.map((t) => (
              <span key={t} className="px-4 py-1.5 rounded-full bg-secondary text-[10px] font-black uppercase tracking-widest border border-border/50 text-muted-foreground">
                {t}
              </span>
            ))}
          </div>

          <div className="space-y-6 flex-1">
            <p className="text-lg font-medium text-foreground italic mb-6">
              “{exp.description}”
            </p>
            
            <div className="grid grid-cols-1 gap-4">
              {exp.bullets.map((bullet, i) => (
                <div key={i} className="flex gap-4 group/bullet">
                  <div className="mt-1">
                    <CheckCircle2 size={18} className="text-canva-purple group-hover/bullet:scale-125 transition-transform" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border/50 flex items-center justify-between">
            <div className="flex items-center gap-2 text-foreground font-black text-xs uppercase tracking-widest">
              <Star size={16} className="text-canva-yellow fill-canva-yellow" />
              Key Achievement
            </div>
            <div className="text-[10px] font-black text-muted-foreground/50 uppercase tracking-[0.3em]">
              {exp.period.split("–")[1]}
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  </motion.div>
);
