import { MetadataRoute } from 'next';
import { getPublishedPosts } from '@/lib/blog';
import { getRoadmapSlugs } from '@/lib/learning';
import { getBaseUrl } from '@/lib/site-url';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const published = getPublishedPosts();

  const pages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/work`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
    { url: `${baseUrl}/learning`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ];

  for (const post of published) {
    pages.push({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    });
  }

  for (const slug of getRoadmapSlugs()) {
    pages.push({
      url: `${baseUrl}/learning/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    });
  }

  return pages;
}
