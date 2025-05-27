"use client";
import React from 'react';
import { notFound } from 'next/navigation';
import PageWrapper from '@/components/PageWrapper';
import ReactMarkdown from 'react-markdown';
import { getBlogPostBySlug } from '@/lib/blog';
import { useRouter } from 'next/router'
 

// Make the component async to match Next.js App Router conventions
export default function BlogPost() {


  const router = useRouter()
  const slug = router.query.slug as string;
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
