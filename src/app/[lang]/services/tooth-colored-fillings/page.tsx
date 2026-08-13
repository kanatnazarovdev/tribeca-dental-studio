import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Phone,
  Layers,
  HelpCircle,
  Clock,
  AlertCircle,
} from "lucide-react";

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
    ? "纽约 Tribeca 树脂补牙与牙齿微创修复 | Tribeca Dental Studio"
    : isEs
    ? "Empastes Dentales de Resina en Tribeca, NYC | Tribeca Dental Studio"
    : "Dental Fillings in Tribeca, NYC | Tooth-Colored & Laser Fillings";

  const description = isZh
    ? "纽约 Tribeca 高端美学树脂补牙：采用无毒、不含BPA的复合材料与Er:YAG激光微创去龋，完美还原自然牙色。提供同日急诊补牙服务。"
    : isEs
    ? "Empastes de composite estéticos y del mismo color del diente en Tribeca, NYC. Restauraciones conservadoras sin metal, libres de BPA y citas de emergencia el mismo día."
    : "Expert tooth-colored composite fillings in Tribeca, NYC. Metal-free, BPA-free restorative care utilizing advanced laser technology and same-day emergency availability.";

  return {
    title,
    description,
    keywords: [
      "Dental Fillings Tribeca NYC",
      "Tooth-Colored Composite Fillings Manhattan",
      "BPA Free Fillings Tribeca",
      "Emergency Dental Fillings NYC",
      "Laser Cavity Treatment Tribeca Dental Studio",
      "White Fillings Lower Manhattan",
    ],
    alternates: {
      canonical: `https://tribecadentalstudio.com/${lang}/services/dental-fillings`,
      languages: {
        en: "https://tribecadentalstudio.com/en/services/dental-fillings",
        es: "https://tribecadentalstudio.com/es/services/dental-fillings",
        zh: "https://tribecadentalstudio.com/zh/services/dental-fillings",
      },
    },
    openGraph: {
      title,
      description,
      url: `https://tribecadentalstudio.com/${lang}/services/dental-fillings`,
      siteName: "Tribeca Dental Studio",
      images: [
        {
          url: "https://tribecadentalstudio.com/about-studio.jpg",
          width: 1200,
          height: 630,
          alt: "Dental Fillings at Tribeca Dental Studio NYC",
        },
      ],
      locale: isZh ? "zh_CN" : isEs ? "es_ES" : "en_US",
      type: "website",
    },
  };
}

