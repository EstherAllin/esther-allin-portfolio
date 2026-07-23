import BeforeAfterSlider from './BeforeAfterSlider';

export default function FeaturedWork() {
  const projects = [
    {
      label: "Concept Redesign",
      title: "Harbor Plaza Storage",
      beforeAfterImages: {
        before: "/images/projects/People/HarborPlaza Before.png",
        after: "/images/projects/People/HarborPlaza After.png",
      },
      problem:
        "The existing journey made it harder for visitors to compare unit options quickly, especially on mobile, and key calls to action were buried below competing content.",
      built:
        "I created an independent redesign concept with a cleaner information hierarchy, simplified navigation patterns, and a faster path from first click to unit inquiry.",
      learned:
        "I learned that even small IA changes, like reducing menu depth and clarifying CTA labels, can have an outsized impact on how confident users feel while making decisions.",
      outcome:
        "Produced a clearer mobile-first flow and a stronger inquiry path that reduced decision friction in the concept journey.",
      tags: ["Next.js", "Tailwind CSS", "Vercel"],
      note: "Independent concept project. Not commissioned by or affiliated with Harbor Plaza Storage.",
    },
    {
      label: "Personal Brand",
      title: "ValaShibbs Creator Site",
      problem:
        "The creator needed a site that felt personal and on-brand without sacrificing speed, clarity, or usability on smaller screens where most visitors landed.",
      built:
        "I built a responsive brand site with reusable UI components, a stronger content flow, and visual storytelling that still keeps navigation and conversion points clear.",
      learned:
        "I learned how to balance expressive design with practical UX rules so personality supports the content instead of distracting from it.",
      outcome:
        "Delivered a cleaner brand narrative with improved readability and interaction clarity across mobile and desktop breakpoints.",
      tags: ["Next.js", "Tailwind CSS", "React", "Vercel"],
      primaryText: "View Project",
      primaryHref: "mailto:esther.allin@echoeffect.net?subject=ValaShibbs%20Creator%20Site",
      githubHref: "",
    },
    {
      label: "Portfolio",
      title: "Esther Allin Portfolio",
      problem:
        "Most portfolios explain tools but not decision-making, so it can be hard for recruiters to see how strategy, UX thinking, and implementation connect.",
      built:
        "I built this portfolio as a case-study-first experience that highlights problems, solutions, technologies, and outcomes instead of only listing features.",
      learned:
        "I learned that showing reasoning and tradeoffs creates a stronger signal than listing deliverables alone, especially for product-minded frontend roles.",
      outcome:
        "Created a portfolio structure that surfaces decision-making, accessibility intent, and technical depth faster for hiring reviewers.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "GitHub", "Vercel"],
      primaryText: "View Project",
      primaryHref: "#",
      githubHref: "https://github.com/estherallin/developer-portfolio",
    },
  ];

  return (
    <section id="featured-work" className="fade-in-section scroll-mt-14 px-6 pt-14 pb-24 md:pt-16 md:pb-32">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-14 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Selected work showing how I combine frontend development, UX
            thinking, and digital strategy to build clearer, more useful web
            experiences.
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {projects.map((project) => {
            return (
              <article
                key={project.title}
                className="interactive-card rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8"
              >
                  {'beforeAfterImages' in project && project.beforeAfterImages ? (
                    <BeforeAfterSlider
                      before={project.beforeAfterImages.before}
                      after={project.beforeAfterImages.after}
                    />
                  ) : null}
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple-400 mb-3">
                    {project.label}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                    {project.title}
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-200 mb-1">
                        What was the problem?
                      </h4>
                      <p className="text-slate-400 leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-200 mb-1">
                        What did you build?
                      </h4>
                      <p className="text-slate-400 leading-relaxed">{project.built}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-200 mb-1">
                        What technologies did you use?
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-medium text-slate-300 bg-slate-800 border border-slate-700 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-200 mb-1">
                        What did you learn?
                      </h4>
                      <p className="text-slate-400 leading-relaxed">{project.learned}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-200 mb-1">
                        Outcome
                      </h4>
                      <p className="text-slate-300 leading-relaxed">{project.outcome}</p>
                    </div>
                  </div>

                  {project.note ? (
                    <p className="mb-5 rounded-lg border border-purple-400/25 bg-purple-400/10 px-3 py-2 text-sm text-purple-200">
                      {project.note}
                    </p>
                  ) : null}

                  <div className="flex flex-col sm:flex-row gap-3">
                    {'primaryHref' in project ? (
                    <a
                      href={project.primaryHref}
                      target={project.primaryHref.startsWith("http") ? "_blank" : undefined}
                      rel={project.primaryHref.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="interactive-button inline-flex min-h-11 items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-purple-600 hover:bg-purple-500 rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                    >
                      {project.primaryText}
                    </a>
                    ) : null}
                    {'githubHref' in project ? (
                      project.githubHref ? (
                      <a
                        href={project.githubHref}
                        target={project.githubHref.startsWith("http") ? "_blank" : undefined}
                        rel={project.githubHref.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="interactive-button inline-flex min-h-11 items-center justify-center px-5 py-2.5 text-sm font-medium text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                      >
                        GitHub
                      </a>
                    ) : (
                      <span
                        aria-disabled="true"
                        className="inline-flex min-h-11 items-center justify-center px-5 py-2.5 text-sm font-medium text-slate-500 border border-slate-800 rounded-full cursor-not-allowed"
                      >
                        GitHub (Private)
                      </span>
                    )) : null}
                  </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}