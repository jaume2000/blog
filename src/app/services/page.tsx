import type { Metadata } from 'next';
import CtaButton from '@/components/CtaButton';
import { META } from '@/content/site';
import { SERVICES } from '@/content/services';
import { pageMeta } from '@/lib/metadata';

export const metadata: Metadata = pageMeta({
  title: META.servicesTitle,
  description: META.servicesDescription,
  path: '/services',
});

export default function ServicesPage() {
  return (
    <main id="main" className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-100">
        Services
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
        Four ways to work together, and the same person through the whole cycle. Find the one that
        matches where you are now — they are ordered by how soon we can start and finish.
      </p>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
        Projects start at €4,000, excluding VAT. The figures below are starting points, not a quote.
        Timelines are calendar time from kickoff to delivery, and I take one project at a time.
      </p>

      <div className="mt-12 space-y-16">
        {SERVICES.map((service) => (
          <article key={service.id} id={service.id} className="scroll-mt-24">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              {service.name}
            </h2>
            <p className="mt-3 text-base font-medium leading-relaxed text-neutral-900 dark:text-neutral-100">
              {service.forYouIf}
            </p>
            <div className="mt-4 space-y-3 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              {service.description.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <h3 className="mt-6 text-sm font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
              Deliverables
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-base text-neutral-700 dark:text-neutral-300">
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-sm text-neutral-600 dark:text-neutral-400">Starting price</dt>
                <dd className="mt-1 text-base font-medium text-neutral-900 dark:text-neutral-100">
                  From {service.startingPrice}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-neutral-600 dark:text-neutral-400">Timeline</dt>
                <dd className="mt-1 text-base font-medium text-neutral-900 dark:text-neutral-100">
                  {service.timeline}
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              {service.notAFit}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-16 border-t border-neutral-200 pt-10 dark:border-neutral-800">
        <CtaButton />
      </div>
    </main>
  );
}
