/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { bookingUrl } from "@/hooks/helper";
import { Play, Pause, CheckCircle2, AlertCircle } from "lucide-react";

export default function WisdomTeethRemovalPage() {
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
    badge: isZh ? "口腔外科与拔牙专科" : isEs ? "Cirugía Oral y Extracciones" : "Oral Surgery & Extractions",
    title: isZh ? "智齿拔除与微创外科" : isEs ? "Extracción de Muelas del Juicio" : "Wisdom Teeth Removal in Tribeca",
    subtitle: isZh
      ? "由纽约顶尖口腔外科医师团队提供无痛、舒适、精细化的智齿拔除与阻生智齿治疗。"
      : isEs
      ? "Extracción precisa y sin dolor de terceros molares e impacciones con sedación personalizada en Lower Manhattan."
      : "Expert, minimally invasive wisdom teeth extractions with advanced 3D scanning and personalized sedation options in Lower Manhattan.",

    // Quick Highlights
    highlights: [
      isZh ? "3D CBCT 数字化精准成像" : isEs ? "Diagnóstico digital 3D de alta precisión" : "Advanced 3D CBCT imaging & diagnostics",
      isZh ? "多重镇静与无痛局部麻醉" : isEs ? "Opciones de sedación para máxima comodidad" : "Comprehensive sedation & pain-free numbing",
      isZh ? "微创技术，加速术后恢复" : isEs ? "Técnicas mínimamente invasivas" : "Minimally invasive surgical techniques",
      isZh ? "支持绝大多数 PPO 牙科保险" : isEs ? "Aceptamos la mayoría de seguros PPO" : "PPO insurance accepted & flexible financing",
    ],

    // Why Remove Wisdom Teeth / Symptoms
    symptomsTitle: isZh ? "为何需要拔除智齿？" : isEs ? "¿Por qué extraer las muelas del juicio?" : "Common Indications for Extraction",
    symptomsDesc: isZh
      ? "当颌骨空间不足时，智齿容易阻生或异位萌出，从而引发一系列口腔并发症："
      : isEs
      ? "La falta de espacio en la mandíbula puede causar muelas retenidas e infecciones recurrente:"
      : "Lack of jaw space often leads to impaction, inflammation, and potential damage to adjacent teeth:",
    symptomsList: [
      { title: isZh ? "阻生与局部发炎" : isEs ? "Inflamación e Infección" : "Impaction & Gum Infection", desc: isZh ? "智齿无法正常萌出，引发周边牙龈红肿疼痛与冠周炎" : isEs ? "Acumulación de bacterias en encías parcialmente erupcionadas" : "Partially erupted teeth trap bacteria, causing painful gum inflammation" },
      { title: isZh ? "邻牙挤压与拥挤" : isEs ? "Daño a Dientes Vecinos" : "Damage to Adjacent Teeth", desc: isZh ? "横向生长的智齿顶坏第二磨牙或导致齿列拥挤变形" : isEs ? "Presión excesiva que desalinea la dentadura o genera caries" : "Pressure against second molars causes crowding and tooth decay" },
      { title: isZh ? "颌骨囊肿与病变" : isEs ? "Quistes Óseos" : "Jaw Cysts & Bone Loss", desc: isZh ? "阻生牙周围可能形成囊肿，损害颌骨与神经健康" : isEs ? "Formación de sacos de líquido que dañan el hueso mandibular" : "Fluid-filled sacs can develop around impacted teeth, threatening bone" },
    ],

    // Step-by-Step Surgical Journey
    processTitle: isZh ? "拔智齿完整诊疗流程" : isEs ? "El Proceso de Extracción Paso a Paso" : "What to Expect: Step-by-Step",
    steps: [
      {
        num: "01",
        title: isZh ? "3D 影像评估与方案制定" : isEs ? "Escaneo 3D y Planificación" : "3D Evaluation & Planning",
        desc: isZh ? "通过数字 X 光与 3D CBCT 扫描精确定位智齿与神经位置，制定无痛拔牙方案。" : isEs ? "Radiografías 3D para evaluar la posición exacta de las raíces y nervios." : "Low-radiation 3D imaging evaluates root position and proximity to nerves.",
      },
      {
        num: "02",
        title: isZh ? "舒缓镇静与无痛拔除" : isEs ? "Sedación y Cirugía Precisa" : "Pain-Free Extraction",
        desc: isZh ? "施加局部麻醉或根据需求选择舒适镇静，采用微创分块拆除技术顺利拔除。" : isEs ? "Aplicación de anestesia local o sedación para una extracción sin dolor." : "Local anesthesia and tailored sedation ensure complete comfort during surgery.",
      },
      {
        num: "03",
        title: isZh ? "术后止血与缝合" : isEs ? "Cierre y Recuperación" : "Sutures & Immediate Care",
        desc: isZh ? "清洁创口并放置可吸收缝合线，放置止血棉块并提供专业术后冰敷指示。" : isEs ? "Limpieza de la zona y colocación de suturas disolubles si es necesario." : "The site is cleansed, disinfected, and gently sutured for optimal blood clot formation.",
      },
      {
        num: "04",
        title: isZh ? "快速康复与护理指导" : isEs ? "Cuidados Posteriores" : "Post-Op Healing & Support",
        desc: isZh ? "提供详细饮食指南与止痛处方，安排复诊监测，数日内即可恢复正常生活。" : isEs ? "Instrucciones detalladas de alimentación blanda y manejo del dolor." : "Comprehensive aftercare instructions, prescription support, and follow-up monitoring.",
      },
    ],

    recoveryTitle: isZh ? "智齿拔除后恢复与护理指南" : isEs ? "Guía de Recuperación y Cuidados" : "Post-Operative Recovery Guide",
    recoveryItems: [
      { title: isZh ? "肿胀与疼痛管理" : isEs ? "Manejo de Hinchazón" : "Managing Swelling & Pain", desc: isZh ? "前 48 小时在面部冰敷（冰敷 20 分钟/暂停 20 分钟），按医嘱使用止痛药物。" : isEs ? "Aplique compresas frías las primeras 48 horas e tome los analgésicos recetados." : "Apply cold ice packs for 20-minute intervals and take prescribed pain relievers." },
      { title: isZh ? "软食与流质饮食" : isEs ? "Dieta Blanda" : "Soft Food Diet", desc: isZh ? "前几天建议食用奶昔、酸奶、温汤与土豆泥，切勿使用吸管以防干槽症。" : isEs ? "Consuma purés, sopas tibias y yogur. NO use pajillas/popotes para evitar alveolitis." : "Stick to smoothies, soups, and mashed potatoes. Never use a straw to prevent dry socket." },
      { title: isZh ? "口腔卫生与淡盐水含漱" : isEs ? "Higiene Oral Suave" : "Gentle Rinsing", desc: isZh ? "术后 24 小时后，可用温淡盐水轻柔漱口，保持创口清洁。" : isEs ? "Después de 24 horas, realice enjuagues suaves con agua tibia y sal." : "After 24 hours, gently rinse with warm salt water to keep the extraction site clean." },
    ],

    faqTitle: isZh ? "常见问题" : isEs ? "Preguntas Frecuentes" : "Frequently Asked Questions",
    faqs: [
      {
        q: isZh ? "拔智齿会感觉疼痛吗？" : isEs ? "¿Es dolorosa la extracción de las muelas del juicio?" : "Is wisdom tooth extraction painful?",
        a: isZh
          ? "在手术过程中，局部麻醉与镇静会完全阻断痛觉，您仅会感觉到轻微的推压感。术后可能会有少许轻微肿痛，常规止痛药即可轻松缓解。"
          : isEs
          ? "No sentirá dolor durante el procedimiento gracias a la anestesia local y la sedación. La molestia posterior es leve y manejable con analgésicos."
          : "You will feel no pain during surgery due to local anesthesia and sedation. Post-operative soreness is normal and easily managed with standard medication.",
      },
      {
        q: isZh ? "拔智齿后需要多久才能恢复？" : isEs ? "¿Cuánto tiempo toma la recuperación?" : "How long does recovery take?",
        a: isZh
          ? "大多数患者在 3 至 5 天内即可恢复日常工作和学习。软组织通常在 1 至 2 周内完全愈合。"
          : isEs
          ? "La mayoría de los pacientes regresan a sus actividades normales en 3 a 5 días. La encía se cura completamente en 1-2 semanas."
          : "Most patients return to school or work within 3 to 5 days, with full soft tissue healing occurring over 1 to 2 weeks.",
      },
      {
        q: isZh ? "什么是干槽症（Dry Socket），如何预防？" : isEs ? "¿Qué es la alveolitis seca y cómo prevenirla?" : "What is a dry socket and how do I avoid it?",
        a: isZh
          ? "干槽症是指拔牙窝内的血凝块提前脱落。预防关键：术后一周内切勿使用吸管吸饮、切勿吸烟或剧烈吐口水。"
          : isEs
          ? "Ocurre cuando el coágulo de sangre se desaloja. Evite fumar, escupir con fuerza y usar pajillas durante los primeros días."
          : "Dry socket occurs if the protective blood clot dislodges. Avoid straws, smoking, and vigorous spitting for the first 5–7 days.",
      },
    ],
  };

  return (
    <main className="bg-[#FCFCFC] text-black min-h-screen pt-32 pb-24 font-ddin">
      <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {content.highlights.map((high, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#C5A059] mt-0.5 shrink-0" />
                  <span className="font-brandon text-xs font-bold uppercase tracking-wider text-neutral-700">
                    {high}
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
                {isZh ? "预约智齿检查" : isEs ? "Agendar Consulta de Cirugía" : "Book Extraction Consultation"}
              </a>
              <a
                href="tel:2125615303"
                className="inline-flex items-center justify-center border border-black/20 hover:border-black text-black font-bold uppercase tracking-[0.2em] text-xs px-8 py-4 transition-all duration-300"
              >
                212-561-5303
              </a>
            </div>
          </div>

          {/* RIGHT: HERO VIDEO / DIAGNOSTIC CARD */}
          <div className="relative aspect-[4/3] sm:aspect-square bg-neutral-100 border border-neutral-200 overflow-hidden shadow-sm group">
            <video
              ref={videoRef}
              src="/wisdomtooth.mp4" 
              poster="/services/wisdom-teeth-removal.jpg" 
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
                  3D CBCT Surgical Mapping
                </p>
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <p className="font-brandon text-s text-neutral-600 leading-relaxed">
                {isZh
                  ? "高清三维数字成像，精准辨识牙根与神经走向，规避手术风险。"
                  : isEs
                  ? "Diagnóstico digital 3D para evaluar la posición exacta de las raíces y nervios."
                  : "High-precision 3D CBCT imaging maps nerve pathways for safe, minimally invasive extractions."}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SYMPTOMS & IMPACTION REASONS */}
      <section className="bg-neutral-50 py-20 px-6 md:px-12 lg:px-20 border-y border-neutral-200 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-2">
              Preventative Oral Care
            </span>
            <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-black mb-4">
              {content.symptomsTitle}
            </h2>
            <p className="font-brandon text-s text-neutral-600 leading-relaxed">
              {content.symptomsDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.symptomsList.map((sym, idx) => (
              <div key={idx} className="p-8 bg-white border border-neutral-200 shadow-sm">
                <AlertCircle size={24} className="text-[#C5A059] mb-4" />
                <h3 className="text-xl font-bold uppercase tracking-tight text-black mb-2">
                  {sym.title}
                </h3>
                <p className="font-brandon text-s text-neutral-500 leading-relaxed">
                  {sym.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STEP-BY-STEP SURGICAL PROCESS */}
      <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-20">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-2">
            Clinical Precision
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

      {/* 4. RECOVERY & AFTERCARE GUIDE */}
      <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-20">
        <div className="bg-neutral-900 text-white p-8 md:p-14 border border-neutral-900 shadow-md">
          <div className="max-w-2xl mb-10">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-2">
              Post-Op Protocol
            </span>
            <h3 className="text-3xl font-light uppercase tracking-tight text-white">
              {content.recoveryTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.recoveryItems.map((rec, idx) => (
              <div key={idx} className="border-t border-white/20 pt-6">
                <span className="text-[#C5A059] font-bold text-xs uppercase tracking-widest block mb-2">
                  0{idx + 1} Step
                </span>
                <h4 className="text-lg font-bold uppercase text-white mb-2">
                  {rec.title}
                </h4>
                <p className="font-brandon text-s text-neutral-300 leading-relaxed">
                  {rec.desc}
                </p>
              </div>
            ))}
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
            {isZh ? "立即预约您的智齿排查与治疗" : isEs ? "¿Necesita Extraer sus Muelas del Juicio?" : "Schedule Your Wisdom Teeth Evaluation"}
          </h3>
          <p className="font-brandon text-sm text-neutral-300 max-w-lg mx-auto mb-8">
            {isZh ? "访问我们位于曼哈顿翠贝卡的专家诊所，享受全方位无痛舒适拔牙体验。" : isEs ? "Reserve una cita en nuestra clínica en Tribeca, Lower Manhattan." : "Comprehensive multi-specialty care in the heart of Tribeca, Lower Manhattan."}
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