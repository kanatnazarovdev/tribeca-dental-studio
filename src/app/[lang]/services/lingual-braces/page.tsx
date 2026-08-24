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

export default function LingualBracesPage({ params }: PageProps) {
  const { lang } = use(params);
  const isEs = lang === "es";
  const scrollToId = useSmoothScroll();

  const [activeComparison, setActiveComparison] = useState<"lingual" | "traditional" | "invisalign">("lingual");

  const benefits = [
    {
      num: "01",
      titleEn: "100% Invisible Placement",
      titleEs: "Ubicación 100% Invisible",
      descEn:
        "Custom-bonded strictly to the inner (lingual) surface of your teeth, keeping your treatment completely hidden from view.",
      descEs:
        "Adheridos exclusivamente a la superficie interna (lingual) de los dientes, manteniendo el tratamiento completamente oculto.",
    },
    {
      num: "02",
      titleEn: "Gold-Standard Precision",
      titleEs: "Precisión de Estándar de Oro",
      descEn:
        "Utilizes advanced 3D CAD/CAM custom gold-alloy brackets (Incognito™) tailored precisely to your unique dental anatomy.",
      descEs:
        "Utiliza brackets personalizados de aleación de oro en 3D CAD/CAM (Incognito™) adaptados con precisión a su anatomía.",
    },
    {
      num: "03",
      titleEn: "Zero Front Demineralization",
      titleEs: "Sin Riesgo de Desmineralización Frontal",
      descEn:
        "Eliminates the risk of visible white spots or front enamel discoloration since all appliances sit behind the teeth.",
      descEs:
        "Elimina el riesgo de manchas blancas o decoloración en la parte frontal del esmalte ya que todo se coloca por detrás.",
    },
    {
      num: "04",
      titleEn: "24/7 Uncompromising Control",
      titleEs: "Control Continuo 24/7",
      descEn:
        "Fixed appliances deliver continuous, powerful tooth movement for complex bite corrections without relying on patient compliance.",
      descEs:
        "Los aparatos fijos brindan movimiento continuo para correcciones complejas de mordida sin depender del uso del paciente.",
    },
  ];

  const treatmentSteps = [
    {
      num: "01",
      titleEn: "3D Digital Scanning & Analysis",
      titleEs: "Escaneo Digital 3D y Análisis",
      textEn:
        "We capture high-resolution digital impressions without messy putty to map out your custom archwire trajectory.",
      textEs:
        "Capturamos impresiones digitales de alta resolución sin pastas incómodas para trazar la trayectoria personalizada.",
    },
    {
      num: "02",
      titleEn: "Custom Incognito™ Fabrication",
      titleEs: "Fabricación Personalizada Incognito™",
      textEn:
        "Your unique lingual gold-alloy brackets and robotically bent archwires are custom-engineered in a specialized laboratory.",
      textEs:
        "Sus brackets de aleación de oro y arcos robóticos se fabrican a medida en un laboratorio especializado.",
    },
    {
      num: "03",
      titleEn: "Precision Placement & Bonding",
      titleEs: "Colocación y Adhesión de Precisión",
      textEn:
        "Brackets are bonded to the back of your teeth in a single streamlined placement using custom transfer trays.",
      textEs:
        "Los brackets se adhieren a la cara posterior de los dientes mediante cubetas de transferencia de precisión.",
    },
    {
      num: "04",
      titleEn: "Periodic Refinement & Reveal",
      titleEs: "Ajustes Periódicos y Revelación",
      textEn:
        "Regular archwire adjustments guide your smile into ideal alignment, culminating in the reveal of your straight smile.",
      textEs:
        "Ajustes periódicos guían su sonrisa hacia la alineación ideal, culminando en la revelación de su nueva sonrisa.",
    },
  ];

  return (
    <main className="bg-[#FBFBFA] text-[#1A1A1A] min-h-screen relative">
      {/* JSON-LD Structured Data for Local SEO & Orthodontics Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            name: "Lingual Braces & Incognito Orthodontics",
            medicalSpecialty: "Orthodontics",
            procedureType: "NonInvasiveProcedure",
            bodyLocation: "Mouth",
            description:
              "Custom hidden lingual braces bonded behind the teeth for 100% invisible orthodontic treatment in Tribeca, NYC.",
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
            src="/servicePage/service2.webp"
            alt="Lingual Braces Tribeca NYC"
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
              ? "Ortodoncia Invisible Avanzada"
              : "Advanced Hidden Orthodontics"}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-ddin font-bold tracking-tight uppercase leading-[1.05] text-white mb-6">
            {isEs ? "Brackets Linguales" : "Lingual Braces"}
          </h1>
          <p className="text-base md:text-xl font-light leading-relaxed text-neutral-200 max-w-2xl font-brandon mb-8">
            {isEs
              ? "La solución discreta definitiva para una sonrisa perfecta. Brackets personalizados colocados detrás de los dientes para una ortodoncia 100% invisible en Tribeca, NYC."
              : "The ultimate secret to a straight smile. Custom gold-alloy brackets engineered strictly behind your teeth for 100% hidden orthodontic correction in Lower Manhattan."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToId("leadForm")}
              className="px-10 py-4 bg-[#C5A059] hover:bg-white text-black font-bold uppercase tracking-[0.3em] text-[11px] transition-all duration-300 shadow-xl"
            >
              {isEs ? "Reservar Consulta" : "Book Consultation"}
            </button>
            <button
              onClick={() => scrollToId("comparison")}
              className="px-10 py-4 border border-white/40 hover:border-[#C5A059] text-white font-bold uppercase tracking-[0.3em] text-[11px] transition-all duration-300"
            >
              {isEs ? "Comparar Opciones" : "Compare Orthodontics"}
            </button>
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL INTRO SECTION */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-[0.4em] font-bold block mb-3">
              01 // THE UNSEEN ADVANTAGE
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light leading-tight mb-8">
              {isEs
                ? "Alineación sin comprometer su estética profesional."
                : "Straighten your teeth without compromising your aesthetic."}
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed text-base md:text-lg mb-6">
              {isEs
                ? "Para muchos adultos y profesionales en Tribeca, la idea de llevar brackets metálicos visibles es un impedimento. Los brackets linguales funcionan igual que los tradicionales, pero están adheridos a la superficie posterior (lingual) de los dientes, haciéndolos completamente invisibles."
                : "For professionals and teens in NYC, visible metal brackets are often a major deterrent to seeking orthodontic treatment. Lingual braces offer the unmatched movement control of fixed braces, custom-fitted behind your teeth so nobody ever knows you are undergoing treatment."}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-brandon text-sm text-neutral-800 font-medium pt-2">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Aptos para apiñamiento y mordidas complejas" : "Corrects complex bite issues & severe crowding"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Tecnología de brackets de oro Incognito™" : "Incognito™ custom gold-alloy technology"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Adaptación del habla en un par de semanas" : "Rapid tongue adaptation in 1–2 weeks"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Funcionamiento continuo 24/7" : "24/7 continuous orthodontic movement"}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/5] bg-neutral-900 overflow-hidden shadow-2xl border border-black/5">
            <Image
              src="/servicePage/service10.webp"
              alt="Tribeca Dental Studio Orthodontic Suite"
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
              ENGINEERING EXCELLENCE
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light uppercase tracking-tight">
              Why Choose Lingual Braces
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

      {/* 4. COMPARISON MATRIX (LINGUAL vs TRADITIONAL vs INVISALIGN) */}
      <section id="comparison" className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#C5A059] font-bold block mb-2">
            HEAD-TO-HEAD ANALYSIS
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light uppercase">
            Comparing Orthodontic Solutions
          </h2>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveComparison("lingual")}
            className={`px-6 py-3 text-xs uppercase tracking-[0.2em] transition-all ${
              activeComparison === "lingual"
                ? "bg-[#0B0B0B] text-white border border-[#0B0B0B]"
                : "border border-neutral-300 text-neutral-500 hover:border-black"
            }`}
          >
            Lingual Braces (Hidden)
          </button>
          <button
            onClick={() => setActiveComparison("invisalign")}
            className={`px-6 py-3 text-xs uppercase tracking-[0.2em] transition-all ${
              activeComparison === "invisalign"
                ? "bg-[#0B0B0B] text-white border border-[#0B0B0B]"
                : "border border-neutral-300 text-neutral-500 hover:border-black"
            }`}
          >
            Invisalign® Clear Aligners
          </button>
          <button
            onClick={() => setActiveComparison("traditional")}
            className={`px-6 py-3 text-xs uppercase tracking-[0.2em] transition-all ${
              activeComparison === "traditional"
                ? "bg-[#0B0B0B] text-white border border-[#0B0B0B]"
                : "border border-neutral-300 text-neutral-500 hover:border-black"
            }`}
          >
            Traditional Front Braces
          </button>
        </div>

        {/* Dynamic Display Card */}
        <div className="bg-white p-8 md:p-12 border border-black/10 shadow-sm min-h-[280px]">
          {activeComparison === "lingual" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <span className="text-xs font-mono text-[#C5A059] font-bold block">100% INVISIBLE & FIXED</span>
              <h3 className="text-2xl font-serif">Lingual Braces</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                The ultimate choice for aesthetics. Bonded to the inner tooth surfaces, lingual braces offer the complex movement power of traditional braces without being visible to anyone. No compliance worries—they work 24/7 behind your teeth.
              </p>
            </motion.div>
          )}

          {activeComparison === "invisalign" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <span className="text-xs font-mono text-[#C5A059] font-bold block">REMOVABLE & DISCREET</span>
              <h3 className="text-2xl font-serif">Invisalign® Clear Aligners</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                Clear plastic trays that can be removed for eating and brushing. Highly discreet for mild to moderate cases, but aligners can still be detected up close and require strict patient discipline (20–22 hours of daily wear).
              </p>
            </motion.div>
          )}

          {activeComparison === "traditional" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <span className="text-xs font-mono text-[#C5A059] font-bold block">VISIBLE FRONT-FACING APPLIANCE</span>
              <h3 className="text-2xl font-serif">Traditional Braces (Metal/Ceramic)</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                Brackets bonded to the front of the teeth. While extremely effective for severe bite corrections, they remain visible throughout the entire course of treatment and carry a risk of front-surface enamel demineralization.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* 5. STEP-BY-STEP PROCESS */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0B0B0B] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#C5A059] font-bold block mb-2">
              CLINICAL JOURNEY
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light uppercase">
              What to Expect During Treatment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatmentSteps.map((step, idx) => (
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
            ? "Transforme su Sonrisa de Forma Invisible"
            : "Transform Your Smile Completely Unseen"}
        </h2>
        <p className="text-base md:text-lg font-serif italic text-neutral-400 max-w-xl mx-auto mb-8 font-light">
          {isEs
            ? "Agende una consulta de ortodoncia lingual con nuestro equipo especializado en Lower Manhattan."
            : "Schedule your consultation for custom hidden lingual braces at our Tribeca studio today."}
        </p>
        <Link
        target="_blank"
          href={bookingUrl}
          className="inline-block px-12 py-4 bg-[#C5A059] text-black font-bold text-[11px] uppercase tracking-[0.3em] hover:bg-white transition-all duration-300"
        >
          {isEs ? "RESERVAR AHORA" : "SCHEDULE CONSULTATION"}
        </Link>
      </section>
    </main>
  );
}