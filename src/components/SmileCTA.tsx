"use client";
import { motion } from "framer-motion";

interface SmileCTAProps {
  lang: string;
}

const COPY = {
  en: {
    eyebrow: "Cosmetic Dentistry",
    title: "Don't wait for the smile you dream about.",
    body: "From subtle refinements to complete smile makeovers, our team designs every detail around your face, your goals, and the way you want to feel.",
    cta: "Book a Consultation",
  },
  es: {
    eyebrow: "Odontología Estética",
    title: "No espere más por la sonrisa que sueña.",
    body: "Desde retoques sutiles hasta transformaciones completas, diseñamos cada detalle en torno a su rostro, sus metas y cómo quiere sentirse.",
    cta: "Reservar una Consulta",
  },
  zh: {
    eyebrow: "美容牙科",
    title: "别再等待您梦想中的笑容。",
    body: "从细微的调整到完整的微笑改造，我们围绕您的脸型、目标与感受，精心设计每一个细节。",
    cta: "预约咨询",
  },
} as const;

// TODO(assets): replace with a full-bleed cosmetic/editorial image.
const BG = "/stressfree2.webp";

export default function SmileCTA({ lang }: SmileCTAProps) {
  const l = (["en", "es", "zh"].includes(lang) ? lang : "en") as "en" | "es" | "zh";
  const t = COPY[l];

  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-[#0B0B0B]">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-45"
        style={{ backgroundImage: `url('${BG}')` }}
      />
      <div className="absolute inset-0 z-10 bg-black/40" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="relative z-20 mx-auto max-w-3xl px-6 text-center text-white"
      >
        <span className="mb-8 block text-[10px] font-bold uppercase tracking-[0.7em] text-[#C5A059]">
          {t.eyebrow}
        </span>
        <h2 className="font-serif text-4xl font-light leading-[1.1] md:text-6xl">
          {t.title}
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-lg font-light leading-relaxed text-white/80">
          {t.body}
        </p>

        <a
          href="https://truelark.com/bookonline/#/location?businessId=80613"
          target="_blank"
          rel="noopener"
          className="group relative mt-12 inline-block overflow-hidden border border-white/40 px-12 py-4 transition-colors duration-700 hover:border-[#C5A059]"
        >
          <span className="relative z-10 text-[11px] font-medium uppercase tracking-[0.5em] transition-colors duration-700 group-hover:text-black">
            {t.cta}
          </span>
          <span className="absolute inset-0 translate-y-full bg-[#C5A059] transition-transform duration-700 ease-out group-hover:translate-y-0" />
        </a>
      </motion.div>
    </section>
  );
}
