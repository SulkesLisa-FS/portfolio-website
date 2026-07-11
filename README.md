# Portfolio Website

Personal portfolio site highlighting my projects, skills, and journey as a
full-stack developer — including a blog where I share what I'm learning.

**Live site:** [lisasulkes.com](https://lisasulkes.com)

## Tech Stack

- **[Astro](https://astro.build/)** — static site framework
- **[Tailwind CSS v4](https://tailwindcss.com/)** — utility-first styling with a custom token system
- **TypeScript** — type safety across components and content
- **[Prettier](https://prettier.io/)** (+ `prettier-plugin-astro`) — consistent formatting
- **Cloudflare Pages** — hosting and continuous deployment

## Features

- Responsive design with dark/light theme toggle (persists via `localStorage`)
- Projects grid with links to live demos, code, and showcases
- About page with bio and headshot
- Contact page with a working form ([Web3Forms](https://web3forms.com/))
- Downloadable resume
- **Insights blog** powered by Astro content collections (Markdown articles with type-safe frontmatter)

## Project Structure

```text
.
├── astro.config.mjs        # Astro + Tailwind config
├── package.json
├── tsconfig.json
├── public/                 # Static assets served as-is
│   ├── favicon.ico
│   ├── favicon.svg
│   └── resume.pdf
├── src/
│   ├── assets/             # Optimized images (projects, headshot)
│   ├── components/         # Reusable UI (Button, ProjectCard, InsightCard, etc.)
│   ├── content/            # Blog articles in Markdown (insights)
│   ├── content.config.ts   # Content collection schemas
│   ├── data/               # Structured data (projects)
│   ├── layouts/            # Shared page layout
│   ├── pages/              # Routes (index, about, contact, insights)
│   └── styles/             # Global CSS + design tokens
└── dist/                   # Production build output (generated — not committed)
```

## Getting Started

### Prerequisites

- Node.js `>=22.12.0`

### Install & run

```bash
npm install       # install dependencies
npm run dev       # start the dev server at http://localhost:4321
```

### Other commands

```bash
npm run build     # build the production site to ./dist
npm run preview   # preview the production build locally
npx prettier . --check   # check formatting
npx prettier . --write   # auto-format
```

## Adding a New Insight Article

Create a Markdown file in `src/content/insights/` — the filename becomes the URL slug
(e.g. `my-post.md` → `/insights/my-post`):

```markdown
---
title: "My Post Title"
summary: "A short teaser shown on the card."
pubDate: 2026-07-11
---

Write your article here in Markdown.
```

The schema in `src/content.config.ts` validates the frontmatter at build time.

## Deployment

Hosted on **Cloudflare Pages**, connected to this repository. Merges to `main`
trigger an automatic production deploy; pull requests get preview deploys.

## Author

**Lisa Sulkes** — Full-Stack Developer
[lisasulkes.com](https://lisasulkes.com) · [LinkedIn](https://www.linkedin.com/in/lisa-p-sulkes-8858132b0/)