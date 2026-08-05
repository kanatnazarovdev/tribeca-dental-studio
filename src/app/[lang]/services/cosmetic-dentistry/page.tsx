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
  Camera,
  Layers,
  Palette,
  Eye,
  Stethoscope,
  Smile,
  ShieldCheck,
  CheckCircle2,
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
    ? "纽约 Tribeca 私人高定美容牙科与美学微笑设计 | Tribeca Dental Studio"
    : isEs
    ? "Odontología Estética de Lujo en Tribeca, NYC | Tribeca Dental Studio"
    : "Bespoke Cosmetic Dentistry Tribeca NYC | Smile Design | Tribeca Dental Studio";

  const description = isZh
    ? "纽约 Tribeca 顶级美容牙科 (Cosmetic Dentistry)：结合 3D 数字化微笑设计、大师级手工瓷贴面、Zoom® 极速美白、无痛牙龈微雕与复合树脂补牙，打造自然透光的奢华美学微笑。"
    : isEs
    ? "Diseño de sonrisa de lujo y odontología estética en Lower Manhattan, NYC. Carillas de porcelana, blanqueamiento Zoom®, bonding y remodelado gingival por láser."
    : "Bespoke cosmetic dentistry and digital smile design in Lower Manhattan, NYC. Porcelain veneers, Zoom® teeth whitening, direct composite bonding, and laser gum contouring.";

  return {
    title,
    description,
    keywords: [
      "Cosmetic Dentistry Tribeca NYC",
      "Best Cosmetic Dentist Manhattan",
      "Smile Makeover NYC",
      "Digital Smile Design NYC",
      "Porcelain Veneers Tribeca",
      "Zoom Teeth Whitening NYC",
      "Composite Dental Bonding Manhattan",
      "Laser Gum Contouring Tribeca",
      "Luxury Cosmetic Dentist NYC",
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
      url: `https://tribecadentalstudio.com/${lang}/services/cosmetic-dentistry`,
      siteName: "Tribeca Dental Studio",
      images: [
        {
          url: "https://tribecadentalstudio.com/og-veneers-luxury.jpg",
          width: 1200,
          height: 630,
          alt: "Bespoke Cosmetic Dentistry & Digital Smile Design at Tribeca Dental Studio NYC",
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
      canonical: `https://tribecadentalstudio.com/${lang}/services/cosmetic-dentistry`,
      languages: {
        en: "https://tribecadentalstudio.com/en/services/cosmetic-dentistry",
        es: "https://tribecadentalstudio.com/es/services/cosmetic-dentistry",
        zh: "https://tribecadentalstudio.com/zh/services/preventive-dentistry",
      },
    },
  };
}

export default async function CosmeticDentistryPage({
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
          "Cosmetic Dentistry",
          "Hand-Layered Porcelain Veneers",
          "Digital Smile Design (DSD)",
          "Zoom® Professional Teeth Whitening",
          "Composite Resin Dental Bonding",
          "Laser Gum Contouring & Gingivectomy",
          "Crown Lengthening",
        ],
      },
      {
        "@type": "MedicalProcedure",
        "name": "Bespoke Aesthetic Cosmetic Smile Transformation",
        "procedureType": "Cosmetic Dental Restoration & Aesthetic Architecture",
        "bodyLocation": "Teeth Enamel, Dental Arch, Gingival Tissue, Smile Line",
        "relevantSpecialty": {
          "@type": "MedicalSpecialty",
          "name": "Cosmetic & Aesthetic Dentistry",
        },
      },
    ],
  };

  const content = {
    badge: isZh
      ? "大师级高定美学与全笑线设计"
      : isEs
      ? "Arquitectura Estética de la Sonrisa"
      : "Bespoke Aesthetic Architecture",
    title: isZh
      ? "纽约 Tribeca 私人高定美学牙科"
      : isEs
      ? "Odontología Estética de Lujo en Tribeca, NYC"
      : "Cosmetic Dentistry & Smile Design in Tribeca, NYC",
    subtitle: isZh
      ? "微笑是您的第一张美学名片。在 Tribeca Dental Studio，我们拒绝千篇一律的石灰死白，结合 3D 数字化面部弧度分析与大师级瓷艺，打造天然透光、符合原生轮廓的璀璨奢华微笑。"
      : isEs
      ? "Tratamientos de estética dental diseñados para armonizar con sus rasgos faciales, mejorar la función y potenciar su confianza. Resultados naturales, duraderos e hiper-personalizados."
      : "Your smile defines your confidence. We fuse clinical precision with facial harmony art to design weightless, natural-looking aesthetic transformations that integrate seamlessly with your lips and personality.",

    principlesTitle: isZh ? "Tribeca 顶级美学雕琢哲学" : isEs ? "Nuestra Filosofía de Estética Dental" : "The Science & Artistry of Modern Cosmetic Care",
    principlesSubtitle: isZh
      ? "真正顶尖的美容牙科不在于刻意伪造，而在于无痕融入面部比例："
      : isEs
      ? "Buscamos realzar su belleza natural sin crear apariencias artificiales:"
      : "True luxury cosmetic dentistry is invisible—enhancing your natural architecture while preserving long-term structural integrity:",
    principles: [
      {
        icon: Eye,
        title: isZh ? "面部视效与动态笑线架构" : isEs ? "Diseño Visagista y Proporción Facial" : "Facial Visagism & Smile Line Arc",
        desc: isZh
          ? "依据瞳孔水平线、唇部张弛弧度及面部下三分之一黄金比例，设计专属的牙齿长宽比与切端切缘。"
          : isEs
          ? "Diseñamos la longitud, ancho y ángulo de sus dientes en armonía directa con sus labios y facciones."
          : "Every tooth length, width, and angle is custom-calibrated to align perfectly with your unique lip posture and cheekbones.",
      },
      {
        icon: Palette,
        title: isZh ? "天然透光与内源色阶质感" : isEs ? "Translucidez y Gradiente Natural" : "Natural Enamel Translucency",
        desc: isZh
          ? "拒绝不透明的死板白。通过微米级多层叠瓷与精准荧光比色，完全还原原生健康牙釉质的光影折射。"
          : isEs
          ? "Multi-tonos cerámicos que imitan la refracción de luz y el brillo del esmalte natural sin dar tono tiza."
          : "Custom ceramic shading mimics the natural internal gradients, opalescence, and light refraction of healthy young teeth.",
      },
      {
        icon: ShieldCheck,
        title: isZh ? "美学与健康咬合双重重建" : isEs ? "Armonía entre Estética y Salud" : "Form, Function & Structural Support",
        desc: isZh
          ? "绝不以牺牲长期口腔健康为代价。所有美学修复方案均兼顾咬合力量分布与牙槽骨完整保护。"
          : isEs
          ? "Cada plan estético refuerza la durabilidad, protegiendo la estructura y el soporte de su mordida."
          : "We balance pure visual beauty with optimal occlusal bite forces, protecting your jaw joint and ceramic restorations for decades.",
      },
    ],

    // Section 2: Complete Treatment Suite
    treatmentsTitle: isZh ? "全方位奢华美容牙科方案" : isEs ? "Nuestra Gama Completa de Tratamientos Estéticos" : "Our Comprehensive Cosmetic Services Suite",
    treatmentsSubtitle: isZh
      ? "从极速微调到全笑线终极蜕变，为您量身订制："
      : isEs
      ? "Soluciones personalizadas para cada imperfección de su sonrisa:"
      : "Customized aesthetic solutions ranging from single-visit touchups to complete smile makeovers:",
    treatments: [
      {
        title: isZh ? "大师级高定瓷贴面 (Porcelain Veneers)" : isEs ? "Carillas de Porcelana Artesanales" : "Bespoke Porcelain Veneers",
        desc: isZh
          ? "超薄手工陶瓷贴片，微创纠正缝隙、严重色素沉着、裂纹及牙齿不对称。2 次就诊即可完成璀璨蜕变。"
          : isEs
          ? "Láminas ultra-finas de cerámica que corrigen bordes irregulares, diastemas y pigmentaciones en 2 citas."
          : "Custom hand-layered ceramic sheaths that transform shade, shape, gaps, and alignment in as little as two visits.",
        tag: "Gold Standard Transformation",
        link: "/services/porcelain-veneers-lumineers",
      },
      {
        title: isZh ? "Zoom® 专业诊室极速美白" : isEs ? "Blanqueamiento Dental Profesional Zoom®" : "Professional Zoom® & Laser Whitening",
        desc: isZh
          ? "冷光与激光辅助美白系统，短时间内将牙齿提亮 8 个色阶，有效安全祛除咖啡、红酒及烟草沉积色素。"
          : isEs
          ? "Aclara hasta 8 tonos en una sola sesión. Tratamiento seguro contra manchas de café, vino o tabaco."
          : "Lift stubborn deep stains up to 8 shades lighter using clinical Zoom® LED whitening and low-sensitivity laser technology.",
        tag: "Single-Visit Radiance",
        link: "/services/teeth-whitening",
      },
      {
        title: isZh ? "复合树脂纳米补牙 (Dental Bonding)" : isEs ? "Bonding o Remodelado con Resina" : "Direct Composite Dental Bonding",
        desc: isZh
          ? "高性价比微创修补方案。由美学专家直接在口内雕刻微米树脂，修复边缘微缺、细缝或磨损，免打麻药免磨牙。"
          : isEs
          ? "Solución rápida y económica. Resina de nanorelleno esculpida directamente para corregir astilladuras y espacios."
          : "Direct sculpting of micro-filled composite resin to seamlessly fix minor chips, cracks, or gaps without drilling.",
        tag: "Drill-Free Instant Touchup",
        link: "#bonding",
      },
      {
        title: isZh ? "激光牙周微雕与冠延长术 (Gingivectomy)" : isEs ? "Remodelado Gingival por Láser" : "Laser Gum Contouring & Crown Lengthening",
        desc: isZh
          ? "针对“露龈笑 (Gummy Smile)”或牙龈边缘高低不齐，采用微创无痛激光重塑对称平滑的龈缘笑线弧度。"
          : isEs
          ? "Rediseño de la línea de la encía con láser para corregir la sonrisa gingival y revelar más estructura dental."
          : "Sculpting uneven gumlines or reducing a 'gummy smile' with precision laser therapy to reveal full, elegant tooth length.",
        tag: "Laser Precision Sculpting",
        link: "#gummy-smile",
      },
    ],

    // Section 3: The 5-Step Cosmetic Process
    processTitle: isZh ? "Tribeca 私人订制微笑设计 5 步曲" : isEs ? "El Proceso de Diseño de Sonrisa en 5 Pasos" : "The 5-Step Master Smile Design Experience",
    processSubtitle: isZh
      ? "全程精准数字化可控，让您在开工前预见完美未来："
      : isEs
      ? "Un proceso predecible y planificado digitalmente:"
      : "Predictable, transparent, and collaborative from your first consultation:",
    steps: [
      {
        num: "01",
        title: isZh ? "美学愿景面诊与高清 3D 摄影" : isEs ? "Consulta y Fotografía Digital 3D" : "Comprehensive Consultation & 3D Imaging",
        desc: isZh ? "深度沟通您的期望，捕捉高精面部摄影、动态笑线视频与 iTero® 3D 口内全景数据。" : isEs ? "Evaluación de sus metas estéticas, fotos de estudio y escaneo digital en 3D." : "We analyze your facial proportions, record high-resolution studio photography, and take an iTero® 3D digital scan.",
      },
      {
        num: "02",
        title: isZh ? "3D 数字化微笑模拟与口内试戴" : isEs ? "Diseño Digital 3D y Prueba de Sonrisa" : "3D Digital Mockup & 'Trial Smile'",
        desc: isZh ? "在计算机中设计牙齿比例，并制作 3D 试戴牙套在您口内实时预览，满意后再开始治疗。" : isEs ? "Creamos una maqueta 3D temporal para que pueda probar su nueva sonrisa en boca antes de decidir." : "We place a temporary composite 'trial smile' over your teeth so you can see and feel your new smile live in the mirror.",
      },
      {
        num: "03",
        title: isZh ? "微创牙体塑形与临时美学贴面" : isEs ? "Preparación Mínima y Temporales" : "Conservative Prep & Custom Temporaries",
        desc: isZh ? "极少削磨表层牙釉质，并佩戴精准定制的临时美学贴面，保障制作期间的舒适与上镜。" : isEs ? "Contorneado microscópico del esmalte y colocación de temporales diseñados a su medida." : "Micro-contouring of enamel followed by bespoke luxury temporaries designed to test function and aesthetics.",
      },
      {
        num: "04",
        title: isZh ? "大师技师手工逐层烧结比色" : isEs ? "Fabricación Artesanal Ceramista" : "Master Ceramist Handcrafting",
        desc: isZh ? "由顶尖美学技师采用德国高阶瓷块手工雕刻打磨，赋予贴面自然乳光与透明质感。" : isEs ? "Nuestros maestros ceramistas elaboran cada pieza a mano para imitar el esmalte natural." : "Elite ceramists hand-layer feldsphatic or E-Max porcelain to infuse natural internal character and micro-textures.",
      },
      {
        num: "05",
        title: isZh ? "高强树脂固化粘接与咬合调校" : isEs ? "Cementado de Precisión y Calibración" : "Final Bonding & Occlusal Balancing",
        desc: isZh ? "使用双重固化树脂将瓷片永久粘接，并微调咀嚼咬合接触点，确保美观与坚固兼备。" : isEs ? "Adhesión permanente con resina de alta resistencia y calibración perfecta de su mordida." : "Permanent dual-cure resin bonding followed by occlusal balancing so your new smile functions naturally for life.",
      },
    ],

    // Section 4: FAQs
    faqsTitle: isZh ? "美容牙科常见问题解答" : isEs ? "Preguntas Frecuentes sobre Estética Dental" : "Frequently Asked Questions About Cosmetic Care",
    faqs: [
      {
        q: isZh ? "美容牙科修复体看起来会显得假白很厚重吗？" : isEs ? "¿Los tratamientos estéticos se verán artificiales o demasiado blancos?" : "Will cosmetic dental work look artificial or overly white?",
        a: isZh
          ? "绝不。我们拒绝平淡死板的“石灰白”。我们通过精细比色、微观多层透明色阶以及与面部轮廓、肤色的完美匹配，打造充满自然华贵质感的天然微笑。"
          : isEs
          ? "En absoluto. Personalizamos el tono, la opacidad y la transparencia para que sus dientes luzcan radiantes pero totalmente naturales."
          : "Never. We specialize in natural translucency. By custom-blending multi-layered porcelain shades with your lip structure and skin tone, your smile will look radiant, lifelike, and uniquely yours.",
      },
      {
        q: isZh ? "树脂补牙 (Bonding) 和瓷贴面 (Veneers) 该如何选择？" : isEs ? "¿Cuál es la diferencia entre Dental Bonding y Carillas de Porcelana?" : "What is the difference between direct bonding and porcelain veneers?",
        a: isZh
          ? "树脂补牙适用于单颗牙齿的微小缺损补缝，可在单次就诊内完成，但数年后可能需要定期抛光；瓷贴面则是由实验室高精烧结的陶瓷，抗染性极致且寿命长达 10–20+ 年，适合全笑线重塑。"
          : isEs
          ? "El bonding es ideal para arreglos menores en una sesión. Las carillas de porcelana cubren el diente completo, son inmunes a manchas y duran entre 10 y 20+ años."
          : "Dental bonding uses composite resin sculpted directly onto teeth for minor chips in one visit. Porcelain veneers are custom-crafted ceramic shells covering the full front surface, offering total stain immunity and 15–20+ year longevity.",
      },
      {
        q: isZh ? "美容牙科治疗过程会感觉疼痛吗？" : isEs ? "¿Los tratamientos de odontología estética son dolorosos?" : "Are cosmetic dentistry procedures painful?",
        a: isZh
          ? "几乎无痛。牙齿美白或树脂补牙无需麻醉；瓷贴面与激光牙周微雕会在局部麻醉保护下进行，过程仅有轻微压迫感。对于紧张患者，我们还提供舒缓镇静服务。"
          : isEs
          ? "Son prácticamente indoloros. Usamos anestesia local de alta eficacia para carillas o láser, y disponemos de opciones de sedación si siente ansiedad."
          : "Most procedures are virtually painless. Whitening and bonding require zero anesthesia. For veneers or laser contouring, we use local numbing so you stay completely relaxed.",
      },
      {
        q: isZh ? "美学微笑设计重塑需要就诊几次？" : isEs ? "¿Cuántas citas se necesitan para un rediseño de sonrisa?" : "How long does a complete smile makeover take?",
        a: isZh
          ? "对于牙齿美白或树脂补牙，仅需 1 次就诊即可完成；对于全套瓷贴面或联合美学重塑，通常仅需 2 至 3 次就诊即可焕发新生。"
          : isEs
          ? "Blanqueamientos y bonding se realizan en 1 sola visita. Un tratamiento completo con carillas de porcelana requiere normalmente de 2 a 3 citas."
          : "Simple procedures like teeth whitening or bonding are completed in a single visit. Comprehensive veneer makeovers typically take only 2 to 3 appointments over a 2-week period.",
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
                    ? "预约 VIP 美学微笑面诊"
                    : isEs
                    ? "Agendar Consulta de Estética VIP"
                    : "Book VIP Smile Consultation"}
                </a>
                <a
                  href="tel:2125615303"
                  className="inline-flex items-center justify-center border border-black/20 hover:border-black text-black font-bold uppercase tracking-[0.2em] text-s px-8 py-4 transition-all duration-300"
                >
                  212-561-5303
                </a>
              </div>
            </header>

            {/* RIGHT COLUMN: HIGH-FASHION EDITORIAL HERO MEDIA CARD */}
            <div className="relative aspect-[4/3] bg-neutral-950 border border-neutral-800 overflow-hidden shadow-2xl group">
              <Image
                src="/services/cosmeticServices.jpg" // High resolution editorial cosmetic dentistry photo placeholder
                alt="Cosmetic Dentistry and Smile Design at Tribeca Dental Studio NYC"
                fill
                unoptimized
                className="object-cover object-center filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute top-5 right-5 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 border border-white/10 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">
                  Tribeca Smile Design Studio
                </span>
              </div>

              {/* BOTTOM CAPTION GLASS CARD */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-black/60 backdrop-blur-md border border-white/10 text-white shadow-xl">
                <div className="flex items-center gap-2 text-[#C5A059] mb-1">
                  <Smile size={16} className="text-[#C5A059]" />
                  <p className="text-s uppercase tracking-widest font-bold">
                    Natural Light Refraction & Facial Symmetry
                  </p>
                </div>
                <p className="font-brandon text-s text-neutral-300 leading-relaxed">
                  {isZh
                    ? "结合 3D 数字化扫描与手工叠瓷，打造符合气场与面部比例的天然华贵微笑。"
                    : isEs
                    ? "Armonía facial y refracción de luz natural a través de odontología estética de vanguardia."
                    : "Precision smile architecture crafted for natural translucency, lip posture, and lifelong durability."}
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* 2. CORE COSMETIC PRINCIPLES */}
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
                {content.principlesTitle}
              </h2>
              <p className="font-brandon text-sm text-neutral-600 leading-relaxed">
                {content.principlesSubtitle}
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {content.principles.map((pr, idx) => {
                const Icon = pr.icon;
                return (
                  <article key={idx} className="p-8 bg-white border border-neutral-200 shadow-sm flex flex-col justify-between">
                    <div>
                      <Icon size={28} className="text-[#C5A059] mb-4" />
                      <h3 className="text-xl font-bold uppercase tracking-tight text-black mb-3">
                        {pr.title}
                      </h3>
                      <p className="font-brandon text-s text-neutral-600 leading-relaxed">
                        {pr.desc}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. COMPLETE COSMETIC SERVICES MATRIX */}
        <section className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-20" id="treatments">
          <header className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-[#C5A059] mb-2">
              <Camera size={20} aria-hidden="true" />
              <span className="text-s uppercase tracking-[0.3em] font-bold block">
                Treatment Suite
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-black mb-4">
              {content.treatmentsTitle}
            </h2>
            <p className="font-brandon text-sm text-neutral-600 leading-relaxed">
              {content.treatmentsSubtitle}
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.treatments.map((t, idx) => (
              <div key={idx} className="p-8 bg-white border border-neutral-200 shadow-sm flex flex-col justify-between group">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/10 inline-block px-3 py-1 border border-[#C5A059]/20 mb-4">
                    {t.tag}
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-black mb-3">
                    {t.title}
                  </h3>
                  <p className="font-brandon text-s text-neutral-600 leading-relaxed mb-6">
                    {t.desc}
                  </p>
                </div>

                <Link
                  href={t.link.startsWith("/") ? `/${lang}${t.link}` : t.link}
                  className="inline-flex items-center gap-2 text-s font-bold uppercase tracking-widest text-black group-hover:text-[#C5A059] transition-colors"
                >
                  <span>{isZh ? "了解方案详情" : isEs ? "Ver Detalles del Tratamiento" : "Explore Modality"}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* 4. STEP-BY-STEP COSMETIC DESIGN PROCESS */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {content.steps.map((st, idx) => (
              <article key={idx} className="p-6 bg-white border border-neutral-200 shadow-sm relative flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-light text-[#C5A059] block mb-3">
                    {st.num}
                  </span>
                  <h3 className="text-base font-bold uppercase tracking-tight text-black mb-2">
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

        {/* 5. INTERACTIVE FAQ ACCORDION */}
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

        {/* 6. INTERNAL LINKING HUB FOR SEO */}
        <section className="py-12 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
          <div className="border border-neutral-200 bg-white p-8 md:p-12 shadow-sm">
            <h3 className="text-s uppercase tracking-[0.3em] font-bold text-[#C5A059] mb-4">
              Explore Related Cosmetic & Airway Specialties
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href={`/${lang}/services/porcelain-veneers`}
                className="group flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 hover:border-[#C5A059] transition-colors"
              >
                <span className="font-brandon text-s font-bold uppercase tracking-wider text-black">
                  Handcrafted Porcelain Veneers
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
                <span className="font-brandon text-s font-bold uppercase tracking-wider text-black">
                  Invisalign® Clear Aligners
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
                href={`/${lang}/best-dentist-in-nyc`}
                className="group flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 hover:border-[#C5A059] transition-colors"
              >
                <span className="font-brandon text-s font-bold uppercase tracking-wider text-black">
                  Meet Our Cosmetic Team
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
                ? "开启您的专属奢华微笑蜕变"
                : isEs
                ? "¿Listo para Transformar su Sonrisa en NYC?"
                : "Reserve Your Bespoke Cosmetic Consultation"}
            </h2>
            <p className="font-brandon text-sm text-neutral-300 max-w-lg mx-auto mb-8">
              {isZh
                ? "即刻预约 Tribeca Dental Studio 高级美学专家门诊，体验自然完美的高定微笑重塑。"
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