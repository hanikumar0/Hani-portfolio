import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const skills = [
    { name: "React", color: "#00c4cc" },
    { name: "Node.js", color: "#7d2ae8" },
    { name: "Next.js", color: "#3178c6" },
    { name: "TypeScript", color: "#3178c6" },
    { name: "MongoDB", color: "#47a248" },
    { name: "Express", color: "#61dafb" },
    { name: "Tailwind", color: "#06b6d4" },
    { name: "Git", color: "#f05032" },
    { name: "React Native", color: "#ff66c4" },
    { name: "Firebase", color: "#ffca28" },
    { name: "PostgreSQL", color: "#336791" },
    { name: "Docker", color: "#2496ed" },
    { name: "Figma", color: "#f24e1e" },
    { name: "Redux", color: "#764abc" },
    { name: "Python", color: "#3776ab" },
    { name: "JavaScript", color: "#f7df1e" }
];

export const SkillSphere = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 120 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const x = (clientX / innerWidth - 0.5) * 2;
            const y = (clientY / innerHeight - 0.5) * 2;
            mouseX.set(x * 60);
            mouseY.set(y * 60);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center perspective-2000 overflow-hidden">
            <motion.div
                style={{
                    rotateY: smoothX,
                    rotateX: smoothY,
                    transformStyle: "preserve-3d"
                }}
                className="relative w-full h-full flex items-center justify-center"
            >
                {skills.map((skill, index) => {
                    const phi = Math.acos(-1 + (2 * index) / skills.length);
                    const theta = Math.sqrt(skills.length * Math.PI) * phi;

                    const radius = window.innerWidth < 768 ? 150 : 250;
                    const x = radius * Math.cos(theta) * Math.sin(phi);
                    const y = radius * Math.sin(theta) * Math.sin(phi);
                    const z = radius * Math.cos(phi);

                    return (
                        <motion.div
                            key={skill.name}
                            style={{
                                position: "absolute",
                                x,
                                y,
                                z,
                                transformStyle: "preserve-3d",
                            }}
                            whileHover={{ scale: 1.2, z: 300 }}
                            className="bg-card/30 backdrop-blur-xl px-4 py-2 rounded-xl border border-white/10 shadow-2xl group cursor-pointer transition-all duration-300 flex items-center justify-center"
                        >
                            <span
                                style={{ color: skill.color }}
                                className="text-sm md:text-lg font-black uppercase tracking-tighter filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                            >
                                {skill.name}
                            </span>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Focal Point Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-canva-purple/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />
        </div>
    );
};
