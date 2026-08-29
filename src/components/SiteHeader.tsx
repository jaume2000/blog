import Link from 'next/link';
import { SITE } from '@/content/site';
import { getMainNavLinks } from '@/components/nav-links';
import CtaButton from '@/components/CtaButton';
import DesktopNav from '@/components/DesktopNav';
import MobileNav from '@/components/MobileNav';

export default function SiteHeader() {
  const links = getMainNavLinks();

  return (
    <header className="relative border-b border-neutral-200 bg-white/90 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/90">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-100"
        >
          {SITE.name}
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          <DesktopNav links={links} />
          <CtaButton className="ml-2" />
        </div>
        <MobileNav links={links} />
      </div>
    </header>
  );
}
