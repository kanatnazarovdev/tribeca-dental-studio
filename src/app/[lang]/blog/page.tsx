/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { getAlternates } from "@/hooks/helper";
import { groq } from "next-sanity";
import InfiniteBlogGrid from "../../../components/blog/InfiniteBlogGrid";
import BlogSearchInput from "@/components/blog/BlogSearchInput"; 
import { Sparkles, BookOpen, X } from "lucide-react";

const POSTS_PER_PAGE = 9;

export async function generateMetadata({ params, searchParams }: any) {
  const { lang: rawLang } = await params;
  const resolvedSearchParams = await searchParams;
  const q = resolvedSearchParams?.q?.trim() || "";

  const lang = rawLang === "es" ? "es" : rawLang === "zh" ? "zh" : "en";
  const isEs = lang === "es";
  const isZh = lang === "zh";

  const alternatesConfig = getAlternates(lang, "blog");

  let title = isZh
    ? "纽约牙科与美学博客 | Tribeca Dental Studio"
    : isEs
    ? "Blog de Odontología y Estética Dental en Tribeca, NYC | Tribeca Dental Studio"
    : "Dental & Cosmetic Aesthetics Blog Tribeca, NYC | Tribeca Dental Studio";

  if (q) {
    title = `${q} - ${isZh ? "搜索结果" : isEs ? "Resultados de Búsqueda" : "Search Results"} | Tribeca Dental Studio`;
  }

  const description = isZh
    ? "探索关于瓷贴面、气道正畸、睡眠呼吸暂停、无痛拔牙与儿童齿科的专业医疗指南与美学资讯。"
    : isEs
    ? "Explore guías clínicas sobre carillas de porcelana, ortodoncia de vías respiratorias, apnea del sueño, cirugía oral e higiene bucal en Lower Manhattan."
    : "Explore clinical guides on porcelain veneers, airway orthodontics, sleep apnea devices, oral surgery, and pediatric dental care from our NYC specialists.";

  return {
    alternates: {
      canonical: `${alternatesConfig.canonical.replace(/\/$/, "")}`,
      languages: {
        en: `${alternatesConfig.languages.en.replace(/\/$/, "")}`,
        es: `${alternatesConfig.languages.es.replace(/\/$/, "")}`,
        zh: `${alternatesConfig.languages.zh.replace(/\/$/, "")}`,
        "x-default": `${alternatesConfig.languages["x-default"].replace(/\/$/, "")}`,
      },
    },
    title,
    description,
  };
}

