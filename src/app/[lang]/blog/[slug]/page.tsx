/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import { baseUrl } from "@/hooks/helper";
export const revalidate = 120

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; lang: string }>;
}): Promise<Metadata> {
  const { slug, lang } = await params;
  const post = await getPost(slug, lang);

  if (!post) return {};

  const languagesMap: Record<string, string> = {
    [lang]: `${baseUrl}/${lang}/blog/${slug}/`,
  };

  post.translations?.forEach((t: { language: string; slug: string }) => {
    if (t.language && t.slug) {
      languagesMap[t.language] = `${baseUrl}/${t.language}/blog/${t.slug}/`;
    }
  });

  const explicitEnglishSlug = post.translations?.find((t: any) => t.language === 'en')?.slug;
  
  if (explicitEnglishSlug) {
    languagesMap["x-default"] = `${baseUrl}/en/blog/${explicitEnglishSlug}/`;
  } else if (lang === 'en') {
    languagesMap["x-default"] = `${baseUrl}/en/blog/${slug}/`;
  } else {
    languagesMap["x-default"] = `${baseUrl}/${lang}/blog/${slug}/`;
  }

  return {
    title: `${post.title} | Tribeca Dental Studio`,
    description: post.excerpt || post.title,
    alternates: {
      canonical: `${baseUrl}/${lang}/blog/${slug}/`,
      languages: languagesMap, 
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.mainImage ? [{ url: urlFor(post.mainImage).url() }] : [],
    },
  };
}