export default async function DentalFillingsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang === "es" ? "es" : rawLang === "zh" ? "zh" : "en";
  const isEs = lang === "es";
  const isZh = lang === "zh";

  const faqs = [
    {
      question: "Are dental fillings painful?",
      answer:
        "No. Getting a dental filling at Tribeca Dental Studio is a comfortable, straightforward process. We use a local anesthetic to ensure the area is completely numbed so you feel no discomfort during decay removal and placement.",
    },
    {
      question: "How long do tooth-colored composite fillings last?",
      answer:
        "With excellent oral hygiene, routine dental check-ups, and a healthy bite, composite resin fillings typically last 7 to 10 years or longer. Avoiding hard foods like ice or hard candies helps extend their lifespan.",
    },
    {
      question: "Will my tooth-colored filling look natural?",
      answer:
        "Absolutely. Composite resin fillings are custom-shaded to match the exact color, texture, and translucency of your natural enamel, making them virtually invisible to anyone—even you.",
    },
    {
      question: "Does dental insurance cover dental fillings?",
      answer:
        "Most PPO dental insurance plans cover a significant portion of restorative fillings because they are classified as medically necessary treatments. Our team verifies your benefits and handles out-of-network claims for you.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        name: "Dental Fillings in Tribeca, NYC",
        description:
          "Tooth-colored composite and laser-assisted dental fillings at Tribeca Dental Studio in Lower Manhattan.",
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
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="bg-[#FCFCFC] text-black min-h-screen pt-32 pb-24 font-ddin">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-[#C5A059] mb-4">
              <Sparkles size={18} />
              <span className="text-xs uppercase tracking-[0.3em] font-bold">
                {isZh
                  ? "微创美学修复与龋齿阻断"
                  : isEs
                  ? "Restauración Conservadora y Estética"
                  : "Conservative Enamel Preservation"}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light uppercase tracking-tight mb-6 leading-tight">
              {isZh
                ? "纽约 Tribeca 树脂补牙"
                : isEs
                ? "Empastes Dentales en Tribeca"
                : "Dental Fillings in Tribeca, NYC"}
            </h1>
            <p className="font-brandon text-base md:text-lg text-neutral-600 mb-8 leading-relaxed">
              {isZh
                ? "龋齿是最常见的口腔问题之一。Tribeca Dental Studio 采用全瓷化复合树脂材料，完美贴合您的牙釉质天然色泽，实现无金属、无毒且几乎隐形的坚固修复。"
                : isEs
                ? "Los empastes del color del diente han reemplazado prácticamente a las amalgamas de plata. En Tribeca Dental Studio ofrecemos restauraciones estéticas, seguras y libres de BPA."
                : "Cavities are among the most common dental issues. We proudly offer advanced tooth-colored composite fillings in NYC, delivering superior aesthetics, conservative tooth preparation, and mercury-free safety."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${lang}/contact`}
                className="inline-flex items-center justify-center bg-black text-white hover:bg-[#C5A059] text-xs font-bold uppercase tracking-widest px-8 py-4 transition-colors duration-300"
              >
                <span>{isZh ? "预约补牙检查" : isEs ? "Reservar Cita de Evaluación" : "Schedule Filling Consultation"}</span>
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
              src="/services/tooth-filling.webp"
              alt="Dental Fillings at Tribeca Dental Studio NYC"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
              <span className="text-white text-xs font-bold uppercase tracking-widest">
                {isZh ? "同日急诊补牙服务 · 保护天然牙齿" : isEs ? "Disponibilidad de Urgencias el Mismo Día" : "Same-Day Emergency Appointments Available"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS A DENTAL FILLING & WHY IT MATTERS */}
      <section className="bg-neutral-900 text-white py-20 px-6 md:px-12 lg:px-20 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <Layers className="text-[#C5A059] mb-4" size={40} />
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-2">
                Stopping Decay Early
              </span>
              <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight mb-6">
                {isZh ? "为什么及时补牙至关重要？" : isEs ? "¿Por Qué Son Importantes?" : "Why Are Dental Fillings Important?"}
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="font-brandon text-base text-neutral-300 leading-relaxed mb-6">
                A dental filling repairs teeth affected by decay, small fractures, or wear. By cleaning out bacteria and sealing the tooth, you accomplish multiple critical objectives:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-brandon text-xs text-neutral-400">
                <div className="flex items-center gap-2 border border-neutral-800 p-3">
                  <CheckCircle2 size={16} className="text-[#C5A059]" />
                  <span>Stops bacterial decay progression</span>
                </div>
                <div className="flex items-center gap-2 border border-neutral-800 p-3">
                  <CheckCircle2 size={16} className="text-[#C5A059]" />
                  <span>Reinforces structural strength</span>
                </div>
                <div className="flex items-center gap-2 border border-neutral-800 p-3">
                  <CheckCircle2 size={16} className="text-[#C5A059]" />
                  <span>Relieves and prevents tooth pain</span>
                </div>
                <div className="flex items-center gap-2 border border-neutral-800 p-3">
                  <CheckCircle2 size={16} className="text-[#C5A059]" />
                  <span>Avoids costly root canal therapy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPOSITE VS AMALGAM & LASER TECH */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-2">
            Superior Materials
          </span>
          <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight mb-4">
            Tooth-Colored Composite vs. Traditional Silver
          </h2>
          <p className="font-brandon text-neutral-600 text-sm md:text-base">
            We exclusively favor modern, mercury-free composite resins bonded directly to your enamel for maximum preservation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 md:p-12 border border-neutral-200">
            <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold block mb-2">
              Our Gold Standard
            </span>
            <h3 className="text-2xl font-light uppercase tracking-tight mb-4">Composite (Tooth-Colored) Fillings</h3>
            <p className="font-brandon text-sm text-neutral-600 leading-relaxed mb-6">
              Made of fine glass particles and acrylic resin, composite fillings chemical-bond directly to your tooth structure. This requires less drilling, avoids thermal expansion fractures associated with metal, and leaves your smile completely invisible.
            </p>
            <ul className="space-y-2 font-brandon text-xs text-neutral-800">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#C5A059]" />
                <span>100% Mercury-free, BPA-free, and non-toxic</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#C5A059]" />
                <span>Conservative preparation preserves healthy enamel</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 md:p-12 border border-neutral-200">
            <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold block mb-2">
              Advanced Technology
            </span>
            <h3 className="text-2xl font-light uppercase tracking-tight mb-4">Er:YAG Laser-Assisted Fillings</h3>
            <p className="font-brandon text-sm text-neutral-600 leading-relaxed mb-6">
              For qualifying cavities, we can perform conservative composite restorations using specialized dental lasers. The Er:YAG laser removes decay with extreme precision, disinfects the cavity space simultaneously, and prepares the enamel for superior bonding with minimal vibration.
            </p>
            <ul className="space-y-2 font-brandon text-xs text-neutral-800">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#C5A059]" />
                <span>Drastically reduced drilling and discomfort</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#C5A059]" />
                <span>Laser sterilization improves bonding strength</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SAME-DAY EMERGENCY FILLINGS BANNER */}
      <section className="bg-neutral-100 border-y border-neutral-200 py-16 px-6 md:px-12 lg:px-20 mb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <AlertCircle className="text-[#C5A059] mb-4" size={40} />
            <span className="text-xs uppercase tracking-widest font-bold text-[#C5A059] block mb-2">
              Urgent Relief
            </span>
            <h3 className="text-3xl font-light uppercase tracking-tight mb-6">
              Same-Day Emergency Fillings in Tribeca
            </h3>
            <p className="font-brandon text-neutral-600 text-sm leading-relaxed mb-6">
              A broken filling, lost restoration, or sharp throbbing pain cannot wait. Our Lower Manhattan practice keeps dedicated daily time slots open for emergency care to provide immediate protection and relief.
            </p>
            <div className="space-y-2 font-brandon text-xs text-neutral-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#C5A059]" />
                <span>Sudden toothaches & sensitivity</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#C5A059]" />
                <span>Chipped, cracked, or lost fillings</span>
              </div>
            </div>
          </div>

          <div className="bg-black text-white p-8 md:p-12">
            <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold block mb-2">
              Immediate Assistance
            </span>
            <h4 className="text-2xl font-light uppercase mb-4">Experiencing Tooth Discomfort?</h4>
            <p className="font-brandon text-sm text-neutral-300 leading-relaxed mb-6">
              Don't let a compromised filling allow bacteria to seep deeper into your root canals. Call our office right away for prompt scheduling.
            </p>
            <a
              href="tel:212-561-5303"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C5A059] hover:text-white transition-colors"
            >
              <Phone size={14} />
              <span>Call 212-561-5303 for Emergency Care</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ SECTION (AEO & SEO OPTIMIZED) */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 mb-20">
        <div className="text-center mb-12">
          <HelpCircle size={36} className="text-[#C5A059] mx-auto mb-2" />
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-2">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight">
            Dental Fillings FAQ
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-neutral-200 p-6 md:p-8">
              <h3 className="text-xl font-light uppercase tracking-tight mb-3 text-black font-ddin">
                {faq.question}
              </h3>
              <p className="font-brandon text-sm text-neutral-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-20 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-4">
            Tribeca Dental Studio
          </span>
          <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight mb-6">
            Protect Your Smile Today
          </h2>
          <p className="font-brandon text-neutral-400 mb-8 max-w-xl mx-auto leading-relaxed">
            Whether you notice sensitivity, a dark spot, or require an old amalgam replacement, our expert team in Lower Manhattan is ready to assist.
          </p>
          <Link
            href={`/${lang}/contact`}
            className="inline-block bg-[#C5A059] hover:bg-white text-black text-xs font-bold uppercase tracking-widest px-10 py-4 transition-colors duration-300"
          >
            Book Filling Appointment
          </Link>
        </div>
      </section>
    </main>
  );
}