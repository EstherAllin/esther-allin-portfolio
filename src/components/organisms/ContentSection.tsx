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
    ctaClass: "bg-[#7B3FF2] hover:bg-[#6d35e0] text-white shadow-lg shadow-[#7B3FF2]/30",
  },
  {
    emoji: "🎮",
    label: "Gaming",
    title: "All the Games",
    description:
      "Horror, RPGs, indie gems, and games too cursed to name. If it exists, I'll play it badly and loudly.",
    cta: "Watch Clips",
    href: "https://youtube.com",
    accent: "from-[#19E3FF]/15 to-[#19E3FF]/5",
    border: "border-[#19E3FF]/20 hover:border-[#19E3FF]/40",
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
    accent: "from-[#FF2D95]/15 to-[#FF2D95]/5",
    border: "border-[#FF2D95]/20 hover:border-[#FF2D95]/40",
    ctaClass: "bg-zinc-700 hover:bg-zinc-600 text-white",
  },
];

export default function ContentSection() {
  return (
    <section id="content" className="relative overflow-hidden bg-[#070B14] px-6 py-24">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-20 -left-12 h-[500px] w-[500px] glow-indigo" />
      <div className="pointer-events-none absolute -bottom-16 -right-12 h-[420px] w-[420px] glow-fuchsia" />
      <div className="mx-auto max-w-5xl relative z-10">
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
