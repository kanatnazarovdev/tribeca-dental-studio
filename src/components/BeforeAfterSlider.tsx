/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeUrl: string;
  afterUrl: string;
  title: string;
  treatmentDuration?: string;
}

export default function BeforeAfterSlider({
  beforeUrl,
  afterUrl,
  title,
  treatmentDuration,
}: BeforeAfterSliderProps) {
  return (
    <div className="relative w-full flex flex-col overflow-hidden bg-black select-none">
      {/* 1. TOP PHOTO (BEFORE) */}
      <div className="relative w-full aspect-[2/1] bg-neutral-900 overflow-hidden">
        <Image
          src={beforeUrl}
          alt={`${title} - Before`}
          fill
          unoptimized
          priority
          className="object-cover object-center pointer-events-none"
        />
        {/* Top-Left "BEFORE" Badge */}
        <div className="absolute top-3 left-3 z-10 pointer-events-none">
          <span className="bg-black/80 backdrop-blur-md text-white font-bold text-[9px] uppercase tracking-widest px-2.5 py-1 border border-white/10">
            Before
          </span>
        </div>
      </div>

      {/* SEAMLESS DIVIDER LINE */}
      <div className="w-full h-[1px] bg-white/20 z-10" />

      {/* 2. BOTTOM PHOTO (AFTER) */}
      <div className="relative w-full aspect-[2/1] bg-neutral-900 overflow-hidden">
        <Image
          src={afterUrl}
          alt={`${title} - After`}
          fill
          unoptimized
          priority
          className="object-cover object-center pointer-events-none"
        />
        {/* Top-Left "AFTER" Badge */}
        <div className="absolute top-3 left-3 z-10 pointer-events-none">
          <span className="bg-[#C5A059] text-black font-bold text-[9px] uppercase tracking-widest px-2.5 py-1 shadow-md">
            After
          </span>
        </div>

        {/* Optional Duration Tag */}
        {treatmentDuration && (
          <div className="absolute bottom-3 right-3 z-10 pointer-events-none">
            <span className="bg-black/80 backdrop-blur-md text-white font-bold text-[9px] uppercase tracking-widest px-2.5 py-1 border border-white/10">
              {treatmentDuration}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}