/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface TribecaHeartProps {
  lang: string;
}

const CONTENT = {
  en: {
    eyebrow: "The Location",
    title: "In the Heart of Tribeca",
    description: "Our studio is built directly into the historic architectural fabric of Lower Manhattan. Surrounded by industrial-chic lofts and timeless cobblestone streets, Tribeca Dental Studio merges world-class clinical intelligence with the neighborhood's elite, creative energy.",
    cta: "Explore the studio"
  },
  es: {
    eyebrow: "La Ubicación",
    title: "En el Corazón de Tribeca",
    description: "Nuestro estudio está integrado directamente en el tejido arquitectónico histórico del bajo Manhattan.精确的临床智能与社区精英的创意能量交织在一起。",
    cta: "Explorar el estudio"
  },
  zh: {
    eyebrow: "地理位置",
    title: "坐落于翠贝卡核心地带",
    description: "我们的牙科中心完美融入下曼哈顿最具历史沉淀的建筑结构之中。翠贝卡牙科诊所将世界顶级的临床医疗技术与纽约最顶尖的创意艺术气息完美融合。",
    cta: "探秘我们牙科中心"
  }
} as const;

export default function TribecaHeart({ lang }: TribecaHeartProps) {
  const l = (["en", "es", "zh"].includes(lang) ? lang : "en") as "en" | "es" | "zh";
  const c = CONTENT[l];

  return (
    <section className="w-full min-h-[70vh] grid grid-cols-1 lg:grid-cols-2 bg-[#1A1A1A] text-white overflow-hidden relative">
      
      {/* LEFT PANEL: 50% FULL SCREEN EDITORIAL IMAGE CANVAS */}
      <div className="relative w-full h-[45vh] lg:h-auto min-h-[400px] overflow-hidden bg-neutral-900 order-1 lg:order-1">
        <Image
          src="/tribeca.webp" // Swap with your clean street asset or clinic shot
          alt="The architectural fabric of Tribeca, NYC"
          fill
          priority
          className="object-cover contrast-115"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        {/* Subtle premium gradient layer running edge-to-edge */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/40 via-transparent to-transparent lg:hidden" />
      </div>

      {/* RIGHT PANEL: 50% MINIMALIST PURE TEXT ARCHITECTURE */}
      <div className="w-full flex items-center justify-start p-8 md:p-16 lg:p-24 bg-[#1A1A1A] order-2 lg:order-2 z-10">
        <div className="max-w-xl text-left flex flex-col items-start">
          
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-bold uppercase tracking-[0.6em] text-[#C5A059] mb-6 font-mono"
          >
            {c.eyebrow} // 40.7148° N, 74.0091° W
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-light tracking-tight uppercase text-white leading-[1.1] mb-6"
          >
            {c.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base font-light leading-relaxed text-neutral-300 tracking-wide mb-10 font-serif italic"
          >
            {c.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href={lang === "en" ? "/about" : `/${lang}/about`}
              className="group flex items-center gap-6 text-[11px] uppercase tracking-[0.4em] font-bold text-white border-b border-white/20 pb-2 hover:border-[#C5A059] hover:text-[#C5A059] transition-all duration-300"
            >
              <span>{c.cta}</span>
              <span className="transform group-hover:translate-x-2 transition-transform duration-300 font-serif italic text-xs">
                →
              </span>
            </Link>
          </motion.div>

        </div>
      </div>

    </section>
  );
}