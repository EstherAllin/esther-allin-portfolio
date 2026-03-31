interface TrackCardProps {
  title: string;
  description: string;
  spotify?: string | null;
}

export default function TrackCard({ title, description, spotify }: TrackCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-zinc-800 bg-zinc-800/50 p-6 transition hover:border-zinc-600">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-700 text-xl">
        🎵
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
        <span className="mt-auto text-xs font-medium uppercase tracking-widest text-zinc-600">
          Coming Soon
        </span>
      )}
    </div>
  );
}
