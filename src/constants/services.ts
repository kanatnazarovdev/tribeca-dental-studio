export interface ServiceItem {
  titleEn: string;
  titleEs: string;
  slug: string;
  image: string;
  num: string;
}

export const COSMETIC_SERVICES: ServiceItem[] = [
  {
    num: "01",
    titleEn: "Cosmetic Dentistry",
    titleEs: "Odontología Estética",
    slug: "cosmetic-dentistry",
    image: "/services/cosmeticServices.jpg",
  },
  {
    num: "02",
    titleEn: "Porcelain Veneers",
    titleEs: "Carillas de Porcelana",
    slug: "porcelain-veneers-lumineers",
    image: "/services/porcelain-veneers.webp",
  },
  {
    num: "03",
    titleEn: "Teeth Whitening",
    titleEs: "Blanqueamiento Dental",
    slug: "teeth-whitening",
    image: "/services/teeth-whitening.webp",
  },
  {
    num: "04",
    titleEn: "Dental Bonding",
    titleEs: "Adhesión Dental",
    slug: "direct-bonding",
    image: "/services/dental-bonding.webp",
  },
  {
    num: "05",
    titleEn: "Invisalign® Treatments",
    titleEs: "Tratamientos Invisalign®",
    slug: "services/invisalign-clear-aligner-braces",
    image: "/services/invisalign-treatments.webp",
  },
  {
    num: "06",
    titleEn: "Lingual Braces",
    titleEs: "Ortodoncia Lingual",
    slug: "lingual-braces",
    image: "/services/lingual-braces.webp",
  },
  {
    num: "07",
    titleEn: "BRIUS Invisible Braces",
    titleEs: "Brackets Invisibles BRIUS",
    slug: "brius-invisible-braces",
    image: "/services/brius-invisible-braces.webp",
  },
  {
    num: "08",
    titleEn: "Cosmetic Laser Treatments",
    titleEs: "Tratamientos Láser Estéticos",
    slug: "cosmetic-laser-treatments",
    image: "/services/cosmetic-laser-treatments.webp",
  },
  {
    num: "09",
    titleEn: "Internal Tooth Bleaching",
    titleEs: "Blanqueamiento Dental Interno",
    slug: "internal-tooth-bleaching",
    image: "/services/internal-tooth-bleaching.webp",
  },
  {
    num: "10",
    titleEn: "Icon Resin Infiltration",
    titleEs: "Infiltración de Resina Icon",
    slug: "icon-resin-infiltration",
    image: "/services/icon-resin-infiltration.webp",
  },
];

// -------------------------------------------------------------
// NEW: DEDICATED IMPLANT SERVICES SECTION
// -------------------------------------------------------------
export const IMPLANT_SERVICES: ServiceItem[] = [
  {
    num: "11",
    titleEn: "Dental Implants",
    titleEs: "Implantes Dentales",
    slug: "https://implants.tribecadentalstudio.com/en",
    image: "/services/implantService.png",
  },
  {
    num: "12",
    titleEn: "All-on-4® Dental Implants",
    titleEs: "Implantes Dentales All-on-4®",
    slug: "services/all-on-4-dental-implants",
    image: "/services/allon4.png",
  },
  {
    num: "13",
    titleEn: "Zygomatic Implants",
    titleEs: "Implantes Cigomáticos",
    slug: "services/zygomatic-implants",
    image: "/services/zygomatic-implants.webp",
  },
];

