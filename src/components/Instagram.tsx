"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "./Container";
import { Instagram as InstagramIcon, ArrowUpRight } from "lucide-react";

interface InstagramProps {
  lang: string;
}

interface IGPost {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
}

const HANDLE = "tribeca_dental_studio";
const PROFILE = `https://www.instagram.com/${HANDLE}`;

const COPY = {
  en: {
    eyebrow: `@${HANDLE}`,
    title: "We're here to help you get the perfect smile",
    cta: "Follow on Instagram",
  },
  es: {
    eyebrow: `@${HANDLE}`,
    title: "Estamos aquí para ayudarle a lograr la sonrisa perfecta",
    cta: "Síganos en Instagram",
  },
  zh: {
    eyebrow: `@${HANDLE}`,
    title: "我们助您拥有完美笑容",
    cta: "在 Instagram 关注我们",
  },
} as const;

const FALLBACK_TILES: IGPost[] = [
  { id: "1", media_url: "/tribeca.PNG", permalink: PROFILE },
  { id: "2", media_url: "/aboutPage.png", permalink: PROFILE },
  { id: "3", media_url: "/allon4.jpg", permalink: PROFILE },
  { id: "4", media_url: "/tribeca.PNG", permalink: PROFILE },
  { id: "5", media_url: "/aboutPage.png", permalink: PROFILE },
  { id: "6", media_url: "/allon4.jpg", permalink: PROFILE },
];

export default function Instagram({ lang }: InstagramProps) {
  const l = (["en", "es", "zh"].includes(lang) ? lang : "en") as "en" | "es" | "zh";
  const t = COPY[l];

  const [posts, setPosts] = useState<IGPost[]>(FALLBACK_TILES);

  useEffect(() => {
    async function fetchInstagramFeed() {
      try {
        const res = await fetch("/api/instagram");
        const data = await res.json();
        if (data.posts && data.posts.length > 0) {
          setPosts(data.posts);
        }
      } catch (e) {
        console.warn("Using fallback Instagram tiles:", e);
      }
    }
    fetchInstagramFeed();
  }, []);

  return (
    <section className="bg-[#FAF9F6] py-24 md:py-36 border-t border-black/5" id="instagram">
      <Container>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C5A059]/30 bg-[#C5A059]/5 px-4 py-1.5">
            <InstagramIcon size={12} className="text-[#C5A059]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#C5A059]">
              {t.eyebrow}
            </span>
          </div>

          <h2 className="mx-auto max-w-2xl font-serif text-3xl font-light leading-tight text-black md:text-5xl">
            {t.title}
          </h2>
        </motion.div>

        {/* 6-Column Grid with Portrait Ratios */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {posts.map((post, i) => (
            <motion.a
              key={post.id || i}
              href={post.permalink || PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative aspect-[3/4] w-full overflow-hidden bg-neutral-900 border border-black/5 shadow-xs"
            >
              <Image
                src={post.media_url}
                alt={post.caption || `${HANDLE} on Instagram`}
                fill
                unoptimized
                sizes="(max-width: 768px) 50vw, 16vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />

              {/* Luxury Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-500 group-hover:opacity-100 flex flex-col justify-between p-4 text-white">
                <div className="flex justify-end">
                  <span className="rounded-full bg-white/20 p-2 backdrop-blur-md">
                    <ArrowUpRight size={14} className="text-white" />
                  </span>
                </div>

                <div>
                  <p className="line-clamp-3 text-[11px] font-light leading-relaxed text-white/90">
                    {post.caption || `#${HANDLE}`}
                  </p>
                  <span className="mt-2 block text-[9px] uppercase tracking-widest text-[#C5A059] font-medium">
                    View Post →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Action CTA Button */}
        <div className="mt-16 text-center">
          <a
            href={PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border border-black/20 bg-white px-8 py-4 text-[11px] font-medium uppercase tracking-[0.3em] text-black transition-all duration-500 hover:border-[#C5A059] hover:bg-[#C5A059] hover:text-white"
          >
            {t.cta}
            <InstagramIcon size={14} className="transition-transform duration-500 group-hover:scale-110" />
          </a>
        </div>
      </Container>
    </section>
  );
}