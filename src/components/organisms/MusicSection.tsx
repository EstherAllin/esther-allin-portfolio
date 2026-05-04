import SectionHeading from "../molecules/SectionHeading";
import SpotifyEmbed from "../molecules/SpotifyEmbed";
import { SpotifyIcon } from "../atoms/icons";
import { sectionBackgrounds } from "../../tokens/sectionBackgrounds";
import type { MusicData } from "../../lib/getSpotifyData";

const cardGradients = [
  "from-[#FF2D95]/20 to-[#7B3FF2]/20",
  "from-[#19E3FF]/15 to-[#7B3FF2]/20",
  "from-[#7B3FF2]/20 to-[#FF2D95]/20",
];

export default function MusicSection({ featuredTrack, releases }: MusicData) {
  return (
    <section
      id="music"
      className="relative overflow-hidden px-6 py-24 pt-28"
      style={{ background: [...sectionBackgrounds.music].join(", ") }}
    >
      {/* Transition fade from previous section */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/20 to-transparent" />
      {/* Hero texture echo */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          opacity: 0.08,
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
        <div className="mb-10 overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 shadow-[0_0_48px_rgba(123,63,242,0.12),0_12px_36px_rgba(0,0,0,0.30)] transition-all duration-300 ease-out hover:-translate-y-1">
          <div className="flex flex-col sm:flex-row">
            {/* Album art */}
            <div className="relative flex h-48 w-full flex-shrink-0 items-center justify-center overflow-hidden bg-gradient-to-br from-[#7B3FF2]/35 via-[#FF2D95]/20 to-[#19E3FF]/15 sm:h-auto sm:w-52">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="text-white/20">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent sm:bg-gradient-to-r" />
            </div>

            {/* Info */}
            <div className="flex flex-1 flex-col justify-between gap-4 p-7 sm:p-9">
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-purple-500/20 px-3 py-0.5 text-xs font-bold uppercase tracking-widest text-purple-300">
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
                  className="flex items-center gap-2 rounded-full bg-green-500 px-6 py-2.5 text-sm font-bold text-black shadow-[0_0_16px_rgba(74,222,128,0.25)] transition-all duration-200 hover:bg-green-400 hover:shadow-[0_0_22px_rgba(74,222,128,0.35)] hover:scale-[1.03] active:scale-95"
                >
                  <SpotifyIcon size={16} />
                  Play on Spotify
                </a>
                <span className="text-xs text-zinc-600">{featuredTrack.duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Spotify embed */}
        <div className="mb-10 mx-auto max-w-[640px] opacity-85">
          <div className="overflow-hidden rounded-[20px] shadow-[0_0_28px_rgba(123,63,242,0.08),0_6px_20px_rgba(0,0,0,0.22)] bg-gradient-to-br from-zinc-900/80 to-zinc-950/80">
            <SpotifyEmbed
              spotifyUrl="https://open.spotify.com/embed/artist/46mozgeLDTOlfF5dMbPGuV"
              title="ValaShibbs on Spotify"
            />
          </div>
        </div>

        {/* More releases */}
        <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-zinc-400">
          More Releases
        </h4>
        <div className="mb-10 grid gap-4 md:grid-cols-3">
          {releases.map((release, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 rounded-xl card-surface p-5 shadow-[0_4px_16px_rgba(0,0,0,0.20)] transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.30)]"
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
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-purple-500" />
                  </span>
                  Coming Soon
                </span>
              )}
            </div>
          ))}
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
