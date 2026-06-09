import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading.jsx';
import { stagger, fadeUp, inView } from '../lib/motion.js';

const videos = [
  { id: 1, src: '/videos/edit/depoimento_1.mp4' },
  { id: 2, src: '/videos/edit/depoimento_2.mp4' },
  { id: 3, src: '/videos/edit/depoimento_3.mp4' },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Quem é cuidado, recomenda"
          title="O que dizem nossos pacientes"
          description="Aperte o play e conheça as histórias reais de quem confiou seu sorriso e sua saúde à Oral Clinic."
        />

        {/* 
          Carrossel horizontal no mobile, grid em telas maiores.
        */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-3 md:overflow-visible md:pb-0"
        >
          {videos.map((v) => (
            <motion.div
              key={v.id}
              variants={fadeUp}
              className="relative aspect-[9/16] w-[80vw] max-w-[320px] shrink-0 snap-center overflow-hidden rounded-3xl bg-slate-100 shadow-soft transition-transform hover:shadow-card md:w-full md:max-w-none"
            >
              <video
                src={v.src}
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
