"use client";

import React, { useRef, useCallback } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const beforeLayerRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  // Smooth position update using requestAnimationFrame
  const updatePosition = useCallback((clientX: number) => {
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
    }

    rafId.current = requestAnimationFrame(() => {
      if (!containerRef.current || !beforeLayerRef.current || !handleRef.current)
        return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      let percentage = (x / rect.width) * 100;

      // Clamp percentage between 0% and 100%
      if (percentage < 0) percentage = 0;
      if (percentage > 100) percentage = 100;

      // Direct hardware-accelerated DOM mutation
      beforeLayerRef.current.style.width = `${percentage}%`;
      handleRef.current.style.left = `${percentage}%`;
    });
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    updatePosition(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches[0]) {
      updatePosition(e.touches[0].clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className="relative w-full aspect-square bg-neutral-100 overflow-hidden cursor-ew-resize select-none touch-none transform-gpu"
    >
      {/* 1. AFTER IMAGE (BACKGROUND LAYER) */}
      <Image
        src={afterUrl}
        alt={`${title} - After`}
        fill
        unoptimized
        priority
        className="object-cover pointer-events-none"
      />

      {/* 2. BEFORE IMAGE (OVERLAY LAYER - PERMANENT POSITION) */}
      <div
        ref={beforeLayerRef}
        className="absolute inset-y-0 left-0 overflow-hidden z-10 pointer-events-none will-change-[width]"
        style={{ width: "50%" }} // Initial position at 50%
      >
        <div className="relative w-full h-full min-w-[100%] aspect-square">
          <Image
            src={beforeUrl}
            alt={`${title} - Before`}
            fill
            unoptimized
            priority
            className="object-cover pointer-events-none"
          />
        </div>
      </div>

      {/* 3. HARDWARE-ACCELERATED DIVIDER HANDLE */}
      <div
        ref={handleRef}
        className="absolute inset-y-0 z-20 pointer-events-none will-change-[left] -ml-[1px]"
        style={{ left: "50%" }} // Initial handle position at 50%
      >
        <div className="w-[2px] h-full bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)] relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-neutral-200 flex items-center justify-center text-[10px] text-black font-bold">
            ↔
          </div>
        </div>
      </div>

      {/* 4. LABELS */}
      <div className="absolute top-4 left-4 right-4 z-30 flex justify-between items-center pointer-events-none">
        <span className="bg-black/80 backdrop-blur-md text-white font-bold text-[9px] uppercase tracking-widest px-2.5 py-1">
          Before
        </span>
        <span className="bg-[#C5A059] text-black font-bold text-[9px] uppercase tracking-widest px-2.5 py-1">
          After
        </span>
      </div>

      {treatmentDuration && (
        <div className="absolute bottom-4 right-4 z-30 pointer-events-none">
          <span className="bg-white/90 backdrop-blur-md text-black font-bold text-[9px] uppercase tracking-widest px-3 py-1">
            {treatmentDuration}
          </span>
        </div>
      )}
    </div>
  );
}