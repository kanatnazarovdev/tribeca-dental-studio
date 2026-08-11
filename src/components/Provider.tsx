"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "./Container";

interface ProviderProps {
  lang: string;
}

const COPY = {
  en: {
    eyebrow: "Meet Your Dentist",
    name: "Dr. Nina Izhaky",
    role: "Founder & Lead Dentist",
    body: "With an artist's eye and a surgeon's precision, Dr. Izhaky founded Tribeca Dental Studio on a simple belief — that world-class dentistry should feel personal. Every treatment plan begins with listening, and ends with a result designed around you.",
    credentials: [
      "Comprehensive & cosmetic dentistry",
      "Digital smile design",
      "Advanced implant & restorative care",
    ],
    cta: "Read Full Bio",
  },
  es: {
    eyebrow: "Conozca a su Dentista",
    name: "Dra. Nina Izhaky",
    role: "Fundadora y Dentista Principal",
    body: "Con el ojo de una artista y la precisión de una cirujana, la Dra. Izhaky fundó Tribeca Dental Studio sobre una idea sencilla: la odontología de primer nivel debe sentirse personal. Cada plan comienza escuchando y termina con un resultado diseñado para usted.",
    credentials: [
      "Odontología integral y estética",
      "Diseño digital de sonrisa",
      "Implantes y odontología restauradora avanzada",
    ],
    cta: "Leer Biografía Completa",
  },
  zh: {
    eyebrow: "认识您的牙医",
    name: "Nina Izhaky 医生",
    role: "创始人兼首席牙医",
    body: "凭借艺术家的眼光与外科医生的精准，Izhaky 医生秉持一个简单的信念创立了翠贝卡牙科诊所——顶级牙科应当充满人情味。每一个治疗方案都从倾听开始，以为您量身打造的结果收尾。",
    credentials: ["综合与美容牙科", "数字化微笑设计", "先进种植与修复治疗"],
    cta: "阅读完整简介",
  },
} as const;

export default function Provider({ lang }: ProviderProps) {
  const l = (["en", "es", "zh"].includes(lang) ? lang : "en") as "en" | "es" | "zh";
  const t = COPY[l];

  return (
    <section className="bg-[#F7F4EF] py-24 md:py-40" id="provider">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="relative aspect-[4/5] w-full overflow-hidden bg-gray-200"
          >
            {/* TODO(assets): replace with Dr. Izhaky's portrait. */}
            <Image
              src="/drNina.webp"
              alt="Dr. Nina Izhaky, founder of Tribeca Dental Studio"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute bottom-6 left-6 right-6 border-t border-white/40 pt-4">
              <p className="font-serif text-2xl italic text-white drop-shadow">
                {t.name}
              </p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
          >
            <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.6em] text-[#C5A059]">
              {t.eyebrow}
            </span>
            <h2 className="font-serif text-4xl font-light leading-tight text-black md:text-6xl">
              {t.name}
            </h2>
            <p className="mt-3 text-[11px] uppercase tracking-[0.3em] text-gray-400">
              {t.role}
            </p>

            <p className="mt-8 max-w-lg text-lg font-light leading-relaxed text-gray-600">
              {t.body}
            </p>

            <ul className="mt-10 space-y-3">
              {t.credentials.map((c) => (
                <li
                  key={c}
                  className="flex items-center gap-4 text-sm font-light text-gray-700"
                >
                  <span className="h-px w-6 bg-[#C5A059]" />
                  {c}
                </li>
              ))}
            </ul>

            <Link
              href={`/${l}/team/dr-nina-izhaky`}
              className="group mt-12 inline-flex items-center gap-3 border-b border-black/20 pb-2 text-[11px] uppercase tracking-[0.3em] text-black transition-colors hover:border-[#C5A059] hover:text-[#C5A059]"
            >
              {t.cta}
              <span className="transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
