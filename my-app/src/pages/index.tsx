import { Navbar } from "../pages/components/navbar"
import { Hero } from "../pages/components/landingpage"
import { About } from "../pages/components/aboutpage"
import { StatsSection } from "./components/stats-section"
import { SkillsSection } from "./components/skills-section"
import ChallengesSection from "./components/challenges-section"
import BenefitsSection from "./components/benefits-section"


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
        
      </main>
    </>
  )
}

