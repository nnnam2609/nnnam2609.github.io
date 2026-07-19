# Nhat-Nam Nguyen — scientific editorial portfolio

A static Astro research portfolio built around **From Sound to Shape**. The homepage presents
Nhat-Nam Nguyen’s work in speech processing, real-time MRI, anatomical normalization, and
acoustic-to-articulatory inversion as an editorial research report rather than a product landing
page or developer dashboard.

Production: [https://nnnam2609.github.io](https://nnnam2609.github.io)

## Stack

- Astro 7 static output with strict TypeScript
- Schema-validated Astro content collections
- Plain component-scoped CSS and centralized design tokens
- Local system font stacks and original SVG research figures
- npm with the committed `package-lock.json`
- GitHub Actions deployment to GitHub Pages

There is no UI framework, CSS framework, client application runtime, analytics package, external
font request, animation library, CMS, or image CDN.

## Run locally

Use Node.js 24 and npm:

```bash
npm install
npm run dev
```

Validation commands:

```bash
npm run check
npm run format:check
npm run build
npm run preview
```

`npm run build` writes the static site to `dist/`.

## Homepage architecture

The homepage route is `src/pages/index.astro`. It renders:

```text
EditorialHero
ResearchList
CurrentWork
SelectedProjects
ShortBio
```

Homepage-only copy lives in `src/data/home.ts`. Profile, affiliation, contact, social, navigation,
and SEO description values live in `src/data/site.ts`. Project summaries are validated content
entries in `src/content/projects/`.

The previous animated hero, pipeline, card-grid sections, latest-notes block, and command palette
files are intentionally retained but are not rendered by the homepage. See
`docs/homepage-design.md` for the audit and design rationale.

## Edit homepage content

Update `src/data/home.ts` for:

- hero introduction and supporting sentence;
- selected research titles, summaries, and methods;
- current-work statements;
- short biography copy;
- hero figure caption metadata.

Keep unknown fields out rather than adding placeholders or fabricated links.

## Change the hero visual

Edit `src/components/home/ResearchFigure.astro`. The current figure is an original SVG containing an
abstract vocal-tract contour, landmarks, coordinate lines, and a waveform. Preserve:

- the SVG `title` and `desc`;
- the factual caption identifying it as abstract;
- the responsive view box;
- the absence of participant identifiers and unverified metrics.

If replacing it with a real research image, first document file-specific publication permission and
privacy review in `docs/asset-sources.md`. Do not publish a candidate merely because it is available
on the workstation.

## Change the profile image

The biography uses `public/profile-nhat-nam.webp`. To replace it:

1. Confirm the image shows the correct person and is approved for publication.
2. Copy the source into a safe working location; never modify the original.
3. Apply orientation, crop, resize, metadata removal, and WebP/AVIF conversion only to the copy.
4. Put the optimized copy under `public/` with explicit width/height in the component.
5. Update the alt text and `docs/asset-sources.md`.

The portrait should remain a small biography image, not a large circular hero avatar.

## Add or update a project

Create `src/content/projects/<slug>.md`:

```yaml
---
name: <verified project name>
summary: <factual one-sentence summary>
type: research # research or software
status: <verified current status>
technologies:
  - <method>
featured: false
order: 4
---
```

Optional fields are `repositoryUrl`, `demoUrl`, `startYear`, `endYear`, and `image`. Set `featured:
true` only when the project should be considered for the homepage; the page still renders at most
three projects. Repository and demo links are hidden unless a verified URL exists.

## Add research, publications, or notes

Collection schemas live in `src/content.config.ts`:

- `src/content/research/` contains research directions.
- `src/content/projects/` contains research and software projects.
- `src/content/publications/` accepts verified bibliographic entries.
- `src/content/notes/` accepts Markdown notes; drafts are excluded from public lists and routes.

Invalid frontmatter fails the build. Publication pages remain honest empty states until verified
entries exist.

## Add the CV

Place the verified public document at `public/cv.pdf`. The helper in `src/utils/cv.ts` detects it at
build time; the hero and CV page render PDF links only when the file exists.

Several local PDF candidates may exist. Do not copy one until the intended current public version is
confirmed.

## Navigation and contact

Navigation and verified optional contact/social values are maintained in `src/data/site.ts`.
Optional values are omitted from HTML and Person JSON-LD when absent. Do not use `href="#"`.

## Design tokens and themes

`src/styles/tokens.css` defines the canonical palette:

```css
--color-background
--color-surface
--color-text
--color-muted
--color-accent
--color-signal
--color-line
```

It also defines the display, body, and metadata font stacks. Light and dark palettes are designed
separately. The site contains no gradient text, neon glow, or glassmorphism.

## Accessibility and performance

The site includes a skip link, semantic heading order, visible focus, `aria-current`, native mobile
navigation, explicit image dimensions, descriptive alt text, meaningful SVG metadata, lazy loading
below the fold, and global reduced-motion handling.

The editorial homepage adds no client-side JavaScript. Browser validation covers six responsive
viewports, mobile navigation, dark mode, reduced motion, horizontal overflow, console/request errors,
images, placeholder links, and local production paths.

## Asset provenance

`docs/asset-sources.md` records the two approved read-only search roots using aliases, candidates
reviewed, assets used, processing decisions, privacy concerns, and the source-integrity confirmation.
No external MRI, grid, segmentation, or prediction result is currently published by the homepage.

## Deploy to GitHub Pages

`.github/workflows/deploy.yml` builds with npm and deploys only on pushes to `main` or manual
`workflow_dispatch`.

Normal workflow:

1. Create a feature branch from current `origin/main`.
2. Run check, formatting, production build, and browser validation.
3. Push the branch and open a pull request targeting `main`.
4. Review asset permissions, personal data, screenshots, and generated HTML.
5. Merge only after review; the Pages workflow then deploys production.

This repository is a root GitHub user site, so `astro.config.mjs` sets:

```js
site: 'https://nnnam2609.github.io';
```

No repository `base` path is required.

## Information still requiring verification

- Current public CV PDF
- Google Scholar URL
- ORCID
- Verified publication list
- Public project repository/demo URLs
- File-specific publication permission for any future MRI, grid, segmentation, or prediction visual
