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

export default function GumDiseaseTreatmentPage({ params }: PageProps) {
  const { lang } = use(params);
  const isEs = lang === "es";

  const [activeTab, setActiveTab] = useState<"scaling" | "twinlight" | "antibiotics">("scaling");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const treatmentFeatures = [
    {
      num: "01",
      titleEn: "Reversible Early Intervention",
      titleEs: "Intervención Temprana Reversible",
      descEn:
        "Detecting and clearing bacterial plaque during gingivitis prevents progression to irreversible periodontitis.",
      descEs:
        "Detectar y eliminar la placa bacteriana durante la gingivitis previene la progresión a periodontitis irreversible.",
    },
    {
      num: "02",
      titleEn: "Fotona TwinLight® Laser Therapy",
      titleEs: "Terapia Láser Fotona TwinLight®",
      descEn:
        "Dual-wavelength laser technology removes diseased tissue and calculus while stimulating natural bone regeneration.",
      descEs:
        "Tecnología láser de doble longitud de onda elimina tejido enfermo y cálculo mientras estimula la regeneración ósea.",
    },
    {
      num: "03",
      titleEn: "Systemic Health Protection",
      titleEs: "Protección de la Salud Sistémica",
      descEn:
        "Managing gum infections reduces systemic risk factors connected to heart disease, diabetes, and joint inflammation.",
      descEs:
        "Controlar las infecciones de las encías reduce riesgos sistémicos vinculados a enfermedades cardíacas y diabetes.",
    },
    {
      num: "04",
      titleEn: "Complete In-House Care",
      titleEs: "Atención Integral en la misma Clínica",
      descEn:
        "All periodontal treatments are provided under one roof by our specialist team without external referrals.",
      descEs:
        "Todos los tratamientos periodontales los realiza nuestro equipo de especialistas bajo el mismo techo.",
    },
  ];

  const steps = [
    {
      num: "01",
      titleEn: "Comprehensive Screening",
      titleEs: "Evaluación y Mapeo Periodontal",
      textEn:
        "We measure pocket depths and capture digital X-rays to assess bone levels and locate hidden subgingival plaque.",
      textEs:
        "Medimos las bolsas periodontales y tomamos radiografías digitales para evaluar los niveles de hueso y placa.",
    },
    {
      num: "02",
      titleEn: "Deep Cleaning (Scaling & Planing)",
      titleEs: "Limpieza Profunda (Raspado y Alisado)",
      textEn:
        "Ultrasonic instruments gently remove hardened tartar from root surfaces and smooth rough areas to deter bacteria.",
      textEs:
        "Instrumentos ultrasónicos remueven el sarro endurecido de las raíces y alisan la superficie para evitar bacterias.",
    },
    {
      num: "03",
      titleEn: "Laser Micro-Decontamination",
      titleEs: "Microdesinfección con Láser",
      textEn:
        "Targeted laser energy sterilizes deep pockets, vaporizes bacteria, and stimulates biostimulative healing factors.",
      textEs:
        "El láser esteriliza bolsas profundas, vaporiza bacterias y estimula los factores de cicatrización y regeneración.",
    },
    {
      num: "04",
      titleEn: "Ongoing Maintenance & Recovery",
      titleEs: "Mantenimiento y Recuperación Continuos",
      textEn:
        "Targeted post-care rinses and scheduled periodontal maintenance keep bacteria below critical threshold limits.",
      textEs:
        "Enjuagues específicos y citas de mantenimiento periodontal mantienen las bacterias bajo control permanente.",
    },
  ];

  const faqs = [
    {
      qEn: "Is gum disease reversible?",
      qEs: "¿Es reversible la enfermedad de las encías?",
      aEn: "Yes, gingivitis (the early stage of gum inflammation) can be fully reversed with professional care and improved oral hygiene. Periodontitis cannot be completely reversed due to bone loss, but it can be managed successfully to save your teeth.",
      aEs: "Sí, la gingivitis se puede revertir por completo con atención profesional. La periodontitis no se puede revertir por completo debido a la pérdida ósea, pero se puede controlar con éxito para conservar sus dientes.",
    },
    {
      qEn: "Does gum disease treatment hurt?",
      qEs: "¿Duele el tratamiento para la enfermedad de las encías?",
      aEn: "Most procedures are performed using effective local anesthesia to keep you completely comfortable. Non-surgical laser therapy also drastically minimizes post-procedure discomfort and speeds up recovery times.",
      aEs: "La mayoría de los procedimientos se realizan con anestesia local para su confort. La terapia láser no quirúrgica también minimiza las molestias posteriores y acelera la recuperación.",
    },
    {
      qEn: "How long does gum disease treatment take?",
      qEs: "¿Cuánto tiempo toma el tratamiento?",
      aEn: "Gingivitis treatment may take only one standard hygiene visit, whereas advanced periodontitis often requires deep scaling or laser therapy across multiple visits followed by quarterly maintenance cleanings.",
      aEs: "El tratamiento de la gingivitis puede requerir solo una sesión de limpieza, mientras que la periodontitis avanzada suele requerir raspado profundo o terapia láser en varias citas.",
    },
    {
      qEn: "Can gum disease affect overall health?",
      qEs: "¿Puede la enfermedad de las encías afectar la salud general?",
      aEn: "Yes. Clinical research from the NIH shows direct links between chronic periodontal infection and systemic conditions like cardiovascular heart disease, diabetes complications, rheumatoid arthritis, and respiratory issues.",
      aEs: "Sí. Investigaciones clínicas del NIH muestran una relación directa entre las infecciones periodontales y problemas sistémicos como enfermedades cardíacas, diabetes y artritis.",
    },
    {
      qEn: "Is gum disease treatment covered by dental insurance?",
      qEs: "¿El tratamiento está cubierto por el seguro dental?",
      aEn: "Many dental insurance plans provide partial or major coverage for periodontal procedures, scaling, and root planing when medically necessary. Our administrative team helps maximize your benefits.",
      aEs: "Muchos planes de seguro dental cubren los procedimientos periodontales, raspados y alisados radiculares cuando son médicamente necesarios. Nuestro equipo le ayudará con sus beneficios.",
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
              name: "Gum Disease Treatment & Periodontal Laser Therapy",
              medicalSpecialty: "Periodontics",
              procedureType: "NonSurgicalProcedure",
              bodyLocation: "Gums and Jawbone",
              description:
                "Comprehensive periodontal treatment, scaling and root planing, and Fotona TwinLight laser therapy for gum disease in Tribeca, NYC.",
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
            src="/servicePage/service4.webp"
            alt="Gum Disease Treatment Tribeca NYC"
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
              ? "Cuidado Periodontal Avanzado en Manhattan"
              : "Advanced Manhattan Periodontal Care"}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-ddin font-bold tracking-tight uppercase leading-[1.05] text-white mb-6">
            {isEs ? "Tratamiento de Encías en Tribeca" : "Gum Disease Treatment in Tribeca"}
          </h1>
          <p className="text-base md:text-xl font-light leading-relaxed text-neutral-200 max-w-2xl font-brandon mb-8">
            {isEs
              ? "Proteja la base de su sonrisa. Raspado profundo, descontaminación láser y terapia Fotona TwinLight® en Lower Manhattan."
              : "Protect the vital foundation of your smile. Comprehensive periodontal therapies, deep cleanings, and Fotona TwinLight® laser care in Lower Manhattan."}
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
              01 // FOUNDATIONAL PERIODONTAL HEALTH
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light leading-tight mb-8">
              {isEs
                ? "Unas encías sanas son el pilar de una sonrisa duradera."
                : "Healthy gums are the foundation of a lifelong smile."}
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed text-base md:text-lg mb-6">
              {isEs
                ? "La enfermedad periodontal es la principal causa de pérdida de piezas dentales en adultos. Comienza como gingivitis reversible con inflamación y sangrado, pero si no se trata a tiempo se convierte en periodontitis, afectando el hueso de soporte. En Tribeca Dental Studio realizamos exámenes periodontales integrales y tratamientos con tecnología láser avanzada para detener la infección."
                : "Periodontal disease is the leading cause of adult tooth loss in the United States. Beginning as reversible gingivitis with inflammation and bleeding gums, untreated bacteria migrate deeper beneath the gumline to cause periodontitis and bone erosion. At Tribeca Dental Studio, our in-house periodontal specialists deliver targeted scaling, root planing, and laser therapy to arrest infection and protect systemic health."}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-brandon text-sm text-neutral-800 font-medium pt-2">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Detección temprana en cada examen" : "Screening at every routine exam"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Terapia láser Fotona TwinLight®" : "Fotona TwinLight® laser therapy"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Raspado profundo e higienización" : "Non-surgical scaling & root planing"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Atención in-house sin referencias externas" : "Complete in-house specialist care"}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/5] bg-neutral-900 overflow-hidden shadow-2xl border border-black/5">
            <Image
              src="/photo1.JPG"
              alt="Tribeca Dental Studio Periodontal Care"
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
              CLINICAL ADVANTAGES
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light uppercase tracking-tight">
              Comprehensive Gum Care Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatmentFeatures.map((f, idx) => (
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

      {/* 4. COMPARISON TAB (TREATMENT OPTIONS) */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#C5A059] font-bold block mb-2">
            PERIODONTAL MODALITIES
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light uppercase">
            Tailored Periodontal Solutions
          </h2>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab("scaling")}
            className={`px-6 py-3 text-xs uppercase tracking-[0.2em] transition-all ${
              activeTab === "scaling"
                ? "bg-[#0B0B0B] text-white border border-[#0B0B0B]"
                : "border border-neutral-300 text-neutral-500 hover:border-black"
            }`}
          >
            Scaling & Root Planing
          </button>
          <button
            onClick={() => setActiveTab("twinlight")}
            className={`px-6 py-3 text-xs uppercase tracking-[0.2em] transition-all ${
              activeTab === "twinlight"
                ? "bg-[#0B0B0B] text-white border border-[#0B0B0B]"
                : "border border-neutral-300 text-neutral-500 hover:border-black"
            }`}
          >
            Fotona TwinLight® Laser
          </button>
          <button
            onClick={() => setActiveTab("antibiotics")}
            className={`px-6 py-3 text-xs uppercase tracking-[0.2em] transition-all ${
              activeTab === "antibiotics"
                ? "bg-[#0B0B0B] text-white border border-[#0B0B0B]"
                : "border border-neutral-300 text-neutral-500 hover:border-black"
            }`}
          >
            Targeted Antibiotics
          </button>
        </div>

        {/* Dynamic Card Display */}
        <div className="bg-white p-8 md:p-12 border border-black/10 shadow-sm min-h-[260px]">
          {activeTab === "scaling" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <span className="text-xs font-mono text-[#C5A059] font-bold block">NON-SURGICAL DEEP CLEANING</span>
              <h3 className="text-2xl font-serif">Scaling and Root Planing</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                Removes hardened plaque and calculus beneath the gumline and smooths root surfaces to prevent future bacterial reattachment. Performed under gentle local anesthesia for maximal comfort.
              </p>
            </motion.div>
          )}

          {activeTab === "twinlight" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <span className="text-xs font-mono text-[#C5A059] font-bold block">ADVANCED DUAL-WAVELENGTH LASER</span>
              <h3 className="text-2xl font-serif">Fotona TwinLight® Laser Therapy</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                Utilizes Nd:YAG laser energy to vaporize diseased epithelial lining and Er:YAG laser energy to gently remove deep calculus. This biostimulative process creates a stable fibrin clot that promotes natural bone regeneration.
              </p>
            </motion.div>
          )}

          {activeTab === "antibiotics" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <span className="text-xs font-mono text-[#C5A059] font-bold block">LOCALIZED MICROBIAL CONTROL</span>
              <h3 className="text-2xl font-serif">Targeted Antibiotic Rinse Therapy</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                Site-specific or systemic antimicrobial rinses and medications eliminate deep, stubborn bacterial colonies in stubborn periodontal pockets to prevent reinfection during recovery.
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
              CLINICAL PATHWAY
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light uppercase">
              Step-by-Step Periodontal Care
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
            ? "Restablezca la Salud de sus Encías"
            : "Restore Your Periodontal Health Today"}
        </h2>
        <p className="text-base md:text-lg font-serif italic text-neutral-400 max-w-xl mx-auto mb-8 font-light">
          {isEs
            ? "Agende una consulta para tratamiento de encías e higiene especializada en Lower Manhattan."
            : "Schedule your consultation for periodontal evaluation and advanced gum disease treatment in Lower Manhattan today."}
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