"use client";
import Link from "next/link";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FEATURED_SERVICES } from "@/constants/services";

interface CarouselProps {
  lang: string;
}

export default function GlobalServiceCarousel({ lang }: CarouselProps) {
  const l = (["en", "es", "zh"].includes(lang) ? lang : "en") as "en" | "es" | "zh";
  const carouselRef = useRef<HTMLDivElement>(null);

  const getRoutePath = (slug: string) => {
    if (slug.startsWith("http")) return slug;
    const cleanSlug = slug.startsWith("services/") ? slug : `services/${slug}`;
    return l === "en" ? `/${cleanSlug}` : `/${l}/${cleanSlug}`;
  };

  return (
    <section className="bg-[#1A1A1A] py-24 border-t border-white/[0.05] overflow-hidden">
      {/* Header text container */}
      <div className="px-6 md:px-12 lg:px-24 mb-16">
        <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight text-white">
          {l === "zh" ? "诊疗范畴" : l === "es" ? "Áreas de Especialidad" : "Our Disciplines"}
        </h2>
      </div>

      {/* Corrected Carousel Container */}
      <div 
        ref={carouselRef}
        className="flex overflow-x-auto snap-x snap-mandatory px-6 md:px-12 lg:px-24 pb-12 space-x-6 cursor-grab 
                   [-ms-overflow-style:none] 
                   [scrollbar-width:none] 
                   [&::-webkit-scrollbar]:hidden"
      >
        {FEATURED_SERVICES.map((service) => (
          <Link
            key={service.slug}
            href={getRoutePath(service.slug)}
            className="snap-start shrink-0 w-[280px] md:w-[320px] h-[400px] group relative overflow-hidden rounded-sm border border-white/[0.05]"
          >
            {/* FULL CARD IMAGE */}
            <Image
              src={service.image}
              alt={l === "es" ? service.titleEs : service.titleEn}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[50%] group-hover:grayscale-0"
              sizes="(max-width: 768px) 280px, 320px"
            />

            {/* DARK GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-80" />

            {/* CONTENT AREA */}
            <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end">
              <span className="text-[10px] font-mono text-[#C5A059] mb-2 block uppercase tracking-[0.2em]">
                {service.num}
              </span>
              <h3 className="font-serif text-[22px] font-normal leading-tight text-white transition-colors duration-500">
                {l === "es" ? service.titleEs : service.titleEn}
              </h3>
              
              {/* ARROW INDICATOR */}
              <span className="mt-4 text-[#C5A059] opacity-0 -translate-x-2 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 font-serif italic text-lg">
                →
              </span>
            </div>
          </Link>
        ))}
        
        {/* VIEW ALL CARD */}
        <Link
          href={l === "en" ? "/services" : `/${l}/services`}
          className="snap-start shrink-0 w-[280px] md:w-[320px] h-[400px] flex flex-col items-center justify-center border border-white/[0.1] bg-[#1A1A1A] p-10 transition-colors duration-500 hover:bg-[#C5A059] text-center"
        >
          <span className="font-serif text-xl text-white group-hover:text-black transition-colors">
            {l === "zh" ? "查看全部" : l === "es" ? "Ver Todo" : "View All"}
          </span>
        </Link>
      </div>
    </section>
  );
}