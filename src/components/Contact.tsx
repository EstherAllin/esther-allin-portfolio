export default function Contact() {
  return (
    <section id="contact" className="fade-in-section scroll-mt-14 px-6 py-14 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="interactive-card rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Ready to build something?
            </h2>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-300">
              <a
                href="mailto:esther.allin@echoeffect.net"
                className="hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 rounded-sm"
              >
                Email
              </a>
              <span className="text-slate-600" aria-hidden="true">•</span>
              <a
                href="https://www.linkedin.com/in/esther-allin-271a7b91/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 rounded-sm"
              >
                LinkedIn
              </a>
              <span className="text-slate-600" aria-hidden="true">•</span>
              <a
                href="https://github.com/EstherAllin"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 rounded-sm"
              >
                GitHub
              </a>
            </div>
          </div>

          <a
            href="mailto:esther.allin@echoeffect.net"
            className="interactive-button inline-flex min-h-11 items-center justify-center rounded-full bg-purple-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Let&apos;s talk →
          </a>
        </div>
      </div>
    </section>
  );
}