import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Tilt } from "./Tilt";
import {
  Code2,
  Server,
  Smartphone,
  Wrench,
  Target,
  Zap,
  ShieldCheck,
  BarChart3,
  Layers,
  Cpu
} from "lucide-react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const skills = [
  // Featured / Large
  { name: "React", level: 95, category: "frontend", icon: "⚛️", size: "large", desc: "Enterprise-grade UI development" },
  { name: "Node.js", level: 90, category: "backend", icon: "🟢", size: "large", desc: "Scalable event-driven systems" },
  { name: "AI Integration", level: 88, category: "ai", icon: "🧠", size: "medium", desc: "LLM & Vector Search orchestration" },
  { name: "System Design", level: 92, category: "architecture", icon: "🏗️", size: "medium", desc: "Microservices & Distributed logic" },

  // Standard
  { name: "Next.js", level: 85, category: "frontend", icon: "▲", size: "small" },
  { name: "TypeScript", level: 88, category: "frontend", icon: "TS", size: "small" },
  { name: "Tailwind CSS", level: 95, category: "frontend", icon: "🎨", size: "small" },
  { name: "MongoDB", level: 85, category: "backend", icon: "🍃", size: "small" },
  { name: "PostgreSQL", level: 80, category: "backend", icon: "🐘", size: "small" },
  { name: "Firebase", level: 85, category: "backend", icon: "🔥", size: "small" },
  { name: "React Native", level: 82, category: "mobile", icon: "📱", size: "small" },
  { name: "Expo", level: 88, category: "mobile", icon: "🚀", size: "small" },
  { name: "Docker", level: 75, category: "tools", icon: "🐳", size: "small" },
  { name: "Git", level: 92, category: "tools", icon: "🐙", size: "small" },
];

const categories = [
  { id: "all", label: "All Skills", icon: <Layers size={18} /> },
  { id: "frontend", label: "Frontend", icon: <Code2 size={18} /> },
  { id: "backend", label: "Backend", icon: <Server size={18} /> },
  { id: "ai", label: "AI & ML", icon: <Cpu size={18} /> },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = useMemo(() =>
    skills.filter(s => activeCategory === "all" || s.category === activeCategory),
    [activeCategory]
  );

  const radarData = useMemo(() => {
    return [
      { subject: "Architecture", A: 85, fullMark: 100 },
      { subject: "UI/UX", A: 95, fullMark: 100 },
      { subject: "DevOps", A: 65, fullMark: 100 },
      { subject: "Mobile", A: 80, fullMark: 100 },
      { subject: "Logic", A: 90, fullMark: 100 },
      { subject: "AI/ML", A: 88, fullMark: 100 },
    ];
  }, []);

  return (
    <section id="skills" className="py-12 px-4 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-100/[0.03] -z-10" />

      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left: Mastery Insights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-12 lg:sticky lg:top-32"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-canva-purple/10 text-canva-purple text-[10px] font-black tracking-widest uppercase border border-canva-purple/20">
                <Target size={14} /> Capability Matrix
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.9]">
                Technical <br />
                <span className="text-gradient">Horizon</span>
              </h2>
              <p className="text-muted-foreground text-lg font-medium leading-relaxed max-w-md">
                A high-fidelity breakdown of my engineering depth across the modern development stack.
              </p>
            </div>

            {/* Radar Chart */}
            <div className="h-[350px] w-full bg-card p-6 rounded-[3rem] border-2 border-border/50 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-br from-canva-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="#7d2ae822" />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: "#94a3b8", fontSize: 10, fontWeight: 900 }}
                  />
                  <Radar
                    name="Hani"
                    dataKey="A"
                    stroke="#7d2ae8"
                    fill="#7d2ae8"
                    fillOpacity={0.3}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <StatMetric icon={<Cpu size={16} />} label="System Design" value="Elite" color="canva-teal" />
              <StatMetric icon={<Zap size={16} />} label="Performance" value="Sub-100ms" color="canva-pink" />
            </div>
          </motion.div>

          {/* Right: Technical Bento Grid */}
          <div className="lg:col-span-7 space-y-10">
            <div className="flex flex-wrap gap-2 p-1.5 bg-secondary/30 backdrop-blur-md rounded-[2rem] border border-border/50 w-fit">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-2",
                    activeCategory === cat.id
                      ? "bg-foreground text-background shadow-xl scale-105"
                      : "text-muted-foreground hover:bg-background/50 hover:text-foreground"
                  )}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>

            <motion.div
              layout
              className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[160px]"
            >
              <AnimatePresence mode="popLayout">
                {filteredSkills.map((skill, index) => (
                  <BentoSkillCard
                    key={skill.name}
                    skill={skill}
                    index={index}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

const StatMetric = ({ icon, label, value, color }) => (
  <div className="p-6 rounded-3xl bg-secondary/50 border border-border/50 flex items-center gap-4 group hover:bg-card transition-colors duration-500">
    <div className={`w-10 h-10 rounded-xl bg-${color}/10 text-${color} flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{label}</p>
      <p className="text-xl font-black tracking-tight">{value}</p>
    </div>
  </div>
);

const BentoSkillCard = ({ skill, index }) => {
  const isLarge = skill.size === "large";
  const isMedium = skill.size === "medium";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.05 }}
      className={cn(
        "relative",
        isLarge ? "col-span-2 row-span-2" : isMedium ? "col-span-2" : "col-span-1"
      )}
    >
      <Tilt className="h-full">
        <div className="h-full bg-card p-6 rounded-[2.5rem] border border-border/50 hover:border-canva-purple/30 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between">
          {/* Subtle Background Icon for large cards */}
          {isLarge && (
            <div className="absolute -bottom-6 -right-6 text-[120px] opacity-[0.03] group-hover:opacity-[0.05] group-hover:-translate-x-4 transition-all duration-700 pointer-events-none">
              {skill.icon}
            </div>
          )}

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-secondary/80 flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                {skill.icon}
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-black text-canva-purple uppercase tracking-widest">{skill.category}</span>
                <div className="flex gap-0.5 mt-1">
                   {[1, 2, 3].map(i => (
                     <div key={i} className={cn("w-1 h-1 rounded-full", i <= Math.ceil(skill.level/34) ? "bg-canva-teal" : "bg-border")} />
                   ))}
                </div>
              </div>
            </div>

            <div>
              <h4 className={cn("font-black tracking-tight leading-none mb-2", isLarge ? "text-3xl" : "text-lg")}>
                {skill.name}
              </h4>
              {skill.desc && (
                <p className="text-muted-foreground text-sm font-medium line-clamp-2">{skill.desc}</p>
              )}
            </div>
          </div>

          {(isLarge || isMedium) && (
            <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="px-2 py-0.5 rounded-md bg-canva-teal/10 text-canva-teal text-[8px] font-black uppercase">Production</div>
                <div className="px-2 py-0.5 rounded-md bg-canva-purple/10 text-canva-purple text-[8px] font-black uppercase">Verified</div>
              </div>
              <span className="text-[10px] font-black text-muted-foreground">{skill.level}%</span>
            </div>
          )}
        </div>
      </Tilt>
    </motion.div>
  );
};

