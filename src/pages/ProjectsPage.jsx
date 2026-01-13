import { PageLayout } from "../components/PageLayout";
import { ProjectsSection } from "../components/ProjectsSection";
import { GitHubStatsSection } from "../components/GitHubStatsSection";

export const ProjectsPage = () => {
    return (
        <PageLayout>
            <div className="pt-20">
                <ProjectsSection />
                <GitHubStatsSection />
            </div>
        </PageLayout>
    );
};
