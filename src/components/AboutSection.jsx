import { Briefcase, Code, User, Rocket, GraduationCap, Heart } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="h-1.5 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* 3D Decorative Floating Objects */}
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-20 right-10 hidden lg:block opacity-20 pointer-events-none"
        >
          <div className="w-24 h-24 rounded-3xl bg-canva-purple rotate-12 blur-sm" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-40 left-10 hidden lg:block opacity-20 pointer-events-none"
        >
          <div className="w-32 h-32 rounded-full bg-canva-teal -rotate-12 blur-sm" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-lg"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              A developer focused on building{" "}
              <span className="text-primary">tools that people actually use</span>.
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              I’m a full-stack developer specializing in the MERN stack and React Native, with a strong focus on system design, performance optimization, and scalability. My work centers on solving real engineering problems—designing AI-driven pipelines for ATS resume optimization, building low-latency real-time systems, and developing fault-tolerant backend services.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I’ve optimized platforms like CoachVerse by reducing end-to-end workflow latency by 50%, and engineered state synchronization mechanisms achieving sub-100ms consistency for shopping cart systems. I enjoy breaking down complex requirements into modular architectures, writing maintainable, testable code, and delivering robust, production-ready applications.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Rocket size={20} />
                </div>
                <span className="font-medium">Fast Learner</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap size={20} />
                </div>
                <span className="font-medium">Growth Mindset</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Heart size={20} />
                </div>
                <span className="font-medium">Passionate</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Code size={20} />
                </div>
                <span className="font-medium">Clean Code</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 gap-6"
          >
            <AboutCard
              icon={<Code className="h-6 w-6 text-primary" />}
              title="Full Stack Development"
              description="Building end-to-end solutions using modern stacks like MERN and Next.js."
            />
            <AboutCard
              icon={<User className="h-6 w-6 text-primary" />}
              title="UI/UX Engineering"
              description="Bridging the gap between design and functionality for superior user experiences."
            />
            <AboutCard
              icon={<Briefcase className="h-6 w-6 text-primary" />}
              title="Project Leadership"
              description="Managing full product lifecycles from ideation to deployment and beyond."
            />
          </motion.div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-16 justify-center">
          <a href="#contact" className="cosmic-button">
            Get In Touch
          </a>

          <a
            href="https://drive.google.com/file/d/1_6D_afRccaa3q3GhI1DBnnXX4JIbDoIl/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-all duration-300"
          >
            View Full CV
          </a>
        </div>
      </div>
    </section>
  );
};

const AboutCard = ({ icon, title, description }) => (
  <div className="gradient-border p-8 group hover:border-primary/50 transition-all duration-300">
    <div className="flex items-start gap-5">
      <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
          {title}
        </h4>
        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  </div>
);
