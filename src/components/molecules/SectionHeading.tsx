import SectionLabel from "../atoms/SectionLabel";

type Accent = "purple" | "cyan" | "fuchsia";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  accent?: Accent;
  titleClass?: string;
  labelLineClass?: string;
  labelTextClass?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  accent = "purple",
  titleClass,
  labelLineClass,
  labelTextClass,
}: SectionHeadingProps) {
  return (
    <div className="mb-8 flex flex-col items-center gap-4 text-center sm:mb-14">
      <SectionLabel label={label} accent={accent} withLines lineClass={labelLineClass} labelClass={labelTextClass} />
      <h2 className={`text-4xl font-black text-white ${titleClass ?? ""}`}>{title}</h2>
      {subtitle && <p className="max-w-md text-zinc-400">{subtitle}</p>}
    </div>
  );
}
