/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../public/tribeca-logo-text.svg";
import { bookingUrl } from "@/hooks/helper";

// --- SERVICE CATEGORIES CONFIGURATION ---
export const SERVICE_CATEGORIES = (lang: string) => [
  {
    category:
      lang === "zh"
        ? "美容牙科"
        : lang === "es"
        ? "Odontología Estética"
        : "Cosmetic Dentistry",
    items: [
      {
        name: lang === "zh" ? "瓷贴面" : lang === "es" ? "Carillas de Porcelana" : "Porcelain Veneers",
        href: `/${lang}/services/porcelain-veneers-lumineers`,
      },
      {
        name: lang === "zh" ? "牙齿美白" : lang === "es" ? "Blanqueamiento Dental" : "Teeth Whitening",
        href: `/${lang}/services/teeth-whitening`,
      },
      {
        name: lang === "zh" ? "隐适美正畸" : lang === "es" ? "Tratamientos Invisalign®" : "Invisalign® Treatments",
        href: `/${lang}/services/invisalign-clear-aligner-braces`,
        aliases: [`/${lang}/services/invisalign-treatments`],
      },
      {
        name: lang === "zh" ? "牙齿粘接" : lang === "es" ? "Adhesión Dental" : "Dental Bonding",
        href: `/${lang}/services/dental-bonding`,
      },
    ],
  },
  {
    category:
      lang === "zh"
        ? "种植牙"
        : lang === "es"
        ? "Implantes Dentales"
        : "Dental Implants",
    items: [
      {
        name: lang === "zh" ? "种植牙" : lang === "es" ? "Implantes Dentales" : "Dental Implants",
        href: `/${lang}/services/dental-implants`,
      },
      {
        name: lang === "zh" ? "All-on-4 整体种植" : lang === "es" ? "Implantes All-on-4®" : "All-on-4® Dental Implants",
        href: `/${lang}/services/all-on-4-dental-implants`,
      },
      {
        name: lang === "zh" ? "颧骨种植牙" : lang === "es" ? "Implantes Cigomáticos" : "Zygomatic Implants",
        href: `/${lang}/services/zygomatic-implants`,
      },
    ],
  },
  {
    category:
      lang === "zh"
        ? "通用全科与外科"
        : lang === "es"
        ? "Odontología General y Cirugía"
        : "General & Surgery",
    items: [
      {
        name: lang === "zh" ? "洗牙与全口腔检查" : lang === "es" ? "Exámenes y Limpiezas" : "Dental Exams & Cleanings",
        href: `/${lang}/services/dental-exams-teeth-cleanings`,
      },
      {
        name: lang === "zh" ? "智齿拔除" : lang === "es" ? "Extracción de Muelas del Juicio" : "Wisdom Teeth Removal",
        href: `/${lang}/services/wisdom-tooth-removal`,
        aliases: [`/${lang}/services/wisdom-teeth-removal`],
      },
      {
        name: lang === "zh" ? "Curodont™ 牙齿再生修复" : lang === "es" ? "Reparación Curodont™" : "Curodont™ Tooth Repair",
        href: `/${lang}/services/curodont-regenerative-tooth-repair`,
      },
      {
        name: lang === "zh" ? "根管治疗" : lang === "es" ? "Tratamiento de Conducto" : "Root Canal Treatment",
        href: `/${lang}/services/root-canal-treatment`,
      },
      {
        name: lang === "zh" ? "牙冠与牙桥" : lang === "es" ? "Coronas y Puentes" : "Crowns & Bridges",
        href: `/${lang}/services/dental-crowns-bridges`,
      },
    ],
  },
  {
    category:
      lang === "zh"
        ? "气道与正畸"
        : lang === "es"
        ? "Vías Respiratorias y Ortodoncia"
        : "Airway & Orthodontics",
    items: [
      {
        name: lang === "zh" ? "儿童及青少年正畸" : lang === "es" ? "Ortodoncia Pediátrica" : "Pediatric Orthodontics",
        href: `https://pediatrics.tribecadentalstudio.com/en/services/orthodontics/`,
      },
      {
        name: lang === "zh" ? "睡眠呼吸暂停与气道" : lang === "es" ? "Tratamientos de Vías Respiratorias" : "Airway & Sleep Apnea",
        href: `/${lang}/services/airway-orthodontics`,
      },
      {
        name: lang === "zh" ? "上颌骨扩展 (MSE/MARPE)" : lang === "es" ? "Expansión Palatina (MSE)" : "Palatal Expansion (MSE)",
        href: `/${lang}/services/palatal-expansion-marpe`,
      },
    ],
  },
];

