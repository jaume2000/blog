import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { getBaseUrl } from '@/lib/site-url';
import { META, SITE } from '@/content/site';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import JsonLd from '@/components/JsonLd';
import 'katex/dist/katex.min.css';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteUrl = getBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: META.homeTitle,
    template: `%s | ${SITE.name}`,
  },
  description: META.homeDescription,
  icons: '/favicon.png',
  openGraph: {
    type: 'website',
    locale: 'en',
    siteName: SITE.name,
    title: META.homeTitle,
    description: META.homeDescription,
    url: siteUrl,
    images: [{ url: SITE.ogImage, alt: SITE.fullName }],
  },
  twitter: {
    card: 'summary',
    title: META.homeTitle,
    description: META.homeDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

function structuredData(baseUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${baseUrl}/#person`,
        name: SITE.fullName,
        url: baseUrl,
        email: SITE.email,
        image: `${baseUrl}${SITE.ogImage}`,
        jobTitle: 'CTO',
        worksFor: {
          '@type': 'Organization',
          name: 'Mycrospace',
          url: SITE.mycrospaceUrl,
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: SITE.location,
          addressCountry: 'ES',
        },
        sameAs: [SITE.linkedinUrl],
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${baseUrl}/#service`,
        name: `${SITE.name} — AI product engineering`,
        url: `${baseUrl}/freelance`,
        description: META.freelanceDescription,
        image: `${baseUrl}${SITE.ogImage}`,
        email: SITE.email,
        areaServed: 'Worldwide',
        founder: { '@id': `${baseUrl}/#person` },
        employee: { '@id': `${baseUrl}/#person` },
      },
    ],
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
      >
        <JsonLd data={structuredData(siteUrl)} />
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
