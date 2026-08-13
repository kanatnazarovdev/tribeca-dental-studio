import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { bookingUrl } from "@/hooks/helper";
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  Phone,
  Stethoscope,
  Layers,
  Activity,
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
    ? "纽约 Tribeca 颧骨种植牙 (Zygomatic Implants) | Tribeca Dental Studio"
    : isEs
    ? "Implantes Cigomáticos en Tribeca, NYC | Tribeca Dental Studio"
    : "Zygomatic Implants NYC | Severe Bone Loss Solution | Tribeca Dental Studio";

  const description = isZh
    ? "针对上颌严重骨量流失患者的革命性解决方案。纽约 Tribeca Dental Studio 提供无需复杂植骨的颧骨种植牙 (Zygomatic Implants)，当天恢复固定牙齿。"
    : isEs
    ? "Solución avanzada para la pérdida ósea severa en el maxilar superior sin necesidad de injertos complejos en Lower Manhattan, NYC."
    : "Advanced zygomatic dental implants in Lower Manhattan, NYC. A groundbreaking solution for severe upper jaw bone loss without extensive bone grafting.";

  return {
    title,
    description,
    keywords: [
      "Zygomatic Implants NYC",
      "Zygomatic Dental Implants Manhattan",
      "Severe Bone Loss Dental Implants Tribeca",
      "No Bone Graft Implants NYC",
      "Full Arch Zygomatic Restoration",
      "Tribeca Dental Studio Implants",
    ],
    alternates: {
      canonical: `https://tribecadentalstudio.com/${lang}/services/zygomatic-implants`,
      languages: {
        en: "https://tribecadentalstudio.com/en/services/zygomatic-implants",
        es: "https://tribecadentalstudio.com/es/services/zygomatic-implants",
        zh: "https://tribecadentalstudio.com/zh/services/zygomatic-implants",
      },
    },
    openGraph: {
      title,
      description,
      url: `https://tribecadentalstudio.com/${lang}/services/zygomatic-implants`,
      siteName: "Tribeca Dental Studio",
      images: [
        {
          url: "https://tribecadentalstudio.com/about-studio.jpg",
          width: 1200,
          height: 630,
          alt: "Zygomatic Implants at Tribeca Dental Studio NYC",
        },
      ],
      locale: isZh ? "zh_CN" : isEs ? "es_ES" : "en_US",
      type: "website",
    },
  };
}

