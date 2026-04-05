# IIIF Experiments

A publication-first IIIF site scaffold built with Next.js App Router, TypeScript, Tailwind CSS, and MDX.

This project is designed for narrative experiments, reusable component documentation, and editorial writing. Content is authored in repository MDX files and rendered statically for Cloudflare-compatible deployment.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- MDX via `@next/mdx`
- Static-first rendering

## Project structure

- `src/app/` — route and layout definitions
- `src/components/` — shared UI components and MDX component mapping
- `src/lib/` — content loading utilities and shared types
- `content/` — MDX content for experiments, components, and writing

## Content routes

The site includes the following public routes:

- `/`
- `/experiments`
- `/experiments/[slug]`
- `/components`
- `/components/[slug]`
- `/writing`
- `/writing/[slug]`
- `/tags`
- `/tags/[tag]`

## Content authoring

Add content as MDX files under `content/experiments`, `content/components`, or `content/writing`.

Each file should start with frontmatter, for example:

```mdx
---
title: "Example Experiment"
slug: "example-experiment"
description: "Short summary of the experiment."
date: "2026-04-05"
tags: ["IIIF", "interaction"]
featured: true
---

# Example Experiment

This is the body content.
```

Imported React components can be used directly in MDX pages.

## Key utilities

- `getAllContent(type)` — list all content items for a type
- `getContentBySlug(type, slug)` — load a single MDX page by slug
- `getFeaturedContent()` — collect featured items across types
- `getAllTags()` — collect tags used across the site

## Development

Install dependencies and run the project locally:

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Build

```bash
pnpm exec next build
```

## Theming and MDX

- Theme toggling is available via `src/components/theme-toggle.tsx`.
- MDX components are mapped in `src/components/mdx-components.tsx`.
- Shared MDX components include `CodeBlock`, `DemoFrame`, and `InteractiveDemo`.

## Deployment

This scaffold is intended for static-friendly deployment and is compatible with Cloudflare Pages. The build output is static HTML/JS using Next.js App Router conventions.

## Notes

- No CMS or search is included.
- The site is intentionally editorial, not a generic blog.
- The immersive route group is used for experiments that need reduced UI chrome.
