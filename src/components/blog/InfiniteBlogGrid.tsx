/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

interface InfiniteBlogGridProps {
  initialPosts: any[];
  totalPosts: number;
  postsPerPage: number;
  lang: string;
  currentPage: number;
  searchQuery?: string; // ADDED: Receives active search query
}

export default function InfiniteBlogGrid({
  initialPosts,
  totalPosts,
  postsPerPage,
  lang,
  currentPage,
  searchQuery = "",
}: InfiniteBlogGridProps) {
  const [posts, setPosts] = useState(initialPosts);
  const [page, setPage] = useState(currentPage);
  const [loading, setLoading] = useState(false);
  
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const [hasMore, setHasMore] = useState(page < totalPages);
  
  const observerRef = useRef<HTMLDivElement | null>(null);
  const isZh = lang === "zh";
  const isEs = lang === "es";

  // Reset state whenever initialPosts or searchQuery changes
  useEffect(() => {
    setPosts(initialPosts);
    setPage(currentPage);
    setHasMore(currentPage < totalPages);
  }, [initialPosts, currentPage, totalPages, searchQuery]);

  useEffect(() => {
    if (!hasMore) return;

    const observer = new IntersectionObserver(
      async (entries) => {
        const target = entries[0];
        if (target.isIntersecting && !loading && hasMore) {
          setLoading(true);
          const nextPage = page + 1;

          try {
            // Forward search query parameter to API route
            const qParam = searchQuery ? `&q=${encodeURIComponent(searchQuery)}` : "";
            const response = await fetch(`/api/blog-posts?lang=${lang}&page=${nextPage}${qParam}`);
            const data = await response.json();

            if (data.posts && data.posts.length > 0) {
              setPosts((prev) => [...prev, ...data.posts]);
              setPage(nextPage);
              setHasMore(nextPage < totalPages);
            } else {
              setHasMore(false);
            }
          } catch (error) {
            console.error("Failed to load more posts:", error);
          } finally {
            setLoading(false);
          }
        }
      },
      { threshold: 0.1, rootMargin: "200px" }
    );

    const currentRef = observerRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [page, hasMore, loading, lang, totalPages, searchQuery]);

  return (
    <div className="max-w-7xl w-full mt-10 lg:mt-15 mb-10 lg:mb-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {posts.map((post: any, idx: number) => {
          const slugString = post.slug?.current || post.slug || "";
          const postHref = `/${lang}/blog/${slugString}`;

          return (
            <Link key={slugString || idx} href={postHref} className="group">
              <div className="relative aspect-[16/10] overflow-hidden mb-6 bg-zinc-900 shadow-sm">
                {post.mainImage ? (
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.title || "Blog Post"}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  /* Fallback placeholder background if post has no main image */
                  <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center p-6 text-center">
                    <span className="text-neutral-500 text-xs font-bold uppercase tracking-widest">
                      Tribeca Dental Journal
                    </span>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <h2
                  className="text-xl font-medium text-black leading-tight group-hover:text-[#C5A059] transition-colors uppercase"
                  style={{ fontFamily: "var(--font-D-DIN)" }}
                >
                  {post.title}
                </h2>
                
                {post.excerpt && (
                  <p className="text-zinc-500 text-[14px] line-clamp-2 font-light leading-relaxed tracking-wider">
                    {post.excerpt}
                  </p>
                )}

                <div className="pt-2 text-[10px] uppercase tracking-widest text-zinc-600">
                  {post.publishedAt
                    ? new Date(post.publishedAt).toLocaleDateString(lang === "zh" ? "zh-CN" : lang)
                    : ""}{" "}
                  {post.authorName ? `— ${post.authorName}` : ""}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {hasMore && (
        <div ref={observerRef} className="w-full flex justify-center py-10 text-zinc-400 font-light text-sm uppercase tracking-widest">
          {loading ? (
            <span>{isZh ? "正在加载文章..." : isEs ? "Cargando artículos..." : "Loading more notes..."}</span>
          ) : (
            <span className="opacity-0">Trigger</span>
          )}
        </div>
      )}
    </div>
  );
}