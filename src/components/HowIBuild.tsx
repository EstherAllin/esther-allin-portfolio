export default function HowIBuild() {
  return (
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
  );
}