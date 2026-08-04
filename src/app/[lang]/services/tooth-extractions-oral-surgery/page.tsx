/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { bookingUrl } from "@/hooks/helper";
import {
  ShieldCheck,
  Stethoscope,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Play,
  Award,
  HeartHandshake,
  Activity,
  Layers,
  Clock,
  Zap,
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
    ? "纽约 Tribeca 无痛拔牙与口腔外科 | Dr. Cameron Lewis 专科医生"
    : isEs
    ? "Extracciones Dentales y Cirugía Oral en Tribeca, NYC | Dr. Cameron Lewis"
    : "Painless Tooth Extractions & Oral Surgery NYC | Dr. Cameron Lewis | Tribeca Dental Studio";

  const description = isZh
    ? "纽约 Tribeca 专科级无痛拔牙与口腔外科：由知名口腔颌面外科专家 Dr. Cameron Lewis 亲诊。提供微创拔牙、智齿拔除、骨移植与即刻种植牙 (Extraction-to-Implant) 一站式诊疗。"
    : isEs
    ? "Cirugía oral y extracciones dentales indoloras en Lower Manhattan, NYC por el cirujano Dr. Cameron Lewis. Preservación ósea, extracción de cordales e implantes inmediatos."
    : "Gentle, surgical, and wisdom tooth extractions in Tribeca, NYC by acclaimed Oral & Maxillofacial Surgeon Dr. Cameron Lewis, DDS. Bone grafting, IV sedation, and seamless extraction-to-implant placement.";

  return {
    title,
    description,
    keywords: [
      "Tooth Extractions Tribeca NYC",
      "Dr Cameron Lewis Oral Surgeon",
      "Painless Tooth Extraction Manhattan",
      "Wisdom Teeth Removal NYC",
      "Surgical Tooth Extraction Lower Manhattan",
      "Extraction to Implant Pipeline NYC",
      "Emergency Tooth Extraction NYC",
      "Bone Grafting Socket Preservation Tribeca",
      "Oral and Maxillofacial Surgeon NYC",
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
      url: `https://tribecadentalstudio.com/${lang}/services/tooth-extractions`,
      siteName: "Tribeca Dental Studio",
      images: [
        {
          url: "https://tribecadentalstudio.com/about-studio.jpg",
          width: 1200,
          height: 630,
          alt: "Tooth Extractions & Oral Surgery by Dr. Cameron Lewis at Tribeca Dental Studio NYC",
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
      canonical: `https://tribecadentalstudio.com/${lang}/services/tooth-extractions`,
      languages: {
        en: "https://tribecadentalstudio.com/en/services/tooth-extractions",
        es: "https://tribecadentalstudio.com/es/services/tooth-extractions",
        zh: "https://tribecadentalstudio.com/zh/services/tooth-extractions",
      },
    },
  };
}

export default async function ToothExtractionsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isZh = lang === "zh";
  const isEs = lang === "es";

  // --- JSON-LD STRUCTURED DATA (Schema.org Physician & MedicalProcedure) ---
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
          "Painless Tooth Extractions",
          "Wisdom Teeth Removal",
          "Oral and Maxillofacial Surgery",
          "Socket Preservation & Bone Grafting",
          "Immediate Dental Implant Placement",
          "Sedation Dentistry",
        ],
      },
      {
        "@type": "Physician",
        "name": "Dr. Cameron Lewis, DDS",
        "medicalSpecialty": "Oral & Maxillofacial Surgery",
        "worksFor": {
          "@id": "https://tribecadentalstudio.com/#organization",
        },
        "description": "Renowned Oral & Maxillofacial Surgeon specializing in tissue-preserving tooth extractions, bone grafting, and immediate dental implants in Tribeca, NYC.",
      },
      {
        "@type": "MedicalProcedure",
        "name": "Painless Surgical Tooth Extraction & Socket Preservation",
        "procedureType": "Surgical Oral Procedure",
        "bodyLocation": "Maxilla, Mandible, Periodontal Tissue",
        "relevantSpecialty": {
          "@type": "MedicalSpecialty",
          "name": "Oral & Maxillofacial Surgery",
        },
      },
    ],
  };

  const content = {
    badge: isZh
      ? "口腔外科与微创拔牙中心"
      : isEs
      ? "Cirugía Oral y Extracciones de Precisión"
      : "Oral Surgery & Precision Extractions",
    title: isZh
      ? "纽约 Tribeca 专科级微创无痛拔牙"
      : isEs
      ? "Extracciones Dentales e Cirugía Oral en Tribeca, NYC"
      : "Painless Tooth Extractions & Oral Surgery in Tribeca, NYC",
    subtitle: isZh
      ? "由知名口腔颌面外科专家 Dr. Cameron Lewis 领衔。我们坚持天然牙最大化保留理念；当患牙无法保留时，以微米级轻柔技术松解拔除，并同步规划即刻种植与骨量维持。"
      : isEs
      ? "Dirigido por el aclamado cirujano oral y maxilofacial Dr. Cameron Lewis. Extracciones cuidadosas, sin dolor y diseñadas para preservar el hueso para un futuro implante."
      : "Led by renowned Oral & Maxillofacial Surgeon Dr. Cameron Lewis, DDS. We prioritize preserving your natural teeth whenever possible, but when extraction is required, we deliver gentle, tissue-preserving surgical care with seamless implant replacement.",

    // Section 1: Dr. Cameron Lewis Spotlight
    surgeonTitle: isZh
      ? "首席口腔颌面外科专家：Dr. Cameron Lewis"
      : isEs
      ? "Conozca a Nuestro Cirujano Oral: Dr. Cameron Lewis, DDS"
      : "Premier Oral & Maxillofacial Surgeon: Dr. Cameron Lewis, DDS",
    surgeonSubtitle: isZh
      ? "Dr. Cameron Lewis 毕业于 Howard 大学牙科学院，并在 UCLA Harbor 医疗中心及 New York Medical College 完成口腔颌面外科专科规培。曾获 Forbes、Men's Journal 报道。"
      : isEs
      ? "Formado en UCLA Harbor y New York Medical College, el Dr. Lewis es un especialista reconocido por su técnica quirúrgica ultraligera y humanitaria."
      : "Trained at Howard University, UCLA Harbor Medical Center, and New York Medical College, Dr. Lewis brings unmatched surgical precision, media acclaim (Forbes, Men's Journal), and a deeply compassionate bedside manner.",

    surgeonPoints: [
      isZh ? "高级口腔颌面外科（OMFS）专科权威认可" : isEs ? "Especialista en Cirugía Oral y Maxilofacial (OMFS)" : "Comprehensive Oral & Maxillofacial Surgery residency expertise",
      isZh ? "精通局麻与 IV 镇静（Sedation），真正做到全程微创无痛" : isEs ? "Técnicas avanzadas de anestesia y sedación para una experiencia sin dolor" : "Mastery of local anesthesia and IV sedation for zero-pain procedures",
      isZh ? "“微创分牙术”技术，最大限度保护牙槽骨组织与牙龈" : isEs ? "Preservación tisular con micro-seccionamiento para proteger el hueso" : "Tissue-preserving tooth sectioning to conserve surrounding jawbone",
      isZh ? "拔牙与即刻种植牙 (Extraction-to-Implant Pipeline) 一站式完成" : isEs ? "Flujo directo de Extracción e Implante Inmediato en la misma sesión" : "Seamless extraction-to-implant pipeline executed under one roof",
    ],

    // Section 2: Indications
    reasonsTitle: isZh
      ? "何时需要进行拔牙治疗？"
      : isEs
      ? "¿Cuándo es Necesaria una Extracción Dental?"
      : "When Is a Tooth Extraction Necessary?",
    reasons: [
      {
        title: isZh ? "严重的严重龋齿与牙髓感染" : isEs ? "Caries Severa Inmune a Restauración" : "Irreparable Decay or Infection",
        desc: isZh
          ? "当牙齿龋坏程度极深且无法通过补牙、牙套或根管治疗拯救时。"
          : isEs
          ? "Cuando la caries destruye la estructura dental por debajo de las encías."
          : "When decay has destroyed the tooth structure beyond the support of a crown or root canal.",
      },
      {
        title: isZh ? "外伤性牙折与裂齿" : isEs ? "Trauma o Fractura Inoperable" : "Traumatic Injury or Vertical Crack",
        desc: isZh
          ? "事故或外力导致牙根纵折或低于龈缘的严重断裂。"
          : isEs
          ? "Fractura vertical de la raíz o trauma grave insalvable."
          : "Severe physical trauma resulting in vertical root fracture below the gumline.",
      },
      {
        title: isZh ? "阻生智齿或埋伏牙" : isEs ? "Cordales Impactadas (Muelas del Juicio)" : "Impacted Wisdom Teeth",
        desc: isZh
          ? "智齿空间不足引起倾斜阻生、反复发炎痛或挤压邻牙根部。"
          : isEs
          ? "Muelas del juicio atrapadas que causan infección, dolor o desplazamiento."
          : "Painful, crowded, or impacted third molars threatening adjacent teeth and alignment.",
      },
      {
        title: isZh ? "晚期牙周病导致松动" : isEs ? "Enfermedad Periodontal Avanzada" : "Advanced Periodontal Bone Loss",
        desc: isZh
          ? "牙槽骨吸收严重过度，牙齿失去骨组织支撑而严重松动。"
          : isEs
          ? "Pérdida ósea extrema por periodontitis que invalida la estabilidad."
          : "Severe gum disease where irreversible bone loss destroys tooth support stability.",
      },
      {
        title: isZh ? "正畸间隙需要" : isEs ? "Espacio para Ortodoncia" : "Orthodontic Space Creation",
        desc: isZh
          ? "严重齿列拥挤，需拔除个别退化牙齿以重新排列整齐弧度。"
          : isEs
          ? "Extracción estratégica para corregir un apiñamiento severo con alineadores."
          : "Strategic extraction to resolve severe crowding prior to Invisalign® or braces.",
      },
      {
        title: isZh ? "根管治疗失败或二次感染" : isEs ? "Fallo de Tratamiento de Conducto" : "Failed Root Canal Restoration",
        desc: isZh
          ? "复发性根尖周炎无法再次再治疗，需拔除以清除感染源。"
          : isEs
          ? "Infección recurrente insalvable tras re-tratamiento de conducto."
          : "Persistent apical infection where endodontic re-treatment is no longer viable.",
      },
    ],

    // Section 3: Extraction to Implant Pipeline
    pipelineTitle: isZh
      ? "拔牙与种植牙无缝衔接体系 (Extraction-to-Implant Pipeline)"
      : isEs
      ? "El Canal Integrado: De la Extracción al Implante Inmediato"
      : "The Extraction-to-Implant Pipeline",
    pipelineSubtitle: isZh
      ? "拔牙不是终点，而是重建健康咬合的起航。拔除牙齿后若不及时替代，牙槽骨将在第一年内吸收高达 40–60%："
      : isEs
      ? "Reemplazar un diente extraído previene la pérdida de hueso mandibular y el movimiento de los dientes vecinos:"
      : "Replacing an extracted tooth is essential to protect your jawbone and prevent neighboring teeth from shifting:",
    pipelineBenefits: [
      {
        title: isZh ? "骨量保存 (Socket Preservation)" : isEs ? "Preservación del Alvéolo Óseo" : "Socket Preservation & Bone Grafting",
        desc: isZh
          ? "拔牙同时填入高品质骨粉，防止牙槽窝塌陷，维持颌骨厚度与丰满度。"
          : isEs
          ? "Colocación de injerto óseo inmediato para evitar que el hueso mandibular se colapse."
          : "Placing a bone graft immediately into the extraction socket preserves bone volume and facial structure.",
      },
      {
        title: isZh ? "即刻种植 (Immediate Implant)" : isEs ? "Implante Dental Inmediato" : "Immediate Dental Implant Placement",
        desc: isZh
          ? "在条件允许下，Dr. Cameron Lewis 可在拔牙同一就诊时间内直接植入钛合金/锆种植体，节省数月恢复期。"
          : isEs
          ? "El Dr. Lewis puede colocar el implante dental inmediatamente después de extraer la pieza."
          : "When clinically ideal, Dr. Lewis places the implant fixture directly into the socket during the same visit.",
      },
      {
        title: isZh ? "维持面部轮廓与咬合对称" : isEs ? "Mantenimiento del Perfil Facial" : "Facial Structural Support",
        desc: isZh
          ? "防止邻牙向缺牙隙倾倒，维持正常咀嚼功能与脸颊充盈美感。"
          : isEs
          ? "Evita que la cara se hunda y que los dientes contiguos se desalineen."
          : "Prevents jaw recession, cheek hollowing, and secondary dental misalignment.",
      },
    ],

    // Section 4: Root Canal vs Extraction
    decisionTitle: isZh ? "保留天然牙还是拔除？根管治疗 vs 拔牙抉择" : isEs ? "Tratamiento de Conducto vs. Extracción Dental" : "Dental Extraction vs. Root Canal: How to Decide",
    decisionSubtitle: isZh
      ? "在 Tribeca Dental Studio，我们永远首选保留天然牙。但当无法修复时，拔牙是最安全的选择："
      : isEs
      ? "Siempre priorizamos conservar su diente natural. Si no es posible, la extracción evita infecciones graves:"
      : "We always evaluate natural tooth preservation first. Here is how we help you weigh your options:",

    // Section 5: Step-by-Step Recovery
    recoveryTitle: isZh ? "术后恢复与Care护理指南" : isEs ? "Cuidados Posteriores y Recuperación" : "Post-Extraction Aftercare & Smooth Recovery",
    recoverySteps: [
      {
        phase: isZh ? "术后即刻 (前 1-2 小时)" : isEs ? "Inmediatamente Después" : "Immediately Post-Op",
        instructions: isZh
          ? "咬紧止血纱布 30-45 分钟以压迫止血；冰敷面部每次 15 分钟以减少肿胀。"
          : isEs
          ? "Muerda la gasa suavemente durante 30-45 minutos e aplique hielo para mitigar la inflamación."
          : "Bite firmly on gauze for 30–45 minutes to control bleeding. Apply cold ice packs intermittently.",
      },
      {
        phase: isZh ? "术后 24-48 小时" : isEs ? "Primeras 24 - 48 Horas" : "First 24 to 48 Hours",
        instructions: isZh
          ? "食用温凉软食（如酸奶、奶昔、马铃薯泥）；严禁吸烟、使用吸管吸饮水或剧烈漱口，防止血块脱落引起“干槽症 (Dry Socket)”。"
          : isEs
          ? "Consuma alimentos blandos. NO fume, NO use pajillas ni se enjuague con fuerza para evitar la alveolitis."
          : "Stick to soft foods. Strictly AVOID straws, smoking, spitting, or vigorous rinsing to prevent dry socket.",
      },
      {
        phase: isZh ? "第 2 天起与长期" : isEs ? "Día 2 en Adelante" : "Day 2 & Beyond",
        instructions: isZh
          ? "餐后使用温盐水轻柔漱口；避开拔牙窝刷牙；遵医嘱服用止痛药，多数患者 2-3 天内恢复正常生活。"
          : isEs
          ? "Realice enjuagues suaves con agua tibia y sal. La mayoría de los pacientes regresan a sus actividades en 2-3 días."
          : "Begin gentle warm saltwater rinses after meals. Avoid brushing directly over the socket. Resume routine in 2–3 days.",
      },
    ],

    // Section 6: FAQs
    faqsTitle: isZh ? "拔牙与口腔外科常见问题" : isEs ? "Preguntas Frecuentes sobre Extracciones" : "Frequently Asked Questions About Extractions",
    faqs: [
      {
        q: isZh ? "拔牙过程真的完全不痛吗？" : isEs ? "¿La extracción dental causa dolor?" : "Are tooth extractions painful?",
        a: isZh
          ? "是的。在手术开始前，我们会对拔牙区域进行充分的局部麻醉；对于特别紧张的患者，我们还提供舒缓镇静（Sedation）。您在过程中只会感受到轻微的压迫感，完全不会感到锐痛。"
          : isEs
          ? "No. Gracias a la anestesia local avanzada y opciones de sedación, no sentirá dolor durante el procedimiento, solo una ligera presión."
          : "No. Thanks to modern local anesthetics and available sedation options, you will not feel pain during the procedure. You may feel mild pressure as the tooth is gently eased out.",
      },
      {
        q: isZh ? "什么是“分牙术” (Sectioning a Tooth)？为什么需要分牙？" : isEs ? "¿Qué es el seccionamiento dental?" : "What is tooth sectioning, and why is it used?",
        a: isZh
          ? "对于阻生智齿或多根复杂牙齿，Dr. Cameron Lewis 会使用精细仪器将牙齿分切为数个小块再逐一取出。这种做法能极大地减小对周围牙槽骨和牙龈的创伤，显著加快术后愈合速度。"
          : isEs
          ? "Es una técnica donde la pieza se divide en secciones más pequeñas para removerla sin dañar el hueso circundante."
          : "For complex or impacted teeth, Dr. Lewis carefully divides the tooth into smaller sections. This minimizes pressure on surrounding bone, reduces trauma, and speeds recovery.",
      },
      {
        q: isZh ? "拔牙后多久可以安装种植牙？" : isEs ? "¿Cuánto tiempo debo esperar para un implante?" : "How long after extraction can I get a dental implant?",
        a: isZh
          ? "根据骨量条件，部分患者可在拔牙当天进行“即刻种植 (Immediate Implant)”；若感染较重或骨量不足，通常在拔牙伴骨移植后等待 2 至 4 个月即可植入。"
          : isEs
          ? "En muchos casos se realiza el implante inmediato el mismo día. De lo contrario, se esperan de 2 a 4 meses tras el injerto."
          : "In many cases, an immediate implant can be placed the exact same day. If bone regeneration is needed, the area typically heals in 2 to 4 months before placement.",
      },
      {
        q: isZh ? "什么是干槽症 (Dry Socket)？如何预防？" : isEs ? "¿Qué es la alveolitis seca y cómo se previene?" : "What is dry socket, and how do I prevent it?",
        a: isZh
          ? "干槽症是指拔牙窝内的凝血块过早脱落，导致骨面暴露产生的疼痛。预防的关键是术后 48 小时内绝对避免吸管吸饮、吸烟、吐口水或剧烈漱口。"
          : isEs
          ? "Es la disolución del coágulo en el alvéolo. Se evita no usando pajillas, no fumando y evitando enjuagues fuertes las primeras 48 horas."
          : "Dry socket occurs if the healing blood clot dislodges from the socket. Prevent it by avoiding straws, smoking, spitting, and hard rinsing during the first 48 hours.",
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
        
        {/* 1. HERO SECTION (50/50 Split Layout with Wisdom Tooth Image) */}
        <section
          className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-20"
          aria-label="Hero Section"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* LEFT COLUMN: HERO TEXT & ACTIONS */}
            <header>
              <nav className="mb-8" aria-label="Breadcrumb">
                <Link
                  href={`/${lang}/services`}
                  className="text-s uppercase tracking-[0.25em] font-bold text-neutral-400 hover:text-black transition-colors"
                >
                  ← {isZh ? "返回诊疗服务" : isEs ? "Volver a Servicios" : "Back to Services"}
                </Link>
              </nav>

              <div className="flex items-center gap-2 text-[#C5A059] mb-3">
                <Sparkles size={18} />
                <span className="text-s uppercase tracking-[0.3em] font-bold block">
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
                  className="inline-flex items-center justify-center bg-black hover:bg-[#C5A059] text-white font-bold uppercase tracking-[0.2em] text-s px-8 py-4 transition-all duration-300 shadow-sm"
                >
                  {isZh
                    ? "预约拔牙与外科面诊"
                    : isEs
                    ? "Agendar Cita de Cirugía Oral"
                    : "Book Extraction Consultation"}
                </a>
                <a
                  href="tel:2125615303"
                  className="inline-flex items-center justify-center border border-black/20 hover:border-black text-black font-bold uppercase tracking-[0.2em] text-s px-8 py-4 transition-all duration-300"
                >
                  212-561-5303
                </a>
              </div>
            </header>

            {/* RIGHT COLUMN: WISDOM TOOTH / ORAL SURGERY MEDIA CARD */}
            <div className="relative aspect-[4/3] bg-neutral-950 border border-neutral-800 overflow-hidden shadow-2xl group">
              
              {/* WISDOM TOOTH EXTRACTION FEATURED IMAGE */}
              <Image
                src="/services/tooth-extraction.jpg" // Replace with actual wisdom tooth / oral surgery clinical image
                alt="Wisdom Tooth Extraction and Gentle Oral Surgery in Tribeca NYC"
                fill
                unoptimized
                className="object-cover object-center filter contrast-[1.05] brightness-90 group-hover:scale-105 transition-transform duration-700"
              />

              {/* EDITORIAL GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* FLOATING SURGERY SUITE BADGE */}
              <div className="absolute top-5 right-5 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 border border-white/10 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">
                  Tribeca Dental Studio • Surgical Suite
                </span>
              </div>

              {/* BOTTOM CAPTION GLASS CARD */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-black/60 backdrop-blur-md border border-white/10 text-white shadow-xl">
                <div className="flex items-center gap-2 text-[#C5A059] mb-1">
                  <ShieldCheck size={16} className="text-[#C5A059]" />
                  <p className="text-s uppercase tracking-widest font-bold">
                    Precision Tissue-Preserving Extraction
                  </p>
                </div>
                <p className="font-brandon text-s text-neutral-300 leading-relaxed">
                  {isZh
                    ? "微创无痛智齿拔除与骨量维持，由 Dr. Cameron Lewis 亲自施术。"
                    : isEs
                    ? "Extracción de cordales y preservación del alvéolo por el Dr. Cameron Lewis."
                    : "Surgical precision wisdom tooth extraction and socket preservation led by Dr. Cameron Lewis, DDS."}
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* 2. DR. CAMERON LEWIS SPOTLIGHT SECTION */}
        <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-20" id="surgeon">
          <div className="bg-white border border-neutral-200 p-8 md:p-14 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* SURGEON IMAGE CARD */}
              <div className="lg:col-span-5 relative aspect-[4/5] bg-neutral-100 border border-neutral-200 overflow-hidden shadow-md">
                <Image
                  src="/services/drlewis.jpg" // Replace with Dr. Cameron Lewis photo
                  alt="Dr. Cameron Lewis DDS Oral Surgeon Tribeca Dental Studio"
                  fill
                  unoptimized
                  className="object-cover object-center filter contrast-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] block mb-1">
                    Board-Trained Specialist
                  </span>
                  <h3 className="text-xl font-bold uppercase tracking-tight">
                    Dr. Cameron Lewis, DDS
                  </h3>
                  <p className="font-brandon text-xs text-neutral-300 mt-0.5">
                    Oral & Maxillofacial Surgeon
                  </p>
                </div>
              </div>

              {/* SURGEON BIO & CREDENTIALS */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 text-[#C5A059] mb-3">
                  <Award size={20} />
                  <span className="text-xs uppercase tracking-[0.3em] font-bold block">
                    Surgical Leadership
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-neutral-900 mb-6">
                  {content.surgeonTitle}
                </h2>

                <p className="font-brandon text-sm md:text-base text-neutral-600 leading-relaxed mb-8">
                  {content.surgeonSubtitle}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {content.surgeonPoints.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-neutral-50 p-4 border border-neutral-200">
                      <CheckCircle2 size={16} className="text-[#C5A059] shrink-0 mt-0.5" />
                      <span className="font-brandon text-xs font-bold text-neutral-800 uppercase leading-snug">
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black hover:bg-[#C5A059] text-white font-bold uppercase tracking-[0.2em] text-xs px-8 py-4 transition-all duration-300"
                >
                  <span>{isZh ? "预约 Dr. Lewis 外科门诊" : isEs ? "Cita con el Dr. Lewis" : "Consult Dr. Cameron Lewis"}</span>
                  <ArrowRight size={14} />
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* 3. WHEN IS EXTRACTION NECESSARY GRID */}
        <section className="bg-neutral-50 py-20 px-6 md:px-12 lg:px-20 border-y border-neutral-200 mb-20" id="indications">
          <div className="max-w-7xl mx-auto">
            <header className="max-w-3xl mb-12">
              <div className="flex items-center gap-2 text-[#C5A059] mb-2">
                <Stethoscope size={20} aria-hidden="true" />
                <span className="text-xs uppercase tracking-[0.3em] font-bold block">
                  Clinical Indications
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-black mb-4">
                {content.reasonsTitle}
              </h2>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.reasons.map((r, idx) => (
                <article key={idx} className="p-8 bg-white border border-neutral-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] block mb-2">
                      Indication 0{idx + 1}
                    </span>
                    <h3 className="text-xl font-bold uppercase tracking-tight text-black mb-3">
                      {r.title}
                    </h3>
                    <p className="font-brandon text-xs text-neutral-600 leading-relaxed">
                      {r.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. THE EXTRACTION-TO-IMPLANT PIPELINE */}
        <section className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-20" id="implant-pipeline">
          <header className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-[#C5A059] mb-2">
              <Activity size={20} aria-hidden="true" />
              <span className="text-xs uppercase tracking-[0.3em] font-bold block">
                Jawbone & Aesthetic Preservation
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-black mb-4">
              {content.pipelineTitle}
            </h2>
            <p className="font-brandon text-sm text-neutral-600 leading-relaxed">
              {content.pipelineSubtitle}
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.pipelineBenefits.map((b, idx) => (
              <article key={idx} className="p-8 bg-white border border-neutral-200 shadow-sm">
                <span className="text-2xl font-light text-[#C5A059] block mb-4">
                  0{idx + 1}
                </span>
                <h3 className="text-lg font-bold uppercase tracking-tight text-black mb-3">
                  {b.title}
                </h3>
                <p className="font-brandon text-xs text-neutral-600 leading-relaxed">
                  {b.desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* 5. DENTAL EXTRACTION VS ROOT CANAL DECISION MATRIX */}
        <section className="bg-neutral-900 text-white py-16 px-6 md:px-12 lg:px-20 border border-neutral-900 max-w-7xl mx-auto mb-20" id="comparison">
          <header className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-3">
              Treatment Comparison
            </span>
            <h2 className="text-2xl md:text-4xl font-light uppercase tracking-tight text-white mb-4">
              {content.decisionTitle}
            </h2>
            <p className="font-brandon text-xs text-neutral-400">
              {content.decisionSubtitle}
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* ROOT CANAL OPTION */}
            <div className="p-8 bg-white/5 border border-white/10">
              <span className="text-xs uppercase font-bold text-[#C5A059] tracking-widest block mb-2">
                Option A • Preservation First
              </span>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-4">
                Root Canal Therapy (RCT)
              </h3>
              <p className="font-brandon text-xs text-neutral-300 leading-relaxed mb-6">
                Saves your natural tooth structure by removing infected internal pulp, cleansing canals, and capping with a protective ceramic crown.
              </p>
              <div className="space-y-2 border-t border-white/10 pt-4 text-xs font-brandon text-neutral-300">
                <p>✓ Preserves natural root and bone signals</p>
                <p>✓ Fast 1-to-2 visit procedure</p>
                <p>✓ Ideal when enough healthy crown structure remains</p>
              </div>
            </div>

            {/* EXTRACTION OPTION */}
            <div className="p-8 bg-white/10 border border-[#C5A059] relative">
              <span className="text-xs uppercase font-bold text-[#C5A059] tracking-widest block mb-2">
                Option B • Unrestorable Cases
              </span>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-4">
                Tooth Extraction + Implant
              </h3>
              <p className="font-brandon text-xs text-neutral-300 leading-relaxed mb-6">
                Completely removes hopelessly compromised teeth to eliminate infection and pain, paving the way for a permanent dental implant.
              </p>
              <div className="space-y-2 border-t border-white/10 pt-4 text-xs font-brandon text-neutral-300">
                <p>✓ Eliminates persistent or deep bone infection</p>
                <p>✓ Replaces hopeless structure with a lifelong titanium implant</p>
                <p>✓ Performed with tissue-preserving surgical precision</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. RECOVERY & AFTERCARE STEP-BY-STEP */}
        <section className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-20" id="aftercare">
          <header className="max-w-2xl mb-12">
            <div className="flex items-center gap-2 text-[#C5A059] mb-2">
              <Clock size={20} aria-hidden="true" />
              <span className="text-xs uppercase tracking-[0.3em] font-bold block">
                Post-Op Protocol
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-black mb-4">
              {content.recoveryTitle}
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.recoverySteps.map((s, idx) => (
              <article key={idx} className="p-8 bg-white border border-neutral-200 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] block mb-2">
                  Phase 0{idx + 1}
                </span>
                <h3 className="text-xl font-bold uppercase tracking-tight text-black mb-4">
                  {s.phase}
                </h3>
                <p className="font-brandon text-xs text-neutral-600 leading-relaxed">
                  {s.instructions}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* 7. INTERACTIVE FAQ ACCORDION */}
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

        {/* 8. INTERNAL LINKING HUB FOR SEO */}
        <section className="py-12 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
          <div className="border border-neutral-200 bg-white p-8 md:p-12 shadow-sm">
            <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] mb-4">
              Explore Related Surgical & Restorative Specialties
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href={`/${lang}/services/all-on-4-dental-implants`}
                className="group flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 hover:border-[#C5A059] transition-colors"
              >
                <span className="font-brandon text-xs font-bold uppercase tracking-wider text-black">
                  Single & All-on-4 Dental Implants
                </span>
                <ArrowRight
                  size={14}
                  className="text-[#C5A059] group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
                href={`/${lang}/services/wisdom-tooth-removal`}
                className="group flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 hover:border-[#C5A059] transition-colors"
              >
                <span className="font-brandon text-xs font-bold uppercase tracking-wider text-black">
                  Wisdom Teeth Extractions
                </span>
                <ArrowRight
                  size={14}
                  className="text-[#C5A059] group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
                href={`/${lang}/services/porcelain-veneers`}
                className="group flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 hover:border-[#C5A059] transition-colors"
              >
                <span className="font-brandon text-xs font-bold uppercase tracking-wider text-black">
                  Cosmetic Porcelain Veneers
                </span>
                <ArrowRight
                  size={14}
                  className="text-[#C5A059] group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
                href={`/${lang}/best-dentist-in-nyc`}
                className="group flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 hover:border-[#C5A059] transition-colors"
              >
                <span className="font-brandon text-xs font-bold uppercase tracking-wider text-black">
                  Meet Our Surgical Specialists
                </span>
                <ArrowRight
                  size={14}
                  className="text-[#C5A059] group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* 9. BOTTOM CTA BANNER */}
        <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto pb-24">
          <div className="bg-black text-white p-10 md:p-16 text-center border border-black">
            <h2 className="text-2xl md:text-4xl font-light uppercase tracking-tight text-white mb-4">
              {isZh
                ? "预约 Dr. Cameron Lewis 亲诊无痛拔牙与外科治疗"
                : isEs
                ? "¿Necesita una Extracción Dental o Cirugía Oral en NYC?"
                : "Schedule Your Oral Surgery Consultation with Dr. Cameron Lewis"}
            </h2>
            <p className="font-brandon text-sm text-neutral-300 max-w-lg mx-auto mb-8">
              {isZh
                ? "即刻联系 Tribeca Dental Studio，享受舒缓无痛的专科级口腔外科诊疗体验。"
                : isEs
                ? "Contacte a nuestro cirujano oral especialista en Lower Manhattan hoy mismo."
                : "Experience compassionate, tissue-preserving oral surgery in Lower Manhattan."}
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