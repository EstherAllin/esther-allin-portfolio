import { ReactNode } from "react";
import { ChevronRightIcon } from "../atoms/icons";

interface SocialLinkItemProps {
  name: string;
  handle: string;
  href: string;
  bg: string;
  shadow: string;
  icon: ReactNode;
}

export default function SocialLinkItem({
  name,
  handle,
  href,
  bg,
  shadow,
  icon,
}: SocialLinkItemProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-5 rounded-2xl px-7 py-5 font-semibold text-white shadow-lg transition active:scale-[0.98] ${bg} ${shadow}`}
    >
      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-white/15">
        {icon}
      </span>
      <div className="flex flex-col leading-tight">
        <span className="text-base font-bold">{name}</span>
        <span className="text-sm font-normal opacity-75">{handle}</span>
      </div>
      <span className="ml-auto opacity-50">
        <ChevronRightIcon />
      </span>
    </a>
  );
}
