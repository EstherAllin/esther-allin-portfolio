interface TrackCardProps {
  title: string;
  description: string;
  spotify?: string | null;
  index?: number;
}

const cardGradients = [
  "from-cyan-500/20 to-purple-500/20",
  "from-fuchsia-500/20 to-cyan-500/20",
  "from-purple-500/20 to-pink-500/20",
];

export default function TrackCard({ title, description, spotify, index = 0 }: TrackCardProps) {
  return (
    <div className="group flex flex-col gap-3 rounded-xl border border-zinc-800 bg-zinc-800/40 p-6 transition hover:border-zinc-600 hover:bg-zinc-800/70">
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${cardGradients[index % cardGradients.length]}`}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-white/60">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
      </div>
      <div>
        <h3 className="font-bold text-white">{title}</h3>
        <p className="mt-1 text-sm text-zinc-500">{description}</p>
      </div>
      {spotify ? (
        <a
          href={spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto text-sm font-medium text-green-400 hover:text-green-300"
        >
          Play on Spotify →
        </a>
      ) : (
        <span className="mt-auto flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-500">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-500" />
          </span>
          Coming Soon
        </span>
      )}
    </div>
  );
}
