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
    ? "纽约 Tribeca 传统牙齿矫正与金属/陶瓷牙套 | Tribeca Dental Studio"
    : isEs
    ? "Frenos Tradicionales en Tribeca, NYC | Metálicos y Cerámicos | Tribeca Dental Studio"
    : "Traditional Braces in Tribeca, NYC | Metal & Ceramic | Tribeca Dental Studio";

  const description = isZh
    ? "纽约 Tribeca 专科级传统牙齿矫正：提供儿童一期干预、青少年与成人金属及陶瓷牙套。一站式多专科诊疗，接受保险与灵活分期付款。"
    : isEs
    ? "Ortodoncia tradicional con frenos metálicos y cerámicos en Tribeca, NYC. Tratamientos para niños, adolescentes y adultos sin necesidad de referencias."
    : "Traditional metal & ceramic braces in Tribeca, NYC for kids, teens, and adults. Comprehensive orthodontic care with no referrals needed. PPO & financing accepted.";

  return {
    title,
    description,
    keywords: [
      "Traditional Braces Tribeca NYC",
      "Metal Braces Lower Manhattan",
      "Ceramic Braces Tribeca Dentist",
      "Adult Braces NYC",
      "Phase 1 Pediatric Orthodontics Tribeca",
      "Orthodontist Lower Manhattan",
      "CareCredit Braces NYC",
    ],
    alternates: {
      canonical: `https://tribecadentalstudio.com/${lang}/traditional-braces`,
      languages: {
        en: "https://tribecadentalstudio.com/en/traditional-braces",
        es: "https://tribecadentalstudio.com/es/traditional-braces",
        zh: "https://tribecadentalstudio.com/zh/traditional-braces",
      },
    },
    openGraph: {
      title,
      description,
      url: `https://tribecadentalstudio.com/${lang}/traditional-braces`,
      siteName: "Tribeca Dental Studio",
      images: [
        {
          url: "https://tribecadentalstudio.com/about-studio.jpg",
          width: 1200,
          height: 630,
          alt: "Traditional Braces at Tribeca Dental Studio NYC",
        },
      ],
      locale: isZh ? "zh_CN" : isEs ? "es_ES" : "en_US",
      type: "website",
    },
  };
}

