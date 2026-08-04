#!/usr/bin/env node

import { buildPrompt } from "../src/prompt-builder.mjs";
import { presetNames } from "../src/presets.mjs";

const args = process.argv.slice(2);

function valueAfter(flag) {
  const index = args.indexOf(flag);
  return index >= 0 ? args[index + 1] : undefined;
}

function usage() {
  return [
    "Usage:",
    "  editara-prompt --preset <name> [--target <subject>] [--keep <a,b,c>]",
    "  editara-prompt --list",
    "",
    `Presets: ${presetNames().join(", ")}`,
  ].join("\n");
}

if (args.includes("--help")) {
  console.log(usage());
  process.exit(0);
}

if (args.includes("--list")) {
  console.log(presetNames().join("\n"));
  process.exit(0);
}

const preset = valueAfter("--preset");
if (!preset) {
  console.error(usage());
  process.exit(1);
}

try {
  console.log(
    buildPrompt({
      preset,
      target: valueAfter("--target"),
      keep: valueAfter("--keep"),
    }),
  );
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
