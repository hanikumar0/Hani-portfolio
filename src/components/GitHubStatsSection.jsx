import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Github, AlertTriangle, Star, GitFork, Users, Code2, Activity, Calendar, Zap } from "lucide-react";
import { fetchUserStats, fetchUserEvents } from "../lib/github";

/**
 * StatCard Helper Component
 */
const StatCard = ({ children, delay, animateX }) => (
    <motion.div
        initial={{ opacity: 0, x: animateX }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6, ease: "easeOut" }}
        whileHover={{ y: -5 }}
        className="bg-card/40 backdrop-blur-md p-6 md:p-8 rounded-2xl md:rounded-[2rem] border border-border/50 overflow-hidden flex flex-col justify-center items-center h-full min-h-[250px] md:min-h-[280px] transition-all duration-500 shadow-xl shadow-primary/5 hover:shadow-primary/10"
    >
        {children}
    </motion.div>
);

/**
 * TextFallback Helper Component
 */
const TextFallback = ({ title, stats, icon: MainIcon }) => (
    <div className="flex flex-col items-center w-full max-w-sm">
        <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-xl bg-primary/10 text-primary">
                {MainIcon || <Zap size={20} />}
            </div>
            <h4 className="text-xl font-bold text-foreground">{title}</h4>
        </div>
        <div className="grid grid-cols-2 gap-3 md:gap-4 w-full">
            {stats.map((stat, i) => (
                <div key={i} className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-secondary/20 border border-border/40 text-center relative group overflow-hidden hover:bg-secondary/40 transition-colors">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="mb-1 md:mb-2 text-primary/70 group-hover:text-primary transition-colors scale-90 md:scale-100">
                            {stat.icon || <Star size={14} />}
                        </div>
                        <p className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-muted-foreground mb-1">{stat.label}</p>
                        <p className="text-lg md:text-xl font-black text-foreground tabular-nums">{stat.value}</p>
                    </div>
                </div>
            ))}
        </div>
        <motion.a
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/hanikumar0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 text-sm font-bold text-primary hover:text-primary/80 transition-all group"
        >
            <Github size={18} className="group-hover:rotate-12 transition-transform" />
            <span>Explore Full Profile</span>
        </motion.a>
    </div>
);

/**
 * Main Component
 */
