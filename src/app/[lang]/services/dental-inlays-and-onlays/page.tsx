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

export default function InlaysAndOnlaysPage({ params }: PageProps) {
  const { lang } = use(params);
  const isEs = lang === "es";
  const scrollToId = useSmoothScroll();

  const [activeTab, setActiveTab] = useState<"inlay" | "onlay">("inlay");

  const materials = [
    {
      nameEn: "Porcelain & Ceramics",
      nameEs: "Porcelana y Cerámica",
      descEn:
        "Custom-shaded to match your natural tooth structure perfectly. Offers natural translucency and stain resistance.",
      descEs:
        "Personalizado para igualar perfectamente la estructura dental natural. Ofrece traslucidez y resistencia a manchas.",
    },
    {
      nameEn: "Composite Resin",
      nameEs: "Resina Compuesta",
      descEn:
        "Bonds directly to the natural tooth structure, offering strong aesthetic integration for moderate repairs.",
      descEs:
        "Se adhiere directamente a la estructura dental natural, ofreciendo excelente integración estética.",
    },
    {
      nameEn: "Biocompatible Gold",
      nameEs: "Oro Biocompatible",
      descEn:
        "The gold standard for longevity and wear resistance. Ideal for posterior molars subjected to high biting forces.",
      descEs:
        "El estándar de oro en longevidad y resistencia. Ideal para molares sometidos a altas fuerzas de mordida.",
    },
  ];

  const procedureSteps = [
    {
      num: "01",
      titleEn: "Tooth Preparation & Digital Impressions",
      titleEs: "Preparación Dental e Impresiones Digitales",
      textEn:
        "Decay or old failing fillings are removed conservatively. We take precise digital impressions without messy putty.",
      textEs:
        "Se remueve la caries o amalgamas antiguas. Tomamos impresiones digitales precisas sin pastas incómodas.",
    },
    {
      num: "02",
      titleEn: "Custom Studio Fabrication",
      titleEs: "Fabricación de Precisión en Laboratorio",
      textEn:
        "Your restoration is solid-milled from high-grade ceramic or gold to match your exact dental bite and anatomy.",
      textEs:
        "Su restauración se milling desde una sola pieza de cerámica o oro para adaptarse con precisión a su mordida.",
    },
    {
      num: "03",
      titleEn: "Permanent Bonding & Polishing",
      titleEs: "Adhesión Permanente y Pulido",
      textEn:
        "The custom inlay/onlay is permanently bonded, strengthening the tooth by up to 75% and polished seamlessly.",
      textEs:
        "La pieza se adhiere permanentemente, fortaleciendo el diente hasta un 75% con un acabado pulido perfecto.",
    },
  ];

  return (
    <main className="bg-[#FBFBFA] text-[#1A1A1A] min-h-screen relative">
      {/* JSON-LD Structured Data for Local SEO & Dental Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            name: "Dental Inlays and Onlays",
            medicalSpecialty: "Restorative Dentistry",
            procedureType: "NonInvasiveProcedure",
            bodyLocation: "Mouth",
            description:
              "Conservative and durable indirect restorations for teeth damaged by decay or fracture in Tribeca, NYC.",
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
            src="/servicePage/service4.webp"
            alt="Dental Inlays and Onlays Tribeca NYC"
            fill
            priority
            className="object-cover object-center brightness-[0.45] contrast-[1.1]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50" />
        </div>

        <div className="relative z-10 max-w-4xl text-left">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.5em] text-[#C5A059] font-bold block mb-4">
            {isEs
              ? "Odontología Restauradora Conservadora"
              : "Conservative Restorative Dentistry"}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-ddin font-bold tracking-tight uppercase leading-[1.05] text-white mb-6">
            {isEs
              ? "Incrustaciones Inlays y Onlays"
              : "Dental Inlays & Onlays"}
          </h1>
          <p className="text-base md:text-xl font-light leading-relaxed text-neutral-200 max-w-2xl font-brandon mb-8">
            {isEs
              ? "Soluciones duraderas y hechas a medida para dientes con daño moderado. Preserve la estructura natural de su diente con precisión estética en Tribeca, NYC."
              : "Bespoke, long-lasting indirect restorations for moderately damaged teeth. Preserve maximum natural tooth structure with precision engineering in Lower Manhattan."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToId("leadForm")}
              className="px-10 py-4 bg-[#C5A059] hover:bg-white text-black font-bold uppercase tracking-[0.3em] text-[11px] transition-all duration-300"
            >
              {isEs ? "Reservar Consulta" : "Book Consultation"}
            </button>
            <button
              onClick={() => scrollToId("details")}
              className="px-10 py-4 border border-white/40 hover:border-[#C5A059] text-white font-bold uppercase tracking-[0.3em] text-[11px] transition-all duration-300"
            >
              {isEs ? "Descubrir Tratamiento" : "Explore Treatment"}
            </button>
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL OVERVIEW */}
      <section id="details" className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-[0.4em] font-bold block mb-3">
              01 // THE MIDDLE GROUND
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light leading-tight mb-8">
              {isEs
                ? "Más fuerte que un empaste. Más conservador que una corona."
                : "Stronger than a filling. More conservative than a crown."}
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed text-base md:text-lg mb-6">
              {isEs
                ? "Las incrustaciones inlays y onlays son restauraciones indirectas diseñadas en laboratorio para reparar dientes con caries moderadas o fracturas. Permiten conservar la mayor cantidad de estructura dental sana mientras devuelven la fuerza y estética original."
                : "Dental inlays and onlays are indirect restorations crafted from solid porcelain, gold, or composite resin. They fit precisely into damaged areas where standard fillings are insufficient, but full-coverage crowns would require unnecessary reduction of healthy enamel."}
            </p>
            <ul className="space-y-3 font-brandon text-sm text-neutral-800 font-medium pt-2">
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs
                  ? "Aumenta la fuerza del diente hasta en un 75%"
                  : "Increases structural tooth strength by up to 75%"}
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs
                  ? "Ajuste milimétrico a medida contra bacterias"
                  : "Custom laboratory fit sealed against recurrent decay"}
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs
                  ? "Durabilidad estimada de 10 a 30+ años"
                  : "Expected lifespan of 10 to 30+ years with proper care"}
              </li>
            </ul>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/5] bg-neutral-900 overflow-hidden shadow-2xl border border-black/5">
            <Image
              src="/servicePage/service.webp"
              alt="Tribeca Dental Studio Restorative Suite"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* 3. INLAY VS ONLAY INTERACTIVE COMPARISON */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white border-y border-black/10">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#C5A059] font-bold block mb-2">
            COMPARATIVE ANALYSIS
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light uppercase tracking-tight">
            Inlay vs. Onlay: Understanding the Difference
          </h2>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("inlay")}
            className={`px-8 py-3 text-xs uppercase tracking-[0.3em] transition-all ${
              activeTab === "inlay"
                ? "bg-[#0B0B0B] text-white border border-[#0B0B0B]"
                : "border border-neutral-300 text-neutral-500 hover:border-black"
            }`}
          >
            Dental Inlay
          </button>
          <button
            onClick={() => setActiveTab("onlay")}
            className={`px-8 py-3 text-xs uppercase tracking-[0.3em] transition-all ${
              activeTab === "onlay"
                ? "bg-[#0B0B0B] text-white border border-[#0B0B0B]"
                : "border border-neutral-300 text-neutral-500 hover:border-black"
            }`}
          >
            Dental Onlay (Partial Crown)
          </button>
        </div>

        {/* Dynamic Display Card */}
        <div className="max-w-4xl mx-auto bg-[#FBFBFA] p-8 md:p-12 border border-black/5 shadow-sm">
          {activeTab === "inlay" ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <span className="text-xs font-mono text-[#C5A059] block font-bold">
                FITS WITHIN THE CUSPS
              </span>
              <h3 className="text-2xl font-serif">What is a Dental Inlay?</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                An inlay is custom-milled to fit precisely inside the indented chewing surface of a tooth (between the pointed projections or cusps). Unlike a direct filling that shrinks slightly as it cures, an inlay is crafted as a single solid piece for superior seal and strength.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <span className="text-xs font-mono text-[#C5A059] block font-bold">
                COVERS ONE OR MORE CUSPS
              </span>
              <h3 className="text-2xl font-serif">What is a Dental Onlay?</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                An onlay is a larger restoration extending over one or more cusps of the tooth. Frequently termed a “partial crown,” onlays rebuild significant structural damage on molars without forcing the doctor to grind down healthy outer tooth enamel.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* 4. MATERIALS & PROCEDURE STEPS */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#C5A059] font-bold block mb-2">
            MATERIALS & CRAFTSMANSHIP
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light uppercase">
            Bespoke Material Selection
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
          {materials.map((m, idx) => (
            <div key={idx} className="bg-white p-8 border border-black/5 shadow-sm">
              <span className="text-xs font-mono text-[#C5A059] block mb-4">
                0{idx + 1} //
              </span>
              <h3 className="text-xl font-serif mb-3">
                {isEs ? m.nameEs : m.nameEn}
              </h3>
              <p className="text-neutral-500 font-light text-sm leading-relaxed">
                {isEs ? m.descEs : m.descEn}
              </p>
            </div>
          ))}
        </div>

        <div className="border-t border-black/10 pt-20">
          <div className="mb-16">
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#C5A059] font-bold block mb-2">
              THE TWO-VISIT PROCESS
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light uppercase">
              Step-by-Step Procedure
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {procedureSteps.map((step, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-2xl font-mono text-[#C5A059] mb-4 font-bold">
                  {step.num}
                </span>
                <h3 className="text-xl font-serif mb-3">
                  {isEs ? step.titleEs : step.titleEn}
                </h3>
                <p className="text-neutral-500 font-light text-sm leading-relaxed">
                  {isEs ? step.textEs : step.textEn}
                </p>
              </div>
            ))}
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
            ? "Restaure su Sonrisa con Precisión"
            : "Restore Strength & Precision to Your Smile"}
        </h2>
        <p className="text-base md:text-lg font-serif italic text-neutral-400 max-w-xl mx-auto mb-8 font-light">
          {isEs
            ? "Reserve una consulta con nuestro equipo multiespecializado en Lower Manhattan."
            : "Schedule your consultation for custom inlays or onlays with our multi-specialty team in Lower Manhattan."}
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