import SectionHeading from "../molecules/SectionHeading";
import SocialLinkItem from "../molecules/SocialLinkItem";
import { sectionBackgrounds } from "../../tokens/sectionBackgrounds";
import {
  TwitchIcon,
  SpotifyIcon,
  YouTubeIcon,
  TikTokIcon,
  DiscordIcon,
} from "../atoms/icons";

const links = [
  {
    name: "Twitch",
    handle: "Live streaming · @valashibbs",
    href: "https://twitch.tv/valashibbs",
    bg: "bg-purple-500/[0.07] hover:bg-purple-500/[0.14] border border-purple-500/20 hover:border-purple-400/45",
    shadow: "shadow-[0_2px_12px_rgba(0,0,0,0.20)] hover:shadow-[0_8px_32px_rgba(123,63,242,0.22)]",
    icon: <TwitchIcon size={20} />,
  },
  {
    name: "Spotify",
    handle: "Music releases · ValaShibbs",
    href: "https://open.spotify.com",
    bg: "bg-green-500/[0.06] hover:bg-green-500/[0.13] border border-green-500/20 hover:border-green-400/40",
    shadow: "shadow-[0_2px_12px_rgba(0,0,0,0.20)] hover:shadow-[0_8px_32px_rgba(34,197,94,0.18)]",
    icon: <SpotifyIcon size={20} />,
  },
  {
    name: "YouTube",
    handle: "Videos & VODs · @valashibbs",
    href: "https://youtube.com",
    bg: "bg-red-500/[0.06] hover:bg-red-500/[0.12] border border-red-500/20 hover:border-red-400/40",
    shadow: "shadow-[0_2px_12px_rgba(0,0,0,0.20)] hover:shadow-[0_8px_32px_rgba(239,68,68,0.18)]",
    icon: <YouTubeIcon size={20} />,
  },
  {
    name: "TikTok",
    handle: "Clips & shorts · @valashibbs",
    href: "https://tiktok.com",
    bg: "bg-white/[0.04] hover:bg-cyan-400/[0.08] border border-white/10 hover:border-cyan-400/35",
    shadow: "shadow-[0_2px_12px_rgba(0,0,0,0.20)] hover:shadow-[0_8px_28px_rgba(34,211,238,0.14)]",
    icon: <TikTokIcon size={20} />,
  },
  {
    name: "Discord",
    handle: "The PUG Den · where the real chaos lives",
    href: "https://discord.gg",
    bg: "bg-indigo-500/[0.07] hover:bg-indigo-500/[0.14] border border-indigo-500/20 hover:border-indigo-400/45",
    shadow: "shadow-[0_2px_12px_rgba(0,0,0,0.20)] hover:shadow-[0_8px_32px_rgba(99,102,241,0.22)]",
    icon: <DiscordIcon size={20} />,
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

      <div className="relative z-10 mx-auto max-w-xl">
        <SectionHeading
          label="Find Me"
          title="Find Me Everywhere"
          subtitle="Streams, songs, clips, and everything in between."
          accent="fuchsia"
          titleClass="bg-gradient-to-r from-[#FF2D95] to-[#7B3FF2] bg-clip-text text-transparent"
        />
        <div className="flex flex-col gap-3">
          {links.map((link) => (
            <SocialLinkItem key={link.name} {...link} />
          ))}
        </div>
      </div>
    </section>
  );
}
