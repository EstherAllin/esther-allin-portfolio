import Navbar from "./components/Navbar";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import FeaturedWork from "./components/FeaturedWork";
import Hero from "../components/Hero";
import HowIBuild from "../components/HowIBuild";

export default function Home() {
  return (
    <>
      {/* Sticky Navigation */}
      <Navbar />
      <main className="bg-slate-950 min-h-screen overflow-x-hidden">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* How I Build Section */}
        <HowIBuild />

        {/* Featured Work Section */}
        <FeaturedWork />

        {/* Experience Section */}
        <Experience />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <footer className="border-t border-slate-800 px-6 py-8">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>© 2026 Esther Allin</p>
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/esther-allin-271a7b91/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-400 transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/EstherAllin"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-400 transition-colors duration-200"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
