/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { bookingUrl } from "@/hooks/helper";
import {
  Moon,
  ShieldCheck,
  Stethoscope,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Activity,
  Home,
  Building2,
  Clock,
} from "lucide-react";

// --- MAXIMUM SEO METADATA & OPENGRAPH CONFIGURATION ---
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isZh = lang === "zh";
  const isEs = lang === "es";

  const title = isZh
    ? "纽约 Tribeca 专科级睡眠呼吸监测 (Sleep Studies) | Tribeca Dental Studio"
    : isEs
    ? "Estudios del Sueño (Polisomnografía) en Tribeca, NYC | Tribeca Dental Studio"
    : "Sleep Studies (In-Lab & Home Testing) Tribeca, NYC | Tribeca Dental Studio";

  const description = isZh
    ? "纽约 Tribeca 专科级睡眠呼吸检测：提供便携式居家睡眠监测 (HSAT) 与实验室多导睡眠图 (PSG)。精准诊断阻塞性睡眠呼吸暂停 (OSA) 与打鼾，开启科学睡眠治理。"
    : isEs
    ? "Pruebas de apnea del sueño en casa (HSAT) y polisomnografía en laboratorio (PSG) en Lower Manhattan, NYC. Diagnóstico preciso para ronquidos, insomnio y apnea obstructiva del sueño."
    : "Comprehensive diagnostic sleep studies in Tribeca, NYC. Offering portable Home Sleep Apnea Tests (HSAT) and in-lab polysomnography (PSG) to diagnose OSA, snoring, and sleep disorders.";

  return {
    title,
    description,
    keywords: [
      "Sleep Studies NYC",
      "Home Sleep Apnea Test Tribeca",
      "HSAT Test Lower Manhattan",
      "Polysomnography PSG NYC",
      "Sleep Apnea Diagnosis Manhattan",
      "Snoring Evaluation Tribeca",
      "Sleep Apnea Dentist Lower Manhattan",
      "CPAP Titration Study NYC",
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
      url: `https://tribecadentalstudio.com/${lang}/services/sleep-studies`,
      siteName: "Tribeca Dental Studio",
      images: [
        {
          url: "https://tribecadentalstudio.com/about-studio.jpg",
          width: 1200,
          height: 630,
          alt: "In-Lab and Home Sleep Studies at Tribeca Dental Studio NYC",
        },
      ],
      locale: lang === "zh" ? "zh_CN" : lang === "es" ? "es_ES" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://tribecadentalstudio.com/about-studio.jpg"],
    },
    alternates: {
      canonical: `https://tribecadentalstudio.com/${lang}/services/sleep-studies`,
      languages: {
        en: "https://tribecadentalstudio.com/en/services/sleep-studies",
        es: "https://tribecadentalstudio.com/es/services/sleep-studies",
        zh: "https://tribecadentalstudio.com/zh/services/sleep-studies",
      },
    },
  };
}

