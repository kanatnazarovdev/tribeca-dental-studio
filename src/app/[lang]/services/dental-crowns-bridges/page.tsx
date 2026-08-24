import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Clock, Layers, Anchor } from "lucide-react";
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
    ? "纽约 Tribeca 全瓷牙冠与牙桥修复 | Tribeca Dental Studio"
    : isEs
    ? "Coronas y Puentes Dentales en Tribeca, NYC | Tribeca Dental Studio"
    : "Dental Crowns & Bridges in Tribeca, NYC | Restorative Dentistry | Tribeca Dental Studio";

  const description = isZh
    ? "纽约 Tribeca 专科级牙冠与牙桥修复：采用全瓷及种植体支持技术，单店完成缺损修复、根管治疗后保护与多颗缺牙重建，重塑强健自然的咬合力。"
    : isEs
    ? "Restauración de coronas y puentes dentales en Lower Manhattan, NYC. Recupera la función y estética de sus dientes con tecnología digital de precisión en una sola ubicación."
    : "Custom porcelain crowns and implant-supported bridges in Lower Manhattan, NYC. Seamless single-tooth and full-arch restoration under one roof at Tribeca Dental Studio.";

  return {
    title,
    description,
    keywords: [
      "Dental Crowns NYC",
      "Dental Bridges Tribeca",
      "Porcelain Crowns Manhattan",
      "Implant Supported Bridge NYC",
      "Restorative Dentist Lower Manhattan",
      "Same Day Crown Dentist NYC",
      "Broken Tooth Repair Tribeca",
    ],
    alternates: {
      canonical: `https://tribecadentalstudio.com/${lang}/services/dental-crowns-bridges`,
      languages: {
        en: "https://tribecadentalstudio.com/en/services/dental-crowns-bridges",
        es: "https://tribecadentalstudio.com/es/services/dental-crowns-bridges",
        zh: "https://tribecadentalstudio.com/zh/services/dental-crowns-bridges",
      },
    },
    openGraph: {
      title,
      description,
      url: `https://tribecadentalstudio.com/${lang}/services/dental-crowns-bridges`,
      siteName: "Tribeca Dental Studio",
      images: [
        {
          url: "https://tribecadentalstudio.com/about-studio.jpg",
          width: 1200,
          height: 630,
          alt: "Dental Crowns and Bridges at Tribeca Dental Studio NYC",
        },
      ],
      locale: isZh ? "zh_CN" : isEs ? "es_ES" : "en_US",
      type: "website",
    },
  };
}

