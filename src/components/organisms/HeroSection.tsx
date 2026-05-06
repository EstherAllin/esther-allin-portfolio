import Button from "../atoms/Button";
import { TwitchIcon, SpotifyIcon, KickIcon, ChevronDownIcon } from "../atoms/icons";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[78vh] flex-col items-center justify-center overflow-hidden px-6 pt-8 pb-16 text-center"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center 5%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay — softer on the image, fully transparent at bottom to blend into next section */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 via-[70%] to-transparent" />
      {/* Bottom seam — deep purple fade into About palette base */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#0f0b24]/80 to-transparent" />

      {/* Cyan glow — left frame, drifts slowly */}
      <div className="pointer-events-none absolute -left-24 top-1/2 h-[520px] w-[520px] -translate-y-1/2 glow-indigo ambient-drift-1" />
      {/* Magenta glow — right frame, offset phase */}
      <div className="pointer-events-none absolute -right-20 top-1/2 h-[480px] w-[480px] -translate-y-1/2 glow-fuchsia ambient-drift-2 [animation-delay:6s]" />
      {/* Purple depth — center, slow drift */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 opacity-30 glow-purple ambient-drift-3 [animation-delay:3s]" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Live badge */}
        <span className="flex items-center gap-2 rounded-full border border-[#19E3FF]/30 bg-[#19E3FF]/10 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-[#19E3FF] uppercase">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#19E3FF] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#19E3FF]" />
          </span>
          Live &amp; Loud
        </span>

        <h1 className="mt-5 text-5xl font-black leading-none tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
          <span className="text-[#E5E7EB] [filter:drop-shadow(0_0_16px_rgba(123,63,242,0.25))]">Vala</span>
          <span className="bg-gradient-to-r from-[#FF2D95] via-[#FF6B35] to-[#FFB347] bg-clip-text text-transparent [filter:drop-shadow(0_0_36px_rgba(255,100,53,0.52))]">
            Shibbs
          </span>
        </h1>

        {/* Identity pills — each tinted to match its brand-color zone */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <span className="text-xs font-medium text-zinc-400">Variety Screamer</span>
          <span className="text-[#7B3FF2]/50">·</span>
          <span className="text-xs font-medium text-zinc-400">Gamer</span>
          <span className="text-[#FF2D95]/50">·</span>
          <span className="text-xs font-medium text-zinc-400">Music Chaos</span>
        </div>

        <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
          {/* Primary: Twitch — TODO: replace URL with your Twitch channel */}
          <Button
            href="https://twitch.tv/valashibbs"
            variant="primary"
            icon={<TwitchIcon size={18} />}
            className="justify-center"
          >
            Watch on Twitch
          </Button>
          {/* Secondary: scrolls to the on-page music/Spotify section */}
          <a
            href="#music"
            className="inline-flex items-center justify-center gap-2 rounded-full border bg-zinc-800/60 px-7 py-3 text-base font-semibold text-[#19E3FF]/80 backdrop-blur transition border-[#19E3FF]/25 hover:border-[#19E3FF]/50 hover:bg-[#19E3FF]/5 hover:text-[#19E3FF] active:scale-95"
          >
            <SpotifyIcon size={18} />
            Listen to Music
          </a>
        </div>

        {/* Tertiary: Kick pill — intentional but clearly secondary to Twitch */}
        <div className="mt-6 flex justify-center">
          <a
            href="https://kick.com/valashibbs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#53FC18]/25 bg-zinc-900/70 px-5 py-2 text-sm font-medium text-zinc-300 backdrop-blur transition hover:border-[#53FC18]/50 hover:bg-zinc-800/80 hover:text-white active:scale-95"
          >
            <span>Also live on <span className="font-semibold text-[#53FC18]">Kick</span></span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-[#19E3FF]/40">
        <ChevronDownIcon size={20} />
      </div>
    </section>
  );
}