export const portableTextComponents: any = {
  block: {
    h2: ({ children }: any) => (
      <h2
        className="text-3xl font-light uppercase tracking-tight text-black mt-16 mb-6"
        style={{ fontFamily: "var(--font-d-din)" }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-medium uppercase tracking-widest text-zinc-800 mt-10 mb-4">
        {children}
      </h3>
    ),
    normal: ({ children }: any) => (
      <p className="mb-8 leading-relaxed text-zinc-800 font-light text-lg">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-2 border-[#C5A059] pl-6 my-10 italic text-zinc-600">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const isExternal = !value.href.startsWith("/");
      return (
        <Link
          href={value.href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-[#C5A059] underline decoration-zinc-300 underline-offset-4 hover:text-black transition-all duration-300 font-medium"
        >
          {children}
        </Link>
      );
    },
    strong: ({ children }: any) => (
      <strong className="font-bold text-black">{children}</strong>
    ),
  },
};

async function getPost(slug: string, lang: string) {
  return client.fetch(
    groq`*[_type == "post" && !(_id in path("drafts.**")) && slug.current == $slug && language == $lang][0]{
      title,
      mainImage,
      body,
      htmlBody, // Added htmlBody to fetch imported WordPress HTML!
      publishedAt,
      "excerpt": coalesce(
        excerpt,
        array::join(string::split((pt::text(body)), "")[0..160], "")
      ),
      
      "translations": coalesce(
        *[_type == "post" && !(_id in path("drafts.**")) && (translationOf._ref == ^._id || _id == ^.translationOf._ref || (translationOf._ref == ^.translationOf._ref && defined(translationOf._ref)))],
        *[_type == "post" && !(_id in path("drafts.**")) && _id == ^._id]
      ){
        language,
        "slug": slug.current
      },
      
      "next": *[_type == "post" && !(_id in path("drafts.**")) && language == $lang && publishedAt > ^.publishedAt] | order(publishedAt asc)[0]{ 
        "slug": slug.current, 
        title 
      },
      "previous": *[_type == "post" && !(_id in path("drafts.**")) && language == $lang && publishedAt < ^.publishedAt] | order(publishedAt desc)[0]{ 
        "slug": slug.current, 
        title 
      }
    }`,
    { slug, lang }, 
    {
      next: {
        tags: [`post:${slug}`, "posts-list"], // Tagged for instant purge!
      },
    }
  );
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string; lang: string }>;
}) {
  const { slug, lang } = await params;
  const post = await getPost(slug, lang);

  if (!post) return <div className="py-24 text-center">Post not found</div>;

  return (
    <article className="bg-[#fafaf4] text-zinc-900 min-h-screen pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-6 text-center mb-5 mt-10 lg:mt-20">
        <h1
          className="text-4xl md:text-5xl font-light tracking-tight uppercase mb-4 text-black"
          style={{ fontFamily: "var(--font-d-din)" }}
        >
          {post.title}
        </h1>
        <p className="text-zinc-500 text-sm uppercase tracking-widest">
          {new Date(post.publishedAt).toLocaleDateString(
            lang === "zh" ? "zh-CN" : lang,
            {
              month: "long",
              day: "numeric",
              year: "numeric",
            },
          )}
        </p>
      </div>

      {post.mainImage && (
        <div className="max-w-5xl mx-auto px-6 mb-10 lg:mb-10">
          <div className="relative aspect-[16/11] w-full overflow-hidden shadow-sm">
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* DYNAMIC BODY RENDERER (Supports PortableText OR Imported WordPress HTML) */}
      <div className="max-w-4xl mx-auto px-6 font-light leading-relaxed text-zinc-800">
        <div className="prose prose-zinc lg:prose-xl max-w-none mb-20 prose-headings:font-light prose-headings:uppercase prose-[#C5A059]">
        {post.body ? (
      <PortableText value={post.body} components={portableTextComponents} />
    ) : post.htmlBody ? (
      <div
        className="legacy-wp-content 
          /* HEADINGS */
          [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-light [&>h2]:uppercase [&>h2]:tracking-tight [&>h2]:text-black [&>h2]:mt-12 [&>h2]:mb-6
          [&>h3]:text-xl [&>h3]:font-medium [&>h3]:uppercase [&>h3]:tracking-widest [&>h3]:text-zinc-900 [&>h3]:mt-8 [&>h3]:mb-4
          [&>h4]:text-lg [&>h4]:font-semibold [&>h4]:text-black [&>h4]:mt-6 [&>h4]:mb-3
          
          /* PARAGRAPHS & LINKS */
          [&>p]:text-lg [&>p]:leading-relaxed [&>p]:text-zinc-800 [&>p]:font-light [&>p]:mb-6
          [&_a]:text-[#C5A059] [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-black [&_a]:transition-colors
          
          /* LISTS */
          [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:space-y-2
          [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol]:space-y-2
          [&_li]:text-lg [&_li]:text-zinc-800
          
          /* TABLES (FULL RESPONSIVE LUXURY STYLING) */
          [&_table]:w-full [&_table]:my-8 [&_table]:border-collapse [&_table]:border [&_table]:border-zinc-200 [&_table]:text-left [&_table]:text-sm
          [&_thead]:bg-zinc-100 [&_thead]:border-b [&_thead]:border-zinc-300
          [&_th]:p-4 [&_th]:font-bold [&_th]:uppercase [&_th]:tracking-wider [&_th]:text-black [&_th]:border-r [&_th]:border-zinc-200
          [&_td]:p-4 [&_td]:border-b [&_td]:border-r [&_td]:border-zinc-200 [&_td]:text-zinc-700
          [&_tr:nth-child(even)]:bg-zinc-50/50
          [&_tr:hover]:bg-zinc-100/50 [&_tr]:transition-colors
          
          /* BLOCKQUOTES & MEDIA */
          [&_blockquote]:border-l-2 [&_blockquote]:border-[#C5A059] [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:my-8 [&_blockquote]:text-zinc-600
          [&_img]:rounded-md [&_img]:my-8 [&_img]:w-full [&_img]:h-auto"
        dangerouslySetInnerHTML={{ __html: post.htmlBody }}
      />
    ) : null}
        </div>

        {/* Navigation Footer */}
        <div className="pt-12 mt-20 border-t border-zinc-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            {/* Previous Post */}
            <div className="text-left">
              {post.previous ? (
                <Link
                  href={`/${lang}/blog/${post.previous.slug}`}
                  className="group block"
                >
                  <span className="text-zinc-400 text-[10px] uppercase tracking-[0.3em] block mb-2">
                    {lang === "zh"
                      ? "上一篇"
                      : lang === "es"
                        ? "Anterior"
                        : "Previous"}
                  </span>
                  <span className="text-black text-sm font-medium group-hover:text-[#C5A059] transition-colors line-clamp-1">
                    {post.previous.title}
                  </span>
                  <span> ←</span>
                </Link>
              ) : (
                <div />
              )}
            </div>

            {/* Center: Back to Blog */}
            <div className="flex justify-center order-first md:order-none">
              <Link
                href={`/${lang}/blog`}
                className="group flex flex-col items-center gap-2"
              >
                <div className="w-10 h-10 border border-zinc-200 rounded-full flex items-center justify-center group-hover:border-[#C5A059] transition-colors">
                  <span className="text-zinc-400 group-hover:text-[#C5A059]">
                    ▦
                  </span>
                </div>
                <span className="text-zinc-400 text-[10px] uppercase tracking-[0.4em]">
                  {lang === "zh"
                    ? "博客首页"
                    : lang === "es"
                      ? "Blog"
                      : "Blog Page"}
                </span>
              </Link>
            </div>

            {/* Next Post */}
            <div className="text-right">
              {post.next ? (
                <Link
                  href={`/${lang}/blog/${post.next.slug}`}
                  className="group block"
                >
                  <span className="text-zinc-400 text-[10px] uppercase tracking-[0.3em] block mb-2">
                    {lang === "zh"
                      ? "下一篇"
                      : lang === "es"
                        ? "Siguiente"
                        : "Next"}
                  </span>
                  <span className="text-black text-sm font-medium group-hover:text-[#C5A059] transition-colors line-clamp-1">
                    {post.next.title}
                  </span>
                  <span>→</span>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}