/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { bookingUrl } from "@/hooks/helper";
import { ShieldCheck, Sparkles, Moon, Stethoscope, CheckCircle2, ArrowRight } from "lucide-react";

// --- SEO METADATA GENERATOR ---
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isZh = lang === "zh";
  const isEs = lang === "es";

  const title = isZh
    ? "睡眠呼吸暂停口内矫治器与 CPAP 替代方案 | 纽约 Tribeca Dental Studio"
    : isEs
    ? "Dispositivos para la Apnea del Sueño y Alternativas a CPAP | Tribeca Dental Studio"
    : "Custom Sleep Apnea Devices & CPAP Alternatives NYC | Tribeca Dental Studio";

  const description = isZh
    ? "纽约 Tribeca 专科级睡眠呼吸暂停口腔矫治器诊疗：提供舒适、便携、高顺应性的下颌前移装置 (MAS)，有效改善打鼾与阻塞性睡眠呼吸暂停 (OSA)。"
    : isEs
    ? "Dispositivos orales personalizados para la apnea obstructiva del sueño y ronquidos en Lower Manhattan, NYC. Una alternativa cómoda, silenciosa y portátil al CPAP."
    : "Discover custom oral appliance therapy for Obstructive Sleep Apnea (OSA) and snoring in Tribeca, NYC. A comfortable, silent, and portable alternative to CPAP machines.";

  return {
    title,
    description,
    keywords: [
      "Sleep Apnea Dentist NYC",
      "Oral Appliance Therapy Tribeca",
      "CPAP Alternative Lower Manhattan",
      "Custom Nightguard for Snoring NYC",
      "Mandibular Advancement Device Manhattan",
      "Obstructive Sleep Apnea Treatment Tribeca",
      "Sleep Dentist Lower Manhattan",
    ],
    authors: [{ name: "Tribeca Dental Studio" }],
    creator: "Tribeca Dental Studio",
    publisher: "Tribeca Dental Studio",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://tribecadentalstudio.com/${lang}/services/sleep-apnea-devices`,
      siteName: "Tribeca Dental Studio",
      images: [
        {
          url: "https://tribecadentalstudio.com/og-sleep-apnea.jpg",
          width: 1200,
          height: 630,
          alt: "Custom Sleep Apnea Appliance Therapy at Tribeca Dental Studio NYC",
        },
      ],
      locale: lang === "zh" ? "zh_CN" : lang === "es" ? "es_ES" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://tribecadentalstudio.com/og-sleep-apnea.jpg"],
    },
    alternates: {
      canonical: `https://tribecadentalstudio.com/${lang}/services/sleep-apnea-devices`,
      languages: {
        en: "https://tribecadentalstudio.com/en/services/sleep-apnea-devices",
        es: "https://tribecadentalstudio.com/es/services/sleep-apnea-devices",
        zh: "https://tribecadentalstudio.com/zh/services/sleep-apnea-devices",
      },
    },
  };
}

