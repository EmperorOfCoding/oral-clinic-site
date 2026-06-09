import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Sparkles } from 'lucide-react';
import { fadeUp, inView } from '../lib/motion.js';
import { whatsappLink } from '../lib/site.js';

export default function FinalCTA() {
  const cta = whatsappLink('Olá! Gostaria de agendar uma consulta na Oral Clinic.');

  return (
    <section id="contato" className="relative py-20 sm:py-28">
      <div className="container-page">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 px-6 py-16 text-center shadow-card sm:px-12 lg:py-20"
        >
          <div className="pointer-events-none absolute inset-0 bg-dots opacity-[0.08]" />
          <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-aqua-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-champagne/20 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-aqua-200 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
              Seu sorriso merece cuidado
            </span>

            <h2 className="mt-6 font-display text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-[2.9rem]">
              Pronto para cuidar do seu sorriso?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-brand-50">
              Agende sua consulta na Oral Clinic e descubra o melhor caminho para
              cuidar da sua saúde bucal, estética e autoestima.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={cta}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-brand-700 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-cloud focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <MessageCircle className="h-5 w-5" strokeWidth={2} />
                Agendar pelo WhatsApp
              </a>
              <a
                href="#localizacao"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <MapPin className="h-5 w-5" strokeWidth={2} />
                Ver localização
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
