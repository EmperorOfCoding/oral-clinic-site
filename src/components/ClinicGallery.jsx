import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading.jsx';
import { stagger, fadeUp, inView } from '../lib/motion.js';

// Usando imagens placeholder do Unsplash focadas em odontologia moderna.
// Você pode substituir essas URLs pelos caminhos das suas fotos (ex: '/images/minha-foto.jpg')
const photos = [
  {
    id: 1,
    url: '/images/foto_estabelecimento.png',
    alt: 'Fachada e Recepção',
    className: 'md:col-span-2 md:row-span-2'
  },
  {
    id: 2,
    url: '/images/foto_1_oral_clinic.png',
    alt: 'Consultório Moderno',
    className: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 3,
    url: '/images/foto_2_oral_clinic.png',
    alt: 'Equipamentos de Última Geração',
    className: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 4,
    url: '/images/foto_3_oral_clinic.png',
    alt: 'Conforto para o Paciente',
    className: 'md:col-span-2 md:row-span-1'
  }
];

export default function ClinicGallery() {
  return (
    <section className="relative bg-cloud py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Nosso Espaço"
          title="Um ambiente preparado com carinho para você"
          description="Cada detalhe da nossa clínica foi pensado para transmitir acolhimento e tranquilidade, garantindo que você se sinta em casa e bem cuidado em todas as etapas."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[250px]"
        >
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              variants={fadeUp}
              className={`group relative overflow-hidden rounded-2xl bg-slate-200 ${photo.className}`}
            >
              <div className="h-full w-full">
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
