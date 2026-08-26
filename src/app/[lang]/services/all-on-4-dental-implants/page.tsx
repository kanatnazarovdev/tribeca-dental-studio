/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { useLayoutEffect, useRef, useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

// GSAP Imports
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Static Image Import
import allon4Img from "../../../../../public/allon4.jpg";
import { bookingUrl } from "@/hooks/helper";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default function AllOn4Page({ params }: PageProps) {
  const { lang } = use(params);
  const isEs = lang === "es";
  const isZh = lang === "zh";

  // Interactive Transformation Toggle State
  const [activeTab, setActiveTab] = useState<"after" | "before">("after");

  // GSAP Animation Refs
  const mainRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroVideoRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const diagramRef = useRef<HTMLDivElement>(null);
  const advantagesRef = useRef<HTMLDivElement>(null);


  // --- GSAP ANIMATION ENGINE ---
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      heroTl
        .fromTo(
          heroVideoRef.current,
          { scale: 1.15, filter: "brightness(0.3) contrast(1.2)" },
          { scale: 1.05, filter: "brightness(0.85) contrast(1.05)", duration: 1.8 }
        )
        .fromTo(
          heroTextRef.current?.children ? Array.from(heroTextRef.current.children) : [],
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.15 },
          "-=1.2"
        );

      // Hero Parallax on Scroll
      gsap.to(heroVideoRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: heroVideoRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // 2. METRICS BAR: Counter Reveal Animation
      if (metricsRef.current) {
        gsap.fromTo(
          metricsRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: metricsRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // 3. ANATOMICAL DIAGRAM: Parallax & Soft Glow Expansion
      if (diagramRef.current) {
        gsap.fromTo(
          diagramRef.current,
          { scale: 0.92, opacity: 0.2, y: 40 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: diagramRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // 4. ADVANTAGES CARDS: Staggered Fade Slide-Up
      if (advantagesRef.current) {
        gsap.fromTo(
          advantagesRef.current.children,
          { x: 30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: advantagesRef.current,
              start: "top 75%",
            },
          }
        );
      }
    }, mainRef);

    return () => ctx.revert(); // Clean up GSAP timelines on unmount
  }, []);

  const ADVANTAGES = [
    {
      num: "01",
      title: isZh ? "即刻重建与恢复" : isEs ? "Restauración Inmediata" : "Same-Day Arch Restoration",
      desc: isZh
        ? "得益于精准的 45° 倾斜角度固定，绝大多数患者可在一次手术中即刻戴入全口固定义齿，当天重获咀嚼与社交自信。"
        : isEs
          ? "Gracias al anclaje en ángulo de 45°, los pacientes reciben una prótesis fija provisional el mismo día de la intervención."
          : "Engineered via strategically angled 45° distal implants, enabling immediate temporary bridge fixation in a single clinical appointment.",
    },
    {
      num: "02",
      title: isZh ? "免除植骨复杂手术" : isEs ? "Sin Necesidad de Injerto" : "Bypasses Bone Grafting",
      desc: isZh
        ? "最大化利用颌骨前端固有骨质量，避免昂贵且耗时的植骨手术，大幅缩短整体疗程并减轻术后不适。"
        : isEs
          ? "Maximiza la densidad ósea existente en la zona anterior, evitando procedimientos complejos y costosos de injerto óseo."
          : "Maximizes naturally available anterior jawbone density, completely avoiding invasive, multi-month bone grafting procedures.",
    },
    {
      num: "03",
      title: isZh ? "高定美学与功能" : isEs ? "Estética y Función Permanente" : "Permanent Structural Aesthetics",
      desc: isZh
        ? "根据患者面部轮廓量身定制高分子瓷牙冠，精细还原媲美天然牙齿的半透明光泽与绝佳咀嚼咬合力。"
        : isEs
          ? "Coronas de porcelana personalizadas para adaptarse a la estructura facial, restaurando la estética y la fuerza de mordida original."
          : "Custom porcelain arches crafted to complement your natural facial architecture, restoring full chewing power and youthfulness.",
    },
  ];

  return (
    <main ref={mainRef} className="bg-[#FBFBFA] text-[#1A1A1A] min-h-screen relative overflow-hidden">

      {/* 1. GSAP POWERED CINEMATIC HERO SECTION */}
      <section className="relative w-full h-[90vh] min-h-[680px] flex items-center justify-start px-6 md:px-12 lg:px-24 bg-black text-white overflow-hidden">

        {/* GSAP Parallax Background Video Container */}
        <div ref={heroVideoRef} className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-80"
            poster="/allon4.jpg"
          >
            <source src="/all4.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Ambient Dark Vignette & Gold Lens Flare Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-black/50 z-10 pointer-events-none" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-[120px] pointer-events-none z-10" />

        {/* Hero Content Overlay with GSAP Trigger */}
        <div ref={heroTextRef} className="relative z-20 max-w-3xl text-left flex flex-col items-start pt-16">

          <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#C5A059] mb-6 font-mono border-l-2 border-[#C5A059] pl-3">
            {isZh ? "高级种植牙学专科" : isEs ? "Especialidad en Implante Arch Complete" : "Full-Arch Precision Implantology"}
          </span>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white uppercase leading-[1.05] mb-8">
            All-on-4® <br />
            <span className="italic font-extralight text-neutral-300 lowercase text-3xl sm:text-5xl lg:text-6xl block mt-2 font-serif">
              {isZh ? "全口即刻种植与重构" : isEs ? "Reconstrucción Dental Inmediata" : "immediate full-arch rehabilitation"}
            </span>
          </h1>

          <p className="text-base md:text-lg font-light leading-relaxed text-neutral-300 tracking-wide font-serif italic mb-10 max-w-2xl border-l border-white/10 pl-4">
            {isZh ? (
              <>凭借仅仅 4 颗精密预设角度的钛合金植体，在单次诊疗中重塑全口咀嚼功能与无瑕笑容。无需经历漫长的植骨等待期。</>
            ) : isEs ? (
              <>Restaure la dentición completa de su arcada en un solo día con solo cuatro implantes de titanio posicionados con precisión. Sin necesidad de injertos óseos.</>
            ) : (
              <>Restore an entire upper or lower arch of permanent teeth using just four strategically angled titanium anchors. Engineered for maximum stability without bone grafting.</>
            )}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6">
            <Link
              href={bookingUrl}
              target="_blank"
              className="group relative inline-flex items-center justify-center gap-6 text-[11px] uppercase tracking-[0.4em] font-bold text-black bg-[#C5A059] py-4 px-10 overflow-hidden transition-all duration-500 hover:bg-white"
            >
              <span className="relative z-10">{isZh ? "预约专家问诊" : isEs ? "Consulta Especializada" : "Schedule Consultation"}</span>
              <span className="relative z-10 transform group-hover:translate-x-2 transition-transform duration-300 font-serif italic text-xs">
                →
              </span>
            </Link>

            {/* Interactive Transformation Quick Indicator */}
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-3 border border-white/10 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-ping" />
              <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-300">
                {isZh ? "即刻戴牙：24小时内" : isEs ? "Carga Inmediata: <24h" : "Teeth In Under 24h"}
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. STATISTICAL METRICS BAR WITH GLASSMORPHISM */}
      <section className="bg-[#111111] border-y border-white/[0.08] py-14 px-6 md:px-12 lg:px-24 text-white relative z-20">
        <div ref={metricsRef} className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">

          <div className="bg-white/[0.02] p-6 border border-white/[0.05] rounded-sm backdrop-blur-sm hover:border-[#C5A059]/40 transition-colors">
            <span className="font-serif text-4xl md:text-5xl text-[#C5A059] block mb-2 font-light">45°</span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
              {isZh ? "后倾放置角度" : isEs ? "Ángulo Distal" : "Distal Angle Tilt"}
            </span>
          </div>

          <div className="bg-white/[0.02] p-6 border border-white/[0.05] rounded-sm backdrop-blur-sm hover:border-[#C5A059]/40 transition-colors">
            <span className="font-serif text-4xl md:text-5xl text-[#C5A059] block mb-2 font-light">99.9%</span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
              {isZh ? "临床成功率" : isEs ? "Tasa de Éxito" : "Clinical Success Rate"}
            </span>
          </div>

          <div className="bg-white/[0.02] p-6 border border-white/[0.05] rounded-sm backdrop-blur-sm hover:border-[#C5A059]/40 transition-colors">
            <span className="font-serif text-4xl md:text-5xl text-[#C5A059] block mb-2 font-light">24h</span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
              {isZh ? "即刻戴牙时间" : isEs ? "Carga Inmediata" : "Teeth In A Day"}
            </span>
          </div>

          <div className="bg-white/[0.02] p-6 border border-white/[0.05] rounded-sm backdrop-blur-sm hover:border-[#C5A059]/40 transition-colors">
            <span className="font-serif text-4xl md:text-5xl text-[#C5A059] block mb-2 font-light">0</span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
              {isZh ? "无需骨移植" : isEs ? "Sin Injerto Óseo" : "Bone Grafts Needed"}
            </span>
          </div>

        </div>
      </section>

      {/* 3. ASYMMETRICAL DIAGRAM ANATOMY BLOCK WITH GSAP PARALLAX */}
      <section className="py-24 md:py-36 px-6 md:px-12 lg:px-24 bg-[#FBFBFA] relative">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Diagram Asset (7 Columns Wide) */}
            <div className="lg:col-span-7 flex flex-col">

              {/* Interactive Viewport Container */}
              <div
                ref={diagramRef}
                className="relative w-full h-[480px] md:h-[580px] rounded-sm overflow-hidden bg-neutral-900 border border-black/10 shadow-2xl group"
              >
                <Image
                  src={allon4Img}
                  alt="All-on-4 Technical Structural Mechanics"
                  fill
                  priority
                  className={`object-cover transition-all duration-1000 ${activeTab === "after" ? "contrast-110 scale-100" : "grayscale contrast-125 scale-105"
                    }`}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />

                {/* Subtle Luxury Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                {/* Interactive Toggle Control Badge Overlay */}
                <div className="absolute top-6 right-6 z-30 flex items-center bg-black/70 backdrop-blur-md border border-white/20 p-1 rounded-full">
                  <button
                    onClick={() => setActiveTab("after")}
                    className={`px-4 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-widest transition-all ${activeTab === "after" ? "bg-[#C5A059] text-black font-bold" : "text-white/70 hover:text-white"
                      }`}
                  >
                    {isZh ? "完成重构视角" : isEs ? "Estructura Final" : "Final Arch"}
                  </button>
                  <button
                    onClick={() => setActiveTab("before")}
                    className={`px-4 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-widest transition-all ${activeTab === "before" ? "bg-[#C5A059] text-black font-bold" : "text-white/70 hover:text-white"
                      }`}
                  >
                    {isZh ? "骨解构视图" : isEs ? "Visión Ósea" : "Bone Matrix"}
                  </button>
                </div>

                <div className="absolute bottom-6 left-6 text-[10px] font-mono tracking-[0.4em] text-white/90 uppercase flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                  <span>// Biomechanical Foundation Paradigm</span>
                </div>
              </div>

            </div>

            {/* Right Architectural Narrative (5 Columns Wide) */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#C5A059] mb-4 font-mono">
                {isZh ? "生物力学技术解析" : isEs ? "Anatomía del Sistema" : "Biomechanical Precision"}
              </span>

              <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight uppercase text-[#1A1A1A] leading-[1.1] mb-8">
                {isZh ? "以建筑力学重构颌骨承重支柱" : isEs ? "Ingeniería Avanzada para la Mandíbula" : "Engineering Full Stability with Just Four Implants"}
              </h2>

              <p className="text-base text-neutral-600 font-light leading-relaxed tracking-wide mb-10 font-serif italic border-l-2 border-[#C5A059] pl-4">
                {isZh ? (
                  <>传统的全口重置通常需要 8 到 10 颗植体以及漫长的骨移植术。All-on-4® 技术通过将两颗后部植体呈 45 度倾斜植入，避开了复杂的上颌窦和神经通道，以极致的工程学结构提供稳固承载力。</>
                ) : isEs ? (
                  <>A diferencia de los métodos tradicionales que requieren hasta 10 implantes e injertos extensos, el sistema All-on-4® inclina los implantes posteriores a 45 grados para aprovechar al máximo la densidad ósea natural.</>
                ) : (
                  <>Unlike traditional full-arch rehabilitations requiring up to 10 implants and extensive bone grafts, the All-on-4® system places two posterior implants tilted at 45 degrees. This technique maximizes naturally dense frontal bone structures while safely bypassing sinus cavities and nerve pathways.</>
                )}
              </p>

              {/* Advantages List Animated via GSAP */}
              <div ref={advantagesRef} className="w-full flex flex-col space-y-6 border-t border-black/[0.08] pt-8">
                {ADVANTAGES.map((adv) => (
                  <div key={adv.num} className="group flex items-start gap-6 p-3 rounded-sm transition-colors hover:bg-[#F3EFEA]/60">
                    <span className="font-serif text-2xl text-[#C5A059] font-light">{adv.num}</span>
                    <div>
                      <h3 className="font-serif text-[18px] font-normal text-black group-hover:text-[#C5A059] transition-colors">
                        {adv.title}
                      </h3>
                      <p className="text-s text-neutral-500 font-light leading-relaxed mt-1">{adv.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </Container>
      </section>

      {/* 4. LUXURY FINAL EDITORIAL CTA BLOCK */}
      <section className="bg-[#0B0B0B] text-white py-32 px-6 text-center relative border-t border-white/[0.05] overflow-hidden">

        {/* Glow Lens Backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C5A059]/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-3xl mx-auto flex flex-col items-center relative z-10">
          <span className="text-[10px] uppercase tracking-[0.6em] text-[#C5A059] mb-6 font-mono block border-b border-[#C5A059]/30 pb-2">
            {isZh ? "定制全口即刻重构方案" : isEs ? "Transformación Inmediata" : "Reclaim Your Smile"}
          </span>

          <h2 className="font-serif text-3xl md:text-6xl font-light text-white uppercase tracking-tight mb-8 leading-tight">
            {isZh ? "亲临翠贝卡诊所，重获自然强健咬合" : isEs ? "Programe su evaluación de implantología en Tribeca" : "Schedule Your All-on-4® Consultation in Tribeca"}
          </h2>

          <div className="transform hover:scale-105 transition-transform duration-300">
            <Link
              href={bookingUrl}
              target="_blank"
              className="bg-[#C5A059] text-black text-[11px] uppercase tracking-[0.4em] font-bold py-5 px-12 transition-colors duration-300 hover:bg-white inline-block shadow-2xl"
            >
              {isZh ? "立即预约尊享评估" : isEs ? "Reservar Cita Ahora" : "Request Concierge Booking"}
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}