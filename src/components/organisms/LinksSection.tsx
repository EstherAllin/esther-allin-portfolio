import SectionHeading from "../molecules/SectionHeading";
import SocialLinkItem from "../molecules/SocialLinkItem";
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
    bg: "bg-purple-950/70 hover:bg-purple-900/60 border border-purple-500/25 hover:border-purple-400/50",
    shadow: "shadow-purple-950/40",
    icon: <TwitchIcon size={20} />,
  },
  {
    name: "Spotify",
    handle: "Music releases · ValaShibbs",
    href: "https://open.spotify.com",
    bg: "bg-zinc-800/60 hover:bg-green-950/50 border border-zinc-700/50 hover:border-green-500/40",
    shadow: "shadow-black/20",
    icon: <SpotifyIcon size={20} />,
  },
  {
    name: "YouTube",
    handle: "Videos & VODs · @valashibbs",
    href: "https://youtube.com",
    bg: "bg-zinc-800/60 hover:bg-red-950/50 border border-zinc-700/50 hover:border-red-500/40",
    shadow: "shadow-black/20",
    icon: <YouTubeIcon size={20} />,
  },
  {
    name: "TikTok",
    handle: "Clips & shorts · @valashibbs",
    href: "https://tiktok.com",
    bg: "bg-zinc-800/60 hover:bg-zinc-700/60 border border-zinc-700/50 hover:border-zinc-500/50",
    shadow: "shadow-black/20",
    icon: <TikTokIcon size={20} />,
  },
  {
    name: "Discord",
    handle: "Community server · join the chaos",
    href: "https://discord.gg",
    bg: "bg-indigo-950/70 hover:bg-indigo-900/60 border border-indigo-500/25 hover:border-indigo-400/50",
    shadow: "shadow-indigo-950/40",
    icon: <DiscordIcon size={20} />,
  },
];

export default function LinksSection() {
  return (
    <section id="links" className="relative overflow-hidden bg-zinc-950 px-6 py-20">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-0 right-1/3 h-[300px] w-[300px] rounded-full bg-fuchsia-600/[0.08] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[250px] w-[250px] rounded-full bg-purple-600/[0.08] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-xl">
        <SectionHeading
          label="Find Me"
          title="All the Links"
          subtitle="Follow the chaos across platforms."
          accent="fuchsia"
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
