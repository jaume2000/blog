import type { Metadata } from 'next'
import ResearchList from '@/components/research/ResearchList'
import { RESEARCH_INTRO, RESEARCH_PROJECTS } from '@/content/research/projects'
import { META } from '@/content/site'
import { pageMeta } from '@/lib/metadata'

export const metadata: Metadata = pageMeta({
  title: META.researchTitle,
  description: META.researchDescription,
  path: '/research',
})

export default function ResearchPage() {
  return (
    <main id="main" className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-100">
        Research
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
        {RESEARCH_INTRO}
      </p>
      <div className="mt-12">
        <ResearchList projects={RESEARCH_PROJECTS} heading="h2" />
      </div>
    </main>
  )
}
