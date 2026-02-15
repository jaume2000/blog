import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center w-full px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
      {/* Hero */}
      <header className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-12 md:mb-16 max-w-4xl w-full">
        <Image
          src="/photo.jpeg"
          alt="Jaume Ivars"
          width={200}
          height={200}
          className="rounded-full aspect-square object-cover w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 shrink-0 ring-2 ring-neutral-200 dark:ring-neutral-700"
        />
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight text-neutral-900 dark:text-neutral-100">
            Jaume Ivars Grimalt
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 mt-1 text-base sm:text-lg">
            Researcher & ML Engineer
          </p>
          <p className="text-neutral-500 dark:text-neutral-500 mt-2 text-sm sm:text-base max-w-md">
            Computer vision, production ML systems, and biotech. Based in Valencia.
          </p>
        </div>
      </header>

      {/* Links */}
      <main className="flex flex-col gap-10 max-w-2xl w-full">
        <section className="space-y-3">
          <h2 className="text-sm font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            For recruiters & visitors
          </h2>
          <nav className="flex flex-col rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50/80 dark:bg-neutral-900/50 overflow-hidden">
            <Link
              href="/about"
              className="px-4 py-3.5 sm:px-5 sm:py-4 border-b border-neutral-200 dark:border-neutral-700 last:border-b-0 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-colors"
            >
              Who is this guy?
            </Link>
            <Link
              href="/archivements"
              className="px-4 py-3.5 sm:px-5 sm:py-4 border-b border-neutral-200 dark:border-neutral-700 last:border-b-0 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-colors"
            >
              What have you accomplished?
            </Link>
            <Link
              href="/work_experience"
              className="px-4 py-3.5 sm:px-5 sm:py-4 border-b border-neutral-200 dark:border-neutral-700 last:border-b-0 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-colors"
            >
              What&apos;s your work experience?
            </Link>
            <Link
              href="/projects"
              className="px-4 py-3.5 sm:px-5 sm:py-4 border-b border-neutral-200 dark:border-neutral-700 last:border-b-0 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-colors"
            >
              What&apos;s Mycrospace?
            </Link>
            <Link
              href="/resume.pdf"
              className="download-cv-gradient px-4 py-3.5 sm:px-5 sm:py-4 text-center font-semibold bg-neutral-100 dark:bg-neutral-800/50 hover:opacity-90 transition-opacity"
            >
              Download CV
            </Link>
          </nav>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            Learning & writing
          </h2>
          <nav className="flex flex-col rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50/80 dark:bg-neutral-900/50 overflow-hidden">
            <Link
              href="/learning_notes"
              className="px-4 py-3.5 sm:px-5 sm:py-4 border-b border-neutral-200 dark:border-neutral-700 last:border-b-0 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-colors"
            >
              Notes on Deep Learning, Maths & Biotech
            </Link>
            <Link
              href="/learning_recomendations"
              className="px-4 py-3.5 sm:px-5 sm:py-4 border-b border-neutral-200 dark:border-neutral-700 last:border-b-0 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-colors"
            >
              Books and papers I recommend
            </Link>
            <Link
              href="/blog"
              className="px-4 py-3.5 sm:px-5 sm:py-4 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-colors"
            >
              Blog
            </Link>
          </nav>
        </section>
      </main>

      {/* Socials */}
      <footer className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-700 max-w-2xl w-full flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-500 dark:text-neutral-400">
        <a
          href="https://www.linkedin.com/in/jaume-ivars-grimalt/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="mailto:jaume@mycrospace.es"
          className="hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
        >
          jaume@mycrospace.es
        </a>
      </footer>
    </div>
  )
}
