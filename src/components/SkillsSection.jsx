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
  // Frontend
  { name: "React", level: 90, category: "frontend", icon: "⚛️" },
  { name: "Next.js", level: 85, category: "frontend", icon: "▲" },
  { name: "TypeScript", level: 85, category: "frontend", icon: "TS" },
  { name: "JavaScript", level: 90, category: "frontend", icon: "JS" },
  { name: "Tailwind CSS", level: 95, category: "frontend", icon: "🎨" },
  { name: "CSS/SASS", level: 90, category: "frontend", icon: "📄" },

  // Backend
  { name: "Node.js", level: 80, category: "backend", icon: "🟢" },
  { name: "Express", level: 85, category: "backend", icon: "🚂" },
  { name: "MongoDB", level: 75, category: "backend", icon: "🍃" },
  { name: "PostgreSQL", level: 70, category: "backend", icon: "🐘" },
  { name: "Firebase", level: 80, category: "backend", icon: "🔥" },

  // Mobile
  { name: "React Native", level: 80, category: "mobile", icon: "📱" },
  { name: "Expo", level: 85, category: "mobile", icon: "🚀" },

  // Tools
  { name: "Git", level: 90, category: "tools", icon: "🐙" },
  { name: "Docker", level: 60, category: "tools", icon: "🐳" },
  { name: "Postman", level: 85, category: "tools", icon: "📮" },
];

const categories = [
  { id: "all", label: "Full Matrix", icon: <Layers size={18} /> },
  { id: "frontend", label: "Frontend", icon: <Code2 size={18} /> },
  { id: "backend", label: "Backend", icon: <Server size={18} /> },
  { id: "mobile", label: "Mobile", icon: <Smartphone size={18} /> },
  { id: "tools", label: "Tools", icon: <Wrench size={18} /> },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isDeepDive, setIsDeepDive] = useState(false);

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
      { subject: "Scalability", A: 75, fullMark: 100 },
    ];
  }, []);

  return (
    <section id="skills" className="py-32 px-4 relative overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-100/[0.03] -z-10" />

      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left: Mastery Insights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-12"
          >
            <div className="space-y-6">
              <span className="px-4 py-1.5 rounded-full bg-canva-purple/10 text-canva-purple text-[10px] font-black tracking-widest uppercase border border-canva-purple/20">
                CAPABILITY ANALYTICS
              </span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.9]">
                Mastery <br />
                <span className="text-gradient">Landscape</span>
              </h2>
              <p className="text-muted-foreground text-lg font-medium leading-relaxed max-w-md">
                A quantitative representation of my technical depth across the full software lifecycle.
              </p>
            </div>

            {/* Radar Chart */}
            <div className="h-[350px] w-full bg-card p-6 rounded-[3rem] border-2 border-border/50 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-br from-canva-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-6 right-8 flex items-center gap-2 text-[10px] font-black text-canva-purple uppercase tracking-widest">
                <BarChart3 size={14} /> Efficiency Score
              </div>
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
              <StatMetric icon={<Zap size={16} />} label="Speed Perf" value="98%" color="canva-pink" />
            </div>
          </motion.div>

          {/* Right: Technical Matrix */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-secondary/30 p-2 rounded-[2rem] border border-border/50">
              <div className="flex flex-wrap gap-2 p-1">
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
                    <span className="hidden sm:inline-block">{cat.label}</span>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setIsDeepDive(!isDeepDive)}
                className={cn(
                  "px-6 py-3 rounded-2xl flex items-center gap-2 text-[10px] font-black uppercase tracking-tighter transition-all",
                  isDeepDive ? "bg-canva-purple text-white shadow-lg shadow-canva-purple/20" : "bg-card border border-border/50 text-foreground"
                )}
              >
                <ShieldCheck size={16} /> {isDeepDive ? "Standard View" : "Deep Analysis"}
              </button>
            </div>

            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredSkills.map((skill, index) => (
                  <SkillItem
                    key={skill.name}
                    skill={skill}
                    isDeepDive={isDeepDive}
                    index={index}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const StatMetric = ({ icon, label, value, color }) => (
  <div className="p-6 rounded-3xl bg-secondary/50 border border-border/50 flex items-center gap-4">
    <div className={`w-10 h-10 rounded-xl bg-${color}/10 text-${color} flex items-center justify-center shadow-inner`}>
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{label}</p>
      <p className="text-xl font-black">{value}</p>
    </div>
  </div>
);

const SkillItem = ({ skill, isDeepDive, index }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9, y: 10 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ delay: index * 0.05 }}
  >
    <Tilt>
      <div className="bg-card p-6 rounded-[2.5rem] border border-border/50 hover:border-foreground/20 transition-all duration-500 group relative overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-secondary/80 flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
              {skill.icon}
            </div>
            <div>
              <h4 className="font-black text-lg tracking-tight">{skill.name}</h4>
              <p className="text-[9px] font-black uppercase text-canva-purple tracking-widest">{skill.category}</p>
            </div>
          </div>
          {isDeepDive && (
            <span className="text-[10px] font-black text-white px-3 py-1 bg-foreground rounded-lg">{skill.level}%</span>
          )}
        </div>

        {isDeepDive ? (
          <div className="space-y-3 mt-6">
            <div className="flex justify-between text-[9px] font-black uppercase tracking-widest text-muted-foreground/80">
              <span>PROFICIENCY</span>
              <span className="text-foreground">{skill.level}%</span>
            </div>
            <div className="h-1.5 w-full bg-secondary/50 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-full bg-linear-to-r from-canva-teal to-canva-purple"
              />
            </div>
            <div className="flex gap-2 pt-2">
              <div className="px-2 py-1 rounded-md bg-green-500/10 text-green-600 text-[8px] font-black uppercase">Production Ready</div>
              <div className="px-2 py-1 rounded-md bg-blue-500/10 text-blue-600 text-[8px] font-black uppercase">Enterprise</div>
            </div>
          </div>
        ) : (
          <div className="mt-4 flex gap-1.5 overflow-hidden">
            {[1, 2, 3, 4, 5].map((dot) => (
              <div
                key={dot}
                className={cn(
                  "h-1.5 flex-1 rounded-full",
                  dot <= Math.round(skill.level / 20)
                    ? "bg-canva-purple/80"
                    : "bg-secondary"
                )}
              />
            ))}
          </div>
        )}
      </div>
    </Tilt>
  </motion.div>
);
