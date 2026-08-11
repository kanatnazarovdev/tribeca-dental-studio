/* eslint-disable @typescript-eslint/ban-ts-comment */
import "../globals.css";
import Header from "@/components/Header";
import { Metadata } from "next";
import { getDictionary } from "./dictionaries";
import { brandonGrotesque, dDin } from "../fonts";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";
import { baseUrl, getAlternates } from "@/hooks/helper";
import Script from "next/script";
import ServiceGrid from "@/components/ServiceGrid";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = rawLang === "es" ? "es" : rawLang === "zh" ? "zh" : "en";
  const isEs = lang === "es";
  const isZh = lang === "zh";

  return {
    title: {
      default: isZh
        ? "翠贝卡牙科诊所 | 纽约翠贝卡高级多专科牙医"
        : isEs
          ? "Tribeca Dental Studio | Dentista de Lujo en Tribeca, NYC"
          : "Tribeca Dental Studio | Multi-Specialty Dentist in Tribeca, NYC",
      template: "%s | Tribeca Dental Studio",
    },
    description: isZh
      ? "位于纽约翠贝卡的高端多专科综合牙科诊所。提供隐形高定瓷贴面、气道正畸扩弓 (MSE)、无痛微创拔牙与口腔外科、种植牙及儿童牙科。"
      : isEs
        ? "Consultorio dental multi-especializado de lujo en Tribeca, NYC. Carillas de porcelana, ortodoncia de vías respiratorias, implantes dentales, cirugía oral y odontopediatría."
        : "Comprehensive luxury multi-specialty dental practice in Tribeca, NYC. Specializing in handcrafted porcelain veneers, airway orthodontics (MSE), painless oral surgery, dental implants, and pediatric dentistry.",
    metadataBase: new URL(baseUrl),
    alternates: getAlternates(lang, ""),
    openGraph: {
      title: "Tribeca Dental Studio | Premier NYC Dentistry",
      description: "Bespoke cosmetic, airway, surgical, and multi-specialty dental care in Lower Manhattan, NY.",
      url: `${baseUrl}/${lang}/`,
      siteName: "Tribeca Dental Studio",
      images: [
        {
          url: `${baseUrl}/og-image.webp`,
          width: 1200,
          height: 630,
          alt: "Tribeca Dental Studio — Premier Multi-Specialty Dental Studio in Tribeca, NY",
        },
      ],
      locale: isZh ? "zh_CN" : isEs ? "es_ES" : "en_US",
      type: "website",
    },
    robots: { index: true, follow: true },
    icons: { icon: "/favicon.ico" },
  };
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const { children } = props;
  const lang = ["es", "zh"].includes(params.lang) ? params.lang : "en";
  const dict = await getDictionary(lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Dentist", "MedicalBusiness", "MedicalClinic"],
        "@id": `${baseUrl}#organization`,
        name: "Tribeca Dental Studio",
        url: `${baseUrl}/${lang}/`,
        logo: `${baseUrl}/tribeca-logo-text.svg`,
        image: `${baseUrl}/og-image.webp`,
        telephone: "+1-212-561-5303",
        priceRange: "$$$$",
        currenciesAccepted: "USD",
        paymentAccepted: "Credit Card, Debit Card, Financing, Insurance",
        address: {
          "@type": "PostalAddress",
          streetAddress: "54 Warren Street",
          addressLocality: "New York",
          addressRegion: "NY",
          postalCode: "10007",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 40.714885,
          longitude: -74.00906,
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Tribeca" },
          { "@type": "AdministrativeArea", name: "Lower Manhattan" },
          { "@type": "AdministrativeArea", name: "SoHo" },
          { "@type": "AdministrativeArea", name: "Financial District" },
          { "@type": "AdministrativeArea", name: "Manhattan" },
          { "@type": "AdministrativeArea", name: "New York City" },
        ],
        knowsAbout: [
          "Handcrafted Porcelain Veneers",
          "Digital Smile Design (DSD)",
          "Airway Orthodontics & Maxillary Skeletal Expansion (MSE)",
          "Sleep Apnea & Snoring Oral Appliances",
          "Painless Tooth Extractions & Socket Preservation",
          "Single & All-on-4 Dental Implants",
          "Invisalign Clear Aligners",
          "Pediatric & Adolescent Dentistry",
          "Periodontics & Gum Disease Therapy",
        ],
        medicalSpecialty: [
          "CosmeticDentistry",
          "PediatricDentistry",
          "Orthodontics",
          "Periodontics",
          "OralAndMaxillofacialSurgery",
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "09:00",
            closes: "16:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Sunday",
            opens: "09:00",
            closes: "14:00",
          },
        ],
        sameAs: [
          "https://www.instagram.com/tribeca_dental_studio",
          "https://www.facebook.com/TribecaDentalStudio/",
          "https://www.youtube.com/@tribecadentalstudio6006",
          "https://www.linkedin.com/company/tribeca-dental-studio",
        ],
      },
      {
        "@type": "Physician",
        "@id": `${baseUrl}#dr-cameron-lewis`,
        name: "Dr. Cameron Lewis, DDS",
        jobTitle: "Oral & Maxillofacial Surgeon",
        medicalSpecialty: "OralAndMaxillofacialSurgery",
        worksFor: { "@id": `${baseUrl}#organization` },
      },
      {
        "@type": "Physician",
        "@id": `${baseUrl}#dr-igor-chikunov`,
        name: "Dr. Igor Chikunov, DDS",
        jobTitle: "Cosmetic & Restorative Dentist",
        medicalSpecialty: "CosmeticDentistry",
        worksFor: { "@id": `${baseUrl}#organization` },
      },
      {
        "@type": "Physician",
        "@id": `${baseUrl}#dr-nina-izhaky`,
        name: "Dr. Nina Izhaky, DDS",
        jobTitle: "Founder & Airway General Dentist",
        worksFor: { "@id": `${baseUrl}#organization` },
      },
    ],
  };

  return (
    <html
      lang={lang}
      className={`
        ${brandonGrotesque.variable}
        ${dDin.variable}
      `}
    >
      <head>
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-foreground antialiased selection:bg-[#C5A059] selection:text-white">


        <NextTopLoader
          color="#C5A059"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #C5A059,0 0 5px #C5A059"
        />

        <Header lang={lang} dict={dict} />
        {children}
        <ServiceGrid lang={lang}/>
        <Footer />
      </body>
    </html>
  );
}