import React, { useState } from "react";
import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Award,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Magnetic } from "./Magnetic";
import { Tilt } from "./Tilt";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate async send
    setTimeout(() => {
      toast({
        title: "Message sent! 🎉",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="py-32 px-4 relative overflow-hidden bg-background"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-canva-purple/5 blur-[120px] rounded-full pointer-events-none z-0" style={{ zIndex: -1 }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-canva-teal/5 blur-[120px] rounded-full pointer-events-none z-0" style={{ zIndex: -1 }} />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-canva-teal/10 text-canva-teal text-[10px] font-black uppercase tracking-[0.2em] mb-4 border border-canva-teal/20">
            GET IN TOUCH
          </span>
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[0.9]">
            Let's Start a <br />
            <span className="text-gradient">Conversation</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Have a game-changing idea or a technical challenge? I’m currently open for new projects and engineering opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-12"
          >
            <div className="space-y-8">
              <ContactInfoItem
                icon={<Mail className="text-canva-purple" />}
                label="Direct Email"
                value="hanikumar064@gmail.com"
                href="mailto:hanikumar064@gmail.com"
              />
              <ContactInfoItem
                icon={<Phone className="text-canva-teal" />}
                label="Phone / WhatsApp"
                value="+91-9540849531"
                href="tel:+919540849531"
              />
              <ContactInfoItem
                icon={<MapPin className="text-canva-pink" />}
                label="Current Base"
                value="New Delhi, India"
              />
            </div>

            <div className="pt-8 border-t border-border/50">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-8">DIGITAL FOOTPRINT</h4>
              <div className="flex gap-6">
                <Magnetic>
                  <SocialLink
                    href="https://www.linkedin.com/in/hanikumar06/"
                    icon={<Linkedin />}
                    color="hover:text-blue-500"
                  />
                </Magnetic>
                <Magnetic>
                  <SocialLink
                    href="https://github.com/hanikumar0"
                    icon={<Github />}
                    color="hover:text-foreground"
                  />
                </Magnetic>
              </div>
            </div>

            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 rounded-[2.5rem] bg-secondary/30 backdrop-blur-xl border border-border/50 relative overflow-hidden group shadow-xl"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-canva-purple/10 blur-2xl rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-canva-purple/10 rounded-2xl text-canva-purple group-hover:rotate-12 transition-transform">
                  <Award size={24} />
                </div>
                <h4 className="font-black text-xl tracking-tight">Status: Available</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                High-bandwidth availability for select engineering roles and creative tech partnerships.
              </p>
            </motion.div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-card border-2 border-border/50 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-canva-teal/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-canva-teal/10 transition-colors" />

              <form onSubmit={handleSubmit} className="relative z-[50] space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase font-black tracking-widest text-muted-foreground ml-1">FULL NAME</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      required
                      placeholder="Hani Kumar"
                      className="w-full px-6 py-4 rounded-2xl border-2 border-border/50 bg-secondary/20 focus:outline-none focus:border-canva-purple/50 focus:bg-background transition-all placeholder:text-muted-foreground/30 font-bold"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase font-black tracking-widest text-muted-foreground ml-1">EMAIL ADDRESS</label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      required
                      placeholder="hello@example.com"
                      className="w-full px-6 py-4 rounded-2xl border-2 border-border/50 bg-secondary/20 focus:outline-none focus:border-canva-purple/50 focus:bg-background transition-all placeholder:text-muted-foreground/30 font-bold"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase font-black tracking-widest text-muted-foreground ml-1">SUBJECT</label>
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    type="text"
                    required
                    placeholder="How can I help you?"
                    className="w-full px-6 py-4 rounded-2xl border-2 border-border/50 bg-secondary/20 focus:outline-none focus:border-canva-purple/50 focus:bg-background transition-all placeholder:text-muted-foreground/30 font-bold"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase font-black tracking-widest text-muted-foreground ml-1">YOUR MESSAGE</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell me about your amazing project..."
                    className="w-full px-6 py-4 rounded-2xl border-2 border-border/50 bg-secondary/20 focus:outline-none focus:border-canva-purple/50 focus:bg-background transition-all resize-none placeholder:text-muted-foreground/30 font-bold"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 rounded-3xl bg-canva-gradient-accent text-white font-black text-xs tracking-[0.3em] uppercase shadow-xl shadow-canva-purple/20 flex items-center justify-center gap-4 group disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      SEND MESSAGE
                      <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactInfoItem = ({ icon, label, value, href }) => (
  <div className="flex items-center gap-6 group">
    <div className="w-16 h-16 rounded-[2rem] bg-secondary/50 border border-border/50 flex items-center justify-center text-canva-purple group-hover:scale-110 group-hover:bg-card group-hover:shadow-xl transition-all duration-500">
      {React.cloneElement(icon, { size: 28 })}
    </div>
    <div>
      <p className="text-[9px] uppercase font-black text-muted-foreground/60 tracking-[0.2em] mb-1">
        {label}
      </p>
      {href ? (
        <a
          href={href}
          className="text-xl md:text-2xl font-black tracking-tight hover:text-canva-purple transition-colors block"
        >
          {value}
        </a>
      ) : (
        <span className="text-xl md:text-2xl font-black tracking-tight block">{value}</span>
      )}
    </div>
  </div>
);

const SocialLink = ({ href, icon, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      "flex items-center justify-center w-16 h-16 bg-secondary/30 border border-border/50 rounded-[2rem] transition-all duration-500 shadow-sm hover:shadow-2xl hover:bg-card group",
      color
    )}
  >
    {React.cloneElement(icon, { size: 28, className: "transition-transform group-hover:scale-110" })}
  </a>
);
