# IIIF Project Architecture Blueprint

## 1. Purpose

This application is a publication-first IIIF site built to showcase:

* narrative experiments
* reusable React components
* longer-form writing and implementation notes

The system should behave like an editorial publication with a component lab inside it, not like a blog wearing a museum costume and not like a docs site pretending to be interesting.

## 2. Primary goals

### Editorial goals

* Create a cinematic landing page that highlights experiments as the flagship content
* Maintain a typography-led visual identity across all sections
* Support immersive pages without sacrificing navigability
* Allow writing to feel deliberate and designed, not incidental

### Technical goals

* Use Next.js, TypeScript, Tailwind, and MDX
* Keep the site static-first and Cloudflare-friendly
* Support external IIIF manifests as a normal pattern
* Preserve progressive enhancement
* Respect reduced-motion preferences
* Keep the system i18n-ready for future locales

### Authoring goals

* Make experiments easy to write in MDX with embedded React components
* Make components easy to document with live examples and implementation notes
* Keep content organization simple and legible
* Avoid CMS complexity in v1

## 3. Product model

There are three first-class content domains.

### 3.1 Experiments

Experiments are the primary content type.

They are prose-first narrative pages that can embed custom React components. Some experiments may take over scrolling or temporarily reduce the surrounding shell in order to create an immersive presentation.

Typical experiment content:

* scrollytelling narratives
* map stories
* horizontal sequences
* custom zoom interfaces
* image or video-led layouts
* IIIF manifest-based interactive storytelling

### 3.2 Components

Components are reusable React building blocks.

Each component entry should function as a refined reference page with:

* a live example
* documentation of purpose and behavior
* implementation notes
* usage guidance
* links to related experiments or writing when appropriate

This section is the public-facing component lab.

### 3.3 Writing

Writing includes essays, case studies, and snippets.

Snippets are not their own top-level collection in v1. They belong in writing and are differentiated by metadata.

Likely writing formats:

* `essay`
* `case-study`
* `snippet`

## 4. High-level information architecture

### Public routes

```text
/
/experiments
/experiments/[slug]
/components
/components/[slug]
/writing
/writing/[slug]
/tags
/tags/[tag]
/about            (optional but likely useful)
```

### Home page behavior

The home page should be cinematic and selective.

Recommended composition:

1. **Hero**

   * strong typography
   * optional motion
   * featured experiment or rotating highlighted work
2. **Featured Experiments**

   * image-driven cards or panels
   * clear hierarchy and visual rhythm
3. **Editorial Navigation**

   * direct paths to Experiments, Components, Writing
4. **Optional Closing Statement / About Block**

   * a short framing note about the project

Components and writing should live primarily in the navigation and section indexes rather than competing with experiments on the homepage.

## 5. Recommended app structure

```text
src/
  app/
    (site)/
      layout.tsx
      page.tsx
      experiments/
        page.tsx
        [slug]/
          page.tsx
      components/
        page.tsx
        [slug]/
          page.tsx
      writing/
        page.tsx
        [slug]/
          page.tsx
      tags/
        page.tsx
        [tag]/
          page.tsx
    (immersive)/
      experiments/
        [slug]/
          page.tsx
    globals.css
    providers.tsx

  components/
    shell/
      site-header.tsx
      site-footer.tsx
      site-nav.tsx
      theme-toggle.tsx
      skip-link.tsx

    editorial/
      hero.tsx
      section-intro.tsx
      featured-grid.tsx
      media-frame.tsx
      figure.tsx
      pull-quote.tsx
      prose.tsx
      tag-list.tsx
      callout.tsx
      lead.tsx
      section-break.tsx

    content/
      card.tsx
      experiment-card.tsx
      component-card.tsx
      writing-card.tsx
      featured-rail.tsx
      related-content.tsx
      content-meta.tsx
      content-header.tsx
      content-image.tsx

    mdx/
      mdx-components.tsx
      code-block.tsx
      code-tabs.tsx
      demo-frame.tsx
      notes-panel.tsx
      manifest-panel.tsx
      import-example.tsx

    iiif/
      iiif-manifest-panel.tsx
      media-stage.tsx
      zoom-control-overlay.tsx
      annotation-hotspot.tsx
      horizontal-sequence.tsx
      map-narrative-block.tsx
      reduced-motion-fallback.tsx
      sticky-panel.tsx
      viewer-shell.tsx

    motion/
      motion-provider.tsx
      reveal.tsx
      parallax-block.tsx
      scroll-scene.tsx
      horizontal-scroll-scene.tsx
      reduced-motion-guard.tsx
      lenis-provider.tsx

    ui/
      button.tsx
      link.tsx
      badge.tsx
      container.tsx
      grid.tsx
      stack.tsx
      theme-switch.tsx

  content/
    experiments/
      my-first-experiment.mdx
    components/
      zoom-control-overlay.mdx
    writing/
      building-a-map-story.mdx

  content.config.ts
  lib/
    content/
      collections.ts
      get-all-content.ts
      get-content-by-slug.ts
      get-featured-content.ts
      get-related-content.ts
      get-tags.ts
    iiif/
      fetch-manifest.ts
      normalize-manifest.ts
      iiif-types.ts
    mdx/
      compile-mdx.ts
      mdx-metadata.ts
    theme/
      theme-config.ts
    utils/
      cn.ts
      dates.ts
      env.ts
      routes.ts

  styles/
    tokens.css
    prose.css
    motion.css
```

