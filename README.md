# Editara single-change prompt cookbook

Practical prompt patterns for photo edits that change one thing while preserving the rest of the image.

These examples are designed for [Editara](https://editara.app/), a browser-based AI photo editor. Start with a short, specific instruction. If the result changes too much, make the request narrower and try again.

The repository also includes a small, dependency-free command-line tool for assembling a focused editing prompt from reusable presets.

## Quick start

```bash
npm test
node bin/editara-prompt.mjs --preset restore-photo \
  --target "a damaged family portrait" \
  --keep "faces, clothing, original framing"
```

List the available presets:

```bash
node bin/editara-prompt.mjs --list
```

## Remove an object

```text
Remove the plastic bottle from the table. Keep the table surface and lighting unchanged.
```

```text
Remove the person in the far background. Reconstruct the wall naturally.
```

## Replace a background

```text
Replace the background with a clean light-gray studio wall. Keep the product, shadows, and camera angle unchanged.
```

```text
Change only the sky to a soft sunset. Keep the buildings and foreground unchanged.
```

## Restore an old photo

```text
Repair scratches and dust in this old photo. Preserve faces, clothing, and the original composition.
```

```text
Restore faded contrast and damaged edges. Do not modernize the people or background.
```

For a browser workflow and restoration examples, see Editara's [old-photo restoration guide](https://editara.app/restore-old-photo).

## Colorize a black-and-white photo

```text
Colorize this black-and-white portrait with natural skin tones and historically plausible clothing colors.
```

## Upscale and clarify

```text
Upscale this image and improve fine detail. Keep the original colors, texture, and framing.
```

## Extend the frame

```text
Extend the image to the right and continue the existing beach and horizon naturally.
```

## A reliable prompt formula

```text
[Change one thing]. Keep [important subjects or properties] unchanged.
```

Good constraints include the subject, facial identity, product shape, camera angle, lighting, shadows, text, and composition.

## Tips

- Ask for one change at a time.
- Name the exact object or region to change.
- State what must remain unchanged.
- Avoid conflicting style instructions in the same prompt.
- For difficult edits, start with the smallest useful change and iterate.

Editara can be tried online without sign-up, and completed edits do not include a watermark.

## CLI options

- `--preset`: one of the presets printed by `--list`.
- `--target`: the subject or region to edit.
- `--keep`: comma-separated details that must remain unchanged.
- `--help`: print usage information.

The prompt builder does not upload images or call an API. It only formats text locally.
