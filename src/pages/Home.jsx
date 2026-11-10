import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import Testimonials from '../components/Testimonials.jsx';
import CasosReais from '../components/CasosReais.jsx';
import ParaQuem from '../components/ParaQuem.jsx';
import Process from '../components/Process.jsx';
import SobreDoutora from '../components/SobreDoutora.jsx';
import HomeFaq from '../components/HomeFaq.jsx';
import Treatments from '../components/Treatments.jsx';
import ClinicGallery from '../components/ClinicGallery.jsx';
import Location from '../components/Location.jsx';
import FinalCTA from '../components/FinalCTA.jsx';
import Footer from '../components/Footer.jsx';
import WhatsAppFloatingButton from '../components/WhatsAppFloatingButton.jsx';

export default function Home() {
  return (
    <div className="min-h-dvh bg-cloud">
      <Header />
      <main>
        <Hero />
        {/* Prova social logo apos o hero: depoimento em video e casos reais. */}
        <Testimonials />
        <CasosReais />
        <ParaQuem />
        <Process />
        <SobreDoutora />
        <HomeFaq />
        <Treatments />
        <ClinicGallery />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
