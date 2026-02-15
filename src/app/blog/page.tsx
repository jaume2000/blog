import React from 'react';
import Link from 'next/link';
import PageWrapper from '../../components/PageWrapper';
import BlogCard from '../../components/BlogCard';
import { getBlogPosts, type BlogLocale } from '../../lib/blog';

export const dynamic = 'force-dynamic';

const VALID_LOCALES: BlogLocale[] = ['en', 'es'];

interface BlogPageProps {
  searchParams: Promise<{ lang?: string }>;
}

export default async function Blog({ searchParams }: BlogPageProps) {
  const { lang: langParam } = await searchParams;
  const lang: BlogLocale = langParam && VALID_LOCALES.includes(langParam as BlogLocale)
    ? (langParam as BlogLocale)
    : 'en';

  const blogPosts = getBlogPosts(lang);

  return (
    <PageWrapper title="Blog">
      <div className="px-4">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-sm text-neutral-500 dark:text-neutral-400">Language:</span>
          <Link
            href="/blog?lang=en"
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              lang === 'en'
                ? 'bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100'
                : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
            }`}
          >
            English
          </Link>
          <Link
            href="/blog?lang=es"
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              lang === 'es'
                ? 'bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100'
                : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
            }`}
          >
            Español
          </Link>
        </div>

        {blogPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                slug={post.slug}
                lang={lang}
              />
            ))}
          </div>
        ) : (
          <p className="text-center py-10">
            {lang === 'es' ? 'No hay entradas todavía. ¡Vuelve pronto!' : 'No blog posts found. Check back soon!'}
          </p>
        )}
      </div>
    </PageWrapper>
  );
}
