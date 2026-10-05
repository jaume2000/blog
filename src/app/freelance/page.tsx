import CtaButton from '@/components/CtaButton';
import WorkCaseCard from '@/components/WorkCaseCard';
import ServicesSection from '@/components/ServicesSection';
import type { Metadata } from 'next';
import { FREELANCE_COPY, META } from '@/content/site';
import { HOME_WORK_CASES } from '@/content/work';
import { pageMeta } from '@/lib/metadata';

export const metadata: Metadata = pageMeta({
  title: META.freelanceTitle,
  description: META.freelanceDescription,
  path: '/freelance',
});

export default function FreelancePage() {
  return (
    <main id="main" className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
      <section className="max-w-3xl">
        <h1 className="text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-5xl dark:text-neutral-100">
          {FREELANCE_COPY.headline}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-400">
          {FREELANCE_COPY.subhead}
        </p>
        <div className="mt-8">
          <CtaButton />
        </div>
      </section>

      <section className="mt-16 max-w-3xl sm:mt-20">
        <h2 className="text-sm font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
          {FREELANCE_COPY.problemTitle}
        </h2>
        <div className="mt-4 space-y-3 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          {FREELANCE_COPY.problem.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </section>

      <ServicesSection />

      <section className="mt-16 sm:mt-20">
        <h2 className="text-sm font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
          {FREELANCE_COPY.workTitle}
        </h2>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {HOME_WORK_CASES.map((workCase) => (
            <WorkCaseCard key={workCase.slug} workCase={workCase} />
          ))}
        </div>
      </section>

      <section className="mt-16 max-w-3xl sm:mt-20">
        <h2 className="text-sm font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
          {FREELANCE_COPY.availabilityTitle}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          {FREELANCE_COPY.availability}
        </p>
      </section>

      <section className="mt-16 max-w-3xl border-t border-neutral-200 pt-12 sm:mt-20 dark:border-neutral-800">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          {FREELANCE_COPY.ctaTitle}
        </h2>
        <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400">{FREELANCE_COPY.ctaBody}</p>
        <div className="mt-6">
          <CtaButton />
        </div>
      </section>
    </main>
  );
}
