import React, { Suspense, lazy } from "react";
import { PageLayout } from "../components/PageLayout";
import { HeroSection } from "../components/HeroSection";
import { Marquee } from "../components/Marquee";

// Optimized code-splitting
const ProjectsSection = lazy(() => import("../components/ProjectsSection"));
const GitHubStatsSection = lazy(() => import("../components/GitHubStatsSection"));
const PhilosophySection = lazy(() => import("../components/PhilosophySection"));

export const Home = () => {
  return (
    <PageLayout>
      <HeroSection />

      <Marquee
        items={["Performance", "Scalability", "System Design", "Sub-100ms", "Fault Tolerant", "Production Ready"]}
        speed={25}
      />

      <Suspense fallback={<div className="h-96 flex items-center justify-center"><div className="w-10 h-10 border-4 border-canva-purple/20 border-t-canva-purple rounded-full animate-spin" /></div>}>
        <PhilosophySection />
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