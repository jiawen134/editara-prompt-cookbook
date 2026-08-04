import assert from "node:assert/strict";
import test from "node:test";

import { buildPrompt } from "../src/prompt-builder.mjs";
import { presetNames } from "../src/presets.mjs";

test("builds a focused restoration prompt", () => {
  assert.equal(
    buildPrompt({
      preset: "restore-photo",
      target: "a damaged family portrait",
      keep: "original framing, handwritten date",
    }),
    "Repair scratches, dust, fading, and damaged edges in a damaged family portrait. Keep faces, clothing, original composition, original framing, handwritten date unchanged.",
  );
});

test("deduplicates constraints", () => {
  assert.equal(
    buildPrompt({ preset: "upscale", keep: ["texture", "facial identity"] }),
    "Upscale the image and improve fine detail. Keep colors, texture, framing, facial identity unchanged.",
  );
});

test("lists stable preset names", () => {
  assert.deepEqual(presetNames(), [
    "remove-object",
    "replace-background",
    "restore-photo",
    "colorize-photo",
    "upscale",
    "extend-image",
  ]);
});

test("rejects an unknown preset", () => {
  assert.throws(() => buildPrompt({ preset: "unknown" }), /Unknown preset/);
});
