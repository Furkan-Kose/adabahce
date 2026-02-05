import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProductsSection from "@/components/ProductsSection";
import FeaturesSection from "@/components/FeaturesSection";
import TechnologySection from "@/components/TechnologySection";
import ContactSection from "@/components/ContactSection";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Anasayfa",
  description:
    "Ada Bahçe'ye hoşgeldiniz. Topraksız tarım teknolojileri ile organik ürünler yetiştiriyoruz. Doğal, taze ve lezzetli ürünler için bizi keşfedin.",
  openGraph: {
    title: "Ada Bahçe - Topraksız Tarım Teknolojileri",
    description:
      "Topraksız tarım teknolojileri ile organik ürünler yetiştiriyoruz.",
    url: "https://adabahce.com.tr",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <HeroSection />

      <FeaturesSection />

      <TechnologySection />

      <ProductsSection />

      <TestimonialsSection />

      <ContactSection />
    </main>
  );
}