export default async function BlogPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ page?: string; q?: string }>;
}) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const lang = resolvedParams.lang;
  const isEs = lang === "es";
  const isZh = lang === "zh";

  const searchQuery = resolvedSearchParams.q?.trim() || "";
  const currentPage = 1;
  const startIdx = (currentPage - 1) * POSTS_PER_PAGE;
  const endIdx = startIdx + POSTS_PER_PAGE;

  // GROQ filter for matching search queries across title, excerpt, and htmlBody
  const searchFilter = searchQuery
    ? `&& (title match $searchPattern || excerpt match $searchPattern || htmlBody match $searchPattern)`
    : "";

  const paginatedPostsQuery = groq`
    {
      "posts": *[_type == "post" && language == $lang ${searchFilter}] | order(publishedAt desc) [$start...$end]{
        title,
        slug,
        mainImage,
        excerpt,
        publishedAt,
        "authorName": author->name
      },
      "total": count(*[_type == "post" && language == $lang ${searchFilter}])
    }
  `;

  // FIXED GROQ MATCH PATTERN: Use '${searchQuery}*' instead of '*${searchQuery}*'
  const { posts, total } = await client.fetch(paginatedPostsQuery, {
    lang,
    searchPattern: searchQuery ? `${searchQuery}*` : "*",
    start: startIdx,
    end: endIdx,
  });

  const categories = [
    { title: isZh ? "美学瓷贴面" : isEs ? "Carillas" : "Veneers", query: "veneer" },
    { title: isZh ? "拔牙与干槽" : isEs ? "Extracciones" : "Extractions", query: "extraction" },
    { title: isZh ? "牙冠敏感" : isEs ? "Coronas" : "Crowns", query: "crown" },
    { title: isZh ? "隐适美" : isEs ? "Invisalign" : "Invisalign", query: "invisalign" },
  ];

  return (
    <main className="bg-[#FCFCFC] text-black min-h-screen pt-32 pb-24 font-ddin">
      {/* HERO SECTION */}
      <section className="bg-neutral-900 text-white pt-20 pb-16 px-6 md:px-12 lg:px-20 mb-12 border-b border-neutral-800">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-[#C5A059] mb-4">
            <Sparkles size={18} />
            <span className="text-xs uppercase tracking-[0.3em] font-bold block">
              {isZh ? "工作室日志与学术前沿" : isEs ? "Notas desde el Estudio" : "Notes From The Studio"}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-light uppercase tracking-tight text-white mb-6">
            {isZh ? "Tribeca 牙科与美学资讯中心" : isEs ? "El Blog de Tribeca Dental Studio" : "The Tribeca Dental Studio Journal"}
          </h1>

          {/* CLIENT-SIDE SEARCH FORM */}
          <BlogSearchInput lang={lang} initialQuery={searchQuery} />
        </div>
      </section>

      {/* TOPIC TAGS & RESULTS BANNER */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-8">
        {searchQuery ? (
          <div className="bg-neutral-100 border border-neutral-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-500 font-bold mb-1">
                {isZh ? "搜索结果" : isEs ? "Resultados de búsqueda" : "Search Results"}
              </p>
              <h3 className="text-xl font-light uppercase tracking-tight text-black">
                Showing results for: <span className="text-[#C5A059] font-bold">&ldquo;{searchQuery}&ldquo;</span> ({total} {total === 1 ? 'article' : 'articles'})
              </h3>
            </div>
            <Link
              href={`/${lang}/blog`}
              className="inline-flex items-center gap-2 border border-black/20 hover:border-black text-xs uppercase tracking-widest font-bold px-4 py-2 transition-colors"
            >
              <span>{isZh ? "清除搜索" : isEs ? "Ver Todos" : "Clear Filter"}</span>
              <X size={14} />
            </Link>
          </div>
        ) : (
          <div className="flex flex-wrap items-center justify-center gap-3 pb-6 border-b border-neutral-200">
            {/* <span className="text-xs uppercase tracking-widest font-bold text-neutral-400 mr-2">
              Popular Topics:
            </span>
            {categories.map((cat, idx) => (
              <Link
                key={idx}
                href={`/${lang}/blog?q=${cat.query}`}
                className="text-xs font-bold uppercase tracking-wider bg-white border border-neutral-200 hover:border-[#C5A059] hover:text-[#C5A059] text-neutral-700 px-4 py-2 transition-colors"
              >
                {cat.title}
              </Link>
            ))} */}
          </div>
        )}
      </section>

      {/* INFINITE BLOG GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {posts.length > 0 ? (
          <InfiniteBlogGrid
            key={searchQuery} // Key ensures component resets cleanly when search query changes
            initialPosts={posts}
            totalPosts={total}
            postsPerPage={POSTS_PER_PAGE}
            lang={lang}
            currentPage={currentPage}
            searchQuery={searchQuery}
          />
        ) : (
          <div className="text-center py-20 bg-neutral-50 border border-neutral-200 p-8">
            <BookOpen size={40} className="mx-auto text-neutral-400 mb-4" />
            <h3 className="text-2xl font-light uppercase tracking-tight text-black mb-2">
              No Articles Found
            </h3>
            <p className="font-brandon text-s text-neutral-600 mb-6 max-w-md mx-auto">
              We couldn't find any articles matching &ldquo;{searchQuery}&ldquo;. Try searching for terms like "teeth whitening", "extractions", or "veneers".
            </p>
            <Link
              href={`/${lang}/blog`}
              className="inline-block bg-black text-white hover:bg-[#C5A059] text-xs font-bold uppercase tracking-widest px-8 py-3 transition-colors"
            >
              View All Articles
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}