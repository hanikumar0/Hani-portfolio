import { motion } from "framer-motion";

export const Marquee = ({ items, direction = 1, speed = 20 }) => {
    return (
        <div className="relative flex overflow-hidden whitespace-nowrap py-10 border-y border-border/50 bg-secondary/5 mb-24">
            <motion.div
                animate={{
                    x: direction > 0 ? ["0%", "-50%"] : ["-50%", "0%"],
                }}
                transition={{
                    ease: "linear",
                    duration: speed,
                    repeat: Infinity,
                }}
                className="flex"
            >
                {[...items, ...items].map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-4 px-10 text-4xl md:text-6xl font-black text-foreground/20 uppercase tracking-tighter hover:text-canva-purple transition-colors cursor-default"
                    >
                        <span className="text-canva-teal">•</span>
                        {item}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};
