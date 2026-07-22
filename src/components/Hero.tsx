export default function Hero() {
  return (
    <section className="flex items-center justify-center min-h-[75vh] px-6 py-14">
      <div className="text-center max-w-3xl">
        {/* Purple label */}
        <span className="inline-block mb-6 px-3 py-1 text-sm font-medium text-purple-400 bg-purple-400/10 rounded-full">
          Available for Work
        </span>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
          Websites shouldn&apos;t frustrate people.
        </h1>

        {/* Name + role */}
        <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
          I&apos;m{" "}
          <strong className="text-slate-200 font-semibold">Esther Allin</strong>{" "}
          — a frontend developer who came from marketing and builds for real
          users.
        </p>
        <a
          href="#featured-work"
          className="mt-8 inline-block px-6 py-3 text-sm font-medium text-white bg-purple-600 hover:bg-purple-500 rounded-full transition-colors duration-200"
        >
          See My Work
        </a>
      </div>
    </section>
  );
}