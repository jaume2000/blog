import React from 'react';

function PageWrapper({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-100">
        {title}
      </h1>
      <div className="prose prose-neutral mt-8 max-w-none dark:prose-invert">{children}</div>
    </div>
  );
}

export default PageWrapper;
