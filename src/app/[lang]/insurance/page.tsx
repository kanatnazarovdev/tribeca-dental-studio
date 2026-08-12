    import React from "react";
    import Image from "next/image";
    import Link from "next/link";
    import { Metadata } from "next";
    import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, DollarSign, CreditCard, Phone, FileText } from "lucide-react";

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
            ? "牙科保险、自费会员计划与分期付款 | Tribeca Dental Studio 纽约"
            : isEs
                ? "Seguros, Planes Dentales y Financiación | Tribeca Dental Studio NYC"
                : "Insurance, Dental Plans & Financing | Tribeca Dental Studio NYC";

        const description = isZh
            ? "纽约 Tribeca Dental Studio 接受所有 PPO 牙科保险（Out-of-Network），并提供 $899 专属年费会员计划及 Cherry 和 CareCredit 0% 利率分期付款方案。"
            : isEs
                ? "Aceptamos seguros PPO (Out-of-Network), ofrecemos nuestro plan de membresía dental por $899/año y opciones de financiación flexible con Cherry y CareCredit en Manhattan."
                : "Maximize your PPO insurance benefits or join our $899 annual in-house dental plan in Lower Manhattan. Flexible financing via Cherry and CareCredit available.";

        return {
            title,
            description,
            keywords: [
                "Dental Insurance Tribeca",
                "PPO Dentist Lower Manhattan",
                "Dental Membership Plan NYC",
                "No Insurance Dentist NYC",
                "CareCredit Dental Manhattan",
                "Cherry Financing Dentistry NYC",
                "Affordable Cosmetic Dentist Tribeca",
            ],
            alternates: {
                canonical: `https://tribecadentalstudio.com/${lang}/insurance-dental-plans-financing`,
                languages: {
                    en: "https://tribecadentalstudio.com/en/insurance-dental-plans-financing",
                    es: "https://tribecadentalstudio.com/es/insurance-dental-plans-financing",
                    zh: "https://tribecadentalstudio.com/zh/insurance-dental-plans-financing",
                },
            },
            openGraph: {
                title,
                description,
                url: `https://tribecadentalstudio.com/${lang}/insurance-dental-plans-financing`,
                siteName: "Tribeca Dental Studio",
                images: [
                    {
                        url: "https://tribecadentalstudio.com/insurance.png",
                        width: 1200,
                        height: 630,
                        alt: "Insurance and Dental Plans at Tribeca Dental Studio NYC",
                    },
                ],
                locale: isZh ? "zh_CN" : isEs ? "es_ES" : "en_US",
                type: "website",
            },
        };
    }

    export default async function InsurancePage({
        params,
    }: {
        params: Promise<{ lang: string }>;
    }) {
        const { lang: rawLang } = await params;
        const lang = rawLang === "es" ? "es" : rawLang === "zh" ? "zh" : "en";
        const isEs = lang === "es";
        const isZh = lang === "zh";

        const jsonLd = {
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            name: "Insurance, Dental Plans & Financing",
            description: "Financial arrangements, PPO insurance processing, and in-house membership plans at Tribeca Dental Studio.",
            publisher: {
                "@type": "Dentist",
                name: "Tribeca Dental Studio",
                url: "https://tribecadentalstudio.com",
                telephone: "212-561-5303",
                address: {
                    "@type": "PostalAddress",
                    streetAddress: "54 Warren St",
                    addressLocality: "New York",
                    addressRegion: "NY",
                    postalCode: "10007",
                    addressCountry: "US",
                },
            },
        };

        return (
            <main className="bg-[#FCFCFC] text-black min-h-screen pt-32 pb-24 font-ddin">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />

                <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 text-[#C5A059] mb-4">
                                <Sparkles size={18} />
                                <span className="text-xs uppercase tracking-[0.3em] font-bold">
                                    {isZh
                                        ? "透明计费与灵活理财"
                                        : isEs
                                            ? "Opciones Financieras Transparentes"
                                            : "Transparent Care & Flexibility"}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-light uppercase tracking-tight mb-6 leading-tight">
                                {isZh
                                    ? "保险、会员计划与分期付款"
                                    : isEs
                                        ? "Seguros, Planes y Financiación"
                                        : "Insurance, Dental Plans & Financing"}
                            </h1>
                            <p className="font-brandon text-base md:text-lg text-neutral-600 mb-8 leading-relaxed">
                                {isZh
                                    ? "在 Tribeca Dental Studio，我们相信高品质齿科服务应当清晰透明且触手可及。无论您拥有 PPO 牙科保险、需要无保险专属会员方案，还是寻求灵活的分期付款，我们的专员都会协助您最大化利用收益。"
                                    : isEs
                                        ? "Creemos que la atención dental de primera clase debe ser transparente y accesible. Ya sea gestionando sus beneficios PPO, uniéndose a nuestro plan de membresía o utilizando financiación flexible, le ayudamos en cada paso."
                                        : "We believe exceptional multi-specialty dental care should be transparent and manageable. Whether maximizing your PPO insurance benefits, joining our in-house plan, or utilizing flexible financing, our team is here to assist you."}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href={`/${lang}/contact`}
                                    className="inline-flex items-center justify-center bg-black text-white hover:bg-[#C5A059] text-xs font-bold uppercase tracking-widest px-8 py-4 transition-colors duration-300"
                                >
                                    <span>{isZh ? "咨询理财方案" : isEs ? "Consultar Financiación" : "Discuss Your Plan"}</span>
                                    <ArrowRight size={16} className="ml-2" />
                                </Link>
                                <a
                                    href="tel:212-561-5303"
                                    className="inline-flex items-center gap-2 justify-center border border-black/20 hover:border-black text-xs font-bold uppercase tracking-widest px-8 py-4 transition-colors duration-300"
                                >
                                    <Phone size={14} />
                                    <span>212-561-5303</span>
                                </a>
                            </div>
                        </div>

                        <div className="relative aspect-[4/3] bg-neutral-900 overflow-hidden shadow-2xl">
                            <Image
                                src="/insurance1.png"
                                alt="Tribeca Dental Studio Concierge Care"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                                <span className="text-white text-xs font-bold uppercase tracking-widest">
                                    {isZh ? "全面协助申请保险理赔与分期" : isEs ? "Soporte Completo para Reclamaciones y Pagos" : "Full Administrative Support for Claims & Financing"}
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 1. PPO INSURANCE SECTION */}
                <section className="bg-neutral-900 text-white py-20 px-6 md:px-12 lg:px-20 mb-20">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-5">
                                <ShieldCheck className="text-[#C5A059] mb-4" size={40} />
                                <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-2">
                                    PPO Coverage
                                </span>
                                <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight mb-6">
                                    {isZh ? "牙科保险理赔" : isEs ? "Seguros Dentales PPO" : "Dental Insurance"}
                                </h2>
                            </div>
                            <div className="lg:col-span-7">
                                <p className="font-brandon text-base text-neutral-300 leading-relaxed mb-6">
                                    {isZh
                                        ? "我们以网络外（Out-of-Network）方式配合所有 PPO 牙科保险计划。就诊前，我们的保险专员会为您详细核实各项保险额度与报销比例，并代为提交所有理赔申请，让您省心无忧。"
                                        : isEs
                                            ? "Trabajamos con todos los planes PPO de forma Out-of-Network. Nuestro personal especializado verificará sus beneficios antes de su cita para maximizar sus coberturas y crear planes adaptados a su estilo de vida."
                                            : "We work with all PPO insurance plans on an Out-of-Network basis, doing everything possible to fully accommodate and notify you of your dental benefits prior to your appointments. Our trained staff helps you maximize coverage and handle all claims seamlessly."}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-brandon text-xs text-neutral-400">
                                    <div className="flex items-center gap-2 border border-neutral-800 p-4">
                                        <CheckCircle2 size={16} className="text-[#C5A059]" />
                                        <span>Complimentary Benefit Verification</span>
                                    </div>
                                    <div className="flex items-center gap-2 border border-neutral-800 p-4">
                                        <CheckCircle2 size={16} className="text-[#C5A059]" />
                                        <span>Direct Claims Submission On Your Behalf</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. IN-HOUSE DENTAL PLAN SECTION */}
                <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-20">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-2">
                            No Insurance? No Problem!
                        </span>
                        <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight mb-4">
                            {isZh ? "Tribeca 专属牙科会员计划" : isEs ? "Plan Dental Tribeca" : "Tribeca Dental Studio Membership Plan"}
                        </h2>
                        <p className="font-brandon text-neutral-600 text-sm md:text-base">
                            Designed for patients without private insurance who want comprehensive preventive protection and specialist discounts.
                        </p>
                    </div>

                    <div className="bg-white border-2 border-black p-8 md:p-12 shadow-xl max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-neutral-200 pb-8 mb-8 gap-6">
                            <div>
                                <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold block mb-1">
                                    Annual In-House Membership
                                </span>
                                <h3 className="text-2xl md:text-3xl font-light uppercase tracking-tight">Comprehensive Care Package</h3>
                            </div>
                            <div className="text-left md:text-right">
                                <span className="text-xs text-neutral-400 line-through block font-brandon">Total Value: $3,500</span>
                                <div className="text-4xl font-bold text-black font-ddin">
                                    $899 <span className="text-xs font-normal text-neutral-500 uppercase">/ Annual Fee</span>
                                </div>
                            </div>
                        </div>

                        {/* INCLUDED SERVICES TABLE */}
                        <div className="space-y-4 font-brandon text-sm text-neutral-800 mb-10">
                            {[
                                { item: "Unlimited Comprehensive Oral Evaluations", value: "$245 each" },
                                { item: "Two Prophylaxis (Regular Cleanings)", value: "$255 each" },
                                { item: "Unlimited Prophy Polishes", value: "$175 each" },
                                { item: "Unlimited Digital X-rays + 20% Off 3D Exams", value: "$450 value" },
                                { item: "Comprehensive CT Scan Diagnostics", value: "$450 value" },
                                { item: "Specialist Consultation across all In-House Doctors", value: "$450 value" },
                                { item: "10% Discount on ALL General Dental Services", value: "Included" },
                            ].map((row, idx) => (
                                <div key={idx} className="flex justify-between items-center border-b border-neutral-100 pb-3">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 size={18} className="text-[#C5A059] shrink-0" />
                                        <span>{row.item}</span>
                                    </div>
                                    <span className="font-bold text-xs font-ddin uppercase text-neutral-500">{row.value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="text-center">
                            <a
                                href="tel:212-561-5303"
                                className="inline-flex items-center justify-center bg-black hover:bg-[#C5A059] text-white hover:text-black text-xs font-bold uppercase tracking-widest px-10 py-5 transition-colors duration-300"
                            >
                                <Phone size={16} className="mr-2" />
                                <span>Call 212-561-5303 to Enroll</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* 3. FLEXIBLE FINANCING SECTION */}
                <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-20">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-2">
                            Flexible Payment Options
                        </span>
                        <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight mb-4">
                            {isZh ? "分期付款方案" : isEs ? "Financiación Flexible" : "Third-Party Financing"}
                        </h2>
                        <p className="font-brandon text-neutral-600 text-sm md:text-base">
                            Split your dental treatment into manageable monthly payments with quick approval process.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* CHERRY FINANCING */}
                        <div className="bg-neutral-100 p-8 md:p-12 border border-neutral-200 flex flex-col justify-between">
                            <div>
                                <CreditCard className="text-[#C5A059] mb-4" size={36} />
                                <h3 className="text-2xl font-light uppercase tracking-tight mb-4">Cherry Financing</h3>
                                <p className="font-brandon text-sm text-neutral-600 leading-relaxed mb-6">
                                    Cherry is a modern patient payment solution that allows you to break your treatment cost into smaller, stress-free monthly payments. Applying takes seconds with no hard credit check.
                                </p>
                                <ul className="space-y-2 font-brandon text-xs text-neutral-800 mb-8">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-[#C5A059]" />
                                        <span>0% APR options available for qualifying patients</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-[#C5A059]" />
                                        <span>No hard credit pull to check approval terms</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-[#C5A059]" />
                                        <span>Flexible payment terms up to 24+ months</span>
                                    </li>
                                </ul>
                            </div>
                            <Link
                                href='https://pay.withcherry.com/tribeca-dental-studio-p-c?utm_source=practice&utm_medium=website&m=23893'
                                target="_blank"
                                rel="noopener"
                                className="inline-block text-center border border-black hover:bg-black hover:text-white text-xs font-bold uppercase tracking-widest px-6 py-4 transition-colors"
                            >
                                Apply with Cherry
                            </Link>
                        </div>

                        {/* CARECREDIT */}
                        <div className="bg-neutral-100 p-8 md:p-12 border border-neutral-200 flex flex-col justify-between">
                            <div>
                                <DollarSign className="text-[#C5A059] mb-4" size={36} />
                                <h3 className="text-2xl font-light uppercase tracking-tight mb-4">CareCredit</h3>
                                <p className="font-brandon text-sm text-neutral-600 leading-relaxed mb-6">
                                    CareCredit is a dedicated healthcare credit card designed specifically for your health and wellness needs. It helps you pay for out-of-pocket expenses not covered by medical insurance.
                                </p>
                                <ul className="space-y-2 font-brandon text-xs text-neutral-800 mb-8">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-[#C5A059]" />
                                        <span>Shorter-term 6, 12, 18, or 24 month interest-free financing</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-[#C5A059]" />
                                        <span>Use it for preventive, cosmetic, or emergency care</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-[#C5A059]" />
                                        <span>Instant decision upon submitting application</span>
                                    </li>
                                </ul>
                            </div>
                            <Link
                                href={`https://www.carecredit.com/go/725RRC`}
                                target="_blank"
                                className="inline-block text-center border border-black hover:bg-black hover:text-white text-xs font-bold uppercase tracking-widest px-6 py-4 transition-colors"
                            >
                                Apply with CareCredit
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA BANNER */}
                <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-20 text-center">
                    <div className="max-w-3xl mx-auto">
                        <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] block mb-4">
                            Tribeca Dental Studio
                        </span>
                        <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight mb-6">
                            Questions About Your Coverage?
                        </h2>
                        <p className="font-brandon text-neutral-400 mb-8 max-w-xl mx-auto leading-relaxed">
                            Our experienced administrative team will personally verify your insurance or guide you through our membership and financing options.
                        </p>
                        <Link
                            href={`/${lang}/contact`}
                            className="inline-block bg-[#C5A059] hover:bg-white text-black text-xs font-bold uppercase tracking-widest px-10 py-4 transition-colors duration-300"
                        >
                            Contact Financial Team
                        </Link>
                    </div>
                </section>
            </main>
        );
    }

