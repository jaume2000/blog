import type { Metadata } from 'next';
import PageWrapper from '@/components/PageWrapper';
import BlogCard from '@/components/BlogCard';
import { META } from '@/content/site';
import { LEARNING_INTRO } from '@/content/learning';
import { getRoadmaps } from '@/lib/learning';
import { pageMeta } from '@/lib/metadata';

export const metadata: Metadata = pageMeta({
  title: META.learningTitle,
  description: META.learningDescription,
  path: '/learning',
});

export default function LearningPage() {
  const roadmaps = getRoadmaps();

  return (
    <main id="main">
      <PageWrapper title="Learning roadmaps">
        <p>{LEARNING_INTRO}</p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {roadmaps.map((roadmap) => (
            <BlogCard
              key={roadmap.slug}
              title={roadmap.title}
              excerpt={roadmap.excerpt}
              slug={roadmap.slug}
              href={`/learning/${roadmap.slug}`}
            />
          ))}
        </div>
      </PageWrapper>
    </main>
  );
}