export default async function DentalCrownsBridgesPage({
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
    name: "Dental Crowns & Bridges",
    medicalSpecialty: "Restorative Dentistry",
    description: "Custom restorative treatment using ceramic crowns and implant-supported bridges to rebuild damaged or missing teeth.",
    bodyLocation: "Mouth",
    procedureHowItIsPerformed: "Digital scanning, tooth preparation, custom fabrication, and precision bonding of porcelain crowns or multi-unit bridges.",
    howPerformed: "In-office restorative procedure",
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
                  ? "高定精工功能修复"
                  : isEs
                  ? "Rehabilitación Oral de Precisión"
                  : "Precision Restorative Excellence"}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light uppercase tracking-tight mb-6 leading-tight">
              {isZh
                ? "纽约 Tribeca 牙冠与牙桥修复"
                : isEs
                ? "Coronas y Puentes Dentales en Tribeca, NYC"
                : "Dental Crowns & Bridges in Tribeca, NYC"}
            </h1>
            <p className="font-brandon text-base md:text-lg text-neutral-600 mb-8 leading-relaxed">
              {isZh
                ? "牙冠与牙桥为您受损或缺失的牙齿提供坚固自然的重建方案。无论是单颗牙齿修复、根管治疗后的保护，还是多颗缺失牙的种植体支持连桥，Tribeca Dental Studio 在同一诊室内为您提供全方位的专科级协作诊疗。"
                : isEs
                ? "Las coronas y puentes dentales ofrecen la solución ideal para reparar o reemplazar dientes dañados o ausentes. En Tribeca Dental Studio, nuestros especialistas coordinan todo su tratamiento bajo un mismo techo en Lower Manhattan."
                : "Dental crowns and bridges offer custom restoration for missing, broken, or severely decayed teeth. At Tribeca Dental Studio, our multidisciplinary team coordinates every phase of your restorative care in one state-of-the-art office."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={bookingUrl}
                className="inline-flex items-center justify-center bg-black text-white hover:bg-[#C5A059] text-xs font-bold uppercase tracking-widest px-8 py-4 transition-colors duration-300"
              >
                <span>{isZh ? "预约咨询" : isEs ? "Reservar Cita" : "Book Your Consultation"}</span>
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
              src="/services/crowns-and-bridges.webp"
              alt="Dental Crowns and Bridges at Tribeca Dental Studio"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
              <span className="text-white text-xs font-bold uppercase tracking-widest">
                {isZh ? "大师级全瓷雕琢·坚固自然咬合" : isEs ? "Restauraciones de Porcelana de Alta Durabilidad" : "Custom Ceramic Artistry & Uncompromised Strength"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CROWNS VS BRIDGES OVERVIEW */}
      <section className="bg-neutral-900 text-white py-20 px-6 md:px-12 lg:px-20 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-2">
              {isZh ? "修复方案解析" : isEs ? "Soluciones Restauradoras" : "Restorative Overview"}
            </span>
            <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight">
              {isZh ? "选择最适合您的牙齿重建方式" : isEs ? "Diseñados para su Sonrisa" : "Understanding Your Restorative Options"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* DENTAL CROWNS */}
            <div className="border border-neutral-800 p-8 bg-neutral-900/50">
              <Layers className="text-[#C5A059] mb-4" size={32} />
              <h3 className="text-2xl font-bold uppercase tracking-wide mb-4">
                {isZh ? "牙冠 (Dental Crowns)" : isEs ? "Coronas Dentales" : "Dental Crowns"}
              </h3>
              <p className="font-brandon text-sm text-neutral-400 leading-relaxed mb-6">
                {isZh
                  ? "牙冠是定制的“保护罩”，全方位覆盖受损或严重蛀牙的天然牙冠部分。它能恢复牙齿原有的形状、颜色、强度与咀嚼功能。常用于根管治疗后的牙齿保护或单颗种植体戴冠。"
                  : isEs
                  ? "Una corona es una cubierta personalizada que restaura un diente severamente dañado o debilitado por caries o fracturas, devolviéndole su fuerza, color y anatomía natural."
                  : "A crown is a custom-fitted cap designed to completely encase a severely broken or decayed tooth, fully restoring its original shape, strength, and appearance above the gumline."}
              </p>
              <ul className="space-y-3 font-brandon text-xs text-neutral-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#C5A059]" />
                  <span>{isZh ? "保护根管治疗后的脆弱牙齿" : isEs ? "Protección post-tratamiento de conducto" : "Protects teeth after root canal therapy"}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#C5A059]" />
                  <span>{isZh ? "修复严重磨损、开裂或大面积蛀牙" : isEs ? "Restaura fracturas y caries extensas" : "Restores heavily fractured or decayed enamel"}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#C5A059]" />
                  <span>{isZh ? "可与单颗种植体相结合" : isEs ? "Soporte para implantes individuales" : "Anchors to single dental implants"}</span>
                </li>
              </ul>
            </div>

            {/* DENTAL BRIDGES */}
            <div className="border border-neutral-800 p-8 bg-neutral-900/50">
              <Anchor className="text-[#C5A059] mb-4" size={32} />
              <h3 className="text-2xl font-bold uppercase tracking-wide mb-4">
                {isZh ? "牙桥 (Dental Bridges)" : isEs ? "Puentes Dentales" : "Dental Bridges"}
              </h3>
              <p className="font-brandon text-sm text-neutral-400 leading-relaxed mb-6">
                {isZh
                  ? "牙桥用于连续替换 1 至 4 颗缺失牙齿。它可以锚定在两侧健全的天然邻牙上，也可以由种植体直接支持（Implant-Retained Bridge），免去磨损健康邻牙的烦恼。"
                  : isEs
                  ? "Un puente dental reemplaza de una a cuatro piezas dentales continuas. Se puede anclar sobre los dientes vecinos o ser soportado por implantes para mayor estabilidad."
                  : "A dental bridge fills the gap created by one or more missing teeth in a row. Bridges can be supported by adjacent natural teeth or anchored to dental implants for enhanced longevity."}
              </p>
              <ul className="space-y-3 font-brandon text-xs text-neutral-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#C5A059]" />
                  <span>{isZh ? "防止周围天然牙齿移位与咬合紊乱" : isEs ? "Previene el desplazamiento de dientes vecinos" : "Prevents adjacent teeth from shifting into gaps"}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#C5A059]" />
                  <span>{isZh ? "种植体支持牙桥可保护颌骨密度" : isEs ? "Sostenido por implantes para conservar el hueso" : "Implant-supported options preserve jawbone health"}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#C5A059]" />
                  <span>{isZh ? "恢复完整的咀嚼咀嚼力与面部丰满度" : isEs ? "Devuelve la función de mordida y estética facial" : "Restores full chewing capacity and facial harmony"}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* STEP BY STEP PROCESS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-2">
              {isZh ? "诊疗流程" : isEs ? "Paso a Paso" : "Placement Process"}
            </span>
            <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight mb-6">
              {isZh ? "无痛、精准与高效的诊疗体验" : isEs ? "¿Qué Esperar Durante el Proceso?" : "What to Expect During Treatment"}
            </h2>
            <p className="font-brandon text-neutral-600 mb-8 leading-relaxed">
              {isZh
                ? "在 Tribeca Dental Studio，我们通过 iTero® 3D 数字化扫描与微创贴合技术，确保您的修复体戴入过程舒适、精准无缝："
                : isEs
                ? "Garantizamos un procedimiento cómodo, predecible y preciso mediante escáneres digitales 3D y laboratorios de alta gama:"
                : "We strive to make restorative care comfortable, predictable, and seamless through state-of-the-art 3D imaging and specialized care:"}
            </p>

            <div className="space-y-6 font-brandon text-sm">
              <div className="flex gap-4">
                <span className="font-bold text-[#C5A059] font-ddin text-lg">01.</span>
                <div>
                  <strong className="block text-black font-ddin text-base uppercase">Consultation & Digital Scans</strong>
                  <p className="text-neutral-600">Comprehensive exam using low-radiation digital X-rays and 3D intraoral optical scanning—no uncomfortable impression putty required.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="font-bold text-[#C5A059] font-ddin text-lg">02.</span>
                <div>
                  <strong className="block text-black font-ddin text-base uppercase">Precision Preparation</strong>
                  <p className="text-neutral-600">The tooth is gently reshaped to accommodate the restoration. For bridges, supporting abutment teeth or implants are prepared.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="font-bold text-[#C5A059] font-ddin text-lg">03.</span>
                <div>
                  <strong className="block text-black font-ddin text-base uppercase">Temporary Protection</strong>
                  <p className="text-neutral-600">A comfortable temporary crown or bridge is fitted to protect your tooth while our master laboratory ceramists fabricate your permanent piece.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="font-bold text-[#C5A059] font-ddin text-lg">04.</span>
                <div>
                  <strong className="block text-black font-ddin text-base uppercase">Final Bonding & Alignment</strong>
                  <p className="text-neutral-600">Your permanent porcelain restoration is securely bonded, followed by fine bite adjustments to ensure natural comfort and function.</p>
                </div>
              </div>
            </div>
          </div>

          {/* AFTERCARE TIPS */}
          <div className="bg-neutral-100 p-8 md:p-12 border border-neutral-200">
            <h3 className="text-2xl font-light uppercase tracking-tight mb-6">
              {isZh ? "术后保养与长久维持" : isEs ? "Cuidado y Mantenimiento" : "Caring for Your Restoration"}
            </h3>
            <p className="font-brandon text-xs text-neutral-600 mb-6">
              {isZh
                ? "科学的日常护理可使您的牙冠或牙桥维持 10 至 15 年甚至更久："
                : isEs
                ? "Un cuidado adecuado prolongará la vida útil de su corona o puente por más de 10 a 15 años:"
                : "Proper maintenance will preserve the strength and beauty of your crowns or bridges for 10–15+ years:"}
            </p>
            <ul className="space-y-4 font-brandon text-sm text-neutral-800">
              {[
                isZh ? "坚持每日早晚刷牙，并特别注意牙冠边缘的清洁" : isEs ? "Cepillado diario y uso de hilo dental alrededor de los márgenes" : "Maintain meticulous oral hygiene around crown and bridge margins",
                isZh ? "使用牙桥穿线器 (Floss Threaders) 或冲牙器清洁牙桥下方" : isEs ? "Utilice irrigadores bucales o hilos especiales para limpiar bajo el puente" : "Use water flossers or floss threaders beneath bridge pontics",
                isZh ? "避免硬物咀嚼（如冰块、硬糖或用牙齿咬开包装）" : isEs ? "Evite morder objetos duros como hielo o dulces rígidos" : "Avoid biting on hard objects like ice, hard candy, or pens",
                isZh ? "磨牙患者配备夜间定制夜磨牙垫 (Nightguard)" : isEs ? "Uso de férula nocturna personalizada si padece bruxismo" : "Wear a custom nightguard if you suffer from teeth grinding or bruxism",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#C5A059] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
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
            {isZh ? "重获强健自信的微笑" : isEs ? "Restaure la Salud y Belleza de su Sonrisa" : "Rebuild Your Smile with Precision"}
          </h2>
          <p className="font-brandon text-neutral-400 mb-8 max-w-xl mx-auto leading-relaxed">
            {isZh
              ? "预约曼哈顿下城全科与专科医生团队，为您量身打造高度贴合、自然逼真且强健耐用的牙冠与牙桥方案。"
              : isEs
              ? "Agende una consulta con nuestros especialistas en Lower Manhattan y descubra la mejor opción de restauración para su boca."
              : "Schedule a consultation with our experienced Manhattan specialists to determine the optimal crown or bridge solution for your bite."}
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