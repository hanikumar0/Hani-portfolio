import { PageLayout } from "../components/PageLayout";
import { AboutSection } from "../components/AboutSection";

export const AboutPage = () => {
    return (
        <PageLayout>
            <div className="pt-20">
                <AboutSection />
            </div>
        </PageLayout>
    );
};
