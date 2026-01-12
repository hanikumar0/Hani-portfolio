import { ArrowDown, Mail, Briefcase, Download, Github, Linkedin, Code, Rocket } from "lucide-react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-20"
    >
      {/* Background Blobs (3D depth) */}
      <div className="blob w-[300px] h-[300px] bg-canva-teal top-1/4 -left-20 animate-pulse" />
      <div className="blob w-[400px] h-[400px] bg-canva-purple bottom-1/4 -right-20 animate-pulse-subtle" />
      <div className="blob w-[250px] h-[250px] bg-canva-yellow top-10 right-1/4 opacity-10 animate-float" />

      {/* Decorative Stickers (2D elements) */}
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        className="sticker hidden lg:block top-40 left-20 z-20 cursor-grab active:cursor-grabbing"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-canva-teal/20 flex items-center justify-center text-canva-teal font-bold">1</div>
          <span className="text-xs font-bold uppercase tracking-tighter">Ideation</span>
        </div>
      </motion.div>

      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        className="sticker hidden lg:block bottom-40 right-20 z-20 cursor-grab active:cursor-grabbing bg-canva-yellow/10"
        initial={{ rotate: -5 }}
        animate={{ rotate: [-5, 5, -5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-2">
          <div className="p-1 px-2 rounded-lg bg-canva-yellow font-black text-[10px] text-white">PRO</div>
          <span className="text-xs font-bold">Quality Code</span>
        </div>
      </motion.div>

      <div className="container max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-left space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-canva-teal/10 text-canva-teal text-sm font-bold border border-canva-teal/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-canva-teal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-canva-teal"></span>
              </span>
              AVAILABLE FOR NEW VENTURES
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] text-foreground">
              Design your <br />
              <span className="text-gradient">Digital Vision</span>
            </h1>

            <div className="text-xl md:text-2xl font-medium text-muted-foreground max-w-xl">
              I'm <span className="text-foreground font-bold underline decoration-canva-pink decoration-4 underline-offset-4">Hani Kumar</span>, a Full Stack Developer creating premium experiences.
              <div className="mt-2 text-canva-purple font-bold h-8">
                <Typewriter
                  options={{
                    strings: ["React Expert", "Mobile Innovator", "UI/UX Designer", "Problem Solver"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className="cosmic-button">
                <Briefcase size={20} />
                View Showcase
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1_6D_afRccaa3q3GhI1DBnnXX4JIbDoIl"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                <Download size={20} />
                Get Resume
              </a>
            </div>
          </motion.div>

          {/* Visual 3D Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-linear-to-r from-canva-teal via-canva-purple to-canva-pink rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="canva-card-3d bg-card border-4 border-white dark:border-white/10 relative z-10 animate-tilt">
                <div className="aspect-square flex items-center justify-center p-8 bg-linear-to-br from-secondary/50 to-background rounded-[2rem]">
                  <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                  >
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-canva-pink rounded-full blur-2xl opacity-50" />
                    <Github className="w-32 h-32 md:w-48 md:h-48 text-foreground relative z-10" />
                    {/* Floating 2D icons around the 3D element */}
                    <div className="absolute top-0 -left-10 p-3 bg-white shadow-xl rounded-2xl rotate-12 border border-border/50">
                      <Code className="text-canva-teal" size={24} />
                    </div>
                    <div className="absolute bottom-0 -right-10 p-3 bg-white shadow-xl rounded-2xl -rotate-12 border border-border/50">
                      <Rocket className="text-canva-yellow" size={24} />
                    </div>
                  </motion.div>
                </div>
                <div className="mt-6 space-y-2">
                  <div className="h-4 w-3/4 bg-border/50 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-canva-purple"
                      initial={{ width: 0 }}
                      animate={{ width: "90%" }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    <span>Efficiency</span>
                    <span>90%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-1 h-12 bg-linear-to-b from-canva-teal to-transparent rounded-full animate-bounce" />
      </motion.div>
    </section>
  );
};


const HeroSocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 group"
    aria-label={label}
  >
    <div className="p-2 rounded-full border border-border group-hover:border-primary/50 group-hover:bg-primary/5">
      {icon}
    </div>
  </a>
);
