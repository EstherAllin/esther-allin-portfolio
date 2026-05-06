export default function FooterSection() {
  return (
    <footer className="relative border-t border-zinc-800/50 bg-[#070B14] px-6 py-8 text-center text-sm text-zinc-500">
      {/* Top seam — absorbs Links bottom */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#070B14] to-transparent" />
      {/* Faint ambient glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(123,63,242,0.08) 0%, transparent 70%)" }} />
      <p className="relative text-zinc-400/70">&copy; {new Date().getFullYear()} ValaShibbs. All rights reserved.</p>
    </footer>
  );
}
