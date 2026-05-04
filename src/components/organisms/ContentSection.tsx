import SectionHeading from "../molecules/SectionHeading";
import ContentCard from "../molecules/ContentCard";
import { sectionBackgrounds } from "../../tokens/sectionBackgrounds";

const cards = [
  {
    emoji: "🟣",
    label: "Twitch Streams",
    title: "Catch Me Live",
    description:
      "Tune in for variety streams, horror game nights, and unhinged reactions. Live every week — check the schedule on Twitch.",
    cta: "Watch on Twitch",
    href: "https://twitch.tv/valashibbs",
    accent: "from-[#7B3FF2]/30 via-purple-600/10 to-[#FF2D95]/10",
    border: "border-purple-500/30 hover:border-purple-400/60",
    ctaClass: "bg-gradient-to-r from-[#7B3FF2] to-[#9B5FF2] hover:from-[#8B4FF2] hover:to-[#AB6FF2] text-white shadow-lg shadow-[#7B3FF2]/40",
    secondaryCta: "Watch on Kick",
    secondaryHref: "https://kick.com/valashibbs",
  },
  {
    emoji: "🎮",
    label: "Gaming",
    title: "All the Games",
    description:
      "Horror, RPGs, indie gems, and games too cursed to name. If it exists, I'll play it badly and loudly.",
    cta: "Watch Clips",
    href: "https://youtube.com",
    accent: "from-[#FF2D95]/15 via-[#FF6B35]/6 to-[#FF2D95]/4",
    border: "border-[#FF2D95]/20 hover:border-[#FF6B35]/35",
    ctaClass: "bg-gradient-to-r from-[#FF2D95] to-[#FF6B35] hover:from-[#FF3FA0] hover:to-[#FF7A45] text-white shadow-lg shadow-[#FF2D95]/20",
  },
  {
    label: "Community",
    title: "Pug Empire",
    image: "/images/PUG_Animated.gif",
    imageAlt: "Rupert the pug",
    description:
      "A gloriously chaotic misfit crew. Games, memes, jump scares, and Rupert judging your every move. Come join the chaos.",
    cta: "Join the Discord",
    href: "https://discord.gg/DmG84nFmdY",
    accent: "from-[#1a2a14]/70 to-[#0e1a0e]/40",
    border: "border-[#3a5c2a]/25 hover:border-[#3a5c2a]/50",
    ctaClass: "bg-[#5865F2] hover:bg-[#6b77f5] text-white shadow-lg shadow-[#5865F2]/25",
  },
];

export default function ContentSection() {
  return (
    <section
      id="content"
      className="relative overflow-hidden px-6 py-24"
      style={{ background: [...sectionBackgrounds.content].join(", ") }}
    >
      {/* Hero texture echo — same image at very low opacity so hexagons/haze carry through */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          opacity: 0.08,
          mixBlendMode: "soft-light",
        }}
      />
      <div className="mx-auto max-w-5xl relative z-10">
        <SectionHeading
          label="Content"
          title="What I Do"
          titleClass="tracking-wide bg-gradient-to-r from-white via-purple-100 to-fuchsia-200 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(168,85,247,0.18)]"
        />
        <div className="relative">
          <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-black/5" />
          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, i) => (
              <ContentCard key={card.label} {...card} isPrimary={i === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
