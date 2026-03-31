interface ContentCardProps {
  emoji: string;
  label: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  accent: string;
  border: string;
  ctaClass: string;
}

export default function ContentCard({
  emoji,
  label,
  title,
  description,
  cta,
  href,
  accent,
  border,
  ctaClass,
}: ContentCardProps) {
  return (
    <div
      className={`group relative flex flex-col gap-4 rounded-2xl border bg-gradient-to-br p-7 transition-all duration-300 bg-zinc-900 ${border} ${accent}`}
    >
      <span className="text-3xl">{emoji}</span>
      <div>
        <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-zinc-500">
          {label}
        </span>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="flex-1 text-sm leading-relaxed text-zinc-400">{description}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex w-fit items-center rounded-full px-5 py-2.5 text-sm font-semibold transition active:scale-95 ${ctaClass}`}
      >
        {cta}
      </a>
    </div>
  );
}
