import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Cpu, Eye, Zap } from "lucide-react";
import { Tilt } from "./Tilt";

export const PhilosophySection = () => {
    return (
        <section className="py-32 px-4 relative overflow-hidden bg-background">
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-canva-teal/10 text-canva-teal text-[10px] font-black uppercase tracking-[0.3em] mb-4 border border-canva-teal/20">
                        MY MANIFESTO
                    </span>
                    <h2 className="text-4xl md:text-8xl font-black mb-6 tracking-tighter leading-[0.85]">
                        Engineered <br />
                        <span className="text-gradient">With Purpose</span>
                    </h2>
                    <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed font-medium">
                        Code is more than instructions—it's a philosophy of problem-solving.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <PhilosophyCard
                        icon={<Cpu className="text-canva-purple" size={40} />}
                        title="Logical Purity"
                        description="Every line of code should have a mathematical reason for existing. I strive for lean, efficient, and deterministic systems."
                        color="canva-purple"
                    />
                    <PhilosophyCard
                        icon={<Eye className="text-canva-teal" size={40} />}
                        title="Visual Integrity"
                        description="Design isn't how it looks, but how it works. I bridge the gap between complex logic and human-centered interfaces."
                        color="canva-teal"
                    />
                    <PhilosophyCard
                        icon={<Zap className="text-canva-pink" size={40} />}
                        title="Obsessive Speed"
                        description="Performance is non-negotiable. If it's not sub-100ms, it's not fast enough for the modern web."
                        color="canva-pink"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 md:mt-24 p-8 md:p-20 rounded-[2.5rem] md:rounded-[4rem] bg-linear-to-br from-canva-purple/5 via-canva-teal/5 to-canva-pink/5 border-2 border-border/50 relative overflow-hidden text-center"
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] -z-10" />
                    <Sparkles className="mx-auto mb-8 text-canva-purple animate-pulse" size={48} />
                    <h3 className="text-3xl md:text-5xl font-black mb-8 leading-tight italic">
                        “Building software is an <span className="text-canva-purple">act of empathy</span>. We solve machine problems to improve human lives.”
                    </h3>
                    <div className="flex justify-center gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-canva-purple" />
                        <div className="w-1.5 h-1.5 rounded-full bg-canva-teal" />
                        <div className="w-1.5 h-1.5 rounded-full bg-canva-pink" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const PhilosophyCard = ({ icon, title, description, color }) => (
    <Tilt>
        <div className={`p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] bg-card border-2 border-border/50 hover:border-${color}/30 transition-all duration-500 group h-full flex flex-col`}>
            <div className={`w-20 h-20 rounded-3xl bg-${color}/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                {icon}
            </div>
            <h4 className="text-2xl font-black mb-4 tracking-tight">{title}</h4>
            <p className="text-muted-foreground leading-relaxed font-medium">
                {description}
            </p>
        </div>
    </Tilt>
);
