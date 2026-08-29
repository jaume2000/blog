import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import PageWrapper from '@/components/PageWrapper';
import { getRoadmap, getRoadmapSlugs } from '@/lib/learning';
import { pageMeta } from '@/lib/metadata';

export function generateStaticParams() {
  return getRoadmapSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const roadmap = getRoadmap(slug);
  if (!roadmap) return {};
  return pageMeta({
    title: roadmap.title,
    description: roadmap.excerpt || roadmap.title,
    path: `/learning/${slug}`,
  });
}

export default async function RoadmapPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const roadmap = getRoadmap(slug);
  if (!roadmap) notFound();

  return (
    <main id="main">
      <PageWrapper title={roadmap.title}>
        <ReactMarkdown>{roadmap.content}</ReactMarkdown>
      </PageWrapper>
    </main>
  );
}
