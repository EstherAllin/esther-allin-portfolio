type Accent = "purple" | "cyan" | "fuchsia";

const accentClasses: Record<Accent, { line: string; text: string }> = {
  purple: { line: "bg-[#7B3FF2]", text: "text-violet-400" },
  cyan: { line: "bg-[#19E3FF]", text: "text-[#19E3FF]" },
  fuchsia: { line: "bg-[#FF2D95]", text: "text-[#FF2D95]" },
};

interface SectionLabelProps {
  label: string;
  accent?: Accent;
  withLines?: boolean;
  lineClass?: string;
  labelClass?: string;
}

export default function SectionLabel({
  label,
  accent = "purple",
  withLines = false,
  lineClass,
  labelClass,
}: SectionLabelProps) {
  const { line, text } = accentClasses[accent];
  return (
    <div className="flex items-center gap-3">
      {withLines && <span className={`h-px w-8 ${line} ${lineClass ?? ""}`} />}
      <span className={`text-sm font-semibold uppercase tracking-widest ${text} ${labelClass ?? ""}`}>{label}</span>
      {withLines && <span className={`h-px w-8 ${line} ${lineClass ?? ""}`} />}
    </div>
  );
}
