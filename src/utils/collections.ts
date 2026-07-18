import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { getCollection, type CollectionEntry } from 'astro:content';

function hasMarkdownEntries(collection: 'notes' | 'publications') {
  const directory = resolve(process.cwd(), 'src', 'content', collection);
  return readdirSync(directory, { recursive: true }).some((file) =>
    /\.(md|mdx)$/i.test(String(file)),
  );
}

export async function getPublishedNotes(): Promise<CollectionEntry<'notes'>[]> {
  if (!hasMarkdownEntries('notes')) return [];
  return getCollection('notes', ({ data }) => !data.draft);
}

export async function getPublications(): Promise<CollectionEntry<'publications'>[]> {
  if (!hasMarkdownEntries('publications')) return [];
  return getCollection('publications');
}
