/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { bookingUrl } from "@/hooks/helper";
import { Play, Pause, CheckCircle2 } from "lucide-react";

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
    title: isZh ? "Invisalign® 隐形牙套矫正" : isEs ? "Alineadores Transparentes Invisalign®" : "Invisalign® Clear Aligners in Tribeca",
    subtitle: isZh
      ? "厌倦了传统金属钢丝？Tribeca Dental Studio 运用 iTero® 3D 扫描与透明隐形牙套，为您打造舒适、隐形、可拆卸的排齐体验。"
      : isEs
      ? "¿Evitando los brackets tradicionales? Invisalign® ofrece una alternativa discreta, cómoda y removible para adultos y adolescentes en Manhattan."
      : "A discreet, comfortable alternative to traditional braces. Achieve a straight, healthy smile with 3D precision mapping and zero food restrictions.",

    // Core Advantages (Invisalign vs Braces)
    advantages: [
      isZh ? "近乎无痕隐形，自信交际" : isEs ? "Prácticamente invisible e imperceptible" : "Clear & virtually invisible design",
      isZh ? "随心自主拆卸，饮食无限制" : isEs ? "Sin restricciones de comida (100% removibles)" : "100% removable for normal eating & cleaning",
      isZh ? "SmartTrack® 专有医用柔和材质" : isEs ? "Material SmartTrack® cómodo e hipoalergénico" : "Comfortable SmartTrack® proprietary material",
      isZh ? "更少的复诊次数，短至 9-15 个月" : isEs ? "Tratamiento más corto (9 a 15 meses en promedio)" : "Faster average treatment time (9–15 months)",
    ],

    // Who is the Right Candidate
    candidacyTitle: isZh ? "适用于哪些情况？" : isEs ? "¿Quién es un buen candidato?" : "Ideal Candidates for Invisalign®",
    candidacyDesc: isZh
      ? "借助现代正畸技术的突破，Invisalign® 不仅适用于简单排齐，更可改善复杂的咬合问题："
      : isEs
      ? "Invisalign® corrige una amplia gama de casos ortodóncicos en adultos y adolescentes:"
      : "Invisalign® treats a broad range of alignment and bite issues for both adults and teens:",
    candidates: [
      { title: isZh ? "牙齿拥挤" : isEs ? "Añadido / Dientes Amontonados" : "Crowded Teeth", desc: isZh ? "改善空间不足造成的重叠" : isEs ? "Espacio insuficiente en el arco" : "Resolves overlapping teeth smoothly" },
      { title: isZh ? "牙缝过大" : isEs ? "Diastemas / Espacios Excesivos" : "Gaps & Spacing", desc: isZh ? "关闭不美观的齿间隙" : isEs ? "Cierra espacios entre dientes" : "Closes unsightly gaps effortlessly" },
      { title: isZh ? "深覆合 / 反覆合" : isEs ? "Sobremordida / Mordida Cruzada" : "Overbite & Crossbite", desc: isZh ? "调整咬合与上下颌关系" : isEs ? "Alineación de mordida y mandíbula" : "Corrects complex bite alignment issues" },
    ],

    // Step-by-Step Treatment Journey
    processTitle: isZh ? "Invisalign® 诊疗流程" : isEs ? "El Proceso de Tratamiento Paso a Paso" : "Your Invisalign® Journey Step-by-Step",
    steps: [
      {
        num: "01",
        title: isZh ? "初诊评估与 3D 扫描" : isEs ? "Consulta e Impronta Digital 3D" : "3D Digital Scan & Consultation",
        desc: isZh ? "通过 iTero® 扫描仪快速生成全口 3D 模型，无舒适度负担，预先模拟最终矫正效果。" : isEs ? "Escaneo iTero® rápido y preciso sin moldes molestos. Vea una vista previa de su sonrisa." : "Fast iTero® scanner mapping—no messy molds. View a digital 3D preview of your future smile.",
      },
      {
        num: "02",
        title: isZh ? "专属隐形牙套制作" : isEs ? "Fabricación de Alineadores" : "Custom SmartTrack® Aligners",
        desc: isZh ? "根据定制方案制作专属于您的 SmartTrack® 透明牙套，提供规律、柔和的移动拉力。" : isEs ? "Diseño de alineadores hechos a medida para un movimiento dental gradual y controlado." : "Series of custom-molded clear aligners engineered for controlled, gentle tooth movement.",
      },
      {
        num: "03",
        title: isZh ? "日常佩戴与定期监测" : isEs ? "Uso Diario y Revisiones" : "Daily Wear & Progress Monitoring",
        desc: isZh ? "每天佩戴 20-22 小时，每 1-2 周更换副牙套，每 6-8 周复诊，亦支持远程监测。" : isEs ? "Úselos 20-22 horas al día, cámbielos cada 1-2 semanas y asista a chequeos periódicos." : "Wear 20–22 hrs/day, switch aligners every 1–2 weeks, with check-ins every 6–8 weeks.",
      },
      {
        num: "04",
        title: isZh ? "完成矫正与保持器" : isEs ? "Finalización y Retenedores" : "Completion & Retainers",
        desc: isZh ? "矫正结束后配合定制保持器巩固完美齿列，可搭配牙齿美白完成最终焕新。" : isEs ? "Proteja su nueva sonrisa con retenedores y complete con un blanqueamiento opcional." : "Maintain your newly aligned smile with custom retainers (optional teeth whitening available).",
      },
    ],

    // Health Benefits Beyond Aesthetics
    healthTitle: isZh ? "不仅关乎美观，更关乎口腔健康" : isEs ? "Beneficios de Salud Más Allá de la Estética" : "Oral Health Benefits Beyond Aesthetics",
    healthPoints: [
      {
        title: isZh ? "降低蛀牙与牙周病风险" : isEs ? "Prevención de Caries y Gingivitis" : "Easier Cleaning & Gum Health",
        desc: isZh ? "排列整齐的牙齿更易刷牙和使用牙线，显著减少菌斑堆积与牙龈发炎。" : isEs ? "Los dientes alineados facilitan el cepillado y el uso de hilo dental, reduciendo placa y gingivitis." : "Straighter teeth reduce plaque traps, lowering the risk of cavities and periodontal disease.",
      },
      {
        title: isZh ? "改善咀嚼并保护关节 (TMJ)" : isEs ? "Protección de la Mordida y TMJ" : "Bite Alignment & TMJ Relief",
        desc: isZh ? "正常的咬合分配能减轻颞下颌关节压力，防止牙齿产生不均匀磨损。" : isEs ? "Alinea la mordida para aliviar la tensión en la articulación temporomandibular (ATM)." : "Proper alignment alleviates uneven tooth wear and reduces strain on the jaw joint (TMJ).",
      },
    ],

    // Aligner Care Guide
    careTitle: isZh ? "隐形牙套日常保养指南" : isEs ? "Cuidados de Sus Alineadores" : "Caring for Your Aligners",
    careItems: [
      isZh ? "餐后请先漱口/刷牙再佩戴牙套" : isEs ? "Enjuague sus alineadores después de cada comida" : "Rinse aligners after meals before reinserting",
      isZh ? "使用软毛牙刷搭配温和肥皂清洗（勿用牙膏以免刮伤）" : isEs ? "Límpelos con un cepillo suave y jabón neutro (sin pasta dental)" : "Gently brush with a soft toothbrush & mild soap (no paste)",
      isZh ? "切勿使用热水清洗，防止塑料变形" : isEs ? "Evite el agua caliente, ya que puede deformar el plástico" : "Never clean with hot water to avoid warping the aligners",
      isZh ? "不佩戴时必须随手放回专用保护盒" : isEs ? "Guárdelos siempre en su estuche cuando no los use" : "Always store them in their protective case when not in use",
    ],

    // FAQ Section
    faqTitle: isZh ? "常见问题" : isEs ? "Preguntas Frecuentes" : "Frequently Asked Questions",
    faqs: [
      {
        q: isZh ? "每天需要佩戴隐形牙套多久？" : isEs ? "¿Cuántas horas al día debo usar los alineadores?" : "How many hours a day must I wear my aligners?",
        a: isZh
          ? "建议每天佩戴 20 至 22 小时，仅在进食、刷牙及使用牙线时取下。"
          : isEs
          ? "Debe usarlos de 20 a 22 horas al día, retirándolos únicamente para comer y cepillarse."
          : "Wear your aligners 20 to 22 hours per day, removing them only to eat, drink, brush, and floss.",
      },
      {
        q: isZh ? "矫正一般需要多长时间？" : isEs ? "¿Cuánto tiempo dura el tratamiento?" : "How long does Invisalign® treatment take?",
        a: isZh
          ? "因人而异，平均周期通常在 9 至 15 个月之间。"
          : isEs
          ? "El tiempo varía según la complejidad, pero generalmente toma entre 9 y 15 meses."
          : "While every smile is unique, average treatment time spans between 9 and 15 months.",
      },
      {
        q: isZh ? "除了 Invisalign®，还有其他性价比选项吗？" : isEs ? "¿Existen alternativas a Invisalign®?" : "Are there alternative clear aligner options?",
        a: isZh
          ? "有的。Tribeca Dental Studio 亦提供高性价比的隐形矫正替代方案，医生会根据您的预算与需求制定最佳选择。"
          : isEs
          ? "Sí, ofrecemos opciones de alineadores transparentes más económicas. Nuestros doctores le guiarán según su presupuesto."
          : "Yes! We offer alternative cost-effective clear aligner systems alongside Invisalign to fit your goals and budget.",
      },
    ],
  };

  return (
    <main className="bg-[#FCFCFC] text-black min-h-screen pt-32 pb-24 font-ddin">
      {/* 1. HERO VIDEO SECTION */}
      <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: HEADER & ADVANTAGES */}
          <div>
            <nav className="mb-6">
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

            {/* QUICK ADVANTAGES LIST */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {content.advantages.map((adv, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#C5A059] mt-0.5 shrink-0" />
                  <span className="font-brandon text-xs font-bold uppercase tracking-wider text-neutral-700">
                    {adv}
                  </span>
                </div>
              ))}
            </div>

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

          {/* RIGHT: HERO VIDEO CARD */}
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

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

            <button
              onClick={togglePlay}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-neutral-200 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all shadow-sm"
              aria-label="Toggle Video Playback"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
            </button>

            <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/90 backdrop-blur-md border border-neutral-200 shadow-md z-10">
              <div className="flex items-center justify-between mb-1">
                <p className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">
                  iTero® Digital Smile Simulation
                </p>
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <p className="font-brandon text-xs text-neutral-600 leading-relaxed">
                {isZh
                  ? "实时数码 3D 口腔预演，无需印模，秒级预测矫正后的齿列弧度。"
                  : isEs
                  ? "Simulación digital 3D en tiempo real sin moldes molestos."
                  : "Instant digital 3D mapping with real-time smile transformation preview—no messy impressions."}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. CANDIDACY SECTION */}
      <section className="bg-neutral-50 py-20 px-6 md:px-12 lg:px-20 border-y border-neutral-200 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-2">
              Tailored Orthodontics
            </span>
            <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-black mb-4">
              {content.candidacyTitle}
            </h2>
            <p className="font-brandon text-sm text-neutral-600 leading-relaxed">
              {content.candidacyDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.candidates.map((c, idx) => (
              <div key={idx} className="p-8 bg-white border border-neutral-200 shadow-sm">
                <span className="text-[#C5A059] font-bold text-xs uppercase tracking-[0.2em] block mb-3">
                  Case Type 0{idx + 1}
                </span>
                <h3 className="text-xl font-bold uppercase tracking-tight text-black mb-2">
                  {c.title}
                </h3>
                <p className="font-brandon text-s text-neutral-500 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STEP-BY-STEP PROCESS */}
      <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-20">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-2">
            Precision Workflow
          </span>
          <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight text-black">
            {content.processTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.steps.map((step) => (
            <div key={step.num} className="border border-neutral-200 p-8 bg-white shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-3xl font-bold text-[#C5A059] block mb-4">
                  {step.num}
                </span>
                <h3 className="text-lg font-bold uppercase text-black mb-3">
                  {step.title}
                </h3>
                <p className="font-brandon text-s text-neutral-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. HEALTH BENEFITS & ALIGNER CARE GRID */}
      <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Health Benefits */}
          <div className="bg-white border border-neutral-200 p-8 md:p-12 shadow-sm">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-2">
              Beyond Aesthetics
            </span>
            <h3 className="text-2xl font-bold uppercase tracking-tight text-black mb-6">
              {content.healthTitle}
            </h3>
            <div className="space-y-6">
              {content.healthPoints.map((hp, idx) => (
                <div key={idx}>
                  <h4 className="text-sm font-bold uppercase text-black mb-1">
                    {hp.title}
                  </h4>
                  <p className="font-brandon text-s text-neutral-600 leading-relaxed">
                    {hp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Caring for Aligners */}
          <div className="bg-neutral-900 text-white border border-neutral-900 p-8 md:p-12 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-2">
                Maintenance Guide
              </span>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-6">
                {content.careTitle}
              </h3>
              <ul className="space-y-4">
                {content.careItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#C5A059] font-bold text-xs mt-0.5">•</span>
                    <span className="font-brandon text-s text-neutral-300 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
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

      {/* 6. BOTTOM CTA BANNER */}
      <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="bg-black text-white p-10 md:p-16 text-center border border-black">
          <h3 className="text-2xl md:text-4xl font-light uppercase tracking-tight text-white mb-4">
            {isZh ? "开启您的隐形美学矫正之旅" : isEs ? "¿Listo para Transformar su Sonrisa?" : "Schedule Your Invisalign® Consultation"}
          </h3>
          <p className="font-brandon text-sm text-neutral-300 max-w-lg mx-auto mb-8">
            {isZh ? "欢迎访问我们在 Tribeca 的专家诊所，体验由经验丰富医师规划的精准齿列美化。" : isEs ? "Reserve una cita en nuestra clínica en Tribeca y descubra las opciones de tratamiento." : "Experience precision orthodontic planning with board-certified specialists in Tribeca, Lower Manhattan."}
          </p>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C5A059] hover:bg-white hover:text-black text-black font-bold uppercase tracking-[0.3em] text-s px-10 py-5 transition-all duration-300"
          >
            {isZh ? "立即在线预约" : isEs ? "Reservar Cita Ahora" : "Book Online Now"}
          </a>
        </div>
      </section>
    </main>
  );
}