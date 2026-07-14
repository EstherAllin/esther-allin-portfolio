export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-center gap-8 h-14">
          {[
            { label: "About", href: "#about" },
            { label: "Skills", href: "#skills" },
            { label: "Featured Work", href: "#featured-work" },
            { label: "Experience", href: "#experience" },
            { label: "Contact", href: "#contact" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-screen px-6 pt-14">
        <div className="text-center max-w-3xl">
          {/* Purple label */}
          <span className="inline-block mb-4 px-3 py-1 text-sm font-medium text-purple-400 bg-purple-400/10 rounded-full">
            Developer Portfolio
          </span>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
            Esther Allin
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
            Building modern websites with a focus on user experience,
            performance, and business goals.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-24 md:py-32">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-6">
            I build modern websites using Next.js, React, Tailwind CSS, GitHub,
            and Vercel. My background in digital marketing gives me a strong
            understanding of user experience, SEO, content strategy, and
            business goals, allowing me to approach web development with both
            technical and strategic thinking.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed">
            Through professional work, personal projects, and continuous
            learning, I have developed experience creating responsive websites,
            improving usability, and building digital experiences that balance
            performance, functionality, and design.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 py-24 md:py-32">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
            Skills
          </h2>
          <div className="space-y-8">
            {/* Development */}
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-4">
                Development
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "JavaScript",
                  "Tailwind CSS",
                  "HTML",
                  "CSS",
                  "Git",
                  "GitHub",
                  "Vercel",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-medium text-purple-300 bg-purple-400/10 border border-purple-400/20 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            {/* Strategy & Marketing */}
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-4">
                Strategy &amp; Marketing
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["SEO", "Analytics", "Content Strategy"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-medium text-purple-300 bg-purple-400/10 border border-purple-400/20 rounded-full"
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
      <section id="featured-work" className="px-6 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Work
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Projects that demonstrate my experience building responsive
              websites, improving user experience, and applying modern web
              development practices.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="flex flex-col bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-purple-400/40 hover:bg-slate-800/60 transition-colors duration-200">
              <h3 className="text-xl font-semibold text-white mb-3">
                Harbor Plaza Storage Redesign
              </h3>
              <p className="text-slate-400 leading-relaxed flex-1">
                A storage facility website redesign focused on improving
                conversion, trust signals, information architecture, user
                experience, and mobile responsiveness.
              </p>
              <a
                href="#"
                className="mt-6 inline-block text-center px-4 py-2 text-sm font-medium text-purple-300 border border-purple-400/30 rounded-full hover:bg-purple-400/10 transition-colors duration-200"
              >
                View Details
              </a>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-purple-400/40 hover:bg-slate-800/60 transition-colors duration-200">
              <h3 className="text-xl font-semibold text-white mb-3">
                ValaShibbs Creator Site
              </h3>
              <p className="text-slate-400 leading-relaxed flex-1">
                A personal brand website built using Next.js, React, Tailwind
                CSS, GitHub, and Vercel, focused on responsive design, content
                organization, and strong visual identity.
              </p>
              <a
                href="#"
                className="mt-6 inline-block text-center px-4 py-2 text-sm font-medium text-purple-300 border border-purple-400/30 rounded-full hover:bg-purple-400/10 transition-colors duration-200"
              >
                View Details
              </a>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-purple-400/40 hover:bg-slate-800/60 transition-colors duration-200">
              <h3 className="text-xl font-semibold text-white mb-3">
                Echo Effect Marketing Work
              </h3>
              <p className="text-slate-400 leading-relaxed flex-1">
                Marketing and web-focused work involving content strategy, SEO,
                analytics, social media planning, website optimization, and
                digital brand growth.
              </p>
              <a
                href="#"
                className="mt-6 inline-block text-center px-4 py-2 text-sm font-medium text-purple-300 border border-purple-400/30 rounded-full hover:bg-purple-400/10 transition-colors duration-200"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="px-6 py-24 md:py-32">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Experience
            </h2>
            <p className="text-lg text-slate-400">
              Professional experience and hands-on projects focused on modern
              web development, user experience, responsive design, and digital
              strategy.
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
                  "Content strategy and planning",
                  "Social media management",
                  "SEO and analytics",
                  "Website updates and optimization",
                  "Client-focused marketing initiatives",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-400">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
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
                  "Building websites using Next.js, React, and Tailwind CSS",
                  "GitHub version control workflows",
                  "Vercel deployments and hosting",
                  "Responsive design and user experience improvements",
                  "AI-assisted development using GitHub Copilot",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-400">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-24 md:py-32">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact
          </h2>
          <p className="text-lg text-slate-400 mb-12">
            I&apos;m always interested in opportunities to learn, collaborate,
            and build. Feel free to reach out.
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

          {/* Social buttons */}
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="px-6 py-2.5 text-sm font-medium text-purple-300 border border-purple-400/30 rounded-full hover:bg-purple-400/10 transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="px-6 py-2.5 text-sm font-medium text-purple-300 border border-purple-400/30 rounded-full hover:bg-purple-400/10 transition-colors duration-200"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
