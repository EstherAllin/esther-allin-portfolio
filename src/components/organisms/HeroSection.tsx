import Button from "../atoms/Button";
import { TwitchIcon, SpotifyIcon, ChevronDownIcon } from "../atoms/icons";

export default function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-zinc-950 px-6 py-24 text-center">
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-700/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 right-0 h-[350px] w-[350px] rounded-full bg-cyan-600/10 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center gap-5">
        <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-purple-300 uppercase">
          Live &amp; Loud
        </span>

        <h1 className="text-6xl font-black leading-none tracking-tight text-white sm:text-7xl md:text-8xl">
          Vala
          <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            Shibbs
          </span>
        </h1>

        <p className="max-w-sm text-base font-medium text-zinc-500 sm:text-lg">
          Variety Screamer&nbsp;
          <span className="text-purple-400">•</span>&nbsp;Gamer&nbsp;
          <span className="text-purple-400">•</span>&nbsp;Music Chaos
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-zinc-600">
        <ChevronDownIcon size={20} />
      </div>
    </section>
  );
}
