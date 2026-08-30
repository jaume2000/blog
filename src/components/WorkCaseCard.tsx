import Link from 'next/link';
import type { WorkCase } from '@/content/work';

export default function WorkCaseCard({ workCase }: { workCase: WorkCase }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-neutral-200 bg-neutral-50/80 p-5 dark:border-neutral-700 dark:bg-neutral-900/50">
      <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
        {workCase.title}
      </h3>
      {workCase.homeMetric ? (
        <>
          <p className="mt-3 text-2xl font-semibold tabular-nums tracking-tight text-neutral-900 dark:text-neutral-100">
            {workCase.homeMetric.number}
          </p>
          <p className="mt-1 flex-1 text-sm text-neutral-600 dark:text-neutral-400">
            {workCase.homeMetric.label}
          </p>
        </>
      ) : (
        <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          {workCase.homeNote}
        </p>
      )}
      <Link
        href={`/work#${workCase.slug}`}
        className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900 dark:text-neutral-100 dark:decoration-neutral-600 dark:hover:decoration-neutral-100"
      >
        Read the case
      </Link>
    </article>
  );
}
