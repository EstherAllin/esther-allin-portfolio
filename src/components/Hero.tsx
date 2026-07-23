import Image from "next/image";

export default function Hero() {
  return (
    <section className="fade-in-section min-h-[75vh] px-6 pt-24 pb-14 md:pt-28 md:pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div className="relative z-20 text-left">
            <span className="inline-block mb-6 px-3 py-1 text-sm font-medium text-purple-400 bg-purple-400/10 rounded-full">
              Available for Work
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05] mb-6 max-w-[18ch]">
              Websites shouldn&apos;t frustrate people.
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-[52ch]">
              I&apos;m{" "}
              <strong className="text-slate-200 font-semibold">Esther Allin</strong>{" "}
              — I help businesses turn UX, SEO, and frontend development into
              websites that convert.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Core strengths">
              {[
                "Accessibility-first",
                "SEO-led",
                "Performance-focused",
                "Case-study driven",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-300"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <a
                href="#featured-work"
                className="interactive-button inline-flex min-h-11 items-center justify-center px-6 py-3 text-sm font-medium text-white bg-purple-600 hover:bg-purple-500 rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                See My Work
              </a>
              <a
                href="#contact"
                className="interactive-button inline-flex min-h-11 items-center justify-center px-6 py-3 text-sm font-medium text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="group w-full md:-ml-40 md:-mr-12 md:z-0">
            <div className="relative overflow-hidden">
              <Image
                src="/images/people/esther-hero.webp.png"
                alt="Esther Allin portrait"
                width={900}
                height={1125}
                priority
                className="interactive-image w-[105%] h-auto object-contain object-[50%_center]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to left, rgba(2,6,23,0) 50%, rgba(2,6,23,0.42) 76%, rgba(2,6,23,0.9) 100%), linear-gradient(to top, rgba(2,6,23,0.35) 0%, rgba(2,6,23,0.12) 32%, rgba(2,6,23,0) 42%)",
                }}
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-slate-950/55 blur-xl"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute left-0 top-0 h-56 w-44 bg-slate-950/85 blur-3xl"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(58% 52% at 0% 0%, rgba(2,6,23,0.55) 0%, rgba(2,6,23,0.28) 42%, rgba(2,6,23,0) 72%)",
                }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}