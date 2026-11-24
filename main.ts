import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "He had rebuilt the same engine seven times; on the eighth, it started on the first turn, and he just sat there listening to it idle.";

const MIN_LENGTH = 1;
const MAX_LENGTH = 240;

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

// Strict gate: the contest requires 1-240 UTF-8 characters.
const charCount = [...LINE].length;
if (charCount < MIN_LENGTH || charCount > MAX_LENGTH) {
  fail(`line is ${charCount} characters, must be ${MIN_LENGTH}-${MAX_LENGTH}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  fail("line must be a single line without newline characters");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

try {
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(outputPath, LINE, "utf8");
} catch (err) {
  fail(`could not write ${outputPath}: ${(err as Error).message}`);
}

// Read-back verification: the file on disk must be byte-identical.
let written: string;
try {
  written = readFileSync(outputPath, "utf8");
} catch (err) {
  fail(`could not read back ${outputPath}: ${(err as Error).message}`);
}
if (written !== LINE) {
  fail(`read-back mismatch in ${outputPath}`);
}

console.log(`wrote ${charCount} characters to ${outputPath}`);
