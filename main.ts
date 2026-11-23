// One sentence to convince a friend who has never coded to let an AI agent
// build their first app idea on make.fun.
// Deterministic: writes the same fixed text on every run.
// No network, no randomness, no external dependencies.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "You've told me about that app idea a dozen times \u2014 say it once more and an AI agent on make.fun will turn it into something you can tap on your phone, no coding from you; if it isn't right, you've lost an afternoon, not a year.";

// The gate allows 1 to 240 Unicode code points: fail loudly rather than
// ever writing an entry the gate would refuse.
const len = [...TEXT].length;
if (len < 1 || len > 240) {
  throw new Error(`entry text is ${len} characters, outside the 1-240 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
