import SectionHeading from "../molecules/SectionHeading";
import { SpotifyIcon } from "../atoms/icons";

const featuredTrack = {
  label: "Latest Single",
  title: "Untitled Vol. 1",
  description:
    "The debut drop. Raw energy, chaotic production, and zero compromises. Out now on Spotify.",
  tags: ["Electronic", "Experimental"],
  duration: "3:42",
  year: "2026",
  spotify: "https://open.spotify.com",
};

const releases = [
  {
    title: "VALACORE EP",
    type: "EP · 6 tracks",
    description: "Part gaming soundtrack, part fever dream. The full debut collection.",
    tags: ["Lo-fi Chaos", "Electronic"],
    spotify: null,
  },
  {
    title: "Glitch Mode",
    type: "Single",
    description: "An experiment in broken beats and distorted synths.",
    tags: ["Glitch", "Experimental"],
    spotify: null,
  },
  {
    title: "Boss Music",
    type: "Single",
    description: "For those final-form moments that need a soundtrack.",
    tags: ["Cinematic", "Electronic"],
    spotify: null,
  },
];

const cardGradients = [
  "from-fuchsia-500/20 to-purple-600/20",
  "from-cyan-500/20 to-blue-600/20",
  "from-purple-500/20 to-pink-500/20",
];

export default function MusicSection() {
  return (
    <section id="music" className="relative overflow-hidden bg-zinc-900 px-6 py-20">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-20 left-1/4 h-[380px] w-[380px] rounded-full bg-cyan-600/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[280px] w-[280px] rounded-full bg-fuchsia-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <SectionHeading
          label="Music"
          title="Music Chaos"
          subtitle="Original tracks, sonic experiments, and covers. All on Spotify."
          accent="cyan"
        />

        {/* Featured track — hero card */}
        <div className="mb-8 overflow-hidden rounded-2xl border border-cyan-500/25 bg-gradient-to-br from-zinc-800/80 to-zinc-900/80">
          <div className="flex flex-col sm:flex-row">
            {/* Album art */}
            <div className="relative flex h-48 w-full flex-shrink-0 items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-500/25 via-fuchsia-500/15 to-purple-600/25 sm:h-auto sm:w-52">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="text-white/20">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent sm:bg-gradient-to-r" />
            </div>

            {/* Info */}
            <div className="flex flex-1 flex-col justify-between gap-4 p-6 sm:p-8">
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-cyan-500/15 px-3 py-0.5 text-xs font-bold uppercase tracking-widest text-cyan-400">
                    {featuredTrack.label}
                  </span>
                  <span className="text-xs text-zinc-600">{featuredTrack.year}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white sm:text-3xl">{featuredTrack.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-400 sm:text-base">
                    {featuredTrack.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {featuredTrack.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-zinc-700 px-2.5 py-0.5 text-xs text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href={featuredTrack.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-green-500 px-5 py-2 text-sm font-bold text-black transition hover:bg-green-400 active:scale-95"
                >
                  <SpotifyIcon size={16} />
                  Play on Spotify
                </a>
                <span className="text-xs text-zinc-600">{featuredTrack.duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* More releases */}
        <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-zinc-500">
          More Releases
        </h4>
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {releases.map((release, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 rounded-xl border border-zinc-800 bg-zinc-800/40 p-5 transition hover:border-zinc-600 hover:bg-zinc-800/70"
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${cardGradients[i % cardGradients.length]}`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white/50">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                </svg>
              </div>
              <div>
                <div className="mb-0.5 text-xs text-zinc-600">{release.type}</div>
                <h4 className="font-bold text-white">{release.title}</h4>
                <p className="mt-1 text-xs leading-relaxed text-zinc-500">{release.description}</p>
              </div>
              <div className="mt-auto flex flex-wrap gap-1.5">
                {release.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-zinc-700/60 px-2 py-0.5 text-xs text-zinc-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {release.spotify ? (
                <a
                  href={release.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-green-400 hover:text-green-300"
                >
                  Play on Spotify →
                </a>
              ) : (
                <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-zinc-600">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-500" />
                  </span>
                  Coming Soon
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Spotify follow CTA */}
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-zinc-800 bg-zinc-800/40 p-5 sm:flex-row sm:p-6">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-green-500 text-white shadow-lg shadow-green-900/30">
              <SpotifyIcon size={20} />
            </span>
            <div>
              <p className="text-sm font-bold text-white">Follow on Spotify</p>
              <p className="text-xs text-zinc-500">Get notified when new tracks drop</p>
            </div>
          </div>
          <a
            href="https://open.spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 rounded-full bg-green-500 px-5 py-2 text-sm font-bold text-black transition hover:bg-green-400 active:scale-95"
          >
            Open Spotify
          </a>
        </div>
      </div>
    </section>
  );
}
