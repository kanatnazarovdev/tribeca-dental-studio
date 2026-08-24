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

export default function SinusLiftsPage({ params }: PageProps) {
  const { lang } = use(params);
  const isEs = lang === "es";


  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const sinusLiftBenefits = [
    {
      num: "01",
      titleEn: "Rebuild Upper Jaw Foundation",
      titleEs: "Reconstrucción de Base Maxilar",
      descEn:
        "Creates sufficient bone height near molars and premolars to securely anchor long-lasting dental implants.",
      descEs:
        "Crea la altura ósea suficiente cerca de molares y premolares para anclar implantes dentales duraderos.",
    },
    {
      num: "02",
      titleEn: "Piezoelectric Precision Surgery",
      titleEs: "Cirugía Piezoeléctrica de Precisión",
      descEn:
        "Minimizes tissue trauma and preserves delicate sinus membranes using advanced ultrasonic surgical instruments.",
      descEs:
        "Minimiza el trauma tisular y preserva las membranas del seno utilizando instrumentos quirúrgicos ultrasónicos.",
    },
    {
      num: "03",
      titleEn: "Prevents Facial Structure Collapse",
      titleEs: "Previene el Colapso Estructural Facial",
      descEn:
        "Bone grafting prevents the sunken facial appearance that naturally follows long-term tooth and bone loss.",
      descEs:
        "El injerto óseo previene la apariencia facial hundida que sigue a la pérdida prolongada de dientes y hueso.",
    },
    {
      num: "04",
      titleEn: "Advanced 3D Cone-Beam Mapping",
      titleEs: "Mapeo 3D Cone-Beam de Vanguardia",
      descEn:
        "Precision CT imaging maps sinus anatomy with sub-millimeter accuracy to avoid critical structures and ensure safety.",
      descEs:
        "Imágenes de TC de alta precisión mapean la anatomía del seno con exactitud submimétrica para garantizar la seguridad.",
    },
  ];

  const procedureSteps = [
    {
      num: "01",
      titleEn: "3D CBCT Imaging & Anesthesia",
      titleEs: "Imágenes 3D CBCT y Anestesia",
      textEn:
        "High-resolution 3D CT scans map your sinus floor. Local anesthesia and optional sedation ensure complete comfort.",
      textEs:
        "Escaneos 3D de alta resolución mapean el piso del seno. La anestesia local y la sedación opcional garantizan confort.",
    },
    {
      num: "02",
      titleEn: "Membrane Elevation & Grafting",
      titleEs: "Elevación de Membrana e Injerto",
      textEn:
        "A micro-entry is created near the upper molars. The sinus membrane is lifted gently and filled with bone graft material.",
      textEs:
        "Se realiza una microentrada cerca de los molares. La membrana del seno se eleva suavemente y se coloca el injerto.",
    },
    {
      num: "03",
      titleEn: "Integration & Osseointegration",
      titleEs: "Integración u Osteointegración",
      textEn:
        "Over 4 to 9 months, the graft material integrates seamlessly into your natural jawbone to form a rigid foundation.",
      textEs:
        "Durante 4 a 9 meses, el material de injerto se integra con el hueso natural para formar una base rígida.",
    },
    {
      num: "04",
      titleEn: "Permanent Dental Implant Placement",
      titleEs: "Colocación Permanente de Implantes",
      textEn:
        "Once bone maturity is verified on 3D scans, titanium dental implants are anchored securely into the restored arch.",
      textEs:
        "Una vez verificada la madurez ósea en escaneos 3D, los implantes de titanio se anclan de forma segura.",
    },
  ];

  const faqs = [
    {
      qEn: "Is a sinus lift procedure painful?",
      qEs: "¡Es doloroso el procedimiento de elevación de seno?",
      aEn: "No. The procedure is performed under effective local anesthesia with optional sedation, ensuring you feel no pain. Post-operative swelling or minor discomfort can be managed easily with prescribed care.",
      aEs: "No. El procedimiento se realiza bajo anestesia local efectiva con sedación opcional. Las molestias postoperatorias menores se manejan fácilmente con la atención recetada.",
    },
    {
      qEn: "How long until I can receive my dental implants?",
      qEs: "¿Cuánto tiempo debo esperar para recibir mis implantes dentales?",
      aEn: "The healing and integration period typically ranges between 4 to 9 months, allowing the bone graft material to mature fully before implants are securely placed.",
      aEs: "El período de cicatrización e integración suele oscilar entre 4 y 9 meses, permitiendo que el injerto óseo madure por completo antes de colocar los implantes.",
    },
    {
      qEn: "What are the primary surgical risks?",
      qEs: "¿Cuáles son los principales riesgos quirúrgicos?",
      aEn: "The main risk is a small tear in the sinus membrane, which can usually be repaired immediately during surgery. We minimize all risks through precise 3D CBCT pre-surgical planning.",
      aEs: "El riesgo principal es un pequeño desgarro en la membrana del seno, que generalmente se repara durante la cirugía. Minimizamos los riesgos mediante planificación 3D CBCT.",
    },
  ];

  return (
    <main className="bg-[#FBFBFA] text-[#1A1A1A] min-h-screen relative">
      {/* JSON-LD Structured Data for Local SEO & Sinus Lift Dental Surgery */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            name: "Sinus Lift Surgery",
            medicalSpecialty: "Oral and Maxillofacial Surgery",
            procedureType: "SurgicalProcedure",
            bodyLocation: "Upper Jaw and Maxillary Sinus",
            description:
              "Advanced bone grafting and sinus lift surgery to prepare upper jawbone for dental implants in Tribeca, NYC.",
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
            alt="Sinus Lift Surgery Tribeca NYC"
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
              ? "Cirugía Maxilofacial e Injerto Óseo"
              : "Maxillofacial Surgery & Bone Augmentation"}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-ddin font-bold tracking-tight uppercase leading-[1.05] text-white mb-6">
            {isEs ? "Elevación de Seno Maxilar" : "Sinus Lifts in Tribeca"}
          </h1>
          <p className="text-base md:text-xl font-light leading-relaxed text-neutral-200 max-w-2xl font-brandon mb-8">
            {isEs
              ? "Reconstruya la base de su maxilar superior para implantes dentales seguros y duraderos. Cirugía piezoeléctrica avanzada en Lower Manhattan."
              : "Rebuild the foundation of your upper jaw to ensure long-lasting dental implant success. Advanced 3D-guided sinus augmentation in Lower Manhattan."}
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
              01 // FOUNDATIONAL IMPLANT PREPARATION
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light leading-tight mb-8">
              {isEs
                ? "Una base ósea sólida para una sonrisa permanente."
                : "A strong jawbone foundation for a permanent smile."}
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed text-base md:text-lg mb-6">
              {isEs
                ? "Para que un implante dental tenga éxito, necesita una base de hueso firme. La pérdida prolongada de piezas dentales, la enfermedad periodontal o la cavidad del seno agrandada dificultan la colocación inmediata de implantes en la parte superior posterior. La elevación de seno soluciona esto de manera altamente predecible."
                : "Just as a house requires a solid foundation, dental implants require sufficient jawbone volume to anchor securely. Long-term tooth loss, severe periodontal disease, and natural sinus cavity expansion often reduce upper jawbone thickness. A sinus lift gently raises the sinus membrane and adds biocompatible bone material to make implants possible."}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-brandon text-sm text-neutral-800 font-medium pt-2">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Guiado por TC 3D Cone-Beam" : "3D Cone-Beam CT guided safety"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Bisturí piezoeléctrico ultrasónico" : "Piezoelectric ultrasonic instruments"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Amplia variedad de sedación consciente" : "Full range of conscious sedation"}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                {isEs ? "Integración biocompatible de alto nivel" : "Biocompatible graft integration"}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/5] bg-neutral-900 overflow-hidden shadow-2xl border border-black/5">
            <Image
              src="/photo1.JPG"
              alt="Tribeca Dental Studio Surgical Suite"
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
              SURGICAL ADVANTAGES
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light uppercase tracking-tight">
              Why A Sinus Lift Restores Possibilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sinusLiftBenefits.map((b, idx) => (
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

      {/* 4. STEP-BY-STEP SURGICAL PROCESS */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0B0B0B] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#C5A059] font-bold block mb-2">
              THE SURGICAL PATHWAY
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light uppercase">
              Step-by-Step Sinus Augmentation
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

      {/* 6. FOOTER CALL TO ACTION */}
      <section className="bg-black text-white py-24 px-6 text-center relative z-20">
        <p className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] mb-4">
          {isEs ? "TRIBECA • NUEVA YORK" : "TRIBECA • NEW YORK"}
        </p>
        <h2 className="text-3xl md:text-5xl font-ddin uppercase font-bold mb-6">
          {isEs
            ? "Reconstruya su Base para Implantes Dentales"
            : "Rebuild Your Foundation for Lifetime Dental Implants"}
        </h2>
        <p className="text-base md:text-lg font-serif italic text-neutral-400 max-w-xl mx-auto mb-8 font-light">
          {isEs
            ? "Agende su consulta para elevación de seno maxilar con nuestro equipo de cirujanos en Lower Manhattan."
            : "Schedule your consultation for sinus lift surgery with our oral surgery team in Lower Manhattan today."}
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