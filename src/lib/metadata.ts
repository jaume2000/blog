import type { Metadata } from 'next';
import { META, SITE } from '@/content/site';
import { getBaseUrl } from '@/lib/site-url';

export function pageMeta({
  title,
  description,
  path,
  index = true,
}: {
  title: string;
  description: string;
  path: string;
  index?: boolean;
}): Metadata {
  const url = `${getBaseUrl()}${path === '/' ? '' : path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'en',
      url,
      title,
      description,
      siteName: SITE.name,
      images: [{ url: SITE.ogImage, alt: SITE.fullName }],
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
    robots: { index, follow: true },
  };
}

export function homeMeta(): Metadata {
  return {
    ...pageMeta({
      title: META.homeTitle,
      description: META.homeDescription,
      path: '/',
    }),
    title: { absolute: META.homeTitle },
  };
}
