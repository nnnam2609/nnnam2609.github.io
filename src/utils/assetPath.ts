/**
 * Prefix public assets with Astro/Vite's configured base path.
 * This keeps the microsite portable between a user site and a project site.
 */
export function assetPath(path: string): string {
  const normalizedPath = path.replace(/^\/+/, '');
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  return `${base}${normalizedPath}`;
}
