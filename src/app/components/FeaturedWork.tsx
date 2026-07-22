import Image from "next/image";

export default function FeaturedWork() {
  const projects = [
    {
      label: "Concept Redesign",
      title: "Harbor Plaza Storage",
      description:
        "An independent redesign concept focused on clearer navigation, mobile usability, accessible layouts, and a simpler path from browsing to choosing a storage unit.",
      focus: "UX strategy, responsive development, accessibility",
      tags: ["Next.js", "Tailwind CSS", "Vercel"],
      image: "/images/people/esther-hero.webp.png",
      alt: "Harbor Plaza Storage website screenshot",
      primaryText: "View Concept",
      primaryHref: "#",
      githubHref: "#",
      note: "Independent concept project. Not commissioned by or affiliated with Harbor Plaza Storage.",
    },
    {
      label: "Personal Brand",
      title: "ValaShibbs Creator Site",
      description:
        "A responsive personal brand website designed for a content creator, balancing personality, usability, custom branding, and performance across screen sizes.",
      focus: "Brand expression, component design, responsive UI",
      tags: ["Next.js", "Tailwind CSS", "React", "Vercel"],
      image: "/images/people/esther-hero.webp.png",
      alt: "ValaShibbs creator site screenshot",
      primaryText: "View Project",
      primaryHref: "#",
      githubHref: "#",
    },
    {
      label: "Portfolio",
      title: "Esther Allin Portfolio",
      description:
        "A developer portfolio built to present frontend work, marketing experience, technical decisions, accessibility improvements, and an evolving development process.",
      focus: "Next.js architecture, accessibility, deployment",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "GitHub", "Vercel"],
      image: "/images/people/esther-hero.webp.png",
      alt: "Esther Allin developer portfolio screenshot",
      primaryText: "View Project",
      primaryHref: "#",
      githubHref: "https://github.com/estherallin/developer-portfolio",
    },
  ];

  return (
    <section id="featured-work" className="scroll-mt-14 px-6 py-24 md:py-32">
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

        <div className="space-y-16 md:space-y-20">
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <article
                key={project.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch"
              >
                <div
                  className={`${isReversed ? "lg:order-2 lg:col-span-7" : "lg:col-span-7"} relative aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-2xl bg-slate-900 border border-slate-800`}
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                </div>

                <div
                  className={`${isReversed ? "lg:order-1 lg:col-span-5" : "lg:col-span-5"} flex flex-col justify-center rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple-400 mb-3">
                    {project.label}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <p className="text-sm text-slate-300 mb-5">
                    <span className="text-slate-200 font-medium">Focus:</span>{" "}
                    {project.focus}
                  </p>

                  {project.note ? (
                    <p className="mb-5 rounded-lg border border-purple-400/25 bg-purple-400/10 px-3 py-2 text-sm text-purple-200">
                      {project.note}
                    </p>
                  ) : null}

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium text-slate-400 bg-slate-800 border border-slate-700 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={project.primaryHref}
                      className="inline-flex min-h-11 items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-purple-600 hover:bg-purple-500 rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                    >
                      {project.primaryText}
                    </a>
                    <a
                      href={project.githubHref}
                      target={project.githubHref.startsWith("http") ? "_blank" : undefined}
                      rel={project.githubHref.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex min-h-11 items-center justify-center px-5 py-2.5 text-sm font-medium text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}