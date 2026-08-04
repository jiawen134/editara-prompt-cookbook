import { presets } from "./presets.mjs";

function normalizeItems(items) {
  const values = Array.isArray(items) ? items : String(items ?? "").split(",");
  return [...new Set(values.map((item) => String(item).trim()).filter(Boolean))];
}

export function buildPrompt({ preset, target = "the image", keep = [] }) {
  const selected = presets[preset];
  if (!selected) {
    throw new Error(`Unknown preset: ${preset}`);
  }

  const subject = String(target).trim() || "the image";
  const constraints = normalizeItems([...selected.defaults, ...normalizeItems(keep)]);
  const instruction = selected.instruction.replace("{target}", subject);

  return `${instruction}. Keep ${constraints.join(", ")} unchanged.`;
}
