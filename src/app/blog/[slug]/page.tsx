import React from 'react';
import { notFound } from 'next/navigation';
import PageWrapper from '../../../../components/PageWrapper';
import ReactMarkdown from 'react-markdown';
import { getBlogPostBySlug } from '../../../../lib/blog';

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
      <div className="max-w-4xl mx-auto px-4">
        <div className="prose dark:prose-invert prose-lg mx-auto">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </PageWrapper>
  );
}

export default BlogPost;