export default async function SleepApneaDevicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isZh = lang === "zh";
  const isEs = lang === "es";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Dentist",
        "@id": "https://tribecadentalstudio.com/#organization",
        "name": "Tribeca Dental Studio",
        "url": "https://tribecadentalstudio.com",
        "logo": "https://tribecadentalstudio.com/tribeca-logo-text.svg",
        "telephone": "+1-212-561-5303",
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "54 Warren St",
          "addressLocality": "New York",
          "addressRegion": "NY",
          "postalCode": "10007",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 40.7145,
          "longitude": -74.0082
        },
        "knowsAbout": [
          "Sleep Apnea Dental Devices",
          "Oral Appliance Therapy",
          "CPAP Alternatives",
          "Mandibular Advancement Devices",
          "Airway & Sleep Dentistry"
        ]
      },
      {
        "@type": "MedicalProcedure",
        "name": "Custom Oral Appliance Therapy for Obstructive Sleep Apnea",
        "procedureType": "Non-invasive Medical & Dental Therapy",
        "bodyLocation": "Airway, Jaw, Mouth",
        "relevantSpecialty": {
          "@type": "MedicalSpecialty",
          "name": "Sleep Dentistry"
        }
      }
    ]
  };

  const content = {
    badge: isZh ? "气道与睡眠齿科" : isEs ? "Odontología del Sueño" : "Airway & Sleep Dentistry",
    title: isZh
      ? "定制睡眠呼吸暂停口内矫治器与 CPAP 替代方案"
      : isEs
      ? "Dispositivos Personalizados para la Apnea del Sueño"
      : "Custom Sleep Apnea Devices & CPAP Alternatives",
    subtitle: isZh
      ? "告别笨重喧闹的 CPAP 呼吸机。Tribeca Dental Studio 提供高顺应性、轻巧便携的下颌前移口内矫治器 (MAS)，助您重获安静深沉的高质量睡眠。"
      : isEs
      ? "Una alternativa silenciosa, cómoda y portátil a la máquina CPAP. Nuestros dispositivos orales personalizados posicionan suavemente la mandíbula para mantener las vías respiratorias abiertas durante la noche."
      : "Say goodbye to bulky, noisy CPAP masks. Our custom-molded oral appliance therapy offers a comfortable, quiet, and travel-friendly solution for snoring and mild-to-moderate Obstructive Sleep Apnea (OSA).",

    // Section 1: Why Choose Oral Appliances
    whyTitle: isZh ? "为什么选择口内矫治器（口腔装置疗法）？" : isEs ? "¿Por Qué Elegir la Terapia de Dispositivo Oral?" : "Why Choose Custom Oral Appliance Therapy?",
    whySubtitle: isZh
      ? "对于许多无法耐受 CPAP 呼吸机的阻塞性睡眠呼吸暂停 (OSA) 患者，定制口内矫治器是美国睡眠医学学会 (AASM) 认可的合规替代方案："
      : isEs
      ? "Reconocido por la Academia Americana de Medicina del Sueño como una alternativa de primera línea eficaz para pacientes con apnea leve a moderada:"
      : "Recognized by the American Academy of Sleep Medicine (AASM) as a highly effective first-line treatment for snoring and mild-to-moderate sleep apnea:",
    whyPoints: [
      {
        title: isZh ? "无声舒适，告别管路与面罩" : isEs ? "Silencioso y Sin Máscara Incomoda" : "Silent, Mask-Free & Unobtrusive",
        desc: isZh ? "没有管路约束、气流噪音或面部压痕，让您与伴侣整夜静享安睡。" : isEs ? "Sin ruidos de motor ni mangueras molestas que interrumpan su descanso." : "No motor noise, dry air, or awkward headstraps. Sleep naturally in any position.",
      },
      {
        title: isZh ? "轻巧便携，专为出行与差旅设计" : isEs ? "Compacto y Ideal para Viajes" : "Compact & Travel-Friendly",
        desc: isZh ? "小巧轻便如牙套，装入随身盒即可携带上飞机，无需寻找电源插座。" : isEs ? "Cabe fácilmente en su equipaje de mano sin necesidad de enchufes ni agua." : "Fits discreetly into a protective travel case. No outlets or distilled water needed.",
      },
      {
        title: isZh ? "精确下颌前移，保持呼吸道畅通" : isEs ? "Avance Mandibular de Precisión" : "Precision Mandibular Advancement",
        desc: isZh ? "微调下颌微向前移，防止舌根与软腭下垂堵塞气道，从源头消除打鼾。" : isEs ? "Ajusta la mandíbula hacia adelante para evitar el colapso del tejido en la garganta." : "Gently shifts the lower jaw forward to prevent airway collapse and soft tissue obstruction.",
      },
      {
        title: isZh ? "极高顺应性，长期疗效卓越" : isEs ? "Alta Adherencia al Tratamiento" : "Dramatically Higher Compliance",
        desc: isZh ? "因佩戴舒适自然，患者依从率远高于传统 CPAP 呼吸机（高出 85%+）。" : isEs ? "Los pacientes prefieren usarlo todas las noches gracias a su comodidad." : "Patients wear it consistently night after night, leading to better real-world health outcomes.",
      },
    ],

    // Section 2: Clinical Workflow
    workflowTitle: isZh ? "Tribeca 私人定制诊疗流程" : isEs ? "Nuestro Proceso de Tratamiento" : "Our Customized Treatment Process",
    workflowSubtitle: isZh
      ? "结合前沿 3D 口内扫描与 CBCT 气道分析，确保每套矫治器达到毫米级精准度与咬合平衡："
      : isEs
      ? "Combinamos escaneo 3D iTero® y análisis de vías respiratorias para una precisión milimétrica:"
      : "We integrate radiation-free 3D digital impressions and advanced airway diagnostics for precise fitting:",
    workflowSteps: [
      {
        step: "01",
        title: isZh ? "3D 气道评估与数字化扫描" : isEs ? "Evaluación 3D y Escaneo Digital" : "3D Airway Diagnostic & Scanning",
        desc: isZh ? "使用 iTero® 口腔扫描仪免印模取样，配合 3D 气道 CT 精确计算咽腔阻塞点。" : isEs ? "Escaneo iTero® sin moldes de pasta y análisis de volumen de vías respiratorias." : "Full digital impression using iTero® wands and CBCT airway volume mapping.",
      },
      {
        step: "02",
        title: isZh ? "微米级私人矫治器定制" : isEs ? "Diseño y Fabricación de Precisión" : "Custom Device Fabrication",
        desc: isZh ? "根据您的齿列与咬合轨迹，使用医学级高耐用复合材料进行定制打造。" : isEs ? "Fabricado a medida con acrílicos médicos duraderos y biocompatibles." : "Crafted from durable medical-grade materials tailored to your unique bite.",
      },
      {
        step: "03",
        title: isZh ? "精准试戴与下颌微调" : isEs ? "Ajuste Mandibular Gradual" : "Fitting & Fine-Tuned Titration",
        desc: isZh ? "试戴并根据您的体感与呼吸改善程度，进行可调节下颌前移步阶微调。" : isEs ? "Ajustes progresivos para lograr la apertura ideal de las vías aéreas con confort." : "Incremental advancement adjustments to achieve maximal airway opening with zero TMJ stress.",
      },
    ],

    // Section 3: Health Benefits
    benefitsTitle: isZh ? "改善睡眠带给您的健康远期效益" : isEs ? "Beneficios para la Salud Integral" : "Health Benefits of Restorative Sleep",
    benefitsList: [
      isZh ? "显著减少夜间打鼾与窒息憋醒" : isEs ? "Reducción significativa de ronquidos y pausas respiratorias" : "Eliminate chronic night-time snoring and sudden gasping episodes",
      isZh ? "提高白天专注力，消除嗜睡与慢性疲劳" : isEs ? "Elimina la fatiga matutina y mejora la concentración diaria" : "Restore daytime energy, mental clarity, and focus",
      isZh ? "降低高血压、心血管疾病与中风风险" : isEs ? "Reduce el riesgo de hipertensión y enfermedades cardíacas" : "Lower risk of hypertension, cardiovascular strain, and stroke",
      isZh ? "改善晨起头痛、口干与夜尿频繁症状" : isEs ? "Disminuye los dolores de cabeza matutinos y la boca seca" : "Relieve morning headaches, dry mouth, and frequent night urination",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-[#FCFCFC] text-black min-h-screen pt-32 pb-24 font-ddin">
        
        {/* 1. HERO SECTION (50/50 Split) */}
        <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-20" aria-label="Hero Section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* LEFT COLUMN: HERO TEXT */}
            <header>
              <nav className="mb-8" aria-label="Breadcrumb">
                <Link
                  href={`/${lang}/services`}
                  className="text-xs uppercase tracking-[0.25em] font-bold text-neutral-400 hover:text-black transition-colors"
                >
                  ← {isZh ? "返回诊疗服务" : isEs ? "Volver a Servicios" : "Back to Services"}
                </Link>
              </nav>

              <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-3">
                {content.badge}
              </span>

              <h1 className="text-4xl md:text-6xl font-light uppercase tracking-tight leading-[1.05] mb-6 text-neutral-900">
                {content.title}
              </h1>

              <p className="font-brandon text-base md:text-lg text-neutral-600 leading-relaxed mb-8 max-w-xl">
                {content.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-black hover:bg-[#C5A059] text-white font-bold uppercase tracking-[0.2em] text-xs px-8 py-4 transition-all duration-300 shadow-sm"
                >
                  {isZh ? "预约睡眠气道咨询" : isEs ? "Agendar Consulta de Sueño" : "Book Sleep Consultation"}
                </a>
                <a
                  href="tel:2125615303"
                  className="inline-flex items-center justify-center border border-black/20 hover:border-black text-black font-bold uppercase tracking-[0.2em] text-xs px-8 py-4 transition-all duration-300"
                >
                  212-561-5303
                </a>
              </div>
            </header>

            {/* RIGHT COLUMN: HERO IMAGE CARD */}
            <div className="relative aspect-[4/3] bg-neutral-100 border border-neutral-200 overflow-hidden shadow-sm group">
              <Image
                src="/services/sleep-apnea.webp" // Replace with an appropriate sleep appliance photo if available
                alt="Custom Sleep Apnea Appliance Therapy Tribeca Dental Studio"
                fill
                priority
                unoptimized
                className="object-cover object-center filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/90 backdrop-blur-md border border-neutral-200 shadow-md">
                <p className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">
                  Oral Appliance Therapy (OAT)
                </p>
                <p className="font-brandon text-xs text-neutral-600 mt-1 leading-relaxed">
                  {isZh
                    ? "精准量身定制，保持气道夜间畅通，重现安静沉睡。"
                    : isEs
                    ? "Dispositivo médico personalizado para mantener las vías respiratorias abiertas durante la noche."
                    : "Precision-molded to keep your airway open and silent all night long."}
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 2. WHY ORAL APPLIANCE THERAPY */}
        <section className="bg-neutral-50 py-20 px-6 md:px-12 lg:px-20 border-y border-neutral-200 mb-20" id="cpap-alternative">
          <div className="max-w-7xl mx-auto">
            <header className="max-w-2xl mb-12">
              <div className="flex items-center gap-2 text-[#C5A059] mb-2">
                <Moon size={20} aria-hidden="true" />
                <span className="text-xs uppercase tracking-[0.3em] font-bold block">
                  A Better Way To Sleep
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-black mb-4">
                {content.whyTitle}
              </h2>
              <p className="font-brandon text-sm text-neutral-600 leading-relaxed">
                {content.whySubtitle}
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.whyPoints.map((pt, idx) => (
                <article key={idx} className="p-8 bg-white border border-neutral-200 shadow-sm">
                  <h3 className="text-xl font-bold uppercase tracking-tight text-black mb-3 flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-[#C5A059] shrink-0" />
                    {pt.title}
                  </h3>
                  <p className="font-brandon text-xs text-neutral-600 leading-relaxed">
                    {pt.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 3. CLINICAL WORKFLOW */}
        <section className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-20">
          <header className="max-w-2xl mb-12">
            <div className="flex items-center gap-2 text-[#C5A059] mb-2">
              <Stethoscope size={20} aria-hidden="true" />
              <span className="text-xs uppercase tracking-[0.3em] font-bold block">
                Precision Care
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-black mb-4">
              {content.workflowTitle}
            </h2>
            <p className="font-brandon text-sm text-neutral-600 leading-relaxed">
              {content.workflowSubtitle}
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.workflowSteps.map((s, idx) => (
              <article key={idx} className="p-8 bg-white border border-neutral-200 shadow-sm relative">
                <span className="text-3xl font-light text-[#C5A059] block mb-4">
                  {s.step}
                </span>
                <h3 className="text-lg font-bold uppercase tracking-tight text-black mb-3">
                  {s.title}
                </h3>
                <p className="font-brandon text-xs text-neutral-600 leading-relaxed">
                  {s.desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* 4. HEALTH BENEFITS GRID */}
        <section className="bg-neutral-900 text-white py-16 px-6 md:px-12 lg:px-20 border border-neutral-900 max-w-7xl mx-auto mb-20">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-3">
              Overall Wellness
            </span>
            <h2 className="text-2xl md:text-4xl font-light uppercase tracking-tight text-white">
              {content.benefitsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {content.benefitsList.map((b, idx) => (
              <div key={idx} className="p-5 bg-white/5 border border-white/10 flex items-start gap-3">
                <ShieldCheck size={18} className="text-[#C5A059] shrink-0 mt-0.5" />
                <span className="font-brandon text-xs text-neutral-300 leading-relaxed uppercase font-bold">
                  {b}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. INTERNAL LINKING HUB FOR SEO */}
        <section className="py-12 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
          <div className="border border-neutral-200 bg-white p-8 md:p-12 shadow-sm">
            <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] mb-4">
              Explore Related Airway & Orthodontic Care
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href={`/${lang}/services/airway-orthodontics`}
                className="group flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 hover:border-[#C5A059] transition-colors"
              >
                <span className="font-brandon text-xs font-bold uppercase tracking-wider text-black">
                  Airway & Sleep Apnea Care
                </span>
                <ArrowRight size={14} className="text-[#C5A059] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href={`/${lang}/services/palatal-expansion-marpe`}
                className="group flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 hover:border-[#C5A059] transition-colors"
              >
                <span className="font-brandon text-xs font-bold uppercase tracking-wider text-black">
                  Palatal Expansion (MSE/MARPE)
                </span>
                <ArrowRight size={14} className="text-[#C5A059] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href={`/${lang}/leading-edge-technology`}
                className="group flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 hover:border-[#C5A059] transition-colors"
              >
                <span className="font-brandon text-xs font-bold uppercase tracking-wider text-black">
                  3D Airway & Laser Tech
                </span>
                <ArrowRight size={14} className="text-[#C5A059] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href={`/${lang}/testimonials`}
                className="group flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 hover:border-[#C5A059] transition-colors"
              >
                <span className="font-brandon text-xs font-bold uppercase tracking-wider text-black">
                  Patient Sleep Reviews
                </span>
                <ArrowRight size={14} className="text-[#C5A059] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* 6. BOTTOM CTA BANNER */}
        <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto pb-24">
          <div className="bg-black text-white p-10 md:p-16 text-center border border-black">
            <h2 className="text-2xl md:text-4xl font-light uppercase tracking-tight text-white mb-4">
              {isZh ? "重获无声深沉的高质量睡眠" : isEs ? "¿Listo para Volver a Dormir Bien?" : "Rediscover Restful, Silent Sleep"}
            </h2>
            <p className="font-brandon text-sm text-neutral-300 max-w-lg mx-auto mb-8">
              {isZh ? "预约 Tribeca 私人睡眠气道评估，体验定制口内矫治器带来的舒适与改变。" : isEs ? "Reserve una evaluación de sus vías respiratorias en nuestra clínica de Tribeca." : "Schedule your comprehensive airway consultation to explore custom oral appliance therapy."}
            </p>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C5A059] hover:bg-white hover:text-black text-black font-bold uppercase tracking-[0.3em] text-xs px-10 py-5 transition-all duration-300"
            >
              {isZh ? "立即在线预约" : isEs ? "Reservar Cita Ahora" : "Book Online Now"}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}