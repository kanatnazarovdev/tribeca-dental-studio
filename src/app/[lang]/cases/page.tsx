/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { Metadata } from "next";
import BeforeAfterSlider from "@/components/BeforeAfterSlider"; // Adjust path if needed

export const revalidate = 60; // Revalidate every minute

interface CaseItem {
  _id: string;
  title: string;
  slug: string;
  category: string;
  patientAge?: string;
  treatmentDuration?: string;
  description?: string;
  beforeUrl: string;
  afterUrl: string;
}

const CATEGORIES = [
  { label: "All Cases", value: "all" },
  { label: "Porcelain Veneers", value: "veneers" },
  { label: "Pediatric Ortho & Airway", value: "pediatric-ortho" },
  { label: "Invisalign® & Aligners", value: "orthodontics" },
  { label: "Dental Implants", value: "implants" },
  { label: "Cosmetic Bonding", value: "bonding" },
];

async function getCases(category?: string): Promise<CaseItem[]> {
  const filter = category && category !== "all" ? `&& category == "${category}"` : "";
  const query = `*[_type == "beforeAfter" ${filter}] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    patientAge,
    treatmentDuration,
    description,
    "beforeUrl": beforeImage.asset->url + "?w=1000&h=1000&fit=crop&q=95&auto=format",
    "afterUrl": afterImage.asset->url + "?w=1000&h=1000&fit=crop&q=95&auto=format"
  }`;
  return await client.fetch(query);
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Smile Gallery | Before & After Transformations | Tribeca Dental Studio",
    description: "Explore real patient transformations, porcelain veneer results, pediatric airway expansion, and orthodontic smile designs at Tribeca Dental Studio.",
  };
}

export default async function CasesPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ category?: string }>;
}) {
  const { lang } = await params;
  const { category = "all" } = await searchParams;
  const cases = await getCases(category);

  return (
    <main className="bg-[#FCFCFC] min-h-screen pt-28 pb-24 px-6 md:px-12 lg:px-20 font-ddin text-black">
      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#C5A059] block mb-4">
          Clinical Excellence
        </span>
        <h1 className="text-4xl md:text-6xl font-light uppercase tracking-tight mb-6">
          Smile Gallery & Case Studies
        </h1>
        <p className="font-brandon text-base md:text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
          Discover natural, bespoke dental architecture and transformative orthodontic outcomes engineered at Tribeca Dental Studio.
        </p>
      </div>

      {/* CATEGORY FILTER TABS */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 border-b border-black/10 pb-8">
          {CATEGORIES.map((cat) => {
            const isActive = category === cat.value;
            return (
              <Link
                key={cat.value}
                href={`/${lang}/cases${cat.value === "all" ? "" : `?category=${cat.value}`}`}
                className={`text-xs uppercase tracking-[0.2em] font-bold px-5 py-3 transition-all duration-300 ${
                  isActive
                    ? "bg-black text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-black"
                }`}
              >
                {cat.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* CASES GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
        {cases.length > 0 ? (
          cases.map((item) => (
            <div
              key={item._id}
              className="group flex flex-col bg-white border border-neutral-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* INTERACTIVE BEFORE/AFTER SLIDER */}
              <BeforeAfterSlider
                beforeUrl={item.beforeUrl}
                afterUrl={item.afterUrl}
                title={item.title}
                treatmentDuration={item.treatmentDuration}
              />

              {/* CARD INFO & LINK TO CASE DETAILS */}
              <Link
                href={`/${lang}/cases/${item.slug}`}
                className="p-6 md:p-8 flex flex-col justify-between flex-grow"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#C5A059] block mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-black mb-3 group-hover:text-[#C5A059] transition-colors">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="font-brandon text-xs text-neutral-500 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-black">
                  <span>View Full Case</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center text-neutral-400 uppercase tracking-widest text-xs">
            No cases found in this category.
          </div>
        )}
      </div>
    </main>
  );
}