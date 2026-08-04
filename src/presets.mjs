export const presets = Object.freeze({
  "remove-object": {
    instruction: "Remove {target} and reconstruct the area naturally",
    defaults: ["lighting", "shadows", "camera angle"],
  },
  "replace-background": {
    instruction: "Replace the background behind {target} with the described scene",
    defaults: ["subject identity", "pose", "foreground lighting"],
  },
  "restore-photo": {
    instruction: "Repair scratches, dust, fading, and damaged edges in {target}",
    defaults: ["faces", "clothing", "original composition"],
  },
  "colorize-photo": {
    instruction: "Colorize {target} with natural and historically plausible colors",
    defaults: ["facial identity", "texture", "composition"],
  },
  upscale: {
    instruction: "Upscale {target} and improve fine detail",
    defaults: ["colors", "texture", "framing"],
  },
  "extend-image": {
    instruction: "Extend {target} and continue the existing scene naturally",
    defaults: ["horizon", "perspective", "lighting"],
  },
});

export function presetNames() {
  return Object.keys(presets);
}
