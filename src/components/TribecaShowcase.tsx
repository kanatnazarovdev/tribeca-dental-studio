"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface TribecaExperienceCardsProps {
  lang: string;
}

const CARDS_DATA = [
  {
    id: "01",
    slug: "services/cosmetic-dentistry",
    image: "/multispecialty.webp",
    title: {
      en: "Comprehensive Multi-Specialty Care",
      es: "Atención Multiespecialidad Integral",
      zh: "全科与专科一体化诊疗",
    },
    desc: {
      en: "From cosmetic transformations to restorative care and implants, NYC’s top specialists collaborate seamlessly under one roof for tailored results.",
      es: "Desde transformaciones estéticas hasta implantes y rehabilitación, los mejores especialistas de NYC colaboran bajo un mismo techo.",
      zh: "从美学重塑到复杂种植与修复，纽约顶尖专家团队在同一诊室无缝协作，为您量身定制全方位诊疗方案。",
    },
  },
  {
    id: "02",
    slug: "services/porcelain-veneers-lumineers",
    image: "/premierDental.webp",
    title: {
      en: "NYC’s Premier Dental Destination",
      es: "El Destino Dental Líder en NYC",
      zh: "纽约首屈一指的齿科殿堂",
    },
    desc: {
      en: "Situated in the heart of Tribeca, we unite advanced digital dentistry with a refined, boutique experience tailored to every patient.",
      es: "Ubicado en el corazón de Tribeca, combinamos tecnología digital de vanguardia con una experiencia refinada y personalizada.",
      zh: "坐落于 Tribeca 核心街区，我们将前沿数字牙科科技与高定奢华体验完美融合，重塑高品质诊疗标准。",
    },
  },
  {
    id: "03",
    slug: "services/porcelain-veneers",
    image: "/quality.webp",
    title: {
      en: "Uncompromising Quality & Precision",
      es: "Calidad y Precisión Incomparables",
      zh: "卓越品质与精益求精",
    },
    desc: {
      en: "Recognized among New York's elite practices, Tribeca Dental Studio sets the benchmark for clinical excellence, artful aesthetics, and comfort.",
      es: "Reconocido entre los consultorios más prestigiados de Nueva York, definimos el estándar en excelencia clínica y estética.",
      zh: "作为纽约屡获殊荣的综合齿科诊所，翠贝卡牙科诊所凭借精湛医术、极致美学与舒适体验树立行业标杆。",
    },
  },
];

export default function TribecaExperienceCards({
  lang,
}: TribecaExperienceCardsProps) {
  const l = (["en", "es", "zh"].includes(lang) ? lang : "en") as
    | "en"
    | "es"
    | "zh";

  const getPath = (slug: string) => {
    if (l === "en") return `/${slug}`;
    return `/${l}/${slug}`;
  };

  const sectionHeaders = {
    en: {
      sub: "The Tribeca Standard",
      main: "NYC’s Leading Multi-Specialty Dental Studio",
    },
    es: {
      sub: "El Estándar Tribeca",
      main: "El Estudio Dental Multiespecialidad Líder en NYC",
    },
    zh: { sub: "翠贝卡卓越标准", main: "纽约领先的多专科综合齿科诊所" },
  };

  return (
    <section className="w-full bg-[#FAFAF4] text-black py-12 md:py-12 overflow-hidden">
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto px-6 mb-12 md:mb-16">
        {/* Eyebrow Subtitle */}
        <span className="font-ddin font-bold text-xs uppercase tracking-[0.2em] text-neutral-500 block mb-3">
          {sectionHeaders[l].sub}
        </span>

        {/* Main Header - Changed font-medium to font-bold */}
        <h2 className="font-ddin font-bold text-xl md:text-3xl tracking-tight text-black uppercase">
          {sectionHeaders[l].main}
        </h2>
      </div>

      {/* 100% FULL-BLEED GRID WITH ZERO GAPS */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-0 p-0 m-0">
        {CARDS_DATA.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            className="group flex flex-col w-full m-0 p-0"
          >
            {/* FULL-WIDTH FLUSH IMAGE */}
            <Link
              href={getPath(card.slug)}
              className="relative w-full aspect-video overflow-hidden bg-neutral-900 block m-0"
            >
              <Image
                src={card.image}
                alt={card.title[l]}
                fill
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 group-hover:grayscale-0"
              />
            </Link>

            {/* TEXT CONTAINER */}
            <div className="flex flex-col items-start text-left p-6 md:p-8 lg:p-10 bg-[#FAFAF4]">
              <h3 className="font-ddin text-xl md:text-2xl font-bold tracking-tight text-black uppercase mb-3">
                <Link
                  href={getPath(card.slug)}
                  className="hover:text-neutral-600 transition-colors duration-300"
                >
                  {card.title[l]}
                </Link>
              </h3>

              <p className="font-ddin text-[16px] font-normal text-neutral-600 leading-relaxed">
                {card.desc[l]}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
