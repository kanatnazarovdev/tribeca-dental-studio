import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ShieldCheck, Lock, Mail, Phone, MapPin } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = rawLang === "es" ? "es" : rawLang === "zh" ? "zh" : "en";
  const isEs = lang === "es";
  const isZh = lang === "zh";

  const title = isZh
    ? "隐私政策与数据保护 | Tribeca Dental Studio"
    : isEs
    ? "Política de Privacidad | Tribeca Dental Studio NYC"
    : "Privacy Policy Agreement | Tribeca Dental Studio PC";

  const description = isZh
    ? "Tribeca Dental Studio, PC 的官方隐私政策：严禁出售或分享个人信息与 SMS 同意书。"
    : isEs
    ? "Política de privacidad de Tribeca Dental Studio, PC. Protegemos su información personal y consentimiento SMS."
    : "Official Privacy Policy for Tribeca Dental Studio, PC. We never share, trade, or sell your personal information or SMS consent.";

  return {
    title,
    description,
    alternates: {
      canonical: `https://tribecadentalstudio.com/${lang}/privacy-policy`,
      languages: {
        en: "https://tribecadentalstudio.com/en/privacy-policy",
        es: "https://tribecadentalstudio.com/es/privacy-policy",
        zh: "https://tribecadentalstudio.com/zh/privacy-policy",
      },
    },
  };
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang === "es" ? "es" : rawLang === "zh" ? "zh" : "en";

  return (
    <main className="bg-[#FCFCFC] text-black min-h-screen pt-32 pb-24 font-ddin">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* HEADER */}
        <div className="border-b border-black/10 pb-8 mb-12">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-2">
            Online Privacy Policy Agreement
          </span>
          <h1 className="text-4xl md:text-5xl font-light uppercase tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="font-brandon text-xs text-neutral-400 uppercase tracking-widest">
            Last Updated: September 13, 2024 • Tribeca Dental Studio, PC
          </p>
        </div>

        {/* HIGHLIGHTED SMS GUARANTEE BOX */}
        <div className="bg-black text-white p-8 border-l-4 border-[#C5A059] mb-12 shadow-md">
          <div className="flex items-center gap-3 mb-3">
            <Lock className="text-[#C5A059]" size={20} />
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
              Strict Privacy Commitment
            </span>
          </div>
          <p className="font-brandon text-sm md:text-base leading-relaxed text-neutral-200 font-light">
            <strong>We will never share, trade, or sell personal information—such as Phone Numbers and SMS consent—with third parties under any circumstances.</strong> You can unsubscribe from SMS messages at any time by replying <strong>STOP</strong>.
          </p>
        </div>

        {/* MAIN BODY CONTENT */}
        <div className="prose prose-neutral max-w-none font-brandon text-neutral-700 leading-relaxed space-y-8">
          <p className="text-base font-light">
            Tribeca Dental Studio, PC values its users’ privacy. This Policy governs all data collection and usage across our website (
            <a href="https://tribecadentalstudio.com" className="text-[#C5A059] underline">
              www.tribecadentalstudio.com
            </a>
            ) and related facilities. By using our website, you consent to the data practices expressed in this agreement.
          </p>

          {/* SECTION 1 */}
          <section className="bg-white p-6 border border-neutral-200 shadow-sm space-y-3">
            <h2 className="font-ddin text-lg font-bold uppercase text-black">
              1. Information We Collect
            </h2>
            <p className="text-sm">
              We collect automatically gathered information upon visiting our website, including server logs, cookies, and third-party tracking technologies.
            </p>
            <p className="text-sm">
              Additionally, we may collect non-personal anonymous demographic details (such as age group, browser type, IP address, or operating system) to maintain superior service quality.
            </p>
          </section>

          {/* SECTION 2 */}
          <section className="bg-white p-6 border border-neutral-200 shadow-sm space-y-3">
            <h2 className="font-ddin text-lg font-bold uppercase text-black">
              2. Why We Collect Information
            </h2>
            <ul className="text-sm space-y-2 list-disc pl-5">
              <li>To better understand your clinical needs and deliver requested services.</li>
              <li>To fulfill legitimate interest in improving our patient care and facilities.</li>
              <li>To send promotional updates or research surveys when consent is provided.</li>
              <li>To customize our website based on online user behavior and preferences.</li>
            </ul>
          </section>

          {/* SECTION 3 */}
          <section className="bg-white p-6 border border-neutral-200 shadow-sm space-y-3">
            <h2 className="font-ddin text-lg font-bold uppercase text-black">
              3. Use & Disclosure Exceptions
            </h2>
            <p className="text-sm">
              Tribeca Dental Studio, PC does not sell, rent, or lease customer lists to third parties. Information is disclosed solely:
            </p>
            <ul className="text-sm space-y-2 list-disc pl-5">
              <li>As necessary to provide services or products you have ordered.</li>
              <li>As required by law, subpoena, or search warrant.</li>
              <li>To outside auditors who have agreed to strict confidentiality.</li>
              <li>To preserve and defend all rights and property of Tribeca Dental Studio, PC.</li>
            </ul>
          </section>

          {/* SECTION 4 */}
          <section className="bg-white p-6 border border-neutral-200 shadow-sm space-y-3">
            <h2 className="font-ddin text-lg font-bold uppercase text-black">
              4. Security Measures & Children's Privacy
            </h2>
            <p className="text-sm">
              We employ SSL encryption for sensitive data transmitted online (verified by <code>https://</code> in your address bar). Offline access is restricted solely to authorized personnel (e.g., billing or reception).
            </p>
            <p className="text-sm">
              Our website is not directed toward children under 13. We do not knowingly collect identifiable data from children under 13 without verifiable parental consent.
            </p>
          </section>

          {/* CONTACT & UNSUBSCRIBE SECTION */}
          <div className="bg-neutral-100 p-8 border border-neutral-200 mt-12">
            <h3 className="font-ddin text-xl font-bold uppercase tracking-tight text-black mb-4">
              Unsubscribe & Contact Information
            </h3>
            <p className="text-xs text-neutral-600 mb-6">
              To discontinue email newsletters or request complete data removal, contact us at:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-ddin text-xs uppercase tracking-wider font-bold">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[#C5A059]" />
                <a href="mailto:info@nytds.com" className="hover:underline">info@nytds.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-[#C5A059]" />
                <a href="tel:212-561-5303" className="hover:underline">212-561-5303</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-[#C5A059]" />
                <span>54 Warren St, New York, NY 10007</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}