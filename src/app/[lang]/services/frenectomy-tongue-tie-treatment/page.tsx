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
  Heart,
  Baby,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Zap,
  Activity,
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
    ? "纽约 Tribeca 舌系带与唇系带水激光切除术 (Frenectomy) | Dr. Nina Izhaky"
    : isEs
    ? "Tratamiento de Frenillo Lingual y Labial (Frenectomía Láser) en NYC | Tribeca Dental Studio"
    : "Tongue & Lip Tie Treatment (Laser Frenectomy) Tribeca, NYC | Tribeca Dental Studio";

  const description = isZh
    ? "纽约 Tribeca 功能齿科专家 Dr. Nina Izhaky 亲诊：提供无血无痛水激光舌系带与唇系带切除术 (Frenectomy)。改善婴儿哺乳困难、儿童发音与成人睡眠气道阻塞。"
    : isEs
    ? "Frenectomía láser para bebés, niños y adultos en Lower Manhattan, NYC por la Dra. Nina Izhaky. Tratamiento sin sangre para problemas de lactancia, habla y apnea del sueño."
    : "Soft-tissue laser frenectomy in Tribeca, NYC by functional dentist Dr. Nina Izhaky. Bloodless, gentle tongue & lip tie release for infants, kids, and adults.";

  return {
    title,
    description,
    keywords: [
      "Tongue Tie Release NYC",
      "Lip Tie Laser Frenectomy Tribeca",
      "Dr Nina Izhaky Functional Dentist",
      "Infant Tongue Tie Release Manhattan",
      "Laser Frenectomy Lower Manhattan",
      "Pediatric Frenectomy NYC",
      "Breastfeeding Latch Tongue Tie Dentist",
      "Adult Tongue Tie Sleep Apnea NYC",
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
      url: `https://tribecadentalstudio.com/${lang}/services/tongue-lip-tie-frenectomy`,
      siteName: "Tribeca Dental Studio",
      images: [
        {
          url: "https://tribecadentalstudio.com/about-studio.jpg",
          width: 1200,
          height: 630,
          alt: "Soft-Tissue Laser Frenectomy for Tongue & Lip Tie at Tribeca Dental Studio NYC",
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
      canonical: `https://tribecadentalstudio.com/${lang}/services/tongue-lip-tie-frenectomy`,
      languages: {
        en: "https://tribecadentalstudio.com/en/services/tongue-lip-tie-frenectomy",
        es: "https://tribecadentalstudio.com/es/services/tongue-lip-tie-frenectomy",
        zh: "https://tribecadentalstudio.com/zh/services/tongue-lip-tie-frenectomy",
      },
    },
  };
}

export default async function TongueLipTieFrenectomyPage({
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
          "Tongue Tie Release (Ankyloglossia)",
          "Lip Tie Release",
          "Soft-Tissue Laser Frenectomy",
          "Functional Dentistry",
          "Infant Breastfeeding Latch Support",
          "Myofunctional Therapy Pre and Post-Op",
        ],
      },
      {
        "@type": "MedicalProcedure",
        "name": "Soft-Tissue Laser Frenectomy for Tongue & Lip Tie Release",
        "procedureType": "Minimally Invasive Laser Oral Surgery",
        "bodyLocation": "Lingual Frenulum, Labial Frenulum, Oral Cavity",
        "relevantSpecialty": {
          "@type": "MedicalSpecialty",
          "name": "Functional & Pediatric Dentistry",
        },
      },
    ],
  };

  const content = {
    badge: isZh
      ? "功能齿科与激光微创中心"
      : isEs
      ? "Odontología Funcional y Láser"
      : "Functional Dentistry & Laser Care",
    title: isZh
      ? "纽约 Tribeca 舌系带与唇系带水激光切除术 (Frenectomy)"
      : isEs
      ? "Tratamiento de Frenillo Lingual y Labial en Tribeca, NYC"
      : "Tongue & Lip Tie Treatment (Laser Frenectomy) in Tribeca, NYC",
    subtitle: isZh
      ? "由功能齿科专家 Dr. Nina Izhaky 亲诊。采用无创软组织水激光，快速松解过于紧缩的舌系带与唇系带，解决婴儿母乳喂养困难、儿童发音含糊以及成人张口呼吸与睡眠气道问题。"
      : isEs
      ? "La experta en odontología funcional Dra. Nina Izhaky realiza frenectomías láser de precisión para bebés, niños y adultos. Mejora la lactancia, la articulación del habla y la respiración de forma rápida y sin sangrado."
      : "Functional dentistry expert Dr. Nina Izhaky performs precise soft-tissue laser frenectomies in Tribeca. Our bloodless procedure releases restricted tongue and lip ties to resolve feeding, speech, and airway challenges across all ages.",

    // Section 1: Infant vs Adult Symptoms
    infantTitle: isZh ? "婴儿舌系带/唇系带的典型征兆" : isEs ? "Síntomas en Bebés y Lactantes" : "Infant Latch & Feeding Symptoms",
    infantList: [
      isZh ? "母乳喂养时难以紧密衔乳，频繁滑脱" : isEs ? "Dificultad para agarrar el pecho de forma segura" : "Difficulty achieving or maintaining a secure latch while nursing",
      isZh ? "每次喂奶时间极长（每侧经常超过20分钟）" : isEs ? "Lactancia muy prolongada (más de 20 min por lado)" : "Extended feeding sessions (significantly over 20 mins per side)",
      isZh ? "吃奶过程中频繁疲倦入睡，体重增长缓慢" : isEs ? "Se queda dormido de cansancio al comer o aumento de peso lento" : "Falling asleep regularly during feeding due to exhaustion or slow weight gain",
      isZh ? "吸吮时发出点击声或喀哒声 (Clicking Sound)" : isEs ? "Hacer ruidos de chasquido o 'clic' durante la lactancia" : "Making a clicking sound while nursing due to seal breakage",
      isZh ? "母亲哺乳时感到剧烈疼痛、乳头破裂或堵奶" : isEs ? "Dolor intenso, grietas o congestión mamaria en la madre" : "Mother experiencing severe nursing pain, cracked nipples, or blocked ducts",
    ],

    adultTitle: isZh ? "儿童与成人潜在的系带黏连症状" : isEs ? "Síntomas en Niños y Adultos" : "Children & Adult Functional Symptoms",
    adultList: [
      isZh ? "上门齿出现缝隙 (Diastema) 或牙龈退缩" : isEs ? "Separación entre los dientes frontales o recesión de encía" : "Gap between upper front teeth (diastema) or localized gum recession",
      isZh ? "发音不准、吐字含糊、吞咽固体药物困难" : isEs ? "Dificultad de pronunciación, habla entrecortada o para tragar" : "Speech articulation issues, slurred pronunciation, or swallowing pills",
      isZh ? "慢性张口呼吸、夜间打鼾与睡眠呼吸暂停" : isEs ? "Respiración bucal crónica, ronquidos o apnea del sueño" : "Mouth breathing, chronic snoring, or sleep-disordered breathing",
      isZh ? "咬合紧绷、习惯性磨牙、肩颈慢性酸痛" : isEs ? "Apretamiento dental, bruxismo y tensión en cuello y hombros" : "Jaw clenching, night grinding (bruxism), or chronic neck & shoulder tension",
      isZh ? "拱形高腭、牙弓狭窄与严重牙齿拥挤" : isEs ? "Paladar alto y estrecho con apiñamiento dental severo" : "High narrow palate, restricted arch development, and dental crowding",
    ],

    // Section 2: Why Laser Frenectomy
    whyLaserTitle: isZh ? "为什么选择水激光切除术 (Laser Frenectomy)？" : isEs ? "¿Por Qué Elegir la Frenectomía Láser?" : "Why Choose Soft-Tissue Laser Frenectomy?",
    whyLaserSubtitle: isZh
      ? "传统剪刀或手术刀切除不仅易引发出血与明显肿痛，还需缝合。我们的专科级软组织激光带来颠覆性就医体验："
      : isEs
      ? "A diferencia de las tijeras o bisturís tradicionales, el láser de diodo ofrece mayor precisión, curación rápida y sin costuras:"
      : "Traditional scalpel methods cause bleeding, swelling, and require sutures. Our soft-tissue laser cauterizes instantly as it treats:",
    whyLaserPoints: [
      {
        title: isZh ? "几乎零出血，无需缝合" : isEs ? "Sin Sangrado y Sin Suturas" : "Minimal Bleeding & No Sutures Needed",
        desc: isZh ? "激光在切除紧缩组织的同时即时封堵微血管，术后无需拆线，伤口极其干净。" : isEs ? "El láser cauteriza los vasos sanguíneos al instante, eliminando la necesidad de puntos." : "The laser self-cauterizes soft tissue as it releases restricted bands, completely eliminating the need for uncomfortable stitches.",
      },
      {
        title: isZh ? "微米级精准度，保护周边组织" : isEs ? "Precisión Milimétrica" : "Micro-Targeted Precision",
        desc: isZh ? "仅作用于过度拉紧的系带纤维，完全不损伤周边的肌肉与唾液腺小管。" : isEs ? "Dirigido únicamente a la banda restringida, dejando el tejido circundante intacto." : "Targets strictly the tight frenulum fibers, leaving healthy surrounding tongue and lip anatomy completely undisturbed.",
      },
      {
        title: isZh ? "极速恢复，婴儿即刻可恢复母乳" : isEs ? "Recuperación Rápida" : "Rapid Recovery & Instant Feeding",
        desc: isZh ? "手术仅需数分钟。治疗完成后，婴儿在诊所内即可立即由母亲进行舒适哺乳。" : isEs ? "Los bebés pueden amamantar inmediatamente después del procedimiento en la clínica." : "Takes less than a few minutes. Newborns can latch and nurse immediately post-procedure right in our Tribeca suite.",
      },
      {
        title: isZh ? "降低粘连复发率" : isEs ? "Menor Riesgo de Reincidencia" : "Reduced Risk of Reattachment",
        desc: isZh ? "配合简单轻柔的居家拉伸指导，创口愈合平整，彻底杜绝再次拉紧发作。" : isEs ? "La cicatrización limpia combinada con estiramientos disminuye la reaparición del tejido." : "Clean laser vaporizing minimizes scarring and re-tightening when combined with our gentle post-op stretching exercises.",
      },
    ],

    // Section 3: Procedure Workflow
    workflowTitle: isZh ? "舒适无痛的诊疗三步曲" : isEs ? "Proceso Paso a Paso" : "Step-by-Step Treatment Process",
    steps: [
      {
        num: "01",
        title: isZh ? "功能性评估与表麻舒缓" : isEs ? "Evaluación y Anestesia Tópica" : "Evaluation & Numbing",
        desc: isZh ? "Dr. Nina 检查系带限制等级。对婴儿涂抹温和表面麻醉膏，成人使用无痛局部麻醉。" : isEs ? "Se aplica un gel anestésico suave (o anestesia local) para garantizar cero dolor." : "Dr. Nina inspects the restrictions. A soothing topical numbing gel (or local anesthetic for adults) ensures full comfort.",
      },
      {
        num: "02",
        title: isZh ? "柔和激光秒级松解" : isEs ? "Liberación Láser Suave" : "Gentle Laser Release",
        desc: isZh ? "使用水激光精准气化紧张系带纤维，全程不到一分钟，安全无声。" : isEs ? "El láser de tejido blando vaporiza la banda fibrosa en menos de un minuto." : "The precision soft-tissue laser vaporizes the tight frenulum band in under 60 seconds with zero pulling.",
      },
      {
        num: "03",
        title: isZh ? "即刻效果验证与拉伸指导" : isEs ? "Prueba de Movilidad y Cuidados" : "Post-Op Feeding & Exercises",
        desc: isZh ? "即刻测试舌体抬高幅度。Dr. Nina 亲导家长几招简单居家抚触拉伸，防止创口愈合粘连。" : isEs ? "Comprobación del rango de movimiento e instrucciones de estiramientos preventivos." : "Immediate range-of-motion test. Dr. Nina personally guides parents through quick stretching techniques to guarantee long-term success.",
      },
    ],

    // Section 4: FAQs
    faqsTitle: isZh ? "系带切除常见问题解答" : isEs ? "Preguntas Frecuentes sobre Frenectomía" : "Frequently Asked Questions",
    faqs: [
      {
        q: isZh ? "手术过程会让孩子感到剧痛吗？" : isEs ? "¿El procedimiento es doloroso?" : "Does the laser frenectomy procedure hurt?",
        a: isZh
          ? "不会。对于婴儿，我们使用专用的高安全表面麻醉凝胶，操作时间不到一分钟；对较大的儿童与成人，局部麻醉可确保全程完全无痛。"
          : isEs
          ? "Para los bebés se aplica un gel anestésico tópico y dura menos de un minuto. Para niños mayores y adultos, la anestesia local garantiza un proceso indoloro."
          : "No. For infants, a topical numbing gel is applied, and the treatment takes under 60 seconds. For older children and adults, local anesthetic ensures a completely painless experience.",
      },
      {
        q: isZh ? "术后需要多久才能完全恢复？" : isEs ? "¿Cuánto tiempo toma la recuperación?" : "How long is the recovery phase?",
        a: isZh
          ? "创口表面通常在 1 至 2 周内完全愈合。婴儿在术后数小时内即可恢复正常吃奶，按时完成简单的轻柔拉伸是防止二次粘连的关键。"
          : isEs
          ? "La cicatrización inicial toma entre 1 y 2 semanas. Los bebés pueden lactar casi de inmediato y los estiramientos diarios previenen la reatadura."
          : "Initial healing occurs within 7–14 days. Infants nurse almost immediately post-treatment, and parents perform gentle 5-second stretches daily to ensure optimal results.",
      },
      {
        q: isZh ? "保险能够报销舌系带切除费用吗？" : isEs ? "¿El seguro cubre la frenectomía?" : "Will dental or medical insurance cover a frenectomy?",
        a: isZh
          ? "保险覆盖范围因具体计划而异。部分医疗或牙科保险在提供哺乳障碍或语音障碍证明时可部分报销。我们的专员将全权协助您核算并提交索赔。"
          : isEs
          ? "La cobertura varía según el plan. Ayudamos a revisar sus beneficios y presentar la documentación necesaria para reclamos médicos o dentales."
          : "Coverage depends on your specific insurance provider. Our administrative team will verify your benefits and assist with filing all necessary documentation.",
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
                <Sparkles size={18} />
                <span className="text-xs uppercase tracking-[0.3em] font-bold block">
                  Dr. Nina Izhaky • Functional Dentistry Expert
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
                    ? "预约 Dr. Nina 舌系带评估"
                    : isEs
                    ? "Agendar Cita con la Dra. Nina"
                    : "Book Tie Consultation"}
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
                src="/about-studio.jpg"
                alt="Dr. Nina Izhaky Laser Frenectomy Tongue and Lip Tie Release Tribeca Dental Studio"
                fill
                priority
                unoptimized
                className="object-cover object-center filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/90 backdrop-blur-md border border-neutral-200 shadow-md">
                <p className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">
                  Gentle Soft-Tissue Laser Therapy
                </p>
                <p className="font-brandon text-xs text-neutral-600 mt-1 leading-relaxed">
                  {isZh
                    ? "微秒级水激光精准气化，无声无血，保护婴儿与儿童娇嫩口腔组织。"
                    : isEs
                    ? "Tratamiento láser sin sangre ni dolor para recién nacidos, niños y adultos."
                    : "Precision soft-tissue laser vaporization with zero bleeding and fast recovery."}
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 2. INFANT VS ADULT SYMPTOMS */}
        <section className="bg-neutral-50 py-20 px-6 md:px-12 lg:px-20 border-y border-neutral-200 mb-20" id="symptoms">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* INFANT SYMPTOMS */}
              <div className="bg-white border border-neutral-200 p-8 shadow-sm">
                <div className="flex items-center gap-2 text-[#C5A059] mb-3">
                  <Baby size={22} aria-hidden="true" />
                  <span className="text-xs uppercase tracking-[0.3em] font-bold block">
                    Infants & Breastfeeding
                  </span>
                </div>
                <h2 className="text-2xl font-bold uppercase tracking-tight text-black mb-6">
                  {content.infantTitle}
                </h2>
                <div className="space-y-4">
                  {content.infantList.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-[#C5A059] shrink-0 mt-0.5" />
                      <span className="font-brandon text-xs font-bold text-neutral-700 leading-relaxed uppercase">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ADULT SYMPTOMS */}
              <div className="bg-white border border-neutral-200 p-8 shadow-sm">
                <div className="flex items-center gap-2 text-[#C5A059] mb-3">
                  <Activity size={22} aria-hidden="true" />
                  <span className="text-xs uppercase tracking-[0.3em] font-bold block">
                    Children & Adult Health
                  </span>
                </div>
                <h2 className="text-2xl font-bold uppercase tracking-tight text-black mb-6">
                  {content.adultTitle}
                </h2>
                <div className="space-y-4">
                  {content.adultList.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-[#C5A059] shrink-0 mt-0.5" />
                      <span className="font-brandon text-xs font-bold text-neutral-700 leading-relaxed uppercase">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. WHY LASER FRENECTOMY */}
        <section className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-20" id="why-laser">
          <header className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-[#C5A059] mb-2">
              <Zap size={20} aria-hidden="true" />
              <span className="text-xs uppercase tracking-[0.3em] font-bold block">
                Advanced Diode Technology
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-black mb-4">
              {content.whyLaserTitle}
            </h2>
            <p className="font-brandon text-sm text-neutral-600 leading-relaxed">
              {content.whyLaserSubtitle}
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.whyLaserPoints.map((pt, idx) => (
              <article key={idx} className="p-8 bg-white border border-neutral-200 shadow-sm">
                <h3 className="text-lg font-bold uppercase tracking-tight text-black mb-3 flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#C5A059] shrink-0" />
                  {pt.title}
                </h3>
                <p className="font-brandon text-xs text-neutral-600 leading-relaxed">
                  {pt.desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* 4. PROCEDURE WORKFLOW */}
        <section className="bg-neutral-900 text-white py-16 px-6 md:px-12 lg:px-20 border border-neutral-900 max-w-7xl mx-auto mb-20" id="workflow">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-3">
              Gentle Experience
            </span>
            <h2 className="text-2xl md:text-4xl font-light uppercase tracking-tight text-white">
              {content.workflowTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.steps.map((st, idx) => (
              <article key={idx} className="p-8 bg-white/5 border border-white/10 relative">
                <span className="text-3xl font-light text-[#C5A059] block mb-4">
                  {st.num}
                </span>
                <h3 className="text-lg font-bold uppercase tracking-tight text-white mb-3">
                  {st.title}
                </h3>
                <p className="font-brandon text-xs text-neutral-300 leading-relaxed">
                  {st.desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* 5. INTERACTIVE FAQ ACCORDION */}
        <section className="py-16 px-6 md:px-12 lg:px-20 max-w-4xl mx-auto mb-20" id="faqs">
          <header className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-3">
              Parents & Patients FAQ
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

        {/* 6. INTERNAL LINKING HUB FOR SEO */}
        <section className="py-12 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
          <div className="border border-neutral-200 bg-white p-8 md:p-12 shadow-sm">
            <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] mb-4">
              Explore Specialized Airway & Functional Services
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
                href={`/${lang}/services/sleep-apnea-devices`}
                className="group flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 hover:border-[#C5A059] transition-colors"
              >
                <span className="font-brandon text-xs font-bold uppercase tracking-wider text-black">
                  Sleep Apnea Devices
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
                  3D Laser Tech
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
                ? "预约 Dr. Nina Izhaky 亲诊舌系带评估"
                : isEs
                ? "¿Listo para Liberar el Frenillo con Láser?"
                : "Schedule Your Laser Frenectomy Consultation in NYC"}
            </h2>
            <p className="font-brandon text-sm text-neutral-300 max-w-lg mx-auto mb-8">
              {isZh
                ? "即刻联系 Tribeca Dental Studio，为您的宝宝与家人解锁无痛高效的呼吸与吞咽体验。"
                : isEs
                ? "Contacte a la Dra. Nina Izhaky en Lower Manhattan hoy mismo."
                : "Safe, precise, and gentle tongue and lip tie release. Contact Tribeca Dental Studio in Lower Manhattan today."}
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