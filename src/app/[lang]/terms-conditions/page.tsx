import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ShieldCheck, Phone, Mail, FileText } from "lucide-react";

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
    ? "服务条款与 SMS 短信协议 | Tribeca Dental Studio"
    : isEs
    ? "Términos y Condiciones | Tribeca Dental Studio NYC"
    : "Terms & Conditions | Tribeca Dental Studio PC";

  const description = isZh
    ? "阅读 Tribeca Dental Studio, PC 的服务条款与 SMS 短信通知协议。"
    : isEs
    ? "Términos y condiciones del servicio y mensajería SMS de Tribeca Dental Studio, PC."
    : "Review the official Terms & Conditions and SMS Messaging Service agreement for Tribeca Dental Studio, PC.";

  return {
    title,
    description,
    alternates: {
      canonical: `https://tribecadentalstudio.com/${lang}/terms-conditions`,
      languages: {
        en: "https://tribecadentalstudio.com/en/terms-conditions",
        es: "https://tribecadentalstudio.com/es/terms-conditions",
        zh: "https://tribecadentalstudio.com/zh/terms-conditions",
      },
    },
  };
}

export default async function TermsConditionsPage({
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
            Legal & Compliance
          </span>
          <h1 className="text-4xl md:text-5xl font-light uppercase tracking-tight mb-4">
            Terms & Conditions
          </h1>
          <p className="font-brandon text-xs text-neutral-400 uppercase tracking-widest">
            Effective Date: November 21, 2024 • Tribeca Dental Studio, PC
          </p>
        </div>

        {/* CONTENT */}
        <div className="prose prose-neutral max-w-none font-brandon text-neutral-700 leading-relaxed space-y-8">
          <p className="text-base font-light">
            By opting in to receive SMS messages from <strong>Tribeca Dental Studio, PC</strong> (“we,” “us,” “our”), you agree to the following terms and conditions governing our communications and online services.
          </p>

          <div className="space-y-6">
            <section className="bg-white p-6 border border-neutral-200 shadow-sm">
              <h2 className="font-ddin text-lg font-bold uppercase text-black mb-2 flex items-center gap-2">
                <FileText size={18} className="text-[#C5A059]" />
                1. SMS Messaging Service
              </h2>
              <p className="text-sm">
                By providing your phone number to Tribeca Dental Studio, PC, you consent to receive SMS messages, including appointment reminders, clinical updates, promotional offers, and relevant practice content.
              </p>
            </section>

            <section className="bg-white p-6 border border-neutral-200 shadow-sm">
              <h2 className="font-ddin text-lg font-bold uppercase text-black mb-2 flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#C5A059]" />
                2. Message Frequency
              </h2>
              <p className="text-sm">
                Message frequency varies based on your appointments and service preferences. Typically, you can expect to receive up to 4 promotional or transactional messages per month.
              </p>
            </section>

            <section className="bg-white p-6 border border-neutral-200 shadow-sm">
              <h2 className="font-ddin text-lg font-bold uppercase text-black mb-2">
                3. Message and Data Rates
              </h2>
              <p className="text-sm">
                Standard message and data rates may apply based on your mobile carrier’s plan and terms.
              </p>
            </section>

            <section className="bg-white p-6 border border-neutral-200 shadow-sm">
              <h2 className="font-ddin text-lg font-bold uppercase text-black mb-2">
                4. Privacy Policy Agreement
              </h2>
              <p className="text-sm">
                Your personal information is strictly protected and handled in accordance with our{" "}
                <Link
                  href={`/${lang}/privacy-policy`}
                  className="text-[#C5A059] underline hover:text-black transition-colors"
                >
                  Privacy Policy
                </Link>
                . We will never sell, share, or trade your phone number or SMS consent with third parties.
              </p>
            </section>

            <section className="bg-white p-6 border border-neutral-200 shadow-sm">
              <h2 className="font-ddin text-lg font-bold uppercase text-black mb-2">
                5. Opt-Out Instructions
              </h2>
              <p className="text-sm">
                You may opt out of SMS communications at any time by replying <strong>“STOP”</strong> to any message received from us. For assistance or further instructions, you may also contact us directly at{" "}
                <a href="mailto:info@nytds.com" className="text-[#C5A059] underline">
                  info@nytds.com
                </a>{" "}
                or call{" "}
                <a href="tel:212-561-5303" className="text-[#C5A059] underline">
                  212-561-5303
                </a>
                .
              </p>
            </section>

            <section className="bg-white p-6 border border-neutral-200 shadow-sm">
              <h2 className="font-ddin text-lg font-bold uppercase text-black mb-2">
                6. Liability & Confirmation
              </h2>
              <p className="text-sm">
                We are not responsible for any charges, errors, or delays in SMS delivery caused by mobile carriers or third-party telecommunication providers. By opting in, you confirm that you are the owner or authorized user of the phone number provided and are at least 18 years of age.
              </p>
            </section>
          </div>

          {/* CONTACT BOX */}
          <div className="bg-neutral-900 text-white p-8 mt-12 border border-neutral-800">
            <h3 className="font-ddin text-xl font-light uppercase tracking-tight mb-4">
              Questions Regarding Our Terms?
            </h3>
            <p className="text-xs text-neutral-400 mb-6">
              Contact our administrative team at Tribeca Dental Studio, PC for any legal or service inquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 text-xs uppercase tracking-widest font-bold">
              <a href="tel:212-561-5303" className="inline-flex items-center gap-2 text-[#C5A059]">
                <Phone size={14} /> 212-561-5303
              </a>
              <a href="mailto:info@nytds.com" className="inline-flex items-center gap-2 text-[#C5A059]">
                <Mail size={14} /> info@nytds.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}