export default async function ZygomaticImplantsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang === "es" ? "es" : rawLang === "zh" ? "zh" : "en";
  const isEs = lang === "es";
  const isZh = lang === "zh";

  // JSON-LD Structured Data for MedicalProcedure and FAQ
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalProcedure",
        name: "Zygomatic Dental Implants",
        procedureType: "Advanced Oral & Maxillofacial Implant Surgery",
        bodyLocation: "Zygomatic Bone (Cheekbone), Upper Jaw",
        relevantSpecialty: {
          "@type": "MedicalSpecialty",
          name: "Prosthodontics & Oral Surgery",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What are zygomatic dental implants?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Zygomatic implants are a specialized type of dental implant designed for patients with significant bone loss in the upper jaw. Unlike traditional implants anchored into the jawbone, zygomatic implants are placed directly into the dense cheekbone (zygoma).",
            },
          },
          {
            "@type": "Question",
            name: "Do zygomatic implants eliminate the need for bone grafting?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Because they anchor securely into the natural strength of the cheekbone, zygomatic implants eliminate the need for extensive bone grafting or sinus lifts in most cases.",
            },
          },
          {
            "@type": "Question",
            name: "How long do zygomatic implants last?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "With proper care, excellent oral hygiene, and regular check-ups, zygomatic implants are designed to be a permanent solution that can last a lifetime.",
            },
          },
        ],
      },
    ],
  };

  const content = {
    badge: isZh
      ? "上颌严重骨流失的革命性突破"
      : isEs
      ? "Solución Avanzada para Pérdida Ósea Severa"
      : "Advanced Alternative for Severe Bone Loss",
    title: isZh
      ? "纽约 Tribeca 颧骨种植牙 (Zygomatic Implants)"
      : isEs
      ? "Implantes Cigomáticos en Tribeca, NYC"
      : "Zygomatic Implants in Tribeca, NYC",
    subtitle: isZh
      ? "对于上颌骨严重吸收的患者，传统种植牙往往需要经历漫长而复杂的植骨手术。颧骨种植牙直接锚定于颧骨（Zygoma），无需大量植骨，即刻为全口牙齿提供坚固稳定的支撑。"
      : isEs
      ? "Para pacientes con pérdida ósea severa en el maxilar superior, los implantes cigomáticos se anclan directamente al pómulo, ofreciendo estabilidad sin injertos extensos."
      : "For patients with severe bone loss in the upper jaw, traditional dental implants may not be possible without extensive bone grafting. Zygomatic implants anchor directly into the cheekbone, providing a strong, stable foundation often without grafting.",
  };

  const faqs = [
    {
      q: isZh ? "什么是颧骨种植牙？" : isEs ? "¿Qué son los implantes cigomáticos?" : "What are zygomatic dental implants?",
      a: isZh
        ? "颧骨种植牙专为上颌骨显著萎缩的患者设计。它们不植入颌骨，而是直接固定在致密的颧骨（Cheekbone）上，为假牙或全口义齿提供卓越的长期稳定性。"
        : isEs
        ? "Son implantes especializados para pacientes con pérdida ósea significativa en el maxilar superior, colocados directamente en el pómulo denso en lugar del hueso maxilar."
        : "Zygomatic implants are a specialized type of dental implant designed for patients with significant bone loss in the upper jaw, anchored into the dense cheekbone rather than the deteriorating jawbone.",
    },
    {
      q: isZh ? "颧骨种植需要植骨吗？" : isEs ? "¿Se requiere injerto óseo con los implantes cigomáticos?" : "Do zygomatic implants eliminate bone grafting?",
      a: isZh
        ? "绝大多数情况下无需植骨。由于利用了颧骨自身的强大结构强度，该技术省去了漫长的植骨和上颌窦提升手术，大大缩短了治疗周期。"
        : isEs
        ? "En la mayoría de los casos, eliminan la necesidad de injertos óseos o elevaciones de seno maxilar al aprovechar la resistencia natural del pómulo."
        : "In most cases, yes. By utilizing the natural strength of the cheekbone, they bypass the need for lengthy bone grafting or sinus lift procedures.",
    },
    {
      q: isZh ? "手术当天能戴牙吗？" : isEs ? "¿Se pueden colocar dientes el mismo día?" : "Can I receive teeth on the same day?",
      a: isZh
        ? "是的。在许多情况下，患者在手术当天即可获得临时固定义齿，无需经历漫长的无牙期，让您带着自信的笑容离开诊所。"
        : isEs
        ? "Sí, en muchos casos los pacientes reciben una prótesis fija temporal el mismo día de la cirugía, permitiéndoles salir con una sonrisa funcional."
        : "In many cases, yes. A custom-fabricated temporary fixed bridge is attached immediately after surgery, allowing you to walk out with a functional smile.",
    },
    {
      q: isZh ? "颧骨种植能维持多久？" : isEs ? "¿Cuánto duran los implantes cigomáticos?" : "How long do zygomatic implants last?",
      a: isZh
        ? "在保持良好的日常口腔卫生和定期复查的前提下，颧骨种植牙被设计为永久性解决方案，可陪伴您一生。"
        : isEs
        ? "Con el mantenimiento adecuado, higiene oral y visitas regulares, están diseñados para ser una solución permanente que puede durar toda la vida."
        : "With proper care, maintenance, and routine check-ups, zygomatic implants are designed as a permanent solution that can last a lifetime.",
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
                {content.badge}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light uppercase tracking-tight mb-6 leading-tight">
              {content.title}
            </h1>
            <p className="font-brandon text-base md:text-lg text-neutral-600 mb-8 leading-relaxed">
              {content.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#C5A059] hover:bg-black text-black hover:text-white text-xs font-bold uppercase tracking-widest px-8 py-4 transition-colors duration-300 shadow-xl"
              >
                <span>{isZh ? "预约颧骨种植面诊" : isEs ? "Agendar Consulta de Implantes" : "Book Zygomatic Consultation"}</span>
                <ArrowRight size={16} className="ml-2" />
              </a>
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
              src="/services/zygomatic.webp"
              alt="Zygomatic Implants at Tribeca Dental Studio NYC"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
              <span className="text-white text-xs font-bold uppercase tracking-widest">
                Tribeca Dental Studio • Advanced Implant Solutions in Lower Manhattan
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON GRID SECTION */}
      <section className="bg-neutral-50 py-20 px-6 md:px-12 lg:px-20 border-y border-neutral-200 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-2">
              Clinical Comparison
            </span>
            <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight mb-4">
              {isZh ? "传统种植牙与颧骨种植牙对比" : isEs ? "Implantes Tradicionales vs. Cigomáticos" : "Zygomatic vs. Traditional Implants"}
            </h2>
            <p className="font-brandon text-sm text-neutral-600">
              Understanding how zygomatic anchors bypass bone deterioration for a faster, more predictable smile restoration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-neutral-200 shadow-sm">
              <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-500 block mb-2">Standard Approach</span>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Traditional Dental Implants</h3>
              <p className="font-brandon text-sm text-neutral-600 leading-relaxed mb-4">
                Require sufficient upper jawbone density. When bone loss is present, treatment is frequently delayed by months of preparatory bone grafting or sinus lifts.
              </p>
              <ul className="space-y-2 font-brandon text-xs text-neutral-500">
                <li>• Dependent on native jawbone volume</li>
                <li>• Multi-stage surgical timeline</li>
                <li>• High risk of rejection if bone is soft</li>
              </ul>
            </div>

            <div className="bg-neutral-900 text-white p-8 border border-neutral-900 shadow-xl relative">
              <span className="absolute top-4 right-4 bg-[#C5A059] text-black text-[9px] uppercase font-bold tracking-widest px-3 py-1">
                Advanced Option
              </span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#C5A059] block mb-2">Breakthrough Care</span>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4 text-white">Zygomatic Dental Implants</h3>
              <p className="font-brandon text-sm text-neutral-300 leading-relaxed mb-4">
                Ideal when the jawbone is too thin or soft. Placed into the dense cheekbone (zygoma) which does not resorb the way the jawbone does, offering immediate high-stability anchoring.
              </p>
              <ul className="space-y-2 font-brandon text-xs text-neutral-300">
                <li>• Bypasses jawbone deterioration entirely</li>
                <li>• Eliminates extensive grafting in most cases</li>
                <li>• Faster path to a fixed functional smile</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* STEP-BY-STEP PROCEDURE */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-20">
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-2">
            Precision Workflow
          </span>
          <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight mb-4">
            {isZh ? "颧骨种植手术流程" : isEs ? "El Procedimiento Paso a Paso" : "The Zygomatic Implant Procedure"}
          </h2>
          <p className="font-brandon text-neutral-600 text-sm">
            Executed with meticulous 3D planning and state-of-the-art surgical comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              num: "01",
              title: isZh ? "3D 数字规划与CBCT扫描" : isEs ? "Planificación 3D y CBCT" : "Consultation & 3D Planning",
              desc: isZh ? "通过高精度 3D CBCT 扫描精确映射您的面部解剖结构，由外科专家精准规划植入路径。" : isEs ? "Evaluación completa con escaneo CBCT 3D para mapear la anatomía facial y planificar la colocación." : "Comprehensive evaluation including 3D CBCT scans to precisely map your facial anatomy and plan optimal fixture placement.",
            },
            {
              num: "02",
              title: isZh ? "舒眠麻醉下精密手术" : isEs ? "Procedimiento Quirúrgico" : "The Surgical Procedure",
              desc: isZh ? "在麻醉或镇静状态下进行，由经验丰富的专科医生将30-55毫米长植体稳固置入颧骨。" : isEs ? "Realizado con sedación para garantizar total comodidad mientras se colocan los implantes en el pómulo." : "Performed under sedation in our surgical suite. Long specialized fixtures (30–55 mm) anchor securely into the dense zygoma.",
            },
            {
              num: "03",
              title: isZh ? "即刻负重与临时固定义齿" : isEs ? "Dientes el Mismo Día" : "Same-Day Teeth",
              desc: isZh ? "手术完成后即刻佩戴定制临时固定义齿，让您当天恢复咀嚼功能与自信社交。" : isEs ? "Se coloca un puente fijo temporal inmediatamente después de la cirugía para restaurar la sonrisa el mismo día." : "A custom temporary fixed bridge is attached immediately post-surgery, allowing you to walk out with a functional smile.",
            },
          ].map((st, idx) => (
            <div key={idx} className="bg-white p-8 border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-3xl font-light text-[#C5A059] block mb-4">{st.num}</span>
                <h3 className="text-lg font-bold uppercase tracking-tight mb-3">{st.title}</h3>
                <p className="font-brandon text-xs text-neutral-600 leading-relaxed">{st.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CANDIDACY & BENEFITS */}
      <section className="bg-neutral-900 text-white py-20 px-6 md:px-12 lg:px-20 mb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-2">
              Who Is This For?
            </span>
            <h3 className="text-3xl font-light uppercase tracking-tight mb-6">Candidate Criteria</h3>
            <ul className="space-y-4 font-brandon text-sm text-neutral-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#C5A059] shrink-0 mt-1" />
                <span>Patients told traditional implants are impossible due to severe upper jaw bone loss.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#C5A059] shrink-0 mt-1" />
                <span>Individuals wishing to avoid invasive, multi-month bone grafting or sinus lift procedures.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#C5A059] shrink-0 mt-1" />
                <span>Denture wearers seeking a permanent, non-removable fixed restoration alternative.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#C5A059] shrink-0 mt-1" />
                <span>Good overall health with the ability to undergo minor oral surgery.</span>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-2">
              Life-Changing Results
            </span>
            <h3 className="text-3xl font-light uppercase tracking-tight mb-6">Key Benefits</h3>
            <ul className="space-y-4 font-brandon text-sm text-neutral-300">
              <li className="flex items-start gap-3">
                <ShieldCheck size={18} className="text-[#C5A059] shrink-0 mt-1" />
                <span>Eliminates bone grafting requirements in the vast majority of complex cases.</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck size={18} className="text-[#C5A059] shrink-0 mt-1" />
                <span>Shortens overall timeline from years of staged surgeries to immediate solutions.</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck size={18} className="text-[#C5A059] shrink-0 mt-1" />
                <span>Restores facial volume and prevents further structural facial collapse.</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck size={18} className="text-[#C5A059] shrink-0 mt-1" />
                <span>Backed by decades of high success rates for permanent full-arch stability.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 mb-20">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-2">
            Patient Inquiries
          </span>
          <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight">
            {isZh ? "颧骨种植常见问题解答" : isEs ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
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
              <p className="mt-4 font-brandon text-sm text-neutral-600 leading-relaxed">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-12">
        <div className="bg-black text-white p-10 md:p-16 text-center border border-black">
          <h2 className="text-2xl md:text-4xl font-light uppercase tracking-tight mb-4">
            {isZh ? "重获自信笑容，告别骨量不足困扰" : isEs ? "¿Listo para una Segunda Oportunidad Sonriente?" : "Schedule Your Zygomatic Implant Consultation"}
          </h2>
          <p className="font-brandon text-sm text-neutral-300 max-w-lg mx-auto mb-8">
            {isZh
              ? "如果您曾被告知因骨量不足无法做种植牙，颧骨种植或许是您的转机。立即联系 Tribeca Dental Studio 预约面诊。"
              : isEs
              ? "Si le dijeron que los implantes no eran posibles debido a la pérdida ósea, los implantes cigomáticos pueden ser la solución."
              : "If you've been told implants aren't possible due to severe bone loss, zygomatic implants may give you the second chance you've been waiting for."}
          </p>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C5A059] hover:bg-white text-black font-bold uppercase tracking-[0.3em] text-xs px-10 py-5 transition-all duration-300"
          >
            {isZh ? "立即在线预约面诊" : isEs ? "Reservar Cita VIP" : "Book Zygomatic Consultation Now"}
          </a>
        </div>
      </section>
    </main>
  );
}