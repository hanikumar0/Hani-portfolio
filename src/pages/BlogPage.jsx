import { motion } from "framer-motion";
import { PageLayout } from "../components/PageLayout";
import { blogPosts } from "../data/blogPosts";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const BlogPage = () => {
    return (
        <PageLayout>
            <div className="pt-12 pb-12 px-4 min-h-screen bg-background relative overflow-hidden">
                {/* Background Accents */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-canva-teal/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-canva-purple/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="container mx-auto max-w-5xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <span className="px-4 py-1.5 rounded-full bg-canva-purple/10 text-canva-purple text-[10px] font-black tracking-widest uppercase border border-canva-purple/20 mb-4 inline-block">
                            ENGINEERING LOGS
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.85] mb-4">
                            Technical <br />
                            <span className="text-gradient">Notebook</span>
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                            Documenting the journey of building scalable systems, solving architectural puzzles, and chasing the perfect deployment.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-6">
                        {blogPosts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-6 rounded-[2.5rem] bg-card border border-border/50 hover:border-canva-purple/30 transition-all duration-500 hover:shadow-xl"
                            >
                                <div className="flex flex-col md:flex-row gap-12 items-center">
                                    <div className="w-full md:w-1/3 aspect-square rounded-[2.5rem] bg-secondary flex items-center justify-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-linear-to-br from-canva-purple/10 via-transparent to-canva-teal/10" />
                                        <span className="text-6xl font-black text-foreground/5 select-none">{post.id.toString().padStart(2, '0')}</span>
                                        <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-white/90 dark:bg-black/90 text-foreground text-[8px] font-black tracking-widest uppercase">
                                            {post.category}
                                        </div>
                                    </div>

                                    <div className="flex-1 space-y-6">
                                        <div className="flex items-center gap-6 text-muted-foreground text-[10px] font-black uppercase tracking-widest">
                                            <span className="flex items-center gap-1.5"><Calendar size={14} className="text-canva-purple" /> {post.date}</span>
                                            <span className="flex items-center gap-1.5"><Clock size={14} className="text-canva-teal" /> {post.readTime}</span>
                                        </div>

                                        <h2 className="text-3xl md:text-4xl font-black tracking-tight group-hover:text-canva-purple transition-colors duration-300">
                                            {post.title}
                                        </h2>

                                        <p className="text-muted-foreground text-lg leading-relaxed">
                                            {post.excerpt}
                                        </p>

                                        <Link
                                            to={`/blog/${post.slug}`}
                                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl group/btn"
                                        >
                                            Read Analysis
                                            <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};
