import SectionHeading from "../molecules/SectionHeading";
import { sectionBackgrounds } from "../../tokens/sectionBackgrounds";
import {
  TwitchIcon,
  SpotifyIcon,
  YouTubeIcon,
  TikTokIcon,
  DiscordIcon,
  ChevronRightIcon,
} from "../atoms/icons";

const secondaryLinks = [
  {
    name: "Spotify",
    description: "Loud, chaotic, and slightly unhinged.",
    cta: "Listen",
    href: "https://open.spotify.com/artist/46mozgeLDTOlfF5dMbPGuV",
    cardStyle:
      "bg-green-500/[0.07] hover:bg-green-500/[0.14] border border-green-500/20 hover:border-green-400/40 hover:shadow-[0_8px_28px_rgba(34,197,94,0.18)]",
    iconStyle: "bg-green-500/20",
    icon: <SpotifyIcon size={18} />,
  },
  {
    name: "YouTube",
    description: "Clips, screams, and regrets.",
    cta: "Watch",
    href: "https://youtube.com/@valashibbs",
    cardStyle:
      "bg-red-500/[0.07] hover:bg-red-500/[0.14] border border-red-500/20 hover:border-red-400/40 hover:shadow-[0_8px_28px_rgba(239,68,68,0.18)]",
    iconStyle: "bg-red-500/20",
    icon: <YouTubeIcon size={18} />,
  },
  {
    name: "TikTok",
    description: "Short form chaos.",
    cta: "Scroll",
    href: "https://tiktok.com/@valashibbs",
    cardStyle:
      "bg-white/[0.04] hover:bg-cyan-400/[0.08] border border-white/10 hover:border-cyan-400/35 hover:shadow-[0_8px_24px_rgba(34,211,238,0.14)]",
    iconStyle: "bg-white/10",
    icon: <TikTokIcon size={18} />,
  },
  {
    name: "Discord",
    description: "Where it gets worse.",
    cta: "Join",
    href: "https://discord.gg",
    cardStyle:
      "bg-indigo-500/[0.07] hover:bg-indigo-500/[0.14] border border-indigo-500/20 hover:border-indigo-400/45 hover:shadow-[0_8px_28px_rgba(99,102,241,0.22)]",
    iconStyle: "bg-indigo-500/20",
    icon: <DiscordIcon size={18} />,
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
      <div className="pointer-events-none absolute -top-16 left-1/2 h-[520px] w-[520px] -translate-x-1/2 glow-fuchsia opacity-75" />
      <div className="pointer-events-none absolute -top-10 left-1/2 h-[400px] w-[400px] -translate-x-1/2 glow-purple opacity-55" />
      <div className="pointer-events-none absolute -bottom-16 left-1/4 h-[400px] w-[400px] glow-indigo" />
      {/* Extra focus glow behind Twitch card */}
      <div className="pointer-events-none absolute top-[30%] left-1/2 h-[300px] w-[480px] -translate-x-1/2 glow-purple opacity-25" />

      <div className="relative z-10 mx-auto max-w-xl">
        <SectionHeading
          label="Find Me"
          title="Find Me Everywhere"
          subtitle="Pick your platform. I'll be there."
          accent="fuchsia"
          titleClass="bg-gradient-to-r from-[#FF2D95] to-[#7B3FF2] bg-clip-text text-transparent"
        />

        {/* Featured Twitch card */}
        <div className="group mb-5">
          <a
            href="https://twitch.tv/valashibbs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-5 rounded-2xl border border-purple-500/30 bg-purple-500/[0.09] px-8 py-7 backdrop-blur-md shadow-[0_4px_24px_rgba(123,63,242,0.12)] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.015] hover:border-purple-400/55 hover:bg-purple-500/[0.16] hover:shadow-[0_12px_40px_rgba(123,63,242,0.28)] active:scale-[0.99]"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-purple-500/25">
                <TwitchIcon size={22} />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-purple-300 opacity-70">
                  Primary Platform
                </p>
                <h3 className="text-xl font-black text-white">Twitch</h3>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-zinc-300">
              Live chaos. Questionable decisions.
            </p>
            <span className="flex items-center gap-2 self-start rounded-full bg-purple-500 px-5 py-2.5 text-sm font-bold text-white shadow-[0_0_16px_rgba(123,63,242,0.35)] transition-all duration-300 group-hover:bg-purple-400 group-hover:shadow-[0_0_24px_rgba(123,63,242,0.55)]">
              Watch Live
              <ChevronRightIcon size={14} />
            </span>
          </a>
        </div>

        {/* Secondary platforms grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {secondaryLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col gap-3 rounded-2xl px-6 py-5 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.18)] transition-all duration-300 ease-out hover:-translate-y-0.5 active:scale-[0.98] ${link.cardStyle}`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg ${link.iconStyle}`}
                >
                  {link.icon}
                </span>
                <span className="font-bold text-white">{link.name}</span>
              </div>
              <p className="text-xs leading-relaxed text-zinc-400">{link.description}</p>
              <span className="flex items-center gap-1 text-xs font-semibold text-zinc-300 opacity-70">
                {link.cta} <ChevronRightIcon size={12} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

