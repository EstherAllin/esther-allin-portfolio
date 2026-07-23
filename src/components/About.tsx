export default function About() {
  const categories = {
    Development: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GitHub",
      "Vercel",
    ],
    Strategy: [
      "SEO",
      "Content Strategy",
      "Analytics",
      "UX Thinking",
      "Accessibility",
      "Performance",
    ],
    Collaboration: [
      "Client Communication",
      "Project Planning",
      "Problem Solving",
      "Iteration",
    ],
  };

  return (
    <section id="about" className="fade-in-section -mt-12 md:-mt-16 scroll-mt-14 border-t border-slate-800/50 px-6 pt-8 pb-24 md:pt-10 md:pb-32">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          About Me
        </h2>
        <div
          className="mx-auto mb-8 h-px w-28 bg-gradient-to-r from-transparent via-purple-400/70 to-transparent"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-3xl">
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

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
          {Object.entries(categories).map(([group, items]) => (
            <div
              key={group}
              className="interactive-card rounded-2xl border border-slate-800 bg-slate-900/45 p-5"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-purple-300 mb-4">
                {group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}