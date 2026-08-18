import { motion } from 'framer-motion';
import { fadeUp, inView } from '../lib/motion.js';
import { CTA_AGENDAR, CLINIC } from '../lib/site.js';

export default function FinalCTA() {
  return (
    <section id="contato" className="pb-20 sm:pb-28">
      <div className="container-page">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="relative overflow-hidden rounded-[1.75rem]"
        >
          {/* Imagem real da clinica como base, com veu escuro para leitura. */}
          <img
            src="/images/foto_3_oral_clinic.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
            width="1200"
            height="800"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-ink/85" />

          <div className="relative px-6 py-16 sm:px-12 lg:px-16 lg:py-20">
            <div className="max-w-xl">
              <span className="eyebrow text-white/70 before:bg-champagne-light">Agendamento</span>
              <h2 className="mt-5 font-display text-[1.9rem] font-normal leading-[1.15] text-white sm:text-[2.35rem]">
                Comece pela avaliação. O plano vem depois dela.
              </h2>
              <p className="mt-5 max-w-prose text-[1rem] leading-relaxed text-white/75">
                Na avaliação entendemos sua queixa, examinamos sua saúde bucal e
                apresentamos as opções de tratamento com clareza. O agendamento é
                feito pelo WhatsApp, direto com a clínica.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={CTA_AGENDAR}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-lavanda-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Agendar pelo WhatsApp
                </a>
                <a href="#localizacao" className="btn-on-dark">
                  Ver localização
                </a>
              </div>

              <p className="mt-8 text-[0.82rem] text-white/55">
                Responsável técnica: {CLINIC.responsavelTecnica}, {CLINIC.cro}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
