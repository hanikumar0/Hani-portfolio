import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Magnetic } from "./Magnetic";
import { Link, useLocation } from "react-router-dom";
import { useSound } from "../hooks/use-sound";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const { play: playClick } = useSound("/sounds/click.mp3", 0.3);
  const { play: playSwitch } = useSound("/sounds/switch.mp3", 0.4);
  const { play: playHover } = useSound("/sounds/hover.mp3", 0.2);

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
    playSwitch();
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
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link
              className="text-2xl font-black tracking-tighter flex items-center gap-2"
              to="/"
            >
              <div className="w-10 h-10 bg-linear-to-br from-canva-teal to-canva-purple rounded-xl flex items-center justify-center text-white text-xl">H</div>
              <span className="hidden sm:inline-block font-black text-foreground">HANI</span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 bg-secondary/30 backdrop-blur-md p-1.5 rounded-full border border-border/50 shadow-inner">
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <Magnetic key={item.name}>
                  <Link
                    to={item.href}
                    onClick={playClick}
                    onMouseEnter={playHover}
                    className={cn(
                      "px-6 py-2.5 text-[11px] font-black tracking-[0.2em] transition-all duration-500 uppercase rounded-full relative group",
                      location.pathname === item.href
                        ? "text-white"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {location.pathname === item.href && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 bg-linear-to-r from-canva-teal to-canva-purple rounded-full -z-10 shadow-lg shadow-canva-purple/20"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.name}
                  </Link>
                </Magnetic>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-3 rounded-full hover:bg-secondary/80 text-foreground transition-all duration-300 border border-transparent hover:border-border/50 group"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={18} className="group-hover:rotate-90 transition-transform duration-500" /> : <Moon size={18} className="group-hover:-rotate-12 transition-transform duration-500" />}
            </button>

            <a
              href="https://drive.google.com/file/d/1_6D_afRccaa3q3GhI1DBnnXX4JIbDoIl/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-foreground text-background font-black text-[10px] tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-xl hover:shadow-foreground/10"
            >
              RESUME
            </a>
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
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: key * 0.1 }}
                    key={item.href}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        "text-4xl font-black transition-colors uppercase tracking-tighter block",
                        location.pathname === item.href
                          ? "text-canva-purple"
                          : "text-foreground hover:text-canva-purple"
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  href="https://drive.google.com/file/d/1_6D_afRccaa3q3GhI1DBnnXX4JIbDoIl/view?usp=sharing"
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

