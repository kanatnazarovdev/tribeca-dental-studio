import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Clock, DollarSign, Zap } from "lucide-react";
import { bookingUrl } from "@/hooks/helper";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = rawLang === "es" ? "es" : rawLang === "zh" ? "zh" : "en";
  const isEs = lang === "es";
  const isZh = lang === "zh";

  const title = isZh
    ? "纽约 Tribeca 复合树脂美学补牙与微创粘接 | Tribeca Dental Studio"
    : isEs
    ? "Adhesión Dental en Tribeca, NYC | Composite Estético | Tribeca Dental Studio"
    : "Dental Bonding in Tribeca, NYC | Direct Composite Veneers | Tribeca Dental Studio";

  const description = isZh
    ? "纽约 Tribeca 高精微创美学粘接（Dental Bonding）：无需磨牙、单次就诊修复崩裂、缝隙、变色及磨损牙齿，为您打造性价比极高的即刻完美笑容。"
    : isEs
    ? "Adhesión dental y carillas de resina en Lower Manhattan, NYC. Corrección estética inmediata y no invasiva para dientes astillados, desgastados o con espacios."
    : "Non-invasive composite dental bonding in Lower Manhattan, NYC. Single-visit correction for chipped, discolored, or gapped teeth without enamel reduction.";

  return {
    title,
    description,
    keywords: [
      "Dental Bonding NYC",
      "Teeth Bonding Tribeca",
      "Composite Veneers Manhattan",
      "Fix Chipped Tooth NYC",
      "Diastema Closure Tribeca",
      "Cosmetic Dentist Lower Manhattan",
      "Same Day Cosmetic Dentistry NYC",
    ],
    alternates: {
      canonical: `https://tribecadentalstudio.com/${lang}/services/direct-bonding`,
      languages: {
        en: "https://tribecadentalstudio.com/en/services/direct-bonding",
        es: "https://tribecadentalstudio.com/es/services/direct-bonding",
        zh: "https://tribecadentalstudio.com/zh/services/direct-bonding",
      },
    },
    openGraph: {
      title,
      description,
      url: `https://tribecadentalstudio.com/${lang}/services/direct-bonding`,
      siteName: "Tribeca Dental Studio",
      images: [
        {
          url: "https://tribecadentalstudio.com/og-bonding.jpg",
          width: 1200,
          height: 630,
          alt: "Dental Bonding at Tribeca Dental Studio NYC",
        },
      ],
      locale: isZh ? "zh_CN" : isEs ? "es_ES" : "en_US",
      type: "website",
    },
  };
}

