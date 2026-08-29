import { SITE } from '@/content/site';

export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-8 sm:px-6">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {SITE.fullName} · {SITE.location}
        </p>
        <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500 dark:text-neutral-400">
          <a
            href={SITE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-11 inline-flex items-center hover:text-neutral-800 dark:hover:text-neutral-200"
          >
            {SITE.linkedinLabel}
          </a>
          <a
            href={SITE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-11 inline-flex items-center hover:text-neutral-800 dark:hover:text-neutral-200"
          >
            {SITE.githubLabel}
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="min-h-11 inline-flex items-center hover:text-neutral-800 dark:hover:text-neutral-200"
          >
            {SITE.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
