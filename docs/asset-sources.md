# Homepage asset sources

This file records the provenance review for the **From Sound to Shape** homepage. Paths use the
aliases `<PhD_A2A>` and `<Downloads>` so the documentation does not expose a workstation username or
absolute local path.

## Assets used

| Asset                                   | Source                                  | Repository destination                         | Processing                                                  | Publication rationale                                                                                 |
| --------------------------------------- | --------------------------------------- | ---------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Hero waveform / latent / contour visual | Original SVG authored for this site     | `src/components/home/SoundToShapeVisual.astro` | Hand-authored responsive SVG; no copied geometry            | Abstract research illustration with no participant data, identifiers, metrics, or third-party artwork |
| Research pipeline visuals               | Original SVG authored for this site     | `src/components/home/ResearchPipeline.astro`   | Hand-authored line art and CSS state transitions            | Conceptual process diagram, explicitly described as non-literal                                       |
| Project mini visuals                    | Original SVG authored for this site     | `src/components/home/ProjectVisual.astro`      | Hand-authored SVG variants for the three verified projects  | Contains no experimental results or unverified claims                                                 |
| Research theme visuals                  | Original SVG authored for this site     | `src/components/home/ResearchThemes.astro`     | Hand-authored waveform, contour, and MRI-inspired frame     | Abstract and free of research data                                                                    |
| Profile placeholder                     | Original SVG authored for this site     | `public/profile-placeholder.svg`               | Created as an `NN` monogram with waveform and contour lines | Used because the profile photograph is not yet verified                                               |
| Social preview                          | Original SVG authored for this site     | `public/og-from-sound-to-shape.svg`            | Created at a 1200×630 view box                              | Contains only public profile text and abstract shapes                                                 |
| Favicon                                 | Existing local SVG, redesigned in place | `public/favicon.svg`                           | Reworked into a waveform/contour mark                       | Original vector mark with no external rights dependency                                               |
| Validation screenshots                  | Local production preview                | `docs/validation/*.png`                        | Browser screenshots at representative viewports/themes      | Documentation only; not included in deployed site assets                                              |

No external source file was copied, cropped, resized, converted, overwritten, renamed, moved, or
deleted.

## Reviewed but not used

| Candidate                                                                    | Location                                       | Decision                                                                                                                                                                    |
| ---------------------------------------------------------------------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Grid annotation images                                                       | `<PhD_A2A>/grid transform/docs/assets/github/` | Not used. They are useful research visuals, but publication scope was not independently verified.                                                                           |
| Grid/contour overlays and stage visualizations                               | `<PhD_A2A>/grid transform/outputs/`            | Not used. Many filenames expose speaker/session/frame identifiers and may derive from participant data.                                                                     |
| Segmentation overlays                                                        | `<PhD_A2A>/Preprocess/outputs/`                | Not used. Dataset and participant publication permission is unclear.                                                                                                        |
| Inversion review clips                                                       | `<PhD_A2A>/Inversion_SI/results/`              | Not used. They contain speaker/session identifiers and research frames.                                                                                                     |
| `landmarks_grid.png`, `grid_construction.png`, `grid_transform_approach.png` | `<Downloads>/02_PhD_Research/`                 | Not used. Ownership and permission for public reuse were not established.                                                                                                   |
| `Nhat-Nam-Nguyen-20260213.pdf`, `Nhat-Nam_Nguyen.pdf`                        | `<Downloads>/`                                 | Possible CV candidates, but not copied because the correct/public version has not been confirmed.                                                                           |
| `avatar.jpg`                                                                 | Repository root                                | A clear single-person photograph appeared during implementation, but identity and publication approval were not explicitly confirmed. It was not modified, staged, or used. |

## Safety confirmation

- The asset search was filename- and metadata-focused within the two explicitly permitted roots.
- Dataset trees under `Data/` and `iadi/` were not copied or opened for website use.
- No `.env`, key, credential, token, browser profile, password file, or administrative document was
  read for the homepage.
- All files outside the website repository remained read-only and unchanged.
