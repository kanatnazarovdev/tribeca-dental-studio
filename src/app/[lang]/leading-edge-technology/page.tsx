/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { bookingUrl } from "@/hooks/helper";
import { Zap, Scan, Radio, ShieldCheck, Cpu, CheckCircle2, ArrowRight } from "lucide-react";

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
    ? "前沿齿科数字科技与微创激光 | 纽约 Tribeca Dental Studio"
    : isEs
    ? "Tecnología Dental Avanzada y Láser en NYC | Tribeca Dental Studio"
    : "Leading-Edge Dental Technology & Lasers NYC | Tribeca Dental Studio";

  const description = isZh
    ? "体验纽约 Tribeca 前沿数字齿科：Fotona & Biolase 微创水激光、无辐射 iTero® 3D 口内扫描仪与低剂量 CBCT 锥体 CT 诊断，享无痛高效看牙体验。"
    : isEs
    ? "Descubra nuestra tecnología dental de vanguardia en Lower Manhattan: odontología láser Fotona y Biolase, escáner 3D iTero® y tomografía CBCT."
    : "Experience premier laser & 3D digital dentistry in Lower Manhattan, NYC. Featuring Fotona & Biolase non-invasive lasers, radiation-free iTero® 3D scanners, and low-dose CBCT 3D imaging.";

  return {
    title,
    description,
    keywords: [
      "Laser Dentistry NYC",
      "Fotona Laser Dentist Tribeca",
      "Biolase Laser Dentistry Lower Manhattan",
      "iTero 3D Scanner NYC",
      "CBCT 3D Dental X-Ray Tribeca",
      "Digital Dentistry Manhattan",
      "Radiation-Free Dental Scanning",
      "Laser Periodontal Treatment NYC",
      "NightLase Snoring Treatment Manhattan",
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
      url: `https://tribecadentalstudio.com/${lang}/leading-edge-technology`,
      siteName: "Tribeca Dental Studio",
      images: [
        {
          url: "https://tribecadentalstudio.com/leading-edge.webp",
          width: 1200,
          height: 630,
          alt: "3D CBCT CT Scan and Digital Dentistry Technology at Tribeca Dental Studio NYC",
        },
      ],
      locale: lang === "zh" ? "zh_CN" : lang === "es" ? "es_ES" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://tribecadentalstudio.com/leading-edge.webp"],
    },
    alternates: {
      canonical: `https://tribecadentalstudio.com/${lang}/leading-edge-technology`,
      languages: {
        en: "https://tribecadentalstudio.com/en/leading-edge-technology",
        es: "https://tribecadentalstudio.com/es/leading-edge-technology",
        zh: "https://tribecadentalstudio.com/zh/leading-edge-technology",
      },
    },
  };
}

