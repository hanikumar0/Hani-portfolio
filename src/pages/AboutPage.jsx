import { PageLayout } from "../components/PageLayout";
import { AboutSection } from "../components/AboutSection";
import { ExperienceSection } from "../components/ExperienceSection";

export const AboutPage = () => {
    return (
        <PageLayout>
            <div className="pt-20">
                <AboutSection />
                <ExperienceSection />
            </div>
        </PageLayout>
    );
};
