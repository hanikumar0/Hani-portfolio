import { ArrowDown, Mail, Briefcase, Download, Github, Linkedin } from "lucide-react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium tracking-wide uppercase"
          >
            Available for new opportunities
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight">
            Hi, I'm <span className="text-gradient">Hani Kumar</span>
          </h1>

          <div className="text-2xl md:text-4xl font-bold text-muted-foreground min-h-[40px] md:min-h-[50px]">
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "Full Stack Developer",
                  "React Native Developer",
                  "UI/UX Enthusiast",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 80,
              }}
            />
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I build high-performance, visually stunning, and user-centric web &
            mobile applications. Turning complex problems into elegant, scalable
            digital solutions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <a href="#projects" className="cosmic-button">
              <Briefcase size={20} />
              View Projects
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1_6D_afRccaa3q3GhI1DBnnXX4JIbDoIl"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Resume
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/80 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Hire Me
            </a>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex items-center justify-center gap-6 pt-10"
          >
            <HeroSocialLink href="https://github.com/hanikumar0" icon={<Github size={24} />} label="GitHub" />
            <HeroSocialLink href="https://www.linkedin.com/in/hanikumar06/" icon={<Linkedin size={24} />} label="LinkedIn" />
            <HeroSocialLink href="mailto:hanikumar064@gmail.com" icon={<Mail size={24} />} label="Email" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer group"
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span className="text-sm text-muted-foreground mb-2 font-medium group-hover:text-primary transition-colors">
          Explore More
        </span>
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
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
