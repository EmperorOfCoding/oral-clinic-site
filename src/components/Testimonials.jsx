import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import { stagger, fadeUp, inView } from '../lib/motion.js';
import { CTA_AGENDAR, CLINIC } from '../lib/site.js';

// Depoimentos em video gravados na clinica. Sao registros reais: a citacao em
// destaque reproduz a fala da paciente no proprio video, e os demais nao tem
// texto transcrito para nao atribuir ao paciente palavra que ele nao disse.
const destaque = {
  src: '/videos/depoimento-meire.mp4',
  poster: '/images/home/depoimento-meire-poster.webp',
  label: `Vídeo: a paciente Meire conta, ao lado da ${CLINIC.responsavelTecnica}, como foi o tratamento na Oral Clinic`,
};

const depoimentos = [
  { id: 1, src: '/videos/edit/depoimento_1.mp4', poster: '/images/home/depoimento-1-poster.webp' },
  { id: 2, src: '/videos/edit/depoimento_2.mp4', poster: '/images/home/depoimento-2-poster.webp' },
  { id: 3, src: '/videos/edit/depoimento_3.mp4', poster: '/images/home/depoimento-3-poster.webp' },
];

// Video com poster e botao de play proprio. Nada e baixado antes do clique
// (preload="none"); os controles nativos aparecem depois que o video comeca.
function VideoDepoimento({ src, poster, label, large = false }) {
  const video = useRef(null);
  const [started, setStarted] = useState(false);

  const play = () => {
    setStarted(true);
    video.current?.play().catch(() => {});
  };

  return (
    <div className="relative h-full w-full">
      <video
        ref={video}
        src={src}
        poster={poster}
        width="720"
        height="1280"
        controls={started}
        playsInline
        preload="none"
        aria-label={label}
        className="h-full w-full object-cover"
      />
      {!started && (
        <button
          type="button"
          onClick={play}
          aria-label={`Reproduzir ${label.charAt(0).toLowerCase()}${label.slice(1)}`}
          className="absolute inset-0 flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-brand-700"
        >
          <span
            className={`flex items-center justify-center rounded-full bg-ink/70 text-white backdrop-blur-sm transition-transform duration-200 hover:scale-105 ${
              large ? 'h-[72px] w-[72px]' : 'h-[52px] w-[52px]'
            }`}
          >
            <Play className={large ? 'h-7 w-7' : 'h-5 w-5'} fill="currentColor" strokeWidth={0} aria-hidden="true" />
          </span>
        </button>
      )}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-white py-20 sm:py-24 lg:pb-28">
      <div className="container-page">
        {/* Card em destaque: depoimento principal, em rosa suave. */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="grid items-center gap-10 rounded-[2rem] border border-[#e9c9dc]/50 bg-gradient-to-br from-[#fbeef5] to-[#f5eaf8] p-5 sm:p-8 md:grid-cols-[minmax(0,320px)_1fr] lg:grid-cols-[360px_1fr] lg:gap-20 lg:py-14 lg:pl-14 lg:pr-[72px]"
        >
          <div className="mx-auto aspect-[9/16] w-full max-w-[280px] sm:max-w-[360px] overflow-hidden rounded-[1.75rem] border border-ink/[0.07] bg-lavanda-100">
            <VideoDepoimento {...destaque} large />
          </div>

          <div className="pb-4 md:pb-0">
            <span className="eyebrow">Depoimento em vídeo</span>
            <h2 className="mt-6 font-display text-[2.2rem] font-normal leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.6rem] lg:text-[3rem]">
              “Fui muito bem acolhida.”
            </h2>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-graphite">
              A paciente Meire conta, ao lado da {CLINIC.responsavelTecnica}, como foi a experiência de
              tratamento na Oral Clinic, da recepção ao novo sorriso.
            </p>
            <div className="mt-7 border-t border-ink/10 pt-5">
              <p className="font-display text-[1.05rem] text-ink">Meire</p>
              <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-graphite/65">
                Paciente Oral Clinic
              </p>
            </div>
            <a href={CTA_AGENDAR} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">
              Agendar avaliação pelo WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Demais depoimentos, menores, na mesma secao. */}
        <div className="mt-16 grid gap-10 lg:mt-14 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
          <SectionHeading
            eyebrow="Mais depoimentos"
            title="Outros pacientes contam como foi."
            lead="Depoimentos gravados na própria clínica, em vídeo."
            className="[&_h2]:text-[1.75rem] sm:[&_h2]:text-[1.9rem]"
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden lg:overflow-visible lg:pb-0"
          >
            {depoimentos.map((depoimento) => (
              <motion.div
                key={depoimento.id}
                variants={fadeUp}
                className="aspect-[9/16] w-[60vw] max-w-[220px] shrink-0 snap-center overflow-hidden rounded-2xl border border-ink/[0.07] bg-lavanda-100 lg:w-[200px]"
              >
                <VideoDepoimento
                  src={depoimento.src}
                  poster={depoimento.poster}
                  label={`Vídeo de depoimento ${depoimento.id} de paciente da Oral Clinic`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
