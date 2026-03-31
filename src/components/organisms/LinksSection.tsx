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
    handle: "@valashibbs",
    href: "https://twitch.tv/valashibbs",
    bg: "bg-purple-600 hover:bg-purple-500",
    shadow: "shadow-purple-900/40",
    icon: <TwitchIcon />,
  },
  {
    name: "Spotify",
    handle: "ValaShibbs",
    href: "https://open.spotify.com",
    bg: "bg-green-600 hover:bg-green-500",
    shadow: "shadow-green-900/40",
    icon: <SpotifyIcon />,
  },
  {
    name: "YouTube",
    handle: "@valashibbs",
    href: "https://youtube.com",
    bg: "bg-red-600 hover:bg-red-500",
    shadow: "shadow-red-900/40",
    icon: <YouTubeIcon />,
  },
  {
    name: "TikTok",
    handle: "@valashibbs",
    href: "https://tiktok.com",
    bg: "bg-zinc-700 hover:bg-zinc-600",
    shadow: "shadow-black/30",
    icon: <TikTokIcon />,
  },
  {
    name: "Discord",
    handle: "Join the server",
    href: "https://discord.gg",
    bg: "bg-indigo-600 hover:bg-indigo-500",
    shadow: "shadow-indigo-900/40",
    icon: <DiscordIcon />,
  },
];

export default function LinksSection() {
  return (
    <section id="links" className="bg-zinc-950 px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <SectionHeading label="Find Me" title="All the Links" accent="fuchsia" />
        <div className="flex flex-col gap-4">
          {links.map((link) => (
            <SocialLinkItem key={link.name} {...link} />
          ))}
        </div>
      </div>
    </section>
  );
}
