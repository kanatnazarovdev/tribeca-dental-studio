import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const SUPPORTED_LOCALES = ['en', 'es', 'zh'];
const DEFAULT_LOCALE = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. COMPLETELY BYPASS STUDIO AND STATIC FILES (handles /studio and /en/studio)
  if (
    pathname.startsWith('/studio') ||
    pathname.includes('/studio') || // Handles /en/studio or /es/studio
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // 2. Check if the URL has a supported locale prefix
  const hasLocale = SUPPORTED_LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // 3. Rewrite missing locale to default locale (/en)
  if (!hasLocale) {
    return NextResponse.rewrite(new URL(`/${DEFAULT_LOCALE}${pathname}`, request.url));
  }

  // 4. Strip /en for regular site pages (e.g. /en/about -> /about), but studio was bypassed above!
  if (pathname.startsWith(`/${DEFAULT_LOCALE}/`) || pathname === `/${DEFAULT_LOCALE}`) {
    const cleanPath = pathname.replace(`/${DEFAULT_LOCALE}`, '') || '/';
    return NextResponse.redirect(new URL(cleanPath, request.url), 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};