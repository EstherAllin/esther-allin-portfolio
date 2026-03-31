const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Music", href: "#music" },
  { label: "Links", href: "#links" },
  { label: "About", href: "#about" },
];

interface NavLinksProps {
  onClick?: () => void;
  className?: string;
}

export default function NavLinks({ onClick, className = "" }: NavLinksProps) {
  return (
    <ul className={className}>
      {NAV_LINKS.map(({ label, href }) => (
        <li key={href}>
          <a
            href={href}
            onClick={onClick}
            className="text-sm font-medium text-zinc-400 transition-colors duration-150 hover:text-white"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
