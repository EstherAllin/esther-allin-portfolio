import SectionHeading from "../molecules/SectionHeading";
import SpotifyEmbed from "../molecules/SpotifyEmbed";
import { SpotifyIcon } from "../atoms/icons";
import { sectionBackgrounds } from "../../tokens/sectionBackgrounds";

const ARTIST_URL = "https://open.spotify.com/artist/46mozgeLDTOlfF5dMbPGuV";

const featuredTrack = {
  label: "Latest Single",
  title: "Dick Pic Pokedex",
  description:
    "Gotta catch 'em all — whether you want to or not. A chaotic, unhinged banger straight from the Vala archives.",
  tags: ["Electronic", "Chaotic"],
  duration: "3:34",
  year: "2026",
  spotifyUrl: "https://open.spotify.com/album/69UR43mi6fF38JRseST0du",
  image: "https://i.scdn.co/image/ab67616d00001e02fc69a885e2e2ec6f3ea5d714",
};

const releases = [
  {
    title: "Five-Head Energy",
    type: "Single · 2026",
    description: "A running joke turned weaponized. Big brain energy… whether it works or not.",
    tags: ["Electronic", "Energetic"],
    spotifyUrl: "https://open.spotify.com/track/4XJlO4afGFg66lqfmuZGGL",
    image: "https://i.scdn.co/image/ab67616d00001e023eb5a53e4bcb86c77dec9a5e",
  },
  {
    title: "Vala Wants Wood",
    type: "Single · 2026",
    description: "Survival crafting chaos. If there's a tree, I'm taking it. All of it.",
    tags: ["Comedy", "Chaotic"],
    spotifyUrl: "https://open.spotify.com/track/4CXzYzY3hheQQ32oHKvMhS",
    image: "https://i.scdn.co/image/ab67616d00001e025c26fe662ae1effe66a725f3",
  },
  {
    title: "In Waves",
    type: "Single · 2026",
    description: "Some things don't hit all at once. They come back… in waves.",
    tags: ["Emotional", "Electronic"],
    spotifyUrl: "https://open.spotify.com/track/6S4dcgjGKgWXVgzkORgGbb",
    image: "https://i.scdn.co/image/ab67616d00001e02e10a476dc78ad345ff6c591c",
  },
];

const cardGradients = [
  "from-[#FF2D95]/20 to-[#7B3FF2]/20",
  "from-[#19E3FF]/15 to-[#7B3FF2]/20",
  "from-[#7B3FF2]/20 to-[#FF2D95]/20",
];

export default function MusicSection() {
  return (
    <section
      id="music"
      className="relative overflow-hidden px-6 py-24 pt-28"
      style={{ background: [...sectionBackgrounds.music].join(", ") }}
    >
      {/* Top seam — fades in from Content's palette base */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#0b1022]/48 to-transparent" />
      {/* Bottom seam — fades toward Links palette base */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0d0a1e]/42 to-transparent" />
      {/* Ambient drift blobs */}
      <div className="pointer-events-none absolute -top-10 -left-16 h-[400px] w-[400px] glow-fuchsia ambient-drift-3 opacity-55 [animation-delay:1s]" />
      <div className="pointer-events-none absolute -bottom-10 -right-16 h-[360px] w-[360px] glow-indigo ambient-drift-1 opacity-40 [animation-delay:11s]" />
      {/* Hero texture echo */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          opacity: 0.14,
          mixBlendMode: "soft-light",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        <SectionHeading
          label="Music"
          title="Music Chaos"
          subtitle="Original tracks, sonic experiments, and covers. All on Spotify."
          accent="purple"
          labelLineClass="opacity-40"
          labelTextClass="tracking-[0.22em]"
        />

        {/* Featured track — hero card */}
        <div className="mb-10 overflow-hidden rounded-2xl border border-purple-400/40 bg-gradient-to-br from-zinc-800/80 to-zinc-900/85 shadow-[0_0_56px_rgba(123,63,242,0.22),0_0_24px_rgba(255,45,149,0.10),0_12px_36px_rgba(0,0,0,0.35)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_0_72px_rgba(123,63,242,0.32),0_0_32px_rgba(255,45,149,0.14),0_16px_48px_rgba(0,0,0,0.40)]">
          <div className="flex flex-col sm:flex-row">
            {/* Album art */}
            <div className="relative flex h-48 w-full flex-shrink-0 items-center justify-center overflow-hidden bg-gradient-to-br from-[#7B3FF2]/35 via-[#FF2D95]/20 to-[#19E3FF]/15 sm:h-auto sm:w-52">
              {featuredTrack.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={featuredTrack.image}
                  alt={featuredTrack.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="text-white/20">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                </svg>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent sm:bg-gradient-to-r" />
            </div>

            {/* Info */}
            <div className="flex flex-1 flex-col justify-between gap-4 p-7 sm:p-9">
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-purple-500/30 px-3 py-0.5 text-xs font-bold uppercase tracking-widest text-purple-200">
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
                  href={featuredTrack.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-green-500 px-6 py-2.5 text-sm font-bold text-black shadow-[0_0_16px_rgba(74,222,128,0.25)] transition-all duration-200 hover:bg-green-400 hover:shadow-[0_0_22px_rgba(74,222,128,0.35)] hover:scale-[1.03] active:scale-95"
                >
                  <SpotifyIcon size={16} />
                  Listen on Spotify
                </a>
                <span className="text-xs text-zinc-600">{featuredTrack.duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* More releases */}
        <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-zinc-300">
          More Releases
        </h4>
        <div className="mb-10 grid gap-4 md:grid-cols-3">
          {releases.map((release, i) => (
            <div
              key={i}
              className="flex flex-col overflow-hidden rounded-xl card-surface shadow-[0_4px_20px_rgba(0,0,0,0.28),0_0_0_1px_rgba(255,255,255,0.04)] transition-all duration-200 ease-out hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.40),0_0_24px_rgba(123,63,242,0.14)]"
            >
              {/* Album art */}
              <div className={`relative aspect-square w-full overflow-hidden bg-gradient-to-br ${cardGradients[i % cardGradients.length]}`}>
                {release.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={release.image}
                    alt={release.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
              </div>
              {/* Info */}
              <div className="flex flex-1 flex-col gap-2 p-4">
                <div>
                  <div className="mb-0.5 text-xs text-zinc-500">{release.type}</div>
                  <h4 className="font-bold text-white">{release.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-400">{release.description}</p>
                </div>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                  {release.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-zinc-600/60 px-2 py-0.5 text-xs text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={release.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-xs font-medium text-green-400 hover:text-green-300"
                >
                  Listen on Spotify →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Spotify embed */}
        <div className="mb-10 mx-auto max-w-[640px]">
          <div className="overflow-hidden rounded-[20px] shadow-[0_0_48px_rgba(123,63,242,0.18),0_0_24px_rgba(255,45,149,0.08),0_8px_24px_rgba(0,0,0,0.30)] bg-gradient-to-br from-zinc-800/70 to-zinc-950/80 ring-1 ring-purple-500/20">
            <SpotifyEmbed
              spotifyUrl="https://open.spotify.com/embed/artist/46mozgeLDTOlfF5dMbPGuV"
              title="ValaShibbs on Spotify"
            />
          </div>
        </div>

        {/* Spotify follow CTA */}
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl card-surface p-5 sm:flex-row sm:p-6">
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
            href={ARTIST_URL}
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
