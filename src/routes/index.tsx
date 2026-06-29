import { createFileRoute } from '@tanstack/react-router';
import { TopNavBar } from '@/components/TopNavBar';
import { HeroSection } from '@/components/HeroSection';
import { AboutProfessor } from '@/components/AboutProfessor';
import { SolutionsGrid } from '@/components/SolutionsGrid';
import { MethodTimeline } from '@/components/MethodTimeline';
import { SubjectsGrid } from '@/components/SubjectsGrid';
import { Testimonials } from '@/components/Testimonials';
import { FinalCall } from '@/components/FinalCall';
import { FAQContact } from '@/components/FAQContact';
import { Footer } from '@/components/Footer';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <>
      <TopNavBar />
      <main>
        <HeroSection />
        <AboutProfessor />
        <SolutionsGrid />
        <MethodTimeline />
        <SubjectsGrid />
        <Testimonials />
        <FinalCall />
        <FAQContact />
      </main>
      <Footer />
    </>
  );
}
