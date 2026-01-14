import { ArrowDown, Mail, Briefcase, Download, Github, Linkedin, Code, Rocket } from "lucide-react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { Magnetic } from "./Magnetic";
import { useSound } from "../hooks/use-sound";

import { Desk3D } from "./Desk3D";

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
        style={{ touchAction: "none" }}
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
        style={{ touchAction: "none" }}
        className="sticker hidden lg:block bottom-40 left-1/4 z-20 cursor-grab active:cursor-grabbing bg-canva-pink/10 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        onClick={() => window.location.href = '/contact'}
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
        style={{ touchAction: "none" }}
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
        style={{ touchAction: "none" }}
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
                <Link
                  to="/contact"
                  onClick={playClick}
                  onMouseEnter={playHover}
                  className="px-8 py-4 rounded-full bg-linear-to-r from-canva-purple to-canva-pink text-white font-black text-xs tracking-[0.2em] uppercase shadow-xl shadow-canva-purple/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                >
                  <Mail size={20} />
                  Hire Me
                </Link>
              </Magnetic>
              <Magnetic>
                <a
                  href="#projects"
                  onClick={playClick}
                  onMouseEnter={playHover}
                  className="secondary-button"
                >
                  <Briefcase size={20} />
                  Case Studies
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="https://drive.google.com/file/d/1_6D_afRccaa3q3GhI1DBnnXX4JIbDoIl/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  onMouseEnter={playHover}
                  className="px-8 py-4 rounded-full border-2 border-border font-black text-[10px] tracking-[0.2em] uppercase hover:bg-secondary transition-all flex items-center gap-2"
                >
                  <Download size={20} />
                  CV
                </a>
              </Magnetic>
            </div>

            {/* Core Philosophy Block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="pt-12 border-t border-border/50 max-w-xl"
            >
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-canva-teal mb-4">Core Philosophy</h4>
              <p className="text-xl font-black italic leading-tight text-foreground/70">
                “I believe in writing code that isn't just functional, but <span className="text-canva-purple">mathematically elegant</span> and deeply intuitive.”
              </p>
            </motion.div>
          </motion.div>

          {/* Visual 3D Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative group p-4 bg-linear-to-br from-white/5 to-white/10 rounded-[4rem] backdrop-blur-xl border-2 border-white/20 shadow-[0_0_80px_rgba(125,42,232,0.1)]">
              <div className="absolute -inset-4 bg-linear-to-r from-canva-teal via-canva-purple to-canva-pink rounded-[4.5rem] blur-3xl opacity-10 group-hover:opacity-30 transition-opacity duration-700" />

              <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden bg-black/20 relative">
                <Desk3D />

                {/* Floating HUD Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-10 left-10 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 z-20 space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">Environment Live</span>
                  </div>
                </motion.div>
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
