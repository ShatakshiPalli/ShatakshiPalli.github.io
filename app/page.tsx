import Navigation from "./components/navigation"
import Hero from "./components/hero"
import About from "./components/about"
import Skills from "./components/skills"
import Projects from "./components/projects"
import Hackathons from "./components/hackathons"
import Contact from "./components/contact"
import Footer from "./components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <About />
      <Skills />
      <Projects />
      <Hackathons />
      <Contact />
      <Footer />
    </main>
  )
}

