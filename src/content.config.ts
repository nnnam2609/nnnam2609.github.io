import { readdirSync } from 'node:fs';
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const optionalUrl = z.url().optional();
const markdownLoader = (base: string) => {
  const hasEntries = readdirSync(base, { recursive: true }).some((file) =>
    /\.(md|mdx)$/i.test(String(file)),
  );

  return hasEntries ? glob({ pattern: '**/*.{md,mdx}', base }) : async () => [];
};

const research = defineCollection({
  loader: markdownLoader('./src/content/research'),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    status: z.string().min(1),
    methods: z.array(z.string().min(1)),
    relatedProjects: z.array(z.string().min(1)).default([]),
    relatedPublications: z.array(z.string().min(1)).default([]),
    image: z.string().optional(),
    externalUrl: optionalUrl,
    order: z.number().int().nonnegative(),
  }),
});

const projects = defineCollection({
  loader: markdownLoader('./src/content/projects'),
  schema: z.object({
    name: z.string().min(1),
    summary: z.string().min(1),
    type: z.enum(['research', 'software']),
    status: z.string().min(1),
    technologies: z.array(z.string().min(1)).default([]),
    repositoryUrl: optionalUrl,
    demoUrl: optionalUrl,
    featured: z.boolean().default(false),
    startYear: z.number().int().min(1900).max(2100).optional(),
    endYear: z.number().int().min(1900).max(2100).optional(),
    image: z.string().optional(),
    order: z.number().int().nonnegative(),
  }),
});

const publications = defineCollection({
  loader: markdownLoader('./src/content/publications'),
  schema: z.object({
    title: z.string().min(1),
    authors: z.array(z.string().min(1)).min(1),
    venue: z.string().min(1),
    year: z.number().int().min(1900).max(2100),
    type: z.enum(['journal', 'conference', 'workshop', 'preprint', 'thesis', 'talk']),
    doi: z.string().optional(),
    paperUrl: optionalUrl,
    codeUrl: optionalUrl,
    slidesUrl: optionalUrl,
    abstract: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const notes = defineCollection({
  loader: markdownLoader('./src/content/notes'),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string().min(1)).default([]),
    draft: z.boolean().default(true),
    readingTime: z.string().optional(),
    canonicalUrl: optionalUrl,
  }),
});

export const collections = { research, projects, publications, notes };
