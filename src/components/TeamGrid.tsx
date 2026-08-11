/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'

export default function TeamGrid({ doctors }: { doctors: any[] }) {
  const params = useParams()
  const lang = (params?.lang as string) || 'en'
  const isEs = lang === 'es'
  const isZh = lang === 'zh'

  return (
    <section className="bg-white">
      {/* Patient-First Approach Header Section */}
      <div className="max-w-7xl mx-auto py-12 md:py-16 border-b border-gray-100 mb-16 px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* LEFT COLUMN: Clean Title & Sub-badge */}
          <div className="lg:col-span-5">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] font-bold block mb-3">
              {isZh
                ? "以患者为中心诊疗理念"
                : isEs
                ? "Filosofía Centrada en el Paciente"
                : "Collaborative Philosophy"}
            </span>
            <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight text-black leading-tight">
              {isZh ? (
                <>
                  全心关怀 <br />
                  <span className="italic font-serif text-[#C5A059] font-normal">
                    定制诊疗
                  </span>
                </>
              ) : isEs ? (
                <>
                  Enfoque Centrado <br />
                  <span className="italic font-serif text-[#C5A059] font-normal">
                    en el Paciente
                  </span>
                </>
              ) : (
                <>
                  A Patient-First <br />
                  <span className="italic font-serif text-[#C5A059] font-normal">
                    Approach
                  </span>
                </>
              )}
            </h2>
          </div>

          {/* RIGHT COLUMN: Approach Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="font-brandon text-base md:text-lg text-neutral-700 leading-relaxed mb-6 font-light">
              {isZh
                ? "在 Tribeca Dental Studio，卓越的诊疗始于倾听。我们的全科牙医师与专科医师团队紧密协作，摆脱孤立的单一治疗方案，根据您的个人生活需求与健康目标，共同制定全面、温和且定制化的护理计划。"
                : isEs
                ? "En Tribeca Dental Studio, la atención excepcional comienza escuchando. En lugar de tratamientos aislados, nuestros odontólogos generales y especialistas certificados colaboran para diseñar planes de atención integrales, suaves y personalizados para su vida."
                : "At Tribeca Dental Studio, exceptional care begins with listening. Instead of isolated treatments, our general dentists and board-certified specialists sit together to design comprehensive, gentle care plans tailored specifically to your life and goals."}
            </p>

            {/* MICRO FEATURE POINTS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-100 font-ddin text-xs uppercase tracking-widest text-neutral-500">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                <span>
                  {isZh
                    ? "多专科无缝协作"
                    : isEs
                    ? "Alineación Multiespecialidad"
                    : "Multi-Specialty Alignment"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                <span>
                  {isZh
                    ? "私人高定舒心体验"
                    : isEs
                    ? "Atención Estilo Concierge"
                    : "Concierge Comforts"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DOCTORS GRID */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-10 pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
          {doctors.map((doctor, index) => (
            <Link
              key={doctor.slug || index}
              href={`/${lang}/team/${doctor.slug}`}
              className="block group"
            >
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Image Container */}
                <div className="relative aspect-[1/1.3] overflow-hidden bg-[#f7f7f7]">
                  {doctor.imageUrl && (
                    <Image
                      src={doctor.imageUrl}
                      alt={doctor.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover object-top transition-all duration-1000 ease-in-out group-hover:scale-105"
                    />
                  )}

                  {/* Signature Hover Badge */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/90 backdrop-blur-sm text-white px-5 py-3 min-w-[180px] text-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <p className="text-[9px] tracking-[0.4em] uppercase font-bold leading-none">
                        {isZh
                          ? "查看履历"
                          : isEs
                          ? "Ver Perfil"
                          : "View Profile"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Information */}
                <div className="mt-6 text-center lg:text-left lg:pl-2">
                  <h3 className="text-[12px] tracking-[0.25em] uppercase font-medium text-gray-900 leading-tight">
                    {doctor.name}
                  </h3>
                  <div className="h-[1px] w-4 bg-gray-300 my-3 mx-auto lg:mx-0 transition-all duration-500 group-hover:w-8 group-hover:bg-black" />
                  <p className="text-[9px] tracking-[0.2em] uppercase text-gray-400 font-light">
                    {doctor.role}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}