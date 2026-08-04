/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "./Container";

interface ServicesProps {
  lang: string;
}

const CATEGORIES = [
  {
    slug: "preventive-dentistry",
    en: "Preventive Dentistry",
    es: "Odontología Preventiva",
    zh: "预防性牙科",
    blurb: {
      en: "Cleanings, exams & sealants that keep problems away.",
      es: "Limpiezas, exámenes y selladores que previenen problemas.",
      zh: "洁牙、检查与窝沟封闭，防患于未然。",
    },
    innerServices: [
      {
        en: "Dental Exams & Cleanings",
        es: "Exámenes y Limpiezas Dentales",
        zh: "牙科检查与牙齿洁治",
        slug: "services/dental-exams-teeth-cleanings",
      },
      {
        en: "Oral Cancer Screening",
        es: "Detección de Cáncer Oral",
        zh: "口腔癌筛查",
        slug: "services/oral-cancer-screening",
      },
      {
        en: "Gum Disease Treatment",
        es: "Tratamiento de la Periodontitis",
        zh: "牙周病治疗",
        slug: "services/gum-disease-treatment",
      },
    ],
  },
  {
    slug: "restorative-dentistry",
    en: "Restorative Dentistry",
    es: "Odontología Restauradora",
    zh: "修复牙科",
    blurb: {
      en: "Fillings, crowns & bridges that rebuild function.",
      es: "Empastes, coronas y puentes que restauran the función.",
      zh: "补牙、牙冠与牙桥，重建咀嚼功能。",
    },
    innerServices: [
      {
        en: "Dental Fillings",
        es: "Empastes Dentales",
        zh: "牙科补牙",
        slug: "services/dental-fillings",
      },
      {
        en: "Root Canal Treatment",
        es: "Tratamiento de Conducto",
        zh: "根管治疗",
        slug: "services/root-canal-treatment",
      },
      {
        en: "Dental Crowns & Bridges",
        es: "Coronas y Puentes Dentales",
        zh: "牙冠与牙桥修复",
        slug: "services/dental-crowns-bridges",
      },
      {
        en: "Dental Implants",
        es: "Implantes Dentales",
        zh: "种植牙修复",
        slug: "services/dental-implants",
      },
      {
        en: "Dentures",
        es: "Dentaduras Postizas",
        zh: "活动假牙与全口义齿",
        slug: "services/dentures",
      },
    ],
  },
  {
    slug: "cosmetic-dentistry",
    en: "Cosmetic Dentistry",
    es: "Odontología Estética",
    zh: "美容牙科",
    blurb: {
      en: "Veneers & whitening for a smile designed around you.",
      es: "Carillas y blanqueamiento para una sonrisa a su medida.",
      zh: "贴面与美白，为您量身设计笑容。",
    },
    innerServices: [
      {
        en: "Teeth Whitening",
        es: "Blanqueamiento Dental",
        zh: "冷光美白与药物美白",
        slug: "teeth-whitening",
      },
      {
        en: "Porcelain Veneers",
        es: "Carillas de Porcelana",
        zh: "全瓷美学贴面",
        slug: "porcelain-veneers-lumineers",
      },
      {
        en: "Crown Lengthening & Gingivectomy",
        es: "Alargamiento de Corona",
        zh: "牙冠延长术与龈切除",
        slug: "services/crown-lengthening-gingivectomy",
      },
      {
        en: "Dental Bonding",
        es: "Adhesión Dental",
        zh: "牙齿复合树脂美学微创修补",
        slug: "dental-bonding",
      },
    ],
  },
  {
    slug: "root-canal-therapy",
    en: "Root Canal Therapy",
    es: "Tratamiento de Conducto",
    zh: "根管治疗",
    blurb: {
      en: "Pain relief that saves the natural tooth.",
      es: "Alivio del dolor que salva el diente natural.",
      zh: "缓解疼痛，保留天然牙齿。",
    },
  },
  {
    slug: "pediatric-dentistry",
    en: "Pediatric Dentistry",
    es: "Odontopediatría",
    zh: "儿童牙科",
    blurb: {
      en: "Gentle, anxiety-free care for our youngest patients.",
      es: "Cuidado suave y sin ansiedad para los más pequeños.",
      zh: "温和无焦虑，呵护最年幼的患者。",
    },
  },
  {
    slug: "airway-orthodontics",
    en: "Airway Treatment",
    es: "Tratamientos de Vías Respiratorias",
    zh: "气道治疗",
    blurb: {
      en: "Breathe & sleep better through airway-focused care.",
      es: "Respire y duerma mejor con un enfoque en las vías respiratorias.",
      zh: "以气道为核心，改善呼吸与睡眠。",
    },
    innerServices: [
      {
        en: "NightLase®",
        es: "NightLase®",
        zh: "NightLase® 激光抗鼾症治疗",
        slug: "services/nightlase",
      },
      {
        en: "Palatal Expansion (MARPE)",
        es: "Expansión Palatina (MARPE)",
        zh: "微种植体辅助骨龄扩弓",
        slug: "services/palatal-expansion-marpe",
      },
    ],
  },
  {
    slug: "orthodontics",
    en: "Orthodontics",
    es: "Ortodoncia",
    zh: "正畸治疗",
    blurb: {
      en: "Invisalign & braces for beautifully aligned teeth.",
      es: "Invisalign y brackets para una alineación perfecta.",
      zh: "隐适美与牙套，塑造整齐牙列。",
    },
    innerServices: [
      {
        en: "Traditional Braces",
        es: "Brackets Tradicionales",
        zh: "传统固定金属及陶瓷托槽",
        slug: "services/traditional-braces",
      },
      {
        en: "Invisalign® Treatments",
        es: "Tratamientos Invisalign®",
        zh: "Invisalign® 隐适美隐形矫正",
        slug: "invisalign-treatments",
      },
      {
        en: "Tongue & Lip Tie Treatment",
        es: "Tratamiento de Frenillo",
        zh: "舌系带与唇系带激光调整术",
        slug: "services/tongue-lip-tie-treatment",
      },
    ],
  },
  {
    slug: "oral-surgery",
    en: "Oral Surgery",
    es: "Cirugía Oral",
    zh: "口腔外科",
    blurb: {
      en: "Extractions & wisdom teeth handled with precision.",
      es: "Extracciones y muelas del juicio con precisión.",
      zh: "拔牙与智齿处理，精准可靠。",
    },
    innerServices: [
      {
        en: "Tooth Extractions",
        es: "Extracciones Dentales",
        zh: "常规微创拔牙",
        slug: "services/tooth-extractions",
      },
      {
        en: "Wisdom Teeth Removal",
        es: "Extracción de Muelas del Juicio",
        zh: "阻生低位智齿拔除",
        slug: "services/wisdom-teeth-removal",
      },
    ],
  },
  {
    slug: "dental-implants",
    en: "Dental Implants",
    es: "Implantes Dentales",
    zh: "种植牙",
    external: "https://implants.tribecadentalstudio.com/",
    blurb: {
      en: "Permanent, natural-looking tooth replacement.",
      es: "Reemplazo dental permanente y de aspecto natural.",
      zh: "永久、自然的牙齿替换方案。",
    },
    innerServices: [
      {
        en: "All-on-4® Dental Implants",
        es: "Implantes All-on-4®",
        zh: "All-on-4® 全口种植牙修复",
        slug: "services/all-on-4-dental-implants",
      },
      {
        en: "Zygomatic Implants",
        es: "Implantes Cigomáticos",
        zh: "颧骨种植牙（穿颧种植）",
        slug: "services/zygomatic-implants",
      },
    ],
  },
] as const;

