import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-500",
        isScrolled
          ? "py-4 bg-background/60 backdrop-blur-xl border-b border-border/50 shadow-xl"
          : "py-6 bg-transparent"
      )}
    >
      <div className="container max-w-7xl flex items-center justify-between px-4 md:px-8">
        <motion.a
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter hover:scale-105 transition-transform"
          href="#hero"
        >
          <span className="text-primary font-black">HANI</span>
          <span className="text-foreground">KUMAR</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-6 px-8 py-2.5 rounded-full bg-secondary/20 border border-border/30 backdrop-blur-sm"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors duration-300 uppercase tracking-widest"
              >
                {item.name}
              </a>
            ))}
          </motion.div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-3 rounded-xl bg-card border border-border hover:border-primary/50 text-primary transition-all duration-300 shadow-lg shadow-primary/5"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a
              href="https://drive.google.com/uc?export=download&id=1_6D_afRccaa3q3GhI1DBnnXX4JIbDoIl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
            >
              <Download size={18} />
              Resume
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-card border border-border text-primary transition-all"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-foreground relative z-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 md:hidden flex flex-col items-center justify-center p-8"
            >
              <div className="flex flex-col gap-8 text-center">
                {navItems.map((item, key) => (
                  <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: key * 0.1 }}
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-3xl font-black text-foreground hover:text-primary transition-colors uppercase tracking-tighter"
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  href="https://drive.google.com/uc?export=download&id=1_6D_afRccaa3q3GhI1DBnnXX4JIbDoIl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 cosmic-button text-lg font-bold flex items-center gap-2"
                >
                  <Download size={20} />
                  Download Resume
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
