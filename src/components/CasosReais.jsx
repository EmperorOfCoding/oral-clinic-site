import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import { stagger, fadeUp, inView } from '../lib/motion.js';
import { CLINIC } from '../lib/site.js';

// Casos reais publicados pela clinica no Instagram, recortados para remover a
// interface do aplicativo. Sem numeros de engajamento e sem promessa de
// resultado: cada caso e apresentado apenas pelo procedimento realizado.
const casos = [
  {
    id: 'clareamento-1',
    image: '/images/casos/caso-clareamento-1.jpg',
    procedimento: 'Clareamento dental',
    nota: 'Comparativo de antes e depois registrado durante o acompanhamento do caso.',
  },
  {
    id: 'clareamento-2',
    image: '/images/casos/caso-clareamento-2.jpg',
    procedimento: 'Clareamento dental',
    nota: 'Comparativo de cor após o protocolo de clareamento acompanhado na clínica.',
  },
  {
    id: 'protese-implante',
    image: '/images/casos/caso-protese-implante.jpg',
    procedimento: 'Prótese sobre implante',
    nota: 'Prótese provisória imediata instalada sobre implante.',
  },
];

export default function CasosReais() {
  return (
    <section id="casos-reais" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Casos reais"
            title="Resultados documentados na clínica"
            lead="Registros de pacientes atendidos na Oral Clinic. Cada caso é individual: o resultado depende da condição inicial, da indicação clínica e da adesão ao tratamento."
          />

          <motion.a
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            href={CLINIC.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[0.83rem] font-semibold text-brand-700 transition-colors hover:text-brand-800"
          >
            <Instagram className="h-4 w-4" strokeWidth={1.6} />
            Ver mais no Instagram
          </motion.a>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {casos.map((caso) => (
            <motion.figure key={caso.id} variants={fadeUp}>
              <div className="overflow-hidden rounded-2xl border border-ink/[0.07] bg-lavanda-100">
                <img
                  src={caso.image}
                  alt={`Caso clínico de ${caso.procedimento.toLowerCase()} realizado na Oral Clinic, comparativo de antes e depois`}
                  className="aspect-square w-full object-cover"
                  width="553"
                  height="553"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="mt-4">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-graphite/65">
                  {caso.procedimento}
                </p>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-graphite">{caso.nota}</p>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
