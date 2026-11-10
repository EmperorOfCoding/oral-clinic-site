import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading.jsx';
import { stagger, fadeUp, inView } from '../lib/motion.js';
import { CTA_AGENDAR } from '../lib/site.js';

// Jornada do paciente em quatro etapas, cada uma com uma foto real da clinica.
// Colunas no desktop, duas colunas no tablet e pilha no mobile.
const etapas = [
  {
    numero: '01',
    title: 'Primeiro contato pelo WhatsApp',
    desc: 'Você fala diretamente com a clínica, conta o que está sentindo e agenda o melhor horário, sem burocracia.',
    image: '/images/home/atendimento-recepcao.webp',
    alt: 'Profissional da Oral Clinic recebendo paciente na sala de atendimento',
    size: ['750', '1000'],
  },
  {
    numero: '02',
    title: 'Avaliação clínica presencial',
    desc: 'Examinamos sua saúde bucal, entendemos seu objetivo e identificamos o que precisa de atenção imediata.',
    image: '/images/home/atendimento-avaliacao.webp',
    alt: 'Avaliação odontológica sendo realizada em paciente na Oral Clinic',
    size: ['750', '1000'],
  },
  {
    numero: '03',
    title: 'Plano de tratamento apresentado',
    desc: 'Você recebe as etapas, as prioridades e as opções de conduta com clareza, antes de qualquer procedimento.',
    image: '/images/home/atendimento-procedimento.webp',
    alt: 'Profissional da Oral Clinic realizando procedimento estético em paciente',
    size: ['563', '1000'],
  },
  {
    numero: '04',
    title: 'Tratamento e acompanhamento',
    desc: 'Conduzimos os procedimentos com atenção ao conforto e mantemos o acompanhamento para preservar o resultado.',
    image: '/images/home/atendimento-acolhimento.webp',
    alt: 'Equipe da Oral Clinic durante atendimento acolhedor a paciente e criança',
    size: ['750', '1000'],
  },
];

export default function Process() {
  return (
    <section id="atendimento" className="bg-lavanda-50 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Como funciona"
          title="Do primeiro contato ao tratamento planejado"
          lead="Um caminho simples e previsível, para que você saiba o que esperar em cada etapa."
        />

        <motion.ol
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {etapas.map((etapa) => (
            <motion.li key={etapa.numero} variants={fadeUp}>
              <div className="overflow-hidden rounded-[1.25rem] bg-lavanda-100">
                <img
                  src={etapa.image}
                  alt={etapa.alt}
                  className="aspect-[4/3] w-full object-cover sm:aspect-[5/6]"
                  width={etapa.size[0]}
                  height={etapa.size[1]}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="mt-6 flex items-center gap-4">
                <span className="font-display text-[0.9rem] text-champagne-dark">{etapa.numero}</span>
                <div className="h-px flex-1 bg-ink/[0.09]" />
              </div>
              <h3 className="mt-4 font-display text-[1.3rem] font-normal leading-snug text-ink">{etapa.title}</h3>
              <p className="mt-2.5 text-[0.92rem] leading-relaxed text-graphite">{etapa.desc}</p>
            </motion.li>
          ))}
        </motion.ol>

        <div className="mt-14 border-t border-ink/[0.09] pt-8">
          <a href={CTA_AGENDAR} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Começar pela avaliação
          </a>
        </div>
      </div>
    </section>
  );
}
