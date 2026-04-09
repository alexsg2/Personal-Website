/**
 * Utility to prepend basePath to image paths for GitHub Pages deployment
 * In production, basePath is '/Personal-Website', in dev it's ''
 */
export function getImagePath(path: string): string {
  // Only prepend basePath in production (when deployed to GitHub Pages)
  const basePath = process.env.NODE_ENV === 'production' ? '/Personal-Website' : '';
  return `${basePath}${path}`;
}
