# Scientific editorial homepage

## Design direction

The homepage is designed as the opening spread of an independent research report: large editorial
typography, a restrained scientific figure, asymmetric composition, and factual research copy. It
avoids the visual language of product landing pages, developer dashboards, and generic portfolio
templates.

The narrative answers five questions in order:

1. Who is Nhat-Nam Nguyen?
2. What research problem is he studying?
3. Which research directions and projects define the work?
4. What is being investigated now?
5. Where can a reader find more or make contact?

The rendered section order is:

```text
Navigation
Editorial hero
Selected research
Current work
Selected projects
Short biography and correspondence
Footer
```

## Grid system

The desktop composition uses a 12-column CSS grid inside an 84rem maximum content width. Hero copy
and the research figure deliberately occupy unequal column spans. Selected research keeps the
section introduction in a narrow sticky rail and uses the wider rail for the numbered list. Featured
projects alternate visual and copy placement to create rhythm without relying on cards.

Below 58rem the layouts become a clear single column. At mobile widths the hero visual follows the
research statement, research metadata becomes a normal block, project copy follows each figure, and
the navigation becomes a native `<details>` disclosure. Elements are recomposed rather than scaled
down from the desktop design.

## Typography

No font is downloaded at runtime.

- Display: `Georgia`, `Times New Roman`, serif fallback.
- Body: `Aptos`, `Segoe UI`, Helvetica/Arial fallback.
- Metadata: `SFMono-Regular`, Consolas, `Liberation Mono` fallback.

The hero uses three explicit lines—`FROM`, `SOUND`, `TO SHAPE`—at report-cover scale. Serif headings
carry the editorial voice; sans-serif text carries explanations; monospace is limited to figure
numbers, section indices, methods, and metadata. The system does not use pills, progress bars, or
technology-logo rows as substitutes for hierarchy.

## Color palette

The canonical variables live in `src/styles/tokens.css`:

| Variable             | Light value | Purpose                         |
| -------------------- | ----------- | ------------------------------- |
| `--color-background` | `#f3f0e8`   | Warm paper background           |
| `--color-surface`    | `#faf8f2`   | Quiet section contrast          |
| `--color-text`       | `#18221f`   | Charcoal-green primary ink      |
| `--color-muted`      | `#626a64`   | Secondary copy and metadata     |
| `--color-accent`     | `#1f625d`   | Deep teal links and line work   |
| `--color-signal`     | `#98483f`   | Muted red anatomical landmarks  |
| `--color-line`       | `#d3d2c8`   | Hairline rules and figure grids |

The dark palette is independently specified rather than produced by filters or gradients. Both
palettes use flat color, rules, and whitespace; there is no gradient text, neon glow, glass panel,
or decorative blur.

## Section hierarchy

- `EditorialHero.astro` supplies identity, affiliation, the research question, one primary research
  link, and an optional CV link.
- `ResearchFigure.astro` is the main scientific plate.
- `ResearchList.astro` presents three directions as large numbered rows rather than equal cards.
- `CurrentWork.astro` reads specific statements from `src/data/home.ts`.
- `SelectedProjects.astro` shows no more than three featured content-collection entries and only
  renders repository/demo links when those URLs exist.
- `ShortBio.astro` uses the verified portrait below the fold and exposes only contact links already
  present in `src/data/site.ts`.

## Asset decisions

The hero figure is original SVG line art: coordinate lines, two abstract vocal-tract contours,
landmarks, and a small waveform. It is explicitly labelled as an abstract study and contains no
participant data, identifiers, experimental metrics, or copied research geometry. Project plates
also remain abstract SVGs tied to the three verified project entries.

The existing metadata-free `public/profile-nhat-nam.webp` appears only in the biography. It is not
used as a centered hero portrait or circular avatar.

No MRI, segmentation, grid-normalization, or prediction/ground-truth file discovered outside the
repository is published. Their filenames expose speaker/session/frame identifiers and publication
permission is not sufficiently specific for this redesign.

## Motion and client JavaScript

The homepage adds no client-side JavaScript and contains no continuous animation. The previous
animated sound-to-shape hero, pointer response, scroll-linked pipeline, and command palette are not
rendered. Native mobile navigation and the small theme preference are the only interactive site
utilities.

The global `prefers-reduced-motion: reduce` rule disables smooth scrolling and collapses any
transition or animation duration used elsewhere on the site. The page remains visually complete
with motion disabled.

## Accessibility

- Semantic header, navigation, main, sections, ordered lists, articles, figures, biography aside,
  and footer.
- One `h1`, followed by ordered `h2`/`h3` levels.
- Skip-to-content link, visible focus outlines, and 40–44px interactive targets.
- `aria-current` on the logo and navigation links.
- Native keyboard-operable mobile disclosure with synchronized `aria-expanded`.
- Descriptive portrait alt text and an SVG `title`/`desc` for the meaningful hero figure.
- Decorative project SVGs remain hidden from the accessibility tree because adjacent text explains
  the research content.
- Content and links do not depend on hover, color, or JavaScript.

## Performance

- Static Astro HTML and scoped CSS; no new dependency or hydrated UI framework.
- No external font, asset CDN, canvas, background video, analytics, or API request.
- Inline SVG supplies resolution-independent figures without layout shift.
- The below-fold portrait has explicit dimensions, `loading="lazy"`, and async decoding.
- Only three projects render on the homepage.

## Features removed from the rendered homepage

The files remain in the repository for reference, but the homepage no longer renders:

- animated waveform/latent/contour hero states;
- pointer-following contour motion;
- the scroll-linked research pipeline and its state graph;
- the horizontal “Currently Exploring” pill strip;
- three equal research-theme cards;
- three equal project cards with status indicators and tags;
- latest-notes empty-state card;
- command palette and keyboard shortcut marketing;
- product-style button rows and multi-CTA hero treatment;
- decorative page grid, large blob shapes, looping transitions, and card shadows.

These removals make the research content, typography, and figure hierarchy carry the design.

## Responsive validation targets

Browser checks cover `320×700`, `375×812`, `768×1024`, `1280×800`, `1440×900`, and
`1920×1080`, plus dark mode and reduced motion. The checks assert no horizontal overflow, one page
heading, three research directions, three projects, usable mobile navigation, valid images, no
placeholder links, no console/request failures, and no production Windows paths.
