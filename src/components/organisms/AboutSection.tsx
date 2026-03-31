import SectionLabel from "../atoms/SectionLabel";
import Tag from "../atoms/Tag";
import { TwitchIcon } from "../atoms/icons";

const tags = ["Horror Games", "Variety Streams", "Original Music", "Jump Scares", "Community"];

const stats = [
  { label: "Main platform", value: "Twitch" },
  { label: "Specialty", value: "Horror" },
  { label: "Vibe", value: "Chaotic Good" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-zinc-900 px-6 py-20">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-0 left-0 h-[300px] w-[300px] rounded-full bg-purple-700/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[250px] w-[250px] rounded-full bg-fuchsia-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-14">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="relative h-44 w-44 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-600 p-0.5 shadow-xl shadow-purple-900/30">
              <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl bg-zinc-900">
                <span className="bg-gradient-to-br from-purple-400 to-fuchsia-400 bg-clip-text text-4xl font-black leading-none text-transparent">
                  VS
                </span>
                <span className="mt-1 text-xs font-semibold uppercase tracking-widest text-zinc-600">
                  ValaShibbs
                </span>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-purple-500" />
              </span>
              <span className="text-xs font-semibold text-zinc-500">Live on Twitch</span>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-5 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <SectionLabel label="About" accent="purple" />
            </div>
            <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
              The Scream Behind the Stream
            </h2>
            <p className="max-w-lg text-base leading-relaxed text-zinc-400">
              Hey, I&apos;m <span className="font-semibold text-white">ValaShibbs</span> — a variety
              streamer with a special talent for completely losing it during horror games. If it has
              jump scares, I&apos;m already screaming before anything even happens.
            </p>
            <p className="max-w-lg text-base leading-relaxed text-zinc-400">
              When I&apos;m not being terrorised by pixelated monsters, I&apos;m making chaotic
              music, vibing with my community, and finding new ways to die in games I&apos;ve already
              played a hundred times. Come hang out — it&apos;s always a good time.
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap justify-center gap-6 rounded-xl border border-purple-500/20 bg-purple-900/10 px-5 py-3 md:justify-start">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-0.5 md:items-start">
                  <span className="text-xs text-zinc-600">{stat.label}</span>
                  <span className="text-sm font-bold text-white">{stat.value}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-2 md:justify-start">
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>

            <div className="flex justify-center md:justify-start">
              <a
                href="https://twitch.tv/valashibbs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-purple-400 transition hover:text-purple-300"
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
