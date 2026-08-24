import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Clock, ShieldAlert, Microscope, Activity } from "lucide-react";
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
    ? "纽约 Tribeca 显微无痛根管治疗 | 专科牙体牙髓病学 | Tribeca Dental Studio"
    : isEs
    ? "Tratamiento de Conducto en Tribeca, NYC | Endodoncia con Microcopio | Tribeca Dental Studio"
    : "Root Canal Treatment in Tribeca, NYC | Board-Certified Endodontist | Tribeca Dental Studio";

  const description = isZh
    ? "纽约 Tribeca 驻诊专科牙体牙髓医师（Endodontist）提供 Zumax® 显微放大无痛根管治疗。无需外转诊，快速消除剧烈牙痛，无痛保留天然牙齿。"
    : isEs
    ? "Tratamiento de endodoncia de precisión con microscopio Zumax® en Lower Manhattan, NYC. Especialista en plantilla, alivio inmediato del dolor sin necesidad de referencias externas."
    : "Painless root canal therapy in Lower Manhattan, NYC performed by an on-staff board-certified endodontist using Zumax® microscopes. Immediate pain relief without external referrals.";

  return {
    title,
    description,
    keywords: [
      "Root Canal NYC",
      "Endodontist Tribeca",
      "Microscope Root Canal Manhattan",
      "Emergency Root Canal NYC",
      "Painless Root Canal Lower Manhattan",
      "Endodontic Therapy NYC",
      "Toothache Relief Tribeca",
    ],
    alternates: {
      canonical: `https://tribecadentalstudio.com/${lang}/services/root-canal-treatment`,
      languages: {
        en: "https://tribecadentalstudio.com/en/services/root-canal-treatment",
        es: "https://tribecadentalstudio.com/es/services/root-canal-treatment",
        zh: "https://tribecadentalstudio.com/zh/services/root-canal-treatment",
      },
    },
    openGraph: {
      title,
      description,
      url: `https://tribecadentalstudio.com/${lang}/services/root-canal-treatment`,
      siteName: "Tribeca Dental Studio",
      images: [
        {
          url: "https://tribecadentalstudio.com/about-studio.jpg",
          width: 1200,
          height: 630,
          alt: "Microscope-Enhanced Root Canal Treatment at Tribeca Dental Studio NYC",
        },
      ],
      locale: isZh ? "zh_CN" : isEs ? "es_ES" : "en_US",
      type: "website",
    },
  };
}

