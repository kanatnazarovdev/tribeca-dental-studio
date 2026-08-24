/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { bookingUrl } from "@/hooks/helper";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default function BriusInvisibleBracesPage({ params }: PageProps) {
  const { lang } = use(params);
  const isEs = lang === "es";

  // Dynamic booking URL based on current language

  const [activeTab, setActiveTab] = useState<"brius" | "aligners" | "traditional">("brius");

  const benefits = [
    {
      num: "01",
      titleEn: "100% Truly Invisible",
      titleEs: "100% Verdaderamente Invisible",
      descEn:
        "Custom-bonded strictly behind your teeth. No visible metal brackets on the front and no plastic aligner attachments.",
      descEs:
        "Adherido exclusivamente a la cara posterior de los dientes. Sin brackets visibles en el frente ni ataches de alineadores.",
    },
    {
      num: "02",
      titleEn: "Independent Tooth Movement",
      titleEs: "Movimiento Dental Independiente",
      descEn:
        "Patented flexible nickel-titanium arms move each tooth independently and simultaneously, cutting treatment time down to 6–12 months.",
      descEs:
        "Brazos flexibles de níquel-titanio mueven cada diente de forma independiente y simultánea, reduciendo el tiempo a 6-12 meses.",
    },
    {
      num: "03",
      titleEn: "Zero Compliance Delays",
      titleEs: "Sin Retrasos por Uso",
      descEn:
        "Fixed lingual placement works 24/7 without requiring you to remove aligners for meals, eliminating patient compliance worries.",
      descEs:
        "El sistema fijo trabaja las 24 horas sin necesidad de quitar alineadores para comer, eliminando la dependencia del paciente.",
    },
    {
      num: "04",
      titleEn: "Effortless Hygiene & Comfort",
      titleEs: "Higiene y Confort Sin Esfuerzo",
      descEn:
        "Light, continuous forces eliminate painful wire-tightening appointments. The front of your teeth remains clear for easy flossing.",
      descEs:
        "Fuerzas ligeras y continuas eliminan las dolorosas citas de ajuste. La parte frontal queda libre para un fácil cepillado.",
    },
  ];

  const steps = [
    {
      num: "01",
      titleEn: "High-Precision 3D Mapping",
      titleEs: "Escaneo Digital 3D de Alta Precisión",
      textEn:
        "We capture a comprehensive digital model of your dental architecture to map independent trajectories for each tooth.",
      textEs:
        "Capturamos un modelo digital completo de su arquitectura dental para trazar trayectorias independientes para cada diente.",
    },
    {
      num: "02",
      titleEn: "Custom BRIUS Arm Fabrication",
      titleEs: "Fabricación Personalizada de Brazos BRIUS",
      textEn:
        "Pre-programmed, flexible nickel-titanium arms are custom-engineered to guide your teeth along the direct shortest path.",
      textEs:
        "Brazos de níquel-titanio preprogramados se diseñan a medida para guiar sus dientes por el camino más directo.",
    },
    {
      num: "03",
      titleEn: "Lingual Placement",
      titleEs: "Colocación Lingual",
      textEn:
        "The appliance is bonded to the back of your teeth in a single visit, remaining completely hidden from external view.",
      textEs:
        "El aparato se adhiere a la cara posterior de los dientes en una sola visita, quedando totalmente oculto a la vista.",
    },
    {
      num: "04",
      titleEn: "Autonomous Progress",
      titleEs: "Progreso Autónomo",
      textEn:
        "BRIUS works autonomously without periodic wire tightenings or tray changes, requiring significantly fewer office visits.",
      textEs:
        "BRIUS trabaja de forma autónoma sin ajustes de alambre ni cambio de alineadores, requiriendo menos visitas a la clínica.",
    },
  ];

  return (
    <main className="bg-[#FBFBFA] text-[#1A1A1A] min-h-screen relative">
      {/* JSON-LD Structured Data for Local SEO & BRIUS Orthodontic Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            name: "BRIUS Invisible Braces",
            medicalSpecialty: "Orthodontics",
            procedureType: "NonInvasiveProcedure",
            bodyLocation: "Mouth",
            description:
              "Revolutionary independent tooth movement lingual braces engineered behind the teeth for fast, invisible orthodontic treatment in Tribeca, NYC.",
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

      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-start bg-black text-white pt-32 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/servicePage/service8.webp"
            alt="BRIUS Invisible Braces Tribeca NYC"
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
              ? "Ortodoncia Lingual Autónoma Revolucionaria"
              : "Revolutionary Autonomous Lingual Orthodontics"}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-ddin font-bold tracking-tight uppercase leading-[1.05] text-white mb-6">
            {isEs ? "Brackets BRIUS® Invisibles" : "BRIUS® Invisible Braces"}
          </h1>
          <p className="text-base md:text-xl font-light leading-relaxed text-neutral-200 max-w-2xl font-brandon mb-8">
            {isEs
              ? "Movimiento dental independiente y simultáneo desde la parte posterior de los dientes. Alineación en meses, no años, 100% invisible en Tribeca, NYC."
              : "Simultaneous, independent tooth movement placed strictly behind your teeth. Achieve a perfectly aligned smile in as little as 6 to 12 months with zero visible appliances."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={bookingUrl}
              className="px-10 py-4 bg-[#C5A059] hover:bg-white text-black font-bold uppercase tracking-[0.3em] text-[11px] transition-all duration-300 shadow-xl text-center"
            >
              SCHEDULE CONSULTATION
            </Link>
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL OVERVIEW */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-[0.4em] font-bold block mb-3">
              01 // A NEW CATEGORY IN ORTHODONTICS
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light leading-tight mb-8">
              {isEs
                ? "Cada diente se mueve de forma independiente y simultánea."
                : "Every tooth moves independently and simultaneously."}
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed text-base md:text-lg mb-6">
              {isEs
                ? "BRIUS no es solo otro tipo de bracket; es una categoría totalmente nueva. A diferencia de los brackets tradicionales que mueven los dientes como un solo bloque unido por un alambre continuo, BRIUS utiliza brazos flexibles de níquel-titanio anclados en la parte posterior para guiar cada diente por su camino más directo."
                : "BRIUS is an entirely new category of orthodontic treatment. Traditional braces move teeth sequentially using a single continuous archwire. BRIUS uses patented, flexible nickel-titanium arms bonded behind the teeth to move every tooth along its own custom pathway simultaneously, drastically reducing overall treatment time."}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-brandon text-sm text-neutral-800 font-medium pt-2">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Resultados finales en 6 a 12 meses" : "Results often achieved in 6 to 12 months"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Sin citas de ajuste dolorosas" : "No painful wire-tightening visits"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Sin ataches visibles en el frente" : "Zero visible attachments on tooth fronts"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Ideal para adultos y adolescentes" : "Designed for busy adults & teens"}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/5] bg-neutral-900 overflow-hidden shadow-2xl border border-black/5">
            <Image
              src="/servicePage/service9.webp"
              alt="Tribeca Dental Studio Digital Orthodontics"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* 3. BENEFITS GRID */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white border-y border-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#C5A059] font-bold block mb-2">
              BIOMECHANICAL ADVANTAGES
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light uppercase tracking-tight">
              Why Choose BRIUS® Technology
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, idx) => (
              <div key={idx} className="bg-[#FBFBFA] p-8 border border-black/5 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-[#C5A059] block mb-4 font-bold">
                    {b.num} //
                  </span>
                  <h3 className="text-xl font-serif mb-3">
                    {isEs ? b.titleEs : b.titleEn}
                  </h3>
                  <p className="text-neutral-500 font-light text-sm leading-relaxed font-brandon">
                    {isEs ? b.descEs : b.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMPARISON MATRIX (BRIUS VS ALIGNERS VS TRADITIONAL) */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#C5A059] font-bold block mb-2">
            COMPARATIVE INNOVATION
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light uppercase">
            BRIUS® vs. Aligners vs. Braces
          </h2>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab("brius")}
            className={`px-6 py-3 text-xs uppercase tracking-[0.2em] transition-all ${
              activeTab === "brius"
                ? "bg-[#0B0B0B] text-white border border-[#0B0B0B]"
                : "border border-neutral-300 text-neutral-500 hover:border-black"
            }`}
          >
            BRIUS® Independent Lingual
          </button>
          <button
            onClick={() => setActiveTab("aligners")}
            className={`px-6 py-3 text-xs uppercase tracking-[0.2em] transition-all ${
              activeTab === "aligners"
                ? "bg-[#0B0B0B] text-white border border-[#0B0B0B]"
                : "border border-neutral-300 text-neutral-500 hover:border-black"
            }`}
          >
            Clear Aligners (Invisalign®)
          </button>
          <button
            onClick={() => setActiveTab("traditional")}
            className={`px-6 py-3 text-xs uppercase tracking-[0.2em] transition-all ${
              activeTab === "traditional"
                ? "bg-[#0B0B0B] text-white border border-[#0B0B0B]"
                : "border border-neutral-300 text-neutral-500 hover:border-black"
            }`}
          >
            Traditional Front Braces
          </button>
        </div>

        {/* Dynamic Card Display */}
        <div className="bg-white p-8 md:p-12 border border-black/10 shadow-sm min-h-[280px]">
          {activeTab === "brius" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <span className="text-xs font-mono text-[#C5A059] font-bold block">100% INVISIBLE & ACCELERATED</span>
              <h3 className="text-2xl font-serif">BRIUS® Biomechanical Appliance</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                Bonded strictly to the back of the teeth with flexible nickel-titanium arms. Every tooth moves simultaneously, completing treatment in months without aligner tray-removal hassles, visible attachments, or painful wire tightenings.
              </p>
            </motion.div>
          )}

          {activeTab === "aligners" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <span className="text-xs font-mono text-[#C5A059] font-bold block">REMOVABLE ALIGNER TRAYS</span>
              <h3 className="text-2xl font-serif">Clear Aligners</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                Requires 20–22 hours of daily wear and must be removed for every meal or drink other than water. Compliance delays can extend treatment schedules, and visible composite attachments are often required on front teeth.
              </p>
            </motion.div>
          )}

          {activeTab === "traditional" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <span className="text-xs font-mono text-[#C5A059] font-bold block">FRONT-FACING ARCHWIRE APPLIANCE</span>
              <h3 className="text-2xl font-serif">Traditional Braces</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                Applies force across the entire arch using a single connected wire, resulting in slower sequential tooth movement. Requires frequent tightening visits and leaves front enamel vulnerable to staining or demineralization.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* 5. TREATMENT PROCESS */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0B0B0B] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#C5A059] font-bold block mb-2">
              AUTONOMOUS PATHWAY
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light uppercase">
              How the BRIUS® Journey Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="border border-white/10 p-8 flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-mono text-[#C5A059] mb-4 font-bold block">
                    {step.num}
                  </span>
                  <h3 className="text-xl font-serif mb-3 text-white">
                    {isEs ? step.titleEs : step.titleEn}
                  </h3>
                  <p className="text-neutral-400 font-light text-sm leading-relaxed font-brandon">
                    {isEs ? step.textEs : step.textEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FOOTER CALL TO ACTION */}
      <section className="bg-black text-white py-24 px-6 text-center relative z-20">
        <p className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] mb-4">
          {isEs ? "TRIBECA • NUEVA YORK" : "TRIBECA • NEW YORK"}
        </p>
        <h2 className="text-3xl md:text-5xl font-ddin uppercase font-bold mb-6">
          {isEs
            ? "Alinee su Sonrisa en Meses Sin Brackets Visibles"
            : "Straighten Your Teeth in Months Completely Unseen"}
        </h2>
        <p className="text-base md:text-lg font-serif italic text-neutral-400 max-w-xl mx-auto mb-8 font-light">
          {isEs
            ? "Agende su consulta para el sistema BRIUS® en nuestro estudio de Lower Manhattan."
            : "Schedule your consultation for BRIUS® invisible braces at Tribeca Dental Studio today."}
        </p>
        <Link
          href={bookingUrl}
          className="inline-block px-12 py-4 bg-[#C5A059] text-black font-bold text-[11px] uppercase tracking-[0.3em] hover:bg-white transition-all duration-300"
        >
          SCHEDULE CONSULTATION
        </Link>
      </section>
    </main>
  );
}