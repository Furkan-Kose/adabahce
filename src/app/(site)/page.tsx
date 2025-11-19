import HeroSection from '@/components/HeroSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProductsSection from '@/components/ProductsSection';
import FeaturesSection from '@/components/FeaturesSection';
import TechnologySection from '@/components/TechnologySection';
import ContactSection from '@/components/ContactSection';

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
