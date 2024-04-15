import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import WorkSection from "./components/WorkSection";
import ProjectsSection from "./components/ProjectsSection";
import ResearchSection from "./components/ResearchSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col dark:bg-[#18181b] bg-[#57534e]">
      <Navbar />
      <div className="container md:mt-10 mt-20 mx-auto px-12 py-4 dark:bg-[#262626] bg-[#a8a29e] shadow-xl">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <WorkSection />
        <ProjectsSection />
        <ResearchSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
