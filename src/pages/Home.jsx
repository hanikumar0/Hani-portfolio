import React, { Suspense, lazy } from "react";
import { PageLayout } from "../components/PageLayout";
import { HeroSection } from "../components/HeroSection";
import { Marquee } from "../components/Marquee";

// Optimized code-splitting for named exports
const ProjectsSection = lazy(() => import("../components/ProjectsSection").then(m => ({ default: m.ProjectsSection })));
const GitHubStatsSection = lazy(() => import("../components/GitHubStatsSection").then(m => ({ default: m.GitHubStatsSection })));
const PhilosophySection = lazy(() => import("../components/PhilosophySection").then(m => ({ default: m.PhilosophySection })));
const ExperienceSection = lazy(() => import("../components/ExperienceSection").then(m => ({ default: m.ExperienceSection })));


export const Home = () => {
  return (
    <PageLayout>
      <HeroSection />

      <Marquee
        items={["Performance", "Scalability", "System Design", "Sub-100ms", "Fault Tolerant", "Production Ready"]}
        speed={25}
      />

      <Suspense fallback={<div className="py-20 flex items-center justify-center"><div className="w-10 h-10 border-4 border-canva-purple/20 border-t-canva-purple rounded-full animate-spin" /></div>}>
        <PhilosophySection />
        <ExperienceSection />
        <ProjectsSection />
        <GitHubStatsSection />
      </Suspense>

      <Marquee
        items={["MERN Stack", "React Native", "Next.js", "TypeScript", "Node.js", "MongoDB"]}
        speed={30}
        direction={-1}
      />
    </PageLayout>
  );
};