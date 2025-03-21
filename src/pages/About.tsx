
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StorySection from "@/components/about/StorySection";
import MissionSection from "@/components/about/MissionSection";
import TeamSection from "@/components/about/TeamSection";
import HowItWorksSection from "@/components/about/HowItWorksSection";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <StorySection />
        <MissionSection />
        <TeamSection />
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
