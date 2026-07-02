"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "./Container";

interface ServicesProps {
  lang: string;
}

/**
 * The 9 top-level service categories from the legacy homepage.
 * Internal hrefs are locale-prefixed + trailing-slashed for the new taxonomy;
 * a legacy→new 301 redirect map is a separate migration step.
 * Dental Implants points at the external subdomain, as on legacy.
 */
const CATEGORIES = [
  { slug: "preventive-dentistry", en: "Preventive Dentistry", es: "Odontología Preventiva", zh: "预防性牙科", blurb: { en: "Cleanings, exams & sealants that keep problems away.", es: "Limpiezas, exámenes y selladores que previenen problemas.", zh: "洁牙、检查与窝沟封闭，防患于未然。" } },
  { slug: "restorative-dentistry", en: "Restorative Dentistry", es: "Odontología Restauradora", zh: "修复牙科", blurb: { en: "Fillings, crowns & bridges that rebuild function.", es: "Empastes, coronas y puentes que restauran la función.", zh: "补牙、牙冠与牙桥，重建咀嚼功能。" } },
  { slug: "cosmetic-dentistry", en: "Cosmetic Dentistry", es: "Odontología Estética", zh: "美容牙科", blurb: { en: "Veneers & whitening for a smile designed around you.", es: "Carillas y blanqueamiento para una sonrisa a su medida.", zh: "贴面与美白，为您量身设计笑容。" } },
  { slug: "root-canal-therapy", en: "Root Canal Therapy", es: "Tratamiento de Conducto", zh: "根管治疗", blurb: { en: "Pain relief that saves the natural tooth.", es: "Alivio del dolor que salva el diente natural.", zh: "缓解疼痛，保留天然牙齿。" } },
  { slug: "pediatric-dentistry", en: "Pediatric Dentistry", es: "Odontopediatría", zh: "儿童牙科", blurb: { en: "Gentle, anxiety-free care for our youngest patients.", es: "Cuidado suave y sin ansiedad para los más pequeños.", zh: "温和无焦虑，呵护最年幼的患者。" } },
  { slug: "airway-orthodontics", en: "Airway Treatments", es: "Tratamientos de Vías Respiratorias", zh: "气道治疗", blurb: { en: "Breathe & sleep better through airway-focused care.", es: "Respire y duerma mejor con un enfoque en las vías respiratorias.", zh: "以气道为核心，改善呼吸与睡眠。" } },
  { slug: "orthodontics", en: "Orthodontics", es: "Ortodoncia", zh: "正畸治疗", blurb: { en: "Invisalign & braces for beautifully aligned teeth.", es: "Invisalign y brackets para una alineación perfecta.", zh: "隐适美与牙套，塑造整齐牙列。" } },
  { slug: "oral-surgery", en: "Oral Surgery", es: "Cirugía Oral", zh: "口腔外科", blurb: { en: "Extractions & wisdom teeth handled with precision.", es: "Extracciones y muelas del juicio con precisión.", zh: "拔牙与智齿处理，精准可靠。" } },
  { slug: "dental-implants", en: "Dental Implants", es: "Implantes Dentales", zh: "种植牙", external: "https://implants.tribecadentalstudio.com/", blurb: { en: "Permanent, natural-looking tooth replacement.", es: "Reemplazo dental permanente y de aspecto natural.", zh: "永久、自然的牙齿替换方案。" } },
] as const;

const HEAD = {
  en: { eyebrow: "What We Offer", title: "Services", more: "Learn more" },
  es: { eyebrow: "Nuestros Servicios", title: "Servicios", more: "Saber más" },
  zh: { eyebrow: "我们的服务", title: "服务项目", more: "了解更多" },
} as const;

export default function Services({ lang }: ServicesProps) {
  const l = (["en", "es", "zh"].includes(lang) ? lang : "en") as "en" | "es" | "zh";
  const h = HEAD[l];

  return (
    <section className="bg-white py-24 md:py-40" id="services">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="mb-20 text-center"
        >
          <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.8em] text-[#C5A059]">
            {h.eyebrow}
          </span>
          <h2 className="font-serif text-5xl font-light leading-tight text-black md:text-7xl">
            {h.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 border-l border-t border-black/5 md:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => {
            const href = "external" in c ? c.external : `/${l}/${c.slug}/`;
            const isExternal = "external" in c;

            return (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              >
                <Link
                  href={href}
                  {...(isExternal ? { target: "_blank", rel: "noopener" } : {})}
                  className="group flex h-full min-h-[280px] flex-col justify-between border-b border-r border-black/5 p-10 transition-colors duration-500 hover:bg-[#F7F4EF]"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-serif text-3xl font-light text-black/15 transition-colors duration-500 group-hover:text-[#C5A059]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="translate-x-0 text-[#C5A059] opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100">
                      →
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-normal leading-snug text-black transition-colors duration-500 group-hover:text-[#C5A059] md:text-3xl">
                      {c[l]}
                    </h3>
                    <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-gray-500">
                      {c.blurb[l]}
                    </p>
                  </div>

                  <span className="mt-8 text-[10px] uppercase tracking-[0.3em] text-gray-400 transition-colors duration-500 group-hover:text-black">
                    {h.more}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
