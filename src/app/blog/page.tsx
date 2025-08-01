import React from 'react';
import PageWrapper from '../../components/PageWrapper';
import BlogCard from '../../components/BlogCard';
import { getBlogPosts } from '../../lib/blog';

export const dynamic = 'force-dynamic';

function Blog() {
  const blogPosts = getBlogPosts();
  
  return (
    <PageWrapper title="Blog">
      <div className="px-4">
        {blogPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {blogPosts.map(post => (
              <BlogCard 
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                slug={post.slug}
              />
            ))}
          </div>
        ) : (
          <p className="text-center py-10">No blog posts found. Check back soon!</p>
        )}
      </div>
    </PageWrapper>
  );
}

export default Blog;