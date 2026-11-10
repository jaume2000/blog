import Link from 'next/link'
import type { ResearchLink, ResearchProject } from '@/content/research/projects'

const linkClass =
  'inline-flex min-h-11 items-center text-sm font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900 dark:text-neutral-100 dark:decoration-neutral-600 dark:hover:decoration-neutral-100'

function TextLink({ link }: { link: ResearchLink }) {
  if (link.href.startsWith('http')) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
        {link.label}
      </a>
    )
  }
  return (
    <Link href={link.href} className={linkClass}>
      {link.label}
    </Link>
  )
}

export default function ResearchList({
  projects,
  heading: Heading = 'h2',
  showStatus = true,
}: {
  projects: readonly ResearchProject[]
  heading?: 'h2' | 'h3'
  showStatus?: boolean
}) {
  return (
    <ul className="space-y-10 border-l border-neutral-200 pl-6 dark:border-neutral-800">
      {projects.map((item) => (
        <li key={item.slug}>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-x-4">
            <Heading className="min-w-0 text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              {item.title}
            </Heading>
            {item.period && (
              <span className="shrink-0 text-sm tabular-nums text-neutral-500 dark:text-neutral-400">
                {item.period}
              </span>
            )}
          </div>
          {showStatus && (
            <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{item.status}</p>
          )}
          <p className="mt-2 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            {item.body}
          </p>
          {item.links && item.links.length > 0 && (
            <div className="mt-1 flex flex-wrap gap-x-4">
              {item.links.map((link) => (
                <TextLink key={link.href} link={link} />
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}
