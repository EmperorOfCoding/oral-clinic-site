import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading.jsx';
import { stagger, fadeUp, inView } from '../lib/motion.js';

// Depoimentos em video gravados na clinica. Sao registros reais: nenhum texto
// de depoimento e transcrito ou parafraseado aqui para nao atribuir ao
// paciente palavra que ele nao disse.
const depoimentos = [
  { id: 1, src: '/videos/edit/depoimento_1.mp4' },
  { id: 2, src: '/videos/edit/depoimento_2.mp4' },
  { id: 3, src: '/videos/edit/depoimento_3.mp4' },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="border-y border-ink/[0.06] bg-white py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Pacientes falando por conta própria"
          lead="Depoimentos gravados na própria clínica, em vídeo."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-3 md:overflow-visible md:pb-0"
        >
          {depoimentos.map((depoimento) => (
            <motion.div
              key={depoimento.id}
              variants={fadeUp}
              className="relative aspect-[9/16] w-[78vw] max-w-[300px] shrink-0 snap-center overflow-hidden rounded-2xl border border-ink/[0.07] bg-lavanda-100 md:w-full md:max-w-none"
            >
              <video
                src={depoimento.src}
                className="h-full w-full object-cover"
                controls
                playsInline
                preload="metadata"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
