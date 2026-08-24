import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Smile,
  Phone,
  Layers,
  Sparkle,
  Clock,
  HeartHandshake,
  HelpCircle,
  Stethoscope,
} from "lucide-react";
import { bookingUrl } from "@/hooks/helper";

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
    ? "纽约 Tribeca 修复牙科与种植牙 | Tribeca Dental Studio"
    : isEs
    ? "Odontología Restauradora en Tribeca, NYC | Implantes y Coronas | Tribeca Dental Studio"
    : "Restorative Dentistry in Tribeca, NYC | Implants, Crowns & LANAP | Tribeca Dental Studio";

  const description = isZh
    ? "纽约 Tribeca 高端修复牙科：提供牙科种植体、牙冠牙桥, LANAP 激光牙周治疗、根管治疗及全口活动/固定假牙。一站式专科会诊，恢复完美咀嚼与自信微笑。"
    : isEs
    ? "Odontología restauradora integral en Tribeca, NYC. Tratamientos con láser LANAP, implantes dentales, coronas, puentes y endodoncia. Sin necesidad de referencias externas."
    : "Comprehensive restorative dentistry in Tribeca, NYC. Expert dental implants, LANAP laser therapy, porcelain crowns, inlays/onlays, and root canals under one roof.";

  return {
    title,
    description,
    keywords: [
      "Restorative Dentistry Tribeca NYC",
      "Dental Implants Lower Manhattan",
      "LANAP Laser Gum Therapy Tribeca",
      "Porcelain Dental Crowns NYC",
      "Root Canal Treatment Tribeca",
      "Dentures Dentist Lower Manhattan",
      "Restorative Dentist NYC",
    ],
    alternates: {
      canonical: `https://tribecadentalstudio.com/${lang}/restorative-dentistry`,
      languages: {
        en: "https://tribecadentalstudio.com/en/restorative-dentistry",
        es: "https://tribecadentalstudio.com/es/restorative-dentistry",
        zh: "https://tribecadentalstudio.com/zh/restorative-dentistry",
      },
    },
    openGraph: {
      title,
      description,
      url: `https://tribecadentalstudio.com/${lang}/restorative-dentistry`,
      siteName: "Tribeca Dental Studio",
      images: [
        {
          url: "https://tribecadentalstudio.com/about-studio.jpg",
          width: 1200,
          height: 630,
          alt: "Restorative Dentistry at Tribeca Dental Studio NYC",
        },
      ],
      locale: isZh ? "zh_CN" : isEs ? "es_ES" : "en_US",
      type: "website",
    },
  };
}

