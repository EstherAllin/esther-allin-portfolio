import Button from "../atoms/Button";
import { TwitchIcon, SpotifyIcon, ChevronDownIcon } from "../atoms/icons";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-zinc-950 px-6 pt-8 pb-16 text-center"
    >
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute -top-8 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-purple-700/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 right-0 h-[280px] w-[280px] rounded-full bg-cyan-600/10 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Live badge */}
        <span className="flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-purple-300 uppercase">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500" />
          </span>
          Live &amp; Loud
        </span>

        <h1 className="mt-5 text-5xl font-black leading-none tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl">
          Vala
          <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            Shibbs
          </span>
        </h1>

        <p className="mt-4 max-w-xs text-sm font-medium text-zinc-500 sm:text-base">
          Variety Screamer&nbsp;
          <span className="text-purple-400">•</span>&nbsp;Gamer&nbsp;
          <span className="text-purple-400">•</span>&nbsp;Music Chaos
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button
            href="https://twitch.tv/valashibbs"
            variant="primary"
            icon={<TwitchIcon size={18} />}
          >
            Watch on Twitch
          </Button>
          <Button
            href="https://open.spotify.com"
            variant="ghost"
            icon={<SpotifyIcon size={18} />}
          >
            Listen to Music
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-zinc-600">
        <ChevronDownIcon size={20} />
      </div>
    </section>
  );
}
