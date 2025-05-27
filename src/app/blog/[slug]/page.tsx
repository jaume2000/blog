import React from 'react';
import { notFound } from 'next/navigation';
import PageWrapper from '@/components/PageWrapper';
import ReactMarkdown from 'react-markdown';
import { getBlogPostBySlug } from '@/lib/blog';

// Update the parameter type to match Next.js App Router conventions
type BlogPostProps = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export const dynamic = 'force-dynamic';

function BlogPost({ params }: BlogPostProps) {
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

export default BlogPost;
