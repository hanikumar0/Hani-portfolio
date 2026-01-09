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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-lg"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              A developer with a passion for{" "}
              <span className="text-primary">impactful code</span>.
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              My journey into tech started with a simple curiosity: "How do
              things work behind the screen?" What began with basic HTML tags
              has evolved into a career dedicated to building robust, scalable,
              and high-performance applications.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I don't just write code; I craft digital experiences. Whether it's
              a seamless mobile app or a complex web ecosystem, my focus is
              always on the end-user. I thrive in environments that challenge my
              technical limits and push me to learn every single day.
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
            href="https://drive.google.com/uc?export=download&id=1_6D_afRccaa3q3GhI1DBnnXX4JIbDoIl"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-all duration-300"
          >
            Download CV
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
