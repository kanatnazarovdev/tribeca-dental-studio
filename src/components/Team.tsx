"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "./Container";

interface TeamProps {
  lang: string;
}

const COPY = {
  en: {
    eyebrow: "The People",
    title: "A team that treats you like family",
    body: "From your first hello to your final polish, you are cared for by a team that knows your name and your story.",
    cta: "Meet the Team",
  },
  es: {
    eyebrow: "El Equipo",
    title: "Un equipo que lo trata como a la familia",
    body: "Desde el primer saludo hasta el último detalle, lo cuida un equipo que conoce su nombre y su historia.",
    cta: "Conozca al Equipo",
  },
  zh: {
    eyebrow: "我们的团队",
    title: "像家人一样待您的团队",
    body: "从第一声问候到最后的抛光，照护您的团队记得您的名字，也懂您的故事。",
    cta: "认识团队",
  },
} as const;

export default function Team({ lang }: TeamProps) {
  const l = (["en", "es", "zh"].includes(lang) ? lang : "en") as "en" | "es" | "zh";
  const t = COPY[l];

  return (
    <section className="bg-[#F7F4EF] py-24 md:py-40" id="team">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.7em] text-[#C5A059]">
            {t.eyebrow}
          </span>
          <h2 className="font-serif text-4xl font-light leading-tight text-black md:text-6xl">
            {t.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-gray-600">
            {t.body}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative aspect-[16/9] w-full overflow-hidden bg-gray-200"
        >
          <Image
            src="/team.webp"
            alt="The team at Tribeca Dental Studio"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            href={`/${l}/team/`}
            className="group inline-flex items-center gap-3 border-b border-black/20 pb-2 text-[11px] uppercase tracking-[0.3em] text-black transition-colors hover:border-[#C5A059] hover:text-[#C5A059]"
          >
            {t.cta}
            <span className="transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
