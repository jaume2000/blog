import type { ReactNode } from 'react';
import { SITE } from '@/content/site';

interface CtaButtonProps {
  href?: string;
  children?: ReactNode;
  className?: string;
}

export default function CtaButton({
  href = SITE.calendarUrl,
  children = SITE.calendarLabel,
  className = '',
}: CtaButtonProps) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`inline-flex min-h-11 items-center justify-center rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white dark:focus-visible:outline-neutral-100 ${className}`}
      aria-label={href.startsWith('http') ? `${typeof children === 'string' ? children : SITE.calendarLabel} (opens in a new tab)` : undefined}
    >
      {children}
    </a>
  );
}
