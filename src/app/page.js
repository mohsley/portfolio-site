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
import Script from "next/script";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col dark:bg-[#18181b] bg-[#FFFFFF] ">
      <Navbar />
      <div className="container md:mt-10 mt-20 mx-auto px-12 py-4 dark:bg-[#262626] bg-[#DADDE2] shadow-xl">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <WorkSection />
        {/* <SkillsSection /> */}
        <ProjectsSection />
        <ResearchSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
