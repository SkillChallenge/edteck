import { Navbar } from "../pages/components/navbar"
import { Hero } from "../pages/components/landingpage"
import { About } from "../pages/components/aboutpage"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
      </main>
    </>
  )
}

