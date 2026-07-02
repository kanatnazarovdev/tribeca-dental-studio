"use client";
import { motion } from "framer-motion";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

/* ────────────────────────────────────────────────────────────────────────
   EDIT ME — hero copy per locale. EN is the source of truth.
   ─────────────────────────────────────────────────────────────────────── */
const COPY = {
  en: {
    badge: "Tribeca, New York",
    title: "Dentist in Tribeca, NY",
    tagline:
      "When it comes to oral health, leave it to the practice that treats you like family.",
    cta: "Book Your Visit",
    scroll: "Discover",
  },
  es: {
    badge: "Tribeca, Nueva York",
    title: "Dentista en Tribeca, NY",
    tagline:
      "Cuando se trata de salud bucal, confíe en la consulta que lo trata como a la familia.",
    cta: "Reserve su Cita",
    scroll: "Descubrir",
  },
  zh: {
    badge: "纽约翠贝卡",
    title: "纽约翠贝卡牙医",
    tagline: "关乎口腔健康，请交给像家人一样待您的诊所。",
    cta: "立即预约",
    scroll: "探索",
  },
} as const;

/* ────────────────────────────────────────────────────────────────────────
   EDIT ME — background media.
   Set USE_VIDEO to true once your files are in /public.
   ─────────────────────────────────────────────────────────────────────── */
const USE_VIDEO = true;
const VIDEO_WEBM = "/banner.webm"; // upload to /public
const VIDEO_MP4 = "/banner.mp4"; //  upload to /public
const POSTER = "/banner.webp"; // replace with adult still

interface HeroProps {
  lang: string;
}

export default function Hero({ lang }: HeroProps) {
  const scrollToId = useSmoothScroll();
  const t = COPY[(lang as keyof typeof COPY) in COPY ? (lang as keyof typeof COPY) : "en"];

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-[#0B0B0B]">
      {/* Background media */}
      {USE_VIDEO ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={POSTER}
          className="absolute inset-0 z-0 h-full w-full object-cover opacity-70"
        >
          {/* <source src={VIDEO_WEBM} type="video/webm" /> */}
          <source src={VIDEO_MP4} type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url('${POSTER}')` }}
        />
      )}

      {/* Cinematic overlays */}
      <div className="absolute inset-0 z-10 bg-black/40" />
      <div className="absolute inset-0 z-10 bg-linear-to-b from-black/50 via-transparent to-black/80" />

      <div className="relative z-20 flex h-full flex-col items-start justify-end px-6 pb-28 text-left text-white md:px-16 md:pb-32 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-[#C5A059]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.5em] text-[#C5A059]">
            {t.badge}
          </span>
          <span className="h-px w-8 bg-[#C5A059]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="mb-8 max-w-5xl font-serif text-6xl font-light leading-[1.05] tracking-tight drop-shadow-md md:text-8xl lg:text-[8.5rem]"
        >
          {t.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="mb-14 max-w-xl font-serif text-xl font-light italic leading-relaxed text-white/85 md:text-2xl"
        >
          {t.tagline}
        </motion.p>

        <motion.button
          onClick={() => scrollToId("leadForm")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="group relative overflow-hidden border border-white/40 px-12 py-4 transition-colors duration-700 hover:border-[#C5A059]"
        >
          <span className="relative z-10 text-[11px] font-medium uppercase tracking-[0.5em] transition-colors duration-700 group-hover:text-black">
            {t.cta}
          </span>
          <span className="absolute inset-0 translate-y-full bg-[#C5A059] transition-transform duration-700 ease-out group-hover:translate-y-0" />
        </motion.button>
      </div>

      {/* Scroll cue */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        onClick={() => scrollToId("services")}
        className="group absolute bottom-10 right-6 z-30 hidden flex-col items-center md:right-16 md:flex lg:right-24"
        aria-label={t.scroll}
      >
        <span className="mb-4 text-[8px] uppercase tracking-[0.6em] text-[#C5A059] opacity-70 transition-opacity duration-500 group-hover:opacity-100">
          {t.scroll}
        </span>
        <span className="flex h-9.5 w-5.5 justify-center rounded-full border border-[#C5A059]/40 p-1.5">
          <motion.span
            animate={{ y: [0, 16, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-1 w-1 rounded-full bg-[#C5A059]"
          />
        </span>
      </motion.button>
    </section>
  );
}
