import { PageLayout } from "../components/PageLayout";
import { HeroSection } from "../components/HeroSection";
import { Marquee } from "../components/Marquee";
import { ProjectsSection } from "../components/ProjectsSection";
import { GitHubStatsSection } from "../components/GitHubStatsSection";
import { PhilosophySection } from "../components/PhilosophySection";

export const Home = () => {
  return (
    <PageLayout>
      <HeroSection />

      <Marquee
        items={["Performance", "Scalability", "System Design", "Sub-100ms", "Fault Tolerant", "Production Ready"]}
        speed={25}
      />

      <PhilosophySection />

      <ProjectsSection />
      <GitHubStatsSection />

      <Marquee
        items={["MERN Stack", "React Native", "Next.js", "TypeScript", "Node.js", "MongoDB"]}
        speed={30}
        direction={-1}
      />
    </PageLayout>
  );
};