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

export default function BoneGraftingPage({ params }: PageProps) {
  const { lang } = use(params);
  const isEs = lang === "es";

  const [activeTab, setActiveTab] = useState<"socket" | "sinus" | "ridge">("socket");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const procedureFeatures = [
    {
      num: "01",
      titleEn: "Immediate Socket Preservation",
      titleEs: "Preservación Inmediata del Alveolo",
      descEn:
        "Placing bone material immediately following tooth extraction to prevent rapid bone resorption.",
      descEs:
        "Colocación de material óseo inmediatamente después de la extracción para evitar la reabsorción rápida.",
    },
    {
      num: "02",
      titleEn: "Ridge Augmentation",
      titleEs: "Aumento de Cresta Alveolar",
      descEn:
        "Restores natural height and width to depleted jawbone ridges for secure implant anchoring.",
      descEs:
        "Restaura la altura y el ancho natural de la cresta alveolar para un anclaje firme de los implantes.",
    },
    {
      num: "03",
      titleEn: "Sinus Lift Augmentation",
      titleEs: "Elevación e Injerto de Seno Maxilar",
      descEn:
        "Adds bone volume to upper posterior regions where sinus cavities sit close to missing molar roots.",
      descEs:
        "Añade volumen óseo en la zona posterior superior donde las cavidades del seno están cerca de los molares.",
    },
    {
      num: "04",
      titleEn: "Advanced 3D CBCT Surgical Planning",
      titleEs: "Planificación Quirúrgica 3D CBCT",
      descEn:
        "High-resolution 3D CT scanning maps bone density and vital structures to ensure predictable graft integration.",
      descEs:
        "Escaneos 3D de alta resolución mapean la densidad ósea para garantizar una integración predecible del injerto.",
    },
  ];

  const steps = [
    {
      num: "01",
      titleEn: "3D CBCT Assessment & Planning",
      titleEs: "Evaluación y Planificación 3D CBCT",
      textEn:
        "We capture high-definition 3D imaging to evaluate bone quality, sinus boundaries, and precise grafting areas.",
      textEs:
        "Capturamos imágenes 3D de alta definición para evaluar la calidad ósea y los límites precisos del injerto.",
    },
    {
      num: "02",
      titleEn: "Anesthesia & Comfortable Preparation",
      titleEs: "Anestesia y Preparación Confortable",
      textEn:
        "Targeted local anesthesia combined with optional sedation ensures a completely relaxed, pain-free experience.",
      textEs:
        "La anestesia local junto con sedación opcional garantiza una experiencia relajada y libre de dolor.",
    },
    {
      num: "03",
      titleEn: "Biocompatible Material Placement",
      titleEs: "Colocación de Material Biocompatible",
      textEn:
        "High-grade biocompatible graft material is placed precisely into deficient areas to act as a scaffold.",
      textEs:
        "Se coloca material de injerto biocompatible en las zonas deficientes para servir de andamiaje óseo.",
    },
    {
      num: "04",
      titleEn: "Healing & Osseous Integration",
      titleEs: "Cicatrización e Integración Ósea",
      textEn:
        "Over several months, your natural jawbone fuses with the graft scaffold, creating a rigid base for implants.",
      textEs:
        "Durante varios meses, su hueso natural se fusiona con el injerto, creando una base rígida para implantes.",
    },
  ];

  const faqs = [
    {
      qEn: "Is dental bone grafting painful?",
      qEs: "¿Es doloroso el injerto óseo dental?",
      aEn: "No. The procedure is performed under effective local anesthesia combined with optional conscious sedation. Any mild post-operative soreness can be easily managed with prescribed or over-the-counter medication.",
      aEs: "No. El procedimiento se realiza bajo anestesia local efectiva con sedación opcional. Las molestias postoperatorias leves se manejan fácilmente con medicamentos.",
    },
    {
      qEn: "How long does a bone graft take to heal?",
      qEs: "¿Cuánto tiempo tarda en cicatrizar un injerto óseo?",
      aEn: "Healing times vary depending on the extent of bone loss and the grafting technique used. Most bone grafts require 3 to 9 months to fully integrate with your natural jawbone before placing dental implants.",
      aEs: "El tiempo de cicatrización varía según la pérdida ósea. La mayoría de los injertos requieren entre 3 y 9 meses para integrarse completamente antes de colocar los implantes.",
    },
    {
      qEn: "Where does the bone material come from?",
      qEs: "¿De dónde proviene el material del injerto?",
      aEn: "Graft material can come from your own body (autograft), a human donor source (allograft), an animal source processed for complete safety (xenograft), or a synthetic biocompatible material (alloplast).",
      aEs: "El material del injerto puede ser de su propio cuerpo (autoinjerto), un donante humano (aloinjerto), fuente animal procesada para total seguridad (xenoinjerto) o un material sintético biocompatible.",
    },
    {
      qEn: "What happens if I skip bone grafting before getting implants?",
      qEs: "¿Qué pasa si no me hago el injerto óseo antes de los implantes?",
      aEn: "Without sufficient bone density, dental implants cannot fuse securely, which can lead to implant failure, loose restorations, ongoing facial structure collapse, and more expensive corrective procedures later.",
      aEs: "Sin suficiente densidad ósea, los implantes no pueden fijarse de forma segura, lo que puede provocar el fracaso del implante, prótesis sueltas y colapso estructural facial.",
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
              name: "Dental Bone Grafting",
              medicalSpecialty: "Oral and Maxillofacial Surgery",
              procedureType: "SurgicalProcedure",
              bodyLocation: "Jawbone",
              description:
                "Advanced dental bone grafting, socket preservation, and ridge augmentation to prepare the jawbone for dental implants in Tribeca, NYC.",
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
            src="/servicePage/service3.webp"
            alt="Dental Bone Grafting Tribeca NYC"
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
              ? "Reconstrucción Quirúrgica Ósea y Maxilar"
              : "Surgical Bone & Jaw Reconstruction"}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-ddin font-bold tracking-tight uppercase leading-[1.05] text-white mb-6">
            {isEs ? "Injerto Óseo en Tribeca" : "Bone Grafting in Tribeca"}
          </h1>
          <p className="text-base md:text-xl font-light leading-relaxed text-neutral-200 max-w-2xl font-brandon mb-8">
            {isEs
              ? "Restaure la densidad y volumen de su hueso maxilar para garantizar el éxito de sus implantes dentales. Cirugía de precisión 3D en Lower Manhattan."
              : "Rebuild jawbone volume and create a permanent foundation for lifelong dental implants. Advanced 3D-guided bone augmentation in Lower Manhattan."}
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
              01 // REBUILDING IMPLANT FOUNDATIONS
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light leading-tight mb-8">
              {isEs
                ? "Reconstruya la base sólida que su sonrisa necesita."
                : "Rebuild the solid foundation your smile needs."}
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed text-base md:text-lg mb-6">
              {isEs
                ? "Los implantes dentales necesitan una base de hueso firme y denso para anclarse adecuadamente. Tras la pérdida de un diente, enfermedad periodontal o trauma, el hueso maxilar comienza a reabsorberse. El injerto óseo coloca materiales biocompatibles que actúan como estructura para que su propio cuerpo regenere hueso sano."
                : "Just like natural tooth roots, dental implants require a strong, dense jawbone to anchor securely. Following tooth loss, severe periodontitis, or trauma, the surrounding bone quickly deteriorates. Dental bone grafting acts as a scaffold that encourages your body to regenerate fresh bone tissue, ensuring your implants remain firm and permanent."}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-brandon text-sm text-neutral-800 font-medium pt-2">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Preservación alveolar tras extracción" : "Post-extraction socket preservation"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Aumento de altura y ancho de cresta" : "Ridge width & height augmentation"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Guiado por escaneo 3D CBCT de precisión" : "Precision 3D CBCT surgical mapping"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Prevención del colapso facial" : "Facial structure collapse prevention"}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/5] bg-neutral-900 overflow-hidden shadow-2xl border border-black/5">
            <Image
              src="/services/bonegrafting.jpeg"
              alt="Tribeca Dental Studio Surgical Suite"
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
              Why Bone Augmentation Is Essential
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

      {/* 4. COMPARISON TAB (GRAFTING TECHNIQUES) */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#C5A059] font-bold block mb-2">
            GRAFTING TECHNIQUES
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light uppercase">
            Tailored Augmentation Solutions
          </h2>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab("socket")}
            className={`px-6 py-3 text-xs uppercase tracking-[0.2em] transition-all ${
              activeTab === "socket"
                ? "bg-[#0B0B0B] text-white border border-[#0B0B0B]"
                : "border border-neutral-300 text-neutral-500 hover:border-black"
            }`}
          >
            Socket Preservation
          </button>
          <button
            onClick={() => setActiveTab("ridge")}
            className={`px-6 py-3 text-xs uppercase tracking-[0.2em] transition-all ${
              activeTab === "ridge"
                ? "bg-[#0B0B0B] text-white border border-[#0B0B0B]"
                : "border border-neutral-300 text-neutral-500 hover:border-black"
            }`}
          >
            Ridge Augmentation
          </button>
          <button
            onClick={() => setActiveTab("sinus")}
            className={`px-6 py-3 text-xs uppercase tracking-[0.2em] transition-all ${
              activeTab === "sinus"
                ? "bg-[#0B0B0B] text-white border border-[#0B0B0B]"
                : "border border-neutral-300 text-neutral-500 hover:border-black"
            }`}
          >
            Sinus Lift Augmentation
          </button>
        </div>

        {/* Dynamic Card Display */}
        <div className="bg-white p-8 md:p-12 border border-black/10 shadow-sm min-h-[260px]">
          {activeTab === "socket" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <span className="text-xs font-mono text-[#C5A059] font-bold block">POST-EXTRACTION PRESERVATION</span>
              <h3 className="text-2xl font-serif">Socket Preservation</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                Placed into the empty tooth socket immediately following an extraction. This prevents the surrounding bone walls from collapsing and maintains the natural contours needed for future implant placement.
              </p>
            </motion.div>
          )}

          {activeTab === "ridge" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <span className="text-xs font-mono text-[#C5A059] font-bold block">STRUCTURAL WIDTH & HEIGHT RECONSTRUCTION</span>
              <h3 className="text-2xl font-serif">Ridge Augmentation</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                Rebuilds areas of the jawbone that have thinned out or lost height over time due to missing teeth or trauma. Increases overall bone volume to create a stable, wide base for dental implants.
              </p>
            </motion.div>
          )}

          {activeTab === "sinus" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <span className="text-xs font-mono text-[#C5A059] font-bold block">UPPER POSTERIOR RECONSTRUCTION</span>
              <h3 className="text-2xl font-serif">Sinus Lift Augmentation</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                Gently elevates the sinus membrane in the upper molar area to place bone graft material beneath it. Essential for patients whose upper jawbone has thinned close to the sinus cavity.
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
              Step-by-Step Bone Grafting
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
            ? "Reconstruya la Base de sus Implantes"
            : "Rebuild Your Foundation for Lifetime Implants"}
        </h2>
        <p className="text-base md:text-lg font-serif italic text-neutral-400 max-w-xl mx-auto mb-8 font-light">
          {isEs
            ? "Agende una consulta para injerto óseo con nuestro equipo quirúrgico en Lower Manhattan."
            : "Schedule your consultation for bone grafting surgery with our oral surgery team in Lower Manhattan today."}
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