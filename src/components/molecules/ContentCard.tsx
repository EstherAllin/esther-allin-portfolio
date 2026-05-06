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
  isSupport?: boolean;
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
  isSupport = false,
}: ContentCardProps) {
  return (
    <div
      className={`group relative flex flex-col gap-4 rounded-2xl border bg-gradient-to-br transition-all duration-300 ease-out bg-zinc-900 ${
        isPrimary
          ? "p-8 hover:-translate-y-2 shadow-[0_0_72px_rgba(123,63,242,0.22),0_16px_44px_rgba(123,63,242,0.12),0_8px_24px_rgba(0,0,0,0.24)] hover:shadow-[0_0_100px_rgba(123,63,242,0.34),0_24px_56px_rgba(123,63,242,0.18),0_10px_32px_rgba(0,0,0,0.32)]"
          : isSupport
          ? "p-7 hover:-translate-y-1 shadow-[0_6px_22px_rgba(0,0,0,0.14)] hover:shadow-[0_14px_36px_rgba(0,0,0,0.22),0_0_22px_rgba(99,102,241,0.12)]"
          : "p-7 hover:-translate-y-1.5 shadow-[0_10px_32px_rgba(0,0,0,0.16)] hover:shadow-[0_18px_44px_rgba(0,0,0,0.24),0_0_28px_rgba(255,45,149,0.10)]"
      } ${border} ${accent}`}
    >
      {/* Primary top accent line */}
      {isPrimary && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-purple-400/65 to-transparent" />
      )}
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
        <span className={`mb-1 block text-xs font-semibold uppercase tracking-widest ${
          isPrimary ? "text-purple-300/80" : isSupport ? "text-zinc-400/65" : "text-zinc-400"
        }`}>
          {label}
        </span>
        <h3 className={`font-bold text-white ${
          isPrimary ? "text-2xl" : "text-xl"
        }`}>{title}</h3>
      </div>
      <p className={`flex-1 text-sm leading-relaxed ${
        isSupport ? "text-zinc-300/85" : "text-zinc-300"
      }`}>{description}</p>
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
