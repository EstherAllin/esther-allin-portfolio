import SectionHeading from "../molecules/SectionHeading";
import TrackCard from "../molecules/TrackCard";
import { SpotifyIcon } from "../atoms/icons";

const tracks = [
  {
    title: "Coming Soon",
    description: "New music in the works. Stay tuned.",
    spotify: null,
  },
];

export default function MusicSection() {
  return (
    <section id="music" className="bg-zinc-900 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="Music"
          title="Music Chaos"
          subtitle="Original songs, weird covers, and sonic chaos. Find everything on Spotify."
          accent="cyan"
        />

        {/* Spotify CTA banner */}
        <div className="mb-10 flex flex-col items-center justify-between gap-6 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-600/10 to-fuchsia-600/10 p-8 sm:flex-row">
          <div className="flex items-center gap-5">
            <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-green-500 text-white shadow-lg shadow-green-900/30">
              <SpotifyIcon size={28} />
            </span>
            <div>
              <p className="text-lg font-bold text-white">Listen on Spotify</p>
              <p className="text-sm text-zinc-400">Follow ValaShibbs for new music drops</p>
            </div>
          </div>
          <a
            href="https://open.spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 rounded-full bg-green-500 px-7 py-3 text-sm font-bold text-black transition hover:bg-green-400 active:scale-95"
          >
            Open Spotify
          </a>
        </div>

        {/* Track list */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track, i) => (
            <TrackCard key={i} {...track} />
          ))}
        </div>
      </div>
    </section>
  );
}
