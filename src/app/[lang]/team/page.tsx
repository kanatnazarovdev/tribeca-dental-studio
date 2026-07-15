/* eslint-disable @typescript-eslint/no-explicit-any */
import { Metadata } from "next";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import TeamGrid from "@/components/TeamGrid";
import { getAlternates } from "@/hooks/helper";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { lang } = await params;
  const isEs = lang === "es";

  const title = isEs
    ? "Maestros de la Estética Dental | Nuestro Equipo | Tribeca Dental Studio"
    : "Masters of Dental Aesthetics | Meet Our Team | Tribeca Dental Studio";

  const description = isEs
    ? "Conozca a los cirujanos y diseñadores de sonrisas de élite en Tribeca Dental Studio Manhattan. Odontología multidisciplinaria de lujo."
    : "Meet the elite smile designers, surgeons, and clinicians at Tribeca Dental Studio Manhattan. Luxury multi-specialty dentistry under one roof.";

  return {
    alternates: getAlternates(lang, "team"),
    title: {
      absolute: title
    },
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: "/team.webp",
          width: 1200,
          height: 630,
          alt: "Tribeca Dental Studio Elite Specialist Lineup",
        },
      ],
    },
  };
}

const TEAM_QUERY = `*[_type == "doctor"] | order(order asc) {
  name,
  role,
  "imageUrl": image.asset->url,
  "slug": slug.current
}`;

export default async function TeamPage({ params }: any) {
  const { lang } = await params;
  const isEs = lang === "es";
  const doctors = await client.fetch(TEAM_QUERY);

  return (
    <main className="bg-[#FBFBFA] text-[#1A1A1A] min-h-screen relative overflow-hidden">
      
      {/* 1. APA STYLE HERO SECTION - DEEP BLURRED IMAGE BACKGROUND */}
      <section className="relative w-full min-h-[100vh] flex items-center justify-start py-32 px-6 md:px-12 lg:px-24 overflow-hidden bg-black text-white">
        
        {/* The Blurred Background Image (Scaled up to avoid edge bleeding from blur) */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none scale-100 blur-[1px] opacity-60">
          <Image
            src="/tribeca-team.webp" // swap with "/aboutPage.png" if preferred
            alt="Tribeca Dental Studio Team Backdrop"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Dark vignette overlay to anchor readability */}
        <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />

        {/* Left-Aligned, High-End Editorial Content */}
        <div className="relative z-20 max-w-3xl text-left flex flex-col items-start lg:pl-6">
          <span className="text-[10px] uppercase tracking-[0.6em] text-[#C5A059] font-bold block mb-4">
            {isEs ? "El Colectivo Clínico • NYC" : "The Clinical Collective • NYC"}
          </span>

          <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tight uppercase mb-6 text-white leading-[1.1]">
            {isEs ? "Conoce Nuestro Equipo" : "Meet Our Team"}
          </h1>

          <p className="text-base md:text-lg font-light leading-relaxed text-neutral-300 max-w-2xl tracking-wide">
            {isEs ? (
              <>
                Tribeca Dental Studio atrae al más alto nivel de talento de todo el mundo y, a través de una innovación, creatividad y destreza inigualables, promete lo mejor en odontología estética para una clientela selecta.
              </>
            ) : (
              <>
                Tribeca Dental Studio draws the highest echelon of talent from across the globe and – through unrivaled innovation, creativity and skill – promises the very best in aesthetic dentistry to an elite clientele.
              </>
            )}
          </p>
        </div>
      </section>

      {/* 2. MAIN TEAM GRID SECTION (Clean luxury white layout) */}
      <section className="relative w-full py-24 md:py-36 px-6 md:px-12 lg:px-24 z-20 bg-[#FBFBFA]">
        <div className="relative">
          <TeamGrid doctors={doctors} />
        </div>
      </section>

    </main>
  );
}