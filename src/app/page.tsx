import Navbar from "./components/Navbar";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import FeaturedWork from "./components/FeaturedWork";
import Hero from "../components/Hero";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Esther Allin",
  jobTitle: "Frontend Developer",
  description:
    "Frontend developer with a marketing background focused on accessibility, UX, SEO, and performance.",
  email: "mailto:esther.allin@echoeffect.net",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kitchener",
    addressRegion: "Ontario",
    addressCountry: "Canada",
  },
  sameAs: [
    "https://www.linkedin.com/in/esther-allin-271a7b91/",
    "https://github.com/EstherAllin",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      {/* Sticky Navigation */}
      <Navbar />
      <main id="main-content" className="bg-slate-950 min-h-screen overflow-x-hidden">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Current Role Callout */}
        <Experience />

        {/* Featured Work Section */}
        <FeaturedWork />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <footer className="border-t border-slate-800 px-6 py-8">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>Built with Next.js • TypeScript • Tailwind CSS • Deployed on Vercel</p>
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/esther-allin-271a7b91/"
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-button rounded-sm hover:text-slate-400 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/EstherAllin"
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-button rounded-sm hover:text-slate-400 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
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
