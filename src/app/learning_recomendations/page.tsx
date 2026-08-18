import React from 'react';
import Link from 'next/link';
import PageWrapper from '../../components/PageWrapper';
import BlogCard from '../../components/BlogCard';
import { getLearningNotesPosts, type LearningNotesLocale } from '../../lib/blog';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Learning Notes',
  description: 'Shared study plans I made by my own',
  robots: { index: true, follow: true },
};

const VALID_LOCALES: LearningNotesLocale[] = ['en'];

interface BlogPageProps {
  searchParams: Promise<{ lang?: string }>;
}

export default async function Blog({ searchParams }: BlogPageProps) {
  const { lang: langParam } = await searchParams;
  const lang: LearningNotesLocale = langParam && VALID_LOCALES.includes(langParam as LearningNotesLocale)
    ? (langParam as LearningNotesLocale)
    : 'en';

  const learningNotesPosts = getLearningNotesPosts(lang);

  return (
    <PageWrapper title="Learning Notes">
      <div className="px-4">

        {learningNotesPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {learningNotesPosts.map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                slug={post.slug}
                lang={lang}
                href={`/learning_recomendations/${post.slug}`}
              />
            ))}
          </div>
        ) : (
          <p className="text-center py-10">
            {'No blog posts found. Check back soon!'}
          </p>
        )}
      </div>
    </PageWrapper>
  );
}
