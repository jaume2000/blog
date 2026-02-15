import { notFound } from 'next/navigation';
import PageWrapper from '../../../../components/PageWrapper';
import ReactMarkdown from 'react-markdown';
import { getBlogPostBySlug, type BlogLocale } from '../../../../lib/blog';

export const dynamic = 'force-dynamic';

const VALID_LOCALES: BlogLocale[] = ['en', 'es'];

export default async function BlogPost({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!VALID_LOCALES.includes(lang as BlogLocale)) notFound();

  const post = getBlogPostBySlug(slug, lang as BlogLocale);

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
