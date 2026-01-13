import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import { PageLayout } from "../components/PageLayout";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Share2, Bookmark } from "lucide-react";

export const BlogPostPage = () => {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) return <div>Post not found</div>;

    return (
        <PageLayout>
            <article className="pt-12 pb-12 px-4 min-h-screen bg-background">
                <div className="container mx-auto max-w-4xl">
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4 font-black text-xs uppercase tracking-widest"
                    >
                        <ArrowLeft size={16} />
                        Back to Notebook
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        <div className="space-y-3">
                            <span className="px-4 py-1.5 rounded-full bg-canva-purple/10 text-canva-purple text-[10px] font-black tracking-widest uppercase border border-canva-purple/20">
                                {post.category}
                            </span>
                            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                                {post.title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-xs font-medium border-y border-border/50 py-3">
                                <div className="flex items-center gap-2">
                                    <Calendar size={14} className="text-canva-purple" />
                                    <span>{post.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={14} className="text-canva-teal" />
                                    <span>{post.readTime}</span>
                                </div>
                                <div className="ml-auto flex items-center gap-4">
                                    <button className="p-1.5 rounded-full hover:bg-secondary transition-colors"><Share2 size={16} /></button>
                                    <button className="p-1.5 rounded-full hover:bg-secondary transition-colors"><Bookmark size={16} /></button>
                                </div>
                            </div>
                        </div>

                        <div className="aspect-video rounded-3xl bg-secondary overflow-hidden relative border border-border/50 max-h-80">
                            <div className="absolute inset-0 bg-linear-to-br from-canva-purple/20 via-transparent to-canva-teal/20" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-6xl font-black text-foreground/5 uppercase tracking-tighter select-none">{post.category}</span>
                            </div>
                        </div>

                        <div className="prose prose-invert max-w-none text-muted-foreground text-base leading-relaxed py-4">
                            {typeof post.content === "string" ? (
                                <p>{post.content}</p>
                            ) : (
                                <div className="space-y-6">
                                    {/* Overview */}
                                    <section className="space-y-2">
                                        <h2 className="text-foreground text-2xl font-black tracking-tight">Overview</h2>
                                        <p className="leading-relaxed">{post.content.overview}</p>
                                    </section>

                                    {/* Problem */}
                                    <section className="space-y-2">
                                        <h2 className="text-foreground text-2xl font-black tracking-tight">Problem</h2>
                                        <p>{post.content.problem.description}</p>
                                        <ul className="list-none space-y-1 p-0">
                                            {post.content.problem.points.map((pt, i) => (
                                                <li key={i} className="flex items-start gap-4">
                                                    <span className="w-1 h-1 rounded-full bg-canva-pink mt-2 flex-shrink-0" />
                                                    <span className="text-sm">{pt}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>

                                    {/* Solution */}
                                    <section className="space-y-2">
                                        <h2 className="text-foreground text-2xl font-black tracking-tight">Solution</h2>
                                        <p>{post.content.solution.description}</p>
                                        <ul className="list-none space-y-1 p-0">
                                            {post.content.solution.points.map((pt, i) => (
                                                <li key={i} className="flex items-start gap-4">
                                                    <span className="w-1 h-1 rounded-full bg-canva-teal mt-2 flex-shrink-0" />
                                                    <span className="text-sm">{pt}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="p-4 rounded-xl bg-secondary/30 border border-canva-purple/20 font-black text-foreground italic text-sm shadow-sm">
                                            "{post.content.solution.insight}"
                                        </div>
                                    </section>

                                    {/* Impact */}
                                    <section className="space-y-2">
                                        <h2 className="text-foreground text-2xl font-black tracking-tight">Impact</h2>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                            {post.content.impact.points.map((pt, i) => (
                                                <div key={i} className="p-3 rounded-lg bg-card border border-border/50 font-black text-foreground text-[10px] hover:border-canva-purple/30 transition-all text-center">
                                                    {pt}
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* Tech Stack */}
                                    <section className="space-y-2">
                                        <h2 className="text-foreground text-2xl font-black tracking-tight">Tech Stack</h2>
                                        <div className="flex flex-wrap gap-1.5">
                                            {post.content.techStack.map((tech, i) => (
                                                <span key={i} className="px-3 py-1 rounded-full bg-secondary/50 text-foreground text-[9px] font-black uppercase tracking-widest border border-border/50">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </section>

                                    {/* Learning */}
                                    <section className="p-6 rounded-2xl bg-linear-to-br from-canva-purple/10 to-canva-teal/10 border border-white/10">
                                        <h3 className="text-foreground text-lg font-black mb-1">What I Learned</h3>
                                        <p className="italic text-sm">"{post.content.learning}"</p>
                                    </section>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </article>
        </PageLayout>
    );
};
