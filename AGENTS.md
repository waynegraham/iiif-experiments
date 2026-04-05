<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
# AGENTS.md

## Project overview

This project is a publication-first IIIF website built with Next.js, TypeScript, Tailwind, and MDX. It serves as a visual lab for IIIF experiments, reusable UI/components, and longer-form writing.

The site should feel editorial, cinematic, gallery-inspired, and typography-led. It is not a generic component library, not a dashboard, and not a blog theme with IIIF sprinkled on top.

Primary goals:

* Publish narrative IIIF experiments with embedded interactive React components
* Document reusable components with live examples and implementation notes
* Publish essays, case studies, and usage-oriented snippets
* Maintain progressive enhancement and graceful fallbacks
* Support future internationalization, starting with English only

## Core stack

* Next.js
* TypeScript
* Tailwind CSS
* MDX content in-repo
* Cloudflare deployment

## Product direction

### Content hierarchy

This is a **publication-first** system.

The main public surface is:

1. **Experiments**
2. **Components**
3. **Writing**

Experiments are the flagship content type.

### Content types

#### Experiments

Experiments are prose-first narrative pages that embed real React components.

Typical characteristics:

* scrollytelling or interaction-driven
* may use custom scroll behavior
* may embed maps, zoom interfaces, image/video layouts, annotation views, or IIIF viewers
* may optionally break out of the normal site shell for immersive presentation
* must still preserve readable narrative structure when JavaScript is limited

#### Components

Components are reusable React building blocks with documentation.

Each component page should usually include:

* purpose
* live example
* implementation notes
* usage guidance
* related tags
* optional code examples or snippets

These pages should feel closer to a refined public reference than to raw internal documentation.

#### Writing

Writing includes essays, case studies, and snippets.

Snippets are not a separate top-level content type for now. They belong within writing, typically as short practical usage notes or focused implementation examples.

## Visual direction

The visual system should be:

* editorial
* modern
* bold but restrained
* museum / gallery inspired
* cinematic and spatial
* typography-led

Avoid:

* dashboard aesthetics
* overly noisy UI chrome
* generic SaaS visuals
* novelty animation without narrative value
* cramped layouts

### Theming

The site must support:

* light mode
* dark mode

Theme behavior should be intentional and polished, not a last-minute inversion of colors.

## Motion and interaction rules

Motion is opt-in and page-specific.

### Requirements

* Some experiment pages may fully control scroll behavior
* Progressive enhancement is required
* Reduced motion preferences must be respected
* Content should remain usable without heavy JavaScript
* Narrative flow should not depend entirely on animation

### Guidance

Use GSAP, Lenis, and other modern libraries where they materially improve the experience. Do not introduce motion as decoration.

Prefer:

* motion that reveals structure
* motion that supports reading and sequencing
* motion that strengthens spatial understanding

Avoid:

* animation that blocks access to content
* scroll hijacking on pages that do not need it
* interaction models with no keyboard fallback when one is reasonably possible

## IIIF expectations

IIIF manifests will be loaded from external sources.

The system should assume remote IIIF resources are normal and should support resilient behavior for:

* loading
* failure states
* missing media
* slow external responses

Initial IIIF-oriented primitives may include:

* scrollytelling shell
* sticky panel
* horizontal sequence
* IIIF manifest panel
* zoom control overlay
* media stage
* annotation hotspot
* map narrative block
* reduced-motion fallback

These primitives should be designed as reusable building blocks, not one-off page hacks.

## Authoring model

Content is authored in MDX in the repository.

### Preferred authoring pattern

* prose in MDX
* embedded imported React components for interactive pieces
* shared editorial content primitives for consistent layout

Do not force every experiment into the same rigid template. The system should be structured but flexible.

## Routing and information architecture

Expected top-level sections:

* `/` home
* `/experiments`
* `/components`
* `/writing`
* `/tags`
* supporting pages as needed

### Homepage expectations

The homepage should be cinematic and editorial.

Expected structure:

1. Hero section
2. Featured experiments with imagery
3. Clear navigation to the rest of the site

Components and writing should be discoverable from navigation rather than competing with experiments on the homepage.

## Featured content

The system should support a featured flag in content metadata.

Featured status may be used for:

* homepage placement
* curated lists
* section highlights

## Navigation and shell rules

Use a persistent global shell by default.

However, some experiments may intentionally break out of the default shell to create a more immersive reading or interaction mode.

When this happens:

* the overall site identity should still feel coherent
* navigation should remain recoverable
* breakout behavior should be deliberate and rare

## Tags

Use tags for classification and discovery.

Do not add search in v1.
Do not add series unless requirements change later.

## Internationalization

English only at launch.

The codebase should still be i18n-ready:

* keep UI strings externalizable
* avoid hard-coding assumptions that make locale support painful later
* structure routes and metadata with future expansion in mind

## Accessibility and resilience

Baseline expectations:

* reduced-motion support
* semantic structure in prose content
* usable no-JS or low-JS fallbacks where reasonable
* keyboard access for core interactions where practical
* readable content independent of advanced motion

## Implementation priorities

When making architectural decisions, prefer:

1. clarity over cleverness
2. reusable primitives over page-specific hacks
3. progressive enhancement over JS dependence
4. editorial quality over feature sprawl
5. maintainability over novelty

## Non-goals for v1

Do not add these unless explicitly requested:

* CMS integration
* full search
* series system
* overengineered content pipelines
* dynamic backend features that are unnecessary for a static-first publication model

## Guidance for contributors and agents

When generating or modifying code for this project:

* preserve the publication-first orientation
* keep experiments prose-led
* treat components as real reusable primitives, not demo-only fragments
* keep writing readable and editorial in tone
* avoid generic blog or docs-site patterns unless adapted to the project’s visual direction
* prefer statically friendly solutions compatible with Cloudflare deployment
* preserve progressive enhancement
* keep motion opt-in and respectful of reduced-motion preferences

When proposing new features, explain how they fit one of these buckets:

* experiments
* components
* writing
* editorial shell
* IIIF primitives

If a feature does not clearly improve one of those areas, it is probably noise.

## Decision heuristics

Use these heuristics when uncertain:

* Would this help present IIIF work more clearly?
* Would this improve authoring without reducing flexibility?
* Would this still work if JS fails or motion is reduced?
* Would this feel at home in an editorial/gallery context?
* Is this reusable enough to belong in the system?

If not, do not add it casually.
