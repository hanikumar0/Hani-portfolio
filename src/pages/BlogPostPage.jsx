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
            <article className="pt-32 pb-20 px-4 min-h-screen bg-background">
                <div className="container mx-auto max-w-4xl">
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12 font-black text-xs uppercase tracking-widest"
                    >
                        <ArrowLeft size={16} />
                        Back to Notebook
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                    >
                        <div className="space-y-6">
                            <span className="px-4 py-1.5 rounded-full bg-canva-purple/10 text-canva-purple text-[10px] font-black tracking-widest uppercase border border-canva-purple/20">
                                {post.category}
                            </span>
                            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                                {post.title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-8 text-muted-foreground text-sm font-medium border-y border-border/50 py-6">
                                <div className="flex items-center gap-2">
                                    <Calendar size={18} className="text-canva-purple" />
                                    <span>{post.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={18} className="text-canva-teal" />
                                    <span>{post.readTime}</span>
                                </div>
                                <div className="ml-auto flex items-center gap-4">
                                    <button className="p-2 rounded-full hover:bg-secondary transition-colors"><Share2 size={18} /></button>
                                    <button className="p-2 rounded-full hover:bg-secondary transition-colors"><Bookmark size={18} /></button>
                                </div>
                            </div>
                        </div>

                        <div className="aspect-video rounded-[3rem] bg-secondary overflow-hidden relative border border-border/50">
                            <div className="absolute inset-0 bg-linear-to-br from-canva-purple/20 via-transparent to-canva-teal/20" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-8xl font-black text-foreground/5 uppercase tracking-tighter select-none">{post.category}</span>
                            </div>
                        </div>

                        <div className="prose prose-invert max-w-none text-muted-foreground text-lg leading-relaxed space-y-8 py-12">
                            <p className="text-foreground font-black text-2xl italic">
                                "{post.excerpt}"
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <h2 className="text-foreground text-3xl font-black pt-8">The Technical Challenge</h2>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <div className="p-8 rounded-3xl bg-secondary/50 border border-border/50 font-black text-foreground">
                                Key Insight: Architecture is not about making choices, but about delaying them long enough to have sufficient information.
                            </div>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </article>
        </PageLayout>
    );
};
