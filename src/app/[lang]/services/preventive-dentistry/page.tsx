/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { bookingUrl } from "@/hooks/helper";
import {
  Sparkles,
  ShieldCheck,
  Stethoscope,
  ArrowRight,
  ChevronDown,
  Activity,
  Award,
  Microscope,
  HeartPulse,
  Sparkle,
  Lock,
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
    ? "纽约 Tribeca 综合预防牙科与口腔健康管理 | Tribeca Dental Studio"
    : isEs
    ? "Odontología Preventiva en Tribeca, NYC | Tribeca Dental Studio"
    : "Comprehensive Preventive Dentistry Tribeca NYC | Tribeca Dental Studio";

  const description = isZh
    ? "纽约 Tribeca 专科级预防牙科：提供 3D 检查、超声波洗牙、口腔癌筛查、牙齿窝沟封闭 (Dental Sealants) 及无创 ICON® 树脂渗透治疗 (ICON Resin Infiltration)。"
    : isEs
    ? "Odontología preventiva integral en Lower Manhattan, NYC. Exámenes 3D, limpiezas profilácticas, selladores dentales y tratamiento sin taladro ICON® para manchas blancas."
    : "Comprehensive preventive dentistry in Tribeca, NYC. Featuring 3D digital checkups, teeth cleanings, oral cancer screenings, dental sealants, and drill-free ICON® resin infiltration for white spots.";

  return {
    title,
    description,
    keywords: [
      "Preventive Dentistry Tribeca NYC",
      "Preventive Dental Care Manhattan",
      "ICON Resin Infiltration NYC",
      "Dental Sealants Tribeca",
      "Oral Cancer Screening NYC",
      "Drill-Free Cavity Treatment NYC",
      "White Spot Treatment Teeth NYC",
      "Preventive Dentist Lower Manhattan",
      "Bi-Annual Dental Cleaning Tribeca",
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
      url: `https://tribecadentalstudio.com/${lang}/services/preventive-dentistry`,
      siteName: "Tribeca Dental Studio",
      images: [
        {
          url: "https://tribecadentalstudio.com/about-studio.jpg",
          width: 1200,
          height: 630,
          alt: "Preventive Dentistry Services at Tribeca Dental Studio NYC",
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
      canonical: `https://tribecadentalstudio.com/${lang}/services/preventive-dentistry`,
      languages: {
        en: "https://tribecadentalstudio.com/en/services/preventive-dentistry",
        es: "https://tribecadentalstudio.com/es/services/preventive-dentistry",
        zh: "https://tribecadentalstudio.com/zh/services/preventive-dentistry",
      },
    },
  };
}

export default async function PreventiveDentistryPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isZh = lang === "zh";
  const isEs = lang === "es";

  // --- JSON-LD STRUCTURED DATA (Schema.org MedicalProcedure & Dentist) ---
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
        "priceRange": "$$",
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
          "Preventive Oral Health & Diagnostics",
          "Professional Dental Cleanings (Prophylaxis)",
          "Oral Cancer Screening",
          "Pit & Fissure Dental Sealants",
          "ICON Resin Infiltration for White Spots",
          "Systemic Oral-Body Health Interventions",
        ],
      },
      {
        "@type": "MedicalProcedure",
        "name": "Comprehensive Preventive Dental Care & ICON® Resin Infiltration",
        "procedureType": "Preventive and Minimally Invasive Dental Care",
        "bodyLocation": "Oral Cavity, Tooth Enamel, Periodontal Tissues",
        "relevantSpecialty": {
          "@type": "MedicalSpecialty",
          "name": "Preventive Dentistry",
        },
      },
    ],
  };

  const content = {
    badge: isZh
      ? "微创高阶预防牙科与健康管理"
      : isEs
      ? "Odontología Preventiva Integral de Avanzada"
      : "Proactive Oral Health Architecture",
    title: isZh
      ? "纽约 Tribeca 综合预防牙科服务"
      : isEs
      ? "Odontología Preventiva en Tribeca, NYC"
      : "Preventive Dentistry in Tribeca, NYC",
    subtitle: isZh
      ? "最好的牙科诊疗在于将隐患扼杀在萌芽之中。在 Tribeca Dental Studio，我们结合前沿诊断技术与微创预防手段，守护您与全家人的终身口腔健康。"
      : isEs
      ? "Un enfoque proactivo para detener caries, desgaste de esmalte y enfermedades periodontales antes de que comiencen. Cuidado integral para toda su familia."
      : "A radiant smile starts long before symptoms arise. We combine advanced diagnostic tools, gentle hygiene therapies, and cutting-edge drill-free enamel treatments to protect your teeth for a lifetime.",

    // Section 1: 4 Core Pillars of Prevention
    pillarsTitle: isZh ? "预防牙科的四大核心价值" : isEs ? "Beneficios de la Odontología Preventiva" : "Why Preventive Care Is Your Best Investment",
    pillarsSubtitle: isZh
      ? "主动防患于未然，避免昂贵且繁复的侵入性治疗："
      : isEs
      ? "Beneficios clave que protegen su salud y su bienestar financiero:"
      : "Proactive oral care delivers clinical and financial benefits that compound over time:",
    pillars: [
      {
        icon: ShieldCheck,
        title: isZh ? "阻断龋齿与牙周炎发展" : isEs ? "Prevención de Caries y Periodontitis" : "Halts Decay & Gum Inflammation",
        desc: isZh ? "定期清除积聚的生物牙菌斑与顽固牙结石，从根源上阻止酸性物质腐蚀牙釉质与牙槽骨。" : isEs ? "Elimina la placa y el sarro que causan inflamación de las encías y caries prematuras." : "Routine prophylaxis strips away pathogenic bio-films and calcified tartar before acid erosion damages enamel.",
      },
      {
        icon: Lock,
        title: isZh ? "避免高昂复杂的侵入性手术" : isEs ? "Evita Procedimientos Costosos" : "Avoids Costly & Complex Procedures",
        desc: isZh ? "早期发现极微小的隐患，几分钟的预防处理即可省去未来根管治疗、牙套或拔牙的昂贵开销。" : isEs ? "Detectar problemas a tiempo le evita necesitar tratamientos invasivos como conductos o coronas." : "Catching minor micro-lesions early preserves natural structure and protects you from high-ticket restorative procedures.",
      },
      {
        icon: HeartPulse,
        title: isZh ? "协同全身心血管与代谢健康" : isEs ? "Protección de la Salud Sistémica" : "Supports Overall Systemic Health",
        desc: isZh ? "口腔感染与心血管疾病、糖尿病并发症及呼吸道系统感染紧密相连。控制口内细菌即是保护全身。" : isEs ? "La salud bucal está ligada a la salud cardiovascular y al control de enfermedades como la diabetes." : "Oral bacteria entering the bloodstream are linked to heart conditions and diabetes complications. Healthy gums protect your heart.",
      },
      {
        icon: Sparkle,
        title: isZh ? "保持亮白自信的天然笑容" : isEs ? "Sonrisa Radiante y Natural" : "Sustains a Bright, Confident Smile",
        desc: isZh ? "精细研磨抛光带走外源性色素沉积，令牙齿保持天然光泽，让您随时随地自信绽放笑容。" : isEs ? "Mantiene sus dientes limpios, pulidos y libres de manchas causadas por café, té o vino." : "Regular stain removal and enamel polishing keep your teeth bright and smooth without harsh chemical whiteners.",
      },
    ],

    // Section 2: Services Suite Breakdown
    suiteTitle: isZh ? "Tribeca 预防牙科全方位的诊疗矩阵" : isEs ? "Servicios de Odontología Preventiva" : "Our Preventive Dental Suite",
    suiteSubtitle: isZh
      ? "为您和全家定制的个性化预防保护方案："
      : isEs
      ? "Tratamientos avanzados diseñados para proteger y reforzar cada diente:"
      : "Comprehensive preventive modalities tailored to your unique oral chemistry:",
    services: [
      {
        title: isZh ? "全面口腔检查与超声波洁牙" : isEs ? "Exámenes Completos y Limpiezas" : "Comprehensive Exams & Cleanings",
        desc: isZh
          ? "每半年一次的例行检查，包含全口软硬组织评估、iTero® 3D 扫描、咬合压力分析及无痛超声波洁牙。"
          : isEs
          ? "Evaluación exhaustiva de dientes, encías y mordida con escáneres 3D y limpiezas ultrasónicas."
          : "Bi-annual evaluations paired with 3D digital occlusal scanning and ultrasonic prophylaxis to clear calcified buildup.",
        tag: "Core Preventive Baseline",
        link: "/services/dental-checkups-teeth-cleaning",
      },
      {
        title: isZh ? "无痛口腔癌早期筛查" : isEs ? "Despistaje de Cáncer Oral" : "Oral Cancer Screening",
        desc: isZh
          ? "在每次例行检查中对唇部、舌侧、颊黏膜与咽喉颈部进行仔细触诊与目视检查，实现早早期发现与救命防护。"
          : isEs
          ? "Inspección minuciosa de los tejidos bklandos de la boca para detectar anomalías tempranas de forma indolora."
          : "A quick, painless, life-saving screening of your lips, tongue, cheeks, and throat performed at every routine visit.",
        tag: "Early Detection Shield",
        link: "#screening",
      },
      {
        title: isZh ? "牙齿窝沟封闭 (Dental Sealants)" : isEs ? "Selladores Dentales Anti-Caries" : "Dental Sealants",
        desc: isZh
          ? "针对儿童及青少年的防龋神器。在后牙磨牙凹凸不平的咬合面上涂抹一层薄的保护层，阻隔食物残渣与病菌入内。"
          : isEs
          ? "Capa protectora en las fosas y fisuras de los molares que sella la entrada a bacterias y comida."
          : "A smooth, clear protective coating brushed onto deep grooves of molars to 'seal out' plaque and food debris.",
        tag: "Pediatric & Teen Protection",
        link: "#sealants",
      },
      {
        title: isZh ? "ICON® 树脂渗透治疗 (白斑无创修复)" : isEs ? "Infiltración de Resina ICON®" : "ICON® Resin Infiltration",
        desc: isZh
          ? "革新性微创技术。无需钻牙、无需打麻药！通过流体树脂渗入早早期脱矿釉质与牙齿表面白斑，终止病变并恢复天然光泽。"
          : isEs
          ? "Tratamiento revolucionario sin taladro ni anestesia que elimina manchas blancas y frena caries en su etapa inicial."
          : "Revolutionary drill-free, needle-free technology that halts early micro-cavities and erases cosmetic white spots in a single visit.",
        tag: "Drill-Free Breakthrough",
        link: "#icon",
      },
    ],

    // Section 3: Spotlight on ICON Resin Infiltration
    iconTitle: isZh ? "ICON® 树脂渗透技术：免磨牙修复早期微龋与白斑" : isEs ? "Tratamiento ICON® Sin Taladro Ni Anestesia" : "Spotlight: ICON® Drill-Free Resin Infiltration",
    iconSubtitle: isZh
      ? "告别磨牙噩梦。针对正畸拆除后的脱矿白斑或早期釉质浅龋，无需磨除牙体组织即可完美修缮："
      : isEs
      ? "Dígale adiós al taladro para tratar las manchas blancas y la desmineralización del esmalte:"
      : "Eliminate cosmetic white spots and early enamel decay without drilling or local anesthesia:",
    iconPoints: [
      {
        title: isZh ? "100% 零钻牙、零痛感" : isEs ? "Sin Taladrar Ni Agujas" : "Zero Drilling or Needles Needed",
        desc: isZh ? "保持健康原生牙体完全不受损坏，敏感患者与儿童均可无压力接受治疗。" : isEs ? "Conserva intacto el esmalte sano de la pieza dental." : "Preserves 100% of your healthy tooth structure with zero pain.",
      },
      {
        title: isZh ? "单次就诊即可看到显著改观" : isEs ? "Resultados en una Sola Sesión" : "Immediate Single-Visit Results",
        desc: isZh ? "短短 45 分钟内充填脱矿微孔，彻底阻断病变发展并调和牙齿色泽。" : isEs ? "Infiltra la zona desmineralizada restaurando la estética en 45 minutos." : "Fills and reinforces porous enamel, blending white spots with natural enamel in ~45 minutes.",
      },
      {
        title: isZh ? "正畸后白斑美化首选" : isEs ? "Ideal para Post-Ortodoncia" : "Perfect for Post-Braces White Spots",
        desc: isZh ? "轻松祛除摘除托槽后留下的局部脱矿白印，重现平滑亮丽的外观。" : isEs ? "Elimina de forma estética las manchas dejadas por los brackets." : "Erases stubborn chalky spots left behind after fixed bracket removal.",
      },
    ],

    // Section 4: Process / Workflow
    processTitle: isZh ? "Tribeca 预防牙科全流程体验" : isEs ? "El Proceso de Cuidado Preventivo" : "The Preventive Care Patient Journey",
    processSubtitle: isZh
      ? "从精准诊断到个性化维护，全方位关怀："
      : isEs
      ? "Paso a paso para asegurar la máxima durabilidad de sus dientes:"
      : "A structured, personalized protocol designed for your absolute long-term oral health:",
    steps: [
      {
        num: "01",
        title: isZh ? "全面口内 3D 检查与病史评估" : isEs ? "Evaluación Inicial 3D" : "Comprehensive 3D Examination",
        desc: isZh ? "利用 iTero® 扫描与低辐射数字化 X 光片评估牙齿、咬合压力及软组织健康。" : isEs ? "Escaneo 3D y evaluación completa de los tejidos blandos y la estructura ósea." : "Detailed assessment using iTero® 3D digital imaging, bite analytics, and soft tissue palpation.",
      },
      {
        num: "02",
        title: isZh ? "超声波洁牙与口腔癌筛查" : isEs ? "Limpieza e Inspección Oral" : "Gentle Hygiene & Cancer Screen",
        desc: isZh ? "清除顽固牙结石与外源性色素，并同步完成周密的口腔癌早期筛查。" : isEs ? "Remoción de sarro endurecido con ultrasonido e inspección preventiva de mucosas." : "Ultrasonic scaling dislodges calculus while your dentist conducts a full oral tissue screening.",
      },
      {
        num: "03",
        title: isZh ? "靶向强化保护 (Sealants / ICON®)" : isEs ? "Protección Focalizada" : "Targeted Micro-Protection",
        desc: isZh ? "根据需要对磨牙沟壑涂抹封闭剂，或针对早期脱矿进行无创 ICON® 树脂渗透。" : isEs ? "Aplicación de selladores anti-caries o resina filtrante ICON® en manchas blancas." : "Application of molar sealants or micro-invasive ICON® resin for localized early enamel lesions.",
      },
      {
        num: "04",
        title: isZh ? "家庭护理指导与个性化复诊规划" : isEs ? "Plan de Mantenimiento Personalizado" : "Home-Care & Recall Strategy",
        desc: isZh ? "提供专属居家牙线及冲牙器指导，并根据个人风险系数制定 3–6 个月的复诊频率。" : isEs ? "Asesoramiento de higiene en casa y programación de su próxima visita preventiva." : "Custom home-hygiene recommendations and a tailored 3 to 6-month hygiene recall schedule.",
      },
    ],

    // Section 5: FAQs
    faqsTitle: isZh ? "预防牙科常见问题解答" : isEs ? "Preguntas Frecuentes sobre Odontología Preventiva" : "Frequently Asked Questions About Preventive Care",
    faqs: [
      {
        q: isZh ? "做预防性检查和洗牙频次应该是多少？" : isEs ? "¿Con qué frecuencia debo acudir a una consulta preventiva?" : "How often should I receive preventive dental checkups and cleanings?",
        a: isZh
          ? "根据美国牙医学会 (ADA) 建议，绝大多数患者应每 6 个月进行一次检查与洗牙。如果您患有牙周炎、戴有正畸牙套或易患龋齿，医生可能会建议每 3 至 4 个月就诊一次。"
          : isEs
          ? "La mayoría de los pacientes necesitan una visita cada 6 meses. Pacientes con historial de periodontitis o brackets requieren limpiezas cada 3 o 4 meses."
          : "Most patients require routine exams and cleanings every 6 months. Patients with a history of periodontal disease, active braces, or high cavity risk benefit from a 3 to 4-month recall cycle.",
      },
      {
        q: isZh ? "什么是 ICON® 树脂渗透治疗？它和补牙有什么区别？" : isEs ? "¿Qué es el tratamiento ICON® y en qué se diferencia de un empaste tradicional?" : "What is ICON® Resin Infiltration and how does it differ from a traditional filling?",
        a: isZh
          ? "传统补牙需要使用钻头去除腐蚀牙体，而 ICON® 是一种专为早早期“未破损”的极小龋齿及正畸后白斑设计的微创技术。它无需开钻、无需麻醉，通过流动树脂直接渗入软化釉质缝隙，封闭病变并恢复天然外观。"
          : isEs
          ? "ICON® sella caries en su etapa más inicial y elimina manchas blancas sin necesidad de usar el taladro ni anestesia, conservando el diente 100% intacto."
          : "Traditional fillings require drilling away natural structure to repair cavities. ICON® is a drill-free, needle-free procedure for early, un-cavitated micro-lesions and white spots, infiltrating porous enamel without altering healthy tooth surface.",
      },
      {
        q: isZh ? "牙齿窝沟封闭 (Sealants) 适合谁？能维持多久？" : isEs ? "¿Quiénes son candidatos para selladores dentales y cuánto duran?" : "Who is a candidate for dental sealants and how long do they last?",
        a: isZh
          ? "窝沟封闭最常推荐用于刚萌出恒磨牙的儿童与青少年（约 6 岁和 12 岁），但也适用于易患磨牙窝沟龋的成年人。密封剂通常可维持数年，并在例行检查中进行补充。"
          : isEs
          ? "Son ideales para niños y adolescentes con molares permanentes recién erupcionados. Duran varios años y se revisan en cada consulta."
          : "Sealants are highly recommended for children and teenagers as soon as their permanent molars erupt (around ages 6 and 12), though adults with deep fissures also benefit. They can last up to 9–10 years with routine care.",
      },
      {
        q: isZh ? "预防牙科服务通常能享受保险报销吗？" : isEs ? "¿Los servicios preventivos están cubiertos por el seguro dental?" : "Are preventive dentistry services covered by dental insurance?",
        a: isZh
          ? "是的。大部分牙科 PPO 保险会 100% 报销常规检查、低辐射 X 光片及每半年一次的洗牙费用。像窝沟封闭通常涵盖至青少年时期。我们的团队会为您核算每项福利。"
          : isEs
          ? "Sí. La gran mayoría de los seguros PPO cubren al 100% dos limpiezas y exámenes anuales. Nuestro equipo verificará sus beneficios."
          : "Yes. Most PPO dental plans cover bi-annual cleanings, routine exams, and diagnostic X-rays at 100%. Coverage for sealants and specialty treatments varies, and our team will gladly verify your benefits prior to treatment.",
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
        
        {/* 1. HERO SECTION (50/50 Split Layout) */}
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
                    ? "预约预防牙科检查"
                    : isEs
                    ? "Agendar Cita Preventiva"
                    : "Book Preventive Visit"}
                </a>
                <a
                  href="tel:2125615303"
                  className="inline-flex items-center justify-center border border-black/20 hover:border-black text-black font-bold uppercase tracking-[0.2em] text-s px-8 py-4 transition-all duration-300"
                >
                  212-561-5303
                </a>
              </div>
            </header>

            <div className="relative aspect-[4/3] bg-neutral-950 border border-neutral-800 overflow-hidden shadow-2xl group">
              <Image
                src="/services/preventive.webp" // High resolution preventive image placeholder
                alt="Comprehensive Preventive Dentistry and Dental Hygiene in Tribeca NYC"
                fill
                unoptimized
                className="object-cover object-center filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* FLOATING BADGE */}
              <div className="absolute top-5 right-5 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 border border-white/10 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">
                  Tribeca Dental Studio • Prevention Suite
                </span>
              </div>

              {/* BOTTOM CAPTION GLASS CARD */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-black/60 backdrop-blur-md border border-white/10 text-white shadow-xl">
                <div className="flex items-center gap-2 text-[#C5A059] mb-1">
                  <Stethoscope size={16} className="text-[#C5A059]" />
                  <p className="text-s uppercase tracking-widest font-bold">
                    Advanced 3D Prevention & Enamel Protection
                  </p>
                </div>
                <p className="font-brandon text-s text-neutral-300 leading-relaxed">
                  {isZh
                    ? "整合口内 3D 扫描、无创 ICON® 渗透及激光清洁，为您缔造终身健康的微笑防线。"
                    : isEs
                    ? "Integración de escaneo 3D, ICON® sin taladro e higiene avanzada para una salud oral óptima."
                    : "Comprehensive diagnostic scanning, drill-free ICON® resin infiltration, and personalized hygiene protocols."}
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* 2. THE 4 PILLARS OF PREVENTIVE CARE */}
        <section className="bg-neutral-50 py-20 px-6 md:px-12 lg:px-20 border-y border-neutral-200 mb-20" id="pillars">
          <div className="max-w-7xl mx-auto">
            <header className="max-w-3xl mb-12">
              <div className="flex items-center gap-2 text-[#C5A059] mb-2">
                <Award size={20} aria-hidden="true" />
                <span className="text-s uppercase tracking-[0.3em] font-bold block">
                  Foundational Health
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-black mb-4">
                {content.pillarsTitle}
              </h2>
              <p className="font-brandon text-sm text-neutral-600 leading-relaxed">
                {content.pillarsSubtitle}
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.pillars.map((pil, idx) => {
                const Icon = pil.icon;
                return (
                  <article key={idx} className="p-8 bg-white border border-neutral-200 shadow-sm flex flex-col justify-between">
                    <div>
                      <Icon size={28} className="text-[#C5A059] mb-4" />
                      <h3 className="text-xl font-bold uppercase tracking-tight text-black mb-3">
                        {pil.title}
                      </h3>
                      <p className="font-brandon text-s text-neutral-600 leading-relaxed">
                        {pil.desc}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. PREVENTIVE SERVICES MATRIX */}
        <section className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-20" id="services-suite">
          <header className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-[#C5A059] mb-2">
              <Activity size={20} aria-hidden="true" />
              <span className="text-s uppercase tracking-[0.3em] font-bold block">
                Comprehensive Offerings
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-black mb-4">
              {content.suiteTitle}
            </h2>
            <p className="font-brandon text-sm text-neutral-600 leading-relaxed">
              {content.suiteSubtitle}
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.services.map((srv, idx) => (
              <div key={idx} className="p-8 bg-white border border-neutral-200 shadow-sm flex flex-col justify-between group">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/10 inline-block px-3 py-1 border border-[#C5A059]/20 mb-4">
                    {srv.tag}
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-black mb-3">
                    {srv.title}
                  </h3>
                  <p className="font-brandon text-s text-neutral-600 leading-relaxed mb-6">
                    {srv.desc}
                  </p>
                </div>

                <Link
                  href={srv.link.startsWith("/") ? `/${lang}${srv.link}` : srv.link}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black group-hover:text-[#C5A059] transition-colors"
                >
                  <span>{isZh ? "了解详情" : isEs ? "Más información" : "Learn More"}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* 4. SPOTLIGHT: ICON® RESIN INFILTRATION (DRILL-FREE CAVITY & WHITE SPOT TREATMENT) */}
        <section className="bg-neutral-900 text-white py-16 px-6 md:px-12 lg:px-20 border border-neutral-900 max-w-7xl mx-auto mb-20" id="icon">
          <header className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-s uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-3">
              Minimally Invasive Breakthrough
            </span>
            <h2 className="text-2xl md:text-4xl font-light uppercase tracking-tight text-white mb-4">
              {content.iconTitle}
            </h2>
            <p className="font-brandon text-s text-neutral-400">
              {content.iconSubtitle}
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.iconPoints.map((pt, idx) => (
              <div key={idx} className="p-8 bg-white/5 border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-light text-[#C5A059] block mb-4">
                    0{idx + 1}
                  </span>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-3">
                    {pt.title}
                  </h3>
                  <p className="font-brandon text-s text-neutral-300 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C5A059] hover:bg-white text-black font-bold uppercase tracking-[0.25em] text-xs px-10 py-4 transition-all duration-300"
            >
              {isZh ? "预约 ICON® 树脂渗透治疗" : isEs ? "Consultar Tratamiento ICON®" : "Schedule ICON® Evaluation"}
            </a>
          </div>
        </section>

        {/* 5. STEP-BY-STEP PATIENT WORKFLOW */}
        <section className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-20" id="workflow">
          <header className="max-w-2xl mb-12">
            <div className="flex items-center gap-2 text-[#C5A059] mb-2">
              <Microscope size={20} aria-hidden="true" />
              <span className="text-s uppercase tracking-[0.3em] font-bold block">
                Structured Care
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-black mb-4">
              {content.processTitle}
            </h2>
            <p className="font-brandon text-sm text-neutral-600 leading-relaxed">
              {content.processSubtitle}
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.steps.map((st, idx) => (
              <article key={idx} className="p-8 bg-white border border-neutral-200 shadow-sm relative flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-light text-[#C5A059] block mb-4">
                    {st.num}
                  </span>
                  <h3 className="text-lg font-bold uppercase tracking-tight text-black mb-3">
                    {st.title}
                  </h3>
                  <p className="font-brandon text-s text-neutral-600 leading-relaxed">
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
            <span className="text-s uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-3">
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
                <p className="mt-4 font-brandon text-s text-neutral-600 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* 7. INTERNAL LINKING HUB FOR SEO */}
        <section className="py-12 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
          <div className="border border-neutral-200 bg-white p-8 md:p-12 shadow-sm">
            <h3 className="text-s uppercase tracking-[0.3em] font-bold text-[#C5A059] mb-4">
              Explore Related Dental & Pediatric Specialties
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href={`/${lang}/services/dental-checkups-teeth-cleaning`}
                className="group flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 hover:border-[#C5A059] transition-colors"
              >
                <span className="font-brandon text-s font-bold uppercase tracking-wider text-black">
                  Exams & Teeth Cleanings
                </span>
                <ArrowRight
                  size={14}
                  className="text-[#C5A059] group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
                href={`/${lang}/services/pediatric-dentistry`}
                className="group flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 hover:border-[#C5A059] transition-colors"
              >
                <span className="font-brandon text-s font-bold uppercase tracking-wider text-black">
                  Pediatric & Teen Dentistry
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
                <span className="font-brandon text-s font-bold uppercase tracking-wider text-black">
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
                <span className="font-brandon text-s font-bold uppercase tracking-wider text-black">
                  Meet Our Dental Team
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
                ? "即刻开启您的终身预防牙科守护"
                : isEs
                ? "¿Listo para Proteger su Sonrisa en NYC?"
                : "Schedule Your Comprehensive Preventive Visit Today"}
            </h2>
            <p className="font-brandon text-sm text-neutral-300 max-w-lg mx-auto mb-8">
              {isZh
                ? "体验 Tribeca Dental Studio 的微创前沿诊断与温和护理，让健康亮丽的微笑长久伴随。"
                : isEs
                ? "Contacte a nuestros odontólogos especialistas en Lower Manhattan para su examen y limpieza."
                : "Partner with Tribeca Dental Studio to stop dental issues before they start."}
            </p>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C5A059] hover:bg-white hover:text-black text-black font-bold uppercase tracking-[0.3em] text-s px-10 py-5 transition-all duration-300"
            >
              {isZh ? "立即在线预约" : isEs ? "Reservar Cita Ahora" : "Book Your Appointment Now"}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}