export default async function TraditionalBracesPage({
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
    "@graph": [
      {
        "@type": "MedicalWebPage",
        name: "Traditional Braces in Tribeca, NYC",
        description:
          "Comprehensive guide to traditional metal and ceramic orthodontic braces for children, teens, and adults at Tribeca Dental Studio.",
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
        "@type": "MedicalProcedure",
        name: "Traditional Orthodontic Braces Treatment",
        procedureType: "Orthodontic",
        description:
          "Application of metal or ceramic brackets, archwires, and elastics to realign teeth and correct bite discrepancies across all ages.",
        bodyLocation: "Mouth / Teeth",
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
                  ? "专科级正畸与咬合矫正"
                  : isEs
                  ? "Ortodoncia Especializada"
                  : "Proven Orthodontic Precision"}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light uppercase tracking-tight mb-6 leading-tight">
              {isZh
                ? "纽约 Tribeca 传统牙齿矫正"
                : isEs
                ? "Frenos Tradicionales en Tribeca"
                : "Traditional Braces in Tribeca, NYC"}
            </h1>
            <p className="font-brandon text-base md:text-lg text-neutral-600 mb-8 leading-relaxed">
              {isZh
                ? "传统牙套依然是当今最经典且高性价比的正畸方案。无论针对儿童、青少年还是成人，其耐用与精准的特性均能带来卓越的排齐效果。Tribeca Dental Studio 提供一站式专科正畸体验。"
                : isEs
                ? "Los frenos tradicionales siguen siendo el tratamiento de ortodoncia más confiable y accesible. Tribeca Dental Studio ofrece frenos metálicos y cerámicos para niños, adolescentes y adultos."
                : "Traditional braces remain the gold standard for reliable, complex orthodontic alignment. Tribeca Dental Studio offers state-of-the-art metal and aesthetic ceramic braces for children, teens, and adults in Lower Manhattan."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                                    href={bookingUrl}
                className="inline-flex items-center justify-center bg-black text-white hover:bg-[#C5A059] text-xs font-bold uppercase tracking-widest px-8 py-4 transition-colors duration-300"
              >
                <span>{isZh ? "预约正畸评估" : isEs ? "Reservar Evaluación" : "Schedule Consultation"}</span>
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
              src="/services/braces.webp"
              alt="Traditional Braces Orthodontics at Tribeca Dental Studio"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
              <span className="text-white text-xs font-bold uppercase tracking-widest">
                {isZh ? "无需转诊 · 一站式专科联合会诊" : isEs ? "Atención Multiespecializada Sin Referencias" : "No External Referrals Needed · All Care Under One Roof"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* HOW BRACES WORK SECTION */}
      <section className="bg-neutral-900 text-white py-20 px-6 md:px-12 lg:px-20 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <Layers className="text-[#C5A059] mb-4" size={40} />
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-2">
                Biomechanical Precision
              </span>
              <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight mb-6">
                {isZh ? "传统牙套的运作原理" : isEs ? "¿Cómo Funcionan los Frenos?" : "How Do Traditional Braces Work?"}
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="font-brandon text-base text-neutral-300 leading-relaxed mb-6">
                Traditional braces apply continuous, gentle pressure to guide teeth into ideal physiological alignment over time. Every component works in precise harmony:
              </p>
              <div className="space-y-4 font-brandon text-sm text-neutral-400">
                <div className="flex items-start gap-3 border-b border-neutral-800 pb-3">
                  <CheckCircle2 size={18} className="text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-ddin uppercase block">Brackets</strong>
                    Carefully bonded directly to the front surface of each individual tooth.
                  </div>
                </div>
                <div className="flex items-start gap-3 border-b border-neutral-800 pb-3">
                  <CheckCircle2 size={18} className="text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-ddin uppercase block">Archwires</strong>
                    Connect the brackets to generate the steady, calibrated forces necessary for movement.
                  </div>
                </div>
                <div className="flex items-start gap-3 border-b border-neutral-800 pb-3">
                  <CheckCircle2 size={18} className="text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-ddin uppercase block">Elastic Ligatures & Bands</strong>
                    Control the vector of tooth movement and correct complex bite discrepancies.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE STAGES / PHASES OF BRACES */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-2">
            Tailored Timeline
          </span>
          <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight mb-4">
            {isZh ? "牙齿矫正的三大阶段" : isEs ? "Las Etapas de la Ortodoncia" : "The Stages of Orthodontic Treatment"}
          </h2>
          <p className="font-brandon text-neutral-600 text-sm md:text-base">
            Braces aren’t just for teenagers! We customize treatment strategies tailored across key developmental milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-neutral-200 p-8 shadow-xs hover:border-[#C5A059] transition-colors flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold block mb-2">
                Ages 6 to 9
              </span>
              <h3 className="text-2xl font-light uppercase tracking-tight mb-4">Phase 1 Early Intervention</h3>
              <p className="font-brandon text-sm text-neutral-600 leading-relaxed mb-6">
                Designed for younger children to guide early jaw development, correct severe bite issues, and simplify adolescent treatment later in life. Integrated directly alongside our pediatric dental team.
              </p>
            </div>
            <div className="pt-4 border-t border-neutral-100 text-xs font-bold uppercase tracking-widest text-black">
              Early Jaw Alignment
            </div>
          </div>

          <div className="bg-white border border-neutral-200 p-8 shadow-xs hover:border-[#C5A059] transition-colors flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold block mb-2">
                Adolescent Care
              </span>
              <h3 className="text-2xl font-light uppercase tracking-tight mb-4">Phase 2 Comprehensive</h3>
              <p className="font-brandon text-sm text-neutral-600 leading-relaxed mb-6">
                The classic teenage orthodontic journey. Corrects crooked permanent teeth, crowded arches, overbites, and underbites for a lifetime of confidence.
              </p>
            </div>
            <div className="pt-4 border-t border-neutral-100 text-xs font-bold uppercase tracking-widest text-black">
              Comprehensive Alignment
            </div>
          </div>

          <div className="bg-white border border-neutral-200 p-8 shadow-xs hover:border-[#C5A059] transition-colors flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold block mb-2">
                Adult Orthodontics
              </span>
              <h3 className="text-2xl font-light uppercase tracking-tight mb-4">Adult Braces</h3>
              <p className="font-brandon text-sm text-neutral-600 leading-relaxed mb-6">
                Increasingly popular for adults correcting past relapse, narrow palates, TMJ strain, or trauma. Modern, sleek designs ensure discreet, comfortable progress.
              </p>
            </div>
            <div className="pt-4 border-t border-neutral-100 text-xs font-bold uppercase tracking-widest text-black">
              Discreet & Precise
            </div>
          </div>
        </div>
      </section>

      {/* TYPES OF MATERIALS: METAL VS CERAMIC */}
      <section className="bg-neutral-100 border-y border-neutral-200 py-20 px-6 md:px-12 lg:px-20 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-2">
              Advanced Materials
            </span>
            <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight mb-4">
              Metal & Aesthetic Ceramic Options
            </h2>
            <p className="font-brandon text-neutral-600 text-sm md:text-base">
              Crafted from biocompatible, medical-grade materials engineered for durability and maximum comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 md:p-12 border border-neutral-200">
              <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold block mb-2">
                High-Strength Reliability
              </span>
              <h3 className="text-2xl font-light uppercase tracking-tight mb-4">High-Grade Metal Braces</h3>
              <p className="font-brandon text-sm text-neutral-600 leading-relaxed mb-6">
                Constructed from surgical stainless steel or titanium alloys. Highly durable and exceptionally effective at managing even the most complex bite or crowding challenges. Younger patients can customize elastic ties with fun colors!
              </p>
              <ul className="space-y-2 font-brandon text-xs text-neutral-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#C5A059]" />
                  <span>Maximum durability for complex cases</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#C5A059]" />
                  <span>Cost-effective orthodontic solution</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 md:p-12 border border-neutral-200">
              <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold block mb-2">
                Low-Visibility Aesthetic Choice
              </span>
              <h3 className="text-2xl font-light uppercase tracking-tight mb-4">Clear Ceramic Braces</h3>
              <p className="font-brandon text-sm text-neutral-600 leading-relaxed mb-6">
                Function identically to metal braces, but utilize brackets made from translucent or tooth-colored ceramic materials. Blends seamlessly with natural enamel for adults and teens seeking discretion.
              </p>
              <ul className="space-y-2 font-brandon text-xs text-neutral-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#C5A059]" />
                  <span>Subtle, tooth-colored appearance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#C5A059]" />
                  <span>Stain-resistant aesthetic ceramic</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US & ALL UNDER ONE ROOF */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-2">
              The Tribeca Advantage
            </span>
            <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight mb-6">
              Why Choose Tribeca Dental Studio?
            </h2>
            <p className="font-brandon text-neutral-600 mb-8 leading-relaxed">
              Anyone who has had to bounce between two or three separate offices for x-rays, pediatric care, and orthodontics appreciates the immense value of having all specialty care consolidated under one roof in Lower Manhattan.
            </p>

            <div className="space-y-4 font-brandon text-sm">
              <div className="flex gap-4">
                <ShieldCheck className="text-[#C5A059] shrink-0 mt-1" size={24} />
                <div>
                  <strong className="block text-black font-ddin text-base uppercase">Board-Certified Specialists</strong>
                  <p className="text-neutral-600">Experienced orthodontists with advanced training in growth & biomechanics.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <HeartHandshake className="text-[#C5A059] shrink-0 mt-1" size={24} />
                <div>
                  <strong className="block text-black font-ddin text-base uppercase">Seamless Collaboration</strong>
                  <p className="text-neutral-600">Direct integration with pediatric dentists, hygienists, and oral surgeons.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="text-[#C5A059] shrink-0 mt-1" size={24} />
                <div>
                  <strong className="block text-black font-ddin text-base uppercase">Extended Office Hours</strong>
                  <p className="text-neutral-600">Flexible early morning and evening appointments fitting busy NYC schedules.</p>
                </div>
              </div>
            </div>
          </div>

          {/* FINANCING & INSURANCE BANNER */}
          <div className="bg-black text-white p-8 md:p-12 shadow-xl">
            <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold block mb-2">
              Financial Arrangements
            </span>
            <h3 className="text-2xl font-light uppercase tracking-tight mb-6">
              Paying For Braces in NYC
            </h3>
            <p className="font-brandon text-neutral-300 text-sm leading-relaxed mb-6">
              We believe financial barriers should never stand between you and a healthy, functional smile. We work with PPO insurance providers to maximize your orthodontic benefits.
            </p>
            <div className="space-y-3 font-brandon text-xs text-neutral-200 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#C5A059]" />
                <span>PPO Insurance Out-of-Network Processing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#C5A059]" />
                <span>CareCredit Healthcare Financing Options</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#C5A059]" />
                <span>LendingPoint Customized Monthly Payments</span>
              </div>
            </div>
            <Link
              href={`/${lang}/insurance-dental-plans-financing`}
              className="inline-block border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-black text-xs font-bold uppercase tracking-widest px-8 py-4 transition-colors duration-300"
            >
              Explore Financing Details
            </Link>
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
            Start Your Smile Journey
          </h2>
          <p className="font-brandon text-neutral-400 mb-8 max-w-xl mx-auto leading-relaxed">
            Book an appointment today to start a conversation with our Tribeca orthodontic team about achieving your optimal smile.
          </p>
          <Link
                                    href={bookingUrl}
            className="inline-block bg-[#C5A059] hover:bg-white text-black text-xs font-bold uppercase tracking-widest px-10 py-4 transition-colors duration-300"
          >
            Book Orthodontic Visit
          </Link>
        </div>
      </section>
    </main>
  );
}