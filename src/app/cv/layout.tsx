import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CV / Resume',
  description: 'Download the CV of Jaume Ivars Grimalt, ML Engineer and Researcher.',
  robots: { index: true, follow: true },
};

export default function CVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
