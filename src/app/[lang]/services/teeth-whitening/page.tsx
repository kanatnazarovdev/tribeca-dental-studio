/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { bookingUrl } from "@/hooks/helper";
import {
  Sparkles,
  ArrowRight,
  ChevronDown,
  Sparkle,
  Sun,
  Droplets,
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
    ? "纽约 Tribeca 飞利浦 Zoom® 极速冷光美白与激光美白 | Tribeca Dental Studio"
    : isEs
    ? "Blanqueamiento Dental Philips Zoom® y Láser en Tribeca, NYC | Tribeca Dental Studio"
    : "Philips Zoom® & Laser Teeth Whitening Tribeca NYC | Tribeca Dental Studio";

  const description = isZh
    ? "纽约 Tribeca 专科级飞利浦 Zoom® 极速美白与激光牙齿美白：45 分钟提亮多达 8 个色阶。结合高级抗敏感护理与私人定制居家美白托，安全有效重现极致亮白微笑。"
    : isEs
    ? "Blanqueamiento dental profesional en Lower Manhattan, NYC. Philips Zoom® en 45 minutos y tecnología láser avanzada. Aclare hasta 8 tonos sin dolor ni sensibilidad."
    : "In-office Philips Zoom® & Laser Teeth Whitening in Lower Manhattan, NYC. Brighten your smile up to 8 shades lighter in 45 minutes with our gentle, zero-sensitivity protocol.";

  return {
    title,
    description,
    keywords: [
      "Teeth Whitening Tribeca NYC",
      "Philips Zoom Whitening NYC",
      "Laser Teeth Whitening Manhattan",
      "In Office Dental Whitening NYC",
      "Professional Teeth Whitening Lower Manhattan",
      "Best Teeth Whitening Dentist NYC",
      "Custom Take Home Whitening Trays Tribeca",
      "Zero Sensitivity Teeth Whitening NYC",
      "Cosmetic Dentist Teeth Whitening NYC",
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
      url: `https://tribecadentalstudio.com/${lang}/services/teeth-whitening`,
      siteName: "Tribeca Dental Studio",
      images: [
        {
          url: "https://tribecadentalstudio.com/about-studio.jpg",
          width: 1200,
          height: 630,
          alt: "Philips Zoom® & Laser Teeth Whitening at Tribeca Dental Studio NYC",
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
      canonical: `https://tribecadentalstudio.com/${lang}/services/teeth-whitening`,
      languages: {
        en: "https://tribecadentalstudio.com/en/services/teeth-whitening",
        es: "https://tribecadentalstudio.com/es/services/teeth-whitening",
        zh: "https://tribecadentalstudio.com/zh/services/teeth-whitening",
      },
    },
  };
}

export default async function TeethWhiteningPage({
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
          "Philips Zoom® In-Office Teeth Whitening",
          "Laser-Activated Dental Whitening",
          "Custom Take-Home Whitening Trays",
          "Anti-Sensitivity Desensitizing Protocol",
          "Extrinsic and Intrinsic Stain Removal",
          "Cosmetic Enamel Aesthetics",
        ],
      },
      {
        "@type": "MedicalProcedure",
        "name": "Philips Zoom® & Laser Teeth Whitening Therapy",
        "procedureType": "Cosmetic Dental Whitening & Aesthetic Enamel Enhancement",
        "bodyLocation": "Dental Enamel and Dentin Layers",
        "relevantSpecialty": {
          "@type": "MedicalSpecialty",
          "name": "Cosmetic Dentistry",
        },
      },
    ],
  };

  const content = {
    badge: isZh
      ? "临床专科级极速冷光与激光美白"
      : isEs
      ? "Blanqueamiento Profesional de Alto Rendimiento"
      : "Clinical High-Performance Whitening",
    title: isZh
      ? "纽约 Tribeca 飞利浦 Zoom® 极速美白"
      : isEs
      ? "Blanqueamiento Dental en Tribeca, NYC"
      : "Teeth Whitening in Tribeca, NYC",
    subtitle: isZh
      ? "只需 45 分钟，让您的微笑提亮多达 8 个色阶。我们采用飞利浦 Zoom® 蓝光与高阶激光激活技术，结合独家舒缓抗敏感配方，让美白过程安全、高效且毫无压力。"
      : isEs
      ? "Aclare su sonrisa hasta 8 tonos en solo 45 minutos. Utilizamos la tecnología Philips Zoom® y láser asistido con un protocolo desensibilizante avanzado para su total confort."
      : "Brighten your smile up to eight shades in a quick 45-minute treatment. Featuring Philips Zoom® blue LED light technology and laser whitening paired with an advanced desensitizing protocol for a pain-free, radiant transformation.",

    // Section 1: Stain Causes Breakdown
    stainsTitle: isZh ? "为什么牙齿会变黄或发暗？" : isEs ? "¿Por qué se manchan o amarillean los dientes?" : "Understanding What Causes Tooth Discoloration",
    stainsSubtitle: isZh
      ? "牙齿表层的牙釉质为白色，而内层的牙本质呈现黄色。随着年龄增长与生活习惯影响，釉质逐渐磨损透露底色或沉积外源色素："
      : isEs
      ? "El esmalte dental es blanco y la dentina subyacente es amarillenta. Con los años, el desgaste y ciertos factores oscurecen su sonrisa:"
      : "Outer enamel is naturally translucent, covering the yellow dentin below. As enamel thins or absorbs pigments, discoloration occurs:",
    stainFactors: [
      {
        title: isZh ? "饮食色素沉淀" : isEs ? "Bebidas y Alimentos Pigmentados" : "Dietary Stains",
        desc: isZh ? "咖啡、红酒、浓茶、酱油、咖喱及番茄酱中的高色素分子穿透釉质缝隙。" : isEs ? "Café, vino tinto, té, salsas oscuras y alimentos con colorantes intensos." : "Coffee, red wine, dark teas, balsamic vinegar, curry, and highly pigmented foods.",
      },
      {
        title: isZh ? "烟草与尼古丁" : isEs ? "Uso de Tabaco" : "Tobacco & Nicotine Use",
        desc: isZh ? "焦油与尼古丁在牙齿表层形成顽固的黄色或棕褐色油性菌斑沉淀。" : isEs ? "La nicotina y el alquitrán dejan manchas amarillas y marrones profundas." : "Tar and nicotine create stubborn brown and yellow surface deposits that toothbrushing cannot shift.",
      },
      {
        title: isZh ? "自然老化与釉质变薄" : isEs ? "Envejecimiento Natural" : "Aging & Enamel Thinning",
        desc: isZh ? "随着年龄增长，外层牙釉质自然磨损磨薄，导致深层浅黄色牙本质更加凸显。" : isEs ? "El esmalte se desgasta con los años, dejando ver la dentina amarillenta subyacente." : "As enamel wears down over time, the naturally darker, yellow dentin layer beneath becomes visible.",
      },
      {
        title: isZh ? "抗生素或历史外伤" : isEs ? "Medicamentos o Traumatismos" : "Medications & Dental Trauma",
        desc: isZh ? "幼年服用的四环素类药物、四环素内源性色素以及老旧汞齐补牙物影响。" : isEs ? "Uso previo de tetraciclinas, traumatismos dentales o empastes antiguos de amalgama." : "Tetracycline exposure during tooth formation, nerve trauma, or legacy amalgam fillings.",
      },
    ],

    // Section 2: Whitening Options Matrix
    modalitiesTitle: isZh ? "Tribeca 3 大专业美白方案对比" : isEs ? "Opciones de Blanqueamiento en Tribeca" : "Professional Whitening Treatment Options",
    modalitiesSubtitle: isZh
      ? "根据您的时间需求、预算与敏感度，选择最适合您的亮白方式："
      : isEs
      ? "Seleccione la opción ideal según sus objetivos, sensibilidad y disponibilidad:"
      : "Select the ideal whitening path tailored to your schedule, lifestyle, and sensitivity level:",
    modalities: [
      {
        title: isZh ? "诊室飞利浦 Zoom® 极速美白" : isEs ? "Blanqueamiento Zoom® en Clinica" : "Philips Zoom® In-Office Whitening",
        desc: isZh
          ? "最受欢迎的旗舰方案。45 分钟内通过蓝光激活强效过氧化物凝胶，瞬间提亮多达 8 个色阶，适合追求即刻见效的繁忙人士。"
          : isEs
          ? "El método más rápido y eficaz. Gel de alta concentración activado por luz LED que aclara hasta 8 tonos en solo 45 minutos."
          : "Our flagship procedure. Professional-strength gel activated by intense blue LED light to brighten teeth up to 8 shades in just 45 minutes.",
        highlight: true,
        tag: "Most Popular • Instant 8 Shades",
      },
      {
        title: isZh ? "靶向激光牙齿美白 (Laser Whitening)" : isEs ? "Blanqueamiento Dental por Láser" : "Laser-Activated Whitening",
        desc: isZh
          ? "采用医用激光激发凝胶渗透，特别适合有深层顽固茶渍、四环素牙或时间极度紧迫的患者，显著缩短疗程并降低敏感。"
          : isEs
          ? "Ideal para manchas profundas o pacientes con sensibilidad. El láser acelera la activación del gel para sesiones ultra cortas."
          : "Employs a specialized dental laser to activate gel breakdown, ideal for tetracycline staining or patients wanting minimal session time.",
        highlight: false,
        tag: "Precision Deep-Stain Removal",
      },
      {
        title: isZh ? "私人定制居家美白托盘" : isEs ? "Kits de Blanqueamiento Personalizado" : "Custom Take-Home Whitening Kits",
        desc: isZh
          ? "根据您的口内 3D 扫描制作完美贴合的隐形美白牙托，搭配诊所专供美白凝胶，在数周内于家中温和提升亮白度。"
          : isEs
          ? "Féculas a medida con gel de grado profesional para usar cómodamente en casa durante un par de semanas."
          : "Custom-molded trays created from 3D digital impressions, paired with clinical-grade gel for flexible, gradual home whitening.",
        highlight: false,
        tag: "Gradual & Flexible At-Home Care",
      },
    ],

    // Section 3: The 4-Cycle Zoom Process
    processTitle: isZh ? "飞利浦 Zoom® 45 分钟极速美白全流程" : isEs ? "El Proceso Zoom® Paso a Paso" : "The 45-Minute Zoom® Step-by-Step Protocol",
    processSubtitle: isZh
      ? "舒适安全，全程由专业临床医生亲自操作："
      : isEs
      ? "Un tratamiento rápido, seguro y relajante en el sillón dental:"
      : "A relaxed, clinically supervised in-office experience from start to finish:",
    steps: [
      {
        num: "01",
        title: isZh ? "软组织屏障保护 (Isolation)" : isEs ? "Protección de Encías y Labios" : "Gums & Lip Shielding",
        desc: isZh ? "精心对唇部、颊黏膜与牙龈边缘施加隔离屏障，确保美白凝胶仅作用于牙齿表面。" : isEs ? "Colocación de un protector especial que aisla las encías y los labios del gel de blanqueamiento." : "We apply a protective barrier film over your lips and soft gums so only tooth enamel receives gel exposure.",
      },
      {
        num: "02",
        title: isZh ? "涂抹 Zoom® 强效美白凝胶" : isEs ? "Aplicación del Gel Zoom®" : "Zoom® Hydrogen Peroxide Gel",
        desc: isZh ? "将富含活性过氧化物的专利凝胶均匀涂覆于每颗牙齿的正面唇侧。" : isEs ? "Aplicación uniforme del gel blanqueador de grado clínico en la superficie visible de los dientes." : "Proprietary hydrogen peroxide formula is carefully painted across the front surfaces of your visible smile.",
      },
      {
        num: "03",
        title: isZh ? "蓝光 LED 4 轮循环激活 (LED Activation)" : isEs ? "Activación por Luz LED (4 Ciclos)" : "Blue LED Light Activation Cycles",
        desc: isZh ? "使用 Zoom® 专有蓝光照射灯激活凝胶分子穿透，进行多达 4 轮、每轮 15 分钟的循环深入分解色素。" : isEs ? "Luz LED azul focalizada sobre los dientes en ciclos de 15 minutos para acelerar la eliminación de manchas." : "The Zoom® blue LED light illuminates the gel to speed up stain oxidation. Repeated up to 4 fifteen-minute cycles.",
      },
      {
        num: "04",
        title: isZh ? "脱敏氟化物沉淀 (Desensitizing Shield)" : isEs ? "Tratamiento Anti-Sensibilidad Final" : "Anti-Sensitivity Relief Protocol",
        desc: isZh ? "治疗结束后立即涂擦 ACP 舒缓脱敏膏，补充牙釉质矿物质，阻断敏感神经传导并保护釉质。" : isEs ? "Aplicación de gel desensibilizante con fluoruro para rehidratar el esmalte y prevenir cualquier molestia." : "After the final cycle, we seal teeth with Relief® ACP desensitizing gel to instantly rehydrate enamel and block nerve sensitivity.",
      },
    ],

    // Section 4: FAQs
    faqsTitle: isZh ? "牙齿美白常见问题解答" : isEs ? "Preguntas Frecuentes sobre Blanqueamiento" : "Frequently Asked Questions About Teeth Whitening",
    faqs: [
      {
        q: isZh ? "美白过程或美白后会感到剧烈疼痛或牙齿敏感吗？" : isEs ? "¿El blanqueamiento dental provoca sensibilidad o dolor?" : "Does teeth whitening cause pain or severe sensitivity?",
        a: isZh
          ? "绝不会剧痛！美白凝胶渗入牙釉质分解色素时会暂时夺走水分，少数患者在术后 24-48 小时内可能会感觉轻微冷热敏感。我们会在美白后立即涂抹 Relief® ACP 脱敏膏，绝大多数患者完全无痛。"
          : isEs
          ? "No causa dolor. Puede haber una ligera sensibilidad temporal debido a la deshidratación del esmalte. Aplicamos un gel desensibilizante inmediatamente para garantizar total comodidad."
          : "No, the procedure itself is pain-free. A small percentage of patients experience mild, temporary sensitivity for 24–48 hours due to temporary enamel dehydration. Our Relief® ACP desensitizing gel application dramatically reduces or eliminates this entirely.",
      },
      {
        q: isZh ? "Zoom® 牙齿美白效果能维持多久？" : isEs ? "¿Cuánto duran los resultados del blanqueamiento Zoom®?" : "How long do Zoom® teeth whitening results last?",
        a: isZh
          ? "美白效果通常可维持 1 到 4 年，具体取决于您的日常护理与饮食习惯。使用吸管饮用深色饮料、避免吸烟以及配合定制居家补刷托盘，能极大延长绚丽白皙度。"
          : isEs
          ? "Los resultados suelen durar entre 1 y 4 años. Se puede prolongar el efecto manteniendo buena higiene, evitando alimentos pigmentados o usando pajas para el café/té."
          : "Results typically last between 1 and 4 years. You can maximize longevity by maintaining good oral hygiene, using a straw for dark drinks like coffee, and utilizing custom home touch-up trays occasionally.",
      },
      {
        q: isZh ? "我口内的假牙、烤瓷牙套或瓷贴面能被美白吗？" : isEs ? "¿Se pueden blanquear las coronas, empastes o carillas?" : "Can dental crowns, composite fillings, or porcelain veneers be whitened?",
        a: isZh
          ? "不能。美白凝胶仅对天然牙釉质与牙本质有效，不能改变烤瓷牙、瓷贴面或树脂补牙物的颜色。如果您打算重新制作美白修复体，建议先美白天然牙，再配合新牙色定制套片。"
          : isEs
          ? "No. Los agentes blanqueadores solo funcionan sobre el esmalte natural. Si busca renovar su sonrisa, se recomienda blanquear primero y luego ajustar el color de las restauraciones."
          : "No. Professional whitening agents only act on natural tooth enamel and dentin. They will not alter the shade of porcelain crowns, veneers, or composite restorations. We recommend whitening prior to placing new cosmetic work so ceramics can match your new bright shade.",
      },
      {
        q: isZh ? "诊室美白和市面上卖的美白牙贴有什么区别？" : isEs ? "¿Cuál es la diferencia entre el blanqueamiento clínico y las tiras de farmacia?" : "How does in-office Zoom® compare to store-bought whitening strips?",
        a: isZh
          ? "市售牙贴的过氧化物浓度极低（通常仅 3%-6%），且平贴片无法完全贴合凹凸牙缝，易导致发斑不均与牙龈灼伤；诊室 Zoom® 使用高浓度过氧化物配方（达 25%-35%）并在全屏障保护下通过 LED 蓝光催化，安全且效果拔群。"
          : isEs
          ? "Las tiras de farmacia tienen concentraciones muy bajas y no se adaptan perfectamente a la forma de sus dientes. El blanqueamiento profesional utiliza geles potentes regulados e iluminación LED con resultados inmediatos y uniformes."
          : "Store-bought strips contain very weak peroxide concentrations and fit loosely over teeth, often leading to splotchy results or gum irritation. Clinical Zoom® uses potent, regulated gels and custom barrier technology under dentist supervision for dramatic, uniform shade transformation.",
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
                    ? "预约 Zoom® 极速美白"
                    : isEs
                    ? "Agendar Blanqueamiento Zoom®"
                    : "Book Zoom® Whitening Visit"}
                </a>
                <a
                  href="tel:2125615303"
                  className="inline-flex items-center justify-center border border-black/20 hover:border-black text-black font-bold uppercase tracking-[0.2em] text-s px-8 py-4 transition-all duration-300"
                >
                  212-561-5303
                </a>
              </div>
            </header>

            {/* RIGHT COLUMN: HIGH-CONTRAST EDITORIAL MEDIA CARD */}
            <div className="relative aspect-[4/3] bg-neutral-950 border border-neutral-800 overflow-hidden shadow-2xl group">
              <Image
                src="/services/whitening.png" // High resolution whitening photo placeholder
                alt="Philips Zoom Whitening and Laser Teeth Whitening at Tribeca Dental Studio NYC"
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
                  Tribeca Brightening Suite
                </span>
              </div>

            </div>

          </div>
        </section>

        {/* 2. STAIN CAUSES BREAKDOWN */}
        <section className="bg-neutral-50 py-20 px-6 md:px-12 lg:px-20 border-y border-neutral-200 mb-20" id="causes">
          <div className="max-w-7xl mx-auto">
            <header className="max-w-3xl mb-12">
              <div className="flex items-center gap-2 text-[#C5A059] mb-2">
                <Droplets size={20} aria-hidden="true" />
                <span className="text-s uppercase tracking-[0.3em] font-bold block">
                  Enamel Science
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-black mb-4">
                {content.stainsTitle}
              </h2>
              <p className="font-brandon text-sm text-neutral-600 leading-relaxed">
                {content.stainsSubtitle}
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.stainFactors.map((st, idx) => (
                <article key={idx} className="p-8 bg-white border border-neutral-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] block mb-2">
                      Factor 0{idx + 1}
                    </span>
                    <h3 className="text-xl font-bold uppercase tracking-tight text-black mb-3">
                      {st.title}
                    </h3>
                    <p className="font-brandon text-s text-neutral-600 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 3. WHITENING TREATMENT MODALITIES */}
        <section className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-20" id="options">
          <header className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-[#C5A059] mb-2">
              <Sparkle size={20} aria-hidden="true" />
              <span className="text-s uppercase tracking-[0.3em] font-bold block">
                Clinical Modalities
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-black mb-4">
              {content.modalitiesTitle}
            </h2>
            <p className="font-brandon text-sm text-neutral-600 leading-relaxed">
              {content.modalitiesSubtitle}
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {content.modalities.map((mod, idx) => (
              <div
                key={idx}
                className={`p-8 border flex flex-col justify-between transition-all ${
                  mod.highlight
                    ? "bg-neutral-900 text-white border-neutral-900 shadow-2xl relative"
                    : "bg-white text-black border-neutral-200 shadow-sm"
                }`}
              >
                <div>
                  <div
                    className={`text-[10px] font-bold uppercase tracking-widest inline-block px-3 py-1 border mb-4 ${
                      mod.highlight
                        ? "bg-[#C5A059] text-black border-[#C5A059]"
                        : "bg-[#C5A059]/10 text-[#C5A059] border-[#C5A059]/20"
                    }`}
                  >
                    {mod.tag}
                  </div>
                  <h3
                    className={`text-2xl font-bold uppercase tracking-tight mb-3 ${
                      mod.highlight ? "text-white" : "text-black"
                    }`}
                  >
                    {mod.title}
                  </h3>
                  <p
                    className={`font-brandon text-s leading-relaxed mb-6 ${
                      mod.highlight ? "text-neutral-300" : "text-neutral-600"
                    }`}
                  >
                    {mod.desc}
                  </p>
                </div>

                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 text-center font-bold uppercase text-[10px] tracking-[0.2em] transition-all duration-300 ${
                    mod.highlight
                      ? "bg-[#C5A059] text-black hover:bg-white"
                      : "bg-black text-white hover:bg-[#C5A059]"
                  }`}
                >
                  Book This Treatment
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* 4. THE 4-CYCLE ZOOM STEP-BY-STEP PROCESS */}
        <section className="bg-neutral-900 text-white py-16 px-6 md:px-12 lg:px-20 border border-neutral-900 max-w-7xl mx-auto mb-20" id="zoom-protocol">
          <header className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-s uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-3">
              Precision Clinical Protocol
            </span>
            <h2 className="text-2xl md:text-4xl font-light uppercase tracking-tight text-white mb-4">
              {content.processTitle}
            </h2>
            <p className="font-brandon text-s text-neutral-400">
              {content.processSubtitle}
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.steps.map((st, idx) => (
              <div key={idx} className="p-8 bg-white/5 border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-light text-[#C5A059] block mb-4">
                    {st.num}
                  </span>
                  <h3 className="text-lg font-bold uppercase tracking-tight text-white mb-3">
                    {st.title}
                  </h3>
                  <p className="font-brandon text-s text-neutral-300 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
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
              Explore Related Cosmetic & Preventive Specialties
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href={`/${lang}/services/porcelain-veneers`}
                className="group flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 hover:border-[#C5A059] transition-colors"
              >
                <span className="font-brandon text-s font-bold uppercase tracking-wider text-black">
                  Porcelain Veneers
                </span>
                <ArrowRight
                  size={14}
                  className="text-[#C5A059] group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
                href={`/${lang}/services/cosmetic-dentistry`}
                className="group flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 hover:border-[#C5A059] transition-colors"
              >
                <span className="font-brandon text-s font-bold uppercase tracking-wider text-black">
                  Cosmetic Smile Design
                </span>
                <ArrowRight
                  size={14}
                  className="text-[#C5A059] group-hover:translate-x-1 transition-transform"
                />
              </Link>

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
                ? "即刻预定您的 45 分钟 Zoom® 极速美白体验"
                : isEs
                ? "¿Listo para Lucir una Sonrisa Radiante en NYC?"
                : "Schedule Your 45-Minute Zoom® Whitening Appointment"}
            </h2>
            <p className="font-brandon text-sm text-neutral-300 max-w-lg mx-auto mb-8">
              {isZh
                ? "体验 Tribeca Dental Studio 的无痛、高亮度美白治疗，擦去岁月痕迹重拾自信笑容。"
                : isEs
                ? "Reserve su cita con nuestros especialistas en estética dental en Lower Manhattan."
                : "Transform your smile quickly and painlessly in the heart of Lower Manhattan."}
            </p>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C5A059] hover:bg-white hover:text-black text-black font-bold uppercase tracking-[0.3em] text-s px-10 py-5 transition-all duration-300"
            >
              {isZh ? "立即在线预约" : isEs ? "Reservar Cita Ahora" : "Book Whitening Appointment Now"}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}