export const GENERAL_SERVICES: ServiceItem[] = [
  {
    num: "15",
    titleEn: "Dental Exams & Teeth Cleanings",
    titleEs: "Exámenes Dentales y Limpiezas",
    slug: "services/dental-checkups-teeth-cleaning",
    image: "/services/cleaningService.jpg",
  },
  {
    num: "16",
    titleEn: "Preventive Dentistry",
    titleEs: "Odontología Preventiva",
    slug: "services/preventive-dentistry",
    image: "/services/preventiveService.png",
  },
  {
    num: "17",
    titleEn: "Restorative Dentistry",
    titleEs: "Odontología Restauradora",
    slug: "services/restorative-dentistry",
    image: "/services/restorative-dentistry.webp",
  },
  {
    num: "18",
    titleEn: "Dental Fillings",
    titleEs: "Empastes Dentales",
    slug: "services/dental-fillings",
    image: "/services/dental-fillings.webp",
  },
  {
    num: "19",
    titleEn: "Root Canal Treatment",
    titleEs: "Tratamiento de Conducto",
    slug: "services/root-canal-treatment",
    image: "/services/root-canal.webp",
  },
  {
    num: "20",
    titleEn: "Dental Crowns & Bridges",
    titleEs: "Coronas y Puentes Dentales",
    slug: "services/dental-crowns-bridges",
    image: "/services/dental-crowns-bridges.webp",
  },
  {
    num: "21",
    titleEn: "Dental Inlays and Onlays",
    titleEs: "Inlays y Onlays Dentales",
    slug: "services/dental-inlays-and-onlays",
    image: "/services/dental-inlays-and-onlays.webp",
  },
  {
    num: "22",
    titleEn: "Dentures",
    titleEs: "Dentaduras Postizas",
    slug: "services/dentures",
    image: "/services/dentures.webp",
  },
  {
    num: "23",
    titleEn: "Curodont™ Regenerative Tooth Repair",
    titleEs: "Reparación Dental Regenerativa Curodont™",
    slug: "services/curodont-regenerative-tooth-repair",
    image: "/services/curodont-regenerative-tooth-repair.webp",
  },
  {
    num: "24",
    titleEn: "Emergency Dentist",
    titleEs: "Dentista de Emergencia",
    slug: "services/emergency-dentist",
    image: "/services/emergency-dentist.webp",
  },
];

export const SPECIALIZED_SERVICES: ServiceItem[] = [
  {
    num: "26",
    titleEn: "Tooth Extractions",
    titleEs: "Extracciones Dentales",
    slug: "services/tooth-extractions-oral-surgery",
    image: "/services/toothExtractionService.jpg",
  },
  {
    num: "27",
    titleEn: "Wisdom Tooth Removal",
    titleEs: "Extracción de Muelas del Juicio",
    slug: "services/wisdom-tooth-removal",
    image: "/services/wisdom-teeth-removal.webp",
  },
  {
    num: "25",
    titleEn: "Oral Surgery",
    titleEs: "Cirugía Oral",
    slug: "services/oral-surgery",
    image: "/services/oral-surgery.webp",
  },
  {
    num: "28",
    titleEn: "Bone Grafting",
    titleEs: "Injerto Óseo",
    slug: "services/bone-grafting",
    image: "/services/bone-grafting.webp",
  },
  {
    num: "29",
    titleEn: "Sinus Lifts",
    titleEs: "Elevación de Seno Maxilar",
    slug: "services/sinus-lifts",
    image: "/services/sinus-lifts.webp",
  },
  {
    num: "30",
    titleEn: "Gum Disease Treatment",
    titleEs: "Tratamiento de la Periodontitis",
    slug: "services/gum-disease-treatment",
    image: "/services/gum-disease-treatment.webp",
  },
  {
    num: "31",
    titleEn: "LANAP Laser Gum Therapy",
    titleEs: "Terapia de Encías Láser LANAP",
    slug: "services/lanap-laser-gum-therapy",
    image: "/services/lanap-laser-gum-therapy.webp",
  },
  {
    num: "32",
    titleEn: "Gum Grafting Surgery",
    titleEs: "Cirugía de Injerto de Encía",
    slug: "services/gum-grafting-surgery",
    image: "/services/gum-grafting-surgery.webp",
  },
  {
    num: "33",
    titleEn: "Crown Lengthening & Gingivectomy",
    titleEs: "Alargamiento de Corona y Gingivectomía",
    slug: "services/crown-lengthening-gingivectomy",
    image: "/services/crown-lengthening-gingivectomy.webp",
  },
  {
    num: "34",
    titleEn: "Apicoectomy Procedure",
    titleEs: "Procedimiento de Apicectomía",
    slug: "services/apicoectomy-procedure",
    image: "/services/apicoectomy-procedure.webp",
  },
  {
    num: "35",
    titleEn: "Oral Cancer Screening",
    titleEs: "Detección de Cáncer Oral",
    slug: "services/oral-cancer-screening",
    image: "/services/oral-cancer-screening.webp",
  },
  {
    num: "36",
    titleEn: "Best Dentist in NYC",
    titleEs: "El Mejor Dentista de NYC",
    slug: "services/best-dentist-nyc",
    image: "/services/best-dentist-nyc.webp",
  },
];

