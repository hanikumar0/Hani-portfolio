import { motion } from "framer-motion";
import { blogPosts } from "../data/blogPosts";
import { ArrowRight, Calendar, Clock, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Tilt } from "./Tilt";

export const BlogSection = () => {
    return (
        <section id="blog" className="py-8 px-4 bg-secondary/5 relative overflow-hidden">
            {/* Background Blobs */}
            <div className="blob w-[500px] h-[500px] bg-canva-teal/5 top-0 right-0" />
            <div className="blob w-[300px] h-[300px] bg-canva-purple/5 bottom-0 left-0" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <span className="px-4 py-1.5 rounded-full bg-canva-pink/10 text-canva-pink text-[10px] font-black tracking-widest uppercase border border-canva-pink/20 mb-6 inline-block">
                            ENGINEERING INSIGHTS
                        </span>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.9] mb-4">
                            Technical <br />
                            <span className="text-gradient">Notebook</span>
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                            A deep dive into system architecture, performance patterns, and the philosophy of building resilient software.
                        </p>
                    </motion.div>

                    <Link
                        to="/blog"
                        className="group flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl"
                    >
                        Read All Logs
                        <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogPosts.slice(0, 3).map((post, index) => (
                        <BlogCard key={post.id} post={post} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const BlogCard = ({ post, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
    >
        <Tilt>
            <div className="bg-card rounded-[2.5rem] border border-border/50 overflow-hidden hover:border-canva-purple/30 transition-all duration-500 hover:shadow-2xl flex flex-col h-full group">
                <div className="aspect-video relative overflow-hidden bg-secondary">
                    {/* Placeholder for actual image */}
                    <div className="absolute inset-0 bg-linear-to-br from-canva-purple/10 to-canva-teal/10 flex items-center justify-center p-8">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-125 transition-transform duration-700">
                            <ChevronRight size={32} className="text-foreground" />
                        </div>
                    </div>
                    <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-white/90 dark:bg-black/90 text-foreground text-[8px] font-black tracking-widest uppercase shadow-sm">
                        {post.category}
                    </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-muted-foreground text-[10px] font-black uppercase tracking-widest mb-4">
                        <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                        <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
                    </div>

                    <h3 className="text-2xl font-black mb-4 tracking-tight leading-tight group-hover:text-canva-purple transition-colors">
                        {post.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                        {post.excerpt}
                    </p>

                    <Link
                        to={`/blog/${post.slug}`}
                        className="flex items-center gap-2 text-foreground font-black text-xs uppercase tracking-widest hover:gap-4 transition-all"
                    >
                        Study Log
                        <ArrowRight size={16} className="text-canva-purple" />
                    </Link>
                </div>
            </div>
        </Tilt>
    </motion.div>
);
