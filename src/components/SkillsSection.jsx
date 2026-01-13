import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Server, Smartphone, Wrench } from "lucide-react";

const skills = [
  // Frontend
  { name: "React", level: 90, category: "frontend", icon: "⚛️" },
  { name: "Next.js", level: 85, category: "frontend", icon: "▲" },
  { name: "TypeScript", level: 85, category: "frontend", icon: "TS" },
  { name: "JavaScript", level: 90, category: "frontend", icon: "JS" },
  { name: "Tailwind CSS", level: 95, category: "frontend", icon: "🎨" },
  { name: "HTML/CSS", level: 95, category: "frontend", icon: "📄" },

  // Backend
  { name: "Node.js", level: 80, category: "backend", icon: "🟢" },
  { name: "Express", level: 85, category: "backend", icon: "🚂" },
  { name: "MongoDB", level: 75, category: "backend", icon: "🍃" },
  { name: "PostgreSQL", level: 70, category: "backend", icon: "🐘" },
  { name: "Firebase", level: 80, category: "backend", icon: "🔥" },
  { name: "Python", level: 65, category: "backend", icon: "🐍" },

  // Mobile
  { name: "React Native", level: 80, category: "mobile", icon: "📱" },
  { name: "Expo", level: 85, category: "mobile", icon: "🚀" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools", icon: "🐙" },
  { name: "Docker", level: 60, category: "tools", icon: "🐳" },
  { name: "Figma", level: 75, category: "tools", icon: "🎨" },
  { name: "Postman", level: 85, category: "tools", icon: "📮" },
];

const categories = [
  { id: "all", label: "All Skills", icon: <Wrench size={18} /> },
  { id: "frontend", label: "Frontend", icon: <Code2 size={18} /> },
  { id: "backend", label: "Backend", icon: <Server size={18} /> },
  { id: "mobile", label: "Mobile", icon: <Smartphone size={18} /> },
  { id: "tools", label: "Tools", icon: <Wrench size={18} /> },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive list of the technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "flex items-center gap-2 px-6 py-2.5 rounded-full transition-all duration-300 font-medium",
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "bg-card text-muted-foreground hover:bg-secondary border border-border"
              )}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-card/50 backdrop-blur-sm p-8 rounded-[2rem] border border-border/50 hover:border-canva-purple/30 transition-all duration-500 hover:shadow-2xl hover:shadow-canva-purple/10 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-canva-purple/5 blur-3xl rounded-full -translate-y-12 translate-x-12 group-hover:bg-canva-purple/10 transition-colors" />

                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/50 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 shadow-inner">
                    {skill.icon}
                  </div>
                  <span className="text-[10px] font-black text-canva-purple uppercase tracking-[0.2em] px-3 py-1.5 rounded-full bg-canva-purple/5 border border-canva-purple/10 shadow-sm">
                    {skill.category}
                  </span>
                </div>

                <h3 className="font-black text-xl mb-4 tracking-tight">{skill.name}</h3>

                <div className="space-y-3">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground/70">
                    <span>Expertise</span>
                    <span className="text-canva-purple">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary/30 h-2 rounded-full overflow-hidden p-0.5 border border-border/50">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "circOut" }}
                      className="bg-linear-to-r from-canva-teal to-canva-purple h-full rounded-full shadow-[0_0_10px_rgba(125,42,232,0.3)]"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
