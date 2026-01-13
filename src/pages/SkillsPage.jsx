import { PageLayout } from "../components/PageLayout";
import { SkillsSection } from "../components/SkillsSection";
import { SkillSphere } from "../components/SkillSphere";
import { motion } from "framer-motion";

export const SkillsPage = () => {
    return (
        <PageLayout>
            <div className="pt-24 min-h-screen">
                <div className="container mx-auto max-w-6xl px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center pt-24"
                    >
                        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter">
                            Technical <span className="text-gradient">Universe</span>
                        </h1>
                        <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
                            Spin the globe to explore the core technologies powering my high-performance systems and modern mobile experiences.
                        </p>
                    </motion.div>

                    <SkillSphere />
                </div>

                <SkillsSection />
            </div>
        </PageLayout>
    );
};
