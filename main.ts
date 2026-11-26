import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-Line Robot Wedding Vows — rebuild #3 (rombak total).
// Pick: the ceremony itself, counted. Classic "to have and to hold" frame,
// triplet of concrete ceremony numbers (2 rings, 1 kiss, 0 objections),
// then the turn in the last words: the vow is to keep the receipt,
// in case the spouse ever wants a refund.
// Gate: single line, 1-160 chars; this pick is 144 chars, no trailing newline needed beyond the text itself.
const PICK =
  "I take you to have and to hold: 2 rings exchanged, 1 kiss logged, 0 objections filed \u2014 and I vow to keep the receipt, in case you want a refund.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? process.cwd();
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, PICK, "utf8");
chmodSync(target, 0o644);
console.log(`wrote ${target} (${PICK.length} chars)`);
