export default function Contact() {
  return (
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
  );
}