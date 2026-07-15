import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      {/* Sticky Navigation */}
      <Navbar />
      <main className="bg-slate-950 min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-screen px-6 pt-14">
        <div className="text-center max-w-3xl">
          {/* Purple label */}
          <span className="inline-block mb-6 px-3 py-1 text-sm font-medium text-purple-400 bg-purple-400/10 rounded-full">
            Available for Work
          </span>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            Websites shouldn&apos;t frustrate people.
          </h1>

          {/* Name + role */}
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
            I&apos;m{" "}
            <strong className="text-slate-200 font-semibold">Esther Allin</strong>{" "}
            — a frontend developer who came from marketing and builds for real
            users.
          </p>
          <a
            href="#featured-work"
            className="mt-8 inline-block px-6 py-3 text-sm font-medium text-white bg-purple-600 hover:bg-purple-500 rounded-full transition-colors duration-200"
          >
            See My Work
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-14 border-t border-slate-800/50 px-6 py-24 md:py-32">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-6">
            I spent several years in digital marketing before I started building
            websites myself. What I kept running into was the gap between what a
            site was supposed to do and what it actually delivered — slow pages,
            confusing layouts, content written for search engines instead of
            people.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed">
            So I learned to code — not as a career pivot, just because I
            wanted to actually be able to fix it. The priorities haven&apos;t
            changed: usability, accessibility, and whether someone can actually
            find what they came for.
          </p>
        </div>
      </section>

      {/* How I Build Section */}
      <section id="skills" className="scroll-mt-14 px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How I Build
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              I combine marketing strategy, UX thinking, and modern frontend
              development to build websites that actually perform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Development */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-purple-400/40 hover:bg-slate-800/60 transition-colors duration-200">
              <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-5">
                Development
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Tailwind CSS",
                  "HTML5",
                  "CSS3",
                  "Git",
                  "GitHub",
                  "Vercel",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium text-purple-300 bg-purple-400/10 border border-purple-400/20 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Digital Strategy */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-purple-400/40 hover:bg-slate-800/60 transition-colors duration-200">
              <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-5">
                Digital Strategy
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "SEO",
                  "GEO",
                  "Analytics",
                  "Content Strategy",
                  "Conversion Optimization",
                  "UX Thinking",
                  "Accessibility",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium text-purple-300 bg-purple-400/10 border border-purple-400/20 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Collaboration */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-purple-400/40 hover:bg-slate-800/60 transition-colors duration-200">
              <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-5">
                Collaboration
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Client Communication",
                  "Project Planning",
                  "Problem Solving",
                  "Continuous Learning",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium text-purple-300 bg-purple-400/10 border border-purple-400/20 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="featured-work" className="scroll-mt-14 px-6 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Work
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              A few things I&apos;ve been working on. Full case studies are on
              the way &mdash; but the projects are real.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 — Harbor Plaza Storage */}
            <div className="flex flex-col bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-purple-400/40 hover:bg-slate-800/60 transition-colors duration-200 group">
              <div className="relative w-full aspect-video overflow-hidden bg-slate-800">
                <Image
                  src="/images/projects/harbor-plaza.jpg"
                  alt="Harbor Plaza Storage website screenshot"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Harbor Plaza Storage
                </h3>
                <p className="text-slate-400 leading-relaxed flex-1">
                  Modern self-storage website redesigned using Next.js and
                  Tailwind CSS. Focused on responsive layouts, improved
                  usability, and clearer customer journeys.
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {["Next.js", "Tailwind CSS", "Vercel"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium text-slate-400 bg-slate-800 border border-slate-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-5">
                  <a
                    href="#"
                    className="flex-1 text-center px-4 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-500 rounded-full transition-colors duration-200"
                  >
                    View Live
                  </a>
                  <a
                    href="#"
                    className="flex-1 text-center px-4 py-2 text-sm font-medium text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white rounded-full transition-colors duration-200"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 — ValaShibbs Creator Site */}
            <div className="flex flex-col bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-purple-400/40 hover:bg-slate-800/60 transition-colors duration-200 group">
              <div className="relative w-full aspect-video overflow-hidden bg-slate-800">
                <Image
                  src="/images/projects/valashibbs.jpg"
                  alt="ValaShibbs creator site screenshot"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  ValaShibbs Creator Site
                </h3>
                <p className="text-slate-400 leading-relaxed flex-1">
                  Personal brand website designed for a content creator. Built
                  with reusable components, responsive layouts, and custom
                  branding while balancing personality with performance.
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {["Next.js", "Tailwind CSS", "React", "Vercel"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium text-slate-400 bg-slate-800 border border-slate-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-5">
                  <a
                    href="#"
                    className="flex-1 text-center px-4 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-500 rounded-full transition-colors duration-200"
                  >
                    View Live
                  </a>
                  <a
                    href="#"
                    className="flex-1 text-center px-4 py-2 text-sm font-medium text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white rounded-full transition-colors duration-200"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 — Esther Allin Portfolio */}
            <div className="flex flex-col bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-purple-400/40 hover:bg-slate-800/60 transition-colors duration-200 group">
              <div className="relative w-full aspect-video overflow-hidden bg-slate-800">
                <Image
                  src="/images/projects/portfolio.jpg"
                  alt="Esther Allin developer portfolio screenshot"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Esther Allin Portfolio
                </h3>
                <p className="text-slate-400 leading-relaxed flex-1">
                  Developer portfolio showcasing modern frontend development, Git
                  workflows, responsive design, accessibility improvements, and
                  deployment using Vercel.
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {["Next.js", "TypeScript", "Tailwind CSS", "GitHub", "Vercel"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium text-slate-400 bg-slate-800 border border-slate-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-5">
                  <a
                    href="#"
                    className="flex-1 text-center px-4 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-500 rounded-full transition-colors duration-200"
                  >
                    View Live
                  </a>
                  <a
                    href="https://github.com/estherallin/developer-portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 text-sm font-medium text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white rounded-full transition-colors duration-200"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="scroll-mt-14 px-6 py-24 md:py-32">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Experience
            </h2>
            <p className="text-lg text-slate-400">
              Where I&apos;ve been working and what I&apos;ve been building.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            {/* Experience Card 1 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white">
                  Echo Effect
                </h3>
                <p className="text-sm text-purple-400 mt-1">
                  Digital Marketing &amp; Web Development | 2025 – Present
                </p>
              </div>
              <ul className="space-y-2">
                {[
                  "Content strategy, planning, and copywriting",
                  "Social media management and scheduling",
                  "SEO, keyword research, and analytics reporting",
                  "Website updates, performance fixes, and UX improvements",
                  "Managing client campaigns from brief to delivery",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-400">
                    <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Experience Card 2 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white">
                  Web Development Projects
                </h3>
                <p className="text-sm text-purple-400 mt-1">2025 – Present</p>
              </div>
              <ul className="space-y-2">
                {[
                  "Harbor Plaza Storage — redesigned for improved mobile UX and conversion",
                  "ValaShibbs Creator Site — personal brand site built with Next.js and Tailwind CSS",
                  "Developer portfolio — designed and built from scratch with Next.js and Tailwind CSS",
                  "GitHub version control and Vercel deployments on all projects",
                  "AI-assisted development using GitHub Copilot",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-400">
                    <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-14 px-6 py-24 md:py-32">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact
          </h2>
          <p className="text-lg text-slate-400 mb-12">
            Open to new roles, freelance projects, and conversations that might
            lead somewhere. If you like what you see, get in touch.
          </p>

          {/* Contact card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-8 text-left space-y-4">
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
                Name
              </p>
              <p className="text-white font-medium">Esther Allin</p>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
                Email
              </p>
              <a
                href="mailto:esther.allin@echoeffect.net"
                className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
              >
                esther.allin@echoeffect.net
              </a>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
                Location
              </p>
              <p className="text-white font-medium">Kitchener, Ontario, Canada</p>
            </div>
          </div>

          <a
            href="mailto:esther.allin@echoeffect.net"
            className="inline-block mb-8 px-6 py-3 text-sm font-medium text-white bg-purple-600 hover:bg-purple-500 rounded-full transition-colors duration-200"
          >
            Send me an email
          </a>

          {/* Social buttons */}
          <div className="flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/esther-allin-271a7b91/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 text-sm font-medium text-purple-300 border border-purple-400/30 rounded-full hover:bg-purple-400/10 transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/EstherAllin"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 text-sm font-medium text-purple-300 border border-purple-400/30 rounded-full hover:bg-purple-400/10 transition-colors duration-200"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

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
