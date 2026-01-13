export const blogPosts = [
    {
        id: 1,
        title: "Optimizing React Performance for Low-End Devices",
        subtitle: "Case Study · Jan 12, 2026",
        excerpt: "How I achieved sub-100ms render times by aggressive code-splitting and canvas-based animations.",
        date: "Jan 12, 2026",
        category: "Performance",
        readTime: "8 min read",
        image: "/blog/perf.png",
        content: {
            overview: "Optimized a production React application to deliver sub-100ms render times on low-end devices by rethinking rendering strategy, bundle architecture, and animation handling.",
            problem: {
                description: "The application performed well on high-end hardware but struggled on budget devices:",
                points: [
                    "Initial load time of 400–700ms",
                    "Noticeable animation jank and dropped frames",
                    "Excessive re-renders across large component trees",
                    "Good Lighthouse scores but poor real-world UX"
                ]
            },
            solution: {
                description: "Re-architected the app with a performance-first mindset:",
                points: [
                    "Intent-based code splitting to load features only when required",
                    "Render optimization by localizing state and reducing unnecessary re-renders",
                    "Canvas-based animations to offload work from the DOM",
                    "Deferred rendering for non-critical UI elements",
                    "List virtualization to reduce DOM size"
                ],
                insight: "Architecture is about delaying decisions until the user actually needs them."
            },
            impact: {
                points: [
                    "⚡ < 100ms initial render time",
                    "🎯 Smooth 60 FPS animations on low-end devices",
                    "📦 60%+ reduction in initial JavaScript bundle size",
                    "📱 Consistent performance across budget Android devices"
                ]
            },
            techStack: ["React", "JavaScript (ES6+)", "HTML5 Canvas", "Web Performance APIs", "Chrome & React DevTools Profiler"],
            learning: "Performance optimization is less about micro-tuning and more about rendering less, loading later, and respecting device constraints."
        },
        slug: "optimizing-react-performance"
    },
    {
        id: 2,
        title: "The Architecture behind CoachVerse Performance Hub",
        excerpt: "Deep dive into building a scalable athlete management system with MERN and Clerk.",
        date: "Jan 05, 2026",
        category: "Architecture",
        readTime: "12 min read",
        image: "/blog/architecture.png",
        content: "Deep dive into the architecture of CoachVerse...",
        slug: "coachverse-architecture"
    },
    {
        id: 3,
        title: "Why Minimalist Code is Defensive Code",
        excerpt: "Exploring the mathematical elegance of writing less code to solve more complex problems.",
        date: "Dec 28, 2025",
        category: "Philosophy",
        readTime: "6 min read",
        image: "/blog/philosophy.png",
        content: "Philosophical take on minimalist code...",
        slug: "minimalist-code-philosophy"
    }
];
