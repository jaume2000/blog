import Link from 'next/link';
import type { ServiceHighlight, ServicePackage } from '@/content/services';

export default function ServiceCard({
  service,
  highlightFn,
}: {
  service: ServicePackage;
  highlightFn: (highlights: ServiceHighlight[]) => void;
}) {
  return (
    <Link href={`/services#${service.id}`} className="group h-full">
      <article
        className="flex h-full flex-col rounded-xl border border-neutral-200 bg-neutral-50/80 p-4 transition-colors group-hover:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-900/50 dark:group-hover:border-neutral-500"
        onMouseEnter={() => highlightFn(service.highlight)}
        onMouseLeave={() => highlightFn([])}
      >
        <p className="text-sm font-medium leading-snug text-neutral-900 dark:text-neutral-100">
          {service.forYouIf}
        </p>
        <h3 className="mt-3 text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          {service.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          {service.summary}
        </p>
      </article>
    </Link>
  );
}
