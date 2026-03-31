import SectionLabel from "../atoms/SectionLabel";
import Tag from "../atoms/Tag";

const tags = ["Horror Games", "Variety Streams", "Music", "Jump Scares", "Community"];

export default function AboutSection() {
  return (
    <section id="about" className="bg-zinc-900 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:gap-16">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="relative h-48 w-48 rounded-2xl bg-gradient-to-br from-purple-600 to-cyan-500 p-0.5 shadow-xl shadow-purple-900/30">
              <div className="flex h-full w-full items-center justify-center rounded-2xl bg-zinc-900 text-6xl">
                🎮
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-5 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <SectionLabel label="About" accent="purple" />
            </div>
            <h2 className="text-4xl font-bold text-white">The Scream Behind the Stream</h2>
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
            <div className="mt-2 flex flex-wrap justify-center gap-3 md:justify-start">
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
