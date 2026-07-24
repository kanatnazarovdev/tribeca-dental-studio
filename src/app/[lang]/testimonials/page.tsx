/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { Metadata } from "next";
import { Play, Star } from "lucide-react";

export const revalidate = 60;

interface TestimonialItem {
  _id: string;
  patientName: string;
  slug: string;
  treatmentCategory: string;
  rating: number;
  description: string;
  videoUrl?: string;
  thumbnailUrl?: string;
}

const CATEGORIES = [
  { label: "All Reviews", value: "all" },
  { label: "Cosmetic & Veneers", value: "cosmetic" },
  { label: "Pediatric Dentistry", value: "pediatric" },
  { label: "Orthodontics", value: "orthodontics" },
  { label: "Dental Implants", value: "implants" },
  { label: "General Dentistry", value: "general" },
];

async function getTestimonials(category?: string): Promise<TestimonialItem[]> {
  const filter = category && category !== "all" ? `&& treatmentCategory == "${category}"` : "";
  const query = `*[_type == "testimonial" ${filter}] | order(_createdAt desc) {
    _id,
    patientName,
    "slug": slug.current,
    treatmentCategory,
    rating,
    description,
    videoUrl,
    "thumbnailUrl": thumbnail.asset->url + "?w=800&h=600&fit=crop&q=95&auto=format"
  }`;
  return await client.fetch(query);
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Patient Testimonials & Video Reviews | Tribeca Dental Studio",
    description: "Watch real video stories and read testimonials from patients at Tribeca Dental Studio in Lower Manhattan.",
  };
}

export default async function TestimonialsPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ category?: string }>;
}) {
  const { lang } = await params;
  const { category = "all" } = await searchParams;
  const testimonials = await getTestimonials(category);

  return (
    <main className="bg-[#FCFCFC] text-black min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-20 font-ddin">
      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#C5A059] block mb-4">
          Real Patient Stories
        </span>
        <h1 className="text-4xl md:text-6xl font-light uppercase tracking-tight mb-6">
          Patient Testimonials
        </h1>
        <p className="font-brandon text-base md:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          Hear directly from our patients about their smile transformations and compassionate care at Tribeca Dental Studio.
        </p>
      </div>

      {/* CATEGORY TABS */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex flex-wrap items-center justify-center gap-3 border-b border-neutral-200 pb-8">
          {CATEGORIES.map((cat) => {
            const isActive = category === cat.value;
            return (
              <Link
                key={cat.value}
                href={`/${lang}/testimonials${cat.value === "all" ? "" : `?category=${cat.value}`}`}
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

      {/* TESTIMONIALS GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.length > 0 ? (
          testimonials.map((item) => (
            <Link
              key={item._id}
              href={`/${lang}/testimonials/${item.slug}`}
              className="group flex flex-col bg-white border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* THUMBNAIL CONTAINER */}
              <div className="relative aspect-[16/9] bg-neutral-900 overflow-hidden">
                {item.thumbnailUrl ? (
                  <Image
                    src={item.thumbnailUrl}
                    alt={item.patientName}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-neutral-500 text-xs uppercase tracking-widest">
                    Video Story
                  </div>
                )}

                {/* PLAY BADGE OVERLAY */}
                {item.videoUrl && (
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-[#C5A059] text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play size={20} className="fill-black ml-1" />
                    </div>
                  </div>
                )}

                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-white font-bold text-[9px] uppercase tracking-widest px-3 py-1">
                  {item.treatmentCategory}
                </div>
              </div>

              {/* CARD DETAILS */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                <div>
                  {/* STAR RATING */}
                  <div className="flex items-center gap-1 mb-3 text-[#C5A059]">
                    {Array.from({ length: item.rating || 5 }).map((_, i) => (
                      <Star key={i} size={14} className="fill-[#C5A059]" />
                    ))}
                  </div>

                  <h3 className="text-xl font-bold uppercase tracking-tight text-black mb-3 group-hover:text-[#C5A059] transition-colors">
                    {item.patientName}
                  </h3>

                  <p className="font-brandon text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                    "{item.description}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-black">
                  <span>Watch Video Story</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full py-20 text-center text-neutral-400 uppercase tracking-widest text-xs">
            No testimonials found in this category.
          </div>
        )}
      </div>
    </main>
  );
}