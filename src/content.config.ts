import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const insights = defineCollection({
  // Load every Markdown file in src/content/insights/
  loader: glob({ base: "./src/content/insights", pattern: "**/*.md" }),
  // Enforce the shape of each article's frontmatter
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { insights };
