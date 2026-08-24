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

export default function CrownLengtheningGingivectomyPage({ params }: PageProps) {
  const { lang } = use(params);
  const isEs = lang === "es";

  const [activeTab, setActiveTab] = useState<"gingivectomy" | "lengthening">("gingivectomy");

  const procedureFeatures = [
    {
      num: "01",
      titleEn: "Laser Gingivectomy Precision",
      titleEs: "Precisión en Gingivectomía Láser",
      descEn:
        "Utilizes soft-tissue laser energy to recontour overgrown gums quickly, painlessly, and with zero scalpel bleeding.",
      descEs:
        "Utiliza energía láser para contornear encías excesivas de forma rápida, indolora y sin sangrado.",
    },
    {
      num: "02",
      titleEn: "Esthetic Crown Lengthening",
      titleEs: "Alargamiento Coronario Estético",
      descEn:
        "Exposes hidden, healthy tooth structure by gently reshaping excess gum and underlying bone for a balanced smile.",
      descEs:
        "Expone la estructura dental sana oculta remodelando suavemente el exceso de encía y hueso subyacente.",
    },
    {
      num: "03",
      titleEn: "Restorative Crown Foundation",
      titleEs: "Base para Coronas Restauradoras",
      descEn:
        "Provides necessary tooth exposure to firmly secure dental crowns when deep decay extends below the gum line.",
      descEs:
        "Proporciona la exposición dental necesaria para fijar coronas cuando la caries se extiende bajo la encía.",
    },
    {
      num: "04",
      titleEn: "Instant Sterilization & Fast Healing",
      titleEs: "Esterilización Instantánea y Rápida Curación",
      descEn:
        "Laser energy cauterizes and sterilizes tissue simultaneously, drastically reducing post-procedure downtime and soreness.",
      descEs:
        "El láser cauteriza y esteriliza el tejido simultáneamente, reduciendo drásticamente el tiempo de recuperación.",
    },
  ];

  const steps = [
    {
      num: "01",
      titleEn: "Esthetic Mapping & Analysis",
      titleEs: "Mapeo y Análisis Estético",
      textEn:
        "We evaluate your gingival display and digital scans to determine whether soft tissue, bone, or both require recontouring.",
      textEs:
        "Evaluamos la exposición gingival y escaneos digitales para determinar si se debe remodelar encía, hueso o ambos.",
    },
    {
      num: "02",
      titleEn: "Gentle Local Anesthesia",
      titleEs: "Anestesia Local Suave",
      textEn:
        "Targeted local anesthesia ensures complete pain-free comfort throughout the entire laser procedure.",
      textEs:
        "La anestesia local dirigida garantiza una experiencia completamente indolora durante todo el procedimiento láser.",
    },
    {
      num: "03",
      titleEn: "Laser Tissue Recontouring",
      titleEs: "Remodelado Tisular con Láser",
      textEn:
        "Advanced Fotona lasers sculpture symmetrical gum margins while sterilizing and sealing tissue in real time.",
      textEs:
        "Láseres Fotona esculpen márgenes gingivales simétricos mientras esterilizan y sellan el tejido en tiempo real.",
    },
    {
      num: "04",
      titleEn: "Immediate Reveal & Rapid Recovery",
      titleEs: "Revelación Inmediata y Rápida Recuperación",
      textEn:
        "Your full, natural tooth lengths are revealed immediately. Minor residual tenderness resolves quickly within days.",
      textEs:
        "La longitud natural de sus dientes se revela de inmediato. La leve molestia residual desaparece en pocos días.",
    },
  ];

  return (
    <main className="bg-[#FBFBFA] text-[#1A1A1A] min-h-screen relative">
      {/* JSON-LD Structured Data for Local SEO & Laser Periodontal Surgery */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            name: "Crown Lengthening & Gingivectomy",
            medicalSpecialty: "Periodontics",
            procedureType: "SurgicalProcedure",
            bodyLocation: "Gums and Jawbone",
            description:
              "Advanced laser gingivectomy and esthetic crown lengthening to correct gummy smiles and restore tooth structure in Tribeca, NYC.",
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
            src="/servicePage/service6.webp"
            alt="Crown Lengthening and Gingivectomy Tribeca NYC"
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
              ? "Rediseño Periodontal Láser de Sonrisa"
              : "Laser Periodontal Smile Redesign"}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-ddin font-bold tracking-tight uppercase leading-[1.05] text-white mb-6">
            {isEs ? "Alargamiento Coronario y Gingivectomía" : "Crown Lengthening & Gingivectomy"}
          </h1>
          <p className="text-base md:text-xl font-light leading-relaxed text-neutral-200 max-w-2xl font-brandon mb-8">
            {isEs
              ? "Corrija la sonrisa gingival y revele la belleza natural de sus dientes. Remodelado láser preciso y sin dolor en Tribeca, NYC."
              : "Eliminate excessive gingival display and reveal your full, gorgeous smile. Precise, virtually painless laser gum recontouring in Lower Manhattan."}
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
              01 // UNCOVER YOUR TRUE SMILE
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light leading-tight mb-8">
              {isEs
                ? "Dientes escondidos tras un exceso de encía. Una solución láser simple."
                : "Perfect tooth structure hidden under excess tissue."}
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed text-base md:text-lg mb-6">
              {isEs
                ? "Si siente que sus dientes lucen cortos o sus encías son demasiado prominentes al sonreír, a menudo se debe a un exceso de tejido blando u hueso que oculta esmalte sano. En Tribeca Dental Studio realizamos gingivectomías y alargamientos coronarios con tecnología láser avanzada, logrando resultados simétricos con mínima molestia."
                : "Excessive gingival display—often called a 'gummy smile'—occurs when healthy, full-length tooth structure is concealed beneath an overabundance of gum or bone tissue. Using state-of-the-art soft tissue lasers, we gently reshape the gumline to expose your natural teeth while sterilizing the area for rapid, painless healing."}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-brandon text-sm text-neutral-800 font-medium pt-2">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Gingivectomía láser rápida e indolora" : "Painless, rapid laser gingivectomy"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Esterilización y cauterización al instante" : "Instant tissue sterilization & cauterization"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Base ideal para coronas dentales" : "Essential foundation for deep decay crowns"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Recuperación rápida sin bisturí" : "Fast healing without traditional scalpels"}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/5] bg-neutral-900 overflow-hidden shadow-2xl border border-black/5">
            <Image
              src="/photo3.JPG"
              alt="Tribeca Dental Studio Laser Periodontal Suite"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* 3. FEATURES GRID */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white border-y border-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#C5A059] font-bold block mb-2">
              CLINICAL LASER ADVANTAGES
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light uppercase tracking-tight">
              Precision Gum Recontouring
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {procedureFeatures.map((f, idx) => (
              <div key={idx} className="bg-[#FBFBFA] p-8 border border-black/5 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-[#C5A059] block mb-4 font-bold">
                    {f.num} //
                  </span>
                  <h3 className="text-xl font-serif mb-3">
                    {isEs ? f.titleEs : f.titleEn}
                  </h3>
                  <p className="text-neutral-500 font-light text-sm leading-relaxed font-brandon">
                    {isEs ? f.descEs : f.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMPARISON TAB (GINGIVECTOMY vs CROWN LENGTHENING) */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#C5A059] font-bold block mb-2">
            PROCEDURAL COMPARISON
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light uppercase">
            Gingivectomy vs. Crown Lengthening
          </h2>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("gingivectomy")}
            className={`px-8 py-3 text-xs uppercase tracking-[0.3em] transition-all ${
              activeTab === "gingivectomy"
                ? "bg-[#0B0B0B] text-white border border-[#0B0B0B]"
                : "border border-neutral-300 text-neutral-500 hover:border-black"
            }`}
          >
            Laser Gingivectomy
          </button>
          <button
            onClick={() => setActiveTab("lengthening")}
            className={`px-8 py-3 text-xs uppercase tracking-[0.3em] transition-all ${
              activeTab === "lengthening"
                ? "bg-[#0B0B0B] text-white border border-[#0B0B0B]"
                : "border border-neutral-300 text-neutral-500 hover:border-black"
            }`}
          >
            Crown Lengthening
          </button>
        </div>

        {/* Dynamic Card Display */}
        <div className="bg-white p-8 md:p-12 border border-black/10 shadow-sm min-h-[260px]">
          {activeTab === "gingivectomy" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <span className="text-xs font-mono text-[#C5A059] font-bold block">SOFT TISSUE RECONTOURING</span>
              <h3 className="text-2xl font-serif">Laser Gingivectomy</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                Focuses exclusively on trimming and reshaping excess soft gum tissue. Performed almost exclusively with our advanced soft-tissue laser, it instantly cauterizes tissue, prevents bleeding, and eliminates gummy smiles when bone levels are already ideal.
              </p>
            </motion.div>
          )}

          {activeTab === "lengthening" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <span className="text-xs font-mono text-[#C5A059] font-bold block">SOFT TISSUE & BONE ADJUSTMENT</span>
              <h3 className="text-2xl font-serif">Esthetic & Restorative Crown Lengthening</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                Involves recontouring both gum tissue and a minor amount of underlying bone to expose healthy tooth structure. Essential for treating gummy smiles with deep bone coverage or securing dental crowns when tooth decay extends beneath the gumline.
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
              THE LASER PATHWAY
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light uppercase">
              Step-by-Step Procedure
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
            ? "Revele la Belleza Natural de su Sonrisa"
            : "Reveal Your Full, Gorgeous Natural Smile"}
        </h2>
        <p className="text-base md:text-lg font-serif italic text-neutral-400 max-w-xl mx-auto mb-8 font-light">
          {isEs
            ? "Agende su consulta para alargamiento coronario o gingivectomía láser en nuestro estudio de Lower Manhattan."
            : "Schedule your consultation for laser gingivectomy or crown lengthening in Lower Manhattan today."}
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