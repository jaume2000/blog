import Image from 'next/image';
import Link from 'next/link';
import BlogCard from '@/components/BlogCard';
import { HOME, type HomeLink, type Idea, type ResearchItem } from '@/content/home';
import { SITE } from '@/content/site';
import { getPublishedPosts } from '@/lib/blog';
import { homeMeta } from '@/lib/metadata';

export const metadata = homeMeta();

const linkClass =
  'inline-flex min-h-11 items-center text-sm font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900 dark:text-neutral-100 dark:decoration-neutral-600 dark:hover:decoration-neutral-100';

const headingClass =
  'text-sm font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400';

function TextLink({ link }: { link: HomeLink }) {
  if (link.href.startsWith('http')) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
        {link.label}
      </a>
    );
  }
  return (
    <Link href={link.href} className={linkClass}>
      {link.label}
    </Link>
  );
}

export default function Home() {
  const posts = getPublishedPosts();
  const research: readonly ResearchItem[] = HOME.research;
  const ideas: readonly Idea[] = HOME.ideas;

  return (
    <main id="main" className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
      <section className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <Image
          src={SITE.photo}
          alt={SITE.fullName}
          width={160}
          height={160}
          priority
          className="h-28 w-28 shrink-0 rounded-full object-cover ring-2 ring-neutral-200 sm:h-32 sm:w-32 dark:ring-neutral-700"
        />
        <div>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-100">
            {HOME.greeting}
          </h1>
          <div className="mt-3 space-y-2 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
            {HOME.intro.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="mt-2">
            <TextLink link={HOME.aboutLink} />
          </div>
        </div>
      </section>

      <section className="mt-16 sm:mt-20">
        <h2 className={headingClass}>{HOME.researchHeading}</h2>
        <p className="mt-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          {HOME.researchIntro}
        </p>
        <ul className="mt-6 space-y-8 border-l border-neutral-200 pl-6 dark:border-neutral-800">
          {research.map((item) => (
            <li key={item.title}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                  {item.title}
                </h3>
                {item.period && (
                  <span className="text-sm tabular-nums text-neutral-500 dark:text-neutral-400">
                    {item.period}
                  </span>
                )}
              </div>
              <p className="mt-2 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                {item.body}
              </p>
              {item.link && <TextLink link={item.link} />}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 sm:mt-20">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className={headingClass}>{HOME.reflectionsHeading}</h2>
          <TextLink link={HOME.reflectionsLink} />
        </div>
        <p className="mt-2 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          {HOME.reflectionsIntro}
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} title={post.title} excerpt={post.excerpt} slug={post.slug} />
          ))}
        </div>
      </section>

      <section className="mt-16 sm:mt-20">
        <h2 className={headingClass}>{HOME.ideasHeading}</h2>
        <ul className="mt-6 space-y-6">
          {ideas.map((idea) => (
            <li key={idea.body} className="border-l-2 border-neutral-900 pl-5 dark:border-neutral-100">
              <p className="text-base leading-relaxed text-neutral-800 dark:text-neutral-200">
                {idea.body}
              </p>
              {idea.link && <TextLink link={idea.link} />}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <TextLink link={HOME.learningLink} />
        </div>
      </section>

      <section className="mt-16 border-t border-neutral-200 pt-12 sm:mt-20 dark:border-neutral-800">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          {HOME.freelanceHeading}
        </h2>
        <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400">{HOME.freelanceBody}</p>
        <div className="mt-2">
          <TextLink link={HOME.freelanceLink} />
        </div>
      </section>
    </main>
  );
}
