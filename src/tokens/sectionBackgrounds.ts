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

  /** Warm, personal. Magenta + purple + orange. Used for About. */
  warmMagenta: [
    "radial-gradient(ellipse at 85% 15%, rgba(236,72,153,0.11) 0%, transparent 55%)",
    "radial-gradient(ellipse at 8% 88%, rgba(99,102,241,0.09) 0%, transparent 50%)",
    "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.02) 0%, transparent 45%)",
    "linear-gradient(160deg, #0b0619 0%, #100822 45%, #0c071b 100%)",
  ],

  /** Cool, structured. Cyan + indigo + blue. Used for What I Do. */
  coolCyan: [
    "radial-gradient(ellipse at 14% 35%, rgba(34,211,238,0.14) 0%, transparent 44%)",
    "radial-gradient(ellipse at 82% 55%, rgba(99,102,241,0.16) 0%, transparent 46%)",
    "radial-gradient(ellipse at 50% 55%, rgba(14,165,233,0.08) 0%, transparent 52%)",
    "radial-gradient(ellipse at 50% 95%, rgba(34,211,238,0.07) 0%, transparent 38%)",
    "radial-gradient(ellipse at 50% 10%, rgba(99,102,241,0.06) 0%, transparent 36%)",
    "linear-gradient(135deg, #050d18 0%, #070f1e 42%, #080f1e 100%)",
  ],

  /** Warm, creative. Pink + orange + violet. Used for Music. */
  warmPink: [
    "radial-gradient(ellipse at 24% 34%, rgba(244,114,182,0.18) 0%, transparent 38%)",
    "radial-gradient(ellipse at 78% 26%, rgba(249,115,22,0.14) 0%, transparent 36%)",
    "radial-gradient(ellipse at 50% 70%, rgba(168,85,247,0.10) 0%, transparent 45%)",
    "radial-gradient(ellipse at 50% 45%, rgba(255,255,255,0.04) 0%, transparent 50%)",
    "linear-gradient(135deg, #24112c 0%, #31152e 42%, #3a1a30 100%)",
  ],

  /** Deep purple/indigo. Stronger personality than `dark`. */
  deepPurple: [
    "radial-gradient(ellipse at 20% 50%, rgba(123,63,242,0.20) 0%, transparent 50%)",
    "radial-gradient(ellipse at 80% 50%, rgba(168,85,247,0.15) 0%, transparent 48%)",
    "linear-gradient(135deg, #0d0520 0%, #110828 42%, #0d0520 100%)",
  ],

  /** Flat dark base. No colour glows. Used for Links / neutral sections. */
  dark: [
    "linear-gradient(180deg, #070B14 0%, #070B14 100%)",
  ],

} as const;

// ─── Section Assignments ────────────────────────────────────────────────────
// Change a value here to swap a section's colour scheme.
// All available palettes are listed above.

export const sectionBackgrounds = {
  about:   palettes.coolCyan,
  content: palettes.warmMagenta,
  music:   palettes.warmPink,
  links:   palettes.dark,
} satisfies Record<string, readonly string[]>;

// Re-export palettes so you can use them directly in assignments
export { palettes };
