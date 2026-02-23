/**
 * Canonical site URL without trailing slash.
 * Prevents double slashes in sitemap, robots and canonical URLs.
 */
export function getBaseUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://jaumeivars.com');
  return raw.replace(/\/+$/, '');
}
