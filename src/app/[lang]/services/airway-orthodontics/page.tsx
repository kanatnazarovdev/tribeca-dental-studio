/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { bookingUrl } from "@/hooks/helper";
import {
  Wind,
  Moon,
  Stethoscope,
  Sparkles,
  Zap,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Layers,
  Cpu,
} from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isZh = lang === "zh";
  const isEs = lang === "es";

  const title = isZh
    ? "纽约气道正畸与睡眠治疗 | Tribeca Dental Studio"
    : isEs
    ? "Tratamientos de Vías Respiratorias y Ortodoncia | Tribeca Dental Studio"
    : "Airway Treatments & Airway Orthodontics Tribeca, NYC | Tribeca Dental Studio";

  const description = isZh
    ? "纽约 Tribeca 专科级气道正畸与睡眠治疗：提供无创 NightLase® 激光止鼾、MSE/MARPE 上颌骨扩展、睡眠呼吸暂停口腔矫治器与激光舌系带切除术 (Frenectomy)。"
    : isEs
    ? "Tratamientos avanzados de vías respiratorias y ortodoncia en Tribeca, NYC. Tratamos apnea del sueño, ronquidos, expansión palatina MARPE/MSE y láser frenectomía."
    : "Comprehensive airway treatments & airway orthodontics in Lower Manhattan, NYC. Offering NightLase® laser snoring therapy, MSE/MARPE palatal expansion, custom sleep apnea appliances, and laser frenectomy.";

  return {
    title,
    description,
    keywords: [
      "Airway Orthodontics NYC",
      "Airway Treatments Tribeca",
      "NightLase Snoring Treatment NYC",
      "MARPE Palatal Expansion Lower Manhattan",
      "MSE Expansion Dentist NYC",
      "Pediatric Airway Dentist Tribeca",
      "Sleep Apnea Dentist Lower Manhattan",
      "Laser Frenectomy Tongue Tie NYC",
      "Functional Dentistry Airway Manhattan",
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
      url: `https://tribecadentalstudio.com/${lang}/services/airway-orthodontics`,
      siteName: "Tribeca Dental Studio",
      images: [
        {
          url: "https://tribecadentalstudio.com/about-studio.jpg",
          width: 1200,
          height: 630,
          alt: "Airway Treatments and Airway Orthodontics at Tribeca Dental Studio NYC",
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
      canonical: `https://tribecadentalstudio.com/${lang}/services/airway-orthodontics`,
      languages: {
        en: "https://tribecadentalstudio.com/en/services/airway-orthodontics",
        es: "https://tribecadentalstudio.com/es/services/airway-orthodontics",
        zh: "https://tribecadentalstudio.com/zh/services/airway-orthodontics",
      },
    },
  };
}

export default async function AirwayTreatmentsPage({
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
          "addressCountry": "US",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 40.7145,
          "longitude": -74.0082,
        },
        "knowsAbout": [
          "Airway Orthodontics",
          "Airway Focused Dentistry",
          "NightLase Laser Snoring Therapy",
          "Maxillary Skeletal Expansion (MSE)",
          "Minimally Invasive Antral Expansion (MARPE)",
          "Custom Sleep Apnea Appliances",
          "Laser Frenectomy Tongue Tie Release",
        ],
      },
      {
        "@type": "MedicalProcedure",
        "name": "Airway Orthodontics & Sleep Airway Treatment",
        "procedureType": "Non-invasive & Orthodontic Airway Optimization",
        "bodyLocation": "Airway, Upper Jaw, Soft Palate, Mouth",
        "relevantSpecialty": {
          "@type": "MedicalSpecialty",
          "name": "Orthodontics & Functional Dentistry",
        },
      },
    ],
  };

  const content = {
    badge: isZh
      ? "气道与正畸重塑中心"
      : isEs
      ? "Vías Respiratorias y Ortodoncia"
      : "Airway & Functional Orthodontics",
    title: isZh
      ? "纽约 Tribeca 气道正畸与睡眠治疗"
      : isEs
      ? "Tratamientos de Vías Respiratorias en Tribeca, NYC"
      : "Airway Treatments & Airway Orthodontics in Tribeca, NYC",
    subtitle: isZh
      ? "健康顺畅的呼吸是全身健康的基石。在 Tribeca Dental Studio，我们不仅矫正牙齿排齐，更通过重塑上颌骨与气道空间，根本改善呼吸通畅度、睡眠质量与生命活力。"
      : isEs
      ? "La respiración saludable es la base del bienestar general. En Tribeca Dental Studio, no solo alineamos sus dientes, sino que mejoramos el flujo de aire, la calidad del sueño y la salud integral."
      : "Healthy breathing is the foundation of overall wellness. Our modern approach to orthodontic care doesn't just straighten teeth—it optimizes airflow, sleep quality, and long-term vitality for both children and adults.",

    // Section 1: Signs
    signsTitle: isZh
      ? "您或您的孩子是否需要气道诊断？"
      : isEs
      ? "Signos de que Necesita Evaluación de Vías Respiratorias"
      : "Signs You or Your Child May Benefit from Airway Care",
    signsList: [
      isZh
        ? "睡眠时习惯性打鼾、呼吸粗重或憋气"
        : isEs
        ? "Ronquidos crónicos o respiraciónruidosa durante el sueño"
        : "Chronic snoring or noisy, labored breathing during sleep",
      isZh
        ? "日间或夜间频繁张口呼吸 (Mouth Breathing)"
        : isEs
        ? "Respiración por la boca frecuente (día o noche)"
        : "Frequent mouth breathing during the day or night",
      isZh
        ? "儿童夜间睡眠不安、尿床、注意力不集中 (似 ADHD 症状)"
        : isEs
        ? "Sueño inquieto, enuresis o falta de atención en niños"
        : "Restless sleep, bedwetting, daytime fatigue, or ADHD-like focus challenges in kids",
      isZh
        ? "晨起头痛、白天嗜睡疲劳与慢性偏头痛"
        : isEs
        ? "Dolores de cabeza matutinos y fatiga crónica diurna"
        : "Morning headaches, TMJ jaw strain, clenching, or chronic daytime exhaustion",
      isZh
        ? "牙弓狭窄、牙齿拥挤、下颌后缩与面部发育受限"
        : isEs
        ? "Arcos dentales estrechos, dientes apiñados o mandíbula retraída"
        : "Narrow dental arches, crowded teeth, or recessed jawline development",
    ],

    // Section 2: Modalities with Links & Differentiated MSE/MARPE
    treatmentsTitle: isZh
      ? "Tribeca 专科级气道治疗方案"
      : isEs
      ? "Opciones de Tratamiento de Vías Respiratorias en Tribeca"
      : "Airway Treatment Modalities in NYC",
    treatmentsSubtitle: isZh
      ? "我们拒绝单一治疗方案。借助 3D CBCT 锥体 CT 图像，我们针对您的解剖结构量身定制综合治疗路径："
      : isEs
      ? "Utilizamos herramientas avanzadas de diagnóstico 3D CBCT para evaluar su anatomía y crear un plan personalizado:"
      : "Our approach is not one-size-fits-all. We utilize advanced 3D CBCT imaging to evaluate your unique anatomy and offer target-driven modalities:",

    modalities: [
      {
        icon: Zap,
        title: isZh ? "NightLase® 激光止鼾与睡眠疗法" : isEs ? "Terapia NightLase® para Ronquidos" : "NightLase® Therapy for Snoring & Sleep Apnea",
        href: `/${lang}/leading-edge-technology`,
        badge: isZh ? "无创激光" : isEs ? "Sin Cirugía" : "Non-Invasive Laser",
        desc: isZh
          ? "NightLase® 是一种温和的非手术激光疗法，可收紧咽喉与软腭肌肉组织，减少夜间气道塌陷。无需手术、无恢复期，快速减轻打鼾和轻至中度睡眠呼吸暂停。"
          : isEs
          ? "Tratamiento láser no quirúrgico que tensa los tejidos de la garganta para reducir el colapso de vías respiratorias sin tiempo de inactividad."
          : "NightLase® is a gentle, non-surgical laser treatment that tightens throat and soft palate tissues to reduce airway collapse with zero downtime.",
      },
      {
        icon: Layers,
        title: isZh ? "MARPE 腭扩弓 (微螺钉辅助)" : isEs ? "Expansión Palatina (MARPE)" : "Palatal Expansion (MARPE)",
        href: `/${lang}/services/palatal-expansion-marpe`,
        badge: isZh ? "早期与骨骼引导" : isEs ? "Guía del Crecimiento" : "Growth & Airway Expansion",
        desc: isZh
          ? "微螺钉辅助快速腭扩弓 (MARPE) 通过锚定微螺钉直接拓宽上颌骨基底，扩大鼻腔通气容积，尤其适合生长发育期的儿童与青少年。"
          : isEs
          ? "MARPE utiliza microimplantes para ampliar el hueso del maxilar superior, aumentando el espacio nasal y alineando la dentadura."
          : "Miniscrew-assisted rapid palatal expansion (MARPE) anchors directly to the palate bone to broaden upper jaw width, improving dental arch room and nasal airflow.",
      },
      {
        icon: Cpu,
        title: isZh ? "MSE 上颌骨扩展 (专为成人)" : isEs ? "Expansión Esquelética Maxilar (MSE)" : "Maxillary Skeletal Expansion (MSE)",
        href: `/${lang}/services/maxillary-skeletal-expansion`,
        badge: isZh ? "成人骨骼级扩弓" : isEs ? "Para Adultos y Jóvenes" : "Adult Skeletal Expansion",
        desc: isZh
          ? "与仅倾斜牙齿的传统扩弓器不同，MSE 采用四枚双皮质微螺钉，为骨骼已成熟的成人实现真正的上颌骨平行骨骼分离，大幅提升鼻腔通气总量。"
          : isEs
          ? "A diferencia de los expansores convencionales, MSE actúa a nivel esquelético mediante cuatro microimplantes, logrando expansión paralela sin cirugía."
          : "MSE targets the midpalatal suture directly using bicortical micro-implants, delivering true parallel skeletal jaw expansion for adults without surgery.",
      },
      {
        icon: Moon,
        title: isZh ? "定制睡眠呼吸暂停口内矫治器" : isEs ? "Dispositivos Personalizados para Apnea" : "Custom Sleep Apnea Devices",
        href: `/${lang}/services/sleep-apnea-devices`,
        badge: isZh ? "CPAP 替代方案" : isEs ? "Alternativa a CPAP" : "CPAP Alternative",
        desc: isZh
          ? "针对无法耐受 CPAP 呼吸机的成人，我们提供量身定制的下颌前移口内矫治器，在前移下颌与舌体的同时保持气道夜间畅通。"
          : isEs
          ? "Dispositivos orales personalizados diseñados para reposicionar la mandíbula y mantener la vía aérea abierta durante toda la noche."
          : "For adults struggling with CPAP machines, custom oral appliances reposition the jaw and tongue forward to keep the airway clear and silent all night.",
      },
      {
        icon: Stethoscope,
        title: isZh ? "精确睡眠监测 (Sleep Studies)" : isEs ? "Estudios del Sueño (PSG y HSAT)" : "Diagnostic Sleep Studies (In-Lab & Home)",
        href: `/${lang}/services/sleep-studies`,
        badge: isZh ? "居家与诊所监测" : isEs ? "Pruebas en Casa" : "Home & Lab Testing",
        desc: isZh
          ? "睡眠监测可记录血氧、呼吸事件与心律。我们提供方便舒适的居家睡眠检测 (HSAT) 与实验室多导睡眠图 (PSG)，精准诊断 OSA。"
          : isEs
          ? "Exámenes diagnósticos que monitorean su respiración y oxigenación. Ofrecemos pruebas en casa (HSAT) y en laboratorio (PSG)."
          : "Comprehensive diagnostic assessments (Polysomnography or convenient Home Sleep Apnea Tests) that evaluate oxygen levels and respiratory effort.",
      },
      {
        icon: Sparkles,
        title: isZh ? "水激光唇/舌系带微创切除术" : isEs ? "Tratamiento de Frenillo Lingual y Labial" : "Gentle Laser Tongue & Lip Tie Release",
        href: `/${lang}/services/tongue-lip-tie-frenectomy`,
        badge: isZh ? "Dr. Nina 功能齿科" : isEs ? "Frenectomía Láser" : "Laser Frenectomy",
        desc: isZh
          ? "由功能齿科专家 Dr. Nina Izhaky 亲诊，使用无血无痛水激光精准切除限制性舌/唇系带，恢复正确舌位与吞咽呼能。"
          : isEs
          ? "Dr. Nina Izhaky realiza frenectomías láser de precisión para liberar restricciones linguales, mejorando la lactancia y la respiración."
          : "Functional dentist Dr. Nina Izhaky performs gentle laser frenectomies in NYC to release tongue and lip restrictions safely for infants, kids, and adults.",
      },
    ],

    // Section 3: Pediatric vs Adult
    pediatricVsAdultTitle: isZh
      ? "儿童与成人的差异化气道管理"
      : isEs
      ? "Atención Enfocada en Niños y Adultos"
      : "Airway-Focused Care for Children & Adults",
    pediatricDesc: isZh
      ? "儿童期正处于颌骨发育黄金期。通过气道正畸引导下颌生长、扩宽牙弓，可有效预防慢性睡眠障碍、支持面部对称发育并改善学习专注度。"
      : isEs
      ? "En niños, guiamos el crecimiento de la mandíbula y expandimos los arcos para prevenir problemas crónicos del sueño y apoyar el desarrollo facial adecuado."
      : "In children, early intervention guides jaw development, expands arches, establishes nasal breathing, and prevents chronic sleep or behavioral issues.",
    adultDesc: isZh
      ? "成人期侧重于解决已形成的阻塞。通过微创激光、骨支撑扩弓或口内矫治器，可显著减少打鼾、缓解 TMJ 咬合疼痛并大幅提升白天精力。"
      : isEs
      ? "En adultos, el tratamiento reduce los ronquidos, maneja la apnea del sueño y alivia las molestias de la articulación temporomandibular (ATM)."
      : "In adults, care focuses on reducing snoring, managing mild-to-moderate sleep apnea, opening nasal passages, and relieving TMJ tension.",

    // FAQs
    faqsTitle: isZh
      ? "常见问题解答 (FAQ)"
      : isEs
      ? "Preguntas Frecuentes"
      : "Frequently Asked Questions",
    faqs: [
      {
        q: isZh
          ? "气道正畸只是针对儿童吗？"
          : isEs
          ? "¿La ortodoncia de vías respiratorias es solo para niños?"
          : "Is airway orthodontics only for children?",
        a: isZh
          ? "不是。虽然儿童早期干预效果最佳，但成人同样能从 MSE 扩弓、NightLase® 激光和睡眠矫治器中大幅获益，有效改善 sleep apnea 与打鼾。"
          : isEs
          ? "No. Aunque el tratamiento temprano en niños ofrece excelentes resultados a largo plazo, los adultos obtienen enormes beneficios para la apnea del sueño y ronquidos."
          : "No. While early guidance in children yields optimal lifelong results, adults see massive benefits, particularly for sleep apnea, TMJ strain, and chronic snoring.",
      },
      {
        q: isZh
          ? "牙医真的能够治疗睡眠呼吸暂停吗？"
          : isEs
          ? "¿Puede un dentista realmente tratar la apnea del sueño?"
          : "Can a dentist really help with sleep apnea?",
        a: isZh
          ? "是的。牙医位于筛查口咽气道的第一线。对于轻至中度阻塞性睡眠呼吸暂停 (OSA)，专科定制的口内矫治器是 AASM 权威认可的 CPAP 完美替代方案。"
          : isEs
          ? "¡Absolutamente! Los dentistas están capacitados para identificar colapsos en las vías respiratorias y ofrecer dispositivos orales personalizados altamente efectivos."
          : "Absolutely. Dentists are uniquely positioned to evaluate oral structures and provide custom oral appliance therapy—an effective, comfortable alternative to CPAP.",
      },
      {
        q: isZh
          ? "气道治疗需要多长时间？"
          : isEs
          ? "¿Cuánto tiempo dura el tratamiento de vías respiratorias?"
          : "How long does airway treatment take?",
        a: isZh
          ? "时间因方案而异。NightLase® 激光止鼾疗程仅需几周即可显效；而 MARPE/MSE 上颌扩弓或正畸重塑通常需要数月。"
          : isEs
          ? "Varía según la opción. La terapia NightLase® muestra mejoras en pocas semanas, mientras que la expansión palatina puede tomar varios meses."
          : "Timelines depend on the modality. NightLase® laser therapy yields results in just a few weeks, whereas palatal expansion or orthodontic remodelling takes several months.",
      },
      {
        q: isZh
          ? "气道正畸会改变我的面部外貌吗？"
          : isEs
          ? "¿La ortodoncia de vías respiratorias cambiará mi apariencia?"
          : "Will airway orthodontics change how I look?",
        a: isZh
          ? "在儿童中，引导颌骨生长会塑造更饱满、更协调的下颌与面部轮廓；在成人中，改善上颌宽度的同时也会提升中面部立体感。"
          : isEs
          ? "En niños, ayuda a desarrollar un perfil facial más equilibrado. En adultos, la alineación adecuada del maxilar mejora la armonía facial general."
          : "In children, guiding jaw growth creates a fuller, healthier facial structure. In adults, widening a constricted upper jaw subtly enhances middle-face harmony.",
      },
    ],
  };

  return (
    <>
      {/* SCHEMA.ORG JSON-LD */}
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
                  {isZh
                    ? "预约气道正畸评估"
                    : isEs
                    ? "Agendar Consulta de Vías Respiratorias"
                    : "Book Airway Consultation"}
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
                src="/services/orthodontics.png"
                alt="Airway Treatments & Airway Orthodontics Tribeca Dental Studio"
                fill
                priority
                unoptimized
                className="object-cover object-center filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/90 backdrop-blur-md border border-neutral-200 shadow-md">
                <p className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">
                  Multi-Specialty Airway Care
                </p>
                <p className="font-brandon text-xs text-neutral-600 mt-1 leading-relaxed">
                  {isZh
                    ? "结合前沿 3D CBCT 气道测量，精准制定儿童与成人气道扩展方案。"
                    : isEs
                    ? "Evaluación tridimensional de vías respiratorias con tomografía CBCT."
                    : "Combining 3D CBCT airway measurements for optimized breathing and sleep quality."}
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 2. SIGNS & SYMPTOMS */}
        <section
          className="bg-neutral-50 py-20 px-6 md:px-12 lg:px-20 border-y border-neutral-200 mb-20"
          id="signs-symptoms"
        >
          <div className="max-w-7xl mx-auto">
            <header className="max-w-2xl mb-12">
              <div className="flex items-center gap-2 text-[#C5A059] mb-2">
                <Wind size={20} aria-hidden="true" />
                <span className="text-xs uppercase tracking-[0.3em] font-bold block">
                  Early Detection
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-black mb-4">
                {content.signsTitle}
              </h2>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.signsList.map((sign, idx) => (
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
                    {sign}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 3. AIRWAY MODALITIES - HIGH CONVERTING INTERNAL LINKING HUB */}
        <section
          className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-20"
          id="treatment-options"
        >
          <header className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-[#C5A059] mb-2">
              <Sparkles size={20} aria-hidden="true" />
              <span className="text-xs uppercase tracking-[0.3em] font-bold block">
                Integrated Clinical Options
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-black mb-4">
              {content.treatmentsTitle}
            </h2>
            <p className="font-brandon text-sm text-neutral-600 leading-relaxed">
              {content.treatmentsSubtitle}
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.modalities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className="group bg-white border border-neutral-200 p-8 shadow-sm hover:border-[#C5A059] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Icon size={28} className="text-[#C5A059] group-hover:scale-110 transition-transform" />
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A059] bg-[#C5A059]/10 px-2.5 py-1">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold uppercase tracking-tight text-black mb-3 group-hover:text-[#C5A059] transition-colors">
                      {item.title}
                    </h3>

                    <p className="font-brandon text-xs text-neutral-600 leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black group-hover:text-[#C5A059] transition-colors border-t border-neutral-100 pt-4">
                    <span>{isZh ? "探索完整疗法详情" : isEs ? "Ver Tratamiento Completo" : "Explore Full Treatment"}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* 4. PEDIATRIC VS ADULT CARE */}
        <section className="bg-neutral-900 text-white py-16 px-6 md:px-12 lg:px-20 border border-neutral-900 max-w-7xl mx-auto mb-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-3">
              Personalized Lifespan Care
            </span>
            <h2 className="text-2xl md:text-4xl font-light uppercase tracking-tight text-white">
              {content.pediatricVsAdultTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="p-8 bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold uppercase tracking-tight text-[#C5A059] mb-4">
                {isZh
                  ? "儿童早期气道干预"
                  : isEs
                  ? "Atención Pediátrica Early-Age"
                  : "Pediatric Early Airway Intervention"}
              </h3>
              <p className="font-brandon text-xs text-neutral-300 leading-relaxed">
                {content.pediatricDesc}
              </p>
            </article>

            <article className="p-8 bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold uppercase tracking-tight text-[#C5A059] mb-4">
                {isZh
                  ? "成人气道与睡眠重建"
                  : isEs
                  ? "Atención para Adultos"
                  : "Adult Airway & Sleep Optimization"}
              </h3>
              <p className="font-brandon text-xs text-neutral-300 leading-relaxed">
                {content.adultDesc}
              </p>
            </article>
          </div>
        </section>

        {/* 5. INTERACTIVE FAQ ACCORDION */}
        <section className="py-16 px-6 md:px-12 lg:px-20 max-w-4xl mx-auto mb-20" id="faqs">
          <header className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-3">
              Patient Information
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

        {/* 6. BOTTOM CTA BANNER */}
        <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto pb-24">
          <div className="bg-black text-white p-10 md:p-16 text-center border border-black">
            <h2 className="text-2xl md:text-4xl font-light uppercase tracking-tight text-white mb-4">
              {isZh
                ? "开启健康呼吸与深沉睡眠新篇章"
                : isEs
                ? "¿Listo para Mejorar su Respiración y Sueño?"
                : "Schedule Your Airway Consultation in Tribeca"}
            </h2>
            <p className="font-brandon text-sm text-neutral-300 max-w-lg mx-auto mb-8">
              {isZh
                ? "预约 Tribeca 专科团队，为您的全家定制气道扩展与睡眠恢复方案。"
                : isEs
                ? "Contacte a nuestro equipo de especialistas en Lower Manhattan."
                : "A healthier smile and healthier breathing start here. Schedule your airway consultation today."}
            </p>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C5A059] hover:bg-white hover:text-black text-black font-bold uppercase tracking-[0.3em] text-xs px-10 py-5 transition-all duration-300"
            >
              {isZh ? "立即在线预约" : isEs ? "Reservar Cita Ahora" : "Book Consultation Now"}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}