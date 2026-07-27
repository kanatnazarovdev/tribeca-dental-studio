/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { bookingUrl } from "@/hooks/helper";
import { ShieldCheck, Sparkles, Cpu, Clock, Award, CheckCircle2 } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isZh = lang === "zh";
  const isEs = lang === "es";

  return {
    title: isZh
      ? "纽约顶尖精品牙科诊所 | Tribeca Dental Studio"
      : isEs
      ? "El Mejor Dentista en NYC | Tribeca Dental Studio"
      : "Experience NYC’s Premier Boutique Dental Care | Tribeca Dental Studio",
    description: isZh
      ? "Tribeca Dental Studio 结合顶尖专科医生团队与先进数字齿科技术，在曼哈顿翠贝卡提供私人尊享、高精度的齿列美学与全科诊疗。"
      : isEs
      ? "Tribeca Dental Studio combina odontología avanzada, especialistas de alto nivel y un entorno privado estilo concierge en Lower Manhattan, NYC."
      : "Tribeca Dental Studio combines advanced dentistry, specialist-level expertise, and a private, concierge-style environment to deliver the highest standard of care in NYC.",
  };
}

export default async function BestDentistNYCPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isZh = lang === "zh";
  const isEs = lang === "es";

  const content = {
    badge: isZh ? "纽约精品齿列中心" : isEs ? "Odontología de Lujo en NYC" : "Recognized Excellence",
    title: isZh
      ? "体验纽约首屈一指的私人精品牙科诊疗"
      : isEs
      ? "Experimente la Odontología Boutique Líder en NYC"
      : "Experience NYC’s Premier Boutique Dental Care",
    subtitle: isZh
      ? "Tribeca Dental Studio 将先进的高精度齿科技术、多学科专家联诊与私人礼宾式服务融为一体，打造曼哈顿顶尖诊疗标准。"
      : isEs
      ? "Tribeca Dental Studio combina odontología avanzada, experiencia de nivel especialista y un entorno privado estilo concierge en NYC."
      : "Tribeca Dental Studio combines advanced dentistry, specialist-level expertise, and a private, concierge-style environment to deliver the highest standard of care in New York City.",

    whyTitle: isZh
      ? "为什么 Tribeca Dental Studio 被誉为纽约卓越牙科团队？"
      : isEs
      ? "¿Por qué Tribeca Dental Studio es Reconocido Entre los Mejores de NYC?"
      : "Why Tribeca Dental Studio Is Recognized as One of NYC’s Best Dental Practices",
    whyDesc: isZh
      ? "在 Tribeca Dental Studio，卓越不仅是一个标签，更是融入我们诊疗细节的准则。从走进我们现代化的 Tribeca 诊所那一刻起，您就能感受到多学科专家团队的精准配合、精品诊所的温暖人文关怀，以及前沿齿科科技的创新活力。"
      : isEs
      ? "En Tribeca Dental Studio, la excelencia no es solo una etiqueta; es el estándar de cada visita. Experimente la precisión de un equipo multidisciplinario y la innovación tecnológica en Lower Manhattan."
      : "At Tribeca Dental Studio, excellence isn’t a label — it’s a standard woven into every detail of your visit. From the moment you step into our modern Tribeca space, you experience the precision of a multi-specialist team, the warmth of a boutique medical practice, and the innovation of advanced dental technology.",

    pillarsTitle: isZh ? "四大精品诊疗准则" : isEs ? "Nuestros Pilares de Atención Boutique" : "Our Boutique Approach: Personalized. Modern. High-End Clinical Care.",
    pillars: [
      {
        icon: Award,
        title: isZh ? "一站式多学科专科专家团队" : isEs ? "Especialistas Bajo un Mismo Techo" : "Specialist-Level Expertise Under One Roof",
        desc: isZh ? "涵括全科、美容美学、修复、儿童齿科、正畸与隐适美，均由经验丰富的专科医师亲诊。" : isEs ? "Atención general, estética, restauradora, pediátrica y ortodoncia por doctores altamente capacitados." : "General, cosmetic, restorative, pediatric, orthodontics, and Invisalign® care delivered by highly trained clinicians under one roof.",
      },
      {
        icon: Cpu,
        title: isZh ? "前沿数字化齿科科技" : isEs ? "Tecnología Dental de Vanguardia" : "Advanced Dental Technology",
        desc: isZh ? "全数字化口内扫描 (iTero®)、3D CBCT 影像、激光诊疗及显微镜精细操作，打造毫米级精准度。" : isEs ? "Escaneo digital iTero®, tomografía 3D, odontología láser y procedimientos guiados por microscopio." : "Digital scanning, 3D imaging, laser dentistry, and microscope-enhanced procedures. Our practice utilizes the leading iTero® platform.",
      },
      {
        icon: ShieldCheck,
        title: isZh ? "私人高品位诊疗体验" : isEs ? "Experiencia Privada y Exclusiva" : "A Private, Elevated Patient Experience",
        desc: isZh ? "独立私人诊室、充裕的就诊沟通时间，为注重隐私、品质与时间的客户量身设计。" : isEs ? "Salas privadas y citas extendidas diseñadas para pacientes que valoran la privacidad, precisión y tiempo." : "For clients who value privacy, precision, and time. Independent private suites with unhurried consultations.",
      },
      {
        icon: Sparkles,
        title: isZh ? "全方位个性化定制方案" : isEs ? "Filosofía de Atención Integral" : "Comprehensive Care Philosophy",
        desc: isZh ? "拒绝流水线式套用。每一份方案均依据 ADA（美国牙医协会）与 AACD（美国美容牙科学会）循证标准制定。" : isEs ? "Planes de tratamiento totalmente personalizados alineados con los estándares de la ADA y AACD." : "Every treatment plan is tailored — no rushed appointments, no one-size-fits-all dentistry. Evidence-based care aligned with ADA and AACD standards.",
      },
    ],

    standardsText: isZh
      ? "我们的临床医生遵循现代循证齿科准则，获得美国牙医协会 (ADA) 及美国美容牙科学会 (AACD) 等权威机构的认可与支持。"
      : isEs
      ? "Nuestros clínicos siguen principios dentales modernos basados en evidencia, reconocidos por la Asociación Dental Americana (ADA) y la Academia Americana de Odontología Estética (AACD)."
      : "Our clinicians follow modern, evidence-based dental principles widely recognized by leading organizations such as the American Dental Association (ADA) and the American Academy of Cosmetic Dentistry (AACD).",
  };

  return (
    <main className="bg-[#FCFCFC] text-black min-h-screen pt-32 pb-24 font-ddin">
      {/* 1. HERO SECTION */}
      <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-3">
              {content.badge}
            </span>

            <h1 className="text-4xl md:text-6xl font-light uppercase tracking-tight leading-[1.05] mb-6 text-neutral-900">
              {content.title}
            </h1>

            <p className="font-brandon text-base md:text-lg text-neutral-600 leading-relaxed mb-8 max-w-xl">
              {content.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-black hover:bg-[#C5A059] text-white font-bold uppercase tracking-[0.2em] text-xs px-8 py-4 transition-all duration-300"
              >
                {isZh ? "预约私人咨询" : isEs ? "Reservar Cita Privada" : "Book Private Consultation"}
              </a>
              <a
                href="tel:2125615303"
                className="inline-flex items-center justify-center border border-black/20 hover:border-black text-black font-bold uppercase tracking-[0.2em] text-xs px-8 py-4 transition-all duration-300"
              >
                212-561-5303
              </a>
            </div>
          </div>

          {/* HERO IMAGE / EDITORIAL BANNER */}
          <div className="relative aspect-[4/3] bg-neutral-100 border border-neutral-200 overflow-hidden shadow-sm">
            <Image
              src="/about-studio.jpg" // Ensure an appropriate studio image exists in public folder
              alt="Tribeca Dental Studio Premier Interior"
              fill
              priority
              unoptimized
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/90 backdrop-blur-md border border-neutral-200 shadow-md">
              <p className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">
                Tribeca, Lower Manhattan
              </p>
              <p className="font-brandon text-xs text-neutral-600 mt-1">
                {isZh
                  ? "私密独立诊室与无等候礼宾服务环境。"
                  : isEs
                  ? "Salas privadas estilo concierge para una atención sin prisas."
                  : "Private suites and unhurried concierge care in the heart of Tribeca."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY RECOGNIZED AS BEST IN NYC */}
      <section className="bg-neutral-50 py-20 px-6 md:px-12 lg:px-20 border-y border-neutral-200 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-3">
            Clinical Excellence
          </span>
          <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight text-black mb-6">
            {content.whyTitle}
          </h2>
          <p className="font-brandon text-base text-neutral-600 leading-relaxed mb-8">
            {content.whyDesc}
          </p>

          <div className="inline-flex items-center gap-3 p-4 bg-white border border-neutral-200 text-xs font-bold uppercase tracking-widest text-neutral-800 shadow-sm">
            <CheckCircle2 size={18} className="text-[#C5A059] shrink-0" />
            <span>ADA & AACD Compliant Evidence-Based Dentistry</span>
          </div>
        </div>
      </section>

      {/* 3. FOUR BOUTIQUE PILLARS GRID */}
      <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-20">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-light uppercase tracking-tight text-black">
            {content.pillarsTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="p-8 md:p-10 bg-white border border-neutral-200 shadow-sm flex flex-col justify-between">
                <div>
                  <Icon size={28} className="text-[#C5A059] mb-4" />
                  <h3 className="text-xl font-bold uppercase tracking-tight text-black mb-3">
                    {pillar.title}
                  </h3>
                  <p className="font-brandon text-sm text-neutral-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. CLINICAL STANDARDS BANNER */}
      <section className="px-6 md:px-12 lg:px-20 max-w-5xl mx-auto mb-20">
        <div className="p-8 md:p-12 bg-neutral-900 text-white border border-neutral-900 text-center">
          <p className="font-brandon text-sm md:text-base text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            "{content.standardsText}"
          </p>
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER */}
      <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="bg-black text-white p-10 md:p-16 text-center border border-black">
          <h3 className="text-2xl md:text-4xl font-light uppercase tracking-tight text-white mb-4">
            {isZh ? "开启您的尊享诊疗之旅" : isEs ? "¿Listo para Experimentar la Mejor Atención?" : "Schedule Your Private Consultation"}
          </h3>
          <p className="font-brandon text-sm text-neutral-300 max-w-lg mx-auto mb-8">
            {isZh ? "访问我们在 Tribeca 的私人诊所，感受由顶级专科医师为您定制的齿科艺术。" : isEs ? "Visite nuestra práctica boutique en Lower Manhattan." : "Experience boutique multi-specialty care in the heart of Tribeca, Lower Manhattan."}
          </p>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C5A059] hover:bg-white hover:text-black text-black font-bold uppercase tracking-[0.3em] text-xs px-10 py-5 transition-all duration-300"
          >
            {isZh ? "立即在线预约" : isEs ? "Reservar Cita Ahora" : "Book Online Now"}
          </a>
        </div>
      </section>
    </main>
  );
}