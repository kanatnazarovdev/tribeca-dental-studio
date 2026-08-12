/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { bookingUrl } from "@/hooks/helper";
import {
  Sparkles,
  Award,
  ArrowRight,
  ChevronDown,
  Play,
  Camera,
  Layers,
  Palette,
  Eye,
  Stethoscope,
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
    ? "纽约 Tribeca 私人定制瓷贴面与美学微笑设计 | Tribeca Dental Studio"
    : isEs
    ? "Carillas de Porcelana de Alta Gama en Tribeca, NYC | Tribeca Dental Studio"
    : "Bespoke Porcelain Veneers NYC | Master Smile Design | Tribeca Dental Studio";

  const description = isZh
    ? "纽约 Tribeca 顶级定制瓷贴面 (Porcelain Veneers)：结合 3D 数字化微笑设计 (Digital Smile Design) 与大师级手工瓷艺，打造天然透光、高度符合面部轮廓的隐形奢华美学微笑。"
    : isEs
    ? "Diseño de sonrisa de lujo y carillas de porcelana hechas a mano en Lower Manhattan, NYC. Resultados naturales, duraderos e hiper-personalizados para una sonrisa perfecta."
    : "Experience Beverly Hills / Apa Aesthetic-level bespoke porcelain veneers in Lower Manhattan, NYC. Custom hand-layered ceramic veneers crafted for natural translucency and facial symmetry.";

  return {
    title,
    description,
    keywords: [
      "Porcelain Veneers NYC",
      "Best Veneer Dentist Manhattan",
      "Bespoke Veneers Tribeca",
      "Cosmetic Dentist Lower Manhattan",
      "Digital Smile Design NYC",
      "Minimal Prep Veneers NYC",
      "Luxury Cosmetic Dentistry NYC",
      "Porcelain Veneers Cost NYC",
      "Composite Veneers Manhattan",
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
      url: `https://tribecadentalstudio.com/${lang}/services/porcelain-veneers`,
      siteName: "Tribeca Dental Studio",
      images: [
        {
          url: "https://tribecadentalstudio.com/og-veneers-luxury.jpg",
          width: 1200,
          height: 630,
          alt: "Bespoke Porcelain Veneers & Digital Smile Design at Tribeca Dental Studio NYC",
        },
      ],
      locale: lang === "zh" ? "zh_CN" : lang === "es" ? "es_ES" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://tribecadentalstudio.com/og-veneers-luxury.jpg"],
    },
    alternates: {
      canonical: `https://tribecadentalstudio.com/${lang}/services/porcelain-veneers`,
      languages: {
        en: "https://tribecadentalstudio.com/en/services/porcelain-veneers",
        es: "https://tribecadentalstudio.com/es/services/porcelain-veneers",
        zh: "https://tribecadentalstudio.com/zh/services/porcelain-veneers",
      },
    },
  };
}

