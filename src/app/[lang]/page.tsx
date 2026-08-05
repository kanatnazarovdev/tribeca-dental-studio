import { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Provider from "@/components/Provider";
import SmileCTA from "@/components/SmileCTA";
import Philosophy from "@/components/Philosophy";
import Team from "@/components/Team";
import Instagram from "@/components/Instagram";
import ContactForm from "@/components/ContactForm";
import { getAlternates } from "@/hooks/helper";
import TribecaAestheticShowcase from "@/components/TribecaShowcase";
import TribecaHeart from "@/components/TribecaHeart";
import { FEATURED_SERVICES } from "@/constants/services";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const l = ["es", "zh"].includes(lang) ? lang : "en";
  const isEs = l === "es";
  const isZh = l === "zh";

  return {
    title: {
      absolute: isZh
        ? "纽约翠贝卡最佳牙科诊所 | Tribeca Dental Studio"
        : isEs
          ? "La Mejor Odontología en Tribeca, NY | Tribeca Dental Studio"
          : "The Best Dentistry in Tribeca, NY | Tribeca Dental Studio",
    },
    description: isZh
      ? "位于纽约翠贝卡的高端综合牙科诊所，像家人一样待您。预防、修复、美容、种植牙及正畸。"
      : isEs
        ? "Odontología integral de alta gama en Tribeca, NY — lo tratamos como a la familia. Preventiva, restauradora, estética, implantes y ortodoncia."
        : "The best dentistry in Tribeca, NY. Comprehensive, family-first dental care — preventive, restorative, cosmetic, implants, and orthodontics.",
    alternates: getAlternates(l, ""),
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const l = ["es", "zh"].includes(lang) ? lang : "en";

  return (
    <main>
      <Hero lang={l} />
      <TribecaAestheticShowcase lang={l} />
      <SmileCTA lang={l} />
      {/* <Services lang={l} /> */}
      <Provider lang={l} />
      <Philosophy lang={l} />
      <TribecaHeart lang={l}/>
      <Team lang={l} />
      <Instagram lang={l} />
      {/* <section id="leadForm">
        <ContactForm />
      </section> */}
    </main>
  );
}