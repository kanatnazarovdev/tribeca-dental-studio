/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { bookingUrl } from "@/hooks/helper";
import { Play, Pause } from "lucide-react";

export default function InvisalignServicePage() {
  const params = useParams();
  const lang = (params?.lang as string) || "en";
  const isZh = lang === "zh";
  const isEs = lang === "es";
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const content = {
    badge: isZh ? "正畸美学诊疗" : isEs ? "Ortodoncia Estética" : "Advanced Orthodontics",
    title: isZh ? "Invisalign® 隐形牙套矫正" : isEs ? "Alineadores Transparentes Invisalign®" : "Invisalign® Clear Aligners",
    subtitle: isZh
      ? "运用 3D 口腔数字扫描与隐形无痕牙套，无痛、舒适地重新塑造您的理想自然笑容。"
      : isEs
      ? "Transforme su sonrisa con alineadores prácticamente invisibles, diseñados a la medida para una alineación precisa y cómoda."
      : "Engineered for maximum comfort and complete discretion. Straighten your teeth seamlessly using 3D digital precision.",

    heroPoints: [
      {
        title: isZh ? "近乎隐形无痕" : isEs ? "Prácticamente Invisible" : "Virtually Invisible",
        desc: isZh ? "采用 SmartTrack® 专有医用透明材质，佩戴美观自然。" : isEs ? "Alineadores de material SmartTrack® ultra discretos." : "Crafted with medical-grade SmartTrack® material for zero visibility.",
      },
      {
        title: isZh ? "可随时自主拆卸" : isEs ? "Removible y Práctico" : "100% Removable",
        desc: isZh ? "进食与清洁牙齿时可随时取下，无需改变现有生活习惯。" : isEs ? "Quíteselos para comer, cepillarse y mantener una higiene oral impecable." : "Remove easily during meals, brushing, and special occasions.",
      },
      {
        title: isZh ? "iTero® 3D 快速扫描" : isEs ? "Escaneo 3D iTero®" : "iTero® 3D Precision",
        desc: isZh ? "告别传统取模印模，数秒内精确建模并预测最终矫正效果。" : isEs ? "Sin impresiones molestas; simulamos los resultados finales en minutos." : "No messy impressions—preview your transformed smile in digital 3D.",
      },
    ],

    processTitle: isZh ? "Invisalign® 隐形矫正流程" : isEs ? "El Proceso Invisalign®" : "The Treatment Journey",
    steps: [
      {
        num: "01",
        title: isZh ? "iTero® 数字口内扫描" : isEs ? "Consulta y Escaneo 3D" : "3D Digital Consultation",
        desc: isZh ? "使用全景数码诊断与 iTero® 扫描仪记录每一颗牙齿的位置，精准制定专属方案。" : isEs ? "Evaluación completa de la mordida y escaneo 3D de alta precisión." : "Comprehensive digital diagnostic mapping to engineer your step-by-step alignment path.",
      },
      {
        num: "02",
        title: isZh ? "定制隐形牙套制作" : isEs ? "Diseño Personalizado" : "Custom Aligner Fabrication",
        desc: isZh ? "通过计算机数字化模拟，精准定制专属于您的阶段性透明隐形牙套。" : isEs ? "Fabricación con tecnología avanzada para movimientos dentales graduales." : "Custom-molded aligners tailored engineered to apply gentle, continuous tooth movement.",
      },
      {
        num: "03",
        title: isZh ? "按期更换与定期复诊" : isEs ? "Evolución y Seguimiento" : "Progressive Alignment",
        desc: isZh ? "每 1-2 周自行更换下一副牙套，配合少量按期复诊检查，轻松实现齿列焕新。" : isEs ? "Cambio de alineadores cada 1-2 semanas con revisiones periódicas." : "Switch aligners every 1–2 weeks and visit our studio periodically for progress checks.",
      },
    ],

    faqTitle: isZh ? "常见问题" : isEs ? "Preguntas Frecuentes" : "Frequently Asked Questions",
    faqs: [
      {
        q: isZh ? "每天需要佩戴隐形牙套多久？" : isEs ? "¿Cuántas horas al día debo usar los alineadores?" : "How many hours a day do I need to wear aligners?",
        a: isZh
          ? "为了达到最佳矫正效果，建议每天佩戴 20 至 22 小时，仅在饮食、刷牙和使用牙线时取下。"
          : isEs
          ? "Para obtener mejores resultados, debe usarlos entre 20 y 22 horas al día, retirándolos solo para comer e higienizarse."
          : "For optimal progress, wear your aligners 20 to 22 hours per day, removing them only for meals and routine brushing.",
      },
      {
        q: isZh ? "Invisalign® 矫正过程会感到疼痛吗？" : isEs ? "¿Es doloroso el tratamiento con Invisalign®?" : "Does Invisalign® hurt?",
        a: isZh
          ? "更换新牙套的前几天可能会感觉到轻微的紧绷感，这是牙齿正在规律微调移动的正常现象，远比传统钢丝牙套舒适。"
          : isEs
          ? "Es posible sentir una ligera presión los primeros días tras cambiar de alineador, lo cual indica que los dientes se están moviendo correctamente."
          : "You may feel mild pressure for the first day or two after switching aligner sets—a natural sign that your teeth are adjusting safely.",
      },
      {
        q: isZh ? "矫正流程一般需要多长时间？" : isEs ? "¿Cuánto tiempo dura el tratamiento?" : "How long does the overall treatment take?",
        a: isZh
          ? "平均矫正周期为 6 至 18 个月，具体取决于个人牙齿排列和咬合复杂程度。"
          : isEs
          ? "El tiempo promedio varía entre 6 y 18 meses, según la complejidad del caso y la constancia del paciente."
          : "Most cases are completed within 6 to 18 months, depending on the complexity of movement required.",
      },
    ],
  };

  return (
    <main className="bg-[#FCFCFC] text-black min-h-screen pt-32 pb-24 font-ddin">
      {/* 1. HERO VIDEO SECTION */}
      <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: NAVIGATION, TITLE & CTA */}
          <div>
            <nav className="mb-8">
              <Link
                href={`/${lang}/services`}
                className="text-xs uppercase tracking-[0.25em] font-bold text-neutral-400 hover:text-black transition-colors"
              >
                ← {isZh ? "返回诊疗服务" : isEs ? "Volver a Servicios" : "Back to Services"}
              </Link>
            </nav>

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
                {isZh ? "预约 3D 口腔扫描" : isEs ? "Agendar Escaneo 3D" : "Book 3D Consultation"}
              </a>
              <a
                href="tel:2125615303"
                className="inline-flex items-center justify-center border border-black/20 hover:border-black text-black font-bold uppercase tracking-[0.2em] text-xs px-8 py-4 transition-all duration-300"
              >
                212-561-5303
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: LIGHT EDITORIAL VIDEO CARD */}
          <div className="relative aspect-[4/3] sm:aspect-square bg-neutral-100 border border-neutral-200 overflow-hidden shadow-sm group">
            
            <video
              ref={videoRef}
              src="/invisalign.mp4" 
              poster="/services/invisalign-treatments.webp" 
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-center filter contrast-[1.02]"
            />

            {/* LIGHT VIGNETTE / OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

            {/* PLAY / PAUSE BUTTON */}
            <button
              onClick={togglePlay}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-neutral-200 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all shadow-sm"
              aria-label="Toggle Video Playback"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
            </button>

            {/* FLOATING TECH BADGE */}
            <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/90 backdrop-blur-md border border-neutral-200 shadow-md z-10">
              <div className="flex items-center justify-between mb-1">
                <p className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">
                  iTero® Digital Smile Simulation
                </p>
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <p className="font-brandon text-xs text-neutral-600 leading-relaxed">
                {isZh
                  ? "实时数码 3D 口腔预演，秒级预测矫正后的美学齿列弧度。"
                  : isEs
                  ? "Simulación digital 3D en tiempo real con alineación guiada por precisión."
                  : "Instant digital 3D mapping with real-time smile transformation preview."}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 2. CORE FEATURES GRID */}
      <section className="bg-neutral-50 py-20 px-6 md:px-12 lg:px-20 border-y border-neutral-200 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {content.heroPoints.map((point, idx) => (
              <div key={idx} className="p-8 bg-white border border-neutral-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-[#C5A059] font-bold text-xs uppercase tracking-[0.2em] block mb-3">
                    0{idx + 1}
                  </span>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-black mb-3">
                    {point.title}
                  </h3>
                  <p className="font-brandon text-sm text-neutral-600 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STEP-BY-STEP PROCESS */}
      <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-20">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-2">
            Seamless Progression
          </span>
          <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight text-black">
            {content.processTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.steps.map((step) => (
            <div key={step.num} className="border border-neutral-200 p-8 bg-white shadow-sm">
              <span className="text-3xl font-bold text-[#C5A059] block mb-4">
                {step.num}
              </span>
              <h3 className="text-xl font-bold uppercase text-black mb-3">
                {step.title}
              </h3>
              <p className="font-brandon text-sm text-neutral-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS */}
      <section className="px-6 md:px-12 lg:px-20 max-w-4xl mx-auto mb-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-light uppercase tracking-tight text-black">
            {content.faqTitle}
          </h2>
        </div>

        <div className="space-y-6">
          {content.faqs.map((faq, idx) => (
            <div key={idx} className="p-6 bg-white border border-neutral-200 shadow-sm">
              <h3 className="text-base font-bold uppercase tracking-wide text-[#C5A059] mb-2">
                {faq.q}
              </h3>
              <p className="font-brandon text-sm text-neutral-600 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER */}
      <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="bg-black text-white p-10 md:p-16 text-center border border-black">
          <h3 className="text-2xl md:text-4xl font-light uppercase tracking-tight text-white mb-4">
            {isZh ? "开启您的隐形美学矫正之旅" : isEs ? "¿Listo para Transformar su Sonrisa?" : "Schedule Your Invisalign® Consultation"}
          </h3>
          <p className="font-brandon text-sm text-neutral-300 max-w-lg mx-auto mb-8">
            {isZh ? "访问我们位于纽约曼哈顿翠贝卡的专家诊所，体验精细化的隐形齿列美化。" : isEs ? "Reserve una cita en nuestra clínica en Tribeca y descubra las opciones de tratamiento." : "Experience precision orthodontic planning with board-certified specialists in Tribeca."}
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