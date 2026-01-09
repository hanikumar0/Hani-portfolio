import React, { useState } from "react";
import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Award,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate async send
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
      e.target.reset();
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-secondary/10 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to start a project or just want to say hi? My inbox is always
            open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <ContactInfoItem
                  icon={<Mail className="text-primary" />}
                  label="Email"
                  value="hanikumar064@gmail.com"
                  href="mailto:hanikumar064@gmail.com"
                />
                <ContactInfoItem
                  icon={<Phone className="text-primary" />}
                  label="Phone"
                  value="+91-9540849531"
                  href="tel:+919540849531"
                />
                <ContactInfoItem
                  icon={<MapPin className="text-primary" />}
                  label="Location"
                  value="New Delhi, India"
                />
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Social Profiles</h4>
              <div className="flex gap-4">
                <SocialLink
                  href="https://www.linkedin.com/in/hanikumar06/"
                  icon={<Linkedin />}
                />
                <SocialLink
                  href="https://github.com/hanikumar0"
                  icon={<Github />}
                />
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Award className="text-primary" />
                </div>
                <h4 className="font-bold">Open for Collaboration</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I am currently looking for new opportunities and interesting
                projects to work on. Feel free to reach out if you have
                something in mind!
              </p>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-card p-8 md:p-10 rounded-3xl border border-border/50 shadow-2xl shadow-primary/5">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full px-5 py-4 rounded-xl border border-border bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-5 py-4 rounded-xl border border-border bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Project Inquiry"
                    className="w-full px-5 py-4 rounded-xl border border-border bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-5 py-4 rounded-xl border border-border bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none placeholder:text-muted-foreground/50"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cosmic-button w-full py-4 text-lg"
                >
                  {isSubmitting ? "Sending Message..." : "Send Message"}
                  {!isSubmitting && <Send size={20} />}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactInfoItem = ({ icon, label, value, href }) => (
  <div className="flex items-start gap-4 group">
    <div className="p-4 rounded-2xl bg-card border border-border group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300">
      {icon}
    </div>
    <div>
      <p className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">
        {label}
      </p>
      {href ? (
        <a
          href={href}
          className="text-lg font-bold hover:text-primary transition-colors"
        >
          {value}
        </a>
      ) : (
        <span className="text-lg font-bold">{value}</span>
      )}
    </div>
  </div>
);

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-4 bg-card border border-border rounded-xl hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
  >
    {React.cloneElement(icon, { size: 24 })}
  </a>
);
