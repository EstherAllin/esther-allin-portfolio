import SectionLabel from "../atoms/SectionLabel";
import { TwitchIcon } from "../atoms/icons";

const tags = ["Variety Games", "Jump Scares", "The Pug Empire", "Rupert Approved", "Horror Nights", "Wine-Fueled"];

const stats = [
  { label: "Main platform", value: "Twitch" },
  { label: "Game range", value: "Everything" },
  { label: "Vibe", value: "Feral Energy" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-[linear-gradient(to_bottom,transparent_0%,#111827_15%,#111827_100%)] px-6 py-20">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-16 -left-16 h-[520px] w-[520px] glow-indigo" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-[420px] w-[420px] glow-fuchsia" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="relative flex flex-col items-center md:block">
          {/* Avatar — absolutely positioned on desktop, normal flow on mobile */}
          <div className="relative mb-6 flex h-80 w-80 flex-shrink-0 items-center justify-center md:absolute md:-top-24 md:left-8 md:mb-0 md:h-96 md:w-96">
            {/* Soft branded glow behind logo */}
            <div className="pointer-events-none absolute h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(25,227,255,0.04)_0%,rgba(123,63,242,0.02)_50%,transparent_100%)] md:h-56 md:w-56" />
            <img
              src="/images/ALPHA_NOTEXT.png"
              alt="ValaShibbs"
              className="relative h-full w-full object-contain drop-shadow-[0_0_24px_rgba(25,227,255,0.35)]"
            />
          </div>

          {/* Text — offset right on desktop to clear the avatar */}
          <div className="flex max-w-xl flex-col gap-5 text-center md:ml-[22rem] md:text-left">
            <div className="flex justify-center md:justify-start">
              <SectionLabel label="About" accent="purple" />
            </div>
            <h2 className="text-3xl font-black leading-tight text-[#C8CDD5] sm:text-4xl">
              The Scream Behind the Stream
            </h2>
            <p className="text-lg font-medium italic text-[#FF2D95]/60 tracking-wide">
              Sarcastic. Slightly feral. Screaming at horror games like it&apos;s cardio.
            </p>
            <p className="max-w-lg text-base leading-relaxed text-zinc-400">
              I&apos;m <span className="font-semibold text-[#E5E7EB]">ValaShibbs</span> — a variety streamer,
              so we play a bit of everything. Indie games, shooters, city builders, crafting games,
              RPGs, MMOs, and whatever else feels like a good idea at the time. Horror is a big part
              of the vibe, but it&apos;s definitely not the whole story.
            </p>
            <p className="max-w-lg text-base leading-relaxed text-zinc-400">
              My community can trigger jump scares during stream, so even the calm games don&apos;t
              stay calm for long. And when I&apos;m not getting wrecked by bad decisions and worse
              timing, I&apos;m hanging out with{" "}
              <a
                href="https://www.pugempire.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#FF2D95] underline decoration-[#FF2D95]/30 underline-offset-2 hover:text-[#FF2D95]/80"
              >The Pug Empire</a>{" "}
              — our gloriously chaotic misfit crew, proudly repped by Rupert.
            </p>
            <p className="max-w-lg text-base leading-relaxed text-zinc-400">
              Bring snacks. Lower your expectations. And don&apos;t touch my wine.
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap justify-center gap-2 md:justify-start">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center gap-0.5 rounded-lg border border-purple-400/20 bg-purple-500/10 px-4 py-2 transition hover:border-purple-400/40 hover:bg-purple-500/20 md:items-start"
                >
                  <span className="text-[10px] uppercase tracking-widest text-purple-300/50">{stat.label}</span>
                  <span className="text-sm font-bold text-purple-200">{stat.value}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-2 md:justify-start">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#FF8A3D]/30 bg-[#FF8A3D]/6 px-3.5 py-1 text-xs tracking-wide text-[#FF8A3D]/70 transition hover:border-[#FF8A3D]/55 hover:bg-[#FF8A3D]/12 hover:text-[#FF8A3D]/95"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex justify-center md:justify-start">
              <a
                href="https://twitch.tv/valashibbs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-violet-400 transition hover:text-violet-300"
              >
                <TwitchIcon size={16} />
                Watch live on Twitch →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
