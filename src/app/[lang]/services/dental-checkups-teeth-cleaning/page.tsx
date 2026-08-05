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
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Activity,
  Award,
  Clock,
  Zap,
  RotateCcw,
  Microscope,
  Calendar,
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
    ? "纽约 Tribeca 全面口腔检查与深度洗牙诊疗 | Tribeca Dental Studio"
    : isEs
    ? "Exámenes Dentales y Limpieza en Tribeca, NYC | Tribeca Dental Studio"
    : "Comprehensive Dental Exams & Teeth Cleanings Tribeca NYC | Tribeca Dental Studio";

  const description = isZh
    ? "纽约 Tribeca 专科级预防牙科与激光洗牙：结合 iTero® 3D 口腔三维扫描、数字 X 光、口腔癌筛查与超声波微创洗牙，为全家提供个性化牙周健康守护。"
    : isEs
    ? "Exámenes dentales completos y limpieza profiláctica avanzada en Lower Manhattan, NYC. Escaneo 3D iTero®, detección de cáncer oral y cuidado periodontal personalizado."
    : "Bespoke dental exams, iTero® 3D digital occlusal scanning, laser-assisted teeth cleanings, and oral cancer screenings in Lower Manhattan, NYC. Preventive oral health for the whole family.";

  return {
    title,
    description,
    keywords: [
      "Dental Exams Tribeca NYC",
      "Teeth Cleaning Manhattan",
      "Preventive Dentistry NYC",
      "iTero 3D Scan Dental Cleaning",
      "Laser Dental Hygiene Tribeca",
      "Best Dental Checkup NYC",
      "Periodontal Cleaning Manhattan",
      "Gentle Dental Cleanings NYC",
      "Oral Cancer Screening Tribeca",
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
      url: `https://tribecadentalstudio.com/${lang}/services/dental-checkups-teeth-cleaning`,
      siteName: "Tribeca Dental Studio",
      images: [
        {
          url: "https://tribecadentalstudio.com/about-studio.jpg",
          width: 1200,
          height: 630,
          alt: "Comprehensive Dental Exams & Teeth Cleanings at Tribeca Dental Studio NYC",
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
      canonical: `https://tribecadentalstudio.com/${lang}/services/dental-checkups-teeth-cleaning`,
      languages: {
        en: "https://tribecadentalstudio.com/en/services/dental-checkups-teeth-cleaning",
        es: "https://tribecadentalstudio.com/es/services/dental-checkups-teeth-cleaning",
        zh: "https://tribecadentalstudio.com/zh/services/dental-checkups-teeth-cleaning",
      },
    },
  };
}

export default async function DentalCheckupsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isZh = lang === "zh";
  const isEs = lang === "es";

  // --- JSON-LD STRUCTURED DATA (Schema.org DiagnosticProcedure & Dentist) ---
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
          "Dental Exams & Diagnostic X-Rays",
          "Professional Teeth Cleaning (Prophylaxis)",
          "iTero 3D Digital Intraoral Scanning",
          "Laser-Assisted Periodontal Hygiene",
          "Oral Cancer Screening",
          "Bite Force & Occlusal Monitoring",
        ],
      },
      {
        "@type": "MedicalProcedure",
        "name": "Comprehensive Oral Examination & Ultrasonic Dental Prophylaxis",
        "procedureType": "Diagnostic and Preventive Dental Care",
        "bodyLocation": "Oral Cavity, Teeth Enamel, Periodontal Tissue",
        "relevantSpecialty": {
          "@type": "MedicalSpecialty",
          "name": "Preventive Dentistry & Dental Hygiene",
        },
      },
    ],
  };

  const content = {
    badge: isZh
      ? "微创高阶预防牙科与牙周护理"
      : isEs
      ? "Odontología Preventiva e Higiene de Avanzada"
      : "High-Precision Preventive & Periodontal Care",
    title: isZh
      ? "纽约 Tribeca 数字化全面检查与精细洗牙"
      : isEs
      ? "Exámenes Dentales y Limpieza en Tribeca, NYC"
      : "Dental Exams & Teeth Cleanings in Tribeca, NYC",
    subtitle: isZh
      ? "预防永远是健康最坚固的防线。我们结合 iTero® 3D 口腔扫描、激光辅助清洁与全面口腔癌筛查，精准扑灭微小龋齿与牙周隐患，全面守护全家人的持久健康。"
      : isEs
      ? "La prevención es la base de una sonrisa saludable. Combinamos escaneos 3D iTero®, tecnología láser y exámenes minuciosos para mantener sus dientes y encías impecables."
      : "At Tribeca Dental Studio, prevention is our highest priority. We combine iTero® 3D digital scanning, laser-assisted hygiene, and gentle ultrasonic scaling to catch issues early and safeguard your teeth for life.",

    // Tech Highlights
    techTitle: isZh ? "Tribeca 3D 数字化检查诊断系统" : isEs ? "Diagnóstico Digital 3D de Vanguardia" : "Our 3D Advanced Diagnostic Technology Stack",
    techSubtitle: isZh
      ? "传统的“用肉眼看”已成过去。每次检查，我们都使用顶尖设备为您绘制全方位口内健康地图："
      : isEs
      ? "Vaya más allá del examen visual tradicional con nuestra suite de diagnóstico de precisión:"
      : "We go beyond basic visual exams with a precision technology stack that uncovers micro-issues before they cause pain:",
    techFeatures: [
      {
        icon: Microscope,
        title: isZh ? "iTero® 3D 数字化口内全景扫描" : isEs ? "Escaneo Digital 3D iTero®" : "iTero® 3D Digital Scanning",
        desc: isZh ? "无需痛苦咬印模。几分钟内捕获牙齿三维模型，精准检测微小裂纹、磨损、咬合异常及早期隐形龋齿。" : isEs ? "Modelado 3D inmediato para evaluar el desgaste, la mordida y caries ocultas sin pastas molestas." : "Captures a high-resolution 3D digital map of your teeth, tracking tooth wear, bite pressure, and subtle gum recession over time.",
      },
      {
        icon: Zap,
        title: isZh ? "激光辅助精细牙周清洁" : isEs ? "Limpieza Asistida por Láser" : "Laser-Assisted Hygiene",
        desc: isZh ? "采用微创二极管激光靶向杀灭牙周袋内的致病细菌，减轻牙龈发炎红肿，促进软组织快速愈合。" : isEs ? "Elimina bacterias profundas debajo de las encías reduciendo la inflamación y acelerando la sanación." : "Targets harmful bacterial colonies deep beneath the gumline to eliminate inflammation without disturbing healthy tissue.",
      },
      {
        icon: ShieldCheck,
        title: isZh ? "全套数字低辐射 X 光片" : isEs ? "Radiografía Digital de Baja Radiación" : "Low-Radiation Digital Radiographs",
        desc: isZh ? "辐射量极低，提供高清晰度的牙根与牙槽骨骨量图像，及时发现牙缝间隙隐蔽病变。" : isEs ? "Imágenes ultraclaras de las raíces y la hueso con una fracción de la radiación tradicional." : "Provides crystal-clear sub-surface imaging of tooth roots and bone density with up to 90% less radiation than legacy systems.",
      },
      {
        icon: Activity,
        title: isZh ? "无痛全身与口腔癌筛查" : isEs ? "Examen Preventivo de Cáncer Oral" : "Full-Spectrum Oral Cancer Screening",
        desc: isZh ? "检查涵盖舌侧、软腭、颊黏膜与颈部淋巴结，做到早早期监测与预防防护。" : isEs ? "Evaluación minuciosa de los tejidos blandos, lengua y garganta para una detección temprana." : "Comprehensive palpation and visual check of the tongue, palate, and neck tissues to ensure absolute long-term safety.",
      },
    ],

    // Benefits
    benefitsTitle: isZh ? "定期专业洗牙与检查的核心获益" : isEs ? "Beneficios de una Limpieza Profesional" : "Key Benefits of Professional Teeth Cleaning",
    benefitsSubtitle: isZh
      ? "不仅仅是清爽的牙齿，更是全身健康的重要屏障："
      : isEs
      ? "Un cuidado preventivo que impacta positivamente su salud general:"
      : "Professional prophylaxis goes far beyond cosmetics—it is systemic protection for your whole body:",
    benefitsList: [
      {
        title: isZh ? "彻底拔除牙结石与深层牙菌斑" : isEs ? "Eliminación de Placa y Sarro" : "Stops Cavities Before They Start",
        desc: isZh ? "日常刷牙牙线无法清除已硬化的牙结石。超声波微创震荡能轻松清除这些腐蚀牙釉质的病菌温床。" : isEs ? "Remueve el sarro endurecido que el cepillo dental no puede eliminar." : "Removes calcified plaque (tartar) that home brushing cannot budge, stopping acid erosion at its earliest phase.",
      },
      {
        title: isZh ? "预防牙周炎与牙槽骨吸收" : isEs ? "Prevención de Enfermedades de la Encía" : "Prevents Irreversible Gum Disease",
        desc: isZh ? "全美近 42% 的成年人患有不同程度牙周病。定期洗牙消除牙龈红肿出血，锁牢齿根骨量。" : isEs ? "Previene la gingivitis y evita que progrese a periodontitis grave." : "Halts gingivitis before it turns into periodontitis—the leading cause of adult tooth loss and bone erosion.",
      },
      {
        title: isZh ? "持久清新口气与天然抛光提亮" : isEs ? "Aliento Fresco y Sonrisa Radiante" : "Fresher Breath & Natural Stain Removal",
        desc: isZh ? "清除残留于牙缝与牙龈沟深处的发酵细菌，并精细抛光温和带走咖啡、茶与红酒的外源性色素。" : isEs ? "Elimina bacterias causantes del mal aliento y pulimentador de manchas de café o vino." : "Eradication of odor-causing anaerobic bacteria combined with gentle micro-polishing to buff away coffee, tea, and wine stains.",
      },
      {
        title: isZh ? "心血管与全身健康联防" : isEs ? "Protección de la Salud Sistémica" : "Supports Systemic Cardiovascular Health",
        desc: isZh ? "医学研究证实，牙周病菌与心脏病、糖尿病及呼吸道感染密切相关。保持口腔洁净即是守护全身系统。" : isEs ? "La salud bucal está directamente vinculada con la salud cardíaca y el control de la diabetes." : "Clinical research connects active gum bacteria to cardiac conditions and diabetes. Keeping gums tight protects your heart.",
      },
    ],

    // Recall Schedule Grid
    scheduleTitle: isZh ? "个性化牙科复诊与洗牙频率指南" : isEs ? "Frecuencia Recomendada para su Limpieza" : "Recommended Prophylaxis & Recall Schedule",
    scheduleSubtitle: isZh ? "根据美国牙医学会 (ADA) 标准及 TDS 个体评估指南：" : isEs ? "Pautas personalizadas según la ADA y su condición oral:" : "Based on American Dental Association (ADA) guidelines and individual risk factors:",
    scheduleCards: [
      {
        freq: "Every 6 Months",
        target: isZh ? "基础预防口腔维护" : isEs ? "Mantenimiento General Preventive" : "Standard Preventive Health",
        desc: isZh ? "适用于大多数无严重牙周病及龋齿低风险的健康儿童及成年人。" : isEs ? "Ideal para niños y adultos con encías sanas y bajo riesgo de caries." : "Ideal for healthy adults and children with low risk of periodontal disease or rapid decay.",
        highlight: false,
      },
      {
        freq: "Every 3–4 Months",
        target: isZh ? "牙周炎/种植牙/正畸患者" : isEs ? "Mantenimiento Periodontal y Ortodoncia" : "Periodontal, Implant & Ortho Patients",
        desc: isZh ? "针对曾接受牙周深刮治疗、佩戴隐适美/牙套或口内有种植牙的患者，防止细菌反弹。" : isEs ? "Recomendado para pacientes con implantes, brackets o historial de gingivitis recurrente." : "Crucial for patients with history of periodontitis, dental implants, or active Invisalign® clear aligner therapy.",
        highlight: true,
      },
      {
        freq: "Every 12–18 Months",
        target: isZh ? "全套 diagnostic X 光低辐射影像" : isEs ? "Radiografías y Chequeo Diagnóstico" : "Full Diagnostic X-Ray Assessment",
        desc: isZh ? "定期低剂量 X 光检查，全面检测内部牙根与骨量结构变化。" : isEs ? "Evaluación completa con imágenes digitales para monitorear hueso y raíces." : "Comprehensive digital imaging check to survey hidden interproximal regions and root structures.",
        highlight: false,
      },
    ],

    // 5-Step Protocol
    processTitle: isZh ? "Tribeca 数字化 5 步精细洗牙流程" : isEs ? "El Proceso de Limpieza en 5 Pasos" : "The 5-Stage Precision Hygiene Experience",
    processSubtitle: isZh
      ? "全程舒适轻柔，无急躁不适感："
      : isEs
      ? "Un tratamiento cómodo, meticuloso y sin prisas:"
      : "Careful, gentle, and designed around your comfort:",
    steps: [
      {
        num: "01",
        title: isZh ? "iTero® 全口扫描与精准口内检查" : isEs ? "Escaneo 3D y Examen Inicial" : "iTero® 3D Scan & Comprehensive Visual Exam",
        desc: isZh ? "医生与卫生士使用口内摄像镜头与 3D 扫描仪评估咬合、软组织及牙龈红肿程度。" : isEs ? "Evaluación detallada de la salud de las encías, dientes y mordida con escáner 3D." : "Initial visual mapping, periodontal pocket measurement, and high-precision iTero® 3D digital imaging.",
      },
      {
        num: "02",
        title: isZh ? "超声波 Gentle 洁牙与隐形结石震荡" : isEs ? "Limpieza Ultrasónica Suave" : "Ultrasonic Cavitron Scaling",
        desc: isZh ? "使用温柔的超声波振头配合流水喷洗，快速去除牙齿表面与龈缘下方的顽固牙结石。" : isEs ? "Vibraciones ultrasónicas que desprenden el sarro sin dañar el esmalte ni las encías." : "High-frequency water-cooled sound waves gently dislodge calculus deposits without damaging natural enamel.",
      },
      {
        num: "03",
        title: isZh ? "精细手工牙缝刮治 (Fine Hand Scaling)" : isEs ? "Detallado Manual Interdental" : "Fine Hand Instrument Scaling",
        desc: isZh ? "卫生士针对牙齿邻面与狭窄牙缝进行精细手动刮治，确保每一处角落干净滑顺。" : isEs ? "Instrumentación delicada para limpiar áreas estrechas entre diente y diente." : "Precision hand curettes reach microscopic tight spaces between teeth to leave root surfaces completely smooth.",
      },
      {
        num: "04",
        title: isZh ? "天然微微抛光与外源性色素抛除" : isEs ? "Pulido Profesional y Remoción de Manchas" : "Prophy-Jet Enamel Micro-Polishing",
        desc: isZh ? "使用温和的专业膏体打磨牙齿表面，祛除表面咖啡/茶渍，使牙面光滑降低未来菌斑粘附。" : isEs ? "Remoción suave de manchas superficiales para devolver el brillo y suavidad natural." : "Specialized organic polishing compound removes coffee and tea stains, leaving enamel ultra-smooth so plaque can't stick.",
      },
      {
        num: "05",
        title: isZh ? "氟化物矿化保护或激光牙周养护" : isEs ? "Tratamiento de Flúor o Láser Guard" : "Fluoride Varnish & Personalized Oral Plan",
        desc: isZh ? "涂抹高阶氟漆防敏防龋，并根据您的口内环境制定日常家用牙线及冲牙器指导。" : isEs ? "Aplicación de flúor protector y recomendaciones personalizadas de higiene en casa." : "Reinforcing application of protective minerals to soothe sensitivity and strengthen tooth enamel against acid attacks.",
      },
    ],

    // FAQs
    faqsTitle: isZh ? "检查与洗牙常见问题" : isEs ? "Preguntas Frecuentes sobre Limpieza Dental" : "Frequently Asked Questions About Dental Cleanings",
    faqs: [
      {
        q: isZh ? "洗牙会导致牙缝变大或牙齿变敏感吗？" : isEs ? "¿La limpieza dental abre espacios o destruye el esmalte?" : "Will dental cleanings make gaps wider or damage my teeth?",
        a: isZh
          ? "绝对不会。洗牙去除的是原本堵在牙缝里的病态牙结石。当包裹在结石下的肿胀牙龈恢复健康退肿后，原本就存在的牙缝显露出来，给人牙缝变大的错觉。洗牙本身完全不伤牙齿！"
          : isEs
          ? "No. La limpieza solo retira el sarro endurecido. Al desinflamarse la encía, se siente el espacio real entre dientes, pero el esmalte queda totalmente protegido."
          : "No. Scaling only dislodges bacteria and calcified tartar build-up. When inflamed gums heal and swelling goes down, you are simply feeling your natural spaces without calculus blockage.",
      },
      {
        q: isZh ? "洗牙过程会感到很疼痛吗？敏感怎么办？" : isEs ? "¿La limpieza dental es dolorosa?" : "Are teeth cleanings painful?",
        a: isZh
          ? "通常洗牙非常轻柔舒适。若您患有较重牙龈炎或牙根敏感，我们的卫生士会在洁牙前施加表面舒缓麻醉凝胶，确保您整个过程毫无压力。"
          : isEs
          ? "La mayoría de las personas no sienten dolor. Si tiene sensibilidad o encías inflamadas, aplicamos un gel anestésico tópico para su total comodidad."
          : "Standard cleanings are painless. If you experience tooth sensitivity or inflamed gums, our hygienists can apply a fast-acting topical numbing gel to make your visit completely comfortable.",
      },
      {
        q: isZh ? "我有保险，预防性检查和洗牙通常涵盖吗？" : isEs ? "¿La limpieza está cubierta por el seguro dental?" : "Is a routine dental cleaning covered by insurance?",
        a: isZh
          ? "绝大多数牙科保险公司每年 100% 涵盖 2 次预防性检查与常规洗牙（Prophylaxis）。我们的财务团队会免费帮您核查保险福利，最大化您的保障。"
          : isEs
          ? "La mayoría de los seguros dentales cubren dos limpiezas preventivas al año al 100%. Nuestro equipo puede verificar su cobertura de inmediato."
          : "Yes. The vast majority of PPO dental insurance policies cover two preventive exams and cleanings per year at 100%. Our administrative team will happily verify your specific plan benefits.",
      },
      {
        q: isZh ? "为什么我需要进行 iTero® 3D 扫描而非仅仅目测？" : isEs ? "¿Por qué es importante el escaneo 3D iTero®?" : "Why do I need an iTero® 3D digital scan during my cleaning visit?",
        a: isZh
          ? "iTero® 3D 扫描能建立您的专属口腔数字化档案。它能精确比对前后几年的牙齿磨损损耗速率、隐形牙龈萎缩程度以及咬合压力集中点，实现极致的预警性健康管理。"
          : isEs
          ? "El escaneo 3D genera un mapa digital que permite comparar el desgaste del esmalte y la retracción de encías año tras año."
          : "The iTero® scan creates a digital baseline of your mouth. It allows us to track microscopic tooth wear, enamel erosion, and subtle gum recession over time with 3D comparative overlays.",
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
        
        {/* 1. HERO SECTION (50/50 Split Layout with High-Contrast Media Card) */}
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
                    ? "预约全面检查与洗牙"
                    : isEs
                    ? "Agendar Examen y Limpieza"
                    : "Book Cleaning & Exam"}
                </a>
                <a
                  href="tel:2125615303"
                  className="inline-flex items-center justify-center border border-black/20 hover:border-black text-black font-bold uppercase tracking-[0.2em] text-s px-8 py-4 transition-all duration-300"
                >
                  212-561-5303
                </a>
              </div>
            </header>

            {/* RIGHT COLUMN: PREVENTIVE CARE CLINICAL MEDIA CARD */}
            <div className="relative aspect-[4/3] bg-neutral-950 border border-neutral-800 overflow-hidden shadow-2xl group">
              <Image
                src="/services/cleaning.webp" // High resolution preventive hygiene image
                alt="Gentle Teeth Cleaning and Digital iTero Scan at Tribeca Dental Studio"
                fill
                unoptimized
                className="object-cover object-center filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-700"
              />

              {/* DARK EDITORIAL VIGNETTE */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* FLOATING LUXURY OVERLAY BADGE */}
              <div className="absolute top-5 right-5 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 border border-white/10 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">
                  Tribeca Preventive Suite
                </span>
              </div>

              {/* BOTTOM CAPTION GLASS CARD */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-black/60 backdrop-blur-md border border-white/10 text-white shadow-xl">
                <div className="flex items-center gap-2 text-[#C5A059] mb-1">
                  <Stethoscope size={16} className="text-[#C5A059]" />
                  <p className="text-s uppercase tracking-widest font-bold">
                    3D iTero® Digital Mapping & Ultrasonic Scaling
                  </p>
                </div>
                <p className="font-brandon text-s text-neutral-300 leading-relaxed">
                  {isZh
                    ? "通过无痛超声波与激光辅助技术，全方位清除深层牙结石与致病隐患。"
                    : isEs
                    ? "Higiene dental avanzada con láser y ultrasonido para encías totalmente sanas."
                    : "Gentle ultrasonic cavitation and laser diode disinfection designed for optimal periodontal longevity."}
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* 2. ADVANCED DIAGNOSTIC TECH STACK GRID */}
        <section className="bg-neutral-50 py-20 px-6 md:px-12 lg:px-20 border-y border-neutral-200 mb-20" id="technology">
          <div className="max-w-7xl mx-auto">
            <header className="max-w-3xl mb-12">
              <div className="flex items-center gap-2 text-[#C5A059] mb-2">
                <Award size={20} aria-hidden="true" />
                <span className="text-s uppercase tracking-[0.3em] font-bold block">
                  Diagnostic Standard
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-black mb-4">
                {content.techTitle}
              </h2>
              <p className="font-brandon text-sm text-neutral-600 leading-relaxed">
                {content.techSubtitle}
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.techFeatures.map((tf, idx) => {
                const Icon = tf.icon;
                return (
                  <article key={idx} className="p-8 bg-white border border-neutral-200 shadow-sm flex flex-col justify-between">
                    <div>
                      <Icon size={28} className="text-[#C5A059] mb-4" />
                      <h3 className="text-xl font-bold uppercase tracking-tight text-black mb-3">
                        {tf.title}
                      </h3>
                      <p className="font-brandon text-s text-neutral-600 leading-relaxed">
                        {tf.desc}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. KEY BENEFITS OF REGULAR CLEANINGS */}
        <section className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-20" id="benefits">
          <header className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-[#C5A059] mb-2">
              <ShieldCheck size={20} aria-hidden="true" />
              <span className="text-s uppercase tracking-[0.3em] font-bold block">
                Total Health Investment
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-black mb-4">
              {content.benefitsTitle}
            </h2>
            <p className="font-brandon text-sm text-neutral-600 leading-relaxed">
              {content.benefitsSubtitle}
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.benefitsList.map((b, idx) => (
              <div key={idx} className="p-8 bg-white border border-neutral-200 shadow-sm flex items-start gap-5">
                <span className="text-2xl font-light text-[#C5A059] block shrink-0">
                  0{idx + 1}
                </span>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-black mb-3">
                    {b.title}
                  </h3>
                  <p className="font-brandon text-s text-neutral-600 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. RECOMMENDED RECALL SCHEDULE MATRIX */}
        <section className="bg-neutral-900 text-white py-16 px-6 md:px-12 lg:px-20 border border-neutral-900 max-w-7xl mx-auto mb-20" id="schedule">
          <header className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-s uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-3">
              Tailored Recalls
            </span>
            <h2 className="text-2xl md:text-4xl font-light uppercase tracking-tight text-white mb-4">
              {content.scheduleTitle}
            </h2>
            <p className="font-brandon text-s text-neutral-400">
              {content.scheduleSubtitle}
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {content.scheduleCards.map((sc, idx) => (
              <div
                key={idx}
                className={`p-8 border flex flex-col justify-between ${
                  sc.highlight
                    ? "bg-white/10 border-[#C5A059] shadow-2xl relative"
                    : "bg-white/5 border-white/10"
                }`}
              >
                <div>
                  {sc.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C5A059] text-black text-[9px] uppercase font-bold tracking-widest px-3 py-1 shadow-md">
                      Specialist Recommended
                    </span>
                  )}
                  <div className="flex items-center gap-2 text-[#C5A059] mb-2">
                    <Calendar size={18} />
                    <span className="text-lg font-bold uppercase tracking-widest text-[#C5A059]">
                      {sc.freq}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-4">
                    {sc.target}
                  </h3>
                  <p className="font-brandon text-s text-neutral-300 leading-relaxed mb-6">
                    {sc.desc}
                  </p>
                </div>

                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 text-center font-bold uppercase text-[10px] tracking-[0.2em] transition-all duration-300 ${
                    sc.highlight
                      ? "bg-[#C5A059] text-black hover:bg-white"
                      : "bg-white/10 text-white hover:bg-white hover:text-black"
                  }`}
                >
                  Schedule Hygiene Visit
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* 5. 5-STAGE HYGIENE PROCESS */}
        <section className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-20" id="process">
          <header className="max-w-2xl mb-12">
            <div className="flex items-center gap-2 text-[#C5A059] mb-2">
              <RotateCcw size={20} aria-hidden="true" />
              <span className="text-s uppercase tracking-[0.3em] font-bold block">
                Bespoke Hygiene Workflow
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-black mb-4">
              {content.processTitle}
            </h2>
            <p className="font-brandon text-sm text-neutral-600 leading-relaxed">
              {content.processSubtitle}
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {content.steps.map((st, idx) => (
              <article key={idx} className="p-6 bg-white border border-neutral-200 shadow-sm relative flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-light text-[#C5A059] block mb-3">
                    {st.num}
                  </span>
                  <h3 className="text-base font-bold uppercase tracking-tight text-black mb-2">
                    {st.title}
                  </h3>
                  <p className="font-brandon text-xs text-neutral-600 leading-relaxed">
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
              Explore Related Preventive & Cosmetic Specialties
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                href={`/${lang}/services/airway-treatments`}
                className="group flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 hover:border-[#C5A059] transition-colors"
              >
                <span className="font-brandon text-s font-bold uppercase tracking-wider text-black">
                  Airway & Sleep Apnea Screening
                </span>
                <ArrowRight
                  size={14}
                  className="text-[#C5A059] group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
                href={`/${lang}/services/tooth-extractions`}
                className="group flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 hover:border-[#C5A059] transition-colors"
              >
                <span className="font-brandon text-s font-bold uppercase tracking-wider text-black">
                  Oral Surgery & Extractions
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
                  Meet Our Hygiene & Doctor Team
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
                ? "预约您的全面口腔检查与精细洗牙"
                : isEs
                ? "¿Listo para su Examen y Limpieza Dental en NYC?"
                : "Schedule Your Preventive Exam & Cleaning Today"}
            </h2>
            <p className="font-brandon text-sm text-neutral-300 max-w-lg mx-auto mb-8">
              {isZh
                ? "让 Tribeca Dental Studio 的前沿数字化诊断与温柔卫生士团队为您缔造健康亮丽的微笑。"
                : isEs
                ? "Disfrute de una atención preventiva excepcional en Lower Manhattan."
                : "Experience meticulous, gentle preventive hygiene care powered by modern 3D technology in Lower Manhattan."}
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