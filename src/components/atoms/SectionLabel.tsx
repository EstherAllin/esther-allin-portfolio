type Accent = "purple" | "cyan" | "fuchsia";

const accentClasses: Record<Accent, { line: string; text: string }> = {
  purple: { line: "bg-purple-500", text: "text-purple-400" },
  cyan: { line: "bg-cyan-500", text: "text-cyan-400" },
  fuchsia: { line: "bg-fuchsia-500", text: "text-fuchsia-400" },
};

interface SectionLabelProps {
  label: string;
  accent?: Accent;
  withLines?: boolean;
}

export default function SectionLabel({
  label,
  accent = "purple",
  withLines = false,
}: SectionLabelProps) {
  const { line, text } = accentClasses[accent];
  return (
    <div className="flex items-center gap-3">
      {withLines && <span className={`h-px w-8 ${line}`} />}
      <span className={`text-sm font-semibold uppercase tracking-widest ${text}`}>{label}</span>
      {withLines && <span className={`h-px w-8 ${line}`} />}
    </div>
  );
}
