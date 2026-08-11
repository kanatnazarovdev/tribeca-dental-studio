/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import { bookingUrl } from "@/hooks/helper";

async function getCaseBySlug(slug: string) {
  return await client.fetch(
    `*[_type == "beforeAfter" && slug.current == $slug][0]{
      title,
      category,
      patientAge,
      treatmentDuration,
      description,
      doctorNotes,
      "beforeUrl": beforeImage.asset->url + "?w=1600&fit=max&q=100&auto=format",
      "afterUrl": afterImage.asset->url + "?w=1600&fit=max&q=100&auto=format"
    }`,
    { slug }
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseItem = await getCaseBySlug(slug);

  if (!caseItem) return { title: "Case Not Found" };

  return {
    title: `${caseItem.title} | Before & After Case Study | Tribeca Dental Studio`,
    description: caseItem.description || `Read full clinical overview for ${caseItem.title}.`,
  };
}

export default async function SingleCasePage({
  params,
}: {
  params: Promise<{ slug: string; lang: string }>;
}) {
  const { slug, lang } = await params;
  const caseItem = await getCaseBySlug(slug);

  if (!caseItem) {
    return (
      <div className="min-h-screen flex items-center justify-center uppercase tracking-widest text-xs text-neutral-400 font-ddin">
        Case study not found
      </div>
    );
  }

  return (
    <main className="bg-[#fafaf4] min-h-screen pt-28 pb-24 px-4 md:px-8 lg:px-16 font-ddin text-black">
      <div className="max-w-7xl mx-auto">
        {/* BACK NAVIGATION */}
        <nav className="mb-8">
          <Link
            href={`/${lang}/cases`}
            className="group inline-flex items-center text-xs tracking-[0.25em] uppercase font-bold text-neutral-400 hover:text-black transition-colors"
          >
            <span className="mr-2 transition-transform group-hover:-translate-x-1">←</span>
            Back to Smile Gallery
          </Link>
        </nav>

        {/* TITLE & METADATA BAR */}
        <div className="mb-12 border-b border-black/10 pb-8">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-3">
            {caseItem.category}
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light uppercase tracking-tight text-black mb-6">
            {caseItem.title}
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-xl">
            {caseItem.treatmentDuration && (
              <div>
                <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-1">
                  Treatment Time
                </p>
                <p className="text-sm font-bold uppercase">{caseItem.treatmentDuration}</p>
              </div>
            )}
            {caseItem.patientAge && (
              <div>
                <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-1">
                  Patient Info
                </p>
                <p className="text-sm font-bold uppercase">{caseItem.patientAge}</p>
              </div>
            )}
          </div>
        </div>

        {/* FULL-WIDTH BEFORE & AFTER COMPARISON */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 w-full">
          {/* BEFORE CARD */}
          <div className="relative w-full overflow-hidden bg-neutral-900 border border-neutral-200 shadow-sm flex flex-col">
            <div className="relative w-full aspect-[16/11] sm:aspect-[4/3] md:aspect-[16/11]">
              <Image
                src={caseItem.beforeUrl}
                alt={`${caseItem.title} - Before`}
                fill
                priority
                unoptimized
                className="object-cover object-center"
              />
              <span className="absolute top-4 left-4 z-10 bg-black/90 text-white font-bold text-[10px] uppercase tracking-widest px-4 py-2 border border-white/20">
                Before
              </span>
            </div>
          </div>

          {/* AFTER CARD */}
          <div className="relative w-full overflow-hidden bg-neutral-900 border border-neutral-200 shadow-sm flex flex-col">
            <div className="relative w-full aspect-[16/11] sm:aspect-[4/3] md:aspect-[16/11]">
              <Image
                src={caseItem.afterUrl}
                alt={`${caseItem.title} - After`}
                fill
                priority
                unoptimized
                className="object-cover object-center"
              />
              <span className="absolute top-4 left-4 z-10 bg-[#C5A059] text-black font-bold text-[10px] uppercase tracking-widest px-4 py-2 shadow-sm">
                After
              </span>
            </div>
          </div>
        </div>

        {/* CLINICAL OVERVIEW & DOCTOR NOTES */}
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 border border-neutral-200 shadow-sm mb-16">
          <h2 className="text-2xl font-bold uppercase tracking-tight mb-6">
            Clinical Overview
          </h2>
          {caseItem.description && (
            <p className="font-brandon text-base md:text-lg text-neutral-700 leading-relaxed mb-8 font-light">
              {caseItem.description}
            </p>
          )}

          {caseItem.doctorNotes && (
            <div className="prose prose-sm font-brandon text-neutral-600 border-t border-neutral-100 pt-8">
              <h3 className="font-ddin font-bold text-lg uppercase text-black mb-4">
                Specialist Notes & Treatment Plan
              </h3>
              <PortableText value={caseItem.doctorNotes} />
            </div>
          )}
        </div>

        {/* CTA BANNER */}
        <div className="text-center py-12 bg-black text-white p-8 md:p-16">
          <h3 className="text-2xl md:text-4xl font-light uppercase tracking-tight mb-6">
            Ready for Your Smile Transformation?
          </h3>
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
            <button className="bg-[#C5A059] hover:bg-white text-black font-bold text-xs uppercase tracking-[0.3em] px-10 py-5 transition-all duration-300">
              Schedule Your Consultation
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}