import { notFound } from 'next/navigation';
import PageWrapper from '../../../components/PageWrapper';
import ReactMarkdown from 'react-markdown';
import { getBlogPostBySlug } from '../../../lib/blog';

export const dynamic = 'force-dynamic';

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPostBySlug(params.slug);

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
