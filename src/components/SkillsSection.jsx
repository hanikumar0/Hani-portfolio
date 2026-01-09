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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </span>
                  <span className="text-[10px] font-bold text-primary/70 uppercase tracking-widest px-2 py-1 rounded-md bg-primary/5 border border-primary/10">
                    {skill.category}
                  </span>
                </div>

                <h3 className="font-bold text-lg mb-3">{skill.name}</h3>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary h-1.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="bg-primary h-full rounded-full"
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
