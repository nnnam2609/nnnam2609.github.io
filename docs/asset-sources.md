# Homepage asset sources

This file records the provenance review for the **From Sound to Shape** homepage. Paths use the
aliases `<PhD_A2A>` and `<Downloads>` so the documentation does not expose a workstation username or
absolute local path.

## Assets used

| Asset                                   | Source                                  | Repository destination                         | Processing                                                                                           | Publication rationale                                                                                 |
| --------------------------------------- | --------------------------------------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Hero waveform / latent / contour visual | Original SVG authored for this site     | `src/components/home/SoundToShapeVisual.astro` | Hand-authored responsive SVG; no copied geometry                                                     | Abstract research illustration with no participant data, identifiers, metrics, or third-party artwork |
| Research pipeline visuals               | Original SVG authored for this site     | `src/components/home/ResearchPipeline.astro`   | Hand-authored line art and CSS state transitions                                                     | Conceptual process diagram, explicitly described as non-literal                                       |
| Project mini visuals                    | Original SVG authored for this site     | `src/components/home/ProjectVisual.astro`      | Hand-authored SVG variants for the three verified projects                                           | Contains no experimental results or unverified claims                                                 |
| Research theme visuals                  | Original SVG authored for this site     | `src/components/home/ResearchThemes.astro`     | Hand-authored waveform, contour, and MRI-inspired frame                                              | Abstract and free of research data                                                                    |
| Profile photograph                      | User-provided `avatar.jpg`              | `public/profile-nhat-nam.webp`                 | EXIF orientation applied, resized to 384×384, converted to WebP, and metadata omitted; no retouching | The user confirmed the identity and permission to publish on 2026-07-18                               |
| Social preview                          | Original SVG authored for this site     | `public/og-from-sound-to-shape.svg`            | Created at a 1200×630 view box                                                                       | Contains only public profile text and abstract shapes                                                 |
| Favicon                                 | Existing local SVG, redesigned in place | `public/favicon.svg`                           | Reworked into a waveform/contour mark                                                                | Original vector mark with no external rights dependency                                               |
| Validation screenshots                  | Local production preview                | `docs/validation/*.png`                        | Browser screenshots at representative viewports/themes                                               | Documentation only; not included in deployed site assets                                              |

The source `avatar.jpg` remains unchanged. Only the optimized repository copy was created. No source
file was overwritten, renamed, moved, or deleted.

## Reviewed but not used

| Candidate                                                                    | Location                                       | Decision                                                                                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Grid annotation images                                                       | `<PhD_A2A>/grid transform/docs/assets/github/` | Not used. The user explicitly did not authorize grid assets for publication.                                                              |
| Grid/contour overlays and stage visualizations                               | `<PhD_A2A>/grid transform/outputs/`            | Not used. The user explicitly did not authorize grid assets for publication; filenames may also expose speaker/session/frame identifiers. |
| Segmentation overlays                                                        | `<PhD_A2A>/Preprocess/outputs/`                | Not used. The user explicitly did not authorize segmentation assets for publication.                                                      |
| Inversion review clips                                                       | `<PhD_A2A>/Inversion_SI/results/`              | Not used. They contain speaker/session identifiers and research frames.                                                                   |
| `landmarks_grid.png`, `grid_construction.png`, `grid_transform_approach.png` | `<Downloads>/02_PhD_Research/`                 | Not used. Ownership and permission for public reuse were not established.                                                                 |
| `Nhat-Nam-Nguyen-20260213.pdf`, `Nhat-Nam_Nguyen.pdf`                        | `<Downloads>/`                                 | Possible CV candidates, but not copied because the correct/public version has not been confirmed.                                         |
| Profile placeholder                                                          | `public/profile-placeholder.svg`               | Retained unchanged because repository files may not be deleted; no longer referenced by the homepage.                                     |

## Research-asset permission record

- MRI assets: the user confirmed they may be published. No specific MRI file is included yet; each
  candidate still needs a per-file privacy and identifier review before a copy enters the repository.
- Grid assets: not authorized for publication and must not be used.
- Segmentation assets: not authorized for publication and must not be used.
- The current MRI-inspired visuals remain original abstract SVGs and do not contain research data.

## Safety confirmation

- The asset search was filename- and metadata-focused within the two explicitly permitted roots.
- Dataset trees under `Data/` and `iadi/` were not copied or opened for website use.
- No `.env`, key, credential, token, browser profile, password file, or administrative document was
  read for the homepage.
- All files outside the website repository remained read-only and unchanged.
- The original `avatar.jpg` in the repository root was read only; its optimized WebP copy strips
  metadata and is the only committed photograph.
