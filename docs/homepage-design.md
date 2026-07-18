# From Sound to Shape — homepage design

## Design rationale

The homepage is structured around a research transformation rather than a conventional portfolio
template:

```text
acoustic signal → learned representation → vocal-tract articulation
```

The hero establishes this idea, the research pipeline explains it in three stages, the project cards
show distinct research views, and the research themes reconnect the work across speech, AAI, and
real-time MRI. Warm neutral surfaces keep the site academic; cool teal marks learned structure; the
small warm signal color marks control points and transitions.

## Visual language

- Waveforms represent acoustic evidence.
- Vertical blocks represent learned or latent representations without claiming a specific model
  topology.
- Contours, coordinate grids, and landmarks evoke vocal-tract modelling and MRI analysis.
- System sans-serif typography carries narrative content; system monospace is reserved for labels,
  statuses, and scientific metadata.
- The public research images discovered locally were intentionally not used because publication
  rights and participant-data safety were not sufficiently clear.

## Animation architecture

The hero is a single SVG with three CSS-timed visual states. A small pointer handler writes four CSS
custom properties so contour points move only a few pixels on pointer devices. The pipeline uses one
`IntersectionObserver` to update an active class; visual changes are limited to opacity and transform.
No canvas, WebGL, animation framework, or continuously running JavaScript loop is used.

Motion can be disabled globally for the homepage with `homeOptions.enableMotion` in
`src/data/home.ts`. `prefers-reduced-motion: reduce` keeps a static contour in the hero, removes
transitions, and preserves all text and navigation.

## Accessibility decisions

- Semantic header, main, sections, articles, lists, aside, and footer landmarks.
- One page-level `h1`, followed by section `h2` and card/step `h3` headings.
- Skip-to-content link and visible focus treatment.
- Native `<details>` navigation on small screens with synchronized `aria-expanded`.
- Native modal `<dialog>` for the command palette, including focus return and explicit Escape close.
- All decorative research SVGs are hidden from the accessibility tree; text explains the concepts.
- Theme toggle exposes an accessible label and pressed state.
- Empty Notes and Publications states do not invent content.
- No interaction depends only on hover or color.

## Performance decisions

- Static Astro HTML with small, scoped scripts for theme, navigation, hero pointer response, pipeline
  observation, and command palette.
- No new runtime dependency.
- No external font, image, analytics, or API request.
- Inline SVG for line-art components; only favicon, profile placeholder, and social preview live in
  `public/`.
- Below-fold sections use `content-visibility: auto` with an intrinsic-size fallback.
- The hero has an explicit SVG view box and the placeholder image has explicit dimensions to avoid
  layout shift.

## Mobile behaviour

- Below 62rem the hero becomes one column and the visual follows the research introduction.
- Below 52rem the desktop navigation becomes an accessible native disclosure.
- Project cards render as one column on phones, two on tablets, and three on wide screens.
- The Currently Exploring strip scrolls horizontally inside its own bounded area instead of widening
  the page.
- At 320px, buttons can occupy the full content width and no page-level horizontal overflow is
  introduced.

## Features intentionally omitted or adjusted

- The interactive research-node map was replaced by research theme cards. This keeps keyboard and
  mobile behaviour straightforward and avoids extra interaction code with little research value.
- The optional `aai` easter egg was omitted to keep the initial homepage easier to maintain.
- Real MRI frames, contours, grids, videos, lab logos, and university logos were not used because
  their publication permissions were not confirmed.
- `Sync Engine` was not recreated. The user had previously identified it as work they did not do, so
  including it would conflict with the no-fabrication requirement.
- The unverified `avatar.jpg` and local CV candidates were not published.

## Validation evidence

Representative screenshots are stored under `docs/validation/`. The production preview was checked
for semantic heading order, mobile navigation state, command palette controls, Escape behavior, theme
state, active pipeline steps, horizontal overflow, console errors, placeholder links, and optional CV
visibility. Exact command results are summarized in the pull request and final implementation report.
