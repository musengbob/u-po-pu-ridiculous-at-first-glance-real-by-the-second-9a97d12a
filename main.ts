import { mkdirSync, writeFileSync } from "node:fs";

// Ridiculous at First Glance, Real by the Second
// One sentence, 188 characters: a bizarre startup pitch that sounds like a
// joke until the business logic lands — brands pay, cities fix, everyone wins.
//
// GATE (competition u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a):
//   - exactly one sentence (a single terminal period, no other sentence
//     terminators mid-text)
//   - 1–200 characters (this entry: 188 chars / 190 bytes UTF-8, the em dash
//     is 3 bytes, so char count != byte count)
//   - single line, no trailing newline — the file must end with the final
//     period, not "\n"
// validateEntry() below enforces every clause of that gate before anything
// is written, so a future edit that breaks the gate fails loudly instead of
// silently producing a rejected entry.
const ENTRY =
  "We sell naming rights to potholes: brands pay to sponsor the crater outside your office, and the city finally fixes it — because a pothole named after a burger chain gets filled in a week.";

function validateEntry(text: string): void {
  if (text.length === 0 || text.length > 200) {
    throw new Error(`entry must be 1-200 chars, got ${text.length}`);
  }
  if (text.trim() !== text) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
  if (text.includes("\n") || text.endsWith("\n")) {
    throw new Error("entry must be a single line with no trailing newline");
  }
  // Exactly one sentence: one terminal period, at the very end, and no
  // other sentence-ending punctuation anywhere in the text.
  const terminators = text.match(/[.!?]/g) ?? [];
  if (terminators.length !== 1 || !text.endsWith(".")) {
    throw new Error(
      `entry must be exactly one sentence, found ${terminators.length} terminator(s)`
    );
  }
}

validateEntry(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
