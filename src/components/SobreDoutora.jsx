import { motion } from 'framer-motion';
import { fadeUp, imageReveal, inView } from '../lib/motion.js';
import { CLINIC, whatsappLink } from '../lib/site.js';

// Autoridade da responsavel tecnica. Sem o termo "especialista": a formacao
// descrita e a informada pela clinica, sem especialidade registrada (CFO).
const numeros = [
  { valor: '17 anos', legenda: 'de experiência em odontologia' },
  { valor: 'CRO-BA', legenda: 'registro 10244 no conselho' },
  { valor: 'Boca do Rio', legenda: 'atendimento em Salvador' },
];

const formacao = [
  'Graduação em Odontologia (Cirurgiã-Dentista)',
  'Formação direcionada para as áreas de Implantes e Periodontia',
];

const atuacao = [
  'Responsável técnica da Oral Clinic',
  'Implantes e Periodontia',
  'Odontologia Estética, como reabilitações e clareamentos',
  'Clínica geral',
];

const CTA_DOUTORA = whatsappLink(
  `Olá! Vim pelo site e gostaria de agendar uma avaliação com a ${CLINIC.responsavelTecnica}.`
);

function Lista({ titulo, itens }) {
  return (
    <div>
      <h3 className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-champagne">{titulo}</h3>
      <ul className="mt-4 space-y-3">
        {itens.map((item) => (
          <li key={item} className="flex gap-3 text-[0.95rem] leading-relaxed text-white">
            <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-champagne" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SobreDoutora() {
  return (
    <section id="quem-cuida" className="bg-ink py-20 sm:py-28">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-20">
          <motion.figure variants={imageReveal} initial="hidden" whileInView="show" viewport={inView}>
            <div className="overflow-hidden rounded-[1.75rem] bg-white/5">
              <img
                src="/images/home/dra-marcela-perfil.webp"
                alt={`${CLINIC.responsavelTecnica}, cirurgiã-dentista e responsável técnica da Oral Clinic, sorrindo no consultório`}
                className="aspect-[4/5] w-full object-cover object-top"
                width="1016"
                height="1100"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption className="mt-4 flex items-baseline justify-between gap-4 border-t border-white/15 pt-4">
              <span className="font-display text-[0.98rem] text-white">{CLINIC.responsavelTecnica}</span>
              <span className="text-[0.78rem] font-medium uppercase tracking-[0.14em] text-white/65">{CLINIC.cro}</span>
            </figcaption>
          </motion.figure>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={inView}>
            <span className="eyebrow text-white/70 before:bg-champagne-light">Quem cuida de você</span>
            <h2 className="mt-6 font-display text-[2.2rem] font-normal leading-[1.1] tracking-[-0.02em] text-white sm:text-[2.6rem] lg:text-[3rem]">
              {CLINIC.responsavelTecnica}
            </h2>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-mist">
              Cirurgiã-dentista e responsável técnica da Oral Clinic. Há 17 anos cuida de pacientes com
              atenção a cada etapa do tratamento, da avaliação ao acompanhamento.
            </p>

            <dl className="mt-9 grid grid-cols-3 gap-4 border-y border-white/15 py-6">
              {numeros.map((n) => (
                <div key={n.valor}>
                  <dt className="font-display text-[1.15rem] text-champagne-light sm:text-[1.375rem]">{n.valor}</dt>
                  <dd className="mt-1 text-[0.78rem] leading-snug text-white/65 sm:text-[0.82rem]">{n.legenda}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-9 grid gap-8 sm:grid-cols-2">
              <Lista titulo="Formação" itens={formacao} />
              <Lista titulo="O que faz hoje" itens={atuacao} />
            </div>

            <a
              href={CTA_DOUTORA}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-lavanda-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Agendar avaliação com a {CLINIC.responsavelTecnica}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