export default async function LeadingEdgeTechnologyPage({
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
        "image": "https://tribecadentalstudio.com/leading-edge.webp",
        "telephone": "+1-212-561-5303",
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "54 Warren St",
          "addressLocality": "New York",
          "addressRegion": "NY",
          "postalCode": "10007",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 40.7145,
          "longitude": -74.0082
        },
        "knowsAbout": [
          "Laser Dentistry",
          "Fotona Laser Treatments",
          "Biolase Laser Dentistry",
          "iTero 3D Digital Impressions",
          "CBCT 3D Cone Beam Computed Tomography",
          "Panoramic Digital Dental X-Rays"
        ]
      },
      {
        "@type": "MedicalProcedure",
        "name": "Laser Dentistry & 3D CBCT Imaging",
        "procedureType": "Non-invasive Diagnostic & Surgical Dental Procedure",
        "bodyLocation": "Mouth, Teeth, Jaws, Sinuses, Airway",
        "relevantSpecialty": {
          "@type": "MedicalSpecialty",
          "name": "Dentistry"
        }
      }
    ]
  };

  const content = {
    badge: isZh ? "前沿数字齿科科技" : isEs ? "Tecnología Avanzada" : "Leading-Edge Technology",
    title: isZh
      ? "突破传统，体验前沿科技带来的微创舒适诊疗"
      : isEs
      ? "Tecnología Dental de Vanguardia en Lower Manhattan"
      : "Leading-Edge Technology in Tribeca, NYC",
    subtitle: isZh
      ? "告别传统不适。在 Tribeca Dental Studio，我们结合先进微创水激光、无辐射 3D 扫描与精确影像，让看牙更快速、更舒心、更安全。"
      : isEs
      ? "Avances tecnológicos que hacen que su consulta sea más rápida, cómoda y segura: desde odontología láser hasta impresiones 3D sin moldes ni radiación."
      : "Every successful advancement eventually leaves patients feeling grateful we no longer do it the old way. We combine advanced non-invasive lasers, radiation-free 3D digital scans, and ultra-precise diagnostics under one roof.",

    laserTitle: isZh ? "Fotona & Biolase® 微创激光牙科" : isEs ? "Odontología Láser (Fotona y Biolase)" : "Laser Dentistry (Fotona & Biolase)",
    laserSubtitle: isZh
      ? "我们配备三台先进的 Fotona 及 Biolase 激光设备，替代传统侵入性手术，显著降低创伤与术后不适感："
      : isEs
      ? "Contamos con tres avanzados equipos láser para tratamientos prácticamente indoloros y de rápida cicatrización:"
      : "Our three Fotona and Biolase laser systems replace traditional invasive tools, dramatically reducing discomfort and recovery time:",
    laserPoints: [
      isZh ? "微创治疗牙周病，免受痛苦的刮治与根面平整" : isEs ? "Tratamiento de enfermedad periodontal sin raspado doloroso" : "Treat gum disease without painful scaling & root planing",
      isZh ? "刺激龈组织与骨骼再生，修复牙龈退缩" : isEs ? "Estimula el regeneramiento natural de tejido encía y hueso" : "Stimulate new gum tissue and bone growth",
      isZh ? "水激光露龈笑矫正（龈切术与冠延长）" : isEs ? "Corrección de sonrisa gingival (gingivectomía de precisión)" : "Fix a gummy smile with precise gingivectomy or crown lengthening",
      isZh ? "无创淡化唇周及鼻翼皱纹 (皮肤焕活 NightLase®)" : isEs ? "Reducción de arrugas peribucales y rejuvenecimiento facial" : "Reduce wrinkles around lips and nose with non-invasive skin resurfacing",
      isZh ? "改善或消除打鼾与睡眠呼吸暂停症状" : isEs ? "Tratamientos para el ronquido y la apnea del sueño" : "Reduce or eliminate sleep apnea and snoring symptoms",
      isZh ? "舌系带及唇系带微创切除术 (Frenectomy)" : isEs ? "Frenectomía sin sangrado ni molestias para niños y adultos" : "Eliminate tongue and lip ties with gentle frenectomy",
      isZh ? "无损安全拆除旧瓷冠，保护天然牙结构" : isEs ? "Remoción segura de coronas de porcelana sin dañar el diente" : "Safely remove porcelain crowns without damaging underlying tooth structure",
    ],

    // Section 2: iTero Scanner
    iteroTitle: isZh ? "iTero® 3D 无辐射口内扫描仪" : isEs ? "Escáner iTero® 3D" : "iTero® 3D Digital Scanner",
    iteroSubtitle: isZh
      ? "采用小型手持探头，数秒内精准捕捉口内 3D 图像，零辐射，无需传统黏腻取模膏。"
      : isEs
      ? "Captura imágenes 3D de alta precisión sin radiación y sin moldes molestos."
      : "Captures precise 3D digital impressions using radiation-free infrared technology—eliminating messy, gag-inducing impression putty.",
    iteroPoints: [
      isZh ? "精准检测牙齿邻面隐蔽蛀牙" : isEs ? "Detección temprana de caries entre dientes" : "Detect interproximal cavities missed by standard X-rays",
      isZh ? "定位 TMJ 颞下颌关节紊乱的肌肉紧张点" : isEs ? "Localiza tensión muscular en pacientes con TMJ" : "Locate muscle tension in TMJ sufferers for targeted therapy",
      isZh ? "跨年度动态对比跟踪牙齿位移与磨损" : isEs ? "Monitoreo del movimiento dental y encías año tras año" : "Monitor tooth, gum, and bone progression over years of visits",
      isZh ? "实时预演 Invisalign® 正畸排齐效果" : isEs ? "Simula los resultados del tratamiento con Invisalign®" : "Simulate orthodontic transformation previews in digital 3D",
    ],

    // Section 3: CBCT Scanner
    cbctTitle: isZh ? "CBCT 锥形束 3D 锥体 CT 扫描" : isEs ? "Tomografía Computarizada CBCT 3D" : "CBCT 3D Cone-Beam Computed Tomography",
    cbctSubtitle: isZh
      ? "提供包含牙齿、颌骨、窦腔、神经走形与气道在内的完整解剖图像。"
      : isEs
      ? "Imágenes tridimensionales completas para evaluar huesos, nervios, senos y vías respiratorias."
      : "Captures complete 3D anatomical visualization of teeth, jawbone, nerves, sinus cavities, and airway volume.",
    cbctPoints: [
      isZh ? "微创种植牙、根管治疗与外科手术规划" : isEs ? "Planificación de precisión para implantes, endodoncia y ortodoncia" : "Accurately plan oral surgery, root canals, and orthodontic therapy",
      isZh ? "评估骨密度与骨量，精准定位潜在感染源" : isEs ? "Evaluación de pérdida ósea e identificación de infecciones" : "Assess bone density, bone loss, and locate hidden sources of pain",
      isZh ? "气道阻塞筛查（扁桃体、鼻中隔偏曲等）" : isEs ? "Análisis de obstrucciones respiratorias y apnea del sueño" : "Analyze airway obstructions for custom sleep apnea and growth planning",
    ],
    cbctSafety: isZh
      ? "【辐射安全说明】CBCT 产生的辐射剂量比医院标准 CT 扫描降低高至 90%（小于一次跨大西洋飞行），仅在您治疗确有需求时使用。"
      : isEs
      ? "【Seguridad】Genera hasta un 90% menos de radiación que una CT estándar y solo se realiza cuando su tratamiento específico lo requiere."
      : "Safety Note: A CBCT scan delivers up to 90% less radiation than a traditional medical CT scan—less than a single transatlantic flight. We only order CBCT scans when clinically needed.",

    panoTitle: isZh ? "全景数字 X 光片 (Panoramic X-Ray)" : isEs ? "Radiografía Panorámica Digital" : "Panoramic Digital X-Rays",
    panoSubtitle: isZh
      ? "无需将咬合块深入口腔，专为咽反射极敏感患者打造的全颌 2D 成像方案。"
      : isEs
      ? "Visión panoramica completa ideal para evaluar muelas del juicio e implantes sin introducir herramientas molestos."
      : "Captures a full 2D view of your entire jaw, dentition, and TMJ without requiring sensor placement inside the mouth—perfect for gag-sensitive patients.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-[#FCFCFC] text-black min-h-screen pt-32 pb-24 font-ddin">
        
        <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-20" aria-label="Hero Section">
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
                  {isZh ? "预约科技诊疗体验" : isEs ? "Agendar Cita con Tecnología" : "Book High-Tech Consultation"}
                </a>
                <a
                  href="tel:2125615303"
                  className="inline-flex items-center justify-center border border-black/20 hover:border-black text-black font-bold uppercase tracking-[0.2em] text-xs px-8 py-4 transition-all duration-300"
                >
                  212-561-5303
                </a>
              </div>
            </header>

            {/* RIGHT COLUMN: HERO IMAGE (X-RAY) */}
            <div className="relative aspect-[4/3] bg-neutral-100 border border-neutral-200 overflow-hidden shadow-sm group">
              <Image
                src="/leading-edge.webp"
                alt="Tribeca Dental Studio High-Resolution CBCT 3D Jaw CT Scan Technology"
                fill
                priority
                unoptimized
                className="object-cover object-center filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/90 backdrop-blur-md border border-neutral-200 shadow-md">
                <p className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">
                  Advanced Digital Diagnostics
                </p>
                <p className="font-brandon text-xs text-neutral-600 mt-1 leading-relaxed">
                  {isZh
                    ? "高清数字化 3D 立体成像，毫米级精准辨识牙齿与颌骨病变。"
                    : isEs
                    ? "Diagnóstico digital 3D de alta definición para una precisión milimétrica."
                    : "High-resolution 3D visualization for precision diagnostic planning."}
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 2. LASER DENTISTRY SECTION */}
        <section className="bg-neutral-50 py-20 px-6 md:px-12 lg:px-20 border-y border-neutral-200 mb-20" id="laser-dentistry">
          <div className="max-w-7xl mx-auto">
            <header className="max-w-2xl mb-12">
              <div className="flex items-center gap-2 text-[#C5A059] mb-2">
                <Zap size={20} aria-hidden="true" />
                <span className="text-xs uppercase tracking-[0.3em] font-bold block">
                  Next-Gen Precision
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-black mb-4">
                {content.laserTitle}
              </h2>
              <p className="font-brandon text-sm text-neutral-600 leading-relaxed">
                {content.laserSubtitle}
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.laserPoints.map((pt, idx) => (
                <article key={idx} className="p-6 bg-white border border-neutral-200 shadow-sm flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#C5A059] shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="font-brandon text-xs font-bold text-neutral-700 leading-relaxed uppercase">
                    {pt}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 3. ITERO 3D SCANNER SECTION */}
        <section className="py-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto" id="itero-scanner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <header className="mb-8">
                <div className="flex items-center gap-2 text-[#C5A059] mb-2">
                  <Scan size={20} aria-hidden="true" />
                  <span className="text-xs uppercase tracking-[0.3em] font-bold block">
                    100% Radiation-Free
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-black mb-4">
                  {content.iteroTitle}
                </h2>
                <p className="font-brandon text-sm text-neutral-600 leading-relaxed">
                  {content.iteroSubtitle}
                </p>
              </header>

              <div className="space-y-4">
                {content.iteroPoints.map((pt, idx) => (
                  <article key={idx} className="flex items-start gap-3 p-4 bg-white border border-neutral-200 shadow-sm">
                    <span className="text-xs font-bold text-[#C5A059]">0{idx + 1}</span>
                    <p className="font-brandon text-xs text-neutral-700 leading-relaxed uppercase font-bold">
                      {pt}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            {/* ITERO VISUAL CARD */}
            <article className="bg-neutral-900 text-white p-8 md:p-12 border border-neutral-900 shadow-md flex flex-col justify-between h-full">
              <div>
                <Cpu size={32} className="text-[#C5A059] mb-6" aria-hidden="true" />
                <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-4">
                  Instant 3D Smile Simulation
                </h3>
                <p className="font-brandon text-sm text-neutral-300 leading-relaxed mb-8">
                  {isZh
                    ? "无需使用传统的压印模膏。在您的首次初诊中，iTero® 即刻生成全口三维模型，并在屏幕上模拟展示正畸或修复后的完美齿列效果。"
                    : isEs
                    ? "Elimine los moldes incomodos. El escáner iTero® genera una simulación digital instantánea de su futura sonrisa."
                    : "Say goodbye to messy gag-inducing impression putty. Experience real-time 3D smile outcomes mapped directly during your consultation."}
                </p>
              </div>
              <div className="pt-6 border-t border-white/20 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                <span>Zero Radiation • 100% Digital</span>
                <span>iTero® Element</span>
              </div>
            </article>
          </div>
        </section>

        {/* 4. CBCT 3D SCANNER & PANORAMIC X-RAYS */}
        <section className="bg-neutral-50 py-20 px-6 md:px-12 lg:px-20 border-y border-neutral-200 mb-20" id="3d-imaging">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* CBCT SCANNER */}
              <article className="bg-white border border-neutral-200 p-8 md:p-10 shadow-sm">
                <header className="mb-6">
                  <div className="flex items-center gap-2 text-[#C5A059] mb-2">
                    <Radio size={20} aria-hidden="true" />
                    <span className="text-xs uppercase tracking-[0.3em] font-bold block">
                      3D Anatomical Precision
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-black mb-2">
                    {content.cbctTitle}
                  </h3>
                  <p className="font-brandon text-xs text-neutral-600 leading-relaxed">
                    {content.cbctSubtitle}
                  </p>
                </header>

                <div className="space-y-3 mb-6">
                  {content.cbctPoints.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#C5A059] shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="font-brandon text-xs font-bold text-neutral-700 leading-relaxed uppercase">
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="font-brandon text-[11px] text-neutral-500 bg-neutral-100 p-4 border border-neutral-200 leading-relaxed italic">
                  {content.cbctSafety}
                </p>
              </article>

              {/* PANORAMIC X-RAYS */}
              <article className="bg-white border border-neutral-200 p-8 md:p-10 shadow-sm flex flex-col justify-between">
                <div>
                  <header className="mb-6">
                    <div className="flex items-center gap-2 text-[#C5A059] mb-2">
                      <ShieldCheck size={20} aria-hidden="true" />
                      <span className="text-xs uppercase tracking-[0.3em] font-bold block">
                        Gag-Reflex Friendly
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold uppercase tracking-tight text-black mb-2">
                      {content.panoTitle}
                    </h3>
                    <p className="font-brandon text-xs text-neutral-600 leading-relaxed">
                      {content.panoSubtitle}
                    </p>
                  </header>

                  <p className="font-brandon text-xs text-neutral-600 leading-relaxed mb-6">
                    {isZh
                      ? "机器围绕面部旋转一周生成全颌 2D 视角，尤其适合阻生智齿检查、全口种植规划与咽反射敏感患者。"
                      : isEs
                      ? "Visión panorámica completa ideal para evaluar muelas del juicio, implantes y desórdenes de la ATM sin molestia alguna."
                      : "Provides a full panoramic perspective in a single external rotation—ideal for wisdom teeth impaction checks, implant planning, and sensitive patients."}
                  </p>
                </div>

                <div className="p-4 bg-neutral-900 text-white border border-neutral-900 text-xs font-bold uppercase tracking-wider">
                  Minimal Dose • Full-Jaw Coverage
                </div>
              </article>

            </div>
          </div>
        </section>

        {/* 5. INTERNAL LINKING HUB FOR SEO */}
        <section className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
          <div className="border border-neutral-200 bg-white p-8 md:p-12 shadow-sm">
            <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] mb-4">
              Explore Specialized Digital Treatments
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href={`/${lang}/services/invisalign-clear-aligner-braces`}
                className="group flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 hover:border-[#C5A059] transition-colors"
              >
                <span className="font-brandon text-xs font-bold uppercase tracking-wider text-black">
                  3D Invisalign® Aligners
                </span>
                <ArrowRight size={14} className="text-[#C5A059] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href={`/${lang}/services/wisdom-tooth-removal`}
                className="group flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 hover:border-[#C5A059] transition-colors"
              >
                <span className="font-brandon text-xs font-bold uppercase tracking-wider text-black">
                  3D Wisdom Extractions
                </span>
                <ArrowRight size={14} className="text-[#C5A059] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href={`/${lang}/best-dentist-in-nyc`}
                className="group flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 hover:border-[#C5A059] transition-colors"
              >
                <span className="font-brandon text-xs font-bold uppercase tracking-wider text-black">
                  Boutique Clinical Care
                </span>
                <ArrowRight size={14} className="text-[#C5A059] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href={`/${lang}/testimonials`}
                className="group flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 hover:border-[#C5A059] transition-colors"
              >
                <span className="font-brandon text-xs font-bold uppercase tracking-wider text-black">
                  Patient Video Reviews
                </span>
                <ArrowRight size={14} className="text-[#C5A059] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* 6. BOTTOM CTA BANNER */}
        <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto pb-24">
          <div className="bg-black text-white p-10 md:p-16 text-center border border-black">
            <h2 className="text-2xl md:text-4xl font-light uppercase tracking-tight text-white mb-4">
              {isZh ? "感受纽约前沿高精度的舒适齿科诊疗" : isEs ? "¿Listo para Experimentar la Odontología Moderna?" : "Experience Advanced Dentistry in Lower Manhattan"}
            </h2>
            <p className="font-brandon text-sm text-neutral-300 max-w-lg mx-auto mb-8">
              {isZh ? "访问我们在 Tribeca 的前沿数码诊所，让精细化科技为您带来无痛、高效的看牙体验。" : isEs ? "Reserve su cita en nuestra clínica boutique en Tribeca." : "Book an appointment at our Lower Manhattan studio to experience non-invasive lasers and precise 3D digital care."}
            </p>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C5A059] hover:bg-white hover:text-black text-black font-bold uppercase tracking-[0.3em] text-xs px-10 py-5 transition-all duration-300"
            >
              {isZh ? "立即在线预约" : isEs ? "Reservar Cita Ahora" : "Book Online Now"}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}