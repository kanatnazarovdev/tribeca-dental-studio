"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "./Container";

interface InstagramProps {
  lang: string;
}

const HANDLE = "tribeca_dental_studio";
const PROFILE = `https://www.instagram.com/${HANDLE}`;

const COPY = {
  en: {
    eyebrow: `@${HANDLE}`,
    title: "We're here to help you get the perfect smile",
    cta: "Follow on Instagram",
  },
  es: {
    eyebrow: `@${HANDLE}`,
    title: "Estamos aquí para ayudarle a lograr la sonrisa perfecta",
    cta: "Síganos en Instagram",
  },
  zh: {
    eyebrow: `@${HANDLE}`,
    title: "我们助您拥有完美笑容",
    cta: "在 Instagram 关注我们",
  },
} as const;

// TODO(feed): placeholder tiles. Wire to the live IG feed or a Sanity gallery.
const TILES = [
  "/HeroPhoto.webp",
  "/mission.webp",
  "/stressfree.webp",
  "/stressfree2.webp",
  "/team.webp",
  "/lifetime.webp",
];

export default function Instagram({ lang }: InstagramProps) {
  const l = (["en", "es", "zh"].includes(lang) ? lang : "en") as "en" | "es" | "zh";
  const t = COPY[l];

  return (
    <section className="bg-white py-24 md:py-32" id="instagram">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="mb-14 text-center"
        >
          <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.5em] text-[#C5A059]">
            {t.eyebrow}
          </span>
          <h2 className="mx-auto max-w-2xl font-serif text-3xl font-light leading-tight text-black md:text-5xl">
            {t.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
          {TILES.map((src, i) => (
            <motion.a
              key={i}
              href={PROFILE}
              target="_blank"
              rel="noopener"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative aspect-square overflow-hidden bg-gray-100"
            >
              <Image
                src={src}
                alt={`${HANDLE} on Instagram`}
                fill
                sizes="(max-width: 768px) 50vw, 16vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/30" />
            </motion.a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={PROFILE}
            target="_blank"
            rel="noopener"
            className="group inline-flex items-center gap-3 border-b border-black/20 pb-2 text-[11px] uppercase tracking-[0.3em] text-black transition-colors hover:border-[#C5A059] hover:text-[#C5A059]"
          >
            {t.cta}
            <span className="transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}
