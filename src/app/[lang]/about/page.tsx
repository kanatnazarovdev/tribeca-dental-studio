/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { motion } from "framer-motion";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import Image from "next/image";

export default function TribecaDentalStudioPage({
  lang = "en",
}: {
  lang?: string;
}) {
  const scrollToId = useSmoothScroll();

  const features = [
    {
      title: "Multitude of Options",
      text: "We bring the specialists to you. From periodontics to prosthodontics, enjoy world-class care without referrals.",
    },
    {
      title: "Kids Welcome",
      text: "Tribeca Dental Studio 4 Kids features a full-floor specialty office with board-certified pediatric experts and age-appropriate design.",
    },
    {
      title: "Modern & High-Tech",
      text: "Our surgical suite features intraoral cameras, digital radiography, and soft-tissue lasers for precise, predictable outcomes.",
    },
    {
      title: "Clean & Allergen-Free",
      text: "We prioritize your safety with hypoallergenic wall paints, hospital-grade air purification, and mercury-free restorative materials.",
    },
    {
      title: "Spa-Like Comforts",
      text: "The journey to oral health should be enjoyable. Relax with massage-equipped treatment chairs and personal entertainment.",
    },
    {
      title: "Bespoke Aesthetics",
      text: "Every smile arc is customized using 3D Digital Smile Design to harmonize seamlessly with your facial symmetry and natural features.",
    },
  ];

  // Array allocating your main studio photos
  const studioPhotos = [
    { id: "01", src: "/photo1.JPG", label: "STUDIO ARCHITECTURE" },
    { id: "02", src: "/about/about1.webp", label: "ADVANCED PEDIATRIC CARE" },
    { id: "03", src: "/photo2.JPG", label: "PATIENT COMFORT" },
    { id: "04", src: "/about/about2.webp", label: "DIGITAL PRECISION" },
    { id: "05", src: "/photo3.JPG", label: "CLINICAL SUITE" },
    { id: "06", src: "/about/about3.webp", label: "TRIBECA PRACTICE" },
  ];

  return (
    <main className="bg-[#FBFBFA] text-[#1A1A1A]">
      {/* 1. APA AESTHETIC-STYLE HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden bg-black flex items-end">
        {/* Full-Bleed Studio Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/about/heroabout.webp" 
            alt="Tribeca Dental Studio Luxury Interior"
            fill
            priority
            className="object-cover object-center filter brightness-[0.82] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
        </div>

        {/* Hero Bottom-Left Typography Stack */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 pb-16 md:pb-24 text-white">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] md:text-[11px] uppercase tracking-[0.5em] text-[#C5A059] font-medium mb-4 block"
          >
            {lang === "es" ? "TRIBECA • NUEVA YORK" : "TRIBECA • NEW YORK"}
          </motion.span>

          {/* Rendered immediately without hidden opacity for maximum LCP speed */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-ddin font-bold uppercase tracking-tight leading-[1.05] mb-6 text-white max-w-4xl drop-shadow-md">
            {lang === "es"
              ? "REDEFINIENDO LA EXCELENCIA DENTAL"
              : "REDEFINING DENTAL EXCELLENCE"}
          </h1>

          <p className="font-brandon text-base md:text-xl text-neutral-200 max-w-2xl leading-relaxed mb-8 font-light drop-shadow-sm">
            {lang === "es"
              ? "Tribeca Dental Studio es el destino dental por excelencia para tratamientos de alta precisión y resultados que transforman la vida."
              : "Tribeca Dental Studio is the premier dental destination for want-based care, advanced multi-specialty precision, and life-changing results."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={() => scrollToId("features")}
              className="px-10 py-4 bg-[#C5A059] hover:bg-white text-black font-bold uppercase tracking-[0.3em] text-[11px] transition-all duration-300 shadow-xl"
            >
              {lang === "es" ? "EXPLORAR ESTUDIO" : "DISCOVER THE STUDIO"}
            </button>
            <button
              onClick={() => scrollToId("leadForm")}
              className="px-10 py-4 border border-white/40 hover:border-[#C5A059] hover:bg-black/40 text-white font-bold uppercase tracking-[0.3em] text-[11px] transition-all duration-300 backdrop-blur-sm"
            >
              {lang === "es" ? "RESERVAR CONSULTA" : "SCHEDULE A CONSULTATION"}
            </button>
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL INTRO SECTION */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg md:text-2xl font-light leading-relaxed text-neutral-700 italic font-serif"
        >
          At Tribeca Dental Studio, patients can look forward to visiting an office that’s advanced, welcoming, and truly comprehensive. 
          Instead of just one doctor, an accomplished team of general dentists and specialists works together—providing pediatric care, periodontal treatment, prosthodontic solutions, and aesthetic architecture in one convenient environment.
        </motion.p>
      </section>

      {/* 3. FEATURES GRID */}
      <section
        id="features"
        className="py-16 px-6 md:px-12 lg:px-24 border-y border-black/10 bg-white"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {features.map((f, i) => (
            <div key={i} className="group">
              <span className="text-[10px] font-mono text-[#C5A059] mb-3 block font-bold">
                0{i + 1} //
              </span>
              <h3 className="text-2xl font-serif mb-4 uppercase tracking-tight">{f.title}</h3>
              <p className="text-neutral-600 font-light leading-relaxed text-sm">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#C5A059] font-bold block mb-2">
            PRACTICE ARCHITECTURE
          </span>
          <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight font-serif">
            Inside Tribeca Dental Studio
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studioPhotos.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative aspect-[4/3] group overflow-hidden bg-neutral-900 shadow-md border border-neutral-200"
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover transition-all duration-[1200ms] group-hover:scale-105 filter brightness-[0.95] group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:opacity-0" />
              <div className="absolute bottom-4 left-4 z-10 flex flex-col gap-1">
                <span className="text-[9px] font-bold text-[#C5A059] font-mono">
                  {item.id} //
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-white font-bold drop-shadow-sm">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}