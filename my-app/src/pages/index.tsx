import { Navbar } from "../pages/components/navbar";
import { Hero } from "../pages/components/landingpage";
import { About } from "../pages/components/aboutpage";
import { StatsSection } from "./components/stats-section";
import { SkillsSection } from "./components/skills-section";
import ChallengesSection from "./components/challenges-section";
import BenefitsSection from "./components/benefits-section";
import Testimonials from "./components/testimonials";
import  GettingStarted  from "./components/getting-started";
import { CTASection } from "./components/cta-section";
import Footer from "./dashComponents/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <StatsSection />
        <SkillsSection />
        <ChallengesSection />
        <BenefitsSection />
        <Testimonials />
        <GettingStarted />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