const HEAD = {
  en: {
    eyebrow: "What We Offer",
    title: "Services",
    more: "Explore discipline",
  },
  es: {
    eyebrow: "Nuestros Servicios",
    title: "Servicios",
    more: "Explorar disciplina",
  },
  zh: { eyebrow: "我们的服务", title: "服务项目", more: "探索核心学科" },
} as const;

export default function Services({ lang }: ServicesProps) {
  const l = (["en", "es", "zh"].includes(lang) ? lang : "en") as
    | "en"
    | "es"
    | "zh";
  const h = HEAD[l];

  // Helper handling prefix-free safe routing path logic for English
  const getRoutePath = (slug: string) => {
    if (l === "en") return `/${slug}`;
    return `/${l}/${slug}`;
  };

  return (
    <section
      className="bg-[#FBFBFA] py-24 md:py-40 border-t border-black/[0.03]"
      id="services"
    >
      <Container>
        {/* Editorial Title Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="mb-24 text-center md:text-left flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-black/[0.06] pb-8"
        >
          <div>
            <span className="mb-4 block text-[11px] font-bold uppercase tracking-[0.8em] text-[#C5A059]">
              {h.eyebrow}
            </span>
            <h2 className="font-serif text-5xl font-light leading-none text-black md:text-7xl tracking-tight">
              {h.title}
            </h2>
          </div>
          <p className="text-base font-light text-neutral-400 max-w-sm font-serif italic text-left md:text-right leading-relaxed">
            Comprehensive multidisciplinary paradigms delivered seamlessly under
            one studio.
          </p>
        </motion.div>

        {/* Dynamic Interactive Service Grid */}
        <div className="grid grid-cols-1 border-l border-t border-black/[0.06] md:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => {
            const href = "external" in c ? c.external : getRoutePath(c.slug);
            const isExternal = "external" in c;
            const hasInnerMenu = "innerServices" in c;

            return (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                className="group flex flex-col border-b border-r border-black/[0.06] p-10 bg-white transition-all duration-500 hover:bg-[#F7F4EF]/40"
              >
                {/* Counter Metric Row */}
                <div className="flex items-start justify-between mb-10">
                  <span className="font-serif text-3xl font-light text-black/15 transition-colors duration-500 group-hover:text-[#C5A059]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {!hasInnerMenu && (
                    <Link
                      href={href}
                      {...(isExternal
                        ? { target: "_blank", rel: "noopener" }
                        : {})}
                    >
                      <span className="translate-x-0 text-[#C5A059] opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100 block cursor-pointer text-lg">
                        →
                      </span>
                    </Link>
                  )}
                </div>

                {/* Content Layout Engine */}
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    {/* Category Title - Enlarged layout configuration */}
                    <Link
                      href={href}
                      {...(isExternal
                        ? { target: "_blank", rel: "noopener" }
                        : {})}
                    >
                      <h3 className="font-serif text-3xl font-normal leading-tight text-black transition-colors duration-500 group-hover:text-[#C5A059] md:text-4xl cursor-pointer tracking-tight">
                        {c[l]}
                      </h3>
                    </Link>
                    {/* Classy Paragraph Description - Enlarged font structure */}
                    <p className="mt-4 max-w-xs text-base font-light leading-relaxed text-gray-400">
                      {c.blurb[l]}
                    </p>
                  </div>

                  {/* Deep Nested Treatments List Menu */}
                  {hasInnerMenu && (
                    <div className="mt-10 pt-8 border-t border-black/[0.05] flex flex-col space-y-4">
                      {c.innerServices.map((inner) => (
                        <Link
                          key={inner.slug}
                          href={getRoutePath(inner.slug)}
                          className="text-base font-light text-neutral-500 hover:text-[#C5A059] tracking-wide transition-colors duration-300 flex items-center justify-between group/inner py-0.5"
                        >
                          <span>{inner[l]}</span>
                          <span className="opacity-0 -translate-x-2 group-hover/inner:opacity-100 group-hover/inner:translate-x-0 transition-all duration-300 font-serif italic text-sm text-[#C5A059]">
                            →
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Secondary CTA Fallback Tag String */}
                {!hasInnerMenu && (
                  <Link
                    href={href}
                    {...(isExternal
                      ? { target: "_blank", rel: "noopener" }
                      : {})}
                    className="mt-10 block"
                  >
                    <span className="text-[11px] uppercase tracking-[0.3em] text-gray-400 transition-colors duration-500 group-hover:text-black cursor-pointer font-bold">
                      {h.more}
                    </span>
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
