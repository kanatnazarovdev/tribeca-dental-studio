import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, HeartPulse, Sparkle, Smile, Phone, ShieldAlert } from "lucide-react";

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
    ? "无痛舒适牙科与镇静选项 | Tribeca Dental Studio 纽约"
    : isEs
    ? "Odontología Sin Dolor y Opciones de Sedación | Tribeca Dental Studio NYC"
    : "Pain Free Dentistry & Sedation Options | Tribeca Dental Studio NYC";

  const description = isZh
    ? "告别看牙恐惧！纽约 Tribeca Dental Studio 提供无痛舒缓牙科服务，包含笑气 (Nitrous Oxide)、口服镇静、静脉镇静 (IV Sedation) 与全麻方案，由执业麻醉医生全程把控。"
    : isEs
    ? "Supere la ansiedad dental en Manhattan. Ofrecemos sedación consciente, óxido nitroso, sedación IV y anestesia general supervisada por anestesiólogos certificados."
    : "Conquer dental anxiety in Lower Manhattan. We offer nitrous oxide, oral conscious sedation, IV sedation, and general anesthesia administered by board-certified anesthesiologists.";

  return {
    title,
    description,
    keywords: [
      "Pain Free Dentistry NYC",
      "Sedation Dentist Tribeca",
      "Dental Anxiety Manhattan",
      "IV Sedation Dentist NYC",
      "Nitrous Oxide Dentist Lower Manhattan",
      "Board Certified Anesthesiologist Dentist NYC",
      "Sleep Dentistry Tribeca",
    ],
    alternates: {
      canonical: `https://tribecadentalstudio.com/${lang}/pain-free-dentistry`,
      languages: {
        en: "https://tribecadentalstudio.com/en/pain-free-dentistry",
        es: "https://tribecadentalstudio.com/es/pain-free-dentistry",
        zh: "https://tribecadentalstudio.com/zh/pain-free-dentistry",
      },
    },
    openGraph: {
      title,
      description,
      url: `https://tribecadentalstudio.com/${lang}/pain-free-dentistry`,
      siteName: "Tribeca Dental Studio",
      images: [
        {
          url: "https://tribecadentalstudio.com/about-studio.jpg",
          width: 1200,
          height: 630,
          alt: "Pain Free Dentistry and Sedation Options at Tribeca Dental Studio NYC",
        },
      ],
      locale: isZh ? "zh_CN" : isEs ? "es_ES" : "en_US",
      type: "website",
    },
  };
}

