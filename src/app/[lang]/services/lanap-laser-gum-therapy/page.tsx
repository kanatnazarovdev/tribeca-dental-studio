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

export default function LanapLaserTherapyPage({ params }: PageProps) {
  const { lang } = use(params);
  const isEs = lang === "es";

  const [activeTab, setActiveTab] = useState<"lanap" | "traditional" | "regeneration">("lanap");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const procedureFeatures = [
    {
      num: "01",
      titleEn: "FDA-Cleared Bone Regeneration",
      titleEs: "Regeneración Ósea Aprobada por FDA",
      descEn:
        "The only laser gum protocol clinically proven to stimulate genuine bone and connective tissue regeneration around natural teeth.",
      descEs:
        "El único protocolo láser probado clínicamente para estimular regeneración de hueso y tejido conectivo alrededor de los dientes.",
    },
    {
      num: "02",
      titleEn: "Zero Scalpels & Zero Sutures",
      titleEs: "Sin Bisturí y Sin Suturas",
      descEn:
        "PerioLase® MVP-7™ selectively vaporizes bacteria and diseased tissue while leaving healthy surrounding gum tissue untouched.",
      descEs:
        "El láser PerioLase® vaporiza bacterias y tejido enfermo dejando intacto el tejido gingival sano circundante.",
    },
    {
      num: "03",
      titleEn: "Minimal Pain & 24-Hour Recovery",
      titleEs: "Mínimo Dolor y Recuperación en 24h",
      descEn:
        "Creates a stable thermal blood clot that acts as a natural seal, drastically minimizing post-op discomfort and swelling.",
      descEs:
        "Crea un coágulo térmico estable que actúa como sello natural, minimizando el dolor y la inflamación postoperatoria.",
    },
    {
      num: "04",
      titleEn: "Saves Severely Loose Teeth",
      titleEs: "Salva Dientes Severamente Flojos",
      descEn:
        "Reattaches gum tissue to clean root surfaces, restoring stability to teeth that would otherwise require extraction.",
      descEs:
        "Vuelve a adherir el tejido a la raíz, restaurando la estabilidad de dientes que de otro modo requerirían extracción.",
    },
  ];

  const steps = [
    {
      num: "01",
      titleEn: "Probing & Laser Micro-Decontamination",
      titleEs: "Sondaje y Microdesinfección Láser",
      textEn:
        "Pocket depths are mapped. A thin laser fiber targets and vaporizes subgingival bacteria and infected pocket lining.",
      textEs:
        "Se miden las bolsas. Una fibra láser delgada vaporiza las bacterias subgingivales y el tejido infectado.",
    },
    {
      num: "02",
      titleEn: "Ultrasonic Calculus Removal",
      titleEs: "Remoción Ultrasónica de Sarro",
      textEn:
        "Specialized ultrasonic scalers remove hardened tartar deposits from root surfaces without cutting gum margins.",
      textEs:
        "Raspadores ultrasónicos eliminan los depósitos de sarro endurecido en las raíces sin cortar el borde gingival.",
    },
    {
      num: "03",
      titleEn: "Stable Clot Formation & Reattachment",
      titleEs: "Formación de Coágulo y Reorientación",
      textEn:
        "A second laser pass creates a fibrin clot seal that bonds gum tissue to the root surface and triggers bone growth.",
      textEs:
        "Un segundo paso con el láser crea un sello de coágulo de fibrina que adhiere la encía a la raíz y estimula el hueso.",
    },
    {
      num: "04",
      titleEn: "Occlusal Bite Adjustment",
      titleEs: "Ajuste de Mordida Oclusal",
      textEn:
        "Bite pressure is adjusted to eliminate excessive traumatic force, allowing teeth to heal quietly without stress.",
      textEs:
        "Se ajusta la presión de mordida para eliminar traumatismos y permitir que los dientes cicatricen sin tensión.",
    },
  ];

  const faqs = [
    {
      qEn: "Is the LANAP® laser procedure painful?",
      qEs: "¿Es doloroso el procedimiento láser LANAP®?",
      aEn: "Patients experience minimal discomfort. Targeted local anesthesia keeps you completely comfortable during the procedure. Because there are no scalpel incisions or sutures, post-operative pain and swelling are drastically reduced compared to traditional surgery.",
      aEs: "Los pacientes experimentan una molestia mínima. La anestesia local le mantiene cómodo durante el procedimiento. Al no haber incisiones de bisturí ni suturas, el dolor e inflamación postoperatoria se reducen drásticamente.",
    },
    {
      qEn: "How long does LANAP® treatment and recovery take?",
      qEs: "¿Cuánto tiempo toma el tratamiento y la recuperación?",
      aEn: "LANAP® is typically completed in two 2-hour sessions covering half the mouth each time. Most patients resume their normal working activities within 24 hours with minimal downtime.",
      aEs: "LANAP® se completa típicamente en dos sesiones de 2 horas. La mayoría de los pacientes retoman sus actividades laborales normales en 24 horas con un tiempo de baja mínimo.",
    },
    {
      qEn: "Can LANAP® save teeth that are already loose?",
      qEs: "¿Puede LANAP® salvar dientes que ya están flojos?",
      aEn: "Yes. By stimulating new bone and connective tissue regeneration and eliminating deep bacterial pockets, LANAP® can stabilize compromised teeth and save them from extraction.",
      aEs: "Sí. Al estimular la regeneración de nuevo hueso y tejido conectivo y eliminar bolsas bacterianas profundas, LANAP® puede estabilizar dientes comprometidos y salvarlos de la extracción.",
    },
    {
      qEn: "Is LANAP® covered by dental insurance?",
      qEs: "¿LANAP® está cubierto por el seguro dental?",
      aEn: "Many dental insurance providers cover LANAP® under standard periodontal surgical benefits, similar to conventional osseous surgery. Our administrative concierge team helps maximize your insurance coverage.",
      aEs: "Muchos seguros dentales cubren LANAP® bajo beneficios quirúrgicos periodontales estándar. Nuestro equipo administrativo le ayudará a maximizar su cobertura.",
    },
  ];

  return (
    <main className="bg-[#FBFBFA] text-[#1A1A1A] min-h-screen relative">
      {/* JSON-LD Structured Data for Local SEO & FAQ Page Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "MedicalProcedure",
              name: "LANAP Laser Gum Therapy",
              medicalSpecialty: "Periodontics",
              procedureType: "SurgicalProcedure",
              bodyLocation: "Gums and Periodontal Bone",
              description:
                "FDA-cleared LANAP (Laser-Assisted New Attachment Procedure) for regenerative periodontitis treatment without scalpels or sutures in Tribeca, NYC.",
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
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.qEn,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: f.aEn,
                },
              })),
            },
          ]),
        }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-start bg-black text-white pt-32 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/servicePage/service7.webp"
            alt="LANAP Laser Gum Therapy Tribeca NYC"
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
              ? "Tratamiento Periodontal Regenerativo FDA"
              : "FDA-Cleared Regenerative Periodontics"}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-ddin font-bold tracking-tight uppercase leading-[1.05] text-white mb-6">
            {isEs ? "Terapia Láser LANAP®" : "LANAP® Laser Therapy"}
          </h1>
          <p className="text-base md:text-xl font-light leading-relaxed text-neutral-200 max-w-2xl font-brandon mb-8">
            {isEs
              ? "Regenere el hueso perdido y trate la periodontitis avanzada sin bisturí ni suturas. Tecnología láser PerioLase® en Lower Manhattan."
              : "Regenerate lost bone and reverse severe periodontitis without scalpels or sutures. Certified PerioLase® MVP-7™ laser protocols in Lower Manhattan."}
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
              01 // REVOLUTIONIZING PERIODONTAL REGENERATION
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light leading-tight mb-8">
              {isEs
                ? "Regeneración de hueso y tejido sin bisturí ni suturas."
                : "True bone regeneration without scalpels or stitches."}
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed text-base md:text-lg mb-6">
              {isEs
                ? "El protocolo LANAP® (Procedimiento de Nueva Adhesión Asistido por Láser) es la única terapia láser aprobada por la FDA científicamente demostrada para regenerar hueso destruido por la periodontitis. A diferencia de la cirugía convencional que recorta encía sana, LANAP® vaporiza únicamente las bacterias patógenas manteniendo intacto el tejido sano."
                : "The patented LANAP® protocol (Laser-Assisted New Attachment Procedure) represents a paradigm shift in periodontics. Utilizing the PerioLase® MVP-7™ laser, LANAP selectively targets subgingival bacteria and infected tissue while triggering your body's natural capacity to regenerate new bone, cementum, and periodontal ligament around natural teeth."}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-brandon text-sm text-neutral-800 font-medium pt-2">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Aprobado por la FDA para regeneración ósea" : "FDA-cleared for true bone regeneration"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Sin cortes de bisturí ni puntos de sutura" : "Zero scalpel cuts & zero uncomfortable stitches"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Retorno a actividades diarias en 24 horas" : "Return to work within 24 hours"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Especialistas certificados en protocolo LANAP®" : "Certified LANAP® clinician specialist team"}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/5] bg-neutral-900 overflow-hidden shadow-2xl border border-black/5">
            <Image
              src="/photo2.JPG"
              alt="Tribeca Dental Studio LANAP Suite"
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
              Why LANAP® Superiority Matters
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

      {/* 4. COMPARISON TAB (LANAP vs TRADITIONAL SURGERY) */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#C5A059] font-bold block mb-2">
            SURGICAL COMPARISON
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light uppercase">
            LANAP® vs. Traditional Osseous Surgery
          </h2>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab("lanap")}
            className={`px-6 py-3 text-xs uppercase tracking-[0.2em] transition-all ${
              activeTab === "lanap"
                ? "bg-[#0B0B0B] text-white border border-[#0B0B0B]"
                : "border border-neutral-300 text-neutral-500 hover:border-black"
            }`}
          >
            LANAP® Regenerative Laser
          </button>
          <button
            onClick={() => setActiveTab("traditional")}
            className={`px-6 py-3 text-xs uppercase tracking-[0.2em] transition-all ${
              activeTab === "traditional"
                ? "bg-[#0B0B0B] text-white border border-[#0B0B0B]"
                : "border border-neutral-300 text-neutral-500 hover:border-black"
            }`}
          >
            Traditional Scalpel Surgery
          </button>
          <button
            onClick={() => setActiveTab("regeneration")}
            className={`px-6 py-3 text-xs uppercase tracking-[0.2em] transition-all ${
              activeTab === "regeneration"
                ? "bg-[#0B0B0B] text-white border border-[#0B0B0B]"
                : "border border-neutral-300 text-neutral-500 hover:border-black"
            }`}
          >
            Regenerative Science
          </button>
        </div>

        {/* Dynamic Card Display */}
        <div className="bg-white p-8 md:p-12 border border-black/10 shadow-sm min-h-[260px]">
          {activeTab === "lanap" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <span className="text-xs font-mono text-[#C5A059] font-bold block">MINIMALLY INVASIVE & ADDITIVE</span>
              <h3 className="text-2xl font-serif">LANAP® Protocol</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                An additive procedure that targets only infected tissue, preserves healthy gum height, stimulates natural bone growth, and seals pockets with a natural blood clot without scalpels, sutures, or gum recession.
              </p>
            </motion.div>
          )}

          {activeTab === "traditional" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <span className="text-xs font-mono text-[#C5A059] font-bold block">SUBTRACTIVE CONVENTIONAL SURGERY</span>
              <h3 className="text-2xl font-serif">Traditional Osseous Surgery</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                Involves cutting open gum tissue with scalpels to mechanically scrape bone and cut away healthy gum height to reduce pocket depth. Often leads to exposed root sensitivity, visible gum recession, and lengthy recovery.
              </p>
            </motion.div>
          )}

          {activeTab === "regeneration" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <span className="text-xs font-mono text-[#C5A059] font-bold block">CLINICALLY PROVEN HISTOLOGY</span>
              <h3 className="text-2xl font-serif">True Periodontal Regeneration</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                Human histological studies confirm that LANAP® achieves true regeneration of functional periodontal ligament, new cementum, and new alveolar bone where disease previously destroyed natural tooth attachment.
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
              LANAP® PROTOCOL PATHWAY
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light uppercase">
              Step-by-Step Laser Procedure
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

      {/* 6. FREQUENTLY ASKED QUESTIONS */}
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

      {/* 7. FOOTER CALL TO ACTION */}
      <section className="bg-black text-white py-24 px-6 text-center relative z-20">
        <p className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] mb-4">
          {isEs ? "TRIBECA • NUEVA YORK" : "TRIBECA • NEW YORK"}
        </p>
        <h2 className="text-3xl md:text-5xl font-ddin uppercase font-bold mb-6">
          {isEs
            ? "Regenere su Salud Gingival con Láser LANAP®"
            : "Regenerate Your Gum Health with LANAP® Laser Precision"}
        </h2>
        <p className="text-base md:text-lg font-serif italic text-neutral-400 max-w-xl mx-auto mb-8 font-light">
          {isEs
            ? "Agende una consulta de terapia láser LANAP® con nuestros periodoncistas certificados en Lower Manhattan."
            : "Schedule your consultation for FDA-cleared LANAP® laser therapy with our certified clinicians in Lower Manhattan today."}
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