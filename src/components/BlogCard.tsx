import Link from 'next/link';

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
  href?: string;
}

export default function BlogCard({ title, excerpt, slug, href }: BlogCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
      <h2 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
        {title}
      </h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
        {excerpt}
      </p>
      <Link
        href={href ?? `/blog/${slug}`}
        className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900 dark:text-neutral-100 dark:decoration-neutral-600"
      >
        Read more
      </Link>
    </article>
  );
}
