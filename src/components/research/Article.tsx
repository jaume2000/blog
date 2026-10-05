import Image from 'next/image';
import type { ReactNode } from 'react';
import { REFERENCES } from '@/content/research/delta-neural-ode';

export function Figure({
  id,
  number,
  caption,
  children,
}: {
  id?: string;
  number: number;
  caption: ReactNode;
  children: ReactNode;
}) {
  return (
    <figure id={id} className="my-10 scroll-mt-24">
      <div className="rounded-xl border border-neutral-200 bg-white p-3 sm:p-4 dark:border-neutral-800 dark:bg-neutral-950">
        {children}
      </div>
      <figcaption className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
        <span className="font-medium text-neutral-900 dark:text-neutral-100">Figure {number}.</span>{' '}
        {caption}
      </figcaption>
    </figure>
  );
}

/** Matplotlib output is drawn on white, so it keeps a white backdrop in dark mode too. */
export function Plot({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) {
  return (
    <div className="overflow-hidden rounded-lg bg-white">
      <Image src={src} alt={alt} width={width} height={height} className="h-auto w-full" />
    </div>
  );
}

export function Video({ src, poster, label }: { src: string; poster: string; label: string }) {
  return (
    <div className="overflow-hidden rounded-lg bg-white">
      <video
        src={src}
        poster={poster}
        aria-label={label}
        className="h-auto w-full"
        autoPlay
        loop
        muted
        playsInline
        controls
        preload="metadata"
      />
    </div>
  );
}

const REF_INDEX = new Map(REFERENCES.map((ref, i) => [ref.id, i + 1]));

export function Cite({ ids }: { ids: string[] }) {
  return (
    <span className="whitespace-nowrap text-neutral-500 dark:text-neutral-400">
      [
      {ids.map((id, i) => {
        const n = REF_INDEX.get(id);
        if (n === undefined) throw new Error(`Unknown reference ${id}`);
        return (
          <span key={id}>
            {i > 0 && ', '}
            <a href={`#ref-${id}`} className="hover:text-neutral-900 dark:hover:text-neutral-100">
              {n}
            </a>
          </span>
        );
      })}
      ]
    </span>
  );
}

export function Bibliography() {
  return (
    <ol className="mt-6 space-y-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
      {REFERENCES.map((ref, i) => (
        <li key={ref.id} id={`ref-${ref.id}`} className="flex scroll-mt-24 gap-3">
          <span className="w-7 shrink-0 tabular-nums text-neutral-500">[{i + 1}]</span>
          <span>
            {ref.authors}.{' '}
            <a
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900 dark:text-neutral-100 dark:decoration-neutral-600"
            >
              {ref.title}
            </a>
            {ref.title.endsWith('?') ? ' ' : '. '}
            <span className="italic">{ref.venue}</span>, {ref.year}.
          </span>
        </li>
      ))}
    </ol>
  );
}
