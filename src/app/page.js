import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import WorkSection from "./components/WorkSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col dark:bg-[#18181b] bg-[#60a5fa]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4 dark:bg-[#262626] shadow-xl">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <WorkSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
