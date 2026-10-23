import { motion } from 'framer-motion';
import { CTA_AGENDAR, CLINIC } from '../lib/site.js';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// Chips discretos de tratamento. Nao sao cards flutuantes: ficam ancorados
// no fluxo do texto, sem animacao propria.
const chips = ['Implantes', 'Prótese', 'Clareamento', 'Ortodontia'];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-lavanda-50 pt-[72px]">
      <div className="container-page">
        <div className="grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-[1fr_0.92fr] lg:gap-16 lg:py-20">
          {/*
            Coluna editorial. Rotulo, titulo e subtitulo ficam fora da
            animacao: sao conteudo acima da dobra e precisam sair visiveis no
            HTML pre-renderizado. So os elementos secundarios animam.
          */}
          <motion.div variants={container} initial="hidden" animate="show">
            <p className="eyebrow">Odontologia na Boca do Rio, Salvador</p>

            {/*
              H1 visivel carrega a mensagem principal. A localidade fica no
              rotulo acima e no subtitulo, preservando o SEO local.
            */}
            <h1 className="mt-6 font-display text-[2.15rem] font-normal leading-[1.12] tracking-[-0.02em] text-ink sm:text-[2.9rem] lg:text-[3.35rem]">
              Odontologia estética e cuidado integral para um sorriso com mais segurança.
            </h1>

            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-graphite">
              Na Oral Clinic, cada tratamento é planejado com atenção à saúde, à
              estética natural e ao conforto do paciente.
            </p>

            <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={CTA_AGENDAR} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Agendar avaliação pelo WhatsApp
              </a>
              <a href="#tratamentos" className="btn-secondary">
                Conhecer tratamentos
              </a>
            </motion.div>

            <motion.ul variants={item} className="mt-10 flex flex-wrap gap-2" aria-label="Principais tratamentos">
              {chips.map((chip) => (
                <li
                  key={chip}
                  className="rounded-full border border-ink/10 bg-white px-3.5 py-1.5 text-[0.78rem] font-medium text-graphite"
                >
                  {chip}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/*
            Coluna visual. A imagem e o elemento LCP: renderiza em opacidade
            plena no HTML pre-renderizado, sem variante de entrada. Animar
            aqui deixaria a foto invisivel ate a hidratacao.
          */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-lavanda-200">
              <img
                src="/images/foto_dona (2).png"
                alt={`${CLINIC.responsavelTecnica}, responsável técnica da Oral Clinic, na sala de atendimento da clínica`}
                className="aspect-[4/5] w-full object-cover"
                width="960"
                height="1200"
                loading="eager"
                fetchpriority="high"
                decoding="async"
              />
            </div>

            {/* Credencial da responsavel tecnica, ancorada abaixo da foto. */}
            <div className="mt-4 flex items-baseline justify-between gap-4 border-t border-ink/10 pt-4">
              <p className="font-display text-[0.98rem] text-ink">{CLINIC.responsavelTecnica}</p>
              <p className="text-[0.78rem] font-medium uppercase tracking-[0.14em] text-graphite/70">
                {CLINIC.cro}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fio de transicao para a proxima secao. */}
      <div className="rule" />
    </section>
  );
}
