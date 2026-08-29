import useSwipeNavigation from "./hooks/useSwipeNavigation.js";
import { SECTION_IDS } from "./site.js";
import Starfield from "./components/Starfield.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Work from "./components/Work.jsx";
import Services from "./components/Services.jsx";
import Skills from "./components/Skills.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import DotsNav from "./components/DotsNav.jsx";

export default function App() {
  const { index } = useSwipeNavigation(SECTION_IDS);

  return (
    <div className="relative min-h-screen text-white">
      <Starfield />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Work />
        <Services />
        <Skills />
        <About />
        <Contact />
        <Footer />
      </main>
      <DotsNav sections={SECTION_IDS} current={index} />
    </div>
  );
}