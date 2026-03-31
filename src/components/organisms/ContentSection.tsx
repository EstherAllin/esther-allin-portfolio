import SectionHeading from "../molecules/SectionHeading";
import ContentCard from "../molecules/ContentCard";

const cards = [
  {
    emoji: "🟣",
    label: "Twitch Streams",
    title: "Catch Me Live",
    description:
      "Tune in for variety streams, horror game nights, and unhinged reactions. Live every week — check the schedule on Twitch.",
    cta: "Follow on Twitch",
    href: "https://twitch.tv/valashibbs",
    accent: "from-purple-600/20 to-purple-600/5",
    border: "border-purple-500/20 hover:border-purple-500/50",
    ctaClass: "bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-900/30",
  },
  {
    emoji: "🎮",
    label: "Gaming",
    title: "All the Games",
    description:
      "Horror, RPGs, indie gems, and games too cursed to name. If it exists, I'll play it badly and loudly.",
    cta: "Watch Clips",
    href: "https://youtube.com",
    accent: "from-cyan-600/20 to-cyan-600/5",
    border: "border-cyan-500/20 hover:border-cyan-500/50",
    ctaClass: "bg-zinc-700 hover:bg-zinc-600 text-white",
  },
  {
    emoji: "💬",
    label: "Community",
    title: "Join the Chaos",
    description:
      "A welcoming community of fellow scream-enthusiasts. Come say hi, share memes, and suffer horror games together.",
    cta: "Join Discord",
    href: "https://discord.gg",
    accent: "from-fuchsia-600/20 to-fuchsia-600/5",
    border: "border-fuchsia-500/20 hover:border-fuchsia-500/50",
    ctaClass: "bg-zinc-700 hover:bg-zinc-600 text-white",
  },
];

export default function ContentSection() {
  return (
    <section id="content" className="bg-zinc-950 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading label="Content" title="What I Do" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <ContentCard key={card.label} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