export const AIRWAY_AND_ORTHO_SERVICES: ServiceItem[] = [
  {
    num: "37",
    titleEn: "Airway Treatments",
    titleEs: "Tratamientos de Vías Respiratorias",
    slug: "services/airway-orthodontics",
    image: "/services/orthodontics.png",
  },
  {
    num: "38",
    titleEn: "Sleep Apnea Devices",
    titleEs: "Dispositivos para la Apnea del Sueño",
    slug: "services/sleep-apnea-devices",
    image: "/services/sleep-apnea-devices.webp",
  },
  {
    num: "39",
    titleEn: "Sleep Studies",
    titleEs: "Estudios del Sueño",
    slug: "services/sleep-studies",
    image: "/services/sleep-studies.webp",
  },
  {
    num: "40",
    titleEn: "Myo Munchee Therapy",
    titleEs: "Terapia Myo Munchee",
    slug: "services/myo-munchee-therapy",
    image: "/services/myo-munchee-therapy.webp",
  },
  {
    num: "41",
    titleEn: "NightLase®",
    titleEs: "NightLase®",
    slug: "services/nightlase",
    image: "/services/nightlase.webp",
  },
  {
    num: "42",
    titleEn: "Orthodontics",
    titleEs: "Ortodoncia",
    slug: "services/orthodontics",
    image: "/services/orthodontics.webp",
  },
  {
    num: "43",
    titleEn: "Traditional Braces",
    titleEs: "Brackets Tradicionales",
    slug: "services/traditional-braces",
    image: "/services/traditional-braces.webp",
  },
  {
    num: "44",
    titleEn: "Maxillary Skeletal Expansion (MSE)",
    titleEs: "Expansión Esquelética Maxilar (MSE)",
    slug: "services/maxillary-skeletal-expansion-mse",
    image: "/services/maxillary-skeletal-expansion-mse.webp",
  },
  {
    num: "45",
    titleEn: "Palatal Expansion (MARPE)",
    titleEs: "Expansión Palatina (MARPE)",
    slug: "services/palatal-expansion-marpe",
    image: "/services/palatal-expansion-marpe.webp",
  },
  {
    num: "46",
    titleEn: "Wilckodontics Speed Braces",
    titleEs: "Ortodoncia Acelerada Wilckodontics",
    slug: "services/wilckodontics-speed-braces",
    image: "/services/wilckodontics-speed-braces.webp",
  },
];

export const FEATURED_SERVICES: ServiceItem[] = [
  ...COSMETIC_SERVICES.slice(0, 1), // Cosmetic Dentistry, Veneers
  ...IMPLANT_SERVICES.slice(0, 2), // Dental Implants, All-on-4
  ...GENERAL_SERVICES.slice(0, 2), // Dental Exams, Preventive
  ...SPECIALIZED_SERVICES.slice(0, 1), // Oral Surgery, Extractions
  ...AIRWAY_AND_ORTHO_SERVICES.slice(0, 1), // Airway Treatments, Sleep Apnea
];
