# Nhat-Nam Nguyen — personal website

A static personal website for Nhat-Nam Nguyen, presenting research in speech, computer vision,
medical imaging, and articulatory modelling alongside practical software work. The site uses Astro,
strict TypeScript, content collections, and a small amount of progressive enhancement for theme
preference.

> [!IMPORTANT]
> **Repository identity mismatch:** the repository name is correctly `nhatnam.github.io`, but its
> current GitHub owner is `nnnam2609`, not `nhatnam`. The requested production URL
> `https://nhatnam.github.io` is therefore not available from this remote as currently owned. Astro is
> intentionally configured with the requested canonical `site` value and no base path. Before enabling
> production deployment, transfer or recreate the repository as `nhatnam/nhatnam.github.io`. Do not
> work around this mismatch by adding `/nhatnam.github.io` as a base path; that would configure a
> different deployment target.

## Technology choices

- Astro static site generation for fast, durable HTML with minimal browser JavaScript
- Strict TypeScript and schema-validated Astro content collections
- Plain global and component-scoped CSS using a system font stack
- Astro Sitemap for generated sitemap metadata
- Prettier with the official Astro plugin
- GitHub Actions and the official Astro Pages deployment action
- npm with a committed lockfile

The site deliberately has no UI framework, CSS framework, database, CMS, server runtime, analytics,
or external font dependency.

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
build time and add download buttons automatically. Remove the file to hide both buttons. The web CV
renders only sections backed by current data; education, experience, talks, skills, and languages are
intentionally absent until verified information is supplied.

### Configure contact and social links

Set verified optional values in `src/data/site.ts`:

```ts
email: '...',
github: 'https://github.com/...',
linkedin: 'https://www.linkedin.com/in/...',
scholar: 'https://scholar.google.com/...',
orcid: 'https://orcid.org/...',
```

Empty fields are not rendered and are not included in JSON-LD structured data.

## GitHub Pages deployment

The workflow at `.github/workflows/deploy.yml` follows the current official Astro Pages pattern:

1. Check out the repository.
2. Let `withastro/action` detect the npm lockfile, install dependencies, build the static site, and
   upload the Pages artifact.
3. Deploy the artifact with `actions/deploy-pages`.

It runs on pushes to `main` and can be launched manually with `workflow_dispatch`. Permissions are
limited to reading repository contents and writing a verified Pages deployment. Concurrency allows an
in-progress production deployment to finish before a later deployment starts.

One-time repository setup after the ownership mismatch is resolved:

1. Open **Settings → Pages** in `nhatnam/nhatnam.github.io`.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Merge a reviewed change to `main` or run the workflow manually.
4. Confirm the deployment reports `https://nhatnam.github.io`.

The site configuration is:

```js
site: 'https://nhatnam.github.io';
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
`https://nhatnam.github.io`; deploying `nnnam2609/nhatnam.github.io` creates a project-site path and is
not equivalent. Resolve repository ownership rather than adding a base path.

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

- [ ] Email
- [ ] GitHub profile URL
- [ ] LinkedIn URL
- [ ] Google Scholar URL
- [ ] ORCID
- [ ] Profile photograph
- [ ] CV PDF
- [ ] Verified publication list
- [ ] Verified project repository links
