/* eslint-disable @typescript-eslint/no-explicit-any */
// src/app/[lang]/about/about.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, use } from "react";
import Image from "next/image";

export default function About({
  lang,
}: {
  lang: any;
}) {
 ;
  const containerRef = useRef(null);

  const PILLARS = [
    {
      num: "01",
      title: "All Specialists",
      text: "From pediatric dentistry to oral surgery, our collaborative team ensures you receive world-class care under one roof without the need for referrals.",
    },
    {
      num: "02",
      title: "Advanced Tech",
      text: "We utilize advanced 3D imaging, digital impressions, and pain-free laser dentistry for precise, faster, and highly comfortable treatments.",
    },
    {
      num: "03",
      title: "Unmatched Comfort",
      text: "Designed to soothe, our modern, spa-like studio environment completely redefines the traditional dental visit.",
    },
  ];

  const STATS = [
    { val: "15+", label: "Years in Community" },
    { val: "6", label: "Dental Specialties" },
    { val: "10K+", label: "Smiles Transformed" },
    { val: "1", label: "True Dental Home" },
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentFade = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <main className="min-h-screen bg-white" ref={containerRef}>
      <motion.section
        initial={{ backgroundColor: "#FFFFFF" }}
        whileInView={{ backgroundColor: "#0A0A0A" }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative pt-64 pb-48 overflow-hidden"
      >
        <motion.div
          style={{ y: backgroundY, opacity: videoOpacity }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0A0A0A] z-10" />
          <Image
            alt="Tribeca Dental Studio Clinic Interior"
            fill
            className="w-full h-[120%] object-cover object-center"
            src="/aboutPage.png"
            priority
          />
        </motion.div>

        <motion.div
          style={{ opacity: contentFade }}
          className="max-w-6xl mx-auto px-6 relative z-20"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="border-l border-[#C5A059]/40 pl-8 md:pl-12 mb-32"
          >
            <h1 className="text-[#C5A059] text-[11px] uppercase tracking-[0.8em] mb-12 font-bold block">
              About Us
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="text-white text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] italic tracking-tighter max-w-5xl"
            >
              “Comprehensive, multi-specialty dental care tailored to your family&apos;s unique needs, right here in Tribeca.”
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 border-t border-white/10 pt-20">
            {PILLARS.map((pillar, index) => (
              <motion.div
                key={pillar.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                className="group cursor-default"
              >
                <h3 className="text-[#C5A059] text-[13px] font-semibold mb-6 uppercase tracking-[0.4em] group-hover:tracking-[0.5em] transition-all duration-500">
                  {pillar.num} / {pillar.title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed text-lg group-hover:text-white transition-colors duration-500">
                  {pillar.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-40 bg-white relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-sm"
          >
            <Image
              src="/about-story.jpg"
              alt="Tribeca Dental Studio Founding Story"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-[10px] md:text-[12px] uppercase tracking-[0.5em] text-[#C5A059] font-bold mb-6 block">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-black mb-10 leading-[1.1]">
              Redefining the <span className="italic font-serif text-gray-500">Dental Experience</span>
            </h2>
            <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed">
              <p>
                Founded by Dr. Nina Izhaky, Tribeca Dental Studio was built on a simple premise: going to the dentist shouldn&apos;t be stressful.
              </p>
              <p>
                We brought together top-tier dental professionals in a beautiful, modern space to offer Manhattan families a true dental home. Whether you need a routine cleaning, high-end cosmetic veneers, or pediatric care, our team of specialists provides seamless service under one roof.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-zinc-50 py-32 md:py-48 border-y border-black/5 relative z-30 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <span className="block text-5xl md:text-6xl font-light text-black mb-4 group-hover:text-[#C5A059] transition-colors duration-500">
                  {stat.val}
                </span>
                <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-gray-400 font-bold">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CALL TO ACTION */}
      <section className="py-32 bg-white text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-2xl mx-auto px-6"
        >
          <p className="text-gray-400 text-[12px] uppercase tracking-[0.6em] mb-8">
            Ready to experience the Tribeca Standard?
          </p>
          <a
            href="https://truelark.com/bookonline/#/location?businessId=80613"
            className="text-2xl md:text-4xl font-serif italic border-b border-black/20 pb-2 hover:border-[#C5A059] hover:text-[#C5A059] transition-colors duration-300"
          >
            Schedule Your Consultation
          </a>
        </motion.div>
      </section>
    </main>
  );
}