// --- ABOUT DROPDOWN ITEMS CONFIGURATION ---
export const ABOUT_SUBMENU = (lang: string) => [
  {
    name: lang === "zh" ? "诊所简介" : lang === "es" ? "Sobre la Clínica" : "About Practice",
    href: `/${lang}/about`,
  },
  {
    name: lang === "zh" ? "前沿齿科科技" : lang === "es" ? "Tecnología de Vanguardia" : "Leading Technology",
    href: `/${lang}/leading-edge-technology`,
  },
  {
    name: lang === "zh" ? "纽约顶尖诊所" : lang === "es" ? "El Mejor Dentista en NYC" : "Best Dentist in NYC",
    href: `/${lang}/best-dentist-in-nyc`,
  },
];

// Helper function to handle exact path matching including fallback aliases
function isLinkActive(currentPath: string, targetHref: string, aliases: string[] = []): boolean {
  const cleanCurrent = currentPath.replace(/\/$/, "");
  const cleanTarget = targetHref.replace(/\/$/, "");

  if (cleanCurrent === cleanTarget || cleanCurrent.startsWith(`${cleanTarget}/`)) {
    return true;
  }

  return aliases.some((alias) => {
    const cleanAlias = alias.replace(/\/$/, "");
    return cleanCurrent === cleanAlias || cleanCurrent.startsWith(`${cleanAlias}/`);
  });
}

interface HeaderProps {
  dict?: {
    hero?: { studio_name?: string };
    nav?: { technology?: string; results?: string; faq?: string };
  };
  lang: string;
}

