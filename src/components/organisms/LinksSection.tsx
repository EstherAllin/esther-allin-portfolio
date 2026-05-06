import SectionHeading from "../molecules/SectionHeading";
import { sectionBackgrounds } from "../../tokens/sectionBackgrounds";
import {
  TwitchIcon,
  SpotifyIcon,
  KickIcon,
  TikTokIcon,
  DiscordIcon,
  ChevronRightIcon,
} from "../atoms/icons";

const secondaryLinks = [
  // Row 1: green → cyan/purple  (warm → cool)
  {
    name: "Kick",
    description: "Backup chaos. Same bad decisions.",
    cta: "Watch",
    href: "https://kick.com/valashibbs",
    cardStyle:
      "bg-[#53FC18]/[0.07] hover:bg-[#53FC18]/[0.13] border border-[#53FC18]/28 hover:border-[#53FC18]/62 hover:shadow-[0_12px_40px_rgba(83,252,24,0.28),0_0_22px_rgba(83,252,24,0.12)]",
    iconStyle: "bg-[#53FC18]/22 transition-all duration-300 group-hover:bg-[#53FC18]/38 group-hover:shadow-[0_0_24px_rgba(83,252,24,0.52)]",
    accentLine: "from-[#53FC18]/80 via-purple-400/28 to-transparent",
    ctaBadgeStyle: "bg-[#53FC18]/[0.15] border border-[#53FC18]/55 text-[#53FC18] shadow-[0_0_14px_rgba(83,252,24,0.32)] group-hover:bg-[#53FC18]/[0.28] group-hover:border-[#53FC18]/82 group-hover:shadow-[0_0_30px_rgba(83,252,24,0.58)]",
    icon: <KickIcon size={18} />,
  },
  {
    name: "TikTok",
    description: "Clips, chaos, and questionable takes.",
    cta: "Follow",
    href: "https://tiktok.com/@valashibbs",
    cardStyle:
      "bg-fuchsia-950/[0.30] hover:bg-fuchsia-950/[0.42] border border-fuchsia-500/20 hover:border-cyan-300/55 hover:shadow-[0_10px_36px_rgba(255,45,149,0.22),0_0_22px_rgba(34,211,238,0.18)]",
    iconStyle: "bg-gradient-to-br from-fuchsia-500/28 to-cyan-400/16 transition-all duration-300 group-hover:from-fuchsia-400/22 group-hover:to-cyan-400/42 group-hover:shadow-[0_0_22px_rgba(34,211,238,0.55)]",
    accentLine: "from-fuchsia-500/75 via-cyan-400/52 to-transparent",
    ctaBadgeStyle: "bg-gradient-to-r from-fuchsia-500/[0.22] to-cyan-400/[0.10] border border-fuchsia-400/52 text-fuchsia-200 shadow-[0_0_14px_rgba(255,45,149,0.42),0_0_7px_rgba(34,211,238,0.16)] group-hover:from-cyan-400/[0.40] group-hover:to-fuchsia-500/[0.14] group-hover:border-cyan-300/75 group-hover:text-cyan-100 group-hover:shadow-[0_0_28px_rgba(34,211,238,0.65),0_0_14px_rgba(255,45,149,0.30)]",
    icon: <TikTokIcon size={18} />,
  },
  // Row 2: indigo/purple → deep emerald  (dark → rich)
  {
    name: "Discord",
    description: "Where it gets worse.",
    cta: "Join",
    href: "https://discord.gg",
    cardStyle:
      "bg-indigo-500/[0.07] hover:bg-indigo-500/[0.14] border border-indigo-500/20 hover:border-indigo-400/60 hover:shadow-[0_10px_36px_rgba(99,102,241,0.28)]",
    iconStyle: "bg-indigo-500/20 transition-all duration-300 group-hover:bg-indigo-500/38 group-hover:shadow-[0_0_16px_rgba(99,102,241,0.45)]",
    accentLine: "from-indigo-500/70 via-purple-400/40 to-transparent",
    ctaBadgeStyle: "bg-indigo-500/[0.18] border border-indigo-400/52 text-indigo-200 shadow-[0_0_10px_rgba(99,102,241,0.26)] group-hover:bg-indigo-500/[0.32] group-hover:border-indigo-300/78 group-hover:text-white group-hover:shadow-[0_0_22px_rgba(99,102,241,0.48)]",
    icon: <DiscordIcon size={18} />,
  },
  {
    name: "Spotify",
    description: "Original tracks. All bangers. Mostly.",
    cta: "Listen",
    href: "https://open.spotify.com/artist/46mozgeLDTOlfF5dMbPGuV",
    cardStyle:
      "bg-emerald-500/[0.08] hover:bg-emerald-500/[0.15] border border-emerald-500/25 hover:border-emerald-400/62 hover:shadow-[0_10px_36px_rgba(52,211,153,0.26),0_0_18px_rgba(123,63,242,0.14)]",
    iconStyle: "bg-emerald-500/22 transition-all duration-300 group-hover:bg-emerald-500/38 group-hover:shadow-[0_0_20px_rgba(52,211,153,0.50)]",
    accentLine: "from-emerald-400/65 via-purple-500/48 to-transparent",
    ctaBadgeStyle: "bg-emerald-500/[0.16] border border-emerald-400/52 text-emerald-200 shadow-[0_0_12px_rgba(52,211,153,0.28)] group-hover:bg-emerald-500/[0.30] group-hover:border-emerald-300/80 group-hover:text-emerald-100 group-hover:shadow-[0_0_26px_rgba(52,211,153,0.50),0_0_10px_rgba(123,63,242,0.18)]",
    icon: <SpotifyIcon size={18} />,
  },
];