## 6. Route groups and shell strategy

### `(site)` route group

This is the default shell for the publication.

It includes:

* persistent header
* global navigation
* footer
* theme support
* standard max-width and editorial rhythm

Use this for:

* home
* indexes
* writing
* most component pages
* most experiment pages

### `(immersive)` route group

This is reserved for experiments that intentionally reduce or modify the standard shell.

Use it for pages that need:

* viewport-led layouts
* custom scrolling behavior
* full-bleed media
* scene-based storytelling
* reduced top chrome

This route group should still preserve:

* accessible wayfinding
* recoverable navigation
* site identity

Do not use the immersive shell casually.

## 7. Content storage and authoring model

All content lives in-repo as MDX.

### Why MDX is the right fit here

It allows:

* prose-first composition
* embedded React components
* portable content files
* easy versioning in Git
* direct control over layout decisions

### Authoring model

Recommended pattern:

* frontmatter for metadata
* prose written in MDX
* import React components for demos and interactive scenes
* use shared editorial and IIIF primitives instead of ad hoc markup

Example mental model:

* **MDX handles narrative and composition**
* **React handles interactivity and reusable structure**

## 8. Content schema

Use a shared base schema plus type-specific fields.

### 8.1 Shared base fields

```ts
{
  title: string
  slug: string
  summary: string
  date: string
  updated?: string
  tags: string[]
  featured?: boolean
  draft?: boolean
  hero?: {
    src: string
    alt: string
    caption?: string
  }
  theme?: 'light' | 'dark' | 'auto'
  locale?: 'en'
}
```

### 8.2 Experiment schema

```ts
{
  type: 'experiment'
  layout?: 'default' | 'immersive'
  format?: 'scrollytelling' | 'map-story' | 'media-sequence' | 'zoom-study' | 'custom'
  interactive?: boolean
  requiresJS?: boolean
  reducedMotionSafe?: boolean
  manifests?: string[]
  libraries?: string[]
  breakoutShell?: boolean
}
```

### 8.3 Component schema

```ts
{
  type: 'component'
  status?: 'stable' | 'experimental'
  package?: string
  demo?: boolean
  api?: {
    props?: string[]
  }
  relatedExperiments?: string[]
  relatedWriting?: string[]
}
```

### 8.4 Writing schema

```ts
{
  type: 'writing'
  format: 'essay' | 'case-study' | 'snippet'
  relatedComponents?: string[]
  relatedExperiments?: string[]
}
```

## 9. Suggested content directory conventions

```text
content/
  experiments/
    map-story-with-iiif.mdx
    horizontal-sequence-study.mdx
  components/
    zoom-control-overlay.mdx
    iiif-manifest-panel.mdx
  writing/
    using-zoom-control-overlay.mdx
    building-an-editorial-iiif-story.mdx
```

