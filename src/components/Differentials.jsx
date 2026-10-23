import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading.jsx';
import { stagger, fadeUp, imageReveal, inView } from '../lib/motion.js';

// Pilares institucionais. Sem claim clinico nao comprovado e sem numero
// inventado: cada pilar descreve uma conduta da clinica.
const pilares = [
  {
    title: 'Planejamento individualizado',
    desc: 'A conduta é definida após a avaliação, com as etapas e as prioridades apresentadas antes do início.',
  },
  {
    title: 'Atendimento humanizado',
    desc: 'Tempo para ouvir, explicar o procedimento e responder às dúvidas ao longo do tratamento.',
  },
  {
    title: 'Estética natural',
    desc: 'Resultados pensados para acompanhar as características do rosto, sem exagero.',
  },
  {
    title: 'Estrutura preparada',
    desc: 'Consultório organizado para receber com conforto, na Boca do Rio, com acesso fácil em Salvador.',
  },
];

export default function Differentials() {
  return (
    <section className="border-y border-ink/[0.06] bg-white py-20 sm:py-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Por que a Oral Clinic"
              title="Uma clínica que trata cada etapa com o mesmo cuidado"
              lead="Odontologia e estética no mesmo lugar, com acompanhamento próximo do início ao fim do tratamento."
            />

            <motion.div
              variants={imageReveal}
              initial="hidden"
              whileInView="show"
              viewport={inView}
              className="mt-10 overflow-hidden rounded-[1.75rem] bg-lavanda-100"
            >
              <img
                src="/images/foto_2_oral_clinic.png"
                alt="Profissional da Oral Clinic ao lado de paciente infantil durante consulta odontológica"
                className="aspect-[4/3] w-full object-cover"
                width="900"
                height="675"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          </div>

          <motion.dl
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="lg:pt-4"
          >
            {pilares.map((pilar) => (
              <motion.div key={pilar.title} variants={fadeUp} className="border-t border-ink/[0.09] py-7 last:border-b">
                <dt className="font-display text-[1.2rem] font-normal text-ink">{pilar.title}</dt>
                <dd className="mt-2.5 text-[0.95rem] leading-relaxed text-graphite">{pilar.desc}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
