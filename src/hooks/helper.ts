// src/hooks/helper.ts
export const baseUrl = "https://tribecadentalstudio.com";

/**
 * Builds 1:1 self-referencing canonical + hreflang alternates.
 *
 * MANDATE: every URL MUST end in a trailing slash to match `trailingSlash: true`
 * in next.config.ts and the legacy WordPress index. A canonical that points at
 * the pre-redirect (slash-less) URL splits authority — so we always append "/".
 */
export function getAlternates(lang: string, path: string = "", page?: string) {
  const cleanPath = path.replace(/^\/+|\/+$/g, "");
  const segment = cleanPath ? `/${cleanPath}` : "";

  // Trailing slash is enforced on every emitted URL.
  const withSlash = (locale: string) => `${baseUrl}/${locale}${segment}/`;

  const pageQuery = page && parseInt(page, 10) > 1 ? { page } : undefined;

  return {
    canonical: withSlash(lang),
    languages: {
      en: withSlash("en"),
      es: withSlash("es"),
      zh: withSlash("zh"),
      "x-default": withSlash("en"),
    },
    types: pageQuery ? pageQuery : undefined,
  };
}