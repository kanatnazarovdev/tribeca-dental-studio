import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Clock, FileText, Camera, Scan, Phone } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = rawLang === "es" ? "es" : rawLang === "zh" ? "zh" : "en";
  const isEs = lang === "es";
  const isZh = lang === "zh";

  const title = isZh
    ? "初次就诊指南与新患者须知 | Tribeca Dental Studio 纽约"
    : isEs
    ? "Su Primera Visita | Guía para Nuevos Pacientes | Tribeca Dental Studio NYC"
    : "Your First Visit | New Patient Guide | Tribeca Dental Studio NYC";

  const description = isZh
    ? "欢迎来到 Tribeca Dental Studio。了解您的首次牙科诊疗流程：在线填写表格、3D 口腔扫描、数字化 X 光检查与多专科联合评估，体验无痛舒心的就诊流程。"
    : isEs
    ? "Bienvenido a Tribeca Dental Studio en Lower Manhattan. Todo lo que necesita saber para su primera consulta: formularios en línea, escaneo 3D y evaluación personalizada."
    : "Welcome to Tribeca Dental Studio in Lower Manhattan. Everything you need to know before your first appointment: online intake forms, 3D scanning, digital X-rays, and multi-specialty care.";

  return {
    title,
    description,
    keywords: [
      "Your First Dental Visit NYC",
      "New Patient Dentist Tribeca",
      "First Visit Dentist Lower Manhattan",
      "Tribeca Dental Studio New Patient",
      "Painless Dental Exam NYC",
      "Sedation Options Tribeca Dentist",
    ],
    alternates: {
      canonical: `https://tribecadentalstudio.com/${lang}/your-first-visit`,
      languages: {
        en: "https://tribecadentalstudio.com/en/your-first-visit",
        es: "https://tribecadentalstudio.com/es/your-first-visit",
        zh: "https://tribecadentalstudio.com/zh/your-first-visit",
      },
    },
    openGraph: {
      title,
      description,
      url: `https://tribecadentalstudio.com/${lang}/your-first-visit`,
      siteName: "Tribeca Dental Studio",
      images: [
        {
          url: "https://tribecadentalstudio.com/about-studio.jpg",
          width: 1200,
          height: 630,
          alt: "Your First Visit at Tribeca Dental Studio NYC",
        },
      ],
      locale: isZh ? "zh_CN" : isEs ? "es_ES" : "en_US",
      type: "website",
    },
  };
}