export default function LinksSection() {
  return (
    <section
      id="links"
      className="relative overflow-hidden px-6 py-20"
      style={{ background: [...sectionBackgrounds.links].join(", ") }}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-16 left-1/2 h-[520px] w-[520px] -translate-x-1/2 glow-fuchsia opacity-90 ambient-drift-2 [animation-delay:2s]" />
      <div className="pointer-events-none absolute -top-10 left-1/2 h-[400px] w-[400px] -translate-x-1/2 glow-purple opacity-70 ambient-drift-3 [animation-delay:5s]" />
      <div className="pointer-events-none absolute -bottom-16 left-1/4 h-[400px] w-[400px] glow-indigo opacity-80 ambient-drift-1 [animation-delay:8s]" />
      {/* Orange sunset accent — bottom-right */}
      <div className="pointer-events-none absolute -bottom-8 right-1/4 h-[360px] w-[360px] ambient-drift-2 [animation-delay:12s]" style={{ background: "radial-gradient(circle, rgba(255,138,61,0.20) 0%, transparent 70%)" }} />
      {/* Extra focus glow behind Twitch card */}
      <div className="pointer-events-none absolute top-[28%] left-1/2 h-[380px] w-[580px] -translate-x-1/2 glow-purple opacity-45" />
      {/* Top seam — fades in from Music's palette base */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#180b28]/54 to-transparent" />
      {/* Bottom seam — hard fade to footer */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#070B14]/68 to-transparent" />
      {/* Texture echo */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.10,
          mixBlendMode: "soft-light",
        }}
      />

      <div className="relative z-10 mx-auto max-w-xl">
        <SectionHeading
          label="Find Me"
          title="Find Me Everywhere"
          subtitle="Pick your platform. I'll be there."
          accent="fuchsia"
          titleClass="bg-gradient-to-r from-[#FF2D95] to-[#7B3FF2] bg-clip-text text-transparent"
        />

        {/* Featured Twitch card */}
        <div className="group mb-6">
          <a
            href="https://twitch.tv/valashibbs"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex flex-col gap-5 rounded-2xl border border-purple-500/55 bg-gradient-to-br from-purple-900/30 via-purple-800/12 to-fuchsia-900/18 px-8 py-7 backdrop-blur-md shadow-[0_4px_32px_rgba(123,63,242,0.30),0_0_0_1px_rgba(123,63,242,0.12),0_0_55px_rgba(123,63,242,0.14)] transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:border-purple-400/75 hover:bg-purple-500/[0.22] hover:shadow-[0_18px_60px_rgba(123,63,242,0.52),0_0_40px_rgba(255,45,149,0.18),0_0_0_1px_rgba(123,63,242,0.20)] active:scale-[0.99]"
          >
            {/* Top accent line */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-purple-400/80 to-fuchsia-500/50" />
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-purple-500/40 shadow-[0_0_22px_rgba(123,63,242,0.42)]">
                <TwitchIcon size={24} />
              </span>
              <div>
                <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-purple-300/80">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-purple-400" />
                  </span>
                  Primary Platform
                </p>
                <h3 className="text-xl font-black text-white">Twitch</h3>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-zinc-200">
              Live chaos. Questionable decisions.
            </p>
            <span className="flex items-center gap-2 self-start rounded-full bg-gradient-to-r from-purple-600 to-purple-500 px-6 py-2.5 text-sm font-bold text-white shadow-[0_0_24px_rgba(123,63,242,0.55),0_2px_8px_rgba(0,0,0,0.30)] transition-all duration-300 group-hover:from-purple-500 group-hover:to-fuchsia-500 group-hover:shadow-[0_0_38px_rgba(123,63,242,0.72),0_4px_16px_rgba(0,0,0,0.35)]">
              Watch Live
              <ChevronRightIcon size={14} />
            </span>
          </a>
        </div>

        {/* Secondary platforms grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {secondaryLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col gap-4 rounded-2xl px-6 py-5 backdrop-blur-md shadow-[0_2px_16px_rgba(0,0,0,0.28)] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.025] active:scale-[0.98] ${link.cardStyle}`}
            >
              {/* Per-platform top accent line */}
              <div className={`h-px w-full rounded-full bg-gradient-to-r opacity-40 transition-opacity duration-300 group-hover:opacity-100 ${link.accentLine}`} />
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${link.iconStyle}`}
                >
                  {link.icon}
                </span>
                <span className="font-bold text-white">{link.name}</span>
              </div>
              <p className="flex-1 text-xs leading-relaxed text-zinc-300">{link.description}</p>
              <span className={`mt-auto inline-flex items-center gap-1.5 self-start rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-300 ${link.ctaBadgeStyle}`}>
                {link.cta}
                <ChevronRightIcon size={11} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

