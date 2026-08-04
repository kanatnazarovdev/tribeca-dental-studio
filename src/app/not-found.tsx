/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Phone } from "lucide-react";
import { bookingUrl } from "@/hooks/helper";
import "@/app/globals.css"; // IMPORTANT: Imports your Tailwind styles

export default function NotFound() {
  return (
    <html lang="en">
      <body className="bg-[#FCFCFC] text-black min-h-screen font-ddin antialiased">
        <main className="min-h-screen pt-36 pb-24 flex flex-col justify-center">
          <div className="max-w-4xl mx-auto px-6 text-center">
            
            {/* BADGE */}
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-4">
              Page Not Found • Error 404
            </span>

            {/* MAIN HEADING */}
            <h1 className="text-4xl md:text-6xl font-light uppercase tracking-tight text-neutral-900 mb-6">
              We Couldn&rsquo;t Find That Exact Page
            </h1>

            <p className="font-brandon text-base md:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed mb-12">
              The page or service link you followed may have been updated, renamed, or relocated.
              Explore our premier dental specialties below or return to our homepage.
            </p>

            {/* POPULAR SERVICE SUGGESTIONS HUB */}
            <div className="bg-white border border-neutral-200 p-8 shadow-sm mb-12 text-left">
              <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] mb-6 border-b border-neutral-100 pb-3">
                Were You Looking For One Of Our Services?
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link
                  href="/en/services/airway-orthodontics"
                  className="group flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 hover:border-[#C5A059] transition-colors"
                >
                  <span className="font-brandon text-xs font-bold uppercase tracking-wider text-black">
                    Airway & Sleep Dentistry
                  </span>
                  <ArrowRight size={14} className="text-[#C5A059] group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/en/services/palatal-expansion-marpe"
                  className="group flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 hover:border-[#C5A059] transition-colors"
                >
                  <span className="font-brandon text-xs font-bold uppercase tracking-wider text-black">
                    Palatal Expansion (MARPE)
                  </span>
                  <ArrowRight size={14} className="text-[#C5A059] group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/en/services/invisalign-clear-aligner-braces"
                  className="group flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 hover:border-[#C5A059] transition-colors"
                >
                  <span className="font-brandon text-xs font-bold uppercase tracking-wider text-black">
                    3D Invisalign® Aligners
                  </span>
                  <ArrowRight size={14} className="text-[#C5A059] group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/en/services/porcelain-veneers-lumineers"
                  className="group flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 hover:border-[#C5A059] transition-colors"
                >
                  <span className="font-brandon text-xs font-bold uppercase tracking-wider text-black">
                    Porcelain Veneers
                  </span>
                  <ArrowRight size={14} className="text-[#C5A059] group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/en/leading-edge-technology"
                  className="group flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 hover:border-[#C5A059] transition-colors"
                >
                  <span className="font-brandon text-xs font-bold uppercase tracking-wider text-black">
                    Leading-Edge Technology
                  </span>
                  <ArrowRight size={14} className="text-[#C5A059] group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/en/best-dentist-in-nyc"
                  className="group flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 hover:border-[#C5A059] transition-colors"
                >
                  <span className="font-brandon text-xs font-bold uppercase tracking-wider text-black">
                    Boutique Practice Highlights
                  </span>
                  <ArrowRight size={14} className="text-[#C5A059] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* PRIMARY ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/en"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-black hover:bg-[#C5A059] text-white font-bold uppercase tracking-[0.2em] text-xs px-8 py-4 transition-all duration-300 shadow-sm"
              >
                Return To Homepage
              </Link>

              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#C5A059] hover:bg-black text-black hover:text-white font-bold uppercase tracking-[0.2em] text-xs px-8 py-4 transition-all duration-300 shadow-sm gap-2"
              >
                <Calendar size={14} />
                Book Consultation
              </a>

              <a
                href="tel:2125615303"
                className="w-full sm:w-auto inline-flex items-center justify-center border border-black/20 hover:border-black text-black font-bold uppercase tracking-[0.2em] text-xs px-8 py-4 transition-all duration-300 gap-2"
              >
                <Phone size={14} />
                212-561-5303
              </a>
            </div>

          </div>
        </main>
      </body>
    </html>
  );
}