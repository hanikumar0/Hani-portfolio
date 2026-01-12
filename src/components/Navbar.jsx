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
          ? "py-4"
          : "py-6"
      )}
    >
      <div className="container max-w-7xl">
        <div className={cn(
          "px-6 py-3 transition-all duration-500 flex items-center justify-between",
          isScrolled
            ? "glass-panel dark:bg-black/40 shadow-2xl shadow-canva-purple/10"
            : "bg-transparent"
        )}>
          <motion.a
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black tracking-tighter flex items-center gap-2"
            href="#hero"
          >
            <div className="w-10 h-10 bg-linear-to-br from-canva-teal to-canva-purple rounded-xl flex items-center justify-center text-white text-xl">H</div>
            <span className="hidden sm:inline-block font-black text-foreground">HANI</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-xs font-bold text-muted-foreground hover:text-canva-purple transition-all duration-300 uppercase tracking-widest hover:bg-canva-purple/5 rounded-full"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4 pl-4 border-l border-border/50">
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl hover:bg-secondary/50 text-foreground transition-all"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <a
                href="https://drive.google.com/uc?export=download&id=1_6D_afRccaa3q3GhI1DBnnXX4JIbDoIl"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-xl bg-canva-purple text-white font-bold text-xs shadow-lg shadow-canva-purple/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <Download size={14} />
                RESUME
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-foreground"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground relative z-50"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-2xl z-40 md:hidden flex flex-col items-center justify-center p-8"
            >
              <div className="flex flex-col gap-6 text-center w-full max-w-sm">
                {navItems.map((item, key) => (
                  <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: key * 0.1 }}
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-4xl font-black text-foreground hover:text-canva-purple transition-colors uppercase tracking-tighter"
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
                  className="mt-6 px-8 py-4 rounded-[2rem] bg-linear-to-r from-canva-teal to-canva-purple text-white text-xl font-black flex items-center justify-center gap-3 shadow-2xl"
                >
                  <Download size={24} />
                  RESUME
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

