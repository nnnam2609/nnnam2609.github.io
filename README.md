# Nhat-Nam Nguyen — personal website

A static research website for Nhat-Nam Nguyen built around the concept **From Sound to Shape**. The
homepage connects speech, learned representations, real-time MRI, and vocal-tract articulation with
original SVG line work, restrained motion, and progressive enhancement. It uses Astro, strict
TypeScript, and content collections.

> [!NOTE]
> **Production target:** this is the GitHub user site for `nnnam2609`, published from
> `nnnam2609/nnnam2609.github.io` at `https://nnnam2609.github.io`. Astro uses that canonical URL with
> no repository base path.

## Homepage concept

The homepage follows one visual and narrative sequence:

```text
Sound → Representation → Articulation
```

- `src/components/home/SoundToShapeVisual.astro` contains the animated waveform, latent blocks, and
  vocal-tract contour used in the hero.
- `src/components/home/ResearchPipeline.astro` presents Observe, Understand, and Reconstruct as a
  scroll-linked research story.
- `src/components/home/ProjectVisual.astro` gives each verified featured project its own SVG diagram.
- `src/components/home/ResearchThemes.astro` presents the research map as lightweight theme cards.
- `src/components/layout/CommandPalette.astro` provides `Ctrl/Cmd + K` navigation without a library.
- `src/data/home.ts` stores homepage topics, pipeline copy, research themes, and the motion switch.
- `src/data/site.ts` remains the single source for profile, contact, affiliation, and social data.

The design uses system fonts, local SVG assets, CSS design tokens, and no external font or image CDN.
Dark mode follows the operating-system preference until the visitor makes a saved manual choice.

## Technology choices

- Astro static site generation for fast, durable HTML with minimal browser JavaScript
- Strict TypeScript and schema-validated Astro content collections
- Plain global and component-scoped CSS using a system font stack
- Astro Sitemap for generated sitemap metadata
- Prettier with the official Astro plugin
- GitHub Actions and the official Astro Pages deployment action
- npm with a committed lockfile

The site deliberately has no UI framework, CSS framework, database, CMS, server runtime, analytics,
animation library, or external font dependency. No dependency was added for the homepage redesign.

## Local development

Use Node.js 24 (see `.nvmrc`) and npm.

```bash
npm install
npm run dev
```

The development server prints its local URL. Other commands:

```bash
npm run build          # Generate the production site in dist/
npm run preview        # Preview the generated site locally
npm run check          # Run Astro and TypeScript checks
npm run format         # Format supported files
npm run format:check   # Verify formatting without writing
```

Before opening a pull request, run `npm run check`, `npm run format:check`, and `npm run build`.

## Content architecture

General profile details live in `src/data/site.ts`. Research, project, publication, and note entries
live under `src/content/`; their required fields are enforced by `src/content.config.ts`. Invalid
frontmatter fails the build.

Homepage-only editorial data lives in `src/data/home.ts`. Set `homeOptions.enableMotion` to `false`
to keep the static contour state and disable the homepage motion layer. The system-level
`prefers-reduced-motion` setting always overrides motion automatically.

Optional values should be omitted until verified. The templates hide missing links, images, dates,
contact fields, publication sections, and the PDF CV button. Never use `href="#"` as a placeholder.

### Add a research topic

Create `src/content/research/<slug>.md`:

```yaml
---
title: <verified research theme>
description: <short, factual description>
status: <current status>
methods:
  - <method>
relatedProjects: []
relatedPublications: []
order: 6
---
```

Optional fields are `image` and `externalUrl`. Related project and publication values are display
labels, not inferred links.

### Add a project

Create `src/content/projects/<slug>.md`:

```yaml
---
name: <verified project name>
summary: <factual summary>
type: research # research or software
status: <current status>
technologies: []
featured: false
order: 6
---
```

Optional fields are `repositoryUrl`, `demoUrl`, `startYear`, `endYear`, and `image`. Add a link only
after verifying that it is public and owned by, or clearly associated with, Nhat-Nam Nguyen.

### Add a publication or talk

Create `src/content/publications/<slug>.md` with verified bibliographic data:

```yaml
---
title: <verified title>
authors:
  - <author as published>
venue: <verified venue>
year: 2026
type: conference # journal, conference, workshop, preprint, thesis, or talk
featured: false
---
```

Optional fields are `doi`, `paperUrl`, `codeUrl`, `slidesUrl`, and `abstract`. The publications page
shows a neutral update notice while the collection is empty. Home and CV publication sections remain
hidden until data exists.

### Write and publish a note

Create `src/content/notes/<slug>.md`:

```yaml
---
title: <note title>
description: <one-sentence summary>
publishedAt: 2026-07-18
tags: []
draft: true
---
Write the note in Markdown here.
```

Optional fields are `updatedAt`, `readingTime`, and `canonicalUrl`. Drafts are excluded from both local
lists and production routes. Change `draft` to `false` only when the note is ready to publish. Restart
the development server after adding the first entry to a previously empty collection so its file
watcher is initialized.

### Add the CV PDF

