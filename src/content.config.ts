import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';
import { SITE } from 'config';

const docs = defineCollection({
    // Load Markdown and MDX files in the `src/content/blog/` directory.
    loader: glob({ base: "./content/docs", pattern: "**/*.{md,mdx}" }),
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        author: z.string().default(SITE.author),
        pubDatetime: z.date().optional(),
        modDatetime: z.date().optional().nullable(),
        description: z.string().optional(),
        draft: z.boolean().default(false),
        tags: z.array(z.string()).default([]),
        hide_breadcrumbs: z.boolean().optional().default(false),
        hide_toc: z.boolean().optional().default(false),
        hide_sidenav: z.boolean().optional().default(false),
        max_width: z.boolean().optional().default(false),
    }),
});

export const collections = { docs };
