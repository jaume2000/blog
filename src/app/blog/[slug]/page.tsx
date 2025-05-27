import React from 'react';
import { notFound } from 'next/navigation';
import PageWrapper from '../../../components/PageWrapper';
import ReactMarkdown from 'react-markdown';
import { getBlogPostBySlug } from '../../../lib/blog';

interface BlogPostParams {
  params: {
    slug: string;
  };
}

export const dynamic = 'force-dynamic';

function BlogPost({ params }: BlogPostParams) {
  const { slug } = params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <PageWrapper title={post.title}>
        <ReactMarkdown>{post.content}</ReactMarkdown>
    </PageWrapper>
  );
}

export default BlogPost;
