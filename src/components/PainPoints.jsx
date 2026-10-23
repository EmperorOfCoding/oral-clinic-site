import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading.jsx';
import { stagger, fadeUp, imageReveal, inView } from '../lib/motion.js';
import { CTA_AGENDAR } from '../lib/site.js';

// Motivos que levam o paciente a procurar a clinica. Apresentados como lista
// editorial, nao como grade de cards com icone.
const motivos = [
  'Sente vergonha de sorrir ou de aparecer em fotos',
  'Perdeu um ou mais dentes e quer voltar a mastigar com conforto',
  'Quer alinhar os dentes de forma discreta',
  'Percebe dor, sangramento ou desconforto na gengiva',
  'Quer melhorar a estética do sorriso mantendo naturalidade',
  'Procura um tratamento planejado, com clareza sobre cada etapa',
];

export default function PainPoints() {
  return (
    <section id="a-clinica" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          {/* Prova visual: atendimento real na clinica. */}
          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="overflow-hidden rounded-[1.75rem] bg-lavanda-100"
          >
            <img
              src="/images/foto_1_oral_clinic.png"
              alt="Atendimento odontológico em andamento na Oral Clinic, com paciente acomodada na cadeira clínica"
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
              width="900"
              height="1200"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          <div>
            <SectionHeading
              eyebrow="Cuidado individualizado"
              title="Cada paciente chega por um motivo diferente. O plano também é."
              lead="A avaliação começa por entender o que trouxe você até aqui. A partir dela, montamos um plano de tratamento com etapas, prioridades e conduta explicadas com clareza, para que a decisão seja sua."
            />

            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={inView}
              className="mt-10 space-y-0"
            >
              {motivos.map((motivo) => (
                <motion.li
                  key={motivo}
                  variants={fadeUp}
                  className="border-t border-ink/[0.08] py-3.5 text-[0.97rem] leading-relaxed text-graphite last:border-b"
                >
                  {motivo}
                </motion.li>
              ))}
            </motion.ul>

            <motion.a
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={inView}
              href={CTA_AGENDAR}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex text-sm font-semibold text-brand-700 underline decoration-champagne decoration-2 underline-offset-[6px] transition-colors hover:text-brand-800"
            >
              Agendar uma avaliação
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
