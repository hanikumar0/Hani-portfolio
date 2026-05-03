import { Briefcase, Code, User, Rocket, GraduationCap, Heart, Globe, Sparkles, Cpu, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { Tilt } from "./Tilt";
import { cn } from "@/lib/utils";

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden bg-background">
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-canva-purple/10 text-canva-purple text-[10px] font-black uppercase tracking-[0.2em] mb-4 border border-canva-purple/20">
            THE STORY SO FAR
          </span>
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[0.9]">
            Architecting <br />
            <span className="text-gradient">Digital Worlds</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[120px] md:auto-rows-[160px]">
          {/* Main Bio - Bento Large */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-8 md:row-span-2 group"
          >
            <Tilt className="h-full">
              <div className="bg-card border-2 border-border/50 rounded-[3rem] p-10 h-full flex flex-col justify-center relative overflow-hidden transition-all duration-500 hover:border-canva-purple/30 shadow-sm hover:shadow-2xl hover:shadow-canva-purple/5">
                <div className="absolute top-0 right-0 w-64 h-64 bg-canva-purple/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-canva-purple/10 transition-colors" />
                <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                  A developer focused on building <span className="text-canva-teal">tools that matter</span>.
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                  I specialize in the MERN stack and React Native, with a heavy focus on system design and scalability. From designing AI-driven ATS optimizers to engineering sub-100ms real-time sync systems, I thrive on complex engineering challenges.
                </p>
                <div className="mt-8 flex gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-[10px] font-black uppercase text-muted-foreground">
                    <Rocket size={14} className="text-canva-teal" /> Fast Learner
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-[10px] font-black uppercase text-muted-foreground">
                    <Heart size={14} className="text-canva-pink" /> Passionate
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>

          {/* Quick Stats - Bento Small */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 md:row-span-1 group"
          >
            <Tilt className="h-full">
              <div className="bg-canva-purple rounded-[3rem] p-8 h-full flex flex-col items-center justify-center text-white relative overflow-hidden group shadow-xl hover:scale-[1.02] transition-transform">
                <Sparkles className="absolute top-4 right-4 opacity-30 group-hover:rotate-12 transition-transform" />
                <span className="text-5xl font-black mb-1">15+</span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Projects Delivered</span>
              </div>
            </Tilt>
          </motion.div>

          {/* Experience - Bento Small */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 md:row-span-1 group"
          >
            <Tilt className="h-full">
              <div className="bg-background border-2 border-canva-teal/30 rounded-[3rem] p-8 h-full flex flex-col items-center justify-center relative overflow-hidden group shadow-lg">
                <div className="absolute inset-0 bg-canva-teal/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-5xl font-black mb-1 text-canva-teal italic">2+</span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Years Experience</span>
              </div>
            </Tilt>
          </motion.div>

          {/* Core Services Grid - Bento Medium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 md:row-span-2 group"
          >
            <Tilt className="h-full">
              <div className="bg-card border-2 border-border/50 rounded-[3rem] p-10 h-full relative overflow-hidden transition-all duration-500 hover:border-canva-pink/30">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-canva-pink mb-8 block">CORE FOCUS</h4>
                <div className="space-y-6">
                  <ServiceItem icon={<Cpu size={20} />} title="System Architecture" />
                  <ServiceItem icon={<Globe size={20} />} title="Scalable Web Apps" />
                  <ServiceItem icon={<Smartphone size={20} />} title="Mobile First Design" />
                </div>
              </div>
            </Tilt>
          </motion.div>

          {/* Quote/Philosophy - Bento Medium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-7 md:row-span-2 group"
          >
            <Tilt className="h-full">
              <div className="bg-secondary/30 backdrop-blur-md rounded-[3rem] p-12 h-full flex flex-col justify-center relative overflow-hidden border border-border/50">
                <div className="text-4xl text-canva-purple font-black mb-6 opacity-40">“</div>
                <p className="text-2xl md:text-3xl font-black leading-tight italic text-foreground/80">
                  I don’t just write code; I engineer solutions that <span className="text-canva-purple">bridge the gap</span> between complex logic and human interaction.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-canva-gradient-accent p-0.5 shadow-lg shadow-canva-purple/20">
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center font-black text-xs">HK</div>
                  </div>
                  <div>
                    <div className="font-black text-sm text-foreground">Hani Kumar</div>
                    <div className="text-[10px] uppercase font-bold text-muted-foreground">Lead Engineer</div>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        </div>

        <div className="mt-20 flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="https://drive.google.com/file/d/15EnYTeJd5volCMP0l_zDt8Isf-KjqdHy/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-5 rounded-full bg-foreground text-background font-black text-[10px] tracking-[0.3em] uppercase hover:scale-105 active:scale-95 transition-all shadow-2xl hover:shadow-foreground/20"
          >
            VIEW FULL RÉSUMÉ
          </a>
          <a
            href="#contact"
            className="px-12 py-5 rounded-full border-2 border-border font-black text-[10px] tracking-[0.3em] uppercase hover:bg-secondary transition-all"
          >
            LET'S COLLABORATE
          </a>
        </div>
      </div>
    </section>
  );
};

const ServiceItem = ({ icon, title }) => (
  <div className="flex items-center gap-6 group/item">
    <div className="w-12 h-12 rounded-2xl bg-secondary/50 flex items-center justify-center text-canva-purple group-hover/item:bg-canva-purple group-hover/item:text-white transition-all duration-300">
      {icon}
    </div>
    <span className="font-black text-lg tracking-tight group-hover/item:translate-x-2 transition-transform duration-300">{title}</span>
  </div>
);
