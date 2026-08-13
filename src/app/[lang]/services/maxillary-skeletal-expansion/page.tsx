/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { bookingUrl } from "@/hooks/helper";
import {
  Wind,
  ShieldCheck,
  Stethoscope,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Cpu,
  Layers,
  Play,
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
    ? "纽约成人与青少年 MSE 微创上颌骨扩弓 | Tribeca Dental Studio"
    : isEs
    ? "Expansión Esquelética Maxilar (MSE) en Tribeca, NYC | Tribeca Dental Studio"
    : "Maxillary Skeletal Expansion (MSE) Tribeca, NYC | Tribeca Dental Studio";

  const description = isZh
    ? "纽约 Tribeca 专科级 Maxillary Skeletal Expansion (MSE) 上颌骨扩弓：利用微螺钉拓宽上颌骨骨骼，无创提升鼻腔通气量，治疗阻塞性睡眠呼吸暂停与牙齿拥挤。"
    : isEs
    ? "Tratamiento de Expansión Esquelética Maxilar (MSE) en Lower Manhattan, NYC. Expansión no quirúrgica del maxilar superior para mejorar la respiración y simetría facial."
    : "Maxillary Skeletal Expansion (MSE) in Tribeca, NYC. Non-surgical adult skeletal jaw expansion to improve nasal airflow, treat sleep apnea, and correct dental crowding.";

  return {
    title,
    description,
    keywords: [
      "MSE Expander NYC",
      "Maxillary Skeletal Expansion Tribeca",
      "Adult Jaw Expansion Lower Manhattan",
      "Non Surgical Palatal Expansion NYC",
      "MSE vs MARPE Dentist Manhattan",
      "Airway Orthodontics MSE Tribeca",
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
      url: `https://tribecadentalstudio.com/${lang}/services/maxillary-skeletal-expansion`,
      siteName: "Tribeca Dental Studio",
      images: [
        {
          url: "https://tribecadentalstudio.com/about-studio.jpg",
          width: 1200,
          height: 630,
          alt: "Maxillary Skeletal Expansion (MSE) at Tribeca Dental Studio NYC",
        },
      ],
      locale: lang === "zh" ? "zh_CN" : lang === "es" ? "es_ES" : "en_US",
      type: "website",
    },
    alternates: {
      canonical: `https://tribecadentalstudio.com/${lang}/services/maxillary-skeletal-expansion`,
      languages: {
        en: "https://tribecadentalstudio.com/en/services/maxillary-skeletal-expansion",
        es: "https://tribecadentalstudio.com/es/services/maxillary-skeletal-expansion",
        zh: "https://tribecadentalstudio.com/zh/services/maxillary-skeletal-expansion",
      },
    },
  };
}

export default async function MaxillarySkeletalExpansionMSEPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isZh = lang === "zh";
  const isEs = lang === "es";

  // --- JSON-LD STRUCTURED DATA ---
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
      },
      {
        "@type": "MedicalProcedure",
        "name": "Maxillary Skeletal Expansion (MSE) Therapy",
        "procedureType": "Non-Surgical Skeletal Orthodontic Procedure",
        "bodyLocation": "Maxilla, Midpalatal Suture, Nasal Passage",
      },
    ],
  };

  const content = {
    badge: isZh
      ? "微创骨支撑扩弓专科"
      : isEs
      ? "Expansión Esquelética Avanzada"
      : "Non-Surgical Skeletal Expansion",
    title: isZh
      ? "纽约 Tribeca Maxillary Skeletal Expansion (MSE) 微创上颌骨扩弓"
      : isEs
      ? "Expansión Esquelética Maxilar (MSE) en Tribeca, NYC"
      : "Maxillary Skeletal Expansion (MSE) in Tribeca, NYC",
    subtitle: isZh
      ? "突破传统仅倾斜牙齿的局限。Tribeca Dental Studio 引入专科级 MSE 微创扩弓技术，通过四枚微螺钉将扩张力直接作用于上颌骨，实现平行骨骼拓展，拓宽鼻腔气道并重塑中面部美学。"
      : isEs
      ? "A diferencia de los expansores tradicionales que solo mueven los dientes, MSE actúa a nivel esquelético. Una solución revolucionaria no quirúrgica para adultos y adolescentes que buscan una mejor respiración y alineación."
      : "A narrow upper jaw affects breathing, facial harmony, and oral health. MSE targets the midpalatal suture directly using micro-implants, delivering true parallel skeletal expansion for adults and teens without surgery.",

    // Section 1: Overview
    overviewTitle: isZh ? "什么是 MSE 上颌骨扩弓？" : isEs ? "¿Qué es la Expansión Esquelética Maxilar (MSE)?" : "What Is Maxillary Skeletal Expansion (MSE)?",
    overviewSubtitle: isZh
      ? "MSE 是一种前沿正畸技术，通过在腭骨精准植入四枚微型支撑螺钉，施加均匀外张力使已成熟的腭中缝打开："
      : isEs
      ? "Un método ortodóncico avanzado diseñado para ensanchar el maxilar superior mediante microimplantes:"
      : "MSE is an advanced orthodontic treatment anchored into the palate using four micro-implants to separate the midpalatal suture:",
    overviewPoints: [
      isZh ? "直接改变上颌骨骨骼结构，而非倾斜牙齿" : isEs ? "Modifica directamente la estructura ósea, no solo los dientes" : "Modifies underlying skeletal bone rather than tipping teeth outward",
      isZh ? "大幅扩展鼻腔底部底面积，显著降低鼻塞阻力" : isEs ? "Aumenta el volumen nasal y reduce la resistencia al respirar" : "Expands the nasal floor volume, dramatically improving breathing efficiency",
      isZh ? "为拥挤齿列与舌体提供充裕的自然空间" : isEs ? "Crea espacio para dientes apiñados y una postura lingual correcta" : "Creates ample physical room for crowded teeth and natural tongue posture",
      isZh ? "改善苹果肌与中面部支撑，优化面部比例" : isEs ? "Mejora la simetría facial y la definición de los pómulos" : "Enhances middle-face symmetry, cheekbone definition, and smile arc width",
    ],

    // Section 2: MSE vs MARPE
    comparisonTitle: isZh ? "MSE 与 MARPE：关键差异对比" : isEs ? "Diferencias Clave entre MSE y MARPE" : "MSE vs. MARPE: Key Differences Explained",
    comparisonSubtitle: isZh
      ? "两者均利用微螺钉进行扩弓，但 MSE 针对骨密度更高的成年人进行了力学结构优化："
      : isEs
      ? "Ambos utilizan implantes, pero MSE está diseñado para lograr un mayor impacto esquelético en huesos maduros:"
      : "While both utilize micro-implants, MSE is engineered for greater skeletal force distribution in dense adult bone:",
    comparisonItems: [
      {
        title: isZh ? "传统牙源性扩弓 (RPE)" : isEs ? "Expansores Dentales RPE" : "Traditional Tooth-Borne RPE",
        desc: isZh
          ? "作用于牙齿上，仅适合 12-15 岁未融合缝隙的儿童。成年人使用会导致牙龈退缩与牙齿外倾。"
          : isEs
          ? "Solo apto para niños pequeños. En adultos causa inclinación dental y recesión de encías."
          : "Applies pressure to teeth. Effective only in kids. In adults, causes dental tipping without bone expansion.",
      },
      {
        title: isZh ? "常规 MARPE" : isEs ? "MARPE Convencional" : "Standard MARPE",
        desc: isZh
          ? "多侧重于骨密度较低的青少年群体，扩张轨迹易呈现前宽后窄的 V 型扩张。"
          : isEs
          ? "Enfocado en jóvenes con menor densidad ósea; tiende a producir expansión en forma de V."
          : "Utilizes micro-implants mainly in adolescents, sometimes generating a V-shaped suture split.",
      },
      {
        title: isZh ? "MSE 骨骼扩弓 (Tribeca 方案)" : isEs ? "Expansión MSE (Especialidad Tribeca)" : "Skeletal MSE (Tribeca Advanced)",
        desc: isZh
          ? "由四枚精准排列的微螺钉双皮质支撑，为成年人提供全上颌平行 (Parallel) 骨骼分离，彻底改善气道。"
          : isEs
          ? "Anclaje bicortical de cuatro microimplantes para lograr separación esquelética paralela en adultos."
          : "Anchors with four bicortical micro-implants, producing a true parallel suture separation even in fully mature adults.",
      },
    ],

    // Section 3: Benefits
    benefitsTitle: isZh ? "MSE 带来的多维度获益" : isEs ? "Beneficios Principales del Tratamiento MSE" : "Transformative Health & Aesthetic Benefits",
    benefitsList: [
      isZh ? "突破性的非手术成人骨骼扩弓" : isEs ? "Expansión esquelética no quirúrgica en adultos" : "True non-surgical skeletal expansion for mature adults",
      isZh ? "拓宽鼻腔容积，根本改善打鼾与 OSA 睡眠呼吸暂停" : isEs ? "Mejora el flujo nasal, reduciendo ronquidos y apnea" : "Expands nasal volume, significantly reducing mouth breathing & snoring",
      isZh ? "逆转既往拔牙正畸导致的凹陷与内收影响" : isEs ? "Revierte los efectos de ortodoncias extractivas previas" : "Reverses the constricted profile effects of past extractive orthodontics",
      isZh ? "增加口内舌体空间，恢复舒展的正确舌姿势" : isEs ? "Aumenta el espacio para la lengua y mejora la función oral" : "Increases tongue space, relieving airway collapse and TMJ strain",
      isZh ? "创造丰满对称的笑线 (Broader Smile Arc)" : isEs ? "Crea una sonrisa más amplia y armonía facial" : "Creates a wider, fully supported, aesthetically balanced smile arc",
      isZh ? "提供高度稳定的正畸基础，避免牙齿复发错位" : isEs ? "Proporciona una base estable para ortodoncia posterior" : "Establishes a highly stable skeletal foundation for Invisalign®",
    ],

    // Section 4: Workflow
    workflowTitle: isZh ? "MSE 诊疗五步曲" : isEs ? "El Proceso MSE Paso a Paso" : "The MSE Treatment Journey: Step-by-Step",
    steps: [
      {
        num: "01",
        title: isZh ? "CBCT 3D 解剖测量与规划" : isEs ? "Evaluación y Tomografía 3D" : "3D CBCT Evaluation & Planning",
        desc: isZh ? "使用前沿 3D CBCT 精确评估腭骨厚度、气道截面积与微螺钉最佳植入角度。" : isEs ? "Mapeo 3D de la densidad ósea y las vías respiratorias mediante CBCT." : "Full 3D CBCT imaging to measure bone density, airway volume, and micro-implant placement.",
      },
      {
        num: "02",
        title: isZh ? "微创 MSE 装置植入" : isEs ? "Colocación del Dispositivo MSE" : "Minimally Invasive Placement",
        desc: isZh ? "在局部麻醉下将微型 MSE 扩弓器舒适固定于上腭，过程快速温和。" : isEs ? "El dispositivo personalizado se ancla al paladar de forma indolora bajo anestesia local." : "Under comfortable local anesthesia, the custom MSE appliance is anchored to the palatal bone.",
      },
      {
        num: "03",
        title: isZh ? "控频激活加压阶段" : isEs ? "Fase de Activación Gradual" : "Controlled Activation Phase",
        desc: isZh ? "使用专属钥匙每日旋转加压。门牙间出现暂时性缝隙是骨骼分离成功的阳性标志！" : isEs ? "Ajustes diarios con una llave especial. Un espacio temporal entre los dientes indica la expansión." : "You turn the expander key daily as instructed. A temporary gap between front teeth indicates successful suture opening.",
      },
      {
        num: "04",
        title: isZh ? "骨骼稳定与新骨固化" : isEs ? "Fase de Estabilización Ósea" : "Stabilization & Regeneration",
        desc: isZh ? "扩张完成后被动佩戴约 6 个月，等待分裂的缝隙内生成坚固的新骨。" : isEs ? "El dispositivo se mantiene unos meses para permitir la regeneración ósea en la sutura." : "The device remains in place for several months to allow new bone to regenerate and solidify stably.",
      },
      {
        num: "05",
        title: isZh ? "Invisalign® 正畸精细收缝" : isEs ? "Alineación Final con Ortodoncia" : "Orthodontic Finishing",
        desc: isZh ? "移除扩弓器后，使用隐适美 (Invisalign®) 或牙套将缝隙关闭，精细排齐牙齿。" : isEs ? "Se utilizan alineadores Invisalign® o brackets para cerrar el espacio y alinear la sonrisa." : "Braces or Invisalign® aligners close the front gap and align teeth into ideal functional occlusion.",
      },
    ],

    // Section 5: FAQs
    faqsTitle: isZh ? "MSE 上颌扩弓常见问题" : isEs ? "Preguntas Frecuentes sobre MSE" : "Frequently Asked Questions About MSE",
    faqs: [
      {
        q: isZh ? "加压激活时会感到剧烈疼痛吗？" : isEs ? "¿El expansor MSE es doloroso?" : "Is activating the MSE expander painful?",
        a: isZh
          ? "旋转钥匙后，患者通常只会感到鼻梁、面颊或上腭有轻微的压迫感或麻刺感，并非锐痛。这种感觉通常持续数小时，常规止痛药物即可轻松缓解。"
          : isEs
          ? "Los pacientes suelen sentir una leve presión en la nariz, mejillas o paladar tras girar la llave, pero no un dolor agudo. La molestia es temporal."
          : "Patients typically report feeling pressure or tightness across the bridge of the nose or cheeks after key turns rather than sharp pain. Any mild discomfort subsides quickly.",
      },
      {
        q: isZh ? "MSE 上颌骨扩弓的成功率高吗？" : isEs ? "¿Cuál es la tasa de éxito de MSE?" : "What is the clinical success rate of MSE?",
        a: isZh
          ? "在经验丰富的专科医生操作下，MSE 的骨骼分离成功率极高。通过 3D CBCT 进行精确的皮质骨厚度测量与螺钉角度规划是保障高成功率的关键。"
          : isEs
          ? "La tasa de éxito de MSE es sumamente alta cuando la realiza un profesional experimentado apoyado en tomografía 3D CBCT para una planificación precisa."
          : "The success rate for MSE is remarkably high when performed by an experienced provider using 3D CBCT imaging to verify bone density and implant placement.",
      },
      {
        q: isZh ? "扩弓门牙出现的缝隙会自行消失吗？" : isEs ? "¿El espacio entre los dientes frontales desaparecerá?" : "Will the gap created between my front teeth close?",
        a: isZh
          ? "扩弓期间门牙间出现的缝隙证明腭中缝已成功打开。随后通过简单的 Invisalign® 隐适美或正畸牙套，即可轻松将缝隙完全关闭并排齐牙齿。"
          : isEs
          ? "El espacio confirma que el hueso se ha expandido correctamente. Posteriormente, el tratamiento con Invisalign® o brackets cierra la separación."
          : "The temporary gap confirms that the skeletal suture has opened. It is quickly and predictably closed during the follow-up Invisalign® or orthodontic phase.",
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
        
        <section
          className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-20"
          aria-label="Hero Section"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* LEFT COLUMN: HERO EDITORIAL TEXT */}
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
                <Wind size={18} />
                <span className="text-xs uppercase tracking-[0.3em] font-bold block">
                  {content.badge}
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
                    ? "预约 MSE 扩弓评估"
                    : isEs
                    ? "Agendar Consulta MSE"
                    : "Book MSE Consultation"}
                </a>
                <a
                  href="tel:2125615303"
                  className="inline-flex items-center justify-center border border-black/20 hover:border-black text-black font-bold uppercase tracking-[0.2em] text-xs px-8 py-4 transition-all duration-300"
                >
                  212-561-5303
                </a>
              </div>
            </header>

            <div className="relative aspect-[4/3] bg-neutral-950 border border-neutral-800 overflow-hidden shadow-2xl group">
              
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="/about-studio.jpg" // Fallback poster image before video loads
                className="w-full h-full object-cover filter contrast-[1.05] brightness-90 group-hover:scale-105 transition-transform duration-700"
              >
                <source src="/services/mse.webm" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* DARK EDITORIAL VIGNETTE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* FLOATING LUXURY OVERLAY BADGE */}
              <div className="absolute top-5 right-5 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 border border-white/10 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">
                  3D Clinical Preview
                </span>
              </div>

              {/* BOTTOM CAPTION GLASS CARD */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-black/60 backdrop-blur-md border border-white/10 text-white shadow-xl">
                <div className="flex items-center gap-2 text-[#C5A059] mb-1">
                  <Play size={14} className="fill-[#C5A059]" />
                  <p className="text-s uppercase tracking-widest font-bold">
                    Parallel Skeletal Suture Separation
                  </p>
                </div>
                <p className="font-brandon text-s text-neutral-300 leading-relaxed">
                  {isZh
                    ? "通过 3D 虚拟重构演示微螺钉双皮质上颌骨平行拓展与气道开放过程。"
                    : isEs
                    ? "Demostración 3D de la separación esquelética del maxilar y apertura de vías aéreas."
                    : "Real-time 3D animation illustrating bicortical micro-implant anchor parallel expansion."}
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* 2. OVERVIEW & MECHANICS */}
        <section className="bg-neutral-50 py-20 px-6 md:px-12 lg:px-20 border-y border-neutral-200 mb-20">
          <div className="max-w-7xl mx-auto">
            <header className="max-w-2xl mb-12">
              <div className="flex items-center gap-2 text-[#C5A059] mb-2">
                <Cpu size={20} aria-hidden="true" />
                <span className="text-xs uppercase tracking-[0.3em] font-bold block">
                  Biomechanical Precision
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-black mb-4">
                {content.overviewTitle}
              </h2>
              <p className="font-brandon text-sm text-neutral-600 leading-relaxed">
                {content.overviewSubtitle}
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.overviewPoints.map((pt, idx) => (
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
                    {pt}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 3. MSE VS MARPE COMPARISON */}
        <section className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-20" id="mse-vs-marpe">
          <header className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-[#C5A059] mb-2">
              <Layers size={20} aria-hidden="true" />
              <span className="text-xs uppercase tracking-[0.3em] font-bold block">
                Technology Comparisons
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-black mb-4">
              {content.comparisonTitle}
            </h2>
            <p className="font-brandon text-sm text-neutral-600 leading-relaxed">
              {content.comparisonSubtitle}
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.comparisonItems.map((item, idx) => (
              <article
                key={idx}
                className={`p-8 border flex flex-col justify-between ${
                  idx === 2
                    ? "bg-neutral-900 text-white border-neutral-900 shadow-xl"
                    : "bg-white text-black border-neutral-200 shadow-sm"
                }`}
              >
                <div>
                  <span
                    className={`text-xs font-bold uppercase tracking-widest block mb-2 ${
                      idx === 2 ? "text-[#C5A059]" : "text-neutral-400"
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <h3
                    className={`text-xl font-bold uppercase tracking-tight mb-4 ${
                      idx === 2 ? "text-white" : "text-black"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`font-brandon text-xs leading-relaxed ${
                      idx === 2 ? "text-neutral-300" : "text-neutral-600"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 4. BENEFITS GRID */}
        <section className="bg-neutral-900 text-white py-16 px-6 md:px-12 lg:px-20 border border-neutral-900 max-w-7xl mx-auto mb-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-3">
              Comprehensive Health & Beauty Impact
            </span>
            <h2 className="text-2xl md:text-4xl font-light uppercase tracking-tight text-white">
              {content.benefitsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.benefitsList.map((b, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/5 border border-white/10 flex items-start gap-3"
              >
                <ShieldCheck size={18} className="text-[#C5A059] shrink-0 mt-0.5" />
                <span className="font-brandon text-xs text-neutral-300 leading-relaxed uppercase font-bold">
                  {b}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. STEP-BY-STEP WORKFLOW */}
        <section className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-20" id="mse-workflow">
          <header className="max-w-2xl mb-12">
            <div className="flex items-center gap-2 text-[#C5A059] mb-2">
              <Stethoscope size={20} aria-hidden="true" />
              <span className="text-xs uppercase tracking-[0.3em] font-bold block">
                Clinical Workflow
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-black mb-4">
              {content.workflowTitle}
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {content.steps.map((st, idx) => (
              <article key={idx} className="p-6 bg-white border border-neutral-200 shadow-sm relative flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-light text-[#C5A059] block mb-3">
                    {st.num}
                  </span>
                  <h3 className="text-sm font-bold uppercase tracking-tight text-black mb-2">
                    {st.title}
                  </h3>
                  <p className="font-brandon text-[11px] text-neutral-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 6. INTERACTIVE FAQ ACCORDION */}
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

        {/* 7. INTERNAL LINKING HUB FOR SEO */}
        <section className="py-12 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
          <div className="border border-neutral-200 bg-white p-8 md:p-12 shadow-sm">
            <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] mb-4">
              Explore Related Airway & Orthodontic Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                href={`/${lang}/services/airway-orthodontics`}
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
                href={`/${lang}/services/invisalign-clear-aligner-braces`}
                className="group flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 hover:border-[#C5A059] transition-colors"
              >
                <span className="font-brandon text-xs font-bold uppercase tracking-wider text-black">
                  Post-Expansion Invisalign®
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

        {/* 8. BOTTOM CTA BANNER */}
        <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto pb-24">
          <div className="bg-black text-white p-10 md:p-16 text-center border border-black">
            <h2 className="text-2xl md:text-4xl font-light uppercase tracking-tight text-white mb-4">
              {isZh
                ? "开启 MSE 微创上颌骨扩弓诊疗"
                : isEs
                ? "¿Listo para la Expansión Esquelética Maxilar?"
                : "Schedule Your MSE Consultation in Tribeca"}
            </h2>
            <p className="font-brandon text-sm text-neutral-300 max-w-lg mx-auto mb-8">
              {isZh
                ? "预约 Tribeca Dental Studio，让专业团队为您定制骨骼级扩弓与呼吸重塑方案。"
                : isEs
                ? "Contacte a nuestro equipo de especialistas en Lower Manhattan hoy mismo."
                : "A wider smile and healthier breathing start here. Schedule your MSE consultation today."}
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