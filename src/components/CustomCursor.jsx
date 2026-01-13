import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const CustomCursor = () => {
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);
    const [isHovering, setIsHovering] = useState(false);

    const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveMouse = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleHover = (e) => {
            if (
                e.target.tagName === "A" ||
                e.target.tagName === "BUTTON" ||
                e.target.closest("a") ||
                e.target.closest("button") ||
                e.target.getAttribute("role") === "button"
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", moveMouse);
        window.addEventListener("mouseover", handleHover);

        return () => {
            window.removeEventListener("mousemove", moveMouse);
            window.removeEventListener("mouseover", handleHover);
        };
    }, []);

    return (
        <>
            {/* Main Dot */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-canva-purple rounded-full z-[999] pointer-events-none mix-blend-difference"
                style={{
                    translateX: smoothX,
                    translateY: smoothY,
                    x: "-50%",
                    y: "-50%",
                }}
            />
            {/* Outer Circle */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-canva-purple rounded-full z-[998] pointer-events-none"
                animate={{
                    scale: isHovering ? 2 : 1,
                    opacity: isHovering ? 0.3 : 1,
                    backgroundColor: isHovering ? "rgba(125, 42, 232, 0.2)" : "transparent",
                }}
                style={{
                    translateX: smoothX,
                    translateY: smoothY,
                    x: "-50%",
                    y: "-50%",
                }}
                transition={{ type: "spring", stiffness: 250, damping: 25 }}
            />
        </>
    );
};