export default async function SleepStudiesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isZh = lang === "zh";
  const isEs = lang === "es";

  // --- JSON-LD STRUCTURED DATA (Schema.org Dentist & MedicalProcedure) ---
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
          "addressCountry": "US",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 40.7145,
          "longitude": -74.0082,
        },
        "knowsAbout": [
          "Diagnostic Sleep Studies",
          "Home Sleep Apnea Testing (HSAT)",
          "In-Lab Polysomnography (PSG)",
          "Obstructive Sleep Apnea Diagnosis",
          "Airway & Sleep Dentistry",
          "Oral Appliance Therapy Titration",
        ],
      },
      {
        "@type": "MedicalProcedure",
        "name": "Diagnostic Sleep Study (Polysomnography & Home Testing)",
        "procedureType": "Non-Invasive Diagnostic Sleep & Airway Monitoring",
        "bodyLocation": "Respiratory Tract, Airway, Brain Waves, Heart Rate",
        "relevantSpecialty": {
          "@type": "MedicalSpecialty",
          "name": "Sleep Dentistry & Airway Medicine",
        },
      },
    ],
  };

  const content = {
    badge: isZh
      ? "睡眠与气道精准诊断中心"
      : isEs
      ? "Diagnóstico del Sueño y Vías Respiratorias"
      : "Sleep Diagnostics & Airway Medicine",
    title: isZh
      ? "纽约 Tribeca 专科级睡眠呼吸监测 (Sleep Studies)"
      : isEs
      ? "Estudios del Sueño en Tribeca, NYC"
      : "Diagnostic Sleep Studies in Tribeca, NYC",
    subtitle: isZh
      ? "频繁打鼾、晨起疲劳或夜间惊醒？数百万人的健康隐患源于未确诊的睡眠呼吸暂停。Tribeca Dental Studio 提供便携式居家检测 (HSAT) 与实验室多导睡眠图 (PSG)，助您揭开失眠真相并开启科学治理。"
      : isEs
      ? "Un estudio del sueño es el primer paso hacia noches verdaderamente reparadoras. Diagnosticamos la apnea del sueño, ronquidos e insomnio mediante pruebas convenientes en su hogar o en nuestro laboratorio."
      : "Struggling with chronic snoring, morning fatigue, or restless sleep? Our comprehensive in-lab and home sleep studies diagnose the root cause of sleep-disordered breathing to protect your heart, brain, and overall health.",

    // Section 1: Indications
    indicationsTitle: isZh ? "谁需要接受睡眠监测评估？" : isEs ? "¿Quién Debe Considerar un Estudio del Sueño?" : "Who Should Consider a Sleep Evaluation?",
    indicationsSubtitle: isZh
      ? "如果您或您的家人注意到以下睡眠与身体体征，建议尽快安排睡眠监测："
      : isEs
      ? "Si experimenta alguno de los siguientes síntomas, una evaluación del sueño puede ser vital:"
      : "If you or your bed partner notice any of these warning signs, a sleep test can be life-changing:",
    indicationsList: [
      isZh ? "持续性剧烈打鼾、夜间频繁憋气与窒息惊醒" : isEs ? "Ronquidos fuertes y pausas respiratorias o ahogo nocturno" : "Loud, ongoing snoring, choking, or gasping episodes at night",
      isZh ? "白日常规嗜睡、大脑昏沉、注意力难以集中" : isEs ? "Fatiga diurna persistente y dificultad para concentrarse" : "Persistent daytime exhaustion, brain fog, or low energy levels",
      isZh ? "晨起口干舌燥、频繁偏头痛或夜尿增多" : isEs ? "Dolores de cabeza matutinos y sequedad bucal al despertar" : "Morning headaches, waking with dry mouth, or frequent night urination",
      isZh ? "伴有高血压、心血管疾病、糖尿病或体重偏高" : isEs ? "Antecedentes de hipertensión, problemas cardíacos o diabetes" : "Co-existing high blood pressure, heart strain, or type 2 diabetes",
      isZh ? "儿童睡眠不安、张口呼吸、情绪易怒或注意力缺陷 (ADHD 似症状)" : isEs ? "Sueño inquieto o respiración bucal en niños" : "Restless sleep, mouth breathing, or focus issues in children",
    ],

    // Section 2: Types of Studies
    testingTypesTitle: isZh ? "Tribeca 双轨双重睡眠诊断方案" : isEs ? "Tipos de Estudios del Sueño que Ofrecemos" : "Types of Sleep Studies Available",
    testingTypes: [
      {
        icon: Home,
        type: isZh ? "居家便携睡眠检测 (HSAT)" : isEs ? "Prueba de Apnea en Casa (HSAT)" : "Home Sleep Apnea Test (HSAT)",
        tag: isZh ? "舒适·便携·私密" : isEs ? "Cómodo y Conveniente" : "Convenient & Comfortable",
        desc: isZh
          ? "使用 FDA 认证的轻巧智能检测仪，只需在自家卧室将小巧传感器佩戴于手指与胸前，睡醒后还回设备即可解析数据。非常适合怀疑罹患 OSA 的患者。"
          : isEs
          ? "Dispositivo portátil aprobado por la FDA para monitorear la respiración, el pulso y la oxigenación en la comodidad de su propia cama."
          : "An FDA-approved portable device that tracks oxygen saturation, respiratory effort, and heart rate in the comfort and privacy of your own bed.",
      },
      {
        icon: Building2,
        type: isZh ? "实验室多导睡眠图 (PSG)" : isEs ? "Polisomnografía en Laboratorio (PSG)" : "In-Lab Polysomnography (PSG)",
        tag: isZh ? "权威·金标准·全维度" : isEs ? "Estándar de Oro Clínico" : "Gold-Standard Diagnostic",
        desc: isZh
          ? "在专科睡眠诊疗间内进行整夜连续监测，全方位记录脑电波 (EEG)、眼球运动、肌电图、心律与呼吸阻力。特别适合复杂型或混合型睡眠障碍。"
          : isEs
          ? "Monitoreo completo en una habitación privada que registra ondas cerebrales, esfuerzo respiratorio, actividad muscular y tono cardíaco."
          : "Monitored overnight in a private, quiet clinical suite to measure brain waves, eye movements, respiratory effort, and heart rhythms for complex cases.",
      },
      {
        icon: Clock,
        type: isZh ? "CPAP / 口内矫治器压力压力调整 (Titration)" : isEs ? "Estudio de Titulación CPAP / Dispositivo" : "Appliance & CPAP Titration Study",
        tag: isZh ? "精准·调优·个人化" : isEs ? "Ajuste de Precisión" : "Optimal Airway Calibration",
        desc: isZh
          ? "针对已确诊患有睡眠呼吸暂停的患者，通过实地动态调整下颌矫治器 (Oral Appliance) 或 CPAP 压力数值，确保气道达到最优通畅效率。"
          : isEs
          ? "Determina la presión ideal de CPAP o el avance mandibular del dispositivo oral para mantener la vía aérea abierta."
          : "Calibrates the exact airflow pressure or mandibular advancement steps needed to guarantee zero airway collapses night after night.",
      },
    ],

    // Section 3: Process Steps
    workflowTitle: isZh ? "从监测到康复的全流程步骤" : isEs ? "El Proceso: De la Prueba a la Recuperación" : "What to Expect: Step-by-Step",
    steps: [
      {
        num: "01",
        title: isZh ? "气道评估与检测设备领用" : isEs ? "Evaluación y Entrega del Equipo" : "Consultation & Device Setup",
        desc: isZh ? "初诊评估气道形态，领用小巧的便携检测仪器（或预约专科监测室）。" : isEs ? "Examen inicial y entrega de instrucciones sencillas para la prueba en casa." : "In-depth clinical assessment followed by simple device pickup and night setup guidance.",
      },
      {
        num: "02",
        title: isZh ? "无感整夜监测记录" : isEs ? "Registro del Sueño Nocturno" : "Overnight Data Collection",
        desc: isZh ? "按照正常作息入睡，仪器会自动精准采集血氧、呼吸停止事件与打鼾频率。" : isEs ? "El dispositivo registra automáticamente los niveles de oxígeno y pausas respiratorias." : "Sleep naturally while the device seamlessly records blood oxygen, breathing pauses, and snoring intensity.",
      },
      {
        num: "03",
        title: isZh ? "专家报告解读与定制方案" : isEs ? "Diagnóstico y Plan de Tratamiento" : "Specialist Analysis & Treatment",
        desc: isZh ? "由睡眠专科医师出具详细 AHI 指数分析，并制定无音口内矫治器、激光止鼾或扩弓方案。" : isEs ? "Análisis detallado de los datos por un especialista y propuesta de tratamiento." : "Sleep specialists review your data to provide a clear diagnosis and custom oral appliance or laser plan.",
      },
    ],

    // Section 4: FAQs
    faqsTitle: isZh ? "睡眠呼吸监测常见问题解答" : isEs ? "Preguntas Frecuentes sobre Estudios del Sueño" : "Frequently Asked Questions About Sleep Studies",
    faqs: [
      {
        q: isZh ? "居家睡眠检测 (HSAT) 准确吗？" : isEs ? "¿Es precisa la prueba del sueño en casa?" : "How accurate is a Home Sleep Apnea Test (HSAT)?",
        a: isZh
          ? "对于绝大多数怀疑患有阻塞性睡眠呼吸暂停 (OSA) 的中成年人而言，FDA 认证的居家监测设备具有与实验室极其相近的可靠性，且具有极高隐私性与舒适度。"
          : isEs
          ? "Para la mayoría de los pacientes con sospecha de apnea obstructiva del sueño, las pruebas en casa aprobadas por la FDA ofrecen resultados sumamente precisos y cómodos."
          : "For the vast majority of patients with suspected Obstructive Sleep Apnea (OSA), FDA-approved home sleep devices offer high diagnostic precision in the privacy of your own bed.",
      },
      {
        q: isZh ? "在检测当天我需要做哪些准备？" : isEs ? "¿Cómo debo prepararme para el estudio del sueño?" : "How should I prepare for my sleep test?",
        a: isZh
          ? "当天请避免饮用咖啡、茶及饮酒，维持正常的日常作息。如果您进行实验室监测，请保持头发清洁干燥，勿涂抹造型发胶。"
          : isEs
          ? "Evite la cafeína y el alcohol el día de la prueba, mantenga su horario habitual y no use geles para el cabello si asiste al laboratorio."
          : "Avoid caffeine and alcohol on the day of your test, stick to your regular sleep schedule, and ensure clean hair (free of gels/oils) if completing an in-lab study.",
      },
      {
        q: isZh ? "如果确诊患有睡眠呼吸暂停，接下来的治疗是什么？" : isEs ? "¿Qué sucede si me diagnostican apnea del sueño?" : "What happens if I am diagnosed with sleep apnea?",
        a: isZh
          ? "对于不愿佩戴 CPAP 呼吸机的患者，Tribeca Dental Studio 专精于定制无声、便携的下颌前移口内矫治器 (Oral Appliance)，并可结合 NightLase® 激光止鼾或 MARPE 上颌扩弓从根源解决。"
          : isEs
          ? "Si padece apnea leve a moderada, ofrecemos dispositivos orales personalizados como alternativa al CPAP, así como terapia láser NightLase®."
          : "If diagnosed with mild-to-moderate OSA, we provide quiet, custom oral appliances as a comfortable alternative to CPAP, often paired with NightLase® or MARPE expansion.",
      },
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
        <section
          className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-20"
          aria-label="Hero Section"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* LEFT COLUMN: HERO TEXT */}
            <header>
              <nav className="mb-8" aria-label="Breadcrumb">
                <Link
                  href={`/${lang}/services/airway-orthodontics`}
                  className="text-xs uppercase tracking-[0.25em] font-bold text-neutral-400 hover:text-black transition-colors"
                >
                  ← {isZh ? "返回气道正畸" : isEs ? "Volver a Vías Respiratorias" : "Back to Airway Treatments"}
                </Link>
              </nav>

              <div className="flex items-center gap-2 text-[#C5A059] mb-3">
                <Moon size={18} />
                <span className="text-xs uppercase tracking-[0.3em] font-bold block">
                  Diagnostic Sleep Studies
                </span>
              </div>

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
                  {isZh
                    ? "预约睡眠检测咨询"
                    : isEs
                    ? "Agendar Estudio del Sueño"
                    : "Schedule Sleep Test"}
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
                src="/services/sleepstudies.webp"
                alt="Diagnostic Sleep Studies In-Lab and Home Testing Tribeca Dental Studio"
                fill
                priority
                unoptimized
                className="object-cover object-center filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/90 backdrop-blur-md border border-neutral-200 shadow-md">
                <p className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">
                  In-Home & In-Lab Sleep Testing
                </p>
                <p className="font-brandon text-xs text-neutral-600 mt-1 leading-relaxed">
                  {isZh
                    ? "精准记录夜间血氧饱和度、呼吸暂停事件与心律变化，破译打鼾成因。"
                    : isEs
                    ? "Diagnóstico preciso de la apnea del sueño en la comodidad de su hogar."
                    : "Precision recording of blood oxygen levels, breathing events, and sleep quality."}
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 2. SYMPTOMS & INDICATIONS */}
        <section className="bg-neutral-50 py-20 px-6 md:px-12 lg:px-20 border-y border-neutral-200 mb-20" id="indications">
          <div className="max-w-7xl mx-auto">
            <header className="max-w-2xl mb-12">
              <div className="flex items-center gap-2 text-[#C5A059] mb-2">
                <Activity size={20} aria-hidden="true" />
                <span className="text-xs uppercase tracking-[0.3em] font-bold block">
                  Diagnostic Criteria
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-black mb-4">
                {content.indicationsTitle}
              </h2>
              <p className="font-brandon text-sm text-neutral-600 leading-relaxed">
                {content.indicationsSubtitle}
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.indicationsList.map((ind, idx) => (
                <article
                  key={idx}
                  className="p-6 bg-white border border-neutral-200 shadow-sm flex items-start gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="text-[#C5A059] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="font-brandon text-xs font-bold text-neutral-700 leading-relaxed uppercase">
                    {ind}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 3. TYPES OF SLEEP STUDIES */}
        <section className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-20" id="study-types">
          <header className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-[#C5A059] mb-2">
              <Stethoscope size={20} aria-hidden="true" />
              <span className="text-xs uppercase tracking-[0.3em] font-bold block">
                Testing Options
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-black mb-4">
              {content.testingTypesTitle}
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.testingTypes.map((t, idx) => {
              const Icon = t.icon;
              return (
                <article
                  key={idx}
                  className="p-8 bg-white border border-neutral-200 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Icon size={28} className="text-[#C5A059]" />
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A059] bg-[#C5A059]/10 px-2.5 py-1">
                        {t.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-tight text-black mb-3">
                      {t.type}
                    </h3>
                    <p className="font-brandon text-xs text-neutral-600 leading-relaxed">
                      {t.desc}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* 4. WORKFLOW STEPS */}
        <section className="bg-neutral-900 text-white py-16 px-6 md:px-12 lg:px-20 border border-neutral-900 max-w-7xl mx-auto mb-20" id="workflow">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-3">
              Streamlined Process
            </span>
            <h2 className="text-2xl md:text-4xl font-light uppercase tracking-tight text-white">
              {content.workflowTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.steps.map((st, idx) => (
              <article key={idx} className="p-8 bg-white/5 border border-white/10 relative">
                <span className="text-3xl font-light text-[#C5A059] block mb-4">
                  {st.num}
                </span>
                <h3 className="text-lg font-bold uppercase tracking-tight text-white mb-3">
                  {st.title}
                </h3>
                <p className="font-brandon text-xs text-neutral-300 leading-relaxed">
                  {st.desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* 5. INTERACTIVE FAQ ACCORDION */}
        <section className="py-16 px-6 md:px-12 lg:px-20 max-w-4xl mx-auto mb-20" id="faqs">
          <header className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-3">
              Patient Knowledge
            </span>
            <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-black">
              {content.faqsTitle}
            </h2>
          </header>

          <div className="space-y-4">
            {content.faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group border border-neutral-200 bg-white p-6 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer font-bold uppercase text-sm text-black tracking-tight">
                  <span>{faq.q}</span>
                  <span className="ml-4 transition-transform group-open:rotate-180 text-[#C5A059]">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <p className="mt-4 font-brandon text-xs text-neutral-600 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* 6. INTERNAL LINKING HUB FOR SEO */}
        <section className="py-12 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
          <div className="border border-neutral-200 bg-white p-8 md:p-12 shadow-sm">
            <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] mb-4">
              Explore Related Sleep & Airway Treatments
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href={`/${lang}/services/sleep-apnea-devices`}
                className="group flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 hover:border-[#C5A059] transition-colors"
              >
                <span className="font-brandon text-xs font-bold uppercase tracking-wider text-black">
                  Sleep Apnea Oral Appliances
                </span>
                <ArrowRight
                  size={14}
                  className="text-[#C5A059] group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
                href={`/${lang}/services/orthodontics-treatments`}
                className="group flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 hover:border-[#C5A059] transition-colors"
              >
                <span className="font-brandon text-xs font-bold uppercase tracking-wider text-black">
                  Airway Orthodontics & NightLase®
                </span>
                <ArrowRight
                  size={14}
                  className="text-[#C5A059] group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
                href={`/${lang}/services/palatal-expansion-marpe`}
                className="group flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 hover:border-[#C5A059] transition-colors"
              >
                <span className="font-brandon text-xs font-bold uppercase tracking-wider text-black">
                  Palatal Expansion (MARPE)
                </span>
                <ArrowRight
                  size={14}
                  className="text-[#C5A059] group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
                href={`/${lang}/leading-edge-technology`}
                className="group flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 hover:border-[#C5A059] transition-colors"
              >
                <span className="font-brandon text-xs font-bold uppercase tracking-wider text-black">
                  3D CBCT Airway Diagnostics
                </span>
                <ArrowRight
                  size={14}
                  className="text-[#C5A059] group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* 7. BOTTOM CTA BANNER */}
        <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto pb-24">
          <div className="bg-black text-white p-10 md:p-16 text-center border border-black">
            <h2 className="text-2xl md:text-4xl font-light uppercase tracking-tight text-white mb-4">
              {isZh
                ? "开启科学睡眠监测，重获深沉好睡眠"
                : isEs
                ? "¿Listo para Descubrir la Causa de su Mal Sueño?"
                : "Schedule Your Sleep Study Consultation in NYC"}
            </h2>
            <p className="font-brandon text-sm text-neutral-300 max-w-lg mx-auto mb-8">
              {isZh
                ? "即刻预约 Tribeca Dental Studio，让专业睡眠监测为您找到科学恢复活力的关键。"
                : isEs
                ? "Contacte a nuestro equipo de especialistas en el Lower Manhattan."
                : "Uncover the cause of your restless nights and find effective, comfortable solutions today."}
            </p>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C5A059] hover:bg-white hover:text-black text-black font-bold uppercase tracking-[0.3em] text-xs px-10 py-5 transition-all duration-300"
            >
              {isZh ? "立即在线预约" : isEs ? "Reservar Cita Ahora" : "Book Sleep Evaluation Now"}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}