export default async function YourFirstVisitPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang === "es" ? "es" : rawLang === "zh" ? "zh" : "en";
  const isEs = lang === "es";
  const isZh = lang === "zh";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Your First Visit - New Patient Guide",
    description: "Comprehensive preparation guide and timeline for new patients at Tribeca Dental Studio.",
    publisher: {
      "@type": "Dentist",
      name: "Tribeca Dental Studio",
      url: "https://tribecadentalstudio.com",
      telephone: "212-561-5303",
      address: {
        "@type": "PostalAddress",
        streetAddress: "54 Warren St",
        addressLocality: "New York",
        addressRegion: "NY",
        postalCode: "10007",
        addressCountry: "US",
      },
    },
  };

  return (
    <main className="bg-[#FCFCFC] text-black min-h-screen pt-32 pb-24 font-ddin">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-[#C5A059] mb-4">
              <Sparkles size={18} />
              <span className="text-xs uppercase tracking-[0.3em] font-bold">
                {isZh
                  ? "欢迎加入 Tribeca 大家庭"
                  : isEs
                  ? "Bienvenido a Tribeca Dental Studio"
                  : "Welcome to Our Practice"}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light uppercase tracking-tight mb-6 leading-tight">
              {isZh
                ? "您的首次就诊指南"
                : isEs
                ? "Su Primera Visita"
                : "Your First Visit"}
            </h1>
            <p className="font-brandon text-base md:text-lg text-neutral-600 mb-8 leading-relaxed">
              {isZh
                ? "衷心感谢您选择 Tribeca Dental Studio！我们致力于为您提供无缝、无痛且极其高定的诊疗体验。以下是您在首次就诊前需要了解的所有信息与准备事项。"
                : isEs
                ? "¡Estamos encantados de que haya elegido agendar con nosotros! Queremos compartir la información esencial y los recursos para que su primera cita sea una experiencia cómoda, fluida y sin estrés."
                : "Hello new patient! We’re delighted that you’ve chosen Tribeca Dental Studio. Below, you’ll find everything you need to know about preparing for your inaugural appointment, from paperwork to state-of-the-art 3D imaging."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${lang}/contact`}
                className="inline-flex items-center justify-center bg-black text-white hover:bg-[#C5A059] text-xs font-bold uppercase tracking-widest px-8 py-4 transition-colors duration-300"
              >
                <span>{isZh ? "立即预约门诊" : isEs ? "Reservar Cita" : "Schedule Your First Visit"}</span>
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <a
                href="tel:212-561-5303"
                className="inline-flex items-center gap-2 justify-center border border-black/20 hover:border-black text-xs font-bold uppercase tracking-widest px-8 py-4 transition-colors duration-300"
              >
                <Phone size={14} />
                <span>212-561-5303</span>
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] bg-neutral-900 overflow-hidden shadow-2xl">
            <Image
              src="/photo1.jpg"
              alt="Tribeca Dental Studio Luxury Environment"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
              <span className="text-white text-xs font-bold uppercase tracking-widest">
                {isZh ? "曼哈顿下城精品多专科中心" : isEs ? "Atención Multiespecializada en Lower Manhattan" : "Boutique Multi-Specialty Dental Care in Lower Manhattan"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE YOUR APPOINTMENT CHECKLIST */}
      <section className="bg-neutral-900 text-white py-20 px-6 md:px-12 lg:px-20 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-2">
              {isZh ? "诊前准备清单" : isEs ? "Preparación Previa" : "Pre-Appointment Checklist"}
            </span>
            <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight">
              {isZh ? "就诊前需完成事项" : isEs ? "Qué Hacer Antes de su Cita" : "What to Do Before Your Visit"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-neutral-800 p-8 bg-neutral-900/50">
              <FileText className="text-[#C5A059] mb-4" size={32} />
              <h3 className="text-xl font-bold uppercase tracking-wide mb-3">
                {isZh ? "1. 填写新患者表格" : isEs ? "1. Formularios de Ingreso" : "1. Intake Paperwork"}
              </h3>
              <p className="font-brandon text-sm text-neutral-400 leading-relaxed">
                {isZh
                  ? "建议在线完成新患者建档表格。如选择现场填写，请提前 15 分钟到达诊所。"
                  : isEs
                  ? "Complete sus formularios en línea para agilizar su ingreso, o llegue unos minutos antes para completarlos en recepción."
                  : "Fill out our online new patient paperwork prior to arrival, or arrive early to complete it in person at our front desk."}
              </p>
            </div>

            <div className="border border-neutral-800 p-8 bg-neutral-900/50">
              <ShieldCheck className="text-[#C5A059] mb-4" size={32} />
              <h3 className="text-xl font-bold uppercase tracking-wide mb-3">
                {isZh ? "2. 保险与身份证明" : isEs ? "2. Seguro y Documentación" : "2. ID & Insurance Cards"}
              </h3>
              <p className="font-brandon text-sm text-neutral-400 leading-relaxed">
                {isZh
                  ? "请携带有效的带照片身份证件（Photo ID），并将您的牙科保险卡正反面照片提前发至诊所或现场出示。"
                  : isEs
                  ? "Traiga su identificación oficial con foto e envíenos las imágenes de su tarjeta de seguro dental por correo o texto."
                  : "Bring your official photo ID and provide front/back images of your dental insurance card prior to or upon arrival."}
              </p>
            </div>

            <div className="border border-neutral-800 p-8 bg-neutral-900/50">
              <Clock className="text-[#C5A059] mb-4" size={32} />
              <h3 className="text-xl font-bold uppercase tracking-wide mb-3">
                {isZh ? "3. 确认短信与特殊需要" : isEs ? "3. Confirmación y Requerimientos" : "3. Confirmation & Special Care"}
              </h3>
              <p className="font-brandon text-sm text-neutral-400 leading-relaxed">
                {isZh
                  ? "请回复我们的提醒短信确认就诊。如需预服抗生素、特别心理疏导或舒适镇静方案，请在预约时告知。"
                  : isEs
                  ? "Responda a nuestro mensaje de texto de confirmación. Si requiere antibióticos previos o padece ansiedad dental, infórmenos con anticipación."
                  : "Respond to our confirmation text message. Inform us in advance if you require antibiotic premedication or sedation support."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT TIMELINE */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-2">
              {isZh ? "诊疗体验" : isEs ? "Durante su Visita" : "What to Expect"}
            </span>
            <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight mb-6">
              {isZh ? "首次就诊的标准流程" : isEs ? "Su Experiencia en la Clínica" : "Your First Examination Protocol"}
            </h2>
            <p className="font-brandon text-neutral-600 mb-8 leading-relaxed">
              {isZh
                ? "当您抵达时，我们热情的前台人员将为您办理签到。随后，护理人员将带您进入专属独立诊室，展开以下全面检查："
                : isEs
                ? "Nuestra recepcionista lo recibirá cordialmente. Luego, nuestro equipo lo acompañará a su suite privada para realizar:"
                : "Upon arrival, our front desk team will check you in. One of our clinical providers will then accompany you to your private suite for a thorough assessment:"}
            </p>

            <div className="space-y-6 font-brandon text-sm">
              <div className="flex gap-4">
                <Camera className="text-[#C5A059] shrink-0 mt-1" size={24} />
                <div>
                  <strong className="block text-black font-ddin text-base uppercase">1. Patient Photography</strong>
                  <p className="text-neutral-600">We capture a head-and-shoulders picture to personalize your chart (and track growth for pediatric patients).</p>
                </div>
              </div>
              <div className="flex gap-4">
                <FileText className="text-[#C5A059] shrink-0 mt-1" size={24} />
                <div>
                  <strong className="block text-black font-ddin text-base uppercase">2. Medical History Review</strong>
                  <p className="text-neutral-600">We thoroughly review your health background, sensitivities, and clinical goals together.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Scan className="text-[#C5A059] shrink-0 mt-1" size={24} />
                <div>
                  <strong className="block text-black font-ddin text-base uppercase">3. iTero® 3D Digital Scan</strong>
                  <p className="text-neutral-600">We record a high-precision, radiation-free 3D optical model of your teeth and occlusion.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="text-[#C5A059] shrink-0 mt-1" size={24} />
                <div>
                  <strong className="block text-black font-ddin text-base uppercase">4. Radiographs & Exam</strong>
                  <p className="text-neutral-600">We perform low-radiation digital X-rays followed by a comprehensive oral exam and professional cleaning.</p>
                </div>
              </div>
            </div>
          </div>

          {/* MULTI-SPECIALTY COLLABORATION BANNER */}
          <div className="bg-neutral-100 p-8 md:p-12 border border-neutral-200">
            <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold block mb-2">
              All Under One Roof
            </span>
            <h3 className="text-2xl font-light uppercase tracking-tight mb-6">
              {isZh ? "一站式多专科诊疗中心" : isEs ? "Atención Multiespecializada Integral" : "Seldom Need to Go Anywhere Else"}
            </h3>
            <p className="font-brandon text-neutral-600 text-sm leading-relaxed mb-6">
              {isZh
                ? "Tribeca Dental Studio 汇集了全科牙科、牙周病专科、牙体牙髓病专科、儿童齿科、口腔外科及气道正畸专家。这意味着无论是定期洁牙还是复杂种植，您都无需在多个诊所之间穿梭。"
                : isEs
                ? "Nuestro modelo de práctica multiespecializada significa que casi nunca necesitará ser referido fuera de nuestra clínica para ningún tratamiento dental."
                : "Our multidisciplinary structure unites general dentists, endodontists, periodontists, orthodontists, oral surgeons, and pediatric specialists in one collaborative Tribeca location."}
            </p>
            <ul className="space-y-3 font-brandon text-xs text-neutral-800">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#C5A059]" />
                <span>Pediatric & Adult Preventive Care</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#C5A059]" />
                <span>Sedation & Pain-Free Comfort Protocols</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#C5A059]" />
                <span>Microscope & Laser Enhanced Procedures</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-20 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-4">
            Tribeca Dental Studio
          </span>
          <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight mb-6">
            We Can't Wait to See You
          </h2>
          <p className="font-brandon text-neutral-400 mb-8 max-w-xl mx-auto leading-relaxed">
            Schedule your first appointment today and discover a higher standard of collaborative, comfortable dental care in Lower Manhattan.
          </p>
          <Link
            href={`/${lang}/contact`}
            className="inline-block bg-[#C5A059] hover:bg-white text-black text-xs font-bold uppercase tracking-widest px-10 py-4 transition-colors duration-300"
          >
            Book First Visit
          </Link>
        </div>
      </section>
    </main>
  );
}