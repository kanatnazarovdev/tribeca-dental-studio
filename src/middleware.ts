import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const SUPPORTED_LOCALES = ['en', 'es', 'zh'];
const DEFAULT_LOCALE = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Skip assets, static files, next system files, and api requests
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // 2. Detect if the browser path already starts with a locale prefix
  const hasLocale = SUPPORTED_LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!hasLocale) {
    // 3. Keep the browser URL clean (no /en/) by executing an invisible REWRITE
    // Serving files from /en/[path] under the hood, but the browser stays at /[path]
    return NextResponse.rewrite(new URL(`/${DEFAULT_LOCALE}${pathname}`, request.url));
  }

  // 4. If a user explicitly navigates to /en/[path], permanently redirect (301) 
  // them back to /[path] to prevent duplicate URL issues in Google
  if (pathname.startsWith(`/${DEFAULT_LOCALE}/`) || pathname === `/${DEFAULT_LOCALE}`) {
    const cleanPath = pathname.replace(`/${DEFAULT_LOCALE}`, '') || '/';
    return NextResponse.redirect(new URL(cleanPath, request.url), 301);
  }

  return NextResponse.next();
}