"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { bookingUrl } from "@/hooks/helper";

export default function NotFound() {
  const params = useParams();
  const lang = (params?.lang as string) || "en";

  const isZh = lang === "zh";
  const isEs = lang === "es";

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white flex flex-col items-center justify-center px-6 py-24 font-ddin text-center">
      <div className="max-w-xl mx-auto border border-white/10 p-10 md:p-16 bg-neutral-900/50 backdrop-blur-md">
        {/* SUBTITLE BADGE */}
        <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-4">
          {isZh
            ? "页面正在开发中"
            : isEs
            ? "Página en Desarrollo"
            : "Under Development"}
        </span>

        {/* MAIN HEADING */}
        <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6 text-white leading-tight">
          {isZh
            ? "此服务页面正在建设中"
            : isEs
            ? "Esta página de servicio está en desarrollo"
            : "This Service Page is Currently Under Development"}
        </h1>

        {/* DESCRIPTION */}
        <p className="font-brandon text-sm md:text-base text-neutral-400 mb-10 leading-relaxed max-w-md mx-auto">
          {isZh
            ? "我们正在为您打造更完善的服务介绍。如需了解此诊疗项目或直接预约，请与我们的专家团队联系。"
            : isEs
            ? "Estamos preparando los detalles de este tratamiento. Para obtener información o reservar una consulta, comuníquese con nuestro equipo."
            : "We are currently preparing detailed information for this treatment. In the meantime, you can schedule a consultation with our specialists directly."}
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#C5A059] hover:bg-white text-black font-bold text-xs uppercase tracking-[0.25em] px-8 py-4 transition-all duration-300"
          >
            {isZh ? "预约咨询" : isEs ? "Reservar Cita" : "Book Consultation"}
          </a>

          <Link
            href={`/${lang}/services`}
            className="w-full sm:w-auto border border-white/30 hover:border-[#C5A059] text-white font-bold text-xs uppercase tracking-[0.25em] px-8 py-4 transition-all duration-300"
          >
            {isZh ? "返回服务列表" : isEs ? "Ver Todos los Servicios" : "All Services"}
          </Link>
        </div>
      </div>
    </main>
  );
}