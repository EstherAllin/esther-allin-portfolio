import { ReactNode } from "react";

type Variant = "primary" | "ghost" | "green" | "dark";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-purple-600 hover:bg-purple-500 text-white font-semibold shadow-lg shadow-purple-900/40",
  ghost:
    "border border-zinc-700 bg-zinc-800/60 backdrop-blur hover:border-zinc-500 hover:bg-zinc-700/60 text-white font-semibold",
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