export default async function PainFreeDentistryPage({
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
    name: "Pain Free Dentistry & Sedation Options",
    description: "Comprehensive dental anxiety management and certified sedation options at Tribeca Dental Studio.",
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

  const sedationOptions = [
    {
      title: "Local Anesthesia",
      tag: "Foundation of Care",
      desc: "Local anesthesia is by far the most common pain management method in dentistry. It thoroughly numbs the specific treatment area for fillings, root canals, implants, and crowns. Administered gently with prior topical numbing gel, it ensures you feel no pain during your procedure.",
    },
    {
      title: "Nitrous Oxide (Laughing Gas)",
      tag: "Mild Relaxation",
      desc: "Inhaled through a small, comfortable mask, nitrous oxide induces a gentle euphoric state where anxiety fades. You remain fully conscious and responsive, and the effects wear off completely within minutes after the procedure, allowing you to drive home safely.",
    },
    {
      title: "Conscious Oral Sedation",
      tag: "Moderate Anti-Anxiety",
      desc: "Conscious sedation involves anti-anxiety medication taken orally prior to your appointment. Designed to eliminate pre-visit fear, it creates a deeply relaxed state while keeping you awake and able to communicate with our team.",
    },
    {
      title: "IV Sedation",
      tag: "Deep Relaxation",
      desc: "Delivered intravenously by an expert clinician, IV sedation places you in a twilight state where you feel entirely detached from stress. Most patients fall into a peaceful sleep and have little to no memory of the dental procedure afterwards.",
    },
    {
      title: "General Anesthesia",
      tag: "Full Unconsciousness",
      desc: "Reserved for complex surgical procedures or extreme dental phobias, general anesthesia affects the entire body under strict medical monitoring. Our board-certified anesthesiologists oversee your airway and vital signs throughout the entire process.",
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
        <div className=" items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-[#C5A059] mb-4">
              <Sparkles size={18} />
              <span className="text-xs uppercase tracking-[0.3em] font-bold">
                {isZh
                  ? "无痛且克服焦虑的齿科体验"
                  : isEs
                  ? "Atención Sin Miedo y Sin Dolor"
                  : "Fear-Free & Gentle Care"}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light uppercase tracking-tight mb-6 leading-tight">
              {isZh
                ? "无痛舒适牙科体验"
                : isEs
                ? "Odontología Sin Dolor"
                : "Pain Free Dentistry"}
            </h1>
            <p className="font-brandon text-base md:text-lg text-neutral-600 mb-8 leading-relaxed">
              {isZh
                ? "在 Tribeca Dental Studio，我们提供全方位的镇静与麻醉方案，帮助您与家人舒适无痛地完成口腔治疗。由资深执业麻醉专家配合，全面消除对看牙的恐惧与不安。"
                : isEs
                ? "Tribeca Dental Studio ofrece una variedad de opciones de sedación y anestesia para que pueda realizar sus tratamientos sin dolor ni ansiedad. Nuestro anestesiólogo certificado le ayudará a tener una consulta tranquila."
                : "Tribeca Dental Studio offers a variety of sedation and anesthesia options so that our patients can get through complex dental procedures without pain and overcome any anxiety about visiting the dentist. Our board-certified anesthesiologist manages all levels of fear and comfort."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${lang}/contact`}
                className="inline-flex items-center justify-center bg-black text-white hover:bg-[#C5A059] text-xs font-bold uppercase tracking-widest px-8 py-4 transition-colors duration-300"
              >
                <span>{isZh ? "预约舒缓就诊" : isEs ? "Reservar Consulta" : "Book Your Pain-Free Visit"}</span>
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
        </div>
      </section>

      {/* DENTAL ANXIETY & COMFORT PHILOSOPHY */}
      <section className="bg-neutral-900 text-white py-20 px-6 md:px-12 lg:px-20 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <HeartPulse className="text-[#C5A059] mb-4" size={40} />
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-2">
                Understanding Your Fears
              </span>
              <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight mb-6">
                {isZh ? "看牙焦虑？我们懂您" : isEs ? "Superando la Ansiedad Dental" : "Conquering Dental Anxiety"}
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="font-brandon text-base text-neutral-300 leading-relaxed mb-6">
                {isZh
                  ? "进行牙科诊疗绝非小事。高达 15% 的美国人因焦虑而拖延看牙。在我们诊所，展现恐惧是完全正常的。期待与担忧往往是最难熬的部分，我们将陪伴您轻松度过全过程。"
                  : isEs
                  ? "Entendemos que ir al dentista puede ser estresante. Hasta el 15% de las personas evitan la atención dental por miedo. Es totalmente normal sentir aprehensión; nuestro equipo está aquí para apoyarlo con empatía y tecnología."
                  : "Going in for a dental procedure is significant. Up to 15% of Americans avoid the dentist due to anxiety. We want you to know it's okay to bring your fear—we will guide you through it. The anticipation is almost always the worst part!"}
              </p>
              <div className="border-l-2 border-[#C5A059] pl-6 italic text-neutral-400 font-brandon text-sm">
                "Your comfort is paramount. If you ever feel discomfort during a procedure, simply speak up—we can instantly administer additional soothing protocols."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEDATION & ANESTHESIA OPTIONS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-2">
            Tailored Comfort Spectrum
          </span>
          <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight mb-4">
            {isZh ? "全方位镇静与麻醉方案" : isEs ? "Opciones de Anestesia y Sedación" : "Sedation & Anesthesia Spectrum"}
          </h2>
          <p className="font-brandon text-neutral-600 text-sm md:text-base">
            From subtle relaxation gases to deep sleep, we tailor our pain management precisely to your emotional and physical needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sedationOptions.map((opt, idx) => (
            <div key={idx} className="bg-white border border-neutral-200 p-8 shadow-sm hover:border-[#C5A059] transition-colors flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold block mb-2">
                  {opt.tag}
                </span>
                <h3 className="text-2xl font-light uppercase tracking-tight mb-4">{opt.title}</h3>
                <p className="font-brandon text-sm text-neutral-600 leading-relaxed mb-6">
                  {opt.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black">
                <CheckCircle2 size={16} className="text-[#C5A059]" />
                <span>Customized Protocol</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOARD-CERTIFIED ANESTHESIOLOGY HIGHLIGHT */}
      <section className="bg-neutral-100 border-y border-neutral-200 py-16 px-6 md:px-12 lg:px-20 mb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <ShieldCheck className="text-[#C5A059] mb-4" size={40} />
            <span className="text-xs uppercase tracking-widest font-bold text-[#C5A059] block mb-2">
              Safety & Expertise
            </span>
            <h3 className="text-3xl font-light uppercase tracking-tight mb-6">
              Board-Certified Pediatric & Adult Anesthesiologists
            </h3>
            <p className="font-brandon text-neutral-600 text-sm leading-relaxed mb-6">
              For complex surgical cases, full-mouth restorations, or severe dental phobias, we partner directly with experienced board-certified anesthesiologists. They maintain dedicated medical monitoring equipment to guarantee absolute safety for both adult and pediatric patients.
            </p>
            <ul className="space-y-3 font-brandon text-xs text-neutral-800">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#C5A059]" />
                <span>Continuous Vitals & Airway Monitoring</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#C5A059]" />
                <span>Pre-Surgical Health Clearances</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#C5A059]" />
                <span>Post-Procedure Pain Management Planning</span>
              </li>
            </ul>
          </div>

          <div className="bg-black text-white p-8 md:p-12">
            <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold block mb-2">
              A Smooth Recovery
            </span>
            <h4 className="text-2xl font-light uppercase mb-4">Post-Treatment Comfort</h4>
            <p className="font-brandon text-sm text-neutral-300 leading-relaxed mb-6">
              While minor soreness is normal following significant procedures, we always send you home with personalized pain management guidelines. The needle prick delivering anesthesia is the worst pain you will experience at Tribeca Dental Studio.
            </p>
            <a
              href="tel:212-561-5303"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C5A059] hover:text-white transition-colors"
            >
              <Phone size={14} />
              <span>Call 212-561-5303 to Discuss Sedation Options</span>
            </a>
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
            Ready for a Fear-Free Visit?
          </h2>
          <p className="font-brandon text-neutral-400 mb-8 max-w-xl mx-auto leading-relaxed">
            Don't let anxiety or pain aversion stop you from receiving essential oral healthcare. Contact our team today to customize your sedation plan.
          </p>
          <Link
            href={`/${lang}/contact`}
            className="inline-block bg-[#C5A059] hover:bg-white text-black text-xs font-bold uppercase tracking-widest px-10 py-4 transition-colors duration-300"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}