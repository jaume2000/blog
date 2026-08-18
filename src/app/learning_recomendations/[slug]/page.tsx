import { notFound } from 'next/navigation';
import PageWrapper from '../../../components/PageWrapper';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug, type LearningNotesLocale } from '../../../lib/blog';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

const LOCALE: LearningNotesLocale = 'en';

function isValidSlug(slug: string): boolean {
  return !slug.includes('.');
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isValidSlug(slug)) return {};
  const post = getPostBySlug(slug, LOCALE, 'learning_recs');
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    robots: { index: true, follow: true },
  };
}

export default async function LearningNotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isValidSlug(slug)) notFound();

  const post = getPostBySlug(slug, LOCALE, 'learning_recs');

  if (!post) {
    notFound();
  }

  return (
    <PageWrapper title={post.title}>
      <div className="prose dark:prose-invert max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </PageWrapper>
  );
}
