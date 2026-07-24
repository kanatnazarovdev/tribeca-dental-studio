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
        href: `/${lang}/services/porcelain-veneers`,
      },
      {
        name: lang === "zh" ? "牙齿美白" : lang === "es" ? "Blanqueamiento Dental" : "Teeth Whitening",
        href: `/${lang}/services/teeth-whitening`,
      },
      {
        name: lang === "zh" ? "隐适美正畸" : lang === "es" ? "Tratamientos Invisalign®" : "Invisalign® Treatments",
        href: `/${lang}/services/invisalign-clear-aligner-braces`,
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
        : "General & Restorative",
    items: [
      {
        name: lang === "zh" ? "洗牙与全口腔检查" : lang === "es" ? "Exámenes y Limpiezas" : "Dental Exams & Cleanings",
        href: `/${lang}/services/dental-exams-teeth-cleanings`,
      },
      {
        name: lang === "zh" ? "智齿拔除" : lang === "es" ? "Extracción de Muelas del Juicio" : "Wisdom Teeth Removal",
        href: `/${lang}/services/wisdom-tooth-removal`,
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
        href: `/${lang}/services/orthodontics`,
      },
      {
        name: lang === "zh" ? "睡眠呼吸暂停与气道" : lang === "es" ? "Tratamientos de Vías Respiratorias" : "Airway & Sleep Apnea",
        href: `/${lang}/services/airway-treatments`,
      },
      {
        name: lang === "zh" ? "上颌骨扩展 (MSE/MARPE)" : lang === "es" ? "Expansión Palatina (MSE)" : "Palatal Expansion (MSE)",
        href: `/${lang}/services/palatal-expansion-marpe`,
      },
    ],
  },
];