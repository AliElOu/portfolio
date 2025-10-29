import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n/request';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: 'en',
  
  // Always show locale in URL for clarity
  localePrefix: 'always',
  
  // Detect locale from path
  localeDetection: true
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fr|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};
