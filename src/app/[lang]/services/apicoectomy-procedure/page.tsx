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

export default function ApicoectomyPage({ params }: PageProps) {
  const { lang } = use(params);
  const isEs = lang === "es";



  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const apicoectomyBenefits = [
    {
      num: "01",
      titleEn: "Natural Tooth Preservation",
      titleEs: "Preservación del Diente Natural",
      descEn:
        "Saves your natural tooth structure from extraction when a traditional root canal treatment has failed.",
      descEs:
        "Salva la estructura de su diente natural evitando la extracción cuando una endodoncia previa ha fallado.",
    },
    {
      num: "02",
      titleEn: "Endodontic Microsurgery",
      titleEs: "Microcirugía Endodóntica",
      descEn:
        "Targeted resecting of the infected root tip (apex) using high-resolution 3D CBCT mapping and microscopic precision.",
      descEs:
        "Resección dirigida del ápice radicular infectado utilizando mapeo 3D CBCT de alta resolución y precisión microscópica.",
    },
    {
      num: "03",
      titleEn: "Biocompatible Root-End Seal",
      titleEs: "Sellado Apical Biocompatible",
      descEn:
        "Seals the root-end with specialized retrofill material to permanently eliminate bacteria and persistent pain.",
      descEs:
        "Sella el extremo radicular con material retrógrado biocompatible para eliminar bacterias y dolor de forma permanente.",
    },
    {
      num: "04",
      titleEn: "Over 90% Success Rate",
      titleEs: "Tasa de Éxito Superior al 90%",
      descEn:
        "Modern ultrasonic instruments deliver a predictable, minimally invasive procedure to protect neighboring bone.",
      descEs:
        "Instrumentos ultrasónicos modernos brindan un procedimiento predecible y mínimamente invasivo que protege el hueso.",
    },
  ];

  const procedureSteps = [
    {
      num: "01",
      titleEn: "Targeted Local Anesthesia & Access",
      titleEs: "Anestesia Local Dirigida y Acceso",
      textEn:
        "The area is numbed completely. A small, micro-incision is made in the gum tissue near the root to expose the underlying bone.",
      textEs:
        "Se adormece el área por completo. Se realiza una microincisión en la encía cerca de la raíz para exponer el hueso.",
    },
    {
      num: "02",
      titleEn: "Root-End Resection (Apicoectomy)",
      titleEs: "Resección Apical (Apicoectomía)",
      textEn:
        "The endodontist carefully removes the infected tissue and the last few millimeters of the root tip (apex).",
      textEs:
        "El endodoncista remueve cuidadosamente el tejido infectado y los últimos milímetros de la punta radicular (ápice).",
    },
    {
      num: "03",
      titleEn: "Retrofill Biocompatible Seal",
      titleEs: "Sellado Retrógrado Biocompatible",
      textEn:
        "The end of the root canal is cleaned and sealed with a biocompatible retrofill material to prevent future infection.",
      textEs:
        "El extremo del conducto se limpia y se sella con un material retrógrado biocompatible para evitar futuras infecciones.",
    },
    {
      num: "04",
      titleEn: "Microsurgical Suturing & Recovery",
      titleEs: "Sutura Microquirúrgica y Recuperación",
      textEn:
        "Gum tissue is repositioned and secured with tiny sutures. Most patients return to normal activities in 24–48 hours.",
      textEs:
        "El tejido gingival se reposiciona y sutura. La mayoría de los pacientes vuelven a sus actividades en 24-48 horas.",
    },
  ];

  const faqs = [
    {
      qEn: "Is an apicoectomy painful?",
      qEs: "¿Es dolorosa una apicoectomía?",
      aEn: "No. The procedure itself is completely painless due to effective local anesthesia and optional sedation. Any minor post-operative swelling or discomfort is easily managed with prescribed or over-the-counter pain relievers.",
      aEs: "No. El procedimiento es completamente indoloro gracias a la anestesia local efectiva y la sedación opcional. Las molestias postoperatorias menores se manejan fácilmente con medicamentos.",
    },
    {
      qEn: "How long does recovery take?",
      qEs: "¿Cuánto tiempo toma la recuperación?",
      aEn: "Most patients resume normal day-to-day activities within 24 to 48 hours. The gum tissue fully heals over a couple of weeks, while bone regeneration continues over the following months.",
      aEs: "La mayoría de los pacientes retoman sus actividades normales en 24 a 48 horas. Las encías cicatrizan en un par de semanas, mientras que el hueso se regenera en los meses siguientes.",
    },
    {
      qEn: "What are the alternatives to an apicoectomy?",
      qEs: "¿Cuáles son las alternativas a una apicoectomía?",
      aEn: "The primary alternatives are attempting conventional root canal retreatment (if anatomical access permits) or tooth extraction followed by a dental implant, bridge, or partial restoration.",
      aEs: "Las alternativas principales son intentar un retratamiento de endodoncia convencional o la extracción del diente seguida de un implante dental, puente o prótesis parcial.",
    },
  ];

  return (
    <main className="bg-[#FBFBFA] text-[#1A1A1A] min-h-screen relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            name: "Apicoectomy Procedure (Root-End Surgery)",
            medicalSpecialty: "Endodontics",
            procedureType: "SurgicalProcedure",
            bodyLocation: "Tooth Root Apex and Jawbone",
            description:
              "Specialized microsurgical endodontic procedure to treat infection at the root tip and save natural teeth from extraction in Tribeca, NYC.",
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
            src="/servicePage/service3.webp"
            alt="Apicoectomy Procedure Tribeca NYC"
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
              ? "Microcirugía Endodóntica Avanzada"
              : "Advanced Endodontic Microsurgery"}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-ddin font-bold tracking-tight uppercase leading-[1.05] text-white mb-6">
            {isEs ? "Procedimiento de Apicoectomía" : "Apicoectomy Procedure"}
          </h1>
          <p className="text-base md:text-xl font-light leading-relaxed text-neutral-200 max-w-2xl font-brandon mb-8">
            {isEs
              ? "Salve su diente natural cuando la endodoncia tradicional no es suficiente. Microcirugía de precisión radicular en Lower Manhattan."
              : "Save your natural tooth when traditional root canals fall short. Precision root-end microsurgery to eliminate persistent infection in Lower Manhattan."}
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
              01 // PRESERVING YOUR NATURAL SMILE
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light leading-tight mb-8">
              {isEs
                ? "La última línea de defensa antes de la extracción dental."
                : "The ultimate line of defense before tooth extraction."}
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed text-base md:text-lg mb-6">
              {isEs
                ? "Cuando una endodoncia previa no logra eliminar una infección profunda o existen complicaciones anatómicas como conductos calcificados, la apicoectomía permite tratar el problema desde el ápice de la raíz. Removemos la punta infectada y la sellamos permanentemente sin extraer el diente."
                : "When a conventional root canal is unable to resolve an infection due to narrow canals, calcification, or persistent apical lesions, an apicoectomy directly accesses the root apex. By removing only the infected root tip and placing a biocompatible retrofill seal, we preserve your natural tooth for a lifetime."}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-brandon text-sm text-neutral-800 font-medium pt-2">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Evaluación con Tomografía 3D CBCT" : "3D CBCT microscopic imaging"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Tasa de éxito superior al 90%" : "Greater than 90% success rate"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Tratamiento completo en 60-90 minutos" : "60 to 90 minute targeted procedure"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Sellado retrógrado biocompatible" : "Biocompatible retrofill root seal"}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/5] bg-neutral-900 overflow-hidden shadow-2xl border border-black/5">
            <Image
              src="/photo1.JPG"
              alt="Tribeca Dental Studio Endodontic Suite"
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
              CLINICAL ADVANTAGES
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light uppercase tracking-tight">
              Why Choose An Apicoectomy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {apicoectomyBenefits.map((b, idx) => (
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

      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0B0B0B] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#C5A059] font-bold block mb-2">
              THE SURGICAL PATHWAY
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light uppercase">
              Step-by-Step Apicoectomy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {procedureSteps.map((step, idx) => (
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

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#C5A059] font-bold block mb-2">
            PATIENT INQUIRIES
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light uppercase">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-black/10 bg-white p-6 cursor-pointer transition-all duration-300"
              onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-serif font-light">
                  {isEs ? faq.qEs : faq.qEn}
                </h3>
                <span className="text-xl font-mono text-[#C5A059]">
                  {activeFaq === idx ? "-" : "+"}
                </span>
              </div>
              {activeFaq === idx && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-4 text-neutral-600 font-light text-sm leading-relaxed font-brandon border-t border-black/5 pt-4"
                >
                  {isEs ? faq.aEs : faq.aEn}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black text-white py-24 px-6 text-center relative z-20">
        <p className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] mb-4">
          {isEs ? "TRIBECA • NUEVA YORK" : "TRIBECA • NEW YORK"}
        </p>
        <h2 className="text-3xl md:text-5xl font-ddin uppercase font-bold mb-6">
          {isEs
            ? "Conserve su Diente Natural con Microcirugía"
            : "Save Your Natural Tooth with Precision Microsurgery"}
        </h2>
        <p className="text-base md:text-lg font-serif italic text-neutral-400 max-w-xl mx-auto mb-8 font-light">
          {isEs
            ? "Agende una consulta de apicoectomía con nuestro equipo de endodoncia en Lower Manhattan."
            : "Schedule your consultation for an apicoectomy procedure with our endodontic specialists in Lower Manhattan today."}
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