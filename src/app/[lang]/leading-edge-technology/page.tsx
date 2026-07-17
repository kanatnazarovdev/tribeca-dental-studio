/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

// 1. Static Image Imports
import tribeca from "../../../../public/tribeca.webp";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default function TechnologyPage({ params }: PageProps) {
  const { lang } = use(params);
  const isEs = lang === "es";
  const isZh = lang === "zh";

  // Prefix-free routing layout config for English
  const getBookingPath = () => {
    if (lang === "en") return "/#leadForm";
    return `/${lang}/#leadForm`;
  };

  const TECH_PILLARS = [
    {
      num: "01",
      name: isZh ? "激光牙科中心" : isEs ? "Odontología Láser" : "Laser Dentistry",
      tag: "Fotona & Biolase Systems",
      desc: isZh 
        ? "依托三大顶尖激光系统，实现无痛无创修复。我们无需传统切刮即可攻克牙周疾病，精准重塑美学牙龈线，甚至采用非侵入式光子技术淡化唇周细纹并舒缓睡眠呼吸暂停。"
        : isEs 
          ? "Tres sistemas de vanguardia que permiten restauraciones sin incisiones ni dolor. Tratamos la periodontitis sin raspados agresivos, diseñamos encías estéticas con micro-precisión y suavizamos líneas de expresión periorales mediante fotónica no invasiva."
          : "Three cutting-edge laser networks engineered for incision-free, pain-free restoration. We eradicate gum disease without aggressive scaling, sculpt aesthetic symmetry via micro-gingivectomy, and reverse perioral aging through non-invasive photonics.",
      bulletPoints: isZh
        ? ["无痛、不伤牙结构的瓷冠拆除", "激光微创牙龈切除与冠延长术", "NightLase® 激光鼾症与呼吸暂停无创治疗", "促进牙龈与骨组织自然再生修复"]
        : isEs
          ? ["Remoción segura de coronas sin daño estructural", "Gingivectomía láser de alta precisión estética", "Terapia NightLase® para la apnea del sueño", "Estimulación bio-fotónica de tejido y hueso"]
          : ["Safe crown removal protecting native tooth matrix", "Micro-precision cosmetic gingival sculpting", "NightLase® sleep disordered breathing elimination", "Bio-photonic stimulation of native gum and bone"]
    },
    {
      num: "02",
      name: isZh ? "iTero 三维口内扫描" : isEs ? "Escáner iTero 3D" : "iTero 3D Scanning",
      tag: "Radiation-Free Typography",
      desc: isZh
        ? "告别传统石膏咬模。这一高精度手持红外激光系统可在数秒内捕捉完整的口内立体结构，不仅能提前模拟并直观呈现隐适美矫正后的惊艳效果，还能灵敏侦测早期隐匿性龋齿。"
        : isEs
          ? "Elimina las impresiones de molde tradicionales. Este sistema láser infrarrojo captura la anatomía exacta en 3D en segundos, permitiendo simular instantáneamente los resultados de Invisalign y monitorizar cambios micro-estructurales."
          : "Eliminating traditional physical texturing molds. This handheld infrared wave wand captures absolute multi-dimensional anatomy within seconds, allowing us to simulate definitive Invisalign configurations and trace micro-structural deviations over time.",
      bulletPoints: isZh
        ? ["百分百零辐射、绿色安全扫描", "牙齿矫正与美学设计效果实时模拟", "精准侦测常规X光易漏诊的隐藏期龋齿", "数字化精确建模，大幅缩短无谓等待时间"]
        : isEs
          ? ["Diagnóstico digital 100% libre de radiación", "Simulación instantánea del progreso ortodóntico", "Detección de caries profundas interproximales", "Modelos digitales inmediatos para restauraciones"]
          : ["100% radiation-free diagnostic capture", "Instant real-time orthodontic outcome previews", "Detection of hidden interproximal decay missed by X-rays", "Immediate digital data relay for clinical fabrication"]
    },
    {
      num: "03",
      name: isZh ? "CBCT 三维锥形束高精CT" : isEs ? "Tomografía CBCT 3D" : "CBCT 3D Tomography",
      tag: "Volumetric Structural Mapping",
      desc: isZh
        ? "提供超越常规牙片的立体三维骨骼视图。仅需常规全身CT极低的辐射量（比大西洋飞行还要低），即可精细解构面部神经、复杂根管组织以及气道内部的三维空间轮廓。"
        : isEs
          ? "Ofrece una visión tridimensional profunda inaccesible para la radiología convencional. Con una exposición mínima (menor que un vuelo transatlántico), mapea estructuras nerviosas, anatomía ósea e indicadores de la vía aérea."
          : "Providing an absolute structural block depth unreachable by traditional flat film arrays. Utilizing ultra-low dosage mapping (less than a transatlantic flight), it interprets neurological pathways, dense sinus spaces, and airway metrics.",
      bulletPoints: isZh
        ? ["提供顶级口腔外科与种植手术的空间数据精准导航", "全面排查与筛查颌骨良恶性肿瘤及病变情况", "精准解构颞下颌关节（TMJ）结构及多源性疼痛根源", "精细量化气道阻塞面积，精准定制止鼾方案"]
        : isEs
          ? ["Navegación espacial definitiva para cirugía de implantes", "Cribado oncológico avanzado de patologías óseas", "Diagnóstico preciso de micro-estructuras en la ATM", "Cuantificación volumétrica de obstrucciones de la vía aérea"]
          : ["Definitive spatial data navigation for implant architecture", "Advanced oncological screening of internal jaw pathology", "Precision structural diagnostics of deep TMJ disorders", "Volumetric quantification of soft-tissue airway collapse"]
    },
    {
      num: "04",
      name: isZh ? "全景数字影像系统" : isEs ? "Radiografía Panorámica" : "Panoramic Radiography",
      tag: "Contextual Orthogonal Imaging",
      desc: isZh
        ? "通过流畅优雅的一次性环绕扫描，全景重现颌骨与全口牙列。最关键的是，扫描设备完全置于口外，不产生任何侵入不适，彻底解放易恶心呕吐等敏感患者的诊疗体验。"
        : isEs
          ? "Captura la dentición completa y el eje de la mandíbula en una única proyección bidimensional continua. Su diseño externo elimina las molestias intraorales, siendo idóneo para pacientes con reflejo nauseoso sensible."
          : "Capturing the entire integrated dentition and structural jaw geometry within a single continuous orthogonal view. Engineered completely extra-orally, it removes intraoral discomfort—perfect for individuals with hyper-sensitive gag reflexes.",
      bulletPoints: isZh
        ? ["一次扫描全景呈现场景全貌，高效助力复杂智齿微创拔除", "全面掌控全口活动及固定假牙的牙槽骨上下文骨质分布", "全面追踪深层颌骨囊肿与周期性牙周组织骨受损异动", "口外零触碰非侵入式摄影，打造舒适就诊新巅峰"]
        : isEs
          ? ["Evaluación contextual integral para terceros molares", "Control de densidad de soporte para prótesis completas", "Rastreo de quistes óseos profundos y pérdida periodontal", "Fotografía extraoral no invasiva para máxima comodidad"]
          : ["Comprehensive contextual assessment for complex impactions", "Pre-extextural support profiling for full or partial dentures", "Deep detection of structural bone cysts and bone drop metrics", "Non-contact external sequence designed for ultimate clinical comfort"]
    }
  ];

  return (
    <main className="bg-[#FBFBFA] text-[#1A1A1A] min-h-screen relative overflow-hidden">
      
      {/* 1. 50/50 SPLIT CINEMATIC HERO SECTION (Fixed to the Top Block) */}
      <section className="relative w-full min-h-[75vh] grid grid-cols-1 lg:grid-cols-2 bg-[#1A1A1A] text-white overflow-hidden border-b border-black/[0.05]">
        
        {/* LEFT PANEL: TYPOGRAPHY & CONTEXT */}
        <div className="w-full flex flex-col justify-center p-8 md:p-16 lg:p-24 z-10 order-2 lg:order-1 border-t lg:border-t-0 lg:border-r border-white/[0.04]">
          <div className="max-w-xl text-left flex flex-col items-start">
            
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[11px] font-bold uppercase tracking-[0.6em] text-[#C5A059] mb-6 font-mono"
            >
              {isZh ? "高精尖数字医疗中心" : isEs ? "La Vanguardia Digital" : "The Diagnostics Standard"}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight uppercase text-white leading-[1.1] mb-8"
            >
              {isZh ? "领航级医疗科技" : isEs ? "Tecnología de Vanguardia" : "Leading Edge Technology"}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg font-light leading-relaxed text-neutral-300 tracking-wide font-serif italic"
            >
              {isZh ? (
                <>翠贝卡牙科诊所（Tribeca Dental Studio）以前瞻视界颠覆传统临床边界。我们整合了全纽约顶尖的非侵入式激光诊疗群、高精度三维扫描以及多维体积构型系统，致力于为尊贵客户构筑安全无痛的奢华诊疗新体验。</>
              ) : isEs ? (
                <>En Tribeca Dental Studio redefinimos la experiencia clínica tradicional. Al consolidar redes láser no invasivas, escaneos volumétricos tridimensionales y diagnósticos de radiación ultra-baja, garantizamos tratamientos de máxima seguridad biológica.</>
              ) : (
                <>At Tribeca Dental Studio, we move past classic clinical constraints. By consolidating elite non-invasive laser infrastructure, pure multidimensional surface scanners, and localized volumetric structural mapping, we ensure your treatment is delivered with strict biological safety.</>
              )}
            </motion.p>
          </div>
        </div>

        {/* RIGHT PANEL: FULL-HEIGHT EDITORIAL IMAGE */}
        <div className="relative w-full h-[45vh] lg:h-auto min-h-[400px] overflow-hidden bg-neutral-900 order-1 lg:order-2">
          <Image
            src={tribeca} 
            alt="Tribeca Dental Studio High Tech Facility"
            fill
            priority
            className="object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-1000 ease-out"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Subtle vignette for mobile overlay text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/50 via-transparent to-transparent lg:hidden" />
        </div>
      </section>

      {/* 2. THE ASYMMETRICAL TECHNOLOGY PILLARS */}
      <section className="relative w-full py-24 md:py-36 px-6 md:px-12 lg:px-24 z-20 bg-[#FBFBFA]">
        <div className="absolute inset-y-0 left-6 md:left-12 lg:left-24 w-[1px] bg-black/[0.03] pointer-events-none" />
        <div className="absolute inset-y-0 right-6 md:right-12 lg:right-24 w-[1px] bg-black/[0.03] pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col space-y-24 md:space-y-36 relative z-30">
          {TECH_PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start border-b border-black/[0.05] pb-16 md:pb-24"
            >
              <div className="lg:col-span-3 flex lg:flex-col items-baseline lg:items-start justify-between lg:justify-start gap-4">
                <span className="text-3xl md:text-4xl font-serif text-neutral-200 font-light block tracking-tight">{pillar.num}</span>
                <span className="text-[9px] font-mono tracking-[0.4em] text-[#C5A059] uppercase block lg:mt-2">// {pillar.tag}</span>
              </div>
              <div className="lg:col-span-5 flex flex-col items-start">
                <h2 className="text-2xl md:text-3xl font-serif font-light tracking-tight text-[#1A1A1A] mb-6">{pillar.name}</h2>
                <p className="text-base text-neutral-500 font-light leading-relaxed tracking-wide">{pillar.desc}</p>
              </div>
              <div className="lg:col-span-4 bg-[#F7F6F3]/60 rounded-sm p-6 md:p-8 border border-black/[0.02]">
                <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase block mb-4">
                  {isZh ? "核心诊断优势" : isEs ? "Ventajas Clínicas" : "Clinical Applications"}
                </span>
                <ul className="flex flex-col space-y-3">
                  {pillar.bulletPoints.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-sm font-light text-neutral-600 flex items-start gap-3">
                      <span className="text-[#C5A059] mt-1 text-xs">▪</span>
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. CLEAN CENTERED EDITORIAL ACTION BLOCK */}
      <section className="bg-[#0B0B0B] text-white py-28 px-6 text-center z-20 relative border-t border-black/[0.05]">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <p className="text-[10px] uppercase tracking-[0.6em] text-[#C5A059] mb-6 font-mono">
            {isZh ? "即刻开启私享数字诊疗" : isEs ? "Agenda Tu Evaluación Digital" : "Schedule Your Matrix Diagnostics"}
          </p>
          
          <h2 className="font-serif text-3xl md:text-5xl font-light text-white uppercase tracking-tight mb-8 leading-tight max-w-2xl">
            {isZh ? "亲临体验纽约最高标准数字诊断工艺" : isEs ? "Experimenta la Odontología del Futuro en Manhattan" : "Experience the Diagnostic Elite in Lower Manhattan"}
          </h2>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href={getBookingPath()}
              className="bg-[#C5A059] text-white text-[11px] uppercase tracking-[0.4em] font-bold py-4 px-10 transition-colors duration-300 hover:bg-[#B38F4B]"
            >
              {isZh ? "即刻预约尊享通道" : isEs ? "Reservar Cita Ahora" : "Request Concierge Booking"}
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}