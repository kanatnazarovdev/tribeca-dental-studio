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
        ? "翠贝卡牙科诊所 | 纽约翠贝卡牙医"
        : isEs
          ? "Tribeca Dental Studio | Dentista en Tribeca, NYC"
          : "Tribeca Dental Studio | Dentist in Tribeca, NYC",
      template: "%s | Tribeca Dental Studio",
    },
    description: isZh
      ? "位于纽约翠贝卡的高端综合牙科诊所，提供预防、修复、美容、种植牙及正畸治疗。"
      : isEs
        ? "Consultorio dental integral en Tribeca, NYC. Odontología preventiva, restauradora, estética, implantes y ortodoncia."
        : "Comprehensive dental care in Tribeca, NYC. Preventive, restorative, cosmetic, implant, and orthodontic dentistry from a practice that treats you like family.",
    metadataBase: new URL(baseUrl),
    alternates: getAlternates(lang, ""),
    openGraph: {
      title: "Tribeca Dental Studio",
      description: "The best dentistry in Tribeca, NY.",
      url: `${baseUrl}/${lang}/`,
      siteName: "Tribeca Dental Studio",
      images: [
        {
          url: `${baseUrl}/og-image.webp`,
          width: 1200,
          height: 630,
          alt: "Tribeca Dental Studio — Dentist in Tribeca, NY",
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
    "@type": "Dentist",
    name: "Tribeca Dental Studio",
    image: `${baseUrl}/og-image.webp`,
    "@id": baseUrl,
    url: baseUrl,
    telephone: "212-561-5303",
    priceRange: "$$",
    knowsAbout: [
      "General Dentistry",
      "Preventive Dentistry",
      "Restorative Dentistry",
      "Cosmetic Dentistry",
      "Dental Implants",
      "Orthodontics",
      "Oral Surgery",
      "Endodontics",
    ],
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
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NQV9585B');
      `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-foreground antialiased selection:bg-[#C5A059] selection:text-white">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NQV9585B"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

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

        <Script
          src="https://truelark.com/dental-chat-widget/js/config.js"
          strategy="lazyOnload"
        />
        <Script
          src="https://truelark.com/dental-chat-widget/js/loader.js"
          strategy="lazyOnload"
        />
        <Script
          id="truelark-init"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              var truelarkInterval = setInterval(function() {
                if (typeof fdchat === 'function') {
                  fdchat({ clientId: 80613 });
                  clearInterval(truelarkInterval);
                }
              }, 500);
            `,
          }}
        />
      </body>
    </html>
  );
}