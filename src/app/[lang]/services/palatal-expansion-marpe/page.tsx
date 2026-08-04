/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { bookingUrl } from "@/hooks/helper";
import {
  Wind,
  ShieldCheck,
  Stethoscope,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Cpu,
  UserCheck,
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
    ? "纽约成人与儿童 MARPE / MSE 微创上颌骨扩弓 | Tribeca Dental Studio"
    : isEs
    ? "Expansión Palatina MARPE y MSE en Tribeca, NYC | Tribeca Dental Studio"
    : "Palatal Expansion (MARPE / MSE) Tribeca, NYC | Tribeca Dental Studio";

  const description = isZh
    ? "纽约 Tribeca 专科级 MARPE 及 MSE 上颌骨微创扩展术：由 Dr. Reem Abdulrahman 亲诊。无创改善成人与儿童上颌狭窄、阻塞性睡眠呼吸暂停、鼻塞与 TMJ 颞下颌关节紊乱。"
    : isEs
    ? "Expansión palatina asistida por microimplantes (MARPE/MSE) en Lower Manhattan, NYC por la Dra. Reem Abdulrahman. Tratamiento no quirúrgico para la apnea del sueño, congestión nasal y colapso de vías respiratorias."
    : "Miniscrew-assisted rapid palatal expansion (MARPE) & MSE in Tribeca, NYC by Dr. Reem Abdulrahman. Non-surgical adult palatal expansion for sleep apnea, TMJ, and airway restriction.";

  return {
    title,
    description,
    keywords: [
      "MARPE NYC",
      "MSE Expansion Manhattan",
      "Miniscrew Assisted Rapid Palatal Expansion Tribeca",
      "Dr Reem Abdulrahman Orthodontist",
      "Adult Palatal Expansion NYC",
      "Non Surgical Jaw Expansion Manhattan",
      "MSE Sleep Apnea Treatment NYC",
      "Maxillary Skeletal Expansion Tribeca",
      "Airway Palatal Expansion Lower Manhattan",
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
      url: `https://tribecadentalstudio.com/${lang}/services/palatal-expansion-marpe`,
      siteName: "Tribeca Dental Studio",
      images: [
        {
          url: "https://tribecadentalstudio.com/about-studio.jpg",
          width: 1200,
          height: 630,
          alt: "Miniscrew-Assisted Rapid Palatal Expansion (MARPE) at Tribeca Dental Studio NYC",
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
      canonical: `https://tribecadentalstudio.com/${lang}/services/palatal-expansion-marpe`,
      languages: {
        en: "https://tribecadentalstudio.com/en/services/palatal-expansion-marpe",
        es: "https://tribecadentalstudio.com/es/services/palatal-expansion-marpe",
        zh: "https://tribecadentalstudio.com/zh/services/palatal-expansion-marpe",
      },
    },
  };
}

export default async function PalatalExpansionMARPEPage({
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
          "Miniscrew-Assisted Rapid Palatal Expansion (MARPE)",
          "Maxillary Skeletal Expansion (MSE)",
          "Airway Orthodontics",
          "Non-Surgical Adult Palatal Expansion",
          "Sleep Apnea Dental Treatments",
          "TMJ / TMD Therapy",
        ],
      },
      {
        "@type": "MedicalProcedure",
        "name": "Miniscrew-Assisted Rapid Palatal Expansion (MARPE) / MSE",
        "procedureType": "Non-Surgical Skeletal Jaw Expansion & Airway Optimization",
        "bodyLocation": "Upper Jaw (Maxilla), Nasal Cavity, Midpalatal Suture",
        "relevantSpecialty": {
          "@type": "MedicalSpecialty",
          "name": "Orthodontics & Airway Dentistry",
        },
      },
    ],
  };

  const content = {
    badge: isZh
      ? "微创骨支撑扩弓专科"
      : isEs
      ? "Expansión Ósea de Vanguardia"
      : "Non-Surgical Skeletal Expansion",
    title: isZh
      ? "纽约 Tribeca MARPE / MSE 微创上颌骨扩弓"
      : isEs
      ? "Expansión Palatina (MARPE y MSE) en Tribeca, NYC"
      : "Palatal Expansion (MARPE / MSE) in Tribeca, NYC",
    subtitle: isZh
      ? "由气道专家 Dr. Reem Abdulrahman 亲诊。通过微创微螺钉支撑扩弓术 (MARPE/MSE)，打破传统成人扩弓需要开骨手术的局限，从源头拓展鼻腔与口咽气道，有效改善睡眠呼吸暂停、慢性鼻塞与 TMJ 疼痛。"
      : isEs
      ? "La Dra. Reem Abdulrahman realiza transformaciones de vías respiratorias para pacientes con apnea del sueño, ATM y problemas sinusales. MARPE expande el paladar directamente desde el hueso sin necesidad de cirugía invasiva."
      : "Dr. Reem Abdulrahman artfully performs airway transformations for patients struggling with sleep apnea, TMJ, chronic congestion, and narrow jaws. MARPE offers adults true non-surgical skeletal expansion to improve breathing and smile symmetry.",

    // Section 1: Signs
    symptomsTitle: isZh
      ? "上颌狭窄可能引发的日常健康困扰"
      : isEs
      ? "Problemas Comunes Causados por un Maxilar Estrecho"
      : "Common Issues Caused by a Narrow Upper Jaw",
    symptomsSubtitle: isZh
      ? "上颌骨 (Maxilla) 过窄不仅导致牙齿拥挤，更直接限制了鼻腔容积与舌体放置空间："
      : isEs
      ? "Un maxilar estrecho no solo causa apiñamiento; reduce el volumen nasal y restringe el espacio para la lengua:"
      : "A constricted upper maxilla restricts both nasal airflow volume and proper tongue posture, frequently leading to:",
    symptomsList: [
      isZh
        ? "阻塞性睡眠呼吸暂停 (OSA) 及夜间打鼾 comorbidities"
        : isEs
        ? "Apnea obstructiva del sueño y ronquidos crónicos"
        : "Sleep-disordered breathing, OSA, and chronic snoring",
      isZh
        ? "慢性鼻塞、呼吸阻力高与长期张口呼吸"
        : isEs
        ? "Congestión nasal crónica y respiración por la boca"
        : "Chronic nasal congestion and mandatory mouth breathing",
      isZh
        ? "牙齿严重拥挤、咬合错位或倒覆 (Crossbite)"
        : isEs
        ? "Apiñamiento dental severo y mordida cruzada"
        : "Crowded teeth, narrow dental arches, and crossbites",
      isZh
        ? "咀嚼功能障碍、TMJ 颞下颌关节弹响与疼痛"
        : isEs
        ? "Disfunción al masticar y trastornos de la articulación temporomandibular (ATM)"
        : "Chewing dysfunction, jaw tension, and TMD / TMJ strain",
      isZh
        ? "舌体空间不足，无法自然贴附上腭 (Tongue Posture Restriction)"
        : isEs
        ? "Falta de espacio para que la lengua descanse correctamente"
        : "Inadequate space for the tongue to rest in its natural upward posture",
    ],

    // Section 2: Why MARPE is Different
    whyMarpeTitle: isZh
      ? "为什么选择 MARPE / MSE？传统的突破"
      : isEs
      ? "¿Por Qué MARPE/MSE es Diferente a los Expansores Tradicionales?"
      : "Why MARPE & MSE Are Revolutionary for Adults",
    whyMarpeSubtitle: isZh
      ? "传统的扩弓器 (RPE) 仅适用于腭中缝尚未融合的儿童 (12-15岁前)。成年人若使用传统扩弓器，只会造成牙齿向外倾斜而非骨骼扩张。"
      : isEs
      ? "Los expansores convencionales se limitan a niños porque la sutura palatina se fusiona entre los 12 y 15 años. En adultos, solo inclinarían los dientes."
      : "Conventional expanders are limited to young children before the midpalatal suture fuses (around ages 12–15). Applying them to adults merely tips the teeth outward rather than widening the bone.",
    differences: [
      {
        title: isZh ? "传统 RPE / Hyrax 扩弓" : isEs ? "Expansor RPE Tradicional" : "Traditional RPE / Hyrax",
        desc: isZh
          ? "依靠牙齿受力。在成人身上易导致牙齿倾斜、牙龈退缩，无法实现真骨骼扩宽。"
          : isEs
          ? "Se apoya solo en los dientes. En adultos causa inclinación dental y no expansión ósea."
          : "Tooth-borne only. In adults, it pushes teeth outward without widening the actual palatal bone, risking root damage.",
      },
      {
        title: isZh ? "外科手术扩弓 (SARPE)" : isEs ? "Expansión Asistida Quirúrgicamente (SARPE)" : "Surgical Expansion (SARPE)",
        desc: isZh
          ? "需要全麻下切断上颌骨，创伤大、恢复期长、费用高昂。"
          : isEs
          ? "Requiere cirugía mandibular invasiva bajo anestesia general para cortar el hueso."
          : "Invasive jaw surgery under general anesthesia required to cut the maxilla in adults with fused sutures.",
      },
      {
        title: isZh ? "微螺钉 MARPE / MSE (Dr. Reem 专长)" : isEs ? "MARPE y MSE (Especialidad de la Dra. Reem)" : "MARPE & MSE (Dr. Reem's Specialty)",
        desc: isZh
          ? "通过微型微螺钉直接将扩张力施加于腭骨上。实现平行骨骼拓宽，彻底避免开骨手术，并拓宽鼻腔底部。"
          : isEs
          ? "Se ancla directamente al hueso con microimplantes. Produce expansión esquelética paralela sin cirugía."
          : "Anchors directly to palatal bone via micro-implants, generating true parallel bone expansion non-surgically in teens and adults.",
      },
    ],

    // Section 3: Benefits
    benefitsTitle: isZh
      ? "MARPE 带来的健康与美学多重获益"
      : isEs
      ? "Beneficios Integrales de MARPE"
      : "Clinical, Aesthetic & Airway Benefits",
    benefitsList: [
      isZh ? "拓宽腭骨容积，大幅提升鼻腔通气效率" : isEs ? "Aumenta el volumen nasal y la eficiencia respiratoria" : "Expands maxillary volume, directly opening nasal airway passages",
      isZh ? "显著减少对 CPAP 呼吸机或夜间睡眠矫治器的依赖" : isEs ? "Reduce la necesidad de máquinas CPAP o dispositivos de apnea" : "Reduces or eliminates reliance on CPAP machines for OSA management",
      isZh ? "为舌体提供充裕空间，改善吞咽与自然姿势" : isEs ? "Crea espacio para la lengua y mejora la postura oral" : "Provides comfortable space for the tongue to rest forward and upward",
      isZh ? "打造更丰满、对称自然的美学笑线" : isEs ? "Crea una sonrisa más amplia, equilibrada y armónica" : "Creates a broader, fully supported, symmetrical aesthetic smile",
      isZh ? "释放牙齿拥挤，减少或避免拔牙正畸" : isEs ? "Crea espacio para dientes apiñados, evitando extracciones" : "Creates room for crowded teeth, eliminating the need for healthy extractions",
      isZh ? "缓解 TMJ 关节面压力，改善咬合平衡" : isEs ? "Alivia la tensión en la articulación temporomandibular (ATM)" : "Relieves joint pressure and jaw alignment issues associated with TMD",
    ],

    // Section 4: Workflow
    workflowTitle: isZh
      ? "MARPE 治疗完整步骤流程"
      : isEs
      ? "El Proceso de Tratamiento MARPE Paso a Paso"
      : "The MARPE Treatment Process: Step-by-Step",
    steps: [
      {
        num: "01",
        title: isZh ? "3D Scan 诊断与规划" : isEs ? "Consulta y Diagnóstico 3D" : "Consultation & 3D Imaging",
        desc: isZh ? "由 Dr. Reem 使用 CBCT 与 iTero® 精确评估腭骨厚度与气道狭窄度。" : isEs ? "Análisis de tomografía 3D CBCT y escaneo digital del paladar por la Dra. Reem." : "Dr. Reem conducts CBCT 3D bone mapping and digital impressions to map your palate.",
      },
      {
        num: "02",
        title: isZh ? "微螺钉与装置轻盈植入" : isEs ? "Colocación del Dispositivo y Microimplantes" : "Custom Appliance & Miniscrew Placement",
        desc: isZh ? "在局部麻醉下，舒适且精准地将微型扩展器固定于上腭骨骼。" : isEs ? "Se coloca la aparatología sobre el paladar con anestesia local de forma indolora." : "Under comfortable local anesthesia, the custom MSE device is anchored gently to the palatal bone.",
      },
      {
        num: "03",
        title: isZh ? "按周期激活扩展" : isEs ? "Fase de Activación Gradual" : "Controlled Activation Phase",
        desc: isZh ? "在家使用专属钥匙按医嘱旋转加压。当腭中缝分离时会听到轻微一声pop，代表骨骼成功开启！" : isEs ? "Gira la llave a intervalos regulares. Un ligero 'pop' indica que la sutura palatina se ha abierto." : "You turn the activation key at home as directed. A soft internal 'pop' signifies the suture separation working successfully.",
      },
      {
        num: "04",
        title: isZh ? "骨骼稳定与后续正畸" : isEs ? "Estabilización y Alineación Posterior" : "Bone Retention & Orthodontics",
        desc: isZh ? "装置被动佩戴数月等待新骨生长固化，随后配合 Invisalign® 隐适美或排齐牙齿。" : isEs ? "El dispositivo permanece unos meses para estabilizar el nuevo hueso, seguido de Invisalign®." : "The appliance remains passive for a few months while new bone regenerates, followed by Invisalign® or braces.",
      },
    ],

    // Section 5: FAQs
    faqsTitle: isZh ? "MARPE 常见问题解答" : isEs ? "Preguntas Frecuentes sobre MARPE" : "Frequently Asked Questions About MARPE",
    faqs: [
      {
        q: isZh ? "MARPE 过程会很痛苦吗？" : isEs ? "¿Es doloroso el procedimiento MARPE?" : "Is the MARPE procedure painful?",
        a: isZh
          ? "装置与微螺钉的植入过程在局部麻醉下完成，全程无痛。在加压激活期间，您可能会感到轻微的鼻梁或压迫感，通常数天内即可适应。"
          : isEs
          ? "La colocación se realiza bajo anestesia local y no duele. Durante las activaciones iniciales puede sentir una leve presión que desaparece en pocos días."
          : "Placement of the miniscrews is performed under local anesthesia and is pain-free. Patients typically experience mild pressure across the bridge of the nose or teeth during active expansion, which subsides quickly.",
      },
      {
        q: isZh ? "我需要佩戴 MARPE 装置多久？" : isEs ? "¿Cuánto tiempo debo llevar el dispositivo MARPE?" : "How long will I have to wear the MARPE appliance?",
        a: isZh
          ? "主动加压扩张阶段通常仅需几周；加压完成后，装置需继续被动佩戴约 6 个月，以确保新生成的骨骼固化稳定。"
          : isEs
          ? "La fase activa de expansión dura solo unas semanas, seguida de un periodo de estabilización de aproximadamente 6 meses para afianzar el nuevo hueso."
          : "The active expansion phase usually lasts a few weeks. The appliance then stays in place passively for about 6 months to allow the newly formed bone to stabilize permanently.",
      },
      {
        q: isZh ? "MARPE 扩张后我还需要做牙齿正畸吗？" : isEs ? "¿Necesitaré ortodoncia después de MARPE?" : "Will I need braces or Invisalign® after MARPE?",
        a: isZh
          ? "是的。MARPE 创造了宝贵的颌骨基底空间，之后通常需要配合隐适美 (Invisalign®) 或传统牙套，将牙齿精准排列至理想咬合位置。"
          : isEs
          ? "Sí. MARPE crea la base ósea y el espacio necesario. Posteriormente se utiliza Invisalign® o brackets para alinear los dientes perfectamente."
          : "Yes. MARPE expands the underlying skeletal bone foundation. A follow-up course of Invisalign® or braces is used to align teeth into their ideal cosmetic and functional positions.",
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
                  href={`/${lang}/services/airway-orthodontics`}
                  className="text-xs uppercase tracking-[0.25em] font-bold text-neutral-400 hover:text-black transition-colors"
                >
                  ← {isZh ? "返回气道正畸" : isEs ? "Volver a Vías Respiratorias" : "Back to Airway Treatments"}
                </Link>
              </nav>

              <div className="flex items-center gap-2 text-[#C5A059] mb-3">
                <UserCheck size={18} />
                <span className="text-xs uppercase tracking-[0.3em] font-bold block">
                  Dr. Reem Abdulrahman • Airway Specialist
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
                    ? "预约 Dr. Reem MARPE 评估"
                    : isEs
                    ? "Agendar Consulta MARPE"
                    : "Book MARPE Consultation"}
                </a>
                <a
                  href="tel:2125615303"
                  className="inline-flex items-center justify-center border border-black/20 hover:border-black text-black font-bold uppercase tracking-[0.2em] text-xs px-8 py-4 transition-all duration-300"
                >
                  212-561-5303
                </a>
              </div>
            </header>

            <div className="relative aspect-[4/3] bg-neutral-100 border border-neutral-200 overflow-hidden shadow-sm group">
              <Image
                src="/services/mse.jpeg"
                alt="Dr. Reem Abdulrahman Palatal Expansion MARPE MSE Tribeca Dental Studio"
                fill
                priority
                unoptimized
                className="object-cover object-center filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/90 backdrop-blur-md border border-neutral-200 shadow-md">
                <p className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">
                  Skeletal Palatal Expansion (MSE)
                </p>
                <p className="font-brandon text-xs text-neutral-600 mt-1 leading-relaxed">
                  {isZh
                    ? "微螺钉直接承力于腭骨，为成人实现无创平行上颌骨骨骼扩张。"
                    : isEs
                    ? "Expansión esquelética paralela sin cirugía para jóvenes y adultos."
                    : "Anchored directly to the maxilla for non-surgical adult skeletal expansion."}
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 2. SYMPTOMS & INDICATIONS */}
        <section className="bg-neutral-50 py-20 px-6 md:px-12 lg:px-20 border-y border-neutral-200 mb-20">
          <div className="max-w-7xl mx-auto">
            <header className="max-w-2xl mb-12">
              <div className="flex items-center gap-2 text-[#C5A059] mb-2">
                <Wind size={20} aria-hidden="true" />
                <span className="text-xs uppercase tracking-[0.3em] font-bold block">
                  Clinical Indications
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-black mb-4">
                {content.symptomsTitle}
              </h2>
              <p className="font-brandon text-sm text-neutral-600 leading-relaxed">
                {content.symptomsSubtitle}
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.symptomsList.map((symp, idx) => (
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
                    {symp}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 3. WHY MARPE IS DIFFERENT */}
        <section className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-20" id="why-marpe">
          <header className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-[#C5A059] mb-2">
              <Cpu size={20} aria-hidden="true" />
              <span className="text-xs uppercase tracking-[0.3em] font-bold block">
                Treatment Comparisons
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-black mb-4">
              {content.whyMarpeTitle}
            </h2>
            <p className="font-brandon text-sm text-neutral-600 leading-relaxed">
              {content.whyMarpeSubtitle}
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.differences.map((diff, idx) => (
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
                    {diff.title}
                  </h3>
                  <p
                    className={`font-brandon text-xs leading-relaxed ${
                      idx === 2 ? "text-neutral-300" : "text-neutral-600"
                    }`}
                  >
                    {diff.desc}
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
              Comprehensive Health Impact
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
        <section className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-20" id="marpe-process">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.steps.map((st, idx) => (
              <article key={idx} className="p-8 bg-white border border-neutral-200 shadow-sm relative">
                <span className="text-3xl font-light text-[#C5A059] block mb-4">
                  {st.num}
                </span>
                <h3 className="text-lg font-bold uppercase tracking-tight text-black mb-3">
                  {st.title}
                </h3>
                <p className="font-brandon text-xs text-neutral-600 leading-relaxed">
                  {st.desc}
                </p>
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
              Explore Related Airway & Orthodontic Care
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  3D CBCT Airway Imaging
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
                ? "探索您是否适合 MARPE 微创扩弓"
                : isEs
                ? "¿Descubra si MARPE es la Solución para Usted?"
                : "Find Out if You're a Candidate for MARPE in NYC"}
            </h2>
            <p className="font-brandon text-sm text-neutral-300 max-w-lg mx-auto mb-8">
              {isZh
                ? "即刻预约 Dr. Reem Abdulrahman 专科门诊，让顺畅呼吸与健康笑线从此开启。"
                : isEs
                ? "Reserve su consulta con la Dra. Reem Abdulrahman en Lower Manhattan hoy mismo."
                : "Schedule your consultation with Dr. Reem Abdulrahman at Tribeca Dental Studio in Lower Manhattan today."}
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