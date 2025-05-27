import { notFound } from 'next/navigation';
import PageWrapper from '../../../components/PageWrapper';
import ReactMarkdown from 'react-markdown';
import { getBlogPostBySlug } from '../../../lib/blog';

export const dynamic = 'force-dynamic';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function BlogPost(props: any) {
  const post = getBlogPostBySlug(props.params.slug);

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
