import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import PageWrapper from '@/components/PageWrapper';
import { getPostBySlug } from '@/lib/blog';
import { pageMeta } from '@/lib/metadata';
import type { Metadata } from 'next';

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
  const post = getPostBySlug(slug);
  if (!post) return {};
  return pageMeta({
    title: post.title,
    description: post.excerpt || post.title,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isValidSlug(slug)) notFound();

  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main id="main">
      <PageWrapper title={post.title}>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </PageWrapper>
    </main>
  );
}
