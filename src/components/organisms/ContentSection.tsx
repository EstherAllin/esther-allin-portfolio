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
    accent: "from-purple-900/40 via-purple-800/15 to-fuchsia-900/20",
    border: "border-purple-500/45 hover:border-purple-400/72",
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
    accent: "from-[#FF2D95]/12 via-[#FF6B35]/5 to-transparent",
    border: "border-[#FF2D95]/18 hover:border-[#FF6B35]/35",
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
    accent: "from-indigo-900/28 via-purple-900/12 to-transparent",
    border: "border-indigo-500/22 hover:border-indigo-400/45",
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
          opacity: 0.12,
          mixBlendMode: "soft-light",
        }}
      />
      {/* Section seam fades */}
      {/* Top seam — fades in from About's palette base */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#0d0a22]/48 to-transparent" />
      {/* Bottom seam — fades toward Music's palette base */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#160a2a]/40 to-transparent" />
      {/* Ambient drift blobs */}
      <div className="pointer-events-none absolute -top-10 -left-16 h-[420px] w-[420px] glow-purple ambient-drift-1 opacity-50 [animation-delay:2s]" />
      <div className="pointer-events-none absolute -bottom-10 -right-16 h-[380px] w-[380px] glow-fuchsia ambient-drift-2 opacity-40 [animation-delay:7s]" />
      {/* Cyan bridge — carries About's teal energy into this section */}
      <div className="pointer-events-none absolute -top-6 -right-8 h-[280px] w-[280px] ambient-drift-3 opacity-[0.28] [animation-delay:14s]" style={{ background: "radial-gradient(circle, rgba(25,227,255,0.22) 0%, transparent 70%)" }} />
      <div className="mx-auto max-w-5xl relative z-10">
        <SectionHeading
          label="Content"
          title="What I Do"
          titleClass="tracking-wide bg-gradient-to-r from-white via-purple-100 to-fuchsia-200 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(168,85,247,0.18)]"
        />
        <div className="relative">
          <div className="pointer-events-none absolute -inset-8 rounded-3xl bg-[radial-gradient(ellipse_at_50%_50%,rgba(123,63,242,0.06)_0%,transparent_70%)]" />
          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, i) => (
              <ContentCard key={card.label} {...card} isPrimary={i === 0} isSupport={i === 2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
