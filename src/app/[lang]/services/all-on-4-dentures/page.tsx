/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { bookingUrl } from "@/hooks/helper";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default function DenturesAndAllOn4Page({ params }: PageProps) {
  const { lang } = use(params);
  const isEs = lang === "es";
  const scrollToId = useSmoothScroll();

  const [activeDentureType, setActiveDentureType] = useState<number>(0);

  const dentureTypes = [
    {
      id: "all-on-4",
      num: "01",
      titleEn: "All-on-4 / All-on-X Implants",
      titleEs: "Implantes All-on-4 / All-on-X",
      taglineEn: "Permanent Full-Arch Fixed Teeth",
      taglineEs: "Dientes Fijos Permanentes de Arcada Completa",
      descEn:
        "Four to six standard titanium implants support a fixed, non-removable prosthesis. Provides jawbone stimulation to prevent bone loss, maintains natural facial structure, and never slips or clicks.",
      descEs:
        "De cuatro a seis implantes de titanio sostienen una prótesis fija no removible. Estimula el hueso maxilar para evitar la reabsorción ósea, manteniendo la estructura facial natural sin deslizamientos.",
    },
    {
      id: "snap-in",
      num: "02",
      titleEn: "Snap-In (Implant-Retained)",
      titleEs: "Prótesis a Presión (Retenida por Implantes)",
      taglineEn: "Removable Stability with Implant Anchors",
      taglineEs: "Estabilidad Removible con Anclajes de Implante",
      descEn:
        "Removable dentures that securely 'snap' onto dental implants. Combines the enhanced stability and chewing power of implants with the easy cleaning of a removable appliance.",
      descEs:
        "Dentaduras removibles que se abrochan de forma segura sobre implantes dentales. Combina mayor estabilidad y capacidad de masticación con la facilidad de limpieza de una prótesis removible.",
    },
    {
      id: "zygomatic",
      num: "03",
      titleEn: "Zygomatic Implants",
      titleEs: "Implantes Cigomáticos",
      taglineEn: "Solution for Severe Top-Arch Bone Loss",
      taglineEs: "Solución para Pérdida Ósea Maxilar Severa",
      descEn:
        "Specialized longer implants anchored directly into the cheekbone (zygoma) instead of the maxilla. Ideal for patients previously told they lack the bone volume for standard implants.",
      descEs:
        "Implantes más largos anclados directamente en el hueso cigomático (pómulo) en lugar del maxilar. Ideal para pacientes a quienes se les dijo que no tenían suficiente volumen óseo.",
    },
    {
      id: "partial",
      num: "04",
      titleEn: "Custom Partial Dentures",
      titleEs: "Dentaduras Parciales Personalizadas",
      taglineEn: "Targeted Arch Replacement",
      taglineEs: "Reemplazo Dirigido de Piezas Faltantes",
      descEn:
        "Designed to replace select missing teeth across an arch when natural anchor teeth remain. Options include discreet, metal-free flexible resin (Valplast) for seamless comfort.",
      descEs:
        "Diseñadas para reemplazar dientes faltantes en una arcada cuando aún existen dientes naturales. Incluye opciones en resina flexible sin metal (Valplast) para máxima comodidad.",
    },
    {
      id: "conventional",
      num: "05",
      titleEn: "Conventional Complete Dentures",
      titleEs: "Dentaduras Completas Convencionales",
      taglineEn: "Traditional Full-Arch Restorations",
      taglineEs: "Restauración Tradicional de Arcada Completa",
      descEn:
        "Full-arch removable prosthetic teeth resting directly on the gum tissue. Crafted from biocompatible high-grade resins with custom-shaded teeth to restore aesthetics affordably.",
      descEs:
        "Prótesis removibles de arcada completa que se apoyan sobre las encías. Fabricadas con resinas biocompatibles y tonos personalizados para restaurar la sonrisa de forma accesible.",
    },
    {
      id: "immediate",
      num: "06",
      titleEn: "Immediate / Same-Day Dentures",
      titleEs: "Dentaduras Inmediatas en el Mismo Día",
      taglineEn: "Zero Time Spent Without Teeth",
      taglineEs: "Sin Tiempo de Espera sin Dientes",
      descEn:
        "Placed on the exact same day natural teeth are extracted. Protects healing gum tissue and ensures you leave our studio with a complete, confident smile immediately.",
      descEs:
        "Colocadas el mismo día de la extracción dental. Protegen el tejido gingival en cicatrización y le permiten salir de nuestro estudio con una sonrisa completa de inmediato.",
    },
  ];

  return (
    <main className="bg-[#FBFBFA] text-[#1A1A1A] min-h-screen relative">
      {/* JSON-LD Structured Data for Local SEO & Dental Implant Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            name: "Dentures & All-on-4 Dental Implants",
            medicalSpecialty: "Prosthodontics",
            procedureType: "SurgicalProcedure",
            bodyLocation: "Mouth",
            description:
              "Advanced custom dentures, snap-in dentures, zygomatic implants, and All-on-4 fixed teeth replacements in Tribeca, NYC.",
            provider: {
              "@type": "Dentist",
              name: "Tribeca Dental Studio",
              address: {
                "@type": "PostalAddress",
                addressLocality: "New York",
                addressRegion: "NY",
                addressCountry: "US",
              },
            },
          }),
        }}
      />

      <section className="relative w-full min-h-[70vh] flex items-center justify-start bg-black text-white pt-32 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/servicePage/service3.webp"
            alt="All-on-4 and Custom Dentures Tribeca NYC"
            fill
            priority
            className="object-cover object-center brightness-[0.45] contrast-[1.1]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 max-w-4xl text-left">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.5em] text-[#C5A059] font-bold block mb-4">
            {isEs
              ? "Rehabilitación de Arcada Completa y Prostodoncia"
              : "Full-Arch Rehabilitation & Prosthodontics"}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-ddin font-bold tracking-tight uppercase leading-[1.05] text-white mb-6">
            {isEs ? "Dentaduras y All-on-4®" : "Dentures & All-on-4®"}
          </h1>
          <p className="text-base md:text-xl font-light leading-relaxed text-neutral-200 max-w-2xl font-brandon mb-8">
            {isEs
              ? "Desde implantes All-on-4 fijos y soluciones cigomáticas hasta dentaduras parciales de resina flexible. Recupere su masticación, estética y confianza en Lower Manhattan."
              : "From permanent All-on-4 fixed teeth to flexible partials and zygomatic implants. Restore natural chewing power, facial symmetry, and total confidence in Lower Manhattan."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToId("leadForm")}
              className="px-10 py-4 bg-[#C5A059] hover:bg-white text-black font-bold uppercase tracking-[0.3em] text-[11px] transition-all duration-300 shadow-xl"
            >
              {isEs ? "Reservar Consulta" : "Book Consultation"}
            </button>
            <button
              onClick={() => scrollToId("denture-options")}
              className="px-10 py-4 border border-white/40 hover:border-[#C5A059] text-white font-bold uppercase tracking-[0.3em] text-[11px] transition-all duration-300"
            >
              {isEs ? "Ver Tipos de Dentaduras" : "Explore Denture Options"}
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-[0.4em] font-bold block mb-3">
              01 // MODERN PROSTHODONTIC ARCHITECTURE
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light leading-tight mb-8">
              {isEs
                ? "No son las dentaduras de sus abuelos. Es arquitectura de sonrisa avanzada."
                : "Not your grandparents' dentures. Advanced smile architecture."}
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed text-base md:text-lg mb-6">
              {isEs
                ? "La pérdida de piezas dentales impacta la masticación, el habla y la estructura facial. En Tribeca Dental Studio combinamos la pericia de nuestros cirujanos e implantólogos para ofrecer prótesis sobre implantes y dentaduras convencionales de máxima precisión digital."
                : "Tooth loss significantly impacts facial collapse, speech clarity, and nutritional intake. At Tribeca Dental Studio, our multi-specialist team crafts custom prosthetics using biocompatible resins, digital impressions, and precision dental implants for permanent stability."}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-brandon text-sm text-neutral-800 font-medium pt-2">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Prevención de reabsorción ósea" : "Jawbone loss prevention"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Dientes fijos en el mismo día" : "Same-day immediate options"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Soluciones cigomáticas para hueso bajo" : "Zygomatic solutions available"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Opciones sin broches metálicos" : "Metal-free flexible resins"}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/5] bg-neutral-900 overflow-hidden shadow-2xl border border-black/5">
            <Image
              src="/photo2.JPG"
              alt="Tribeca Dental Studio Full Arch Rehabilitation Suite"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      <section
        id="denture-options"
        className="py-20 px-6 md:px-12 lg:px-24 bg-white border-y border-black/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#C5A059] font-bold block mb-2">
              FULL-ARCH SPECTRUM
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light uppercase tracking-tight">
              Comprehensive Denture Configurations
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Selector List */}
            <div className="lg:col-span-5 flex flex-col space-y-3">
              {dentureTypes.map((opt, idx) => (
                <button
                  key={opt.id}
                  onClick={() => setActiveDentureType(idx)}
                  className={`text-left p-5 border transition-all duration-300 flex items-center justify-between ${
                    activeDentureType === idx
                      ? "bg-[#0B0B0B] text-white border-[#0B0B0B] shadow-xl"
                      : "bg-[#FBFBFA] text-neutral-800 border-black/5 hover:border-black/30"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-xs font-mono font-bold ${
                        activeDentureType === idx ? "text-[#C5A059]" : "text-neutral-400"
                      }`}
                    >
                      {opt.num}
                    </span>
                    <h3 className="text-base font-serif font-light uppercase tracking-wide">
                      {isEs ? opt.titleEs : opt.titleEn}
                    </h3>
                  </div>
                  <span
                    className={`text-sm transition-transform ${
                      activeDentureType === idx ? "text-[#C5A059] translate-x-1" : "text-neutral-300"
                    }`}
                  >
                    →
                  </span>
                </button>
              ))}
            </div>

            {/* Right Display Canvas */}
            <div className="lg:col-span-7 bg-[#FBFBFA] p-8 md:p-12 border border-black/10 shadow-sm relative min-h-[340px] flex flex-col justify-center">
              <motion.div
                key={activeDentureType}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <span className="text-xs font-mono text-[#C5A059] font-bold block uppercase tracking-widest">
                  {dentureTypes[activeDentureType].num} // {isEs ? dentureTypes[activeDentureType].taglineEs : dentureTypes[activeDentureType].taglineEn}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-light">
                  {isEs ? dentureTypes[activeDentureType].titleEs : dentureTypes[activeDentureType].titleEn}
                </h3>
                <p className="text-neutral-600 font-light text-base md:text-lg leading-relaxed font-brandon">
                  {isEs ? dentureTypes[activeDentureType].descEs : dentureTypes[activeDentureType].descEn}
                </p>
                <div className="pt-4 border-t border-black/10 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#C5A059]" />
                  <span className="text-xs font-mono uppercase text-neutral-500 font-bold">
                    Custom 3D Digital Smile Design & Fit
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPARISON: ALL-ON-4 VS CONVENTIONAL DENTURES */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#C5A059] font-bold block mb-2">
            HEAD-TO-HEAD ANALYSIS
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light uppercase">
            All-on-4® Implants vs. Conventional Dentures
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* All-on-4 Box */}
          <div className="bg-[#0B0B0B] text-white p-8 md:p-10 border border-[#C5A059]/30 flex flex-col justify-between shadow-2xl">
            <div>
              <span className="text-xs font-mono text-[#C5A059] block mb-2 font-bold">
                RECOMMENDED GOLD STANDARD
              </span>
              <h3 className="text-2xl font-serif mb-6 uppercase">All-on-4® / Implant Fixed</h3>
              <ul className="space-y-4 text-sm font-brandon text-neutral-300 font-light">
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A059]">✓</span>
                  <span><strong>Jawbone Preservation:</strong> Implants stimulate bone tissue, preventing facial collapse and sunken appearance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A059]">✓</span>
                  <span><strong>Permanent Solution:</strong> One-and-done restoration without needing relining every few years.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A059]">✓</span>
                  <span><strong>Absolute Stability:</strong> Zero clicking, slipping, or adhesives. Cleaned just like natural teeth.</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-[#C5A059] font-mono">
              LONG-TERM INVESTMENT & FUNCTION
            </div>
          </div>

          {/* Conventional Box */}
          <div className="bg-white text-neutral-800 p-8 md:p-10 border border-black/10 flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-xs font-mono text-neutral-400 block mb-2 font-bold">
                TRADITIONAL REMOVABLE
              </span>
              <h3 className="text-2xl font-serif mb-6 uppercase">Conventional Dentures</h3>
              <ul className="space-y-4 text-sm font-brandon text-neutral-600 font-light">
                <li className="flex items-start gap-3">
                  <span className="text-neutral-400">•</span>
                  <span><strong>No Bone Requirement:</strong> Can be placed regardless of existing jawbone density or surgical restrictions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neutral-400">•</span>
                  <span><strong>Periodic Remaking:</strong> Must be relined or remade every 7–10 years as jawbone structure resorbs naturally.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neutral-400">•</span>
                  <span><strong>Nightly Removal:</strong> Requires daily adhesive gels, cleaning solutions, and night soaking.</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-black/10 text-xs text-neutral-400 font-mono">
              ACCESSIBLE ENTRY-LEVEL RESTORATION
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER CALL TO ACTION */}
      <section className="bg-[#0B0B0B] text-white py-24 px-6 text-center relative z-20">
        <p className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] mb-4">
          {isEs ? "TRIBECA • NUEVA YORK" : "TRIBECA • NEW YORK"}
        </p>
        <h2 className="text-3xl md:text-5xl font-ddin uppercase font-bold mb-6">
          {isEs
            ? "Recupere su Sonrisa y Capacidad de Masticación"
            : "Restore Your Natural Smile & Chewing Power"}
        </h2>
        <p className="text-base md:text-lg font-serif italic text-neutral-400 max-w-xl mx-auto mb-8 font-light">
          {isEs
            ? "Agende una consulta con nuestros prostodoncistas e implantólogos en Lower Manhattan."
            : "Schedule your consultation for All-on-4® or custom dentures with our prosthodontic team in Lower Manhattan."}
        </p>
        <Link
          href={bookingUrl}
          className="inline-block px-12 py-4 bg-[#C5A059] text-black font-bold text-[11px] uppercase tracking-[0.3em] hover:bg-white transition-all duration-300"
        >
          {isEs ? "RESERVAR AHORA" : "SCHEDULE CONSULTATION"}
        </Link>
      </section>
    </main>
  );
}