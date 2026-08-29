import type { Metadata } from 'next';
import PageWrapper from '@/components/PageWrapper';
import BlogCard from '@/components/BlogCard';
import { META } from '@/content/site';
import { getPublishedPosts } from '@/lib/blog';
import { pageMeta } from '@/lib/metadata';

export const metadata: Metadata = pageMeta({
  title: META.blogTitle,
  description: META.blogDescription,
  path: '/blog',
});

export default function BlogPage() {
  const posts = getPublishedPosts();

  return (
    <main id="main">
      <PageWrapper title="Blog">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                slug={post.slug}
              />
            ))}
          </div>
        ) : (
          <p>No posts yet. Check back later.</p>
        )}
      </PageWrapper>
    </main>
  );
}
