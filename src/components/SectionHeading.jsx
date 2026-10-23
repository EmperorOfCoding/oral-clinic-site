import { motion } from 'framer-motion';
import { fadeUp, inView } from '../lib/motion.js';

// Cabecalho editorial de secao: rotulo + titulo (H2) + linha de apoio opcional.
// Alinhamento a esquerda por padrao para reforcar a leitura editorial.
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  tone = 'light',
  className = '',
}) {
  const isCenter = align === 'center';
  const isDark = tone === 'dark';

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      className={`${isCenter ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}
    >
      {eyebrow && (
        <span
          className={`eyebrow ${isCenter ? 'justify-center' : ''} ${
            isDark ? 'text-white/70 before:bg-champagne-light' : ''
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2 className={`mt-5 section-title ${isDark ? 'text-white' : ''}`}>{title}</h2>
      {lead && (
        <p className={`mt-5 section-lead ${isCenter ? 'mx-auto' : ''} ${isDark ? 'text-white/75' : ''}`}>
          {lead}
        </p>
      )}
    </motion.div>
  );
}
