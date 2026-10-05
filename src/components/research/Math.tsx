import katex from 'katex';

export function InlineMath({ tex }: { tex: string }) {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(tex, { throwOnError: true, displayMode: false }),
      }}
    />
  );
}

export function DisplayMath({ tex, numbered }: { tex: string; numbered?: string }) {
  return (
    <div className="my-6 overflow-x-auto rounded-lg bg-neutral-50 px-4 py-4 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
      <div className="flex items-center justify-center gap-4">
        <div
          className="min-w-0"
          dangerouslySetInnerHTML={{
            __html: katex.renderToString(tex, { throwOnError: true, displayMode: true }),
          }}
        />
        {numbered && (
          <span className="shrink-0 text-sm text-neutral-500 dark:text-neutral-400">({numbered})</span>
        )}
      </div>
    </div>
  );
}