export default function Header({ lang }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const cleanCurrentPath = pathname.replace(/\/$/, "");

  const isInteriorRoute =
    pathname.includes(`/blog`) ||
    pathname.includes(`/testimonials`) ||
    pathname.includes(`/about`) ||
    pathname.includes(`/services`) ||
    pathname.includes(`/team`) ||
    pathname.includes(`/cases`) ||
    pathname.includes(`/leading-edge-technology`) ||
    pathname.includes(`/best-dentist-in-nyc`);

  const shouldBeActive = isScrolled || isOpen || isInteriorRoute || isServicesHovered || isAboutHovered;

  const toggleLanguage = (newLang: string) => {
    if (!pathname) return;

    const segments = pathname.split("/").filter(Boolean);
    const supportedPrefixes = ["es", "zh"];
    if (supportedPrefixes.includes(segments[0])) {
      segments.shift();
    }

    const cleanPath = segments.join("/");
    let newPath = "";
    if (newLang === "en") {
      newPath = cleanPath ? `/${cleanPath}` : "/";
    } else {
      newPath = cleanPath ? `/${newLang}/${cleanPath}` : `/${newLang}`;
    }

    if (pathname.endsWith("/") && !newPath.endsWith("/")) {
      newPath += "/";
    }

    router.push(newPath);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isStudio =
    pathname.startsWith(`/${lang}/studio`) || pathname.startsWith("/studio");
  if (isStudio) return null;

  const serviceCategoriesData = SERVICE_CATEGORIES(lang);
  const aboutSubmenuData = ABOUT_SUBMENU(lang);

  const navItems = [
    {
      id: "services",
      label: lang === "zh" ? "诊疗服务" : lang === "es" ? "Servicios" : "Services",
      href: `/${lang}/services`,
      hasDropdown: true,
      dropdownType: "services",
    },
    {
      id: "gallery",
      label:
        lang === "zh" ? "案例展示" : lang === "es" ? "Galería" : "Smile Gallery",
      href: `/${lang}/cases`,
    },
    {
      id: "about",
      label: lang === "zh" ? "关于我们" : lang === "es" ? "Nosotros" : "About",
      href: `/${lang}/about`,
      hasDropdown: true,
      dropdownType: "about",
    },
    {
      id: "team",
      label: lang === "zh" ? "医疗团队" : lang === "es" ? "Equipo" : "Team",
      href: `/${lang}/team`,
    },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[60] transition-all duration-500 py-2 h-[100px] flex items-center
        ${shouldBeActive ? "bg-white/95 backdrop-blur-md border-b border-black/5" : "bg-transparent text-white"}`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${lang}`} className="z-[70]">
            <span
              className={`text-[20px] md:text-[24px] font-serif tracking-tight leading-[1.1]
              ${shouldBeActive ? "text-black" : "text-white"}`}
            >
              <Image
                width={200}
                src={logo}
                alt="Tribeca Logo"
                className={`transition-all duration-500 ${shouldBeActive ? "" : "invert brightness-0"}`}
              />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 font-brandon font-bold">
            {navItems.map((item) => {
              const itemCleanHref = item.href.replace(/\/$/, "");
              const isNavActive =
                cleanCurrentPath === itemCleanHref ||
                (item.id === "services" && pathname.includes("/services")) ||
                (item.id === "about" &&
                  (pathname.includes("/about") ||
                    pathname.includes("/leading-edge-technology") ||
                    pathname.includes("/best-dentist-in-nyc")));

              const isHovered =
                item.dropdownType === "services"
                  ? isServicesHovered
                  : item.dropdownType === "about"
                  ? isAboutHovered
                  : false;

              return (
                <div
                  key={item.id}
                  className="relative py-8"
                  onMouseEnter={() => {
                    if (item.dropdownType === "services") setIsServicesHovered(true);
                    if (item.dropdownType === "about") setIsAboutHovered(true);
                  }}
                  onMouseLeave={() => {
                    if (item.dropdownType === "services") setIsServicesHovered(false);
                    if (item.dropdownType === "about") setIsAboutHovered(false);
                  }}
                >
                  <Link
                    href={item.href}
                    className={`uppercase tracking-[2px] text-[13px] inline-flex items-center gap-1 transition-colors ${
                      isNavActive
                        ? "text-[#C5A059]"
                        : shouldBeActive
                        ? "text-black hover:text-[#C5A059]"
                        : "text-white hover:text-[#C5A059]"
                    }`}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${
                          isHovered ? "rotate-180 text-[#C5A059]" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* MEGA MENU: SERVICES */}
                  {item.dropdownType === "services" && (
                    <AnimatePresence>
                      {isServicesHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="fixed top-[95px] left-0 w-full bg-white border-b border-neutral-200 shadow-2xl text-black py-12 px-8 md:px-20 z-50 font-ddin"
                        >
                          <div className="max-w-7xl mx-auto grid grid-cols-4 gap-10">
                            {serviceCategoriesData.map((cat, idx) => (
                              <div key={idx} className="flex flex-col">
                                <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C5A059] mb-4 pb-2 border-b border-neutral-100">
                                  {cat.category}
                                </h4>
                                <ul className="space-y-3">
                                  {cat.items.map((svc, sIdx) => {
                                    const isSubActive = isLinkActive(
                                      cleanCurrentPath,
                                      svc.href,
                                      (svc as any).aliases
                                    );

                                    return (
                                      <li key={sIdx}>
                                        <Link
                                          href={svc.href}
                                          className={`text-[12px] font-bold uppercase tracking-wider transition-all duration-200 inline-block ${
                                            isSubActive
                                              ? "text-[#C5A059]"
                                              : "text-neutral-600 hover:text-black hover:translate-x-1"
                                          }`}
                                        >
                                          {svc.name}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            ))}
                          </div>

                          <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-neutral-100 flex justify-between items-center text-xs text-neutral-400 uppercase tracking-widest font-bold">
                            <span>Tribeca Dental Studio • Multi-Specialty Care</span>
                            <Link
                              href={`/${lang}/services`}
                              className="text-black hover:text-[#C5A059] underline underline-offset-4 transition-colors"
                            >
                              {lang === "zh" ? "查看所有服务 →" : lang === "es" ? "Ver Todos los Servicios →" : "View All Services →"}
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}

                  {/* DROPDOWN MENU: ABOUT */}
                  {item.dropdownType === "about" && (
                    <AnimatePresence>
                      {isAboutHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="absolute top-[80px] left-0 w-64 bg-white border border-neutral-200 shadow-2xl text-black py-4 px-6 z-50 font-ddin"
                        >
                          <ul className="space-y-3">
                            {aboutSubmenuData.map((sub, subIdx) => {
                              const isChildActive = isLinkActive(
                                cleanCurrentPath,
                                sub.href
                              );

                              return (
                                <li key={subIdx}>
                                  <Link
                                    href={sub.href}
                                    className={`text-[12px] font-bold uppercase tracking-wider transition-all duration-200 block py-1 ${
                                      isChildActive
                                        ? "text-[#C5A059]"
                                        : "text-neutral-600 hover:text-black hover:translate-x-1"
                                    }`}
                                  >
                                    {sub.name}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 mr-4 border-r border-black/10 pr-4 font-ddin">
              <button
                onClick={() => toggleLanguage("en")}
                className={`text-[12px] font-bold transition-colors ${
                  lang === "en" ? "text-[#C5A059]" : shouldBeActive ? "text-black/40" : "text-white/40"
                }`}
              >
                EN
              </button>
              <span className={shouldBeActive ? "text-black/20" : "text-white/20"}>|</span>
              <button
                onClick={() => toggleLanguage("es")}
                className={`text-[12px] font-bold transition-colors ${
                  lang === "es" ? "text-[#C5A059]" : shouldBeActive ? "text-black/40" : "text-white/40"
                }`}
              >
                ES
              </button>
              <span className={shouldBeActive ? "text-black/20" : "text-white/20"}>|</span>
              <button
                onClick={() => toggleLanguage("zh")}
                className={`text-[12px] font-bold transition-colors ${
                  lang === "zh" ? "text-[#C5A059]" : shouldBeActive ? "text-black/40" : "text-white/40"
                }`}
              >
                中文
              </button>
            </div>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href={bookingUrl}
              className={`px-6 py-2 border text-[10px] uppercase tracking-[0.3em] relative overflow-hidden group font-ddin font-bold
              ${shouldBeActive ? "border-black text-black" : "border-white/30 text-white"}`}
            >
              <span className="relative z-10 group-hover:text-white">
                {lang === "zh" ? "立即预约" : lang === "es" ? "Reservar" : "Book"}
              </span>
              <div className="absolute inset-0 bg-[#C5A059] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 z-[70] ${shouldBeActive ? "text-black" : "text-white"}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-[55] flex flex-col justify-start pt-28 pb-12 px-8 overflow-y-auto font-ddin"
          >
            <div className="flex gap-6 mb-8 border-b border-neutral-100 pb-6">
              <button
                onClick={() => toggleLanguage("en")}
                className={`text-xl font-bold ${lang === "en" ? "text-[#C5A059]" : "text-black/40"}`}
              >
                English
              </button>
              <button
                onClick={() => toggleLanguage("es")}
                className={`text-xl font-bold ${lang === "es" ? "text-[#C5A059]" : "text-black/40"}`}
              >
                Español
              </button>
              <button
                onClick={() => toggleLanguage("zh")}
                className={`text-xl font-bold ${lang === "zh" ? "text-[#C5A059]" : "text-black/40"}`}
              >
                中文
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {/* Accordion for Services */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`w-full flex items-center justify-between text-3xl font-bold uppercase tracking-tight ${
                    pathname.includes("/services") ? "text-[#C5A059]" : "text-black"
                  }`}
                >
                  <span>{lang === "zh" ? "诊疗服务" : lang === "es" ? "Servicios" : "Services"}</span>
                  <ChevronDown
                    size={28}
                    className={`transition-transform duration-300 ${
                      mobileServicesOpen ? "rotate-180 text-[#C5A059]" : ""
                    }`}
                  />
                </button>

                {mobileServicesOpen && (
                  <div className="mt-4 pl-4 space-y-6 border-l-2 border-[#C5A059]">
                    {serviceCategoriesData.map((cat, cIdx) => (
                      <div key={cIdx}>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059] mb-2">
                          {cat.category}
                        </p>
                        <ul className="space-y-2">
                          {cat.items.map((svc, sIdx) => {
                            const isSubActive = isLinkActive(
                              cleanCurrentPath,
                              svc.href,
                              (svc as any).aliases
                            );

                            return (
                              <li key={sIdx}>
                                <Link
                                  href={svc.href}
                                  onClick={() => setIsOpen(false)}
                                  className={`text-sm font-bold uppercase ${
                                    isSubActive ? "text-[#C5A059]" : "text-neutral-600 hover:text-black"
                                  }`}
                                >
                                  {svc.name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Smile Gallery */}
              <Link
                href={`/${lang}/cases`}
                onClick={() => setIsOpen(false)}
                className={`text-3xl font-bold uppercase tracking-tight ${
                  pathname.includes("/cases") ? "text-[#C5A059]" : "text-black"
                }`}
              >
                {lang === "zh" ? "案例展示" : lang === "es" ? "Galería" : "Smile Gallery"}
              </Link>

              {/* Accordion for About */}
              <div>
                <button
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className={`w-full flex items-center justify-between text-3xl font-bold uppercase tracking-tight ${
                    pathname.includes("/about") ||
                    pathname.includes("/leading-edge-technology") ||
                    pathname.includes("/best-dentist-in-nyc")
                      ? "text-[#C5A059]"
                      : "text-black"
                  }`}
                >
                  <span>{lang === "zh" ? "关于我们" : lang === "es" ? "Nosotros" : "About"}</span>
                  <ChevronDown
                    size={28}
                    className={`transition-transform duration-300 ${
                      mobileAboutOpen ? "rotate-180 text-[#C5A059]" : ""
                    }`}
                  />
                </button>

                {mobileAboutOpen && (
                  <div className="mt-4 pl-4 space-y-3 border-l-2 border-[#C5A059]">
                    {aboutSubmenuData.map((sub, sIdx) => {
                      const isChildActive = isLinkActive(
                        cleanCurrentPath,
                        sub.href
                      );

                      return (
                        <div key={sIdx}>
                          <Link
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-sm font-bold uppercase ${
                              isChildActive ? "text-[#C5A059]" : "text-neutral-600 hover:text-black"
                            }`}
                          >
                            {sub.name}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Team */}
              <Link
                href={`/${lang}/team`}
                onClick={() => setIsOpen(false)}
                className={`text-3xl font-bold uppercase tracking-tight ${
                  pathname.includes("/team") ? "text-[#C5A059]" : "text-black"
                }`}
              >
                {lang === "zh" ? "医疗团队" : lang === "es" ? "Equipo" : "Team"}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}