/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import { motion } from "framer-motion";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import Image from "next/image";

export default function TribecaDentalStudioPage({
  lang = "en",
}: {
  lang?: string;
}) {
  const scrollToId = useSmoothScroll();

  const features = [
    {
      title: "Multitude of Options",
      text: "We bring the specialists to you. From periodontics to prosthodontics, enjoy world-class care without referrals.",
    },
    {
      title: "Kids Welcome",
      text: "Tribeca Dental Studio 4 Kids features a full-floor specialty office with board-certified pediatric experts and age-appropriate design.",
    },
    {
      title: "Modern & High-Tech",
      text: "Our surgical suite features intraoral cameras, digital radiography, and soft-tissue lasers for precise, predictable outcomes.",
    },
    {
      title: "Clean & Allergen-Free",
      text: "We prioritize your safety with hypoallergenic wall paints, hospital-grade air purification, and mercury-free restorative materials.",
    },
    {
      title: "Spa-Like Comforts",
      text: "The journey to oral health should be enjoyable. Relax with massage-equipped treatment chairs and personal entertainment.",
    },
  ];

  return (
    <main className="bg-[#FBFBFA] text-[#1A1A1A]">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden bg-black flex flex-col md:flex-row">
        <div className="relative w-full md:w-1/2 h-[40vh] md:h-screen bg-neutral-900 border-r border-white/10">
          <Image
            src="/aboutPage.png" 
            alt="Tribeca Dental Studio Clinic"
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/40" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center px-12 lg:px-24 bg-[#0B0B0B] text-white">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.6em] text-[#C5A059] font-medium mb-8"
          >
            {lang === "es" ? "Odontología de Élite en NYC" : "Premier Dental Studio in NYC"}
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-serif font-light leading-[1.1] mb-12">
            Tribeca <br />{" "}
            <span className="italic text-neutral-400">Dental Studio</span>
          </h1>
          <button
            onClick={() => scrollToId("features")}
            className="px-10 py-4 border border-white/20 w-fit hover:border-[#C5A059] transition-all uppercase tracking-[0.3em] text-[11px]"
          >
            {lang === "es" ? "DESCUBRE LA DIFERENCIA" : "DISCOVER THE DIFFERENCE"}
          </button>
        </div>
      </section>

      {/* 2. EDITORIAL INTRO SECTION */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl font-light leading-relaxed text-neutral-600 italic"
        >
          At Tribeca Dental Studio, patients can look forward to visiting an office that’s advanced, welcoming, and truly comprehensive. 
          Instead of just one doctor, a whole, accomplished team of general dentists and specialists is here waiting for you, 
          providing pediatric care, periodontal treatment, prosthodontic solutions, endodontic work, and much more in one, convenient environment.
        </motion.p>
      </section>

      {/* 3. FEATURES GRID */}
      <section
        id="features"
        className="py-16 px-6 md:px-12 lg:px-24 border-b border-black/5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {features.map((f, i) => (
            <div key={i} className="group">
              <span className="text-[10px] font-mono text-[#C5A059] mb-4 block">
                0{i + 1} //
              </span>
              <h3 className="text-2xl font-serif mb-6">{f.title}</h3>
              <p className="text-neutral-500 font-light leading-relaxed">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FULL-BLEED IMAGE TRIPTYCH */}
      <div className="w-full flex flex-col md:flex-row h-auto md:h-[60vh]">
        {[1, 2, 3].map((num) => (
          <motion.div
            key={num}
            className="relative w-full md:w-1/3 aspect-video md:aspect-auto group overflow-hidden bg-neutral-900"
          >
            <Image
              width={1300}
              height={1300}
              src={`/photo${num}.JPG`}
              alt="Smile Architecture"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-[1500ms] group-hover:scale-105 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-black/30 transition-opacity duration-700 group-hover:opacity-0" />
            <div className="absolute bottom-6 left-6 z-10 flex flex-col gap-1">
              <span className="text-[9px] font-medium text-white/70 font-mono">
                0{num} //
              </span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-white font-medium">
                CRAFT
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}