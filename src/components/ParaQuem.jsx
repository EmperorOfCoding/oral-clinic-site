import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading.jsx';
import { stagger, fadeUp, inView } from '../lib/motion.js';
import { CTA_AGENDAR } from '../lib/site.js';

// Dores mais comuns de quem procura a clinica. As imagens sao ilustrativas
// (geradas por IA) e mostram apenas pacientes, nunca profissionais; o alt
// descreve a cena sem apresentar a pessoa como paciente da clinica.
const dores = [
  {
    numero: '01',
    dor: 'Perdi um dente.',
    descricao:
      'Mastigar ficou difícil, o espaço aparece quando você fala ou sorri, e os dentes vizinhos começam a se mexer.',
    ajuda: 'Implantes e próteses fixas repõem o dente perdido.',
    link: { label: 'Implantes dentários', href: '/implantes' },
    image: '/images/home/para-quem-perdi-dente.webp',
    alt: 'Imagem ilustrativa de mulher com a mão no rosto, incomodada ao mastigar um pão',
  },
  {
    numero: '02',
    dor: 'Minha prótese machuca.',
    descricao:
      'A dentadura solta ao falar ou comer, faz feridas na gengiva ou já não encaixa como antes.',
    ajuda: 'Uma prótese nova, ajustada à sua boca, ou fixada sobre implantes.',
    link: { label: 'Prótese dentária', href: '/protese' },
    image: '/images/home/para-quem-protese.webp',
    alt: 'Imagem ilustrativa das mãos de uma pessoa idosa segurando uma prótese dentária',
  },
  {
    numero: '03',
    dor: 'Tenho vergonha de sorrir.',
    descricao: 'Você evita fotos, cobre a boca ao rir ou desvia o rosto quando conversa com alguém.',
    ajuda: 'Clareamento, facetas e alinhamento, com resultado natural.',
    link: { label: 'Estética do sorriso', href: '/clareamento' },
    image: '/images/home/para-quem-vergonha.webp',
    alt: 'Imagem ilustrativa de mulher cobrindo a boca com a mão ao rir entre amigas',
  },
];

export default function ParaQuem() {
  return (
    <section id="para-quem" className="bg-lavanda-100 py-20 sm:py-28">
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-[1fr_380px] lg:items-end lg:gap-16">
          <SectionHeading
            eyebrow="Para quem é"
            title="Para quem sente que o sorriso está atrapalhando a vida."
          />
          <p className="section-lead">
            Se você se reconhece em alguma destas situações, a avaliação é o primeiro passo para
            entender o que pode ser feito no seu caso.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-12"
        >
          {dores.map((item) => (
            <motion.article key={item.numero} variants={fadeUp} className="flex flex-col">
              <div className="overflow-hidden rounded-[1.25rem] border border-ink/[0.07] bg-lavanda-200">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="aspect-[4/3] w-full object-cover md:aspect-[6/5]"
                  width="800"
                  height="800"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span className="mt-7 font-display text-[3.5rem] leading-none tracking-[-0.03em] text-brand-700 lg:text-[4.5rem]">
                {item.numero}
              </span>
              <h3 className="mt-5 font-display text-[1.6rem] font-normal leading-tight tracking-[-0.01em] text-ink lg:text-[1.75rem]">
                “{item.dor}”
              </h3>
              <p className="mb-6 mt-3 text-[0.97rem] leading-relaxed text-graphite">{item.descricao}</p>
              <div className="mt-auto border-t border-champagne/50 pt-5">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-champagne-dark">
                  Como ajudamos
                </p>
                <p className="mt-2 text-[0.94rem] leading-relaxed text-ink">{item.ajuda}</p>
                <a
                  href={item.link.href}
                  className="mt-3 inline-flex text-[0.83rem] font-semibold text-brand-700 underline decoration-champagne decoration-2 underline-offset-[6px] transition-colors hover:text-brand-800"
                >
                  {item.link.label}
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-16 flex flex-col gap-6 border-t border-ink/[0.09] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-[1.2rem] leading-snug text-ink lg:text-[1.25rem]">
            Não se viu aqui? Conte sua situação pelo WhatsApp e agende uma avaliação.
          </p>
          <a href={CTA_AGENDAR} target="_blank" rel="noopener noreferrer" className="btn-primary shrink-0">
            Agendar avaliação pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
