/**
 * Section Background Tokens
 *
 * All section background palettes are defined here as named gradient arrays.
 * To swap a section's colour scheme, change the value in `sectionBackgrounds`
 * below — e.g. change `about: palettes.warmMagenta` to `about: palettes.coolCyan`.
 *
 * Each palette is an array of CSS gradient strings passed to `background`.
 * The last item is always the base `linear-gradient`; earlier items layer on top.
 */

// ─── Palette Definitions ────────────────────────────────────────────────────

const palettes = {

  /**
   * Bright hero connector. Teal top-right + magenta lower-left + purple center.
   * Lighter base so it reads as a step up from pitch-black hero blend zone.
   * Used for About.
   */
  brightAbout: [
    "radial-gradient(ellipse at 80% 15%, rgba(25,227,255,0.24) 0%, transparent 52%)",
    "radial-gradient(ellipse at 12% 75%, rgba(255,45,149,0.22) 0%, transparent 50%)",
    "radial-gradient(ellipse at 50% 45%, rgba(123,63,242,0.20) 0%, transparent 58%)",
    "radial-gradient(ellipse at 88% 82%, rgba(255,138,61,0.12) 0%, transparent 42%)",
    "radial-gradient(ellipse at 50% 0%, rgba(25,227,255,0.08) 0%, transparent 40%)",
    "linear-gradient(160deg, #0f0b24 0%, #140f2e 50%, #0d0a22 100%)",
  ],

  /**
   * Vibrant multi-colour. Magenta left + teal right + deep purple center + orange accent.
   * Rich colour depth for cards to lift from. Used for What I Do.
   */
  vibrantContent: [
    "radial-gradient(ellipse at 16% 28%, rgba(255,45,149,0.24) 0%, transparent 48%)",
    "radial-gradient(ellipse at 84% 22%, rgba(25,227,255,0.22) 0%, transparent 48%)",
    "radial-gradient(ellipse at 50% 68%, rgba(123,63,242,0.28) 0%, transparent 56%)",
    "radial-gradient(ellipse at 14% 88%, rgba(255,138,61,0.16) 0%, transparent 42%)",
    "radial-gradient(ellipse at 86% 76%, rgba(168,85,247,0.18) 0%, transparent 44%)",
    "radial-gradient(ellipse at 50% 10%, rgba(255,45,149,0.08) 0%, transparent 38%)",
    "linear-gradient(135deg, #0a1020 0%, #0d1326 42%, #0b1022 100%)",
  ],

  /**
   * Music-stage energy. Hot magenta left + sunset orange right + deep purple center.
   * Brighter, richer base — not muddy wine. Used for Music.
   */
  stageMusic: [
    "radial-gradient(ellipse at 22% 30%, rgba(255,45,149,0.32) 0%, transparent 46%)",
    "radial-gradient(ellipse at 78% 25%, rgba(255,138,61,0.28) 0%, transparent 44%)",
    "radial-gradient(ellipse at 50% 60%, rgba(123,63,242,0.30) 0%, transparent 54%)",
    "radial-gradient(ellipse at 50% -5%, rgba(255,45,149,0.20) 0%, transparent 50%)",
    "radial-gradient(ellipse at 18% 94%, rgba(168,85,247,0.16) 0%, transparent 42%)",
    "radial-gradient(ellipse at 82% 90%, rgba(255,138,61,0.10) 0%, transparent 38%)",
    "linear-gradient(145deg, #160a2a 0%, #1e0e32 42%, #180b28 100%)",
  ],

  /**
   * Bright playful premium. Magenta top bloom + purple left + orange right + teal corner.
   * Used for Find Me Everywhere / Links.
   */
  vibrantLinks: [
    "radial-gradient(ellipse at 50% -8%, rgba(255,45,149,0.30) 0%, transparent 56%)",
    "radial-gradient(ellipse at 18% 45%, rgba(123,63,242,0.26) 0%, transparent 52%)",
    "radial-gradient(ellipse at 82% 35%, rgba(255,138,61,0.20) 0%, transparent 48%)",
    "radial-gradient(ellipse at 6% 92%, rgba(25,227,255,0.18) 0%, transparent 46%)",
    "radial-gradient(ellipse at 90% 88%, rgba(255,45,149,0.14) 0%, transparent 40%)",
    "radial-gradient(ellipse at 50% 55%, rgba(123,63,242,0.14) 0%, transparent 50%)",
    "linear-gradient(180deg, #0d0a1e 0%, #100c24 55%, #0a0914 100%)",
  ],

  /** Warm, personal. Magenta + purple + orange. */
  warmMagenta: [
    "radial-gradient(ellipse at 85% 15%, rgba(236,72,153,0.11) 0%, transparent 55%)",
    "radial-gradient(ellipse at 8% 88%, rgba(99,102,241,0.09) 0%, transparent 50%)",
    "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.02) 0%, transparent 45%)",
    "linear-gradient(160deg, #0b0619 0%, #100822 45%, #0c071b 100%)",
  ],

  /** Cool, structured. Cyan + indigo + blue. */
  coolCyan: [
    "radial-gradient(ellipse at 14% 35%, rgba(34,211,238,0.14) 0%, transparent 44%)",
    "radial-gradient(ellipse at 82% 55%, rgba(99,102,241,0.16) 0%, transparent 46%)",
    "radial-gradient(ellipse at 50% 55%, rgba(14,165,233,0.08) 0%, transparent 52%)",
    "radial-gradient(ellipse at 50% 95%, rgba(34,211,238,0.07) 0%, transparent 38%)",
    "radial-gradient(ellipse at 50% 10%, rgba(99,102,241,0.06) 0%, transparent 36%)",
    "linear-gradient(135deg, #050d18 0%, #070f1e 42%, #080f1e 100%)",
  ],

  /** Warm, creative. Pink + orange + violet. */
  warmPink: [
    "radial-gradient(ellipse at 24% 34%, rgba(244,114,182,0.18) 0%, transparent 38%)",
    "radial-gradient(ellipse at 78% 26%, rgba(249,115,22,0.14) 0%, transparent 36%)",
    "radial-gradient(ellipse at 50% 70%, rgba(168,85,247,0.10) 0%, transparent 45%)",
    "radial-gradient(ellipse at 50% 45%, rgba(255,255,255,0.04) 0%, transparent 50%)",
    "linear-gradient(135deg, #24112c 0%, #31152e 42%, #3a1a30 100%)",
  ],

  /** Deep purple/indigo. */
  deepPurple: [
    "radial-gradient(ellipse at 20% 50%, rgba(123,63,242,0.20) 0%, transparent 50%)",
    "radial-gradient(ellipse at 80% 50%, rgba(168,85,247,0.15) 0%, transparent 48%)",
    "linear-gradient(135deg, #0d0520 0%, #110828 42%, #0d0520 100%)",
  ],

  /** Flat dark base. No colour glows. */
  dark: [
    "linear-gradient(180deg, #070B14 0%, #070B14 100%)",
  ],

  /** Smoky branded dark. Purple/magenta top-center, cyan lower-left. */
  smokyChaos: [
    "radial-gradient(ellipse at 50% -5%, rgba(255,45,149,0.14) 0%, transparent 50%)",
    "radial-gradient(ellipse at 50% 0%, rgba(123,63,242,0.12) 0%, transparent 55%)",
    "radial-gradient(ellipse at 8% 92%, rgba(25,227,255,0.09) 0%, transparent 44%)",
    "linear-gradient(180deg, #080B18 0%, #07091A 55%, #070B14 100%)",
  ],

} as const;

// ─── Section Assignments ────────────────────────────────────────────────────
// Change a value here to swap a section's colour scheme.
// All available palettes are listed above.

export const sectionBackgrounds = {
  about:   palettes.brightAbout,
  content: palettes.vibrantContent,
  music:   palettes.stageMusic,
  links:   palettes.vibrantLinks,
} satisfies Record<string, readonly string[]>;

// Re-export palettes so you can use them directly in assignments
export { palettes };
