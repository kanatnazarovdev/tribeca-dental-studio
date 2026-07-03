"use client";
import { motion } from "framer-motion";

interface TribecaAestheticShowcaseProps {
  lang: string;
}

export default function TribecaAestheticShowcase({ lang }: TribecaAestheticShowcaseProps) {
  const isEs = lang === "es";

  return (
    <section className="bg-[#FBFBFA] text-[#1A1A1A] pt-16 md:pt-24 w-full overflow-hidden border-t border-black/[0.03]">
      
      {/* Minimalist Editorial Header - Just Title, Smaller Footprint */}
      <div className="w-full px-6 md:px-12 text-center flex flex-col items-center justify-center mb-12 md:mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.6em] text-[#C5A059] font-bold block mb-4"
        >
          {isEs ? "El Estándar de Tribeca • NYC" : "The Tribeca Standard • NYC"}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-[1.1] text-[#1A1A1A] max-w-3xl font-brandon uppercase"
        >
          {isEs ? "Donde la Odontología" : "Where Dentistry"}{" "}
          <span className="italic font-extralight text-neutral-500">
            {isEs ? "Se Convierte en Arte." : "Becomes Fine Art."}
          </span>
        </motion.h2>
      </div>

      {/* Edge-to-Edge Flush Image Row (16:9 Aspect Ratio) */}
      <div className="w-full flex flex-col md:flex-row">
        
        {/* Image 1 - 16:9 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative w-full md:w-1/3 aspect-video group overflow-hidden bg-neutral-900"
        >
          <img
            src="/photo1.jpeg"
            alt="Tribeca Dental Studio Smile Architecture"
            className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-[1500ms] ease-out group-hover:scale-105 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-black/30 transition-opacity duration-700 group-hover:opacity-0" />
          
          <div className="absolute bottom-6 left-6 z-10 flex flex-col gap-1">
            <span className="text-[9px] font-medium text-white/70 font-mono">01 //</span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-white font-medium">
              {isEs ? "Arquitectura" : "Architecture"}
            </span>
          </div>
        </motion.div>

        {/* Image 2 - 16:9 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.15 }}
          className="relative w-full md:w-1/3 aspect-video group overflow-hidden bg-neutral-900"
        >
          <img
            src="/photo2.jpeg"
            alt="Tribeca Dental Studio Artisan Calibration"
            className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-[1500ms] ease-out group-hover:scale-105 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-black/30 transition-opacity duration-700 group-hover:opacity-0" />
          
          <div className="absolute bottom-6 left-6 z-10 flex flex-col gap-1">
            <span className="text-[9px] font-medium text-white/70 font-mono">02 //</span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-white font-medium">
              {isEs ? "Artesanía" : "Craftsmanship"}
            </span>
          </div>
        </motion.div>

        {/* Image 3 - 16:9 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="relative w-full md:w-1/3 aspect-video group overflow-hidden bg-neutral-900"
        >
          <img
            src="/photo3.jpeg"
            alt="Tribeca Dental Studio 3D Translucency"
            className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-[1500ms] ease-out group-hover:scale-105 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-black/30 transition-opacity duration-700 group-hover:opacity-0" />
          
          <div className="absolute bottom-6 left-6 z-10 flex flex-col gap-1">
            <span className="text-[9px] font-medium text-white/70 font-mono">03 //</span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-white font-medium">
              {isEs ? "Translucidez" : "Translucency"}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}