import React from 'react';
import { notFound } from 'next/navigation';
import PageWrapper from '@/components/PageWrapper';
import ReactMarkdown from 'react-markdown';
import { getBlogPostBySlug } from '@/lib/blog';

// Correct type definition for Next.js App Router page props
type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// Make the component async to match Next.js App Router conventions
export default async function BlogPost({ params, searchParams }: Props) {
  const { slug } = params;
  const post = getBlogPostBySlug(slug);
  
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
