import React from 'react';
import { MotionConfig } from 'framer-motion';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import PainPoints from './components/PainPoints.jsx';
import InstagramFeed from './components/InstagramFeed.jsx';
import Treatments from './components/Treatments.jsx';
import Differentials from './components/Differentials.jsx';
import ClinicGallery from './components/ClinicGallery.jsx';
import Process from './components/Process.jsx';
import Testimonials from './components/Testimonials.jsx';
import Location from './components/Location.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton.jsx';

export default function App() {
  return (
    // reducedMotion="user" faz o Framer Motion respeitar prefers-reduced-motion:
    // desativa movimento (translate/scale) mantendo fades suaves de opacidade,
    // garantindo que nenhum conteudo fique invisivel.
    <MotionConfig reducedMotion="user">
      <div className="min-h-dvh bg-cloud">
        <Header />
        <main>
          <Hero />
          <InstagramFeed />
          <PainPoints />
          <Treatments />
          <Differentials />
          <ClinicGallery />
          <Process />
          <Testimonials />
          <Location />
          <FinalCTA />
        </main>
        <Footer />
        <WhatsAppFloatingButton />
      </div>
    </MotionConfig>
  );
}
