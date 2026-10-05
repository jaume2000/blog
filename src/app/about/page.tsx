import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CtaButton from '@/components/CtaButton';
import { ABOUT } from '@/content/about';
import { META, SITE } from '@/content/site';
import { pageMeta } from '@/lib/metadata';

// The nav header, footer and full metadata (canonical, og:image, og:url, twitter)
// come from src/app/layout.tsx and lib/metadata.ts, same as every other page.
//
// /learning is linked from here and from nowhere else. Decision: keep it out of the
// main nav (Home, Blog, About, Freelance). It stays indexable via the sitemap and is
// also linked from the home page.
export const metadata: Metadata = pageMeta({
  title: META.aboutTitle,
  description: META.aboutDescription,
  path: '/about',
});

export default function AboutPage() {
  return (
    <main id="main" className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <Image
          src={SITE.photo}
          alt={SITE.fullName}
          width={160}
          height={160}
          className="h-28 w-28 shrink-0 rounded-full object-cover ring-2 ring-neutral-200 sm:h-32 sm:w-32 dark:ring-neutral-700"
        />
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-100">
            {ABOUT.title}
          </h1>
          <div className="mt-3 max-w-xl space-y-2 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
            {ABOUT.intro.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          {ABOUT.pathHeading}
        </h2>
        <ul className="mt-4 space-y-3 border-l border-neutral-200 pl-6 text-base leading-relaxed text-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
          {ABOUT.path.map((line) => (
            <li key={line}>
              {line}
              {line.includes('Tapstar') && (
                <>
                  {' '}
                  <Link
                    href={ABOUT.pathWorkLink.href}
                    className="font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900 dark:text-neutral-100 dark:decoration-neutral-600"
                  >
                    {ABOUT.pathWorkLink.label}
                  </Link>
                  .
                </>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          {ABOUT.workHeading}
        </h2>
        <div className="mt-4 space-y-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          {ABOUT.work.map((item) => (
            <p key={item.body}>
              {item.body}
              {'link' in item && item.link && (
                <>
                  {' '}
                  <Link
                    href={item.link.href}
                    className="font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900 dark:text-neutral-100 dark:decoration-neutral-600"
                  >
                    {item.link.label}
                  </Link>
                </>
              )}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          {ABOUT.outsideHeading}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          {ABOUT.outside}{' '}
          <Link
            href={ABOUT.outsideLink.href}
            className="text-neutral-600 underline decoration-neutral-300 underline-offset-4 hover:text-neutral-900 dark:text-neutral-400 dark:decoration-neutral-600 dark:hover:text-neutral-100"
          >
            {ABOUT.outsideLink.label}
          </Link>
          .
        </p>
      </section>

      <section className="mt-16 border-t border-neutral-200 pt-12 dark:border-neutral-800">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          {ABOUT.ctaHeading}
        </h2>
        <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400">{ABOUT.ctaBody}</p>
        <div className="mt-6">
          <CtaButton />
        </div>
      </section>

      <p className="mt-12 text-sm text-neutral-500">
        <a
          href={SITE.resumeUrl}
          className="underline decoration-neutral-300 underline-offset-4 hover:text-neutral-800 hover:decoration-neutral-800 dark:hover:text-neutral-300"
        >
          {ABOUT.resumeLabel}
        </a>
      </p>
    </main>
  );
}
