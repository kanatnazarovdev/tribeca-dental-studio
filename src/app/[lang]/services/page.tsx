/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";
import {
  COSMETIC_SERVICES,
  GENERAL_SERVICES,
  SPECIALIZED_SERVICES,
  AIRWAY_AND_ORTHO_SERVICES,
  IMPLANT_SERVICES,
  ServiceItem,
} from "@/constants/services";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default function ServicesPage({ params }: PageProps) {
  const { lang } = use(params);
  const isEs = lang === "es";

  // State to capture the user's search query
  const [searchQuery, setSearchQuery] = useState("");

  // Clean local filter logic supporting both English and Spanish queries
  const filterItems = (items: ServiceItem[]) => {
    if (!searchQuery.trim()) return items;
    return items.filter((service) => {
      const matchText = `${service.titleEn} ${service.titleEs}`.toLowerCase();
      return matchText.includes(searchQuery.toLowerCase());
    });
  };

  const activeCosmetic = filterItems(COSMETIC_SERVICES);
  const activeGeneral = filterItems(GENERAL_SERVICES);
  const activeSpecialized = filterItems(SPECIALIZED_SERVICES);
  const activeAirway = filterItems(AIRWAY_AND_ORTHO_SERVICES);
  const activeImplants = filterItems(IMPLANT_SERVICES);

  const hasAnyResults =
    activeCosmetic.length > 0 ||
    activeGeneral.length > 0 ||
    activeSpecialized.length > 0 ||
    activeImplants.length > 0 ||
    activeAirway.length > 0;

  const renderServiceList = (items: ServiceItem[]) => {
    return items.map((service) => (
      <Link
        key={service.slug}
        href={`/${lang}/${service.slug}`}
        className="group flex flex-col border-b border-black/[0.06] py-4 relative z-20"
      >
        <div className="flex justify-between items-baseline">
          <div className="flex items-baseline gap-4">
            <span className="text-[10px] font-mono text-neutral-400 group-hover:text-[#C5A059] transition-colors duration-300">
              {service.num}
            </span>
            <h3 className="text-xl font-light tracking-tight text-[#1A1A1A] group-hover:text-[#C5A059] group-hover:pl-2 transition-all duration-500 ease-out">
              {isEs ? service.titleEs : service.titleEn}
            </h3>
          </div>
          <span className="text-sm font-light text-neutral-300 group-hover:text-[#C5A059] group-hover:translate-x-1 transition-all duration-300">
            →
          </span>
        </div>
      </Link>
    ));
  };

  return (
    <main className="bg-[#FBFBFA] text-[#1A1A1A] min-h-screen relative">
      {/* 1. CINEMATIC BACKGROUND HERO */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-start py-32 px-6 md:px-12 lg:px-24 overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0 select-none pointer-events-none scale-110 blur-3xl opacity-30">
          <Image
            src="/aboutPage.png"
            alt="Tribeca Dental Studio Luxury Background"
            fill
            priority
            className="object-cover object-center grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-black/70 z-10 pointer-events-none" />

        <div className="relative z-20 max-w-3xl text-left flex flex-col items-start lg:pl-6">
          <span className="text-[10px] uppercase tracking-[0.6em] text-[#C5A059] font-bold block mb-4">
            {isEs ? "Menú de Servicios de Élite" : "Elite Menu of Services"}
          </span>
          <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tight uppercase mb-6 leading-[1.1]">
            {isEs ? "Nuestros Servicios" : "Our Services"}
          </h1>
          <p className="text-base md:text-lg font-light leading-relaxed text-neutral-300 max-w-2xl tracking-wide">
            {isEs ? (
              <>
                Un menú excepcional de configuraciones dentales avanzadas
                diseñado para su absoluta comodidad bajo un mismo techo.
              </>
            ) : (
              <>
                An exceptional suite of advanced dental configurations curated
                for absolute comfort, seamlessly delivered under one roof.
              </>
            )}
          </p>
        </div>
      </section>

      {/* 2. MINIMAL LUXURY SEARCH BAR SECTION */}
      <section className="relative z-20 bg-[#FBFBFA] pt-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto border-b border-black/10 pb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              isEs ? "BUSCAR TRATAMIENTO..." : "SEARCH SERVICES & TREATMENTS..."
            }
            className="w-full bg-transparent text-xl md:text-2xl font-light tracking-widest text-[#1A1A1A] placeholder-neutral-300 focus:outline-none uppercase"
            style={{ fontFamily: "var(--font-D-DIN)" }}
          />
        </div>
      </section>

      {/* 3. REFINED SPLIT LAYOUT DIRECTORY & PERMANENT LOOKBOOK CANVAS */}
      <section className="relative w-full py-16 md:py-24 px-6 md:px-12 lg:px-24 z-20 bg-[#FBFBFA]">
        {/* Subtle Luxury Wireframe Grid Line Guides */}
        <div className="absolute inset-y-0 left-6 md:left-12 lg:left-24 w-[1px] bg-black/[0.03] pointer-events-none" />
        <div className="absolute inset-y-0 right-6 md:right-12 lg:right-24 w-[1px] bg-black/[0.03] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-30">
          {/* LEFT PANEL: LINK COLUMNS GRID (7 Columns Wide) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="popLayout">
              {hasAnyResults ? (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16"
                >
                  {/* Column 1 */}
                  <div className="flex flex-col space-y-16">
                    {activeCosmetic.length > 0 && (
                      <motion.div layout>
                        <span className="text-[10px] font-mono text-[#C5A059] mb-4 block">
                          01 // COSMETIC & DESIGN
                        </span>
                        <h2 className="text-lg tracking-widest uppercase font-light text-neutral-400 mb-6">
                          {isEs ? "Alta Estética" : "Cosmetic & Design"}
                        </h2>
                        <div className="flex flex-col">
                          {renderServiceList(activeCosmetic)}
                        </div>
                      </motion.div>
                    )}

                    {activeSpecialized.length > 0 && (
                      <motion.div layout>
                        <span className="text-[10px] font-mono text-[#C5A059] mb-4 block">
                          03 // SPECIALIZED CLINICAL
                        </span>
                        <h2 className="text-lg tracking-widest uppercase font-light text-neutral-400 mb-6">
                          {isEs ? "Cirugía e Implantes" : "Advanced Surgical"}
                        </h2>
                        <div className="flex flex-col">
                          {renderServiceList(activeSpecialized)}
                        </div>
                      </motion.div>
                    )}
                    {activeImplants.length > 0 && (
                      <motion.div layout>
                        <span className="text-[10px] font-mono text-[#C5A059] mb-4 block">
                          DENTAL IMPLANTS 
                        </span>
                        <h2 className="text-lg tracking-widest uppercase font-light text-neutral-400 mb-6">
                          {isEs ? "Cirugía e Implantes" : "Dental Implants"}
                        </h2>
                        <div className="flex flex-col">
                          {renderServiceList(activeImplants)}
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Column 2 */}
                  <div className="flex flex-col space-y-16">
                    {activeGeneral.length > 0 && (
                      <motion.div layout>
                        <span className="text-[10px] font-mono text-[#C5A059] mb-4 block">
                          02 // GENERAL CARE
                        </span>
                        <h2 className="text-lg tracking-widest uppercase font-light text-neutral-400 mb-6">
                          {isEs ? "Cuidado General" : "General Dentistry"}
                        </h2>
                        <div className="flex flex-col">
                          {renderServiceList(activeGeneral)}
                        </div>
                      </motion.div>
                    )}

                    {activeAirway.length > 0 && (
                      <motion.div layout>
                        <span className="text-[10px] font-mono text-[#C5A059] mb-4 block">
                          04 // AIRWAY & ORTHODONTICS
                        </span>
                        <h2 className="text-lg tracking-widest uppercase font-light text-neutral-400 mb-6">
                          {isEs ? "Vías Respiratorias" : "Airway & Ortho"}
                        </h2>
                        <div className="flex flex-col">
                          {renderServiceList(activeAirway)}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-left md:pl-6"
                >
                  <p className="text-lg font-light text-neutral-400 leading-relaxed max-w-md">
                    {isEs
                      ? "No se encontraron tratamientos correspondientes. Por favor, intente con otra consulta o póngase en contacto con nuestro conserje clínico."
                      : "No matching configurations discovered. Try searching another term, or get in touch directly with our clinical concierge."}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT PANEL: PERMANENT LUXURY EDITORIAL PREVIEW CONTAINER (5 Columns Wide) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-40 aspect-[4/5] w-full bg-[#0B0B0B] rounded-sm overflow-hidden border border-black/[0.04] shadow-2xl relative">
            <Image
              src="/aboutPage.png"
              alt="Tribeca Dental Studio Smile Architecture"
              fill
              priority
              className="object-cover opacity-50 grayscale contrast-125 transition-transform duration-700"
              sizes="33vw"
            />
            {/* Subtle premium vignette overlay for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8 text-white z-10 flex flex-col items-start">
              <span className="text-[9px] uppercase tracking-[0.4em] text-[#C5A059] mb-2 font-mono">
                TDS // LOOKBOOK
              </span>
              <p className="text-sm font-serif italic text-neutral-300 font-light tracking-wide">
                Lower Manhattan, New York
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LUXURY BRAND FOOTER BLOCK */}
      <section className="bg-[#0B0B0B] text-white py-24 px-6 text-center z-20 relative">
        <p className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] mb-6">
          {isEs ? "El Estándar de Tribeca" : "The Tribeca Studio Standard"}
        </p>
        <p className="text-lg md:text-xl font-serif italic font-light max-w-2xl mx-auto text-neutral-300 leading-relaxed">
          {isEs
            ? "“No derivamos a nuestros pacientes; traemos a los mejores especialistas del mundo hacia usted.”"
            : "“We do not refer our patients out; we welcome the world's most accomplished dental minds directly to you.”"}
        </p>
      </section>
    </main>
  );
}
