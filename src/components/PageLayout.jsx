import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { StarBackground } from "./StarBackground";
import { MouseSpotlight } from "./MouseSpotlight";
import { CustomCursor } from "./CustomCursor";
import { Footer } from "./Footer";
import { motion, AnimatePresence } from "framer-motion";

export const PageLayout = ({ children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <CustomCursor />
            <StarBackground />
            <MouseSpotlight />
            <Navbar />
            <AnimatePresence mode="wait">
                <motion.main
                    initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                    {children}
                </motion.main>
            </AnimatePresence>
            <Footer />
        </div>
    );
};
