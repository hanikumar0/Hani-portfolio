import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card border-t border-border mt-12">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-black text-primary mb-2 uppercase tracking-tighter">Hani Kumar</h3>
          <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-start gap-1">
            &copy; {new Date().getFullYear()} All rights reserved. Built with ❤️ for the web.
          </p>
        </div>

        <div className="flex gap-4">
          <FooterSocialLink
            href="https://github.com/hanikumar0"
            icon={<Github size={18} />}
          />
          <FooterSocialLink
            href="https://www.linkedin.com/in/hanikumar06/"
            icon={<Linkedin size={18} />}
          />
          <FooterSocialLink
            href="mailto:hanikumar064@gmail.com"
            icon={<Mail size={18} />}
          />
        </div>

        <a
          href="#hero"
          className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all hover:-translate-y-1 shadow-lg shadow-primary/5"
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </a>
      </div>
    </footer>
  );
};

const FooterSocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-xl bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
  >
    {icon}
  </a>
);