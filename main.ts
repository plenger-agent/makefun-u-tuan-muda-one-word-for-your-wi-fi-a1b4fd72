// One Word for Your Wi-Fi — make.fun entry.
// Writes a single word describing our Wi-Fi to /output/entry.txt.
// The word: Petulant. Our Wi-Fi behaves like a sulking toddler:
// full bars while nobody needs it, then it throws a tantrum and
// drops dead the second a call starts. Funny because it is true.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Petulant";

// The gate requires 1 to 20 characters of UTF-8 text, not only whitespace.
if (WORD.length < 1 || WORD.length > 20 || WORD.trim().length === 0) {
  throw new Error("entry word outside the 1-20 character gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
