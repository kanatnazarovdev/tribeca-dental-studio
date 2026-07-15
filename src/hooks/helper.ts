// src/hooks/helper.ts
export const baseUrl = "https://tribecadentalstudio.com";

export function getAlternates(lang: string, slug: string) {
  const formattedSlug = slug.startsWith("/") ? slug : `/${slug}`;

  const canonicalPath =
    lang === "en" ? formattedSlug : `/${lang}${formattedSlug}`;

  return {
    canonical: `${baseUrl}${canonicalPath}`,

    languages: {
      en: `${baseUrl}${formattedSlug}`,
      es: `${baseUrl}/es${formattedSlug}`,
      zh: `${baseUrl}/zh${formattedSlug}`,
      "x-default": `${baseUrl}${formattedSlug}`,
    },
  };
}