export default async function RestorativeDentistryPage({
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
      question: "Is restorative dentistry painful?",
      answer:
        "Modern dental techniques, local anesthesia, and sedation options ensure that restorative procedures are performed with minimal to no discomfort. Patient comfort is our highest priority at Tribeca Dental Studio.",
    },
    {
      question: "How long will my dental restoration last?",
      answer:
        "The longevity of a restoration depends on the procedure type and your oral hygiene habits. With proper care, fillings can last for many years, while crowns, bridges, and dental implants can last for decades or even a lifetime.",
    },
    {
      question: "Will my restoration look natural?",
      answer:
        "Yes. We utilize high-quality, tooth-colored materials such as porcelain and composite resin that are meticulously custom-matched to your surrounding teeth for a seamless, natural appearance.",
    },
    {
      question: "Does dental insurance cover restorative dentistry?",
      answer:
        "Most dental insurance plans provide coverage for restorative procedures because they are medically necessary for your health and function. Our administrative team will help you verify and maximize your benefits.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        name: "Restorative Dentistry in Tribeca, NYC",
        description:
          "Advanced restorative dental care at Tribeca Dental Studio including implants, LANAP, crowns, root canals, and dentures.",
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

  const services = [
    {
      title: "LANAP® Laser Therapy",
      tag: "Periodontal Care",
      desc: "A cutting-edge, minimally invasive laser procedure that targets deep gum infection with surgical precision, promoting bone re-growth and tissue regeneration without scalpels or sutures.",
      href: `/${lang}/services/lanap-laser-gum-treatment`,
    },
    {
      title: "Dental Fillings",
      tag: "Conservative Care",
      desc: "Composite, metal-free tooth-colored resin restorations engineered to repair minor decay and fractures while blending invisibly with your natural enamel.",
      href: `/${lang}/services/tooth-colored-fillings`,
    },
    {
      title: "Inlays & Onlays",
      tag: "Partial Crowns",
      desc: "Custom porcelain laboratory restorations designed for substantial decay or structural damage when a full crown is unnecessary, preserving maximum natural tooth structure.",
      href: `/${lang}/services/inlays-onlays`,
    },
    {
      title: "Root Canal Therapy",
      tag: "Endodontic Care",
      desc: "Microscope-enhanced therapy designed to eliminate deep pulp infections, relieve severe toothaches, and permanently save compromised teeth from extraction.",
      href: `/${lang}/services/root-canal-treatment`,
    },
    {
      title: "Dental Implants",
      tag: "Permanent Tooth Replacement",
      desc: "The gold-standard titanium root replacement for missing teeth, restoring full bite strength, preventing jawbone resorption, and supporting crowns or bridges.",
      href: `https://implants.tribecadentalstudio.com/${lang}`,
    },
    {
      title: "Crowns & Bridges",
      tag: "Structural Restorations",
      desc: "Custom-milled ceramic crowns and anchored prosthetic bridges engineered to rebuild strength, form, and aesthetics for severely damaged or missing teeth.",
      href: `/${lang}/services/dental-crowns-bridges`,
    },
    {
      title: "Custom Dentures",
      tag: "Full & Partial Prosthetics",
      desc: "Modern, secure partial or full dentures crafted for optimal comfort, facial support, and natural appearance, available as traditional or implant-retained options.",
      href: `/${lang}/services/dentures`,
    },
  ];

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
                  ? "功能与美学全面重塑"
                  : isEs
                  ? "Restauración Funcional y Estética"
                  : "Comprehensive Functional Reconstruction"}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light uppercase tracking-tight mb-6 leading-tight">
              {isZh
                ? "纽约 Tribeca 修复牙科"
                : isEs
                ? "Odontología Restauradora en Tribeca"
                : "Restorative Dentistry in Tribeca, NYC"}
            </h1>
            <p className="font-brandon text-base md:text-lg text-neutral-600 mb-8 leading-relaxed">
              {isZh
                ? "当牙齿受损、龋坏或缺失时，不仅影响进食与语言，更会损害面部轮廓与个人自信。Tribeca Dental Studio 结合专科医生团队与前沿科技，为您量身定制全方位修复方案。"
                : isEs
                ? "Restauramos la función, salud y belleza natural de su boca con tratamientos avanzados. Desde empastes estéticos hasta implantes y terapia láser LANAP en Lower Manhattan."
                : "At Tribeca Dental Studio, we offer specialized restorative dentistry in Lower Manhattan to repair damaged teeth, replace missing structure, and restore optimal biting function and aesthetic harmony."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                                    href={bookingUrl}
                className="inline-flex items-center justify-center bg-black text-white hover:bg-[#C5A059] text-xs font-bold uppercase tracking-widest px-8 py-4 transition-colors duration-300"
              >
                <span>{isZh ? "预约修复评估" : isEs ? "Reservar Consulta" : "Schedule Restorative Consultation"}</span>
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
              src="/services/restorative.webp"
              alt="Restorative Dentistry at Tribeca Dental Studio"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
              <span className="text-white text-xs font-bold uppercase tracking-widest">
                {isZh ? "多专科协同会诊 · 无需外转" : isEs ? "Atención Multiespecializada en un Solo Lugar" : "Multi-Specialty Care Under One Roof"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS RESTORATIVE DENTISTRY SECTION */}
      <section className="bg-neutral-900 text-white py-20 px-6 md:px-12 lg:px-20 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <Layers className="text-[#C5A059] mb-4" size={40} />
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-2">
                Preserving & Rebuilding
              </span>
              <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight mb-6">
                {isZh ? "什么是修复牙科学？" : isEs ? "¿Qué es la Odontología Restauradora?" : "What Is Restorative Dentistry?"}
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="font-brandon text-base text-neutral-300 leading-relaxed mb-6">
                Restorative dentistry focuses on diagnosing, preventing, and repairing diseases or trauma affecting the teeth and supporting periodontium. Its primary objective is to restore chewing functionality, preserve natural bone, and rebuild aesthetic balance using biocompatible materials.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-brandon text-xs text-neutral-400">
                <div className="flex items-center gap-2 border border-neutral-800 p-3">
                  <CheckCircle2 size={16} className="text-[#C5A059]" />
                  <span>Eliminates decay & infection pain</span>
                </div>
                <div className="flex items-center gap-2 border border-neutral-800 p-3">
                  <CheckCircle2 size={16} className="text-[#C5A059]" />
                  <span>Prevents jawbone deterioration</span>
                </div>
                <div className="flex items-center gap-2 border border-neutral-800 p-3">
                  <CheckCircle2 size={16} className="text-[#C5A059]" />
                  <span>Restores proper chewing efficiency</span>
                </div>
                <div className="flex items-center gap-2 border border-neutral-800 p-3">
                  <CheckCircle2 size={16} className="text-[#C5A059]" />
                  <span>Maintains bite and facial structure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FULL SERVICES MENU */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-2">
            Comprehensive Offerings
          </span>
          <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight mb-4">
            Restorative Services at Tribeca Dental Studio
          </h2>
          <p className="font-brandon text-neutral-600 text-sm md:text-base">
            Utilizing state-of-the-art 3D digital scanners, microscopes, and laser technology for durable, lifelike results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className="bg-white border border-neutral-200 p-8 shadow-xs hover:border-[#C5A059] transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold block mb-2">
                  {svc.tag}
                </span>
                <h3 className="text-2xl font-light uppercase tracking-tight mb-4">{svc.title}</h3>
                <p className="font-brandon text-sm text-neutral-600 leading-relaxed mb-6">
                  {svc.desc}
                </p>
              </div>
              <Link
                href={svc.href}
                className="pt-4 border-t border-neutral-100 inline-flex items-center justify-between text-xs font-bold uppercase tracking-widest text-black hover:text-[#C5A059] transition-colors"
              >
                <span>Learn More</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US & CLINICAL EXCELLENCE */}
      <section className="bg-neutral-100 border-y border-neutral-200 py-20 px-6 md:px-12 lg:px-20 mb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-2">
              The Tribeca Advantage
            </span>
            <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight mb-6">
              Why Choose Us For Restorative Care?
            </h2>
            <p className="font-brandon text-neutral-600 mb-8 leading-relaxed">
              Restorative dentistry requires seamless collaboration across multiple disciplines. Instead of referring you to external providers for implants, root canals, or gum therapy, our board-certified periodontists, endodontists, and prosthodontists treat you right here under one roof.
            </p>

            <div className="space-y-4 font-brandon text-sm">
              <div className="flex gap-4">
                <ShieldCheck className="text-[#C5A059] shrink-0 mt-1" size={24} />
                <div>
                  <strong className="block text-black font-ddin text-base uppercase">Microscope & Laser Enhanced Precision</strong>
                  <p className="text-neutral-600">We utilize Fotona/Biolase lasers and Zumax® endodontic microscopes for ultimate structural accuracy.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <HeartHandshake className="text-[#C5A059] shrink-0 mt-1" size={24} />
                <div>
                  <strong className="block text-black font-ddin text-base uppercase">Biocompatible & Metal-Free Materials</strong>
                  <p className="text-neutral-600">All restorations are engineered from hypoallergenic porcelain and composite resins free of toxins or mercury.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black text-white p-8 md:p-12 shadow-xl">
            <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold block mb-2">
              Financial Options
            </span>
            <h3 className="text-2xl font-light uppercase tracking-tight mb-6">
              Insurance & Payment Plans
            </h3>
            <p className="font-brandon text-neutral-300 text-sm leading-relaxed mb-6">
              Restorative procedures are medically necessary, and most PPO plans provide partial or full coverage. We process all out-of-network claims on your behalf and partner with Cherry and CareCredit for flexible 0% interest monthly payments.
            </p>
            <Link
              href={`/${lang}/insurance-dental-plans-financing`}
              className="inline-block border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-black text-xs font-bold uppercase tracking-widest px-8 py-4 transition-colors duration-300"
            >
              Explore Financial Options
            </Link>
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
            Common Restorative Questions
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
            Reclaim Your Function & Smile
          </h2>
          <p className="font-brandon text-neutral-400 mb-8 max-w-xl mx-auto leading-relaxed">
            Don’t let missing, cracked, or painful teeth dictate your life. Schedule your personalized restorative consultation today.
          </p>
          <Link
            href={bookingUrl}
            className="inline-block bg-[#C5A059] hover:bg-white text-black text-xs font-bold uppercase tracking-widest px-10 py-4 transition-colors duration-300"
          >
            Book Restorative Evaluation
          </Link>
        </div>
      </section>
    </main>
  );
}