Place the verified document at `public/cv.pdf`. The home hero and web CV page detect that file at
build time and add download buttons automatically. When the file is absent, the PDF controls stay
hidden. The web CV renders only sections backed by current data; education, experience, talks,
skills, and languages are intentionally absent until verified information is supplied.

### Update the profile photograph

The hero uses `public/profile-nhat-nam.webp`, an optimized copy of the user-verified `avatar.jpg`.
To update it, create a metadata-free WebP or AVIF copy under `public/`, keep a square aspect ratio,
update the image path and alt text in `src/components/home/Hero.astro` if the filename changes, and
leave the source photograph unchanged.

### Change the hero visual

Edit `src/components/home/SoundToShapeVisual.astro`. Keep the SVG view box stable, preserve the
static contour shown by the reduced-motion rules, and avoid inserting literal model diagrams or
claims that are not supported by public research material. The color system is centralized in
`src/styles/tokens.css`.

### Configure contact and social links

Set verified optional values in `src/data/site.ts`:

```ts
email: 'nhat-nam.nguyen@loria.fr',
personalEmail: 'nnnam2609@gmail.com',
github: 'https://github.com/nnnam2609',
linkedin: 'https://www.linkedin.com/in/nguyennhatnam2609/',
scholar: 'https://scholar.google.com/...',
orcid: 'https://orcid.org/...',
```

Empty fields are not rendered and are not included in JSON-LD structured data.

## Local assets and validation evidence

The verified profile photograph is included as an optimized WebP. No external research image,
dataset sample, or local CV was copied into the site. General MRI publication permission is recorded,
but each candidate still requires privacy review; grid and segmentation assets are not authorized.
Asset decisions and reviewed candidates are recorded in `docs/asset-sources.md`. Design, animation,
mobile, accessibility, and performance decisions are recorded in `docs/homepage-design.md`.

Browser-validation screenshots are stored in `docs/validation/`; they are documentation files and
are not shipped by Astro because only `public/` becomes static site assets.

## GitHub Pages deployment

The workflow at `.github/workflows/deploy.yml` follows the current official Astro Pages pattern:

1. Check out the repository.
2. Let `withastro/action` detect the npm lockfile, install dependencies, build the static site, and
   upload the Pages artifact.
3. Deploy the artifact with `actions/deploy-pages`.

It runs on pushes to `main` and can be launched manually with `workflow_dispatch`. Permissions are
limited to reading repository contents and writing a verified Pages deployment. Concurrency allows an
in-progress production deployment to finish before a later deployment starts.

One-time repository setup:

1. Open **Settings → Pages** in `nnnam2609/nnnam2609.github.io`.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Merge a reviewed change to `main` or run the workflow manually.
4. Confirm the deployment reports the same URL configured in `astro.config.mjs`.

The site configuration is:

```js
site: 'https://nnnam2609.github.io';
```

There is no `base` because this is designed as a root GitHub user site.

## Custom-domain migration

To move to a verified custom domain later:

1. Configure the domain's DNS records according to GitHub Pages documentation.
2. Add `public/CNAME` containing only the custom hostname.
3. Change `site` in `astro.config.mjs` to the canonical `https://` custom-domain URL.
4. Change the sitemap URL in `public/robots.txt` to the same host.
5. Keep `base` unset.
6. Configure the custom domain and HTTPS enforcement in **Settings → Pages**.
7. Rebuild and verify canonical, Open Graph, sitemap, and redirect behavior.

## Accessibility and privacy

The site uses semantic landmarks, a skip link, visible keyboard focus, a native keyboard-operable
mobile navigation, `aria-current`, large touch targets, reduced-motion support, responsive wrapping,
and a local theme preference. The main content and navigation remain available without JavaScript;
only theme persistence requires it. No visitor data is collected.

## Troubleshooting

### Links or assets point at the wrong Pages path

Confirm the repository owner and name. This code is intentionally configured only for the root URL
`https://nnnam2609.github.io` from `nnnam2609/nnnam2609.github.io`. Do not add a repository base path
for this user-site deployment.

### A content build fails

Read the schema error, then compare the entry with `src/content.config.ts`. Dates must be valid,
external links must be full URLs, project types and publication types must match an allowed value, and
required strings cannot be empty.

### A draft note appears locally but not after deployment

This is expected. Set `draft: false` when the note is approved for publication.

### The CV button does not appear

Check that the filename is exactly `public/cv.pdf`, including lowercase letters, then rebuild.

### Pages deployment fails

Confirm that GitHub Actions is selected as the Pages source, the lockfile is committed, Actions are
enabled, and the workflow has access to the `github-pages` environment. Review both the `build` and
`deploy` job logs.

## Information still required

- [x] Email — LORIA and personal
- [x] GitHub profile URL — `https://github.com/nnnam2609`
- [x] LinkedIn URL — `https://www.linkedin.com/in/nguyennhatnam2609/`
- [ ] Google Scholar URL — not available yet
- [ ] ORCID — not available yet
- [x] Profile photograph and publication permission
- [ ] CV PDF
- [ ] Verified publication list — coming soon
- [ ] Verified project repository links — repositories are not public yet
