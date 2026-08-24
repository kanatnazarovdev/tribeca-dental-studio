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

export default function OralSurgeryPage({ params }: PageProps) {
  const { lang } = use(params);
  const isEs = lang === "es";

  const [activeTab, setActiveTab] = useState<"extractions" | "wisdom" | "sedation">("extractions");

  const procedureFeatures = [
    {
      num: "01",
      titleEn: "Minimally Invasive Extractions",
      titleEs: "Extracciones Mínimamente Invasivas",
      descEn:
        "Precise techniques and gentle instrumentation preserve surrounding jawbone and soft tissue during tooth removal.",
      descEs:
        "Técnicas precisas e instrumental suave preservan el hueso y tejido blando circundante durante la extracción.",
    },
    {
      num: "02",
      titleEn: "Specialized Wisdom Tooth Care",
      titleEs: "Atención Especializada en Cordales",
      descEn:
        "Safe, efficient removal of impacted or partially erupted wisdom teeth to prevent infection and crowding.",
      descEs:
        "Extracción segura y eficiente de muelas del juicio impactadas para prevenir infecciones y apiñamiento.",
    },
    {
      num: "03",
      titleEn: "Tailored Sedation Options",
      titleEs: "Opciones de Sedación A Medida",
      descEn:
        "From local anesthesia and nitrous oxide to IV sedation supervised by board-certified anesthesiologists.",
      descEs:
        "Desde anestesia local y gas de la risa hasta sedación intravenosa supervisada por anestesiólogos certificados.",
    },
    {
      num: "04",
      titleEn: "3D CBCT Surgical Planning",
      titleEs: "Planificación Quirúrgica 3D CBCT",
      descEn:
        "High-definition 3D imaging maps nerve pathways and root architecture for predictable, safe surgical execution.",
      descEs:
        "Imágenes 3D de alta definición mapean nervios y estructuras radiculares para un procedimiento seguro y predecible.",
    },
  ];

  const steps = [
    {
      num: "01",
      titleEn: "3D Scanning & Consultation",
      titleEs: "Escaneo 3D y Consulta",
      textEn:
        "We perform CBCT digital imaging and review your medical history to map nerve structures and design a custom surgical plan.",
      textEs:
        "Realizamos escaneos 3D CBCT y revisamos su historial médico para mapear estructuras nerviosas y diseñar su plan quirúrgico.",
    },
    {
      num: "02",
      titleEn: "Personalized Sedation",
      titleEs: "Sedación Personalizada",
      textEn:
        "Anesthesia is administered based on your comfort needs, ensuring a completely relaxed, pain-free surgical experience.",
      textEs:
        "La anestesia se administra según su nivel de confort, garantizando una experiencia quirúrgica relajada e indolora.",
    },
    {
      num: "03",
      titleEn: "Microsurgical Procedure",
      titleEs: "Procedimiento Microquirúrgico",
      textEn:
        "Our oral surgeons utilize advanced, gentle surgical tools to perform extractions or corrections with minimal trauma.",
      textEs:
        "Nuestros cirujanos emplean instrumental quirúrgico avanzado para realizar extracciones con el mínimo trauma tisular.",
    },
    {
      num: "04",
      titleEn: "Guided Aftercare & Healing",
      titleEs: "Cuidado Posterior Guiado",
      textEn:
        "You receive clear post-op instructions, protective guidelines to prevent dry socket, and direct follow-up support.",
      textEs:
        "Recibe instrucciones postoperatorias claras, pautas para prevenir la alveolitis y seguimiento directo durante la recuperación.",
    },
  ];

  return (
    <main className="bg-[#FBFBFA] text-[#1A1A1A] min-h-screen relative">
      {/* JSON-LD Structured Data for Local SEO & Oral Surgery Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            name: "Oral Surgery Services",
            medicalSpecialty: "Oral and Maxillofacial Surgery",
            procedureType: "SurgicalProcedure",
            bodyLocation: "Mouth and Jaw",
            description:
              "Comprehensive oral surgery, wisdom tooth removal, and surgical extractions performed with 3D CBCT imaging and IV sedation in Tribeca, NYC.",
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
            src="/servicePage/service1.webp"
            alt="Oral Surgery Tribeca NYC"
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
              ? "Cirugía Oral y Maxilofacial Especializada"
              : "Specialized Oral & Maxillofacial Surgery"}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-ddin font-bold tracking-tight uppercase leading-[1.05] text-white mb-6">
            {isEs ? "Cirugía Oral en Tribeca" : "Oral Surgery in Tribeca"}
          </h1>
          <p className="text-base md:text-xl font-light leading-relaxed text-neutral-200 max-w-2xl font-brandon mb-8">
            {isEs
              ? "Extracciones quirúrgicas precisas, remoción de muelas del juicio y cuidados complejos bajo sedación adaptada. Cirugía oral experta en Lower Manhattan."
              : "Precise surgical extractions, wisdom tooth removal, and complex care delivered with advanced 3D imaging and tailored sedation options in Lower Manhattan."}
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
              01 // SPECIALIZED SURGICAL EXCELLENCE
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light leading-tight mb-8">
              {isEs
                ? "Atención quirúrgica de precisión diseñada para su total tranquilidad."
                : "Precision surgical care designed for absolute peace of mind."}
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed text-base md:text-lg mb-6">
              {isEs
                ? "No todas las condiciones dentales pueden resolverse con atención de rutina. En Tribeca Dental Studio, nuestros cirujanos orales cuentan con formación avanzada para manejar desde la extracción de cordales impactadas hasta procedimientos quirúrgicos complejos, utilizando técnicas mínimamente invasivas e imágenes 3D de alta definición."
                : "Not every dental condition can be resolved with routine care. At Tribeca Dental Studio, our oral surgeons possess advanced training to handle complex extractions, impacted wisdom teeth, and structural jaw treatments. We pair state-of-the-art 3D CBCT imaging with tailored sedation to ensure every procedure is comfortable, safe, and efficient."}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-brandon text-sm text-neutral-800 font-medium pt-2">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Extracción experta de muelas del juicio" : "Impacted wisdom tooth extraction"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Planificación guiada por escaneo 3D CBCT" : "3D CBCT guided surgical planning"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Opciones de sedación consciente e IV" : "Conscious & IV sedation available"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Pautas postoperatorias claras y acompañamiento" : "Clear post-op recovery guidance"}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/5] bg-neutral-900 overflow-hidden shadow-2xl border border-black/5">
            <Image
              src="/services/drlewis.jpg"
              alt="Tribeca Dental Studio Oral Surgery Suite"
              fill
              className="object-cover hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* 3. FEATURES GRID */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white border-y border-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#C5A059] font-bold block mb-2">
              SURGICAL ADVANTAGES
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light uppercase tracking-tight">
              Why Choose Our Surgical Team
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

      {/* 4. COMPARISON TAB (SURGICAL MODALITIES) */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#C5A059] font-bold block mb-2">
            SPECIALIZED TREATMENTS
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light uppercase">
            Comprehensive Oral Surgery Services
          </h2>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab("extractions")}
            className={`px-6 py-3 text-xs uppercase tracking-[0.2em] transition-all ${
              activeTab === "extractions"
                ? "bg-[#0B0B0B] text-white border border-[#0B0B0B]"
                : "border border-neutral-300 text-neutral-500 hover:border-black"
            }`}
          >
            Surgical Extractions
          </button>
          <button
            onClick={() => setActiveTab("wisdom")}
            className={`px-6 py-3 text-xs uppercase tracking-[0.2em] transition-all ${
              activeTab === "wisdom"
                ? "bg-[#0B0B0B] text-white border border-[#0B0B0B]"
                : "border border-neutral-300 text-neutral-500 hover:border-black"
            }`}
          >
            Wisdom Tooth Removal
          </button>
          <button
            onClick={() => setActiveTab("sedation")}
            className={`px-6 py-3 text-xs uppercase tracking-[0.2em] transition-all ${
              activeTab === "sedation"
                ? "bg-[#0B0B0B] text-white border border-[#0B0B0B]"
                : "border border-neutral-300 text-neutral-500 hover:border-black"
            }`}
          >
            Sedation & Comfort
          </button>
        </div>

        {/* Dynamic Card Display */}
        <div className="bg-white p-8 md:p-12 border border-black/10 shadow-sm min-h-[260px]">
          {activeTab === "extractions" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <span className="text-xs font-mono text-[#C5A059] font-bold block">SAVING ORAL HEALTH</span>
              <h3 className="text-2xl font-serif">Surgical Tooth Extractions</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                When a tooth cannot be preserved due to extreme decay, fracture, or advanced infection, surgical removal protects adjacent teeth and surrounding bone. Performed gently under local numbing or full sedation to ensure zero pain.
              </p>
            </motion.div>
          )}

          {activeTab === "wisdom" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <span className="text-xs font-mono text-[#C5A059] font-bold block">PREVENTING COMPLICATIONS</span>
              <h3 className="text-2xl font-serif">Wisdom Tooth Removal (3rd Molars)</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                Impacted or partially erupted wisdom teeth often cause localized pain, swelling, cysts, or crowding. Our specialists perform efficient, high-precision extractions to eliminate discomfort and prevent long-term alignment problems.
              </p>
            </motion.div>
          )}

          {activeTab === "sedation" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <span className="text-xs font-mono text-[#C5A059] font-bold block">STRESS-FREE SURGICAL EXPERIENCE</span>
              <h3 className="text-2xl font-serif">Comprehensive Sedation Options</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                We accommodate every level of patient anxiety with options ranging from nitrous oxide (laughing gas) and oral conscious sedatives to deep IV sedation administered and monitored by board-certified anesthesiologists.
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
              SURGICAL PATHWAY
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light uppercase">
              Step-by-Step Surgical Journey
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
            ? "Agende su Consulta de Cirugía Oral"
            : "Schedule Your Surgical Consultation"}
        </h2>
        <p className="text-base md:text-lg font-serif italic text-neutral-400 max-w-xl mx-auto mb-8 font-light">
          {isEs
            ? "Consulte con nuestro equipo de cirujanos orales en Lower Manhattan para una experiencia cómoda y segura."
            : "Consult with our experienced oral surgery team in Lower Manhattan for a safe, stress-free experience."}
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