export const GitHubStatsSection = () => {
    const [liveStats, setLiveStats] = useState(null);
    const [events, setEvents] = useState(null);
    const [loading, setLoading] = useState(true);
    const [imageErrors, setImageErrors] = useState({
        stats: false,
        langs: false,
        streak: false,
    });
    const [useMirrors, setUseMirrors] = useState({
        stats: false,
        langs: false,
    });

    useEffect(() => {
        let isMounted = true;
        const loadAllData = async () => {
            try {
                const [statsData, eventsData] = await Promise.all([
                    fetchUserStats('hanikumar0'),
                    fetchUserEvents('hanikumar0')
                ]);

                if (isMounted) {
                    if (statsData) setLiveStats(statsData);
                    if (eventsData) setEvents(eventsData);
                }
            } catch (err) {
                console.error("GitHub Data fetch failed:", err);
            } finally {
                if (isMounted) setLoading(false);
            }
        };
        loadAllData();
        return () => { isMounted = false; };
    }, []);

    const handleImageError = (type) => {
        if (!useMirrors[type] && (type === 'stats' || type === 'langs')) {
            setUseMirrors(prev => ({ ...prev, [type]: true }));
        } else {
            setImageErrors(prev => ({ ...prev, [type]: true }));
        }
    };

    const statsBaseUrl = useMirrors.stats
        ? "https://github-readme-stats-one.vercel.app/api"
        : "https://github-readme-stats.vercel.app/api";

    const langsBaseUrl = useMirrors.langs
        ? "https://github-readme-stats-one.vercel.app/api/top-langs/"
        : "https://github-readme-stats.vercel.app/api/top-langs/";

    return (
        <section className="py-24 px-4 bg-background relative overflow-hidden transition-colors duration-500">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 border border-primary/20">
                        <Github size={16} />
                        <span>OPEN SOURCE METRICS</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">
                        Platform <span className="text-gradient">Activity</span>
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
                        A real-time snapshot of my coding journey and contributions to the open-source community.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    {/* Primary Stats Card */}
                    <StatCard delay={0} animateX={-30}>
                        {loading ? (
                            <div className="flex flex-col items-center gap-4">
                                <div className="h-10 w-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                                <p className="text-sm font-bold text-muted-foreground animate-pulse">SYNCING PROFILE...</p>
                            </div>
                        ) : liveStats ? (
                            <TextFallback
                                title="Live Profile Data"
                                icon={<Users size={20} />}
                                stats={[
                                    { label: "Repos", value: liveStats.public_repos, icon: <Code2 size={16} /> },
                                    { label: "Followers", value: liveStats.followers, icon: <Users size={16} /> },
                                    { label: "Gists", value: liveStats.public_gists, icon: <GitFork size={16} /> },
                                    { label: "Account", value: "Verified", icon: <Star size={16} /> }
                                ]}
                            />
                        ) : !imageErrors.stats ? (
                            <img
                                src={`${statsBaseUrl}?username=hanikumar0&show_icons=true&theme=transparent&hide_border=true&title_color=8b5cf6&text_color=94a3b8&icon_color=8b5cf6&hide_rank=false&count_private=true&cache_seconds=1800`}
                                alt="GitHub Stats"
                                onError={() => handleImageError('stats')}
                                className="w-full max-w-md filter drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                            />
                        ) : (
                            <TextFallback
                                title="Platform Highlights"
                                stats={[
                                    { label: "Stars", value: "10+", icon: <Star size={16} /> },
                                    { label: "Commits", value: "500+", icon: <Github size={16} /> },
                                    { label: "Repos", value: "16", icon: <Code2 size={16} /> },
                                    { label: "Activity", value: "High", icon: <Zap size={16} /> }
                                ]}
                            />
                        )}
                    </StatCard>

                    {/* Tech Stack Card */}
                    <StatCard delay={0.1} animateX={30}>
                        {loading ? (
                            <div className="flex flex-col items-center gap-4">
                                <div className="h-10 w-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                                <p className="text-sm font-bold text-muted-foreground animate-pulse">ANALYZING STACK...</p>
                            </div>
                        ) : !imageErrors.langs ? (
                            <img
                                src={`${langsBaseUrl}?username=hanikumar0&layout=compact&theme=transparent&hide_border=true&title_color=8b5cf6&text_color=94a3b8&langs_count=8&cache_seconds=1800&hide=Jupyter%20Notebook,HTML,CSS`}
                                alt="Top Languages"
                                onError={() => handleImageError('langs')}
                                className="w-full max-w-sm filter drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                            />
                        ) : (
                            <TextFallback
                                title="Core Technologies"
                                icon={<Code2 size={20} />}
                                stats={[
                                    { label: "Frontend", value: "React & JS" },
                                    { label: "Mobile", value: "Native" },
                                    { label: "Server", value: "Node.js" },
                                    { label: "Design", value: "Modern" }
                                ]}
                            />
                        )}
                    </StatCard>
                </div>

                {/* Activity & Streak Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-8 bg-card/40 backdrop-blur-md p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] border border-border/50 overflow-hidden min-h-[180px] md:min-h-[220px] transition-all duration-500 flex flex-col items-center justify-center shadow-2xl shadow-primary/5"
                >
                    {!imageErrors.streak ? (
                        <div className="relative w-full flex flex-col items-center">
                            <img
                                src="https://github-readme-streak-stats.herokuapp.com/?user=hanikumar0&theme=transparent&hide_border=true&stroke=8b5cf6&ring=8b5cf6&fire=8b5cf6&currStreakLabel=8b5cf6&sideLabels=94a3b8&dates=94a3b8"
                                alt="Contribution Streak"
                                onError={() => handleImageError('streak')}
                                className="w-full max-w-4xl filter drop-shadow-2xl hover:scale-[1.01] transition-transform duration-500 scale-95 md:scale-100"
                            />
                        </div>
                    ) : (
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full max-w-4xl py-4 md:py-6">
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl md:text-3xl font-black text-foreground mb-3">Commitment to Growth</h3>
                                <p className="text-muted-foreground text-base md:text-lg max-w-md">
                                    I consistently ship code, resolve issues, and build meaningful projects every single week.
                                </p>
                            </div>

                            {events && (
                                <div className="grid grid-cols-2 gap-3 md:gap-4">
                                    <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-primary/10 border border-primary/20 text-center">
                                        <div className="flex justify-center mb-1 md:mb-2 text-primary">
                                            <Activity size={20} md:size={24} />
                                        </div>
                                        <p className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase mb-1">Recent Acts</p>
                                        <p className="text-2xl md:text-3xl font-black text-foreground">{events.recentActivity}</p>
                                    </div>
                                    <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-secondary/30 border border-border/40 text-center">
                                        <div className="flex justify-center mb-1 md:mb-2 text-primary">
                                            <Calendar size={20} md:size={24} />
                                        </div>
                                        <p className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase mb-1">Latest Repo</p>
                                        <p className="text-xs md:text-sm font-bold text-foreground overflow-hidden text-ellipsis whitespace-nowrap max-w-[80px] md:max-w-[100px]">{events.latestRepo}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </motion.div>

                <p className="text-center mt-8 text-sm text-muted-foreground flex items-center justify-center gap-2 font-medium opacity-60">
                    <Github size={14} /> Powering insights with the Secure GitHub Graph API (v3)
                </p>
            </div>
        </section>
    );
};
