"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { bookingUrl } from "@/hooks/helper";

interface SmileCTAProps {
  lang: string;
}

const COPY = {
  en: {
    eyebrow: "Cosmetic Dentistry",
    title: "Don't wait for the smile you dream about.",
    body: "From subtle refinements to complete smile makeovers, our team designs every detail around your face, your goals, and the way you want to feel.",
    cta: "Book a Consultation",
  },
  es: {
    eyebrow: "Odontología Estética",
    title: "No espere más por la sonrisa que sueña.",
    body: "Desde retoques sutiles hasta transformaciones completas, diseñamos cada detalle en torno a su rostro, sus metas y cómo quiere sentirse.",
    cta: "Reservar una Consulta",
  },
  zh: {
    eyebrow: "美容牙科",
    title: "别再等待您梦想中的笑容。",
    body: "从细微的调整到完整的微笑改造，我们围绕您的脸型、目标与感受，精心设计每一个细节。",
    cta: "预约咨询",
  },
} as const;

// 1. Array of your 3 background images
const BACKGROUND_IMAGES = [
  "/tribeca.PNG",
  "/tribeca2.PNG",
  "/tribeca3.PNG",
];

export default function SmileCTA({ lang }: SmileCTAProps) {
  const l = (["en", "es", "zh"].includes(lang) ? lang : "en") as "en" | "es" | "zh";
  const t = COPY[l];

  // 2. State for active background image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 3. Timer to cycle images every 5 seconds (5000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % BACKGROUND_IMAGES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-[100vh] w-full items-center justify-start overflow-hidden bg-[#0B0B0B] px-6 md:px-12 lg:px-24">
      
      {/* 4. ANIMATED BACKGROUND SLIDESHOW WITH CROSS-FADE */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={BACKGROUND_IMAGES[currentImageIndex]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${BACKGROUND_IMAGES[currentImageIndex]}')` }}
        />
      </AnimatePresence>

      {/* GRADIENT OVERLAYS FOR READABILITY */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

      {/* LEFT-ALIGNED CONTENT CONTAINER */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-20 max-w-2xl text-left text-white"
      >
        {/* EYEBROW WITH GOLD BORDER ACCENT */}
        <span className="mb-6 block border-l-2 border-[#C5A059] pl-3 font-mono text-[10px] font-bold uppercase tracking-[0.6em] text-[#C5A059]">
          {t.eyebrow}
        </span>

        {/* MAIN HEADLINE */}
        <h2 className="font-ddin font-bold text-4xl leading-[1.1] tracking-tight uppercase text-white sm:text-5xl md:text-6xl">
          {t.title}
        </h2>

        {/* BODY TEXT WITH ITALIC SERIF BORDER */}
        <p className="mt-6 border-l border-white/20 pl-4 font-serif text-base font-light italic leading-relaxed text-neutral-300 md:text-lg">
          {t.body}
        </p>

        {/* LUXURY CTA BUTTON */}
        <div className="mt-10">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-6 overflow-hidden border border-white/30 bg-black/40 px-10 py-4 transition-all duration-500 hover:border-[#C5A059]"
          >
            <span className="relative z-10 font-mono text-[11px] font-bold uppercase tracking-[0.4em] text-white transition-colors duration-500 group-hover:text-black">
              {t.cta}
            </span>
            <span className="relative z-10 font-serif italic text-xs text-[#C5A059] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black">
              →
            </span>
            <span className="absolute inset-0 translate-y-full bg-[#C5A059] transition-transform duration-500 ease-out group-hover:translate-y-0" />
          </a>
        </div>

        {/* SLIDE INDICATOR DOTS */}
        <div className="mt-12 flex items-center gap-3">
          {BACKGROUND_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-1 transition-all duration-500 ${
                index === currentImageIndex
                  ? "w-8 bg-[#C5A059]"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}