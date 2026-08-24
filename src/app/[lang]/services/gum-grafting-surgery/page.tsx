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

export default function GumGraftingPage({ params }: PageProps) {
  const { lang } = use(params);
  const isEs = lang === "es";

  const [activeTab, setActiveTab] = useState<"connective" | "free" | "pedicle">("connective");

  const procedureFeatures = [
    {
      num: "01",
      titleEn: "Root Coverage & Sensitivity Relief",
      titleEs: "Cobertura Radicular y Alivio de Sensibilidad",
      descEn:
        "Covers exposed tooth roots to instantly eliminate painful sensitivity to hot, cold, or sweet temperatures.",
      descEs:
        "Cubre las raíces dentales expuestas para eliminar instantáneamente la sensibilidad dolorosa al frío o calor.",
    },
    {
      num: "02",
      titleEn: "Halts Receding Gum Progression",
      titleEs: "Detiene la Progresión de la Recesión",
      descEn:
        "Rebuilds the protective band of firm gum tissue to stop ongoing tissue wear and underlying jawbone loss.",
      descEs:
        "Reconstruye la banda de tejido gingival firme para detener el desgaste continuo y la pérdida de hueso.",
    },
    {
      num: "03",
      titleEn: "Esthetic Smile Balance",
      titleEs: "Balance Estético de la Sonrisa",
      descEn:
        "Restores a symmetrical, youthful gumline, eliminating the 'long-tooth' appearance caused by receding tissue.",
      descEs:
        "Restaura una línea de encías simétrica y juvenil, eliminando la apariencia de 'dientes largos'.",
    },
    {
      num: "04",
      titleEn: "Root Decay Protection",
      titleEs: "Protección Contra Caries Radiculares",
      descEn:
        "Protects softer root dentin from bacterial invasion, plaque buildup, and aggressive root surface decay.",
      descEs:
        "Protege la dentina radicular blanda de la invasión bacteriana, la placa y las caries de raíz.",
    },
  ];

  const steps = [
    {
      num: "01",
      titleEn: "Site Preparation & Numbing",
      titleEs: "Preparación y Anestesia del Área",
      textEn:
        "Local anesthesia ensures total pain-free comfort. A micro-pouch is carefully created in the receded gum tissue.",
      textEs:
        "La anestesia local garantiza confort sin dolor. Se crea cuidadosamente una microbolsa en la encía retraída.",
    },
    {
      num: "02",
      titleEn: "Precision Graft Harvesting",
      titleEs: "Obtención de Precisión del Injerto",
      textEn:
        "Donor tissue is obtained from the palate or a biocompatible donor source using delicate microsurgical techniques.",
      textEs:
        "El tejido se obtiene del paladar o de una fuente biocompatible mediante técnicas microquirúrgicas.",
    },
    {
      num: "03",
      titleEn: "Graft Placement & Micro-Suturing",
      titleEs: "Colocación y Micro-Sutura del Injerto",
      textEn:
        "The new tissue is precisely positioned over the exposed root and secured with ultra-fine sutures.",
      textEs:
        "El nuevo tejido se posiciona con precisión sobre la raíz expuesta y se fija con suturas ultrafinas.",
    },
    {
      num: "04",
      titleEn: "Tissue Integration & Recovery",
      titleEs: "Integración Tisular y Recuperación",
      textEn:
        "A protective dressing preserves the site as the graft integrates, restoring a healthy, strong gum barrier.",
      textEs:
        "Un apósito protector preserva la zona mientras el injerto se integra, restaurando una barrera fuerte.",
    },
  ];

  return (
    <main className="bg-[#FBFBFA] text-[#1A1A1A] min-h-screen relative">
      {/* JSON-LD Structured Data for Local SEO & Gum Graft Periodontal Surgery */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            name: "Gum Grafting Surgery",
            medicalSpecialty: "Periodontics",
            procedureType: "SurgicalProcedure",
            bodyLocation: "Gums and Tooth Roots",
            description:
              "Advanced periodontic gum grafting surgery to treat gum recession, cover exposed tooth roots, and eliminate sensitivity in Tribeca, NYC.",
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
            src="/servicePage/service9.webp"
            alt="Gum Grafting Surgery Tribeca NYC"
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
              ? "Reconstrucción Periodontal de Encías"
              : "Periodontal Gum Reconstruction"}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-ddin font-bold tracking-tight uppercase leading-[1.05] text-white mb-6">
            {isEs ? "Cirugía de Injerto de Encía" : "Gum Grafting Surgery"}
          </h1>
          <p className="text-base md:text-xl font-light leading-relaxed text-neutral-200 max-w-2xl font-brandon mb-8">
            {isEs
              ? "Proteja las raíces expuestas, elimine la sensibilidad y detenga la recesión gingival. Cirugía periodontal de precisión en Tribeca, NYC."
              : "Restore receded gum tissue, cover sensitive tooth roots, and protect your teeth from bone loss. Expert periodontal grafting in Lower Manhattan."}
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
              01 // UNDERSTANDING GUM RECESSION
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light leading-tight mb-8">
              {isEs
                ? "Recupere la barrera protectora natural de sus dientes."
                : "Rebuild the protective barrier around your teeth."}
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed text-base md:text-lg mb-6">
              {isEs
                ? "La recesión gingival ocurre cuando el tejido que rodea los dientes se desgasta o se retrae, exponiendo la raíz. Esto puede ser provocado por enfermedad periodontal, cepillado agresivo, genética o bruxismo. El injerto de encía reconstruye la línea gingival, cubriendo la raíz y deteniendo la pérdida de hueso."
                : "Gum recession occurs gradually as tissue pulls back, leaving delicate root surfaces exposed to temperature changes, bacteria, and decay. Whether caused by periodontitis, aggressive brushing, bruxism, or genetics, gum grafting surgery reconstructs your natural gumline to protect root structures and eliminate discomfort."}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-brandon text-sm text-neutral-800 font-medium pt-2">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Alivio directo de sensibilidad extrema" : "Direct relief for root sensitivity"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Protección de raíces contra caries" : "Root surface decay prevention"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Técnicas microquirúrgicas avanzadas" : "Advanced microsurgical techniques"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Opciones de tejido donante o propio" : "Palatal or donor tissue options"}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/5] bg-neutral-900 overflow-hidden shadow-2xl border border-black/5">
            <Image
              src="/servicePage/service9.webp"
              alt="Tribeca Dental Studio Periodontal Suite"
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
              PERIODONTAL CLINICAL ADVANTAGES
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light uppercase tracking-tight">
              Why Gum Grafting Restores Health
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

      {/* 4. COMPARISON TAB (GUM GRAFT TYPES) */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#C5A059] font-bold block mb-2">
            GRAFTING MODALITIES
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light uppercase">
            Types of Gum Grafting Procedures
          </h2>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab("connective")}
            className={`px-6 py-3 text-xs uppercase tracking-[0.2em] transition-all ${
              activeTab === "connective"
                ? "bg-[#0B0B0B] text-white border border-[#0B0B0B]"
                : "border border-neutral-300 text-neutral-500 hover:border-black"
            }`}
          >
            Connective-Tissue Graft
          </button>
          <button
            onClick={() => setActiveTab("free")}
            className={`px-6 py-3 text-xs uppercase tracking-[0.2em] transition-all ${
              activeTab === "free"
                ? "bg-[#0B0B0B] text-white border border-[#0B0B0B]"
                : "border border-neutral-300 text-neutral-500 hover:border-black"
            }`}
          >
            Free Gingival Graft
          </button>
          <button
            onClick={() => setActiveTab("pedicle")}
            className={`px-6 py-3 text-xs uppercase tracking-[0.2em] transition-all ${
              activeTab === "pedicle"
                ? "bg-[#0B0B0B] text-white border border-[#0B0B0B]"
                : "border border-neutral-300 text-neutral-500 hover:border-black"
            }`}
          >
            Pedicle Graft
          </button>
        </div>

        {/* Dynamic Card Display */}
        <div className="bg-white p-8 md:p-12 border border-black/10 shadow-sm min-h-[260px]">
          {activeTab === "connective" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <span className="text-xs font-mono text-[#C5A059] font-bold block">MOST COMMON FOR ROOT COVERAGE</span>
              <h3 className="text-2xl font-serif">Connective-Tissue Graft</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                Subepithelial connective tissue is harvested from beneath a small flap on the roof of your mouth and stitched directly over the exposed root. Ideal for treating single or multiple receded areas while achieving excellent cosmetic blending.
              </p>
            </motion.div>
          )}

          {activeTab === "free" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <span className="text-xs font-mono text-[#C5A059] font-bold block">THICKENS NATURALLY THIN GUMS</span>
              <h3 className="text-2xl font-serif">Free Gingival Graft</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                Tissue is taken directly from the surface of the palate and attached to the treatment area. Frequently recommended for patients with naturally thin gum tissue who require structural reinforcement to prevent future recession.
              </p>
            </motion.div>
          )}

          {activeTab === "pedicle" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <span className="text-xs font-mono text-[#C5A059] font-bold block">USES ADJACENT GUM TISSUE</span>
              <h3 className="text-2xl font-serif">Pedicle Graft</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                Graft tissue is partially cut from healthy gums immediately adjacent to the affected tooth. The flap (pedicle) is pulled over the exposed root and secured. This technique keeps local blood vessels intact for rapid healing.
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
              PERIODONTAL PATHWAY
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
            ? "Restablezca la Salud de sus Encías y Sonrisa"
            : "Restore Your Gumline & Protect Your Natural Smile"}
        </h2>
        <p className="text-base md:text-lg font-serif italic text-neutral-400 max-w-xl mx-auto mb-8 font-light">
          {isEs
            ? "Agende su consulta para cirugía de injerto de encía en nuestro estudio de Lower Manhattan."
            : "Schedule your consultation for gum grafting surgery in Lower Manhattan today."}
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