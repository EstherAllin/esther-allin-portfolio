export default function Experience() {
  return (
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
                "Harbor Plaza Storage — Concept Redesign — An independent redesign concept focused on responsive layouts, clearer navigation, mobile usability, and a simpler customer journey. This project was not commissioned by or affiliated with Harbor Plaza Storage.",
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
  );
}