import { ArrowDown, Mail, Briefcase, Download, Github, Linkedin, Code, Rocket } from "lucide-react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { Magnetic } from "./Magnetic";
import { useSound } from "../hooks/use-sound";

export const HeroSection = () => {
  const { play: playClick } = useSound("/sounds/click.mp3", 0.3);
  const { play: playHover } = useSound("/sounds/hover.mp3", 0.2);
  const { play: playPop } = useSound("/sounds/switch.mp3", 0.2);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-20"
    >
      {/* Background Blobs (3D depth) */}
      <div className="blob w-[300px] h-[300px] bg-canva-teal top-1/4 -left-20 animate-pulse" />
      <div className="blob w-[400px] h-[400px] bg-canva-purple bottom-1/4 -right-20 animate-pulse-subtle" />
      <div className="blob w-[250px] h-[250px] bg-canva-yellow top-10 right-1/4 opacity-10 animate-float" />

      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        onDragStart={playPop}
        className="sticker hidden lg:block top-40 left-20 z-20 cursor-grab active:cursor-grabbing"
        initial={{ y: 0, rotate: -5 }}
        animate={{ y: [0, -10, 0], rotate: [-5, -2, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-canva-teal/20 flex items-center justify-center text-canva-teal font-bold">1</div>
          <span className="text-xs font-bold uppercase tracking-tighter">Full Stack</span>
        </div>
      </motion.div>

      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        className="sticker hidden lg:block bottom-40 left-1/4 z-20 cursor-grab active:cursor-grabbing bg-canva-pink/10"
        initial={{ rotate: 12 }}
        animate={{ rotate: [12, 5, 12], y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-2">
          <div className="p-1 px-2 rounded-lg bg-canva-pink font-black text-[10px] text-white">HIRE</div>
          <span className="text-xs font-bold">Open for Work</span>
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
          <span className="text-xs font-bold">Performance Expert</span>
        </div>
      </motion.div>

      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        className="sticker hidden lg:block top-20 right-10 z-20 cursor-grab active:cursor-grabbing bg-canva-purple/10 border-canva-purple/20"
        initial={{ x: 0 }}
        animate={{ x: [0, 10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-2">
          <Rocket className="text-canva-purple" size={16} />
          <span className="text-xs font-bold">Next-Gen Tech</span>
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
              FULL STACK & MOBILE DEVELOPER
            </div>

            <h1 className="text-6xl md:text-9xl font-black tracking-tight leading-[0.85] text-foreground mb-4">
              Building <br />
              <span className="text-gradient">Real Solutions</span>
            </h1>

            <div className="text-xl md:text-3xl font-medium text-muted-foreground max-w-2xl leading-relaxed">
              I'm <span className="text-foreground font-black underline decoration-canva-pink decoration-6 underline-offset-8">Hani Kumar</span>, <br />
              a Full-Stack Developer specializing in high-performance system design.
              <div className="mt-4 text-canva-purple font-black h-10 flex items-center gap-3">
                <span className="w-8 h-1 bg-canva-purple/20 rounded-full" />
                <Typewriter
                  options={{
                    strings: ["MERN Stack Expert", "React Native Developer", "AI Tool Builder", "Open Source Contributor"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Magnetic>
                <a
                  href="#projects"
                  onClick={playClick}
                  onMouseEnter={playHover}
                  className="cosmic-button"
                >
                  <Briefcase size={20} />
                  View Showcase
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="https://drive.google.com/file/d/1_6D_afRccaa3q3GhI1DBnnXX4JIbDoIl/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  onMouseEnter={playHover}
                  className="secondary-button"
                >
                  <Download size={20} />
                  View Resume
                </a>
              </Magnetic>
            </div>
          </motion.div>

          {/* Visual 3D Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative group perspective-1000">
              <div className="absolute -inset-4 bg-linear-to-r from-canva-teal via-canva-purple to-canva-pink rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-60 transition-opacity duration-700" />
              <motion.div
                whileHover={{ rotateY: 15, rotateX: -10, scale: 1.05 }}
                className="canva-card-3d bg-card border-4 border-white dark:border-white/10 relative z-10 shadow-2xl transition-all duration-500 transform-gpu"
              >
                <div className="aspect-square flex items-center justify-center p-8 bg-linear-to-br from-secondary/50 to-background rounded-[2rem] overflow-hidden relative">
                  {/* Floating 3D Shapes (Simulated) */}
                  <div className="absolute top-5 left-5 w-12 h-12 bg-canva-teal/20 rounded-lg blur-xl animate-pulse" />
                  <div className="absolute bottom-10 right-10 w-20 h-20 bg-canva-purple/20 rounded-full blur-2xl animate-pulse-subtle" />

                  <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-20"
                  >
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-canva-pink rounded-full blur-2xl opacity-50" />
                    <div className="bg-white/10 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/20 shadow-2xl">
                      <Github className="w-32 h-32 md:w-48 md:h-48 text-foreground" />
                    </div>

                    {/* Floating 2D icons around the 3D element */}
                    <motion.div
                      animate={{ y: [0, -10, 0], rotate: [12, 20, 12] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute -top-6 -left-12 p-4 bg-white shadow-2xl rounded-2xl border border-border/50 z-30"
                    >
                      <Code className="text-canva-teal" size={32} />
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, 10, 0], rotate: [-12, -20, -12] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute -bottom-6 -right-12 p-4 bg-white shadow-2xl rounded-2xl border border-border/50 z-30"
                    >
                      <Rocket className="text-canva-yellow" size={32} />
                    </motion.div>
                  </motion.div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Architectural Integrity</p>
                      <h4 className="text-lg font-black">System Quality</h4>
                    </div>
                    <span className="text-canva-teal font-black">98%</span>
                  </div>
                  <div className="h-3 w-full bg-secondary/50 rounded-full overflow-hidden border border-border/20">
                    <motion.div
                      className="h-full bg-linear-to-r from-canva-teal to-canva-purple"
                      initial={{ width: 0 }}
                      animate={{ width: "98%" }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                  </div>
                </div>
              </motion.div>
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
