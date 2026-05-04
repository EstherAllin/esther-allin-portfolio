interface ContentCardProps {
  emoji?: string;
  image?: string;
  imageAlt?: string;
  label: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  accent: string;
  border: string;
  ctaClass: string;
  secondaryCta?: string;
  secondaryHref?: string;
  isPrimary?: boolean;
}

export default function ContentCard({
  emoji,
  image,
  imageAlt = "",
  label,
  title,
  description,
  cta,
  href,
  accent,
  border,
  ctaClass,
  secondaryCta,
  secondaryHref,
  isPrimary = false,
}: ContentCardProps) {
  return (
    <div
      className={`group relative flex flex-col gap-4 rounded-2xl border bg-gradient-to-br p-7 transition-all duration-300 ease-out bg-zinc-900 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.28)] ${
        isPrimary
          ? "shadow-[0_0_64px_rgba(123,63,242,0.12),0_14px_40px_rgba(123,63,242,0.09),0_8px_20px_rgba(0,0,0,0.20)] scale-[1.03]"
          : "shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
      } ${border} ${accent}`}
    >
      {image ? (
        <img
          src={image}
          alt={imageAlt}
          width={64}
          height={64}
          className="h-16 w-16 object-contain drop-shadow-[0_0_10px_rgba(255,200,100,0.35)]"
        />
      ) : (
        <span className="text-3xl">{emoji}</span>
      )}
      <div>
        <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-zinc-500">
          {label}
        </span>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="flex-1 text-sm leading-relaxed text-zinc-400">{description}</p>
      <div className="flex flex-col gap-2">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex w-fit items-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ease-out hover:scale-[1.04] active:scale-95 ${ctaClass}`}
        >
          {cta}
        </a>
        {secondaryCta && secondaryHref && (
          <a
            href={secondaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center rounded-full border border-[#53FC18]/40 bg-[#53FC18]/8 px-4 py-1.5 text-xs font-semibold text-[#53FC18]/80 backdrop-blur transition hover:border-[#53FC18]/70 hover:bg-[#53FC18]/15 hover:text-[#53FC18] active:scale-95"
          >
            {secondaryCta}
          </a>
        )}
      </div>
    </div>
  );
}