export default async function DentalBondingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang === "es" ? "es" : rawLang === "zh" ? "zh" : "en";
  const isEs = lang === "es";
  const isZh = lang === "zh";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Dental Bonding",
    medicalSpecialty: "Cosmetic Dentistry",
    description: "Non-invasive cosmetic dental bonding using tooth-colored composite resin to repair chips, gaps, and discoloration in a single visit.",
    bodyLocation: "Mouth",
    procedureHowItIsPerformed: "Etching the enamel surface, applying composite resin, sculpting, curing with light, and polishing.",
    howPerformed: "In-office single visit procedure",
    provider: {
      "@type": "Dentist",
      name: "Tribeca Dental Studio",
      url: "https://tribecadentalstudio.com",
      telephone: "212-561-5303",
      address: {
        "@type": "PostalAddress",
        streetAddress: "54 Warren St",
        addressLocality: "New York",
        addressRegion: "NY",
        postalCode: "10007",
        addressCountry: "US",
      },
    },
  };

  return (
    <main className="bg-[#FCFCFC] text-black min-h-screen pt-32 pb-24 font-ddin">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-[#C5A059] mb-4">
              <Sparkles size={18} />
              <span className="text-xs uppercase tracking-[0.3em] font-bold">
                {isZh
                  ? "微创美学修复"
                  : isEs
                  ? "Odontología Estética Mínimamente Invasiva"
                  : "Non-Invasive Cosmetic Enhancement"}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light uppercase tracking-tight mb-6 leading-tight">
              {isZh
                ? "纽约 Tribeca 牙齿美学微创粘接"
                : isEs
                ? "Adhesión Dental en Tribeca, NYC"
                : "Dental Bonding in Tribeca, NYC"}
            </h1>
            <p className="font-brandon text-base md:text-lg text-neutral-600 mb-8 leading-relaxed">
              {isZh
                ? "想要快速改善牙齿的小缺陷？复合树脂粘接（Direct Composite Bonding）是比瓷贴面更微创、性价比极高的即刻美学方案。无需磨除天然牙釉质，单次就诊即可完美修复牙齿崩裂、缝隙及变色。"
                : isEs
                ? "Si desea corregir pequeñas imperfecciones en su sonrisa, la adhesión dental con resina compuesta es una solución rápida, económica y no invasiva realizada en una sola visita en Lower Manhattan."
                : "If there's something minor you’d like to refine in your smile, direct composite bonding is a gentle, conservative, and budget-friendly solution that transforms your teeth in just one appointment."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                                    href={bookingUrl}
                className="inline-flex items-center justify-center bg-black text-white hover:bg-[#C5A059] text-xs font-bold uppercase tracking-widest px-8 py-4 transition-colors duration-300"
              >
                <span>{isZh ? "预约咨询" : isEs ? "Reservar Cita" : "Book Your Consultation"}</span>
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <a
                href="tel:212-561-5303"
                className="inline-flex items-center justify-center border border-black/20 hover:border-black text-xs font-bold uppercase tracking-widest px-8 py-4 transition-colors duration-300"
              >
                212-561-5303
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] bg-neutral-900 overflow-hidden shadow-2xl">
            <Image
              src="/photo1.webp"
              alt="Dental Bonding at Tribeca Dental Studio"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
              <span className="text-white text-xs font-bold uppercase tracking-widest">
                {isZh ? "单次就诊·微创即刻焕颜" : isEs ? "Resultados Inmediatos en 1 Sesión" : "Single-Visit Smile Transformation"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* KEY ADVANTAGES GRID */}
      <section className="bg-neutral-900 text-white py-20 px-6 md:px-12 lg:px-20 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-2">
              {isZh ? "核心优势" : isEs ? "Ventajas Clave" : "Why Choose Bonding"}
            </span>
            <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight">
              {isZh ? "为什么选择树脂美学粘接？" : isEs ? "Beneficios de la Adhesión Dental" : "Advantages of Dental Bonding"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-neutral-800 p-8 bg-neutral-900/50">
              <Clock className="text-[#C5A059] mb-4" size={32} />
              <h3 className="text-xl font-bold uppercase tracking-wide mb-3">
                {isZh ? "即刻完成" : isEs ? "Resultados Rápidos" : "Single-Visit Convenience"}
              </h3>
              <p className="font-brandon text-sm text-neutral-400 leading-relaxed">
                {isZh
                  ? "无需多次就诊或等待印模取样，大部分粘接治疗在 30 至 60 分钟内即可完成。"
                  : isEs
                  ? "Completado en una sola sesión de 30 a 60 minutos por diente sin necesidad de esperar laboratorios."
                  : "Most appointments take just 30–60 minutes per tooth, giving you instant results before you leave our studio."}
              </p>
            </div>

            <div className="border border-neutral-800 p-8 bg-neutral-900/50">
              <ShieldCheck className="text-[#C5A059] mb-4" size={32} />
              <h3 className="text-xl font-bold uppercase tracking-wide mb-3">
                {isZh ? "极度微创" : isEs ? "No Invasivo" : "Maximal Enamel Preservation"}
              </h3>
              <p className="font-brandon text-sm text-neutral-400 leading-relaxed">
                {isZh
                  ? "几乎不需要磨除天然牙釉质，保留原本健全的牙齿结构，安全可逆。"
                  : isEs
                  ? "Requiere poco o ningún desgaste del esmalte natural, manteniendo intacta la estructura de su diente."
                  : "Requires little to no enamel removal, preserving your native tooth matrix while enhancing symmetry."}
              </p>
            </div>

            <div className="border border-neutral-800 p-8 bg-neutral-900/50">
              <DollarSign className="text-[#C5A059] mb-4" size={32} />
              <h3 className="text-xl font-bold uppercase tracking-wide mb-3">
                {isZh ? "高性价比" : isEs ? "Económico" : "Budget-Friendly"}
              </h3>
              <p className="font-brandon text-sm text-neutral-400 leading-relaxed">
                {isZh
                  ? "相比全瓷贴面，树脂粘接是预算友好且效果显著的局部美学修复首选。"
                  : isEs
                  ? "Una opción considerablemente más accesible que las carillas de porcelana para retoques estéticos."
                  : "A highly cost-effective cosmetic fix compared to porcelain veneers for correcting localized flaws."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT BONDING CAN FIX */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-2">
              {isZh ? "适用症状" : isEs ? "Indicaciones" : "Treatable Conditions"}
            </span>
            <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight mb-6">
              {isZh ? "牙齿粘接能解决哪些问题？" : isEs ? "¿Qué Puede Corregir la Adhesión?" : "What Dental Bonding Fixes"}
            </h2>
            <p className="font-brandon text-neutral-600 mb-8 leading-relaxed">
              {isZh
                ? "树脂美学粘接使用与天然牙色相匹配的复合树脂，经由医生精雕细琢后固化，可完美修复多种美学小瑕疵："
                : isEs
                ? "Utilizando resina compuesta esculpida directamente sobre la superficie del diente, podemos corregir:"
                : "Using medical-grade composite resin meticulously shade-matched and sculpted over your enamel, we resolve:"}
            </p>

            <ul className="space-y-4 font-brandon text-sm text-neutral-800">
              {[
                isZh ? "崩裂或磨损的小牙缺角" : isEs ? "Dientes astillados o desgastados" : "Chipped, cracked, or worn teeth",
                isZh ? "顽固外源性变色或牙斑" : isEs ? "Manchas o decoloración persistente" : "Persistent staining or intrinsic discoloration",
                isZh ? "牙齿间缝隙（微小牙缝）" : isEs ? "Pequeños espacios o diastemas" : "Minor diastema (gaps between teeth)",
                isZh ? "过短或形态不规整的牙齿" : isEs ? "Dientes de forma irregular o desigual" : "Misshapen or disproportionate teeth",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#C5A059] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* STEP BY STEP PROCESS */}
          <div className="bg-neutral-100 p-8 md:p-12 border border-neutral-200">
            <h3 className="text-2xl font-light uppercase tracking-tight mb-6">
              {isZh ? "诊疗步骤" : isEs ? "Proceso Paso a Paso" : "How It's Done"}
            </h3>
            <ol className="space-y-6 font-brandon text-sm">
              <li className="flex gap-4">
                <span className="font-bold text-[#C5A059] font-ddin text-lg">01.</span>
                <div>
                  <strong className="block text-black font-ddin text-base uppercase">Prep & Etch</strong>
                  <p className="text-neutral-600">The tooth surface is gently etched with a mild gel to allow strong adhesion.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-[#C5A059] font-ddin text-lg">02.</span>
                <div>
                  <strong className="block text-black font-ddin text-base uppercase">Sculpt & Layer</strong>
                  <p className="text-neutral-600">The shade-matched composite resin is applied in layers and meticulously shaped by hand.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-[#C5A059] font-ddin text-lg">03.</span>
                <div>
                  <strong className="block text-black font-ddin text-base uppercase">Curative Light</strong>
                  <p className="text-neutral-600">A high-intensity curing light instantly hardens the resin into permanent structure.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-[#C5A059] font-ddin text-lg">04.</span>
                <div>
                  <strong className="block text-black font-ddin text-base uppercase">Polish & Perfect</strong>
                  <p className="text-neutral-600">The restoration is buffed and polished to match the natural luster of adjacent teeth.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* BONDING VS VENEERS MATRIX */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-light uppercase tracking-tight mb-4">
            Dental Bonding vs. Porcelain Veneers
          </h2>
          <p className="font-brandon text-sm text-neutral-600">
            Compare options to find the ideal cosmetic restoration for your goals and budget.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-neutral-200 font-brandon text-sm">
            <thead>
              <tr className="bg-neutral-100 font-ddin uppercase text-xs tracking-wider border-b border-neutral-200">
                <th className="p-4 border-r border-neutral-200">Feature</th>
                <th className="p-4 border-r border-neutral-200">Dental Bonding</th>
                <th className="p-4">Porcelain Veneers</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-200">
                <td className="p-4 font-bold border-r border-neutral-200">Primary Goal</td>
                <td className="p-4 border-r border-neutral-200">Minor spot touch-ups & small gaps</td>
                <td className="p-4">Full smile redesign & dramatic enhancement</td>
              </tr>
              <tr className="border-b border-neutral-200">
                <td className="p-4 font-bold border-r border-neutral-200">Visits Needed</td>
                <td className="p-4 border-r border-neutral-200">1 Single Visit (30-60 mins)</td>
                <td className="p-4">2 Visits (Digital Preview & Final Placement)</td>
              </tr>
              <tr className="border-b border-neutral-200">
                <td className="p-4 font-bold border-r border-neutral-200">Enamel Alteration</td>
                <td className="p-4 border-r border-neutral-200">Minimal to None (Reversible)</td>
                <td className="p-4">Micro-shaving (~0.5mm, Permanent)</td>
              </tr>
              <tr className="border-b border-neutral-200">
                <td className="p-4 font-bold border-r border-neutral-200">Expected Lifespan</td>
                <td className="p-4 border-r border-neutral-200">5 – 10 Years</td>
                <td className="p-4">15 – 20+ Years</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-20 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-4">
            Tribeca Dental Studio
          </span>
          <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight mb-6">
            Transform Your Smile in 1 Visit
          </h2>
          <p className="font-brandon text-neutral-400 mb-8 max-w-xl mx-auto leading-relaxed">
            Schedule a consultation with our Lower Manhattan cosmetic specialists to see if direct composite bonding is right for you.
          </p>
          <Link
                                    href={bookingUrl}
            className="inline-block bg-[#C5A059] hover:bg-white text-black text-xs font-bold uppercase tracking-widest px-10 py-4 transition-colors duration-300"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </main>
  );
}