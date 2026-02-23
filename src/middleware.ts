import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Redirect URLs with double (or more) slashes to the canonical single-slash path.
 * Google was discovering jaumeivars.com//about etc., which were not being indexed.
 */
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (pathname.includes('//')) {
    const canonicalPath = pathname.replace(/\/+/g, '/');
    const url = request.nextUrl.clone();
    url.pathname = canonicalPath;
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next();
}