export default async function RootCanalTreatmentPage({
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
    "@type": "MedicalProcedure",
    name: "Root Canal Treatment",
    medicalSpecialty: "Endodontics",
    description: "Endodontic therapy to clean infected pulp, sterilize root canals with Zumax® high-magnification microscopes, and preserve natural tooth structure painless in a single office.",
    bodyLocation: "Tooth Pulp & Root Canals",
    procedureHowItIsPerformed: "Local anesthesia administration, pulp chamber optical access under high magnification, thorough chemical and mechanical disinfection, biocompatible sealing, and final crown restoration.",
    howPerformed: "In-office microscopic endodontic therapy",
    provider: {
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

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-[#C5A059] mb-4">
              <Sparkles size={18} />
              <span className="text-xs uppercase tracking-[0.3em] font-bold">
                {isZh
                  ? "驻诊专科牙体牙髓医师"
                  : isEs
                  ? "Especialista en Endodoncia en Plantilla"
                  : "On-Staff Board-Certified Endodontist"}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light uppercase tracking-tight mb-6 leading-tight">
              {isZh
                ? "纽约 Tribeca 显微无痛根管治疗"
                : isEs
                ? "Tratamiento de Conducto en Tribeca, NYC"
                : "Root Canal Therapy in Tribeca, NYC"}
            </h1>
            <p className="font-brandon text-base md:text-lg text-neutral-600 mb-8 leading-relaxed">
              {isZh
                ? "出现剧烈牙痛或持久敏感？您无需被外转诊去其他诊所。Tribeca Dental Studio 拥有驻诊专科牙体牙髓医师（Endodontist），结合 Zumax® 专科手术显微镜，在同一诊室内为您提供舒适、精细且快速止痛的根管治疗，无痛保留天然牙。"
                : isEs
                ? "Cuando el dolor dental ataca, necesita alivio inmediato. En lugar de ser referido a un endodoncista externo, nuestro especialista certificado en plantilla realiza su tratamiento de conducto aquí mismo con microscopio óptico Zumax®."
                : "When persistent tooth discomfort strikes, saving your natural tooth is the primary objective. Our on-staff board-certified endodontist performs high-precision root canal therapy in-house using advanced Zumax® microscopes—eliminating external referrals and putting an end to pain."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                                    href={bookingUrl}
                className="inline-flex items-center justify-center bg-black text-white hover:bg-[#C5A059] text-xs font-bold uppercase tracking-widest px-8 py-4 transition-colors duration-300"
              >
                <span>{isZh ? "即刻预约止痛" : isEs ? "Reservar Cita de Urgencia" : "Book Pain-Relief Visit"}</span>
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <a
                href="tel:212-561-5303"
                className="inline-flex items-center justify-center border border-black/20 hover:border-black text-xs font-bold uppercase tracking-widest px-8 py-4 transition-colors duration-300"
              >
                212-561-5303
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] bg-neutral-900 overflow-hidden shadow-2xl">
            <Image
              src="/services/rootcanal.webp"
              alt="Microscope Root Canal Treatment at Tribeca Dental Studio"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
              <span className="text-white text-xs font-bold uppercase tracking-widest">
                {isZh ? "Zumax® 手术显微镜·极精细清创" : isEs ? "Microscopio Ocular Zumax® para Máxima Sellaridad" : "Zumax® Endodontic Magnification Precision"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* WARNING SIGNS / SYMPTOMS */}
      <section className="bg-neutral-900 text-white py-20 px-6 md:px-12 lg:px-20 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-2">
              {isZh ? "症状识别" : isEs ? "Síntomas de Alarma" : "Recognizing the Signs"}
            </span>
            <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight">
              {isZh ? "您是否需要根管治疗？" : isEs ? "¿Cuándo es Necesaria una Endodoncia?" : "Signs You May Need Root Canal Therapy"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldAlert,
                title: isZh ? "剧烈自发性牙痛" : isEs ? "Dolor Persistente o Pulsátil" : "Severe, Constant Pain",
                desc: isZh ? "咬合或夜间静止时出现持续剧烈疼痛，提示牙髓组织严重感染发炎。" : isEs ? "Molestia punzante al masticar o en reposo que interrumpe el sueño o las actividades diarias." : "Throbbing pain when applying pressure or during sleep, indicating inner pulp tissue inflammation.",
              },
              {
                icon: Activity,
                title: isZh ? "冷热持续酸痛" : isEs ? "Sensibilidad Térmica Prolongada" : "Prolonged Thermal Sensitivity",
                desc: isZh ? "接触冰水或热水后，牙齿隐隐作痛持续数十秒甚至数分钟以上。" : isEs ? "Sensación molesta al frío o calor que persiste mucho tiempo después de retirar el estímulo." : "Linger sensitivity to hot or cold drinks that continues long after the stimulus is removed.",
              },
              {
                icon: Microscope,
                title: isZh ? "牙龈小脓包与变色" : isEs ? "Aparición de Absceso o Cambio de Color" : "Gum Abscess or Tooth Darkening",
                desc: isZh ? "牙龈附近出现类似痘痘的脓包，或单颗牙齿逐渐发灰发黑。" : isEs ? "Píleo o bulto con secreción en la encía adyacente, o sombreado oscuro en el diente afectado." : "Pimple-like bump on the gums near the tooth or a noticeable darkening/graying of the enamel.",
              },
            ].map((card, idx) => (
              <div key={idx} className="border border-neutral-800 p-8 bg-neutral-900/50">
                <card.icon className="text-[#C5A059] mb-4" size={32} />
                <h3 className="text-xl font-bold uppercase tracking-wide mb-3">{card.title}</h3>
                <p className="font-brandon text-sm text-neutral-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEP-BY-STEP PROCEDURE */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-2">
              {isZh ? "精准诊疗流程" : isEs ? "Paso a Paso" : "Step-by-Step Procedure"}
            </span>
            <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight mb-6">
              {isZh ? "根管治疗是如何进行的？" : isEs ? "¿Cómo se Realiza el Tratamiento?" : "How a Root Canal is Performed"}
            </h2>
            <p className="font-brandon text-neutral-600 mb-8 leading-relaxed">
              {isZh
                ? "根管治疗在许多方面与常规补牙类似，但更具专科精细度。大部分治疗在 60 至 90 分钟内即可顺利完成："
                : isEs
                ? "Con anestesia local moderna y nuestra tecnología microscópica Zumax®, el procedimiento es completamente indoloro y se completa en 60 a 90 minutos:"
                : "Modern root canal treatment is comfortable, predictable, and remarkably similar to getting a deep filling. Our protocol typically takes 60–90 minutes:"}
            </p>

            <div className="space-y-6 font-brandon text-sm">
              <div className="flex gap-4">
                <span className="font-bold text-[#C5A059] font-ddin text-lg">01.</span>
                <div>
                  <strong className="block text-black font-ddin text-base uppercase">Anesthesia & Comfort</strong>
                  <p className="text-neutral-600">Complete local numbing ensures you feel zero pain during the procedure. Conscious sedation options are also available.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="font-bold text-[#C5A059] font-ddin text-lg">02.</span>
                <div>
                  <strong className="block text-black font-ddin text-base uppercase">Microscopic Canal Disinfection</strong>
                  <p className="text-neutral-600">Using Zumax® high-magnification microscopes, the endodontist accesses, cleans, and thoroughly sterilizes microscopic canal branches.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="font-bold text-[#C5A059] font-ddin text-lg">03.</span>
                <div>
                  <strong className="block text-black font-ddin text-base uppercase">Biocompatible Sealing</strong>
                  <p className="text-neutral-600">The disinfected root canals are filled with gutta-percha, a safe biocompatible rubber material, preventing future bacterial reinfection.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="font-bold text-[#C5A059] font-ddin text-lg">04.</span>
                <div>
                  <strong className="block text-black font-ddin text-base uppercase">Permanent Crown Protection</strong>
                  <p className="text-neutral-600">A custom porcelain crown is subsequently bonded over the tooth to fully restore structural bite strength and aesthetics.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-100 p-8 md:p-12 border border-neutral-200">
            <h3 className="text-2xl font-light uppercase tracking-tight mb-6">
              {isZh ? "根管治疗 VS 拔牙" : isEs ? "Endodoncia vs Extraición" : "Root Canal vs. Extraction"}
            </h3>
            <p className="font-brandon text-xs text-neutral-600 mb-6">
              {isZh
                ? "保留天然牙始终是最好的选择。对比直接拔牙，根管治疗具有明显优势："
                : isEs
                ? "Preservar su diente natural siempre es la mejor opción médica y financiera a largo plazo:"
                : "Saving your natural tooth is almost always the healthiest and most cost-effective long-term choice:"}
            </p>

            <ul className="space-y-4 font-brandon text-sm text-neutral-800">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <strong>Preserves Natural Structure:</strong> Keeps your real tooth root intact, maintaining natural jawbone stimulation and preventing facial bone loss.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <strong>Lower Total Lifetime Cost:</strong> Avoiding extraction removes the immediate need for high-ticket implants or complex bridges.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <strong>Prevents Tooth Shifting:</strong> Retaining your natural tooth stops neighboring teeth from tilting or altering your bite symmetry.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SUCCESS RATE & HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-20">
        <div className="border-t border-b border-neutral-200 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-center font-ddin">
          <div>
            <span className="text-4xl md:text-5xl font-light text-black block mb-2">86%-98%</span>
            <span className="text-xs uppercase tracking-widest text-neutral-500">Clinical Success Rate</span>
          </div>
          <div>
            <span className="text-4xl md:text-5xl font-light text-black block mb-2">60-90m</span>
            <span className="text-xs uppercase tracking-widest text-neutral-500">Average Treatment Time</span>
          </div>
          <div>
            <span className="text-4xl md:text-5xl font-light text-black block mb-2">Zumax®</span>
            <span className="text-xs uppercase tracking-widest text-neutral-500">High-Tech Optics</span>
          </div>
          <div>
            <span className="text-4xl md:text-5xl font-light text-black block mb-2">0</span>
            <span className="text-xs uppercase tracking-widest text-neutral-500">External Referrals Needed</span>
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
            {isZh ? "消除牙痛·重获无忧微笑" : isEs ? "Elimine el Dolor Dental Hoy Mismo" : "Put an End to Tooth Pain Today"}
          </h2>
          <p className="font-brandon text-neutral-400 mb-8 max-w-xl mx-auto leading-relaxed">
            {isZh
              ? "直接预约曼哈顿下城专科牙体牙髓医师。无须转诊，享受快速、无痛且高效的显微根管治疗。"
              : isEs ? "Agende su cita directamente con nuestro endodoncista en Lower Manhattan sin necesidad de referencias externas."
              : "Schedule a consultation directly with our board-certified endodontist in Lower Manhattan. Prompt, painless care in a relaxing environment."}
          </p>
          <Link
                                    href={bookingUrl}
            className="inline-block bg-[#C5A059] hover:bg-white text-black text-xs font-bold uppercase tracking-widest px-10 py-4 transition-colors duration-300"
          >
            {isZh ? "预约门诊" : isEs ? "Agendar Cita" : "Schedule Appointment"}
          </Link>
        </div>
      </section>
    </main>
  );
}