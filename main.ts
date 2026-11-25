import { mkdirSync, writeFileSync } from "node:fs";

// One Line, Big Laugh — a single funny line, written to /output/entry.txt.
const LINE =
  "I told the barista my name is 'Batman' for the cup, and now the café has a loyalty card, a cape discount, and a restraining order.";

// Gate: the scorer only accepts 1-200 characters of non-blank UTF-8 text.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}
console.log(`writing ${LINE.length} characters to /output/entry.txt`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
