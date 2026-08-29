import type { Metadata } from 'next';
import CtaButton from '@/components/CtaButton';
import TodoText from '@/components/TodoText';
import { META } from '@/content/site';
import { WORK_CASES } from '@/content/work';
import { pageMeta } from '@/lib/metadata';

export const metadata: Metadata = pageMeta({
  title: META.workTitle,
  description: META.workDescription,
  path: '/work',
});

export default function WorkPage() {
  return (
    <main id="main" className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-100">
        Work
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
        Four cases, and they are not the same kind of thing. Mycrospace is the product I own as CTO.
        Tapstar and Vesta-Z are freelance engagements I shipped for someone else’s business.
        ConvNeXt is a training run I did on my own, and it is here because a large training run is
        the thing clients are most afraid to fund.
      </p>

      <div className="mt-14 space-y-20">
        {WORK_CASES.map((workCase) => (
          <article key={workCase.slug} id={workCase.slug} className="scroll-mt-24">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              {workCase.title}
            </h2>
            {workCase.link && (
              <p className="mt-2 text-sm text-neutral-500">
                <a
                  href={workCase.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4"
                >
                  {workCase.link.label}
                </a>
              </p>
            )}

            <h3 className="mt-8 text-sm font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
              Context
            </h3>
            <div className="mt-3 space-y-3 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              {workCase.context.map((line) => (
                <p key={line}>
                  <TodoText text={line} />
                </p>
              ))}
            </div>

            <h3 className="mt-8 text-sm font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
              What I built
            </h3>
            <div className="mt-3 space-y-3 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              {workCase.built.map((line) => (
                <p key={line}>
                  <TodoText text={line} />
                </p>
              ))}
            </div>

            <h3 className="mt-8 text-sm font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
              Technical decisions, and why
            </h3>
            <div className="mt-3 space-y-3 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              {workCase.decisions.map((line) => (
                <p key={line}>
                  <TodoText text={line} />
                </p>
              ))}
            </div>

            <h3 className="mt-8 text-sm font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
              Result
            </h3>
            <div className="mt-3 space-y-3 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              {workCase.result.map((line) => (
                <p key={line}>
                  <TodoText text={line} />
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 border-t border-neutral-200 pt-10 dark:border-neutral-800">
        <CtaButton />
      </div>
    </main>
  );
}
