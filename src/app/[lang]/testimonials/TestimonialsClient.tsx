"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Star } from "lucide-react";
import { TestimonialItem } from "./page";


export default function TestimonialsClient({
  testimonials,
  lang,
}: {
  testimonials: TestimonialItem[];
  lang: string;
}) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? testimonials
      : testimonials.filter(
          (t) => t.treatmentCategory?.toLowerCase() === activeCategory.toLowerCase()
        );

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

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filtered.length > 0 ? (
          filtered.map((item) => (
            <Link
              key={item._id}
              target="_blank"
              href={`${item.videoUrl}`}
              className="group flex flex-col bg-white border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
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

              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-1 mb-3 text-[#C5A059]">
                    {Array.from({ length: item.rating || 5 }).map((_, i) => (
                      <Star key={i} size={14} className="fill-[#C5A059]" />
                    ))}
                  </div>

                  <h3 className="text-xl font-bold uppercase tracking-tight text-black mb-3 group-hover:text-[#C5A059] transition-colors">
                    {item.patientName}
                  </h3>

                  <p className="font-brandon text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                    &quot;{item.description}&quot;
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