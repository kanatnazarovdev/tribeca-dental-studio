"use client";
import { motion } from "framer-motion";
import Container from "./Container";

interface PhilosophyProps {
  lang: string;
}

const COPY = {
  en: {
    eyebrow: "Why Tribeca Dental Studio",
    title: "Our Commitment to Excellence",
    intro:
      "At Tribeca Dental Studio, patients can look forward to visiting an office that pairs advanced technology with genuine, unhurried care — where every decision is made with your comfort and long-term health in mind.",
    pillars: [
      { k: "01", t: "Technology", d: "Digital diagnostics and modern techniques for precise, comfortable treatment." },
      { k: "02", t: "Compassion", d: "A calm, welcoming space where you are treated like family — never a number." },
      { k: "03", t: "Expertise", d: "A full spectrum of care under one roof, delivered by a highly trained team." },
    ],
  },
  es: {
    eyebrow: "Por qué Tribeca Dental Studio",
    title: "Nuestro Compromiso con la Excelencia",
    intro:
      "En Tribeca Dental Studio, los pacientes encuentran un consultorio que combina tecnología avanzada con un cuidado genuino y sin prisas, donde cada decisión se toma pensando en su comodidad y su salud a largo plazo.",
    pillars: [
      { k: "01", t: "Tecnología", d: "Diagnóstico digital y técnicas modernas para un tratamiento preciso y cómodo." },
      { k: "02", t: "Compasión", d: "Un espacio cálido y tranquilo donde lo tratamos como a la familia." },
      { k: "03", t: "Experiencia", d: "Todo el espectro de cuidados bajo un mismo techo, por un equipo altamente capacitado." },
    ],
  },
  zh: {
    eyebrow: "为何选择翠贝卡牙科诊所",
    title: "我们对卓越的承诺",
    intro:
      "在翠贝卡牙科诊所，患者将走进一间将先进技术与真诚、从容护理相结合的诊所——每一个决定都以您的舒适与长期健康为出发点。",
    pillars: [
      { k: "01", t: "技术", d: "数字化诊断与现代技术，带来精准而舒适的治疗。" },
      { k: "02", t: "关怀", d: "宁静温馨的空间，我们像对待家人一样对待您。" },
      { k: "03", t: "专业", d: "一站式全方位护理，由训练有素的团队提供。" },
    ],
  },
} as const;

export default function Philosophy({ lang }: PhilosophyProps) {
  const l = (["en", "es", "zh"].includes(lang) ? lang : "en") as "en" | "es" | "zh";
  const t = COPY[l];

  return (
    <section className="bg-white py-24 md:py-40" id="commitment">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.7em] text-[#C5A059]">
            {t.eyebrow}
          </span>
          <h2 className="font-serif text-4xl font-light leading-tight text-black md:text-6xl">
            {t.title}
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed text-gray-600">
            {t.intro}
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-px border border-black/5 bg-black/5 md:grid-cols-3">
          {t.pillars.map((p, i) => (
            <motion.div
              key={p.k}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white p-12 text-center"
            >
              <span className="font-serif text-4xl font-light text-[#C5A059]">
                {p.k}
              </span>
              <h3 className="mt-6 text-sm font-bold uppercase tracking-[0.3em] text-black">
                {p.t}
              </h3>
              <p className="mx-auto mt-4 max-w-xs text-sm font-light leading-relaxed text-gray-500">
                {p.d}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
