# Homepage asset sources

This record documents the asset review for the scientific editorial homepage. External workstation
paths are represented by `<PhD_A2A>` and `<Downloads>`; absolute `C:\...` paths never appear in the
production UI.

## Assets used

| Asset                   | Source                                     | Repository destination                     | Processing                                                                                   | Reason for use                                                                                                               |
| ----------------------- | ------------------------------------------ | ------------------------------------------ | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Hero vocal-tract figure | Original SVG authored for this redesign    | `src/components/home/ResearchFigure.astro` | Hand-authored responsive paths, coordinate grid, landmarks, waveform, title, and description | Research-specific visual with no participant data, file identifiers, results, or third-party rights                          |
| Featured-project plates | Existing original site SVGs                | `src/components/home/ProjectVisual.astro`  | Reused as static line figures in a new editorial layout                                      | Closely tied to the three verified project themes without claiming real experimental output                                  |
| Profile portrait        | Previously verified user-provided portrait | `public/profile-nhat-nam.webp`             | Existing 384×384 metadata-free WebP; CSS crops the repository copy only                      | Existing repository provenance states identity and publication permission were confirmed; used below the fold at small scale |
| Open Graph cover        | Original SVG authored for this redesign    | `public/og-from-sound-to-shape.svg`        | Rebuilt as a 1200×630 flat-color editorial cover                                             | Contains public profile text and abstract line art only                                                                      |
| Favicon                 | Original SVG authored for this redesign    | `public/favicon.svg`                       | Reworked as a flat-color `NN` editorial mark                                                 | No external artwork or rights dependency                                                                                     |

No new binary research asset was copied into the repository.

## Approved read-only search scope

The targeted filename search on 2026-07-19 covered only:

- `<PhD_A2A>`
- `<Downloads>`

It searched the requested image, vector, document, presentation, and video extensions using the
research keywords AAI/A2A, articulatory, vocal tract, MRI/rtMRI, contour, grid, normalization,
segmentation, prediction, ground truth, JEPA, waveform, spectrogram, portrait/profile, and CV.
Dataset-style `Data`, `iadi`, dependency, and Git metadata trees were excluded from selection. No
credential, environment, browser-profile, token, key, password, or administrative file was sought
or opened.

## Candidates reviewed but not used

| Candidate category                              | Example alias                                                                                               | Decision                                                                                                                                                     |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Prediction / ground-truth comparison videos     | `<Downloads>/*prediction*ground_truth*.mp4`                                                                 | Not used. Filenames include speaker/session identifiers and public-release permission was not established.                                                   |
| Grid-normalization panels and comparison videos | `<Downloads>/p7_grid_transform_selected_speakers_*` and `<Downloads>/p7_selected_nonp7_sessions_gridnorm_*` | Not used. They contain research frames and explicit participant/session labels; grid assets are not authorized by the existing repository permission record. |
| MRI comparison videos and frames                | `<Downloads>/compare_mri*.mp4`, `<Downloads>/*_mri_*.png`, and candidates under `<PhD_A2A>`                 | Not used. General relevance is high, but a file-specific privacy and publication review is still required.                                                   |
| Segmentation and contour outputs                | `<PhD_A2A>/Preprocess/`, `<PhD_A2A>/Inversion_SI/`, and backup output trees                                 | Not used. These are research outputs with identifiers and unclear public-release status.                                                                     |
| Presentation figures                            | `<Downloads>/02_PhD_Research/*.pptx` and `<Downloads>/*timeline*.pptx`                                      | Not used. Ownership and publication rights for embedded figures were not established, and small slide text would not serve the editorial layout.             |
| Research PDFs                                   | `<PhD_A2A>/Workshop/SpeakVar2026/*.pdf` and `<Downloads>/02_PhD_Research/*.pdf`                             | Not used as visual sources. The redesign does not extract or republish figures from papers or drafts.                                                        |
| CV candidates                                   | `<Downloads>/*CV*.pdf` and previously documented name-specific PDFs                                         | Not copied. Multiple candidates exist and the intended public version is not verified.                                                                       |
| Untracked repository `avatar.jpg`               | Repository root                                                                                             | Not touched or staged. The already optimized and committed portrait remains the only homepage photograph.                                                    |

## Publication and privacy decision

The visual value of the external MRI/grid/prediction candidates does not outweigh uncertainty about
participant privacy, identifiers, and publication permission. The redesign therefore follows the
safe fallback requested by the user: original abstract SVG line work. The SVG is intentionally
captioned as abstract rather than presented as a paper result.

## Source-integrity confirmation

- No file or directory under `<PhD_A2A>` or `<Downloads>` was modified, renamed, moved, overwritten,
  or deleted.
- No source asset was opened for destructive processing.
- No dataset or large directory was copied into the repository.
- Existing untracked media and validation files in the website working tree were preserved and are
  excluded from the redesign commit.
- No sensitive identifier or external absolute path is included in production assets or UI copy.
