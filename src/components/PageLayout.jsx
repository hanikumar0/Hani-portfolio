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
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
            <CustomCursor />
            <StarBackground />
            <MouseSpotlight />

            {/* Dynamic Background Blobs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-canva-purple/10 blur-[120px] rounded-full"
                />
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-[10%] -right-[10%] w-[45%] h-[45%] bg-canva-teal/10 blur-[120px] rounded-full"
                />
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 100, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-canva-pink/5 blur-[100px] rounded-full"
                />
            </div>

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
