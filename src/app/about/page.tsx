import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ABOUT } from '@/content/about';
import { META, SITE } from '@/content/site';
import { pageMeta } from '@/lib/metadata';

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
          <p className="mt-3 max-w-xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
            {ABOUT.lead}
          </p>
        </div>
      </div>

      {ABOUT.sections.map((section) => (
        <section key={section.heading} className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            {section.heading}
          </h2>
          <div className="mt-4 space-y-3 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            {section.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>
      ))}

      <section className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          {ABOUT.trackHeading}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          {ABOUT.trackLead}
        </p>
        <ol className="mt-6 space-y-8 border-l border-neutral-200 pl-6 dark:border-neutral-800">
          {ABOUT.track.map((item) => (
            <li key={item.org}>
              <p className="text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                {item.org}
              </p>
              <p className="mt-0.5 text-sm text-neutral-600 dark:text-neutral-400">
                {item.role} · {item.period}
              </p>
              <p className="mt-2 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                {item.note}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          {ABOUT.educationHeading}
        </h2>
        <ol className="mt-6 space-y-8 border-l border-neutral-200 pl-6 dark:border-neutral-800">
          {ABOUT.education.map((item) => (
            <li key={item.degree}>
              <p className="text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                {item.degree}
              </p>
              <p className="mt-0.5 text-sm text-neutral-600 dark:text-neutral-400">
                {item.school} · {item.period}
              </p>
              <p className="mt-2 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                {item.note}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {ABOUT.sectionsAfter.map((section) => (
        <section key={section.heading} className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            {section.heading}
          </h2>
          <div className="mt-4 space-y-3 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            {section.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>
      ))}

      <section className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          {ABOUT.learningHeading}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          {ABOUT.learningLead}{' '}
          <Link
            href="/learning"
            className="font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900 dark:text-neutral-100 dark:decoration-neutral-600"
          >
            {ABOUT.learningLinkLabel}
          </Link>
          .
        </p>
      </section>

      <p className="mt-16 text-sm text-neutral-500">
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