As the project grows, move to per-entry folders when individual entries need colocated assets.

Example:

```text
content/
  experiments/
    map-story-with-iiif/
      index.mdx
      hero.jpg
      poster.jpg
      data.json
```

That is worth doing once entries begin to accumulate their own images, posters, or supporting local demo assets.

## 10. MDX component strategy

Use a centralized `mdx-components.tsx` mapping to control the authoring surface.

### Core editorial MDX components

Recommended initial set:

* `Lead`
* `Figure`
* `MediaFrame`
* `PullQuote`
* `Callout`
* `SectionBreak`
* `TagList`
* `DemoFrame`
* `CodeBlock`
* `CodeTabs`
* `NotesPanel`

### IIIF and experiment-oriented MDX components

* `ManifestPanel`
* `MediaStage`
* `StickyPanel`
* `HorizontalSequence`
* `MapNarrativeBlock`
* `ZoomControlOverlay`
* `AnnotationHotspot`
* `ReducedMotionFallback`

This keeps MDX ergonomic without letting every page become a one-off pile of divs.

## 11. Data loading strategy

### Static-first content loading

Content metadata should be gathered at build time.

Recommended approach:

* parse local MDX frontmatter
* compile MDX per route
* generate section indexes from content collections
* build tag pages from content metadata

### External IIIF data

IIIF manifests come from remote sources.

Recommended stance:

* treat external manifest fetching as a component-level concern for experiments and demos
* provide graceful loading, timeout, and error states
* support optional local fixture mode for development and fallback testing

### Normalization layer

Add a small utility layer in `lib/iiif/` to normalize common manifest structures and expose safe helpers.

That layer should handle:

* label extraction
* thumbnail selection
* canvas/image lookup
* manifest validation checks
* reduced assumptions about source consistency

Because remote content will absolutely misbehave. Standards do not prevent chaos. They merely give it a PDF.

## 12. Rendering strategy for experiments

Experiments should be prose-led, not code-led.

### Recommended composition pattern

Each experiment page should have:

1. content header
2. metadata block
3. prose sections
4. embedded interactive modules where relevant
5. optional source/code references
6. related tags or related content footer

### Breakout pattern

For immersive experiments, use one of these strategies:

* route-level immersive layout
* per-page layout flag in metadata
* component-level full-bleed sections inside the normal shell

Use the least invasive method that achieves the intended effect.

## 13. Components section strategy

Each component page should follow a predictable structure.

Recommended page anatomy:

1. title and summary
2. purpose / when to use it
3. live example
4. implementation notes
5. usage snippet
6. optional prop or API notes
7. related experiments
8. related writing

This creates a Storybook-adjacent experience without forcing the entire project into Storybook conventions.

## 14. Writing section strategy

Writing should support multiple scales of content without a separate system.

### Writing formats

* **essay** for larger reflections or framing pieces
* **case-study** for integrated examples
* **snippet** for concise “how to use this” entries

All writing should benefit from the same editorial shell and typography system.

## 15. Featured content system

Use a simple `featured: true` flag in frontmatter.

Recommended usage:

* featured experiments for homepage display
* optional featured content in section indexes
* easy curation without building an editorial CMS

If more control is needed later, add a `featuredRank` field.

Do not build ranking complexity before you need it.

## 16. Tag system

Tags are the only classification layer in v1.

Examples:

* `iiif`
* `maps`
* `zoom`
* `annotations`
* `video`
* `scrollytelling`
* `openseadragon`
* `motion`
* `editorial`

Recommended behavior:

* normalize tag casing and slug creation centrally
* expose a `/tags` index
* expose `/tags/[tag]` pages with grouped content

## 17. Theme architecture

Use a token-based light/dark theme system.

### Principles

* typography should drive the experience
* spacing should feel generous
* images should be framed with intention
* accent usage should be restrained
* dark mode should feel authored, not mechanically inverted

### Suggested theme layers

* semantic color tokens in CSS variables
* Tailwind config mapped to tokens
* prose styles that adapt cleanly between themes
* media framing components that inherit theme context

## 18. Typography system

Typography should carry a lot of the identity.

Recommended approach:

