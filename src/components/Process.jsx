import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import SectionHeading from './SectionHeading.jsx';
import { fadeUp, inView } from '../lib/motion.js';
import { CTA_AGENDAR } from '../lib/site.js';

// Jornada do paciente. Cada etapa tem uma imagem real associada, trocada
// conforme o scroll no desktop e empilhada no mobile.
const etapas = [
  {
    numero: '01',
    title: 'Primeiro contato pelo WhatsApp',
    desc: 'Você fala diretamente com a clínica, conta o que está sentindo e agenda o melhor horário, sem burocracia.',
    image: '/images/foto_2_oral_clinic.png',
    alt: 'Profissional da Oral Clinic recebendo paciente na sala de atendimento',
  },
  {
    numero: '02',
    title: 'Avaliação clínica presencial',
    desc: 'Examinamos sua saúde bucal, entendemos seu objetivo e identificamos o que precisa de atenção imediata.',
    image: '/images/foto_1_oral_clinic.png',
    alt: 'Avaliação odontológica sendo realizada em paciente na Oral Clinic',
  },
  {
    numero: '03',
    title: 'Plano de tratamento apresentado',
    desc: 'Você recebe as etapas, as prioridades e as opções de conduta com clareza, antes de qualquer procedimento.',
    image: '/images/foto_4_oral_clinic.png',
    alt: 'Profissional da Oral Clinic realizando procedimento estético em paciente',
  },
  {
    numero: '04',
    title: 'Tratamento e acompanhamento',
    desc: 'Conduzimos os procedimentos com atenção ao conforto e mantemos o acompanhamento para preservar o resultado.',
    image: '/images/foto_3_oral_clinic.png',
    alt: 'Equipe da Oral Clinic durante atendimento acolhedor a paciente e criança',
  },
];

// Bloco de imagem que troca conforme a etapa ativa (apenas desktop).
function ImagemDaEtapa({ etapa, progress, index, total, estatico }) {
  // Cada imagem aparece na sua fatia do progresso do scroll.
  const inicio = index / total;
  const fim = (index + 1) / total;
  const margem = 0.5 / total;

  const opacityAnimada = useTransform(
    progress,
    [inicio - margem, inicio + margem * 0.6, fim - margem * 0.6, fim + margem],
    index === 0 ? [1, 1, 1, 0] : index === total - 1 ? [0, 1, 1, 1] : [0, 1, 1, 0]
  );

  // Com prefers-reduced-motion a troca por scroll e desativada: mantemos
  // apenas a primeira imagem visivel, para nenhum conteudo ficar invisivel.
  if (estatico) {
    return index === 0 ? (
      <img
        src={etapa.image}
        alt={etapa.alt}
        className="absolute inset-0 h-full w-full object-cover"
        width="900"
        height="1100"
        loading="lazy"
        decoding="async"
      />
    ) : null;
  }

  return (
    <motion.img
      src={etapa.image}
      alt={etapa.alt}
      style={{ opacity: opacityAnimada }}
      className="absolute inset-0 h-full w-full object-cover"
      width="900"
      height="1100"
      loading="lazy"
      decoding="async"
    />
  );
}

export default function Process() {
  const trilhaRef = useRef(null);
  const reduzirMovimento = useReducedMotion();

  // useScroll com target e seguro em SSR: a medicao so ocorre no cliente.
  const { scrollYProgress } = useScroll({
    target: trilhaRef,
    offset: ['start center', 'end center'],
  });

  return (
    <section id="atendimento" className="bg-lavanda-50 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Como funciona"
          title="Do primeiro contato ao tratamento planejado"
          lead="Um caminho simples e previsível, para que você saiba o que esperar em cada etapa."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          {/* Trilha de texto */}
          <div ref={trilhaRef} className="space-y-12 lg:space-y-32">
            {etapas.map((etapa) => (
              <motion.div
                key={etapa.numero}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={inView}
              >
                {/* Imagem inline: apenas no mobile, empilhada com o texto. */}
                <div className="mb-6 overflow-hidden rounded-2xl bg-lavanda-100 lg:hidden">
                  <img
                    src={etapa.image}
                    alt={etapa.alt}
                    className="aspect-[4/3] w-full object-cover"
                    width="900"
                    height="675"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="flex items-baseline gap-4">
                  <span className="font-display text-[0.9rem] text-champagne-dark">{etapa.numero}</span>
                  <div className="h-px flex-1 bg-ink/[0.09]" />
                </div>
                <h3 className="mt-5 font-display text-[1.35rem] font-normal leading-snug text-ink sm:text-[1.5rem]">
                  {etapa.title}
                </h3>
                <p className="mt-3 max-w-md text-[0.97rem] leading-relaxed text-graphite">{etapa.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Painel visual fixo: somente desktop. */}
          <div className="hidden lg:block">
            <div className="sticky top-28 overflow-hidden rounded-[1.75rem] bg-lavanda-200">
              <div className="relative aspect-[4/5] w-full">
                {etapas.map((etapa, index) => (
                  <ImagemDaEtapa
                    key={etapa.numero}
                    etapa={etapa}
                    progress={scrollYProgress}
                    index={index}
                    total={etapas.length}
                    estatico={reduzirMovimento}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-16 border-t border-ink/[0.09] pt-8"
        >
          <a href={CTA_AGENDAR} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Começar pela avaliação
          </a>
        </motion.div>
      </div>
    </section>
  );
}
