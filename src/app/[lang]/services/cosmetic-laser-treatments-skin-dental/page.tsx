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

export default function CosmeticLaserTreatmentsPage({ params }: PageProps) {
  const { lang } = use(params);
  const isEs = lang === "es";

  // Resolve bookingUrl whether helper exports a string or function

  const [activeTab, setActiveTab] = useState<"liplase" | "rejuvenation">("liplase");

  const laserFeatures = [
    {
      num: "01",
      titleEn: "Non-Invasive Lip Plumping",
      titleEs: "Relleno de Labios No Invasivo",
      descEn:
        "LipLase™ stimulates natural collagen production using precise laser wavelengths. No needles, injectables, or downtime required.",
      descEs:
        "LipLase™ estimula la producción natural de colágeno mediante longitudes de onda láser. Sin agujas, inyectables ni tiempo de recuperación.",
    },
    {
      num: "02",
      titleEn: "Laser Skin Rejuvenation",
      titleEs: "Rejuvenecimiento Facial Láser",
      descEn:
        "Targeted Fotona facial peels combine intraoral and facial laser energy to diminish wrinkles, sunspots, and fine lines.",
      descEs:
        "Peelings faciales Fotona combinan energía láser intraoral y facial para reducir arrugas, manchas solares y líneas finas.",
    },
    {
      num: "03",
      titleEn: "Gummy Smile Concealment",
      titleEs: "Corrección de Sonrisa Gingival",
      descEn:
        "LipLase™ acts as a gentle, non-surgical alternative or complement to crown lengthening by naturally relaxing lip drape.",
      descEs:
        "LipLase™ actúa como una alternativa suave no quirúrgica a la elongación coronaria al relajar la caída del labio.",
    },
    {
      num: "04",
      titleEn: "Advanced Fotona Technology",
      titleEs: "Tecnología Fotona de Vanguardia",
      descEn:
        "Dual-wavelength hard and soft tissue lasers provide gentle, highly controlled cosmetic precision right in the dental chair.",
      descEs:
        "Láseres Fotona de doble longitud de onda proporcionan precisión cosmética suave y controlada directamente en el sillón dental.",
    },
  ];

  return (
    <main className="bg-[#FBFBFA] text-[#1A1A1A] min-h-screen relative">
      {/* JSON-LD Structured Data for Local SEO & Laser Cosmetic Dentistry */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            name: "Cosmetic Laser Treatments (LipLase & Skin Rejuvenation)",
            medicalSpecialty: "Cosmetic Dentistry",
            procedureType: "NonInvasiveProcedure",
            bodyLocation: "Lips & Face",
            description:
              "Advanced Fotona laser cosmetics, non-injectable LipLase lip plumping, and laser facial peels in Tribeca, NYC.",
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
            src="/servicePage/service7.webp"
            alt="Cosmetic Laser Treatments LipLase Tribeca NYC"
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
              ? "Tratamientos Láser Fotona Avanzados"
              : "Advanced Fotona Laser Cosmetics"}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-ddin font-bold tracking-tight uppercase leading-[1.05] text-white mb-6">
            {isEs ? "Láser Cosmético y LipLase™" : "Cosmetic Laser Treatments"}
          </h1>
          <p className="text-base md:text-xl font-light leading-relaxed text-neutral-200 max-w-2xl font-brandon mb-8">
            {isEs
              ? "Aumente el volumen de sus labios sin agujas y rejuvenezca su piel con láser Fotona. El complemento perfecto para su diseño de sonrisa en Tribeca, NYC."
              : "Enhance lip fullness without needle injectables and rejuvenate your skin with state-of-the-art Fotona laser precision right in our Lower Manhattan studio."}
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
              01 // THE EVOLUTION OF COSMETIC DENTISTRY
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light leading-tight mb-8">
              {isEs
                ? "Estética facial y dental unificadas bajo un mismo techo."
                : "Unifying facial aesthetics and smile design in one visit."}
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed text-base md:text-lg mb-6">
              {isEs
                ? "Los avances en odontología láser permiten ir más allá de los dientes. Empleamos el láser Fotona para ofrecer tratamientos LipLase™ y peelings faciales que estimulan la producción natural de colágeno, reduciendo arrugas y redefiniendo la sonrisa sin agujas ni sustancias químicas agresivas."
                : "Modern laser dentistry allows us to refine your entire smile frame. Using dual-wavelength Fotona laser technology, we offer non-invasive LipLase™ lip plumping and laser facial peels to naturally regenerate collagen, improve skin elasticity, and complement treatments like crown lengthening or teeth whitening."}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-brandon text-sm text-neutral-800 font-medium pt-2">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Sin agujas ni rellenos inyectables" : "Zero needles or chemical dermal fillers"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Estimulación natural de colágeno" : "Natural collagen stimulation"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Ocultamiento de sonrisa gingival" : "Gummy smile framing alternative"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Sesiones rápidas sin tiempo de baja" : "Quick sessions with zero downtime"}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/5] bg-neutral-900 overflow-hidden shadow-2xl border border-black/5">
            <Image
              src="/photo2.JPG"
              alt="Tribeca Dental Studio Cosmetic Suite"
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
              Laser Aesthetics Redefined
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {laserFeatures.map((f, idx) => (
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

      {/* 4. INTERACTIVE TREATMENT COMPARISON (LIPLASE vs REJUVENATION) */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#C5A059] font-bold block mb-2">
            TREATMENT MODALITIES
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light uppercase">
            Fotona Laser Procedures
          </h2>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("liplase")}
            className={`px-8 py-3 text-xs uppercase tracking-[0.3em] transition-all ${
              activeTab === "liplase"
                ? "bg-[#0B0B0B] text-white border border-[#0B0B0B]"
                : "border border-neutral-300 text-neutral-500 hover:border-black"
            }`}
          >
            LipLase™ Plumping
          </button>
          <button
            onClick={() => setActiveTab("rejuvenation")}
            className={`px-8 py-3 text-xs uppercase tracking-[0.3em] transition-all ${
              activeTab === "rejuvenation"
                ? "bg-[#0B0B0B] text-white border border-[#0B0B0B]"
                : "border border-neutral-300 text-neutral-500 hover:border-black"
            }`}
          >
            Fotona Skin Rejuvenation
          </button>
        </div>

        {/* Dynamic Card Display */}
        <div className="bg-white p-8 md:p-12 border border-black/10 shadow-sm min-h-[260px]">
          {activeTab === "liplase" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <span className="text-xs font-mono text-[#C5A059] font-bold block">NON-INJECTABLE LIP ENHANCEMENT</span>
              <h3 className="text-2xl font-serif">LipLase™ Laser Plumping</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                LipLase™ targets the inner and outer lip tissue to stimulate deep collagen synthesis without synthetic fillers. Administered in a series of 4 to 6 weekly treatments followed by 3-month touch-ups, it produces naturally full, youthful lips while concealing excessive gingival display.
              </p>
            </motion.div>
          )}

          {activeTab === "rejuvenation" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <span className="text-xs font-mono text-[#C5A059] font-bold block">INTRAORAL & FACIAL PEEL</span>
              <h3 className="text-2xl font-serif">Laser Skin Rejuvenation & Peel</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                Combining intraoral collagen stimulation with gentle facial laser peels, this procedure removes damaged dermal layers. It reduces fine lines, sunspots, and skin imperfections to deliver radiant, rejuvenated facial skin that perfectly frames your smile.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* 5. FOOTER CALL TO ACTION */}
      <section className="bg-black text-white py-24 px-6 text-center relative z-20">
        <p className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] mb-4">
          {isEs ? "TRIBECA • NUEVA YORK" : "TRIBECA • NEW YORK"}
        </p>
        <h2 className="text-3xl md:text-5xl font-ddin uppercase font-bold mb-6">
          {isEs
            ? "Mejore su Sonrisa y Piel con Láser Cosmético"
            : "Enhance Your Smile & Skin with Laser Precision"}
        </h2>
        <p className="text-base md:text-lg font-serif italic text-neutral-400 max-w-xl mx-auto mb-8 font-light">
          {isEs
            ? "Agende su consulta para LipLase™ y rejuvenecimiento facial en nuestro estudio de Lower Manhattan."
            : "Schedule your consultation for LipLase™ or Fotona laser facial peels in Lower Manhattan today."}
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