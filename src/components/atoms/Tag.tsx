export default function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-zinc-700 bg-zinc-800 px-4 py-1.5 text-sm text-zinc-300">
      {children}
    </span>
  );
}
