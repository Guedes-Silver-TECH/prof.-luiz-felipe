import { createFileRoute } from '@tanstack/react-router';
import { TopNavBar } from '@/components/TopNavBar';
import { HeroSection } from '@/components/HeroSection';
import { LogoBar } from '@/components/LogoBar';
import { NumbersStrip } from '@/components/NumbersStrip';
import { AboutProfessor } from '@/components/AboutProfessor';
import { TargetAudience } from '@/components/TargetAudience';
import { SolutionsGrid } from '@/components/SolutionsGrid';
import { MethodTimeline } from '@/components/MethodTimeline';
import { SubjectsGrid } from '@/components/SubjectsGrid';
import { Testimonials } from '@/components/Testimonials';
import { FinalCall } from '@/components/FinalCall';
import { FAQContact } from '@/components/FAQContact';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

import { FomoBar } from '@/components/FomoBar';
import { ScrollIndicator } from '@/components/ScrollIndicator';
import { MobileStickyCTA } from '@/components/MobileStickyCTA';
import { ExitIntentModal } from '@/components/ExitIntentModal';

export const Route = createFileRoute('/')(
  {
    component: Index,
  },
);

function Index() {
  return (
    <>
      <ScrollIndicator />
      <FomoBar />
      <TopNavBar />
      <main>
        {/* 1. ATENÇÃO: Hero + Prova de bancas */}
        <HeroSection />
        <LogoBar />

        {/* 2. CONEXÃO / DOR: Para quem é o curso */}
        <TargetAudience />

        {/* 3. ALÍVIO DE CETICISMO: Estatísticas rápidas de autoridade */}
        <NumbersStrip />

        {/* 4. A OFERTA: Bento Grid de Soluções e Preços */}
        <SolutionsGrid />

        {/* 5. O PROCESSO: O método de ensino e a ementa completa */}
        <MethodTimeline />
        <SubjectsGrid />

        {/* 6. PROVA SOCIAL: Depoimentos de aprovados */}
        <Testimonials />

        {/* 7. AUTORIDADE / GUIA: História do professor e sua didática */}
        <AboutProfessor />

        {/* 8. FECHAMENTO: Checkout com preços e garantia */}
        <FinalCall />
        <FAQContact />
      </main>
      <FloatingWhatsApp />
      <MobileStickyCTA />
      <ExitIntentModal />
      <Footer />
    </>
  );
}
