import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading.jsx';
import { stagger, fadeUp, inView } from '../lib/motion.js';

// Fotos reais da clinica. As legendas descrevem o que a imagem mostra de fato.
const fotos = [
  {
    id: 'fachada',
    url: '/images/foto_estabelecimento.png',
    caption: 'Fachada na Rua Hélio Machado, na Boca do Rio',
    alt: 'Fachada da Oral Clinic com letreiro roxo e entrada para a recepção',
    span: 'sm:col-span-2 sm:row-span-2',
    ratio: 'aspect-[4/3] sm:aspect-auto sm:h-full',
  },
  {
    id: 'atendimento-infantil',
    url: '/images/foto_2_oral_clinic.png',
    caption: 'Atendimento infantil',
    alt: 'Profissional da Oral Clinic sorrindo ao lado de paciente criança na cadeira odontológica',
    span: 'sm:col-span-1',
    ratio: 'aspect-[3/4]',
  },
  {
    id: 'procedimento',
    url: '/images/foto_4_oral_clinic.png',
    caption: 'Procedimento estético em andamento',
    alt: 'Profissional da Oral Clinic realizando procedimento estético com equipamento de proteção',
    span: 'sm:col-span-1',
    ratio: 'aspect-[3/4]',
  },
  {
    id: 'acolhimento',
    url: '/images/foto_3_oral_clinic.png',
    caption: 'Acolhimento durante a consulta',
    alt: 'Equipe da Oral Clinic acolhendo paciente adulta e criança durante a consulta',
    span: 'sm:col-span-2',
    ratio: 'aspect-[16/10]',
  },
];

export default function ClinicGallery() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="A clínica"
          title="O espaço onde você será atendido"
          lead="Registros reais da estrutura, da equipe e do dia a dia do atendimento na Boca do Rio."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-4 sm:auto-rows-[minmax(0,1fr)]"
        >
          {fotos.map((foto) => (
            <motion.figure key={foto.id} variants={fadeUp} className={`flex flex-col ${foto.span}`}>
              <div className="flex-1 overflow-hidden rounded-2xl border border-ink/[0.07] bg-lavanda-100">
                <img
                  src={foto.url}
                  alt={foto.alt}
                  className={`w-full object-cover ${foto.ratio}`}
                  width="1200"
                  height="900"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="mt-3 text-[0.82rem] text-graphite/80">{foto.caption}</figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
