import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, inView } from '../lib/motion.js';

// Cabecalho padronizado de secao: eyebrow + titulo (H2) + descricao opcional.
export default function SectionHeading({ eyebrow, title, description, align = 'center', className = '' }) {
  const isCenter = align === 'center';
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      className={`${isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'} ${className}`}
    >
      {eyebrow && (
        <span className={`eyebrow ${isCenter ? 'justify-center' : ''}`}>
          <span className="h-px w-6 bg-brand-400" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-[2.7rem]">
        {title}
      </h2>
      {description && <p className="mt-4 text-lg leading-relaxed text-slate-600">{description}</p>}
    </motion.div>
  );
}
