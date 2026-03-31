import { ReactNode } from "react";

type Variant = "primary" | "ghost" | "green" | "dark";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-[#7B3FF2] to-[#FF2D95] hover:from-[#6d35e0] hover:to-[#e0267f] text-white font-bold shadow-lg shadow-[#7B3FF2]/40",
  ghost:
    "border border-zinc-600 bg-zinc-800/60 backdrop-blur hover:border-zinc-400 hover:bg-zinc-700/60 text-white font-semibold",
  green: "bg-green-500 hover:bg-green-400 text-black font-bold",
  dark: "bg-zinc-700 hover:bg-zinc-600 text-white font-semibold",
};

interface ButtonProps {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: Variant;
  className?: string;
}

export default function Button({
  href,
  children,
  icon,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full px-7 py-3 text-base transition active:scale-95 ${variantClasses[variant]} ${className}`}
    >
      {icon}
      {children}
    </a>
  );
}
