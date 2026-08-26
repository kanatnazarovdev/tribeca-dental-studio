"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import Link from "next/link";
import { bookingUrl } from "@/hooks/helper";

const COPY = {
  en: {
    badge: "Tribeca • New York",
    title: "The Standard of Dental Architecture",
    tagline:
      "Uniting advanced multi-specialty care with bespoke aesthetics in the heart of Lower Manhattan.",
    cta: "Book Consultation",
    scroll: "Explore Experience",
  },
  es: {
    badge: "Tribeca • Nueva York",
    title: "El Estándar de la Arquitectura Dental",
    tagline:
      "Uniendo atención multiespecialidad avanzada con estética personalizada en el corazón de Manhattan.",
    cta: "Reservar Consulta",
    scroll: "Explorar Experiencia",
  },
  zh: {
    badge: "纽约 • 翠贝卡",
    title: "重塑齿科美学架构标准",
    tagline:
      "在曼哈顿核心街区，将尖端多专科诊疗与高定私人美学完美融合。",
    cta: "预约私人咨询",
    scroll: "探索品牌体验",
  },
} as const;

const USE_VIDEO = true;
const VIDEO_MP4 = "/banner.mp4";
const VIDEO_WEBM = "/banner.webm";
const POSTER = "/banner.webp";

interface HeroProps {
  lang: string;
}

export default function Hero({ lang }: HeroProps) {
  const scrollToId = useSmoothScroll();
  const videoRef = useRef<HTMLVideoElement>(null);
  const t =
    COPY[(lang as keyof typeof COPY) in COPY ? (lang as keyof typeof COPY) : "en"];

  useEffect(() => {
    if (USE_VIDEO && videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.warn("Autoplay was prevented on mobile device:", err);
      });
    }
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-[#0B0B0B]">
      {/* Background media */}
      {USE_VIDEO ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={POSTER}
          className="absolute inset-0 z-0 h-full w-full object-cover opacity-70"
        >
          <source src={VIDEO_MP4} type="video/mp4" />
          <source src={VIDEO_WEBM} type="video/webm" />
        </video>
      ) : (
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url('${POSTER}')` }}
        />
      )}

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 z-10 bg-black/30" />

      <div className="relative z-20 flex h-full flex-col items-start justify-end px-6 pb-28 text-left text-white md:px-16 md:pb-32 lg:px-24">
        {/* Badge */}
        <div className="mb-8 flex items-center gap-3">
          <span className="h-px w-8 bg-[#C5A059]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.5em] text-[#C5A059]">
            {t.badge}
          </span>
          <span className="h-px w-8 bg-[#C5A059]" />
        </div>

        {/* LCP Target (h1): Rendered immediately without opacity: 0 */}
        <h1 className="mb-8 max-w-5xl font-ddin text-4xl font-bold uppercase leading-[1.05] tracking-tight drop-shadow-md md:text-5xl lg:text-[4.5rem]">
          {t.title}
        </h1>

        {/* Tagline */}
        <p className="mb-14 max-w-xl font-serif text-xl font-light italic leading-relaxed text-white/85 md:text-2xl">
          {t.tagline}
        </p>
        <Link
          href={bookingUrl}
          target="_blank"
          
        >
          <button
            onClick={() => scrollToId("leadForm")}
            className="group relative overflow-hidden border border-white/40 px-12 py-4 transition-colors duration-700 hover:border-[#C5A059]"
          >
            <span className="relative z-10 text-[11px] font-medium uppercase tracking-[0.5em] transition-colors duration-700 group-hover:text-black">
              {t.cta}
            </span>
            <span className="absolute inset-0 translate-y-full bg-[#C5A059] transition-transform duration-700 ease-out group-hover:translate-y-0" />
          </button>
        </Link>

      </div>

      {/* Scroll cue */}
      <button
        onClick={() => scrollToId("services")}
        className="group absolute bottom-10 right-6 z-30 hidden flex-col items-center md:right-16 md:flex lg:right-24"
        aria-label={t.scroll}
      >
        <span className="mb-4 text-[8px] uppercase tracking-[0.6em] text-[#C5A059] opacity-70 transition-opacity duration-500 group-hover:opacity-100">
          {t.scroll}
        </span>
        <span className="flex h-9.5 w-5.5 justify-center rounded-full border border-[#C5A059]/40 p-1.5">
          <motion.span
            animate={{ y: [0, 16, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-1 w-1 rounded-full bg-[#C5A059]"
          />
        </span>
      </button>
    </section>
  );
}