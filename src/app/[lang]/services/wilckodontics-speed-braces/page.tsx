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

export default function WilckodonticsSpeedBracesPage({ params }: PageProps) {
  const { lang } = use(params);
  const isEs = lang === "es";

  const [activeTab, setActiveTab] = useState<"aoo" | "conventional" | "grafting">("aoo");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const procedureFeatures = [
    {
      num: "01",
      titleEn: "3x to 4x Faster Alignment",
      titleEs: "Alineación 3 a 4 Veces Más Rápida",
      descEn:
        "Accelerated Osteogenic Orthodontics™ (AOO) reduces treatment timelines from 24 months down to just 6 to 8 months.",
      descEs:
        "Accelerated Osteogenic Orthodontics™ (AOO) reduce el tiempo de tratamiento de 24 meses a solo 6 a 8 meses.",
    },
    {
      num: "02",
      titleEn: "Biological Bone Activation",
      titleEs: "Activación Biológica Ósea",
      descEn:
        "A minimally invasive periodontal procedure temporarily softens surrounding bone tissue to allow rapid tooth movement.",
      descEs:
        "Un procedimiento periodontal mínimamente invasivo suaviza temporalmente el hueso permitiendo un movimiento rápido.",
    },
    {
      num: "03",
      titleEn: "Reinforced Post-Treatment Stability",
      titleEs: "Estabilidad Post-Tratamiento Reforzada",
      descEn:
        "Bone grafting material applied during the procedure hardens around new tooth positions, drastically lowering relapse risk.",
      descEs:
        "El injerto óseo aplicado durante el proceso se endurece alrededor de la nueva posición, reduciendo el riesgo de recaída.",
    },
    {
      num: "04",
      titleEn: "Integrated Specialist Collaboration",
      titleEs: "Colaboración Especializada Integrada",
      descEn:
        "Orthodontic force design and periodontal surgical execution are seamlessly performed together under one roof.",
      descEs:
        "El diseño de fuerzas ortodónticas y la cirugía periodontal se ejecutan de manera integrada bajo un mismo techo.",
    },
  ];

  const steps = [
    {
      num: "01",
      titleEn: "3D CBCT Scan & Bracket Placement",
      titleEs: "Escaneo 3D CBCT y Colocación de Brackets",
      textEn:
        "High-definition 3D imaging maps bone density. Ceramic or metal brackets are placed on your teeth to initiate guidance.",
      textEs:
        "Imágenes 3D mapean la densidad ósea. Se colocan brackets de cerámica o metal para iniciar el guiado.",
    },
    {
      num: "02",
      titleEn: "Minimally Invasive AOO Procedure",
      titleEs: "Procedimiento AOO Mínimamente Invasivo",
      textEn:
        "Our periodontist gently activates surrounding bone under local anesthesia and applies mineralized bone graft material.",
      textEs:
        "Nuestro periodoncista activa suavemente el hueso bajo anestesia local y aplica material de injerto óseo.",
    },
    {
      num: "03",
      titleEn: "Accelerated Bi-Weekly Adjustments",
      titleEs: "Ajustes Bincenales Acelerados",
      textEn:
        "Bi-weekly orthodontic visits capitalize on the temporary metabolic window of rapid, gentle tooth movement.",
      textEs:
        "Citas quincenales aprovechan la ventana metabólica temporal para lograr un movimiento rápido y suave.",
    },
    {
      num: "04",
      titleEn: "Debonding & Retainer Stabilization",
      titleEs: "Retiro de Brackets y Retención",
      textEn:
        "Braces are removed in as little as 6 months. Custom retainers maintain your newly remineralized, reinforced smile.",
      textEs:
        "Los brackets se retiran en solo 6 meses. Retenedores a medida mantienen su sonrisa reforzada y remineralizada.",
    },
  ];

  const faqs = [
    {
      qEn: "Is Wilckodontics® safe?",
      qEs: "¿Es seguro el procedimiento Wilckodontics®?",
      aEn: "Yes. Wilckodontics® (Accelerated Osteogenic Orthodontics) is an FDA-cleared, highly predictable procedure backed by decades of biological research combining proven orthodontic and periodontal surgical principles.",
      aEs: "Sí. Wilckodontics® es un procedimiento aprobado por la FDA y altamente predecible, respaldado por décadas de investigación biológica que combinan ortodoncia y periodoncia.",
    },
    {
      qEn: "How much faster are Wilckodontics® Speed Braces?",
      qEs: "¿Qué tan más rápido es el tratamiento Wilckodontics®?",
      aEn: "Cases that typically require 18 to 24 months with traditional braces can often be completed in just 6 to 8 months due to the temporary state of accelerated bone remodeling.",
      aEs: "Los casos que típicamente requieren de 18 a 24 meses con brackets tradicionales a menudo se completan en solo 6 a 8 meses gracias a la remodelación ósea acelerada.",
    },
    {
      qEn: "Is the surgical procedure painful?",
      qEs: "¿Es doloroso el procedimiento quirúrgico?",
      aEn: "The minor periodontal procedure is performed under effective local anesthesia with optional conscious sedation. Post-operative discomfort is typically mild and easily managed with prescribed or over-the-counter pain medication.",
      aEs: "El procedimiento se realiza bajo anestesia local efectiva con sedación opcional. Las molestias postoperatorias son leves y se manejan fácilmente con analgésicos.",
    },
    {
      qEn: "Who is an ideal candidate for Wilckodontics®?",
      qEs: "¿Quién es un candidato ideal para Wilckodontics®?",
      aEn: "Adults and older teenagers with good general health, healthy gums free of active periodontal disease, and a desire to complete comprehensive orthodontic treatment in a fraction of the time.",
      aEs: "Adultos y adolescentes con buena salud general, encías sanas libres de enfermedad periodontal y el deseo de completar su ortodoncia en una fracción del tiempo habitual.",
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
              name: "Wilckodontics Speed Braces (Accelerated Osteogenic Orthodontics)",
              medicalSpecialty: ["Orthodontics", "Periodontics"],
              procedureType: "SurgicalProcedure",
              bodyLocation: "Jawbone and Teeth",
              description:
                "Accelerated Osteogenic Orthodontics (AOO) combining periodontal bone activation and orthodontics to straighten teeth 3x to 4x faster in Tribeca, NYC.",
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
            src="/servicePage/service10.webp"
            alt="Wilckodontics Speed Braces Tribeca NYC"
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
              ? "Ortodoncia Osteogénica Acelerada AOO™"
              : "Accelerated Osteogenic Orthodontics AOO™"}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-ddin font-bold tracking-tight uppercase leading-[1.05] text-white mb-6">
            {isEs ? "Brackets Rápido Wilckodontics®" : "Wilckodontics® Speed Braces"}
          </h1>
          <p className="text-base md:text-xl font-light leading-relaxed text-neutral-200 max-w-2xl font-brandon mb-8">
            {isEs
              ? "Sumerja su tratamiento de ortodoncia de 2 años a solo 6 a 8 meses. Biología ósea avanzada e integración periodontal en Lower Manhattan."
              : "Compress a 2-year orthodontic sentence down to just 6 to 8 months. Advanced bone biology combined with periodontal precision in Lower Manhattan."}
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
              01 // REVOLUTIONARY ORTHODONTIC SPEED
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light leading-tight mb-8">
              {isEs
                ? "Dientes perfectamente alineados en una fracción del tiempo."
                : "Straighten teeth 3x to 4x faster with bone biology."}
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed text-base md:text-lg mb-6">
              {isEs
                ? "Para muchos adultos y profesionales, el compromiso de llevar brackets durante años es un obstáculo. Wilckodontics® (Ortodoncia Osteogénica Acelerada) combina la ortodoncia con un procedimiento periodontal suave que 'activa' temporalmente el hueso. Esto permite un movimiento rápido y seguro de los dientes en solo 6 a 8 meses."
                : "The primary obstacle for busy adults seeking a perfectly aligned smile is the long timeline required by traditional braces. Wilckodontics® (Accelerated Osteogenic Orthodontics™) leverages natural bone metabolism. By performing a gentle periodontal procedure that temporarily softens surrounding bone tissue, teeth glide rapidly into place in 6 to 8 months rather than 2 years."}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-brandon text-sm text-neutral-800 font-medium pt-2">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Resultados completos en 6 a 8 meses" : "Treatment completed in 6 to 8 months"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "El injerto óseo previene la recaída" : "Bone grafting increases long-term stability"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Aprobado por la FDA y clínicamente probado" : "FDA-cleared, clinically proven protocol"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Sinergia de ortodoncistas y periodoncistas" : "In-house orthodontist & periodontist team"}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/5] bg-neutral-900 overflow-hidden shadow-2xl border border-black/5">
            <Image
              src="/photo3.JPG"
              alt="Tribeca Dental Studio Accelerated Orthodontics Suite"
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
              BIOMECHANICAL ADVANTAGES
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light uppercase tracking-tight">
              Why Choose Wilckodontics® Speed Braces
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

      {/* 4. COMPARISON TAB (WILCKODONTICS VS TRADITIONAL BRACES) */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#C5A059] font-bold block mb-2">
            METHODOLOGY COMPARISON
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light uppercase">
            Wilckodontics® vs. Conventional Orthodontics
          </h2>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab("aoo")}
            className={`px-6 py-3 text-xs uppercase tracking-[0.2em] transition-all ${
              activeTab === "aoo"
                ? "bg-[#0B0B0B] text-white border border-[#0B0B0B]"
                : "border border-neutral-300 text-neutral-500 hover:border-black"
            }`}
          >
            Wilckodontics® Speed Braces
          </button>
          <button
            onClick={() => setActiveTab("conventional")}
            className={`px-6 py-3 text-xs uppercase tracking-[0.2em] transition-all ${
              activeTab === "conventional"
                ? "bg-[#0B0B0B] text-white border border-[#0B0B0B]"
                : "border border-neutral-300 text-neutral-500 hover:border-black"
            }`}
          >
            Conventional Braces
          </button>
          <button
            onClick={() => setActiveTab("grafting")}
            className={`px-6 py-3 text-xs uppercase tracking-[0.2em] transition-all ${
              activeTab === "grafting"
                ? "bg-[#0B0B0B] text-white border border-[#0B0B0B]"
                : "border border-neutral-300 text-neutral-500 hover:border-black"
            }`}
          >
            Bone Grafting Reinforcement
          </button>
        </div>

        {/* Dynamic Card Display */}
        <div className="bg-white p-8 md:p-12 border border-black/10 shadow-sm min-h-[260px]">
          {activeTab === "aoo" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <span className="text-xs font-mono text-[#C5A059] font-bold block">3X TO 4X ACCELERATED TIMELINE</span>
              <h3 className="text-2xl font-serif">Wilckodontics® (AOO™ Protocol)</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                By temporarily softening the alveolar bone surrounding tooth roots, orthodontic wires encounter minimal resistance. Teeth move rapidly and safely into ideal alignment within 6 to 8 months, accompanied by bone grafting for permanent arch stability.
              </p>
            </motion.div>
          )}

          {activeTab === "conventional" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <span className="text-xs font-mono text-[#C5A059] font-bold block">TRADITIONAL 2-YEAR TIMELINE</span>
              <h3 className="text-2xl font-serif">Conventional Orthodontics</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                Relies solely on continuous physical pressure against dense, rigid bone tissue. Teeth remodel slowly over 18 to 24 months, with higher rates of post-treatment relapse if retainers are not worn meticulously.
              </p>
            </motion.div>
          )}

          {activeTab === "grafting" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <span className="text-xs font-mono text-[#C5A059] font-bold block">PERMANENT ARCH STRENGTHENING</span>
              <h3 className="text-2xl font-serif">AOO Bone Augmentation</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                During the AOO procedure, mineralized bone grafting material is placed over the activated jawbone. As teeth align, the graft remineralizes into dense, healthy bone that provides greater structural support than before treatment.
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
              ACCELERATED PATHWAY
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light uppercase">
              Step-by-Step Treatment Journey
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
            ? "Alinee su Sonrisa en Solo 6 a 8 Meses"
            : "Transform Your Smile in Just 6 to 8 Months"}
        </h2>
        <p className="text-base md:text-lg font-serif italic text-neutral-400 max-w-xl mx-auto mb-8 font-light">
          {isEs
            ? "Agende una consulta para el sistema Wilckodontics® con nuestro equipo multidisciplinario en Lower Manhattan."
            : "Schedule your consultation for Wilckodontics® Speed Braces with our specialist team in Lower Manhattan today."}
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