export default async function PorcelainVeneersPage({
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
        "priceRange": "$$$$",
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
          "Hand-Layered Porcelain Veneers",
          "Digital Smile Design (DSD)",
          "Cosmetic Dentistry",
          "Minimal-Prep Ceramic Veneers",
          "Composite Resin Veneers",
          "Facial Aesthetic Smile Reconstruction",
        ],
      },
      {
        "@type": "MedicalProcedure",
        "name": "Bespoke Porcelain Veneer Smile Makeover",
        "procedureType": "Cosmetic Dental Restoration & Aesthetic Architecture",
        "bodyLocation": "Teeth Enamel, Dental Arch, Smile Line",
        "relevantSpecialty": {
          "@type": "MedicalSpecialty",
          "name": "Cosmetic & Aesthetic Dentistry",
        },
      },
    ],
  };

  const content = {
    badge: isZh
      ? "大师级美学瓷贴面高级定制"
      : isEs
      ? "Diseño de Sonrisa de Alta Costura"
      : "Bespoke Aesthetic Architecture",
    title: isZh
      ? "纽约 Tribeca 私人高级定制瓷贴面"
      : isEs
      ? "Carillas de Porcelana de Lujo en Tribeca, NYC"
      : "High-Fashion Porcelain Veneers in Tribeca, NYC",
    subtitle: isZh
      ? "拒绝千篇一律的突兀白牙。在 Tribeca Dental Studio，我们结合高级面部美学分析与大师级手工叠瓷工艺，为您缔造天然透光、比例浑然天成的璀璨奢华微笑。"
      : isEs
      ? "Diseño de sonrisa hiper-personalizado inspirado en los más altos estándares de estética facial. Carillas de porcelana elaboradas a mano con translucidez natural y armonía perfecta."
      : "Redefining Manhattan smiles through facial harmony and hand-layered ceramic artistry. We craft weightless, natural-looking porcelain veneers tailored to your unique lips, bone structure, and personality.",

    // Section 1: Apa Aesthetic Level Philosophy
    philosophyTitle: isZh ? "Tribeca 顶级定制美学哲学" : isEs ? "Nuestra Filosofía de Estética Facial" : "The Art of Natural Translucency & Facial Harmony",
    philosophySubtitle: isZh
      ? "绝不破坏原生美感。我们的每贴瓷片均由大师级技师逐层堆叠打磨，完美模拟天然牙釉质的乳光与微观纹理："
      : isEs
      ? "Evitamos las sonrisas artificiales e hiper-blancas. Cada pieza es una obra de arte diseñada para complementar sus rasgos únicos:"
      : "We reject unnatural, chalky, thick white teeth. True luxury cosmetic dentistry is invisible—enhancing your natural beauty rather than altering it:",
    philosophyPoints: [
      {
        icon: Palette,
        title: isZh ? "微米级多层叠瓷工艺" : isEs ? "Estratificación de Cerámica a Mano" : "Hand-Layered Micro-Ceramics",
        desc: isZh
          ? "由全球大师级齿科雕刻家独立比色并逐层堆叠，还原牙齿边缘独特的透明感与内源光泽。"
          : isEs
          ? "Estratificado a mano por ceramistas maestros para replicar el brillo y gradiente del esmalte natural."
          : "Handcrafted layer-by-layer by master ceramists to replicate the subtle gradients and light refraction of healthy enamel.",
      },
      {
        icon: Eye,
        title: isZh ? "面部比例与笑线架构" : isEs ? "Diseño Visagista Facial" : "Facial Visagism & Smile Arc Design",
        desc: isZh
          ? "根据瞳孔连线、唇部动态弧度与下巴轮廓设计牙齿长宽比例，实现面部整体下三分之一的提升。"
          : isEs
          ? "Diseñamos la curva de la sonrisa en armonía con la forma de sus labios, pómulos y proporciones faciales."
          : "Every tooth length, width, and angle is engineered to match your lip posture, cheekbones, and facial proportions.",
      },
      {
        icon: Layers,
        title: isZh ? "超薄微创/零备牙保护" : isEs ? "Conservación de Esmalte Natural" : "Ultra-Thin Enamel Preservation",
        desc: isZh
          ? "精确至 0.2mm - 0.5mm 极致薄度，最大程度保留天然牙釉质健康，实现无痛微创粘接。"
          : isEs
          ? "Grosor ultra-fino (0.2 - 0.5mm) que conserva el esmalte sano y requiere una preparación mínima."
          : "Crafted as thin as 0.2mm to 0.5mm, conserving maximum natural enamel while guaranteeing structural durability.",
      },
    ],

    // Section 2: Before & After Transformation Showcase
    galleryTitle: isZh ? "真实患者微笑蜕变画廊" : isEs ? "Galería de Transformaciones Reales" : "Bespoke Transformations Showcase",
    gallerySubtitle: isZh
      ? "探索由 Tribeca Dental Studio 美学专家团队塑造的高定微笑真实案例："
      : isEs
      ? "Descubra los resultados de nuestro diseño de sonrisa digital de alta precisión:"
      : "Explore real clinical transformations crafted at our Lower Manhattan boutique practice:",
    cases: [
      {
        tag: "Case 01 • Diastema & Shade Correction",
        title: isZh ? "门牙缝隙关断与天然荧光比色重塑" : isEs ? "Cierre de Diastema y Rediseño de Color" : "Diastema Closure & Enamel Shade Brightening",
        desc: isZh ? "10 颗高定 E-Max 瓷贴面，关闭前牙缝隙，塑造饱满高贵的 V 形弧度笑线。" : isEs ? "10 carillas E-Max para cerrar espacios frontales y corregir la pigmentación." : "10 Bespoke E-Max porcelain veneers restoring symmetry, closing gaps, and widening the smile arc.",
        details: "Shade: Custom Bleach Blend • Material: IPS e.max® CAD/CAM",
      },
      {
        tag: "Case 02 • Enamel Repair & Anti-Aging",
        title: isZh ? "磨损牙釉质修复与面部下三分之一重塑" : isEs ? "Restauración de Esmalte Desgastado" : "Enamel Erosion Repair & Facial Lift Effect",
        desc: isZh ? "针对咬合磨损与四环素牙进行全上颌美学瓷贴面覆盖，呈现年轻充盈的自然面容。" : isEs ? "Carillas de porcelana para restaurar el borde incisal desgastado y revitalizar el rostro." : "Restoring severely worn incisal edges to lift lip support and rejuvenate facial contours.",
        details: "Shade: Ombre Natural Enamel • Material: Feldsphatic Porcelain",
      },
    ],

    // Section 3: Modalities Comparison Grid
    modalitiesTitle: isZh ? "美学贴面材质与方案对比" : isEs ? "Comparativa de Tipos de Carillas" : "Complete Veneer Modality Comparison",
    modalitiesSubtitle: isZh ? "透明透明公开的材质选型与投资参考：" : isEs ? "Opciones y rangos de inversión en NYC:" : "Transparent analysis of material longevity and financial investment in NYC:",
    comparisonTable: [
      {
        type: isZh ? "大师级定制瓷贴面 (Porcelain)" : isEs ? "Carillas de Porcelana Artesanales" : "Handcrafted Porcelain Veneers",
        investment: "$1,900 – $3,500 / tooth",
        longevity: isZh ? "15–20+ 年持久璀璨" : isEs ? "15 - 20+ Años" : "10–20+ Years",
        stainResistance: isZh ? "极致防染 (咖啡/红酒不着色)" : isEs ? "Resistencia Total a Manchas" : "100% Stain & Color Proof",
        prepLevel: isZh ? "微创切削 (0.3mm - 0.5mm)" : isEs ? "Mínima Preparación" : "Minimal Prep (0.3mm–0.5mm)",
        bestFor: isZh ? "追求完美自然、彻底改头换面的全笑线重塑" : isEs ? "Transformaciones completas y máxima durabilidad" : "Full smile makeovers demanding absolute natural elegance.",
        highlight: true,
      },
      {
        type: isZh ? "无创超薄贴面 (No-Prep / Lumineers)" : isEs ? "Carillas Sin Preparación (No-Prep)" : "Ultra-Thin No-Prep Veneers",
        investment: "$1,800 – $3,000 / tooth",
        longevity: isZh ? "10–15 年" : isEs ? "10 - 15 Años" : "10–15 Years",
        stainResistance: isZh ? "极高防染" : isEs ? "Alta Resistencia" : "Exceptional Stain Resistance",
        prepLevel: isZh ? "零削磨 (0.2mm 隐形贴片)" : isEs ? "Sin Desgaste de Hueso" : "Zero Enamel Removal",
        bestFor: isZh ? "牙齿形态良好、仅需微调形状与色泽的患者" : isEs ? "Pacientes con dientes sanos que no desean desgaste" : "Healthy teeth needing color or minor shape enhancements.",
        highlight: false,
      },
      {
        type: isZh ? "树脂贴面 (Composite Veneers)" : isEs ? "Carillas de Resina Compuesta" : "Direct Composite Veneers",
        investment: "$500 – $1,500 / tooth",
        longevity: isZh ? "3–7 年" : isEs ? "3 - 7 Años" : "3–7 Years",
        stainResistance: isZh ? "中度 (需定期抛光保养)" : isEs ? "Resistencia Moderada" : "Moderate (Requires Polishing)",
        prepLevel: isZh ? "无需/极少切削" : isEs ? "Sin Desgaste" : "Direct Bonding (No Prep)",
        bestFor: isZh ? "单颗小创伤修补或预算有限的临时美学过渡" : isEs ? "Reparaciones menores en una sola sesión" : "Single-tooth chips or temporary cosmetic fix.",
        highlight: false,
      },
    ],

    // Section 4: Clinical 4-Step Process
    processTitle: isZh ? "Tribeca 私人订制微笑四步曲" : isEs ? "El Proceso de Creación Paso a Paso" : "The 4-Step Master Smile Design Process",
    processSubtitle: isZh
      ? "从 3D 试戴模拟到无痛精准粘接，全程精准可控，拒绝任何猜测："
      : isEs
      ? "Un proceso predecible, cómodo y digitalmente planificado:"
      : "Predictable, precise, and digitally planned from your first consultation:",
    steps: [
      {
        num: "01",
        title: isZh ? "3D 数字化微笑设计与试戴 (Trial Smile)" : isEs ? "Diseño Digital 3D y Prueba Real" : "Digital Smile Design & 3D Mockup",
        desc: isZh ? "使用 iTero® 扫描仪与高精面部相机进行 3D 建模，在真正开工前，您可以在口内试戴 3D 临时微笑，直观预览效果。" : isEs ? "Escaneo 3D y prueba de sonrisa en boca antes de realizar cualquier procedimiento." : "We capture high-resolution 3D digital scans and place a temporary composite 'try-on' smile in your mouth so you preview your results before starting.",
      },
      {
        num: "02",
        title: isZh ? "微米级牙体准备与高精临时贴面" : isEs ? "Preparación Mínima y Carillas Temporales" : "Minimal Micro-Prep & Custom Temporaries",
        desc: isZh ? "精细研磨极少量的表面牙釉质，并佩戴根据设计打磨的试戴贴面，保障制作期间的舒适与美观。" : isEs ? "Ajuste microscópico del esmalte y placement de carillas temporales personalizadas." : "Micro-contouring of outer enamel followed by immediate placement of custom temporary veneers designed to mimic your final look.",
      },
      {
        num: "03",
        title: isZh ? "大师级技师逐层烧结打磨" : isEs ? "Elaboración Artesanal en Laboratorio" : "Master Ceramist Handcrafted Staining",
        desc: isZh ? "我们的顶尖美学技师结合数字化设计图，使用德国高阶瓷块进行手工雕刻与多色阶烧结。" : isEs ? "Master ceramistas fabrican cada carilla a mano en nuestro laboratorio especializado." : "Our elite master ceramists hand-layer feldsphatic or E-Max porcelain to infuse natural internal character and translucency.",
      },
      {
        num: "04",
        title: isZh ? "无痛树脂粘接与咬合微调" : isEs ? "Adhesión de Precisión y Ajuste Ocusal" : "Precision Bonding & Bite Fine-Tuning",
        desc: isZh ? "使用高强树脂粘接剂将瓷片固定于牙面，并进行高精度的咬合微调，确保兼具坚固与极致美感。" : isEs ? "Cementado adhesivo de alta resistencia y calibración perfecta de la mordida." : "Permanent dual-cure resin bonding followed by precise occlusal balancing so your veneers function as strong as natural enamel.",
      },
    ],

    // Section 5: FAQs
    faqsTitle: isZh ? "瓷贴面常见问题解答" : isEs ? "Preguntas Frecuentes sobre Carillas" : "Frequently Asked Questions About Veneers",
    faqs: [
      {
        q: isZh ? "做瓷贴面会破坏我的原牙吗？" : isEs ? "¿Las carillas dañan mis dientes naturales?" : "Do porcelain veneers ruin your real teeth?",
        a: isZh
          ? "绝对不会。在 Tribeca Dental Studio，我们遵循微创保护理念，仅研磨大约 0.3mm - 0.5mm 的最外层表皮牙釉质。这种微创操作完全在安全范围内，且瓷贴面粘接后能进一步加固牙齿结构。"
          : isEs
          ? "No. Solo se remueve una capa microscópica de esmalte (0.3mm a 0.5mm). El procedimiento es seguro y fortalece la estructura del diente."
          : "No. When performed by experienced cosmetic specialists, we only remove a fraction of a millimeter (0.3mm–0.5mm) of outer enamel. This conservative process keeps the tooth healthy while the ceramic sheath actually adds structural strength.",
      },
      {
        q: isZh ? "瓷贴面看起来会显得假白很厚重吗？" : isEs ? "¿Las carillas se verán artificiales o demasiado blancas?" : "Will my porcelain veneers look artificial or overly white?",
        a: isZh
          ? "绝不。我们拒绝平淡死板的“石灰白”。我们通过精细比色、微观多层透明色阶以及与面部轮廓、肤色的完美匹配，打造充满自然华贵质感的天然微笑。"
          : isEs
          ? "En absoluto. Personalizamos el tono, la opacidad y la transparencia para que sus carillas luzcan radiantes pero totalmente naturales."
          : "Never. We specialize in natural translucency. By custom-blending multi-layered porcelain shades with your lip structure and skin tone, your veneers will look radiant, lifelike, and uniquely yours.",
      },
      {
        q: isZh ? "全套瓷贴面需要就诊几次？" : isEs ? "¿Cuántas visitas se necesitan para el tratamiento?" : "How many appointments does a full veneer makeover require?",
        a: isZh
          ? "通常仅需 2 至 3 次就诊：第一次为 3D 数字化扫描与试戴设计；第二次为微创准备与临时贴面佩戴；第三次进行大师级最终瓷片试戴与固化粘接。"
          : isEs
          ? "Normalmente solo se requieren 2 o 3 citas: consulta y escaneo 3D, preparación y temporales, y la colocación final."
          : "A complete transformation typically requires only 2 to 3 visits: 1) Initial 3D Scan & Digital Design Trial, 2) Micro-Prep & Temporary Placement, and 3) Final Master Bonding.",
      },
      {
        q: isZh ? "瓷贴面能维持多长时间？需要如何护理？" : isEs ? "¿Cuánto duran las carillas y qué cuidados requieren?" : "How long do porcelain veneers last and how do I care for them?",
        a: isZh
          ? "高品质手工瓷贴面寿命长达 10 至 20 年以上。您只需像对待天然牙齿一样保持每日刷牙、使用牙线，并每半年定期进行专业洗牙护理即可。"
          : isEs
          ? "Con una higiene oral adecuada y chequeos periódicos, las carillas de porcelana duran entre 10 y 20+ años."
          : "High-grade ceramic veneers last 10–20+ years with proper oral care. Simply maintain routine brushing, daily flossing, and regular 6-month dental cleanings.",
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

      <main className="bg-[#FCFCFC] text-black min-h-screen font-ddin">
        
        <section
          className="relative w-full h-[88vh] min-h-[750px] max-h-[900px] overflow-hidden flex items-center justify-center bg-black mb-20"
          aria-label="Hero Section"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/services/veneers.png" // Fallback poster
            className="absolute inset-0 w-full h-full object-cover filter contrast-[1.08] brightness-[0.6] scale-105"
          >
            <source src="/services/veneers.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30 pointer-events-none" />

          {/* FLOATING TOP-RIGHT BADGE */}
          <div className="absolute top-28 right-6 md:right-12 z-10 hidden sm:flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 border border-white/15 rounded-full shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/90">
              Tribeca Dental Studio
            </span>
          </div>

          {/* HERO CONTENT CONTAINER OVERLAY */}
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white pt-20">
            {/* BADGE */}
            <div className="flex items-center justify-center gap-2 text-[#C5A059] mb-4">
              <Sparkles size={18} />
              <span className="text-s uppercase tracking-[0.3em] font-bold block">
                {content.badge}
              </span>
            </div>

            {/* TITLE */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light uppercase tracking-tight leading-[1.05] mb-6 text-white drop-shadow-md">
              {content.title}
            </h1>

            {/* SUBTITLE */}
            <p className="font-brandon text-base md:text-xl text-neutral-200 leading-relaxed mb-10 max-w-3xl mx-auto drop-shadow-sm font-light">
              {content.subtitle}
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#C5A059] hover:bg-white text-black font-bold uppercase tracking-[0.25em] text-s px-10 py-5 transition-all duration-300 shadow-xl"
              >
                {isZh
                  ? "预约 VIP 美学微笑面诊"
                  : isEs
                  ? "Agendar Consulta de Estética VIP"
                  : "Book VIP Smile Consultation"}
              </a>
              <a
                href="tel:2125615303"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-black/40 hover:bg-black/80 backdrop-blur-md border border-white/30 text-white font-bold uppercase tracking-[0.25em] text-s px-10 py-5 transition-all duration-300"
              >
                212-561-5303
              </a>
            </div>

            {/* BOTTOM FLOATING VIDEO CAPTION BAR */}
            <div className="mt-14 inline-flex items-center gap-3 bg-black/50 backdrop-blur-md px-6 py-3 border border-white/10 rounded-full">
              <Play size={14} className="fill-[#C5A059] text-[#C5A059]" />
              <span className="text-[11px] font-brandon text-neutral-300 uppercase tracking-widest font-medium">
                {isZh
                  ? "4K 微观近景：演示手工微层烧结瓷片透光与自然感"
                  : isEs
                  ? "Demostración 4K: Translucidez y estratificación de cerámica"
                  : "Natural Light Refraction & Hand-Layered Ceramic Translucency"}
              </span>
            </div>

          </div>
        </section>

        {/* 2. APA-LEVEL AESTHETIC PHILOSOPHY */}
        <section className="bg-neutral-50 py-20 px-6 md:px-12 lg:px-20 border-y border-neutral-200 mb-20" id="philosophy">
          <div className="max-w-7xl mx-auto">
            <header className="max-w-3xl mb-12">
              <div className="flex items-center gap-2 text-[#C5A059] mb-2">
                <Award size={20} aria-hidden="true" />
                <span className="text-s uppercase tracking-[0.3em] font-bold block">
                  Editorial Standard
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-black mb-4">
                {content.philosophyTitle}
              </h2>
              <p className="font-brandon text-sm text-neutral-600 leading-relaxed">
                {content.philosophySubtitle}
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {content.philosophyPoints.map((pt, idx) => {
                const Icon = pt.icon;
                return (
                  <article key={idx} className="p-8 bg-white border border-neutral-200 shadow-sm flex flex-col justify-between">
                    <div>
                      <Icon size={28} className="text-[#C5A059] mb-4" />
                      <h3 className="text-xl font-bold uppercase tracking-tight text-black mb-3">
                        {pt.title}
                      </h3>
                      <p className="font-brandon text-s text-neutral-600 leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. BEFORE & AFTER TRANSFORMATION SHOWCASE */}
        <section className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-20" id="case-gallery">
          <header className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-[#C5A059] mb-2">
              <Camera size={20} aria-hidden="true" />
              <span className="text-s uppercase tracking-[0.3em] font-bold block">
                Clinical Excellence
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-black mb-4">
              {content.galleryTitle}
            </h2>
            <p className="font-brandon text-sm text-neutral-600 leading-relaxed">
              {content.gallerySubtitle}
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {content.cases.map((c, idx) => (
              <div key={idx} className="bg-white border border-neutral-200 shadow-sm overflow-hidden group">
                <div className="relative aspect-[16/9] bg-neutral-100 border-b border-neutral-200">
                  <Image
                    src="/about-studio.jpg" // Replace with actual Before & After photo
                    alt={c.title}
                    fill
                    unoptimized
                    className="object-cover object-center filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 text-[#C5A059] text-[10px] font-bold uppercase tracking-widest px-3 py-1 backdrop-blur-sm">
                    {c.tag}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-bold uppercase tracking-tight text-black mb-3">
                    {c.title}
                  </h3>
                  <p className="font-brandon text-s text-neutral-600 leading-relaxed mb-4">
                    {c.desc}
                  </p>
                  <div className="text-[10px] uppercase tracking-wider font-bold text-[#C5A059] bg-[#C5A059]/10 inline-block px-3 py-1 border border-[#C5A059]/20">
                    {c.details}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. VENEER MODALITY MATRIX TABLE */}
        <section className="bg-neutral-900 text-white py-16 px-6 md:px-12 lg:px-20 border border-neutral-900 max-w-7xl mx-auto mb-20" id="comparison">
          <header className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-s uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-3">
              Transparent Options
            </span>
            <h2 className="text-2xl md:text-4xl font-light uppercase tracking-tight text-white mb-4">
              {content.modalitiesTitle}
            </h2>
            <p className="font-brandon text-s text-neutral-400">
              {content.modalitiesSubtitle}
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {content.comparisonTable.map((m, idx) => (
              <div
                key={idx}
                className={`p-8 border flex flex-col justify-between ${
                  m.highlight
                    ? "bg-white/10 border-[#C5A059] shadow-2xl relative"
                    : "bg-white/5 border-white/10"
                }`}
              >
                <div>
                  {m.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C5A059] text-black text-[9px] uppercase font-bold tracking-widest px-3 py-1 shadow-md">
                      Gold Standard Option
                    </span>
                  )}
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-4">
                    {m.type}
                  </h3>
                  
                  <div className="border-y border-white/10 py-4 mb-6 space-y-2">
                    <div className="flex items-center justify-between text-s">
                      <span className="text-neutral-400 font-brandon uppercase">Investment Range:</span>
                      <span className="font-bold text-[#C5A059]">{m.investment}</span>
                    </div>
                    <div className="flex items-center justify-between text-s">
                      <span className="text-neutral-400 font-brandon uppercase">Expected Lifespan:</span>
                      <span className="font-bold text-white">{m.longevity}</span>
                    </div>
                    <div className="flex items-center justify-between text-s">
                      <span className="text-neutral-400 font-brandon uppercase">Stain Resistance:</span>
                      <span className="font-bold text-white">{m.stainResistance}</span>
                    </div>
                  </div>

                  <p className="font-brandon text-s text-neutral-300 leading-relaxed mb-6">
                    {m.bestFor}
                  </p>
                </div>

                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 text-center font-bold uppercase text-[10px] tracking-[0.2em] transition-all duration-300 ${
                    m.highlight
                      ? "bg-[#C5A059] text-black hover:bg-white"
                      : "bg-white/10 text-white hover:bg-white hover:text-black"
                  }`}
                >
                  Select This Modality
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* 5. STEP-BY-STEP CLINICAL PROCESS */}
        <section className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-20" id="process">
          <header className="max-w-2xl mb-12">
            <div className="flex items-center gap-2 text-[#C5A059] mb-2">
              <Stethoscope size={20} aria-hidden="true" />
              <span className="text-s uppercase tracking-[0.3em] font-bold block">
                Bespoke Workflow
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
              Explore Related Cosmetic & Airway Specialties
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href={`/${lang}/services/invisalign-clear-aligner-braces`}
                className="group flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 hover:border-[#C5A059] transition-colors"
              >
                <span className="font-brandon text-s font-bold uppercase tracking-wider text-black">
                  Pre-Veneer Invisalign®
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
                  Airway & Facial Aesthetics
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
                <span className="font-brandon text-s font-bold uppercase tracking-wider text-black">
                  3D Digital Smile Design Tech
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
                  Meet Our Cosmetic Specialists
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
                ? "开启您的专属奢华微笑蜕变"
                : isEs
                ? "¿Listo para Transformar su Sonrisa en NYC?"
                : "Reserve Your Bespoke Smile Design Consultation"}
            </h2>
            <p className="font-brandon text-sm text-neutral-300 max-w-lg mx-auto mb-8">
              {isZh
                ? "即刻预约 Tribeca Dental Studio 高级美学专家门诊，体验大师级手工瓷贴面带来的瞩目光彩。"
                : isEs
                ? "Agende su consulta VIP con nuestros especialistas en Lower Manhattan."
                : "Experience the perfect synthesis of facial aesthetics, master ceramic artistry, and boutique NYC care."}
            </p>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C5A059] hover:bg-white hover:text-black text-black font-bold uppercase tracking-[0.3em] text-s px-10 py-5 transition-all duration-300"
            >
              {isZh ? "立即在线预约面诊" : isEs ? "Reservar Cita VIP Ahora" : "Book VIP Consultation Now"}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}