* one strong display face for hero and major headings
* one highly readable text face for long-form prose
* one monospace face for code and technical notes

### Typographic hierarchy should emphasize

* expressive landing page headlines
* calm readable body text
* strong captions and figure notes
* elegant metadata and tags

Avoid overcomplicating the font stack in v1.

## 19. Motion architecture

Motion should be opt-in and layered.

### Foundational rules

* default pages should work without GSAP or Lenis
* motion-heavy pages should isolate enhanced behavior
* reduced-motion preference should bypass nonessential effects
* content should never be inaccessible without scroll-linked animation

### Recommended motion layers

#### Base layer

* subtle reveal transitions
* section entrances
* hover states
* hero rhythm

#### Enhanced layer

* Lenis-driven smooth scrolling where appropriate
* GSAP timelines for scene-based experiments
* horizontal sequences
* pinned/sticky panels
* viewport-controlled media choreography

### Technical pattern

Use wrappers such as:

* `ReducedMotionGuard`
* `ScrollScene`
* `HorizontalScrollScene`
* `MotionProvider`

This prevents every experiment from reinventing motion infrastructure badly.

## 20. Accessibility and resilience

### Accessibility baseline

* semantic page structure
* keyboard reachable navigation
* readable prose without animation
* reduced-motion support
* sensible alt text and caption support
* visible focus states

### Resilience baseline

* no-JS fallbacks for narrative pages
* graceful failure when remote manifests do not load
* poster or static fallbacks for advanced interactive scenes
* clear loading and empty states

## 21. Internationalization readiness

Only English ships in v1, but the architecture should remain locale-ready.

### Prepare now by

* keeping UI labels in a translation-friendly structure
* avoiding hard-coded route assumptions that prevent locale prefixes later
* keeping metadata and content loaders extensible

Recommended future-friendly direction:

```text
/content/en/experiments
/content/en/components
/content/en/writing
```

You do not have to use locale-prefixed content directories immediately, but do not block the path.

## 22. Cloudflare deployment strategy

Deploy to Cloudflare with a static-first mindset.

### Recommended assumptions

* build most routes statically
* keep dynamic server requirements minimal in v1
* ensure asset paths and routing work cleanly in the chosen Cloudflare deployment mode
* avoid architecture that depends on a server unless the feature truly requires it

This aligns with the current content model and lets the project stay fast and portable.

## 23. Suggested implementation phases

### Phase 1: Foundation

* set up Next.js app structure
* add theme support
* build global shell
* set up MDX pipeline
* define content schemas
* build experiments/components/writing indexes
* build homepage hero and featured experiment rail

### Phase 2: Editorial primitives

* add prose system
* add figures, pull quotes, callouts, media frames
* add content cards and related content modules
* add tag pages

### Phase 3: IIIF primitives

* build manifest panel
* build media stage
* build zoom control overlay
* build sticky panel
* build horizontal sequence
* add remote manifest normalization helpers

### Phase 4: Motion system

* add reduced-motion guardrails
* add opt-in motion provider
* integrate Lenis
* integrate GSAP wrappers
* create one flagship immersive experiment

### Phase 5: Refinement

* improve featured curation
* refine typography and spacing
* strengthen fallback states
* tighten component docs patterns

## 24. Recommended initial deliverables

The best next concrete outputs are:

1. folder and route scaffold
2. content schema and loaders
3. homepage wireframe/content structure
4. MDX component registry
5. one experiment template
6. one component template
7. one writing template

## 25. Architectural rules of thumb

When making decisions later, use these rules:

* Experiments are the flagship. Protect that hierarchy.
* Prose leads. Interactivity supports.
* Components should be reusable, documented, and publicly legible.
* Writing should share the same editorial seriousness as experiments.
* Motion must earn its place.
* If a page breaks the shell, it should do so on purpose.
* If something only works with heavy JavaScript, provide a fallback.
* If a solution feels like generic blog infrastructure, it is probably too bland.
* If a solution feels like a one-off art-school hack, it is probably too fragile.

The target is not neutrality. The target is a flexible, maintainable publication system with enough visual conviction to make the IIIF work